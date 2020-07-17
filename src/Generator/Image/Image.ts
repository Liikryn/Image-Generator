import ImageDrawer from "./ImageDrawer"
import ImageComparer from "./ImageComparer"
import Genome from "../GeneticAlgorithm/Genome"
import Triangle from "./Triangle/Triangle"

class Image implements Genome<Image>
{

    private triangles: Triangle[] = []
    private fitness: number = 0



    public constructor(private target: ImageData, triangles?: Triangle[])
    {
        if (triangles === undefined)
        {
            // Stat with random triangle
            this.addTriangle()
        }
        else
        {
            this.triangles = triangles
        }

        this.calculateFitness()
    }

    private calculateFitness(): void
    {
        // Create canvas
        let canvas = document.createElement("canvas")

        // Scale canvas to match image
        canvas.width = this.target.width
        canvas.height = this.target.height

        // Draw image onto canvas
        let drawer = new ImageDrawer(this.triangles, canvas)
        drawer.draw()

        // Compare images
        let comparer = new ImageComparer(this.target, canvas)
        this.fitness = 1 / comparer.compare() ** 3
    }



    public getTriangles(): Triangle[]
    {
        return this.triangles
    }

    public getFitness(): number
    {
        return this.fitness
    }


    public mutate(rate: number): Image
    {
        let newTriangles: Triangle[] = []

        // Move triangles to new array
        for (let i = 0; i < this.triangles.length; i++)
        {
            if (i < this.triangles.length - 1)
            {
                newTriangles[i] = this.triangles[i]
            }
            else
            {
                // Mutate last triangle
                newTriangles[i] = this.triangles[i].mutate(rate)
            }
        }

        return new Image(this.target, newTriangles)
    }

    public addTriangle(): void
    {
        // Add random triangle
        this.triangles.push(Triangle.random(this.target.width, this.target.height))
    }

}

export default Image
