import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp"

describe('GifExpertApp test', () => {
    test('should render new category when it is in input', () => {
        const inputValue = 'Saitama';
        const inputValue2 = 'Dragon Ball';
        render(<GifExpertApp></GifExpertApp>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);
        fireEvent.input(input, {target: {value: inputValue2}});
        fireEvent.submit(form);
        expect(screen.getByText(inputValue)).toBeTruthy();
        expect(screen.getByText(inputValue2)).toBeTruthy();
        cleanup();
    });
    test('should not render new category when it already exists', () => {
        const inputValue = 'Saitama';
        render(<GifExpertApp></GifExpertApp>);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');
        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);
        fireEvent.input(input, {target: {value: inputValue}});
        fireEvent.submit(form);
        expect(screen.getAllByText(inputValue).length).toBe(1);
        cleanup();
    })
})