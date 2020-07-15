import ImageMatcher from "./Image/ImageMatcher"
import ImageDrawer from "./Image/ImageDrawer"

class Generator
{

    public static populationSize = 500
    public static mutationRate = 0.1



    public constructor(

        private canvas: HTMLCanvasElement,
        private image: ImageData
    )
    { }



    public generate(): void
    {
        // Run genetic algorithm
        let matcher = new ImageMatcher(this.image, Generator.populationSize, Generator.mutationRate)
        let canvas = this.canvas
        let i = 0

        function draw()
        {
            // Draw best image
            let image = matcher.getBestGenome()
            let drawer = new ImageDrawer(image.getTriangles(), canvas)
            drawer.draw()

            // Get next generation
            matcher.nextGeneration()

            // Add a new triangle every few generations
            if (++i >= 200)
            {
                i = 0
                matcher.addTriangle()
            }

            console.log(i)
            requestAnimationFrame(draw)
        }
        draw()
    }

}

export default Generator
