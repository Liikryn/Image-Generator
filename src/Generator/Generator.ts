import ImageMatcher from "./Image/ImageMatcher"
import ImageDrawer from "./Image/ImageDrawer"

class Generator
{

    public constructor(private canvas: HTMLCanvasElement) { }



    public generate(): void
    {
        // Run genetic algorithm
        let matcher = new ImageMatcher(1)

        for (let i = 0; i < 1; i++)
        {
            matcher.nextGeneration()
        }

        // Draw image
        let image = matcher.getBestGenome()
        let drawer = new ImageDrawer(image.getTriangles(), this.canvas)

        drawer.draw()
    }

}

export default Generator
