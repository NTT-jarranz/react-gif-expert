import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('GifGrid tests', () => {
    const category = 'One Punch';
    test('should show loading', () => {
        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })
        render(<GifGrid category={category}></GifGrid>)
        expect(screen.getByText('Cargando...'));
        expect(screen.getByText(category));
    });
    test('should show items when images are loaded from useFetchGifs', () => {
        const gifs = [{
            id: 'ABC',
            title: 'Saitama',
            url: 'http://localhost.saitama.jpg'
        },
        {
            id: 'DEF',
            title: 'Goku',
            url: 'http://localhost.goku.jpg'
        }];
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        })
        render(<GifGrid category={category}></GifGrid>);
        expect(screen.getAllByRole('img').length).toBe(2);
    })
})