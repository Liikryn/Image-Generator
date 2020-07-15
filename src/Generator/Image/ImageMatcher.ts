import GeneticAlgorithm from "../GeneticAlgorithm/GeneticAlgorithm"
import Image from "./Image"

class ImageMatcher extends GeneticAlgorithm<Image>
{

    public constructor(populationSize: number, mutationRate: number)
    {
        // Create population
        let population: Image[] = []

        for (let i = 0; i < populationSize; i++)
        {
            population[i] = new Image()
        }

        super(population, mutationRate)
    }



    public addTriangle(): void
    {
        // Add triangle to every image
        for (let image of this.population)
        {
            image.addTriangle()
        }
    }

}

export default ImageMatcher
