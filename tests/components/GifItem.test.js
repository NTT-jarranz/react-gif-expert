import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"; 

describe('GifItem test', () => {
    const title = "GifTitle";
    const url = "https://www.google.es/foto.jpg";

    test('should match snapshot', () => {
        const {container} = render(<GifItem title={title} url={url}></GifItem>);
        expect(container).toMatchSnapshot();
    });

    test('should show image with URL and alternate text', () =>{
        render(<GifItem title={title} url={url}></GifItem>);
        const {src, alt} = screen.getByRole('img');
        expect(src).toBe(url);
        expect(alt).toBe(title);
    });
    test('should show title in component', () => {
        render(<GifItem title={title} url={url}></GifItem>);
        expect(screen.getByText(title)).toBeTruthy();
    })
})