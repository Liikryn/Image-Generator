import Genome from "./GeneticAlgorithm/Genome";

class Text implements Genome<Text>
{

    public static target = ""
    private static mutationRate = 0.02

    private static alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890 .,!?()\""



    private static randomCharacter(): string
    {
        // Get random character from alphabet
        let index = Math.floor(Math.random() * Text.alphabet.length)
        return Text.alphabet[index]
    }



    private text: string
    private fitness: number = 0



    public constructor(text?: string)
    {
        if (text === undefined)
        {
            this.text = ""

            // Create string with same length as target
            for (let i = 0; i < Text.target.length; i++)
            {
                this.text += Text.randomCharacter()
            }
        }
        else
        {
            // Copies information
            this.text = text
        }

        this.calculateFitness()
    }

    private calculateFitness(): void
    {
        for (let i = 0; i < this.text.length; i++)
        {
            // Count matching characters
            if (this.text[i] === Text.target[i])
            {
                this.fitness++
            }
        }

        // Allow objects with higher fitness to be selected more often
        this.fitness = (this.fitness / this.text.length) ** 4
    }



    public getText(): string
    {
        return this.text
    }

    public getFitness(): number
    {
        return this.fitness
    }


    public mutate(): Text
    {
        let text = ""

        for (let i = 0; i < this.text.length; i++)
        {
            if (Math.random() < Text.mutationRate)
            {
                // Mutation resets character
                text += Text.randomCharacter()
            }
            else
            {
                // Keep previous character
                text += this.text[i]
            }
        }

        return new Text(text)
    }

}

export default Text
