import ImageMatcher from "./Image/ImageMatcher"
import ImageDrawer from "./Image/ImageDrawer"

class Generator
{

    public static populationSize = 10
    public static mutationRate = 0.05



    public constructor(private canvas: HTMLCanvasElement) { }



    public generate(): void
    {
        // Run genetic algorithm
        let matcher = new ImageMatcher(Generator.populationSize, Generator.mutationRate)

        for (let i = 0; i < 1; i++)
        {
            matcher.nextGeneration()
        }

        // Draw image
        let canvas = this.canvas
        let i = 0

        function draw()
        {
            let image = matcher.getBestGenome()
            let drawer = new ImageDrawer(image.getTriangles(), canvas)
            drawer.draw()

            matcher.nextGeneration()

            if (++i >= 100)
            {
                i = 0
                matcher.addTriangle()
            }

            requestAnimationFrame(draw)
        }
        draw()
    }

}

export default Generator
