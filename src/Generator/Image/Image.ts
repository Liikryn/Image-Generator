import Genome from "../GeneticAlgorithm/Genome"
import Triangle from "./Triangle/Triangle"

class Image implements Genome<Image>
{

    private triangles: Triangle[] = []
    private fitness: number = 0



    public constructor(triangles?: Triangle[]) // TODO: Target image
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
        // TODO: Calculate fitness
        this.fitness = Math.random()
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

        return new Image(newTriangles)
    }

    public addTriangle(): void
    {
        // Add random triangle
        this.triangles.push(Triangle.random(1280, 720))
    }

}

export default Image
