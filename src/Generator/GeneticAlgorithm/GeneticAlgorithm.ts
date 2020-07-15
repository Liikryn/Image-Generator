import Genome from "./Genome"

class GeneticAlgorithm<T extends Genome<T>>
{

    private fitnessSum: number = 0



    public constructor(private population: T[]) { }



    public nextGeneration(): void
    {
        // Create new population
        let newPopulation: T[] = [this.getBestGenome()]
        this.calculateFitnessSum() // Calculate sum

        for (let i = 1; i < this.population.length; i++)
        {
            // Randomly select based on fitness
            newPopulation[i] = this.selectGenome().mutate()
        }

        this.population = newPopulation
    }

    public getBestGenome(): T
    {
        // Track best genome
        let bestGenome = this.population[0]

        for (let genome of this.population)
        {
            // If a better genome is found, replace it
            if (genome.getFitness() > bestGenome.getFitness())
            {
                bestGenome = genome
            }
        }

        return bestGenome
    }

    private calculateFitnessSum(): void
    {
        this.fitnessSum = 0

        for (let i = 0; i < this.population.length; i++)
        {
            // Add fitnesses
            this.fitnessSum += this.population[i].getFitness()
        }
    }


    private selectGenome(): T
    {
        // Select number
        let index = 0
        let random = Math.random() * this.fitnessSum

        // Figure out which genome number belongs to
        while (random > 0)
        {
            random -= this.population[index].getFitness()
            index++
        }

        return this.population[index - 1]
    }

}

export default GeneticAlgorithm
