import Genome from "../GeneticAlgorithm/Genome"
import Triangle from "./Triangle/Triangle"

class Image implements Genome<Image>
{

    private static mutationRate = 0.02

    private static alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890 .,!?()\"'"



    private static randomCharacter(): string
    {
        // Get random character from alphabet
        let index = Math.floor(Math.random() * Image.alphabet.length)
        return Image.alphabet[index]
    }



    private triangles: Triangle[] = []

    private text: string
    private fitness: number = 0



    public constructor(private target: string, text?: string)
    {
        if (text === undefined)
        {
            this.text = ""

            // Create string with same length as target
            for (let i = 0; i < this.target.length; i++)
            {
                this.text += Image.randomCharacter()
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
            if (this.text[i] === this.target[i])
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


    public mutate(): Image
    {
        let text = ""

        for (let i = 0; i < this.text.length; i++)
        {
            if (Math.random() < Image.mutationRate)
            {
                // Mutation resets character
                text += Image.randomCharacter()
            }
            else
            {
                // Keep previous character
                text += this.text[i]
            }
        }

        return new Image(this.target, text)
    }

}

export default Image
