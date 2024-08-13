import { AddCategory } from "../../src/components/AddCategory"
import { fireEvent, render, screen } from "@testing-library/react"

describe('AddCategory test', () => {
    test('should change value in input box', () => {
        render(<AddCategory onNewCategory={ () => {}}></AddCategory>)
        const input = screen.getByRole('textbox');
        fireEvent.input(input, {target: {value: 'Saitama'}});
        expect(input.value).toBe('Saitama');
    });

    test('should call onNewCategory if input has a value', () => {
        const inputValue = 'Saitama';
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={ onNewCategory }></AddCategory>)
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);
        expect(input.value).toBe('');
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
    })
    test('should not call onNewCategory if input is empty', () => {
        const onNewCategory = jest.fn();
        render(<AddCategory onNewCategory={ onNewCategory }></AddCategory>)
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        expect(onNewCategory).not.toHaveBeenCalled();


    })
})