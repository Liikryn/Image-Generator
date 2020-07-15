import Genome from "../GeneticAlgorithm/Genome"
import Triangle from "./Triangle/Triangle"
import Vector from "./Triangle/Vector"
import Color from "./Triangle/Color"

class Image implements Genome<Image>
{

    private triangles: Triangle[]
    private fitness: number = 0



    public constructor(triangles?: Triangle[])
    {
        if (triangles === undefined)
        {
            this.triangles = [new Triangle(new Vector(100, 100), new Vector(300, 100), new Vector(100, 200), Color.random())]
        }
        else
        {
            this.triangles = triangles
        }

        this.calculateFitness()
    }

    private calculateFitness(): void
    {
        this.fitness = 0
    }



    public getTriangles(): Triangle[]
    {
        return this.triangles
    }

    public getFitness(): number
    {
        return this.fitness
    }


    public mutate(): Image
    {
        return new Image(this.triangles)
    }

}

export default Image
