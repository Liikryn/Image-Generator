import GeneticAlgorithm from "./GeneticAlgorithm/GeneticAlgorithm"
import Text from "./Text"

class Matcher extends GeneticAlgorithm<Text>
{

    public constructor(populationSize: number, target: string)
    {
        // Create population
        let population: Text[] = []

        for (let i = 0; i < populationSize; i++)
        {
            population[i] = new Text(target)
        }

        super(population)
    }

}

export default Matcher
