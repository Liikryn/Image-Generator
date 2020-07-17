import ImageMatcher from "./Image/ImageMatcher"
import ImageDrawer from "./Image/ImageDrawer"

class Generator
{

    private static populationSize = 500
    private static minGenerations = 200
    private static mutationRate = 0.1



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

        let fitness = 0
        let i = 0

        function draw(): void
        {
            // Draw best image
            let image = matcher.getBestGenome()
            let drawer = new ImageDrawer(image.getTriangles(), canvas)
            drawer.draw()

            // New triangle must be better than previous before adding more triangles
            if (image.getFitness() > fitness && ++i >= Generator.minGenerations)
            {
                fitness = image.getFitness() // Save fitness without new triangle
                i = 0

                // Add a new triangle every few generations
                matcher.addTriangle()
            }

            // Get next generation
            matcher.nextGeneration()
            console.log(i, image.getFitness())

            requestAnimationFrame(draw)
        }
        draw()
    }

}

export default Generator
