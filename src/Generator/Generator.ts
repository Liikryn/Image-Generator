import Matcher from "./Matcher"

class Generator
{

    private c: CanvasRenderingContext2D



    public constructor(private canvas: HTMLCanvasElement)
    {
        this.c = canvas.getContext("2d")!
    }



    public generate(): void
    {
        // Run genetic algorithm
        let target = "Dale Xu"
        let matcher = new Matcher(100, target)

        while (matcher.getBestGenome().getText() !== target)
        {
            matcher.nextGeneration()
            console.log(matcher.getBestGenome().getText())
        }
    }

}

export default Generator
