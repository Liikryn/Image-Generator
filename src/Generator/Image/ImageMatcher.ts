import GeneticAlgorithm from "../GeneticAlgorithm/GeneticAlgorithm"
import Image from "./Image"

class ImageMatcher extends GeneticAlgorithm<Image>
{

    public constructor(populationSize: number, target: string)
    {
        // Create population
        let population: Image[] = []

        for (let i = 0; i < populationSize; i++)
        {
            population[i] = new Image(target)
        }

        super(population)
    }

}

export default ImageMatcher
