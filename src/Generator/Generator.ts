import GeneticAlgorithm from "./GeneticAlgorithm/GeneticAlgorithm"
import Text from "./Text"

class Generator
{

    private c: CanvasRenderingContext2D



    public constructor(private canvas: HTMLCanvasElement)
    {
        this.c = canvas.getContext("2d")!
    }



    public generate(): void
    {
        // Create population
        Text.target = "Dale Xu"
        let population: Text[] = []

        for (let i = 0; i < 100; i++)
        {
            population[i] = new Text()
        }

        // Run genetic algorithm
        let ga = new GeneticAlgorithm<Text>(population)

        while (ga.getBestGenome().getText() !== Text.target)
        {
            ga.nextGeneration()
            console.log(ga.getBestGenome().getText())
        }
    }

}

export default Generator
