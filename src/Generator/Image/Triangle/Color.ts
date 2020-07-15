class Color
{

    private static randomColor(): number
    {
        return Math.floor(Math.random() * 256)
    }

    public static random(): Color
    {
        // Create color with random values
        return new Color(

            Color.randomColor(),
            Color.randomColor(),
            Color.randomColor(),
            Math.random()
        )
    }



    private constructor(

        public r: number,
        public g: number,
        public b: number,
        public a: number
    )
    { }



    public mutate(rate: number): Color
    {
        // Randomly mutates values
        let r = (Math.random() < rate) ? Color.randomColor() : this.r
        let g = (Math.random() < rate) ? Color.randomColor() : this.g
        let b = (Math.random() < rate) ? Color.randomColor() : this.b
        let a = (Math.random() < rate) ? Math.random() : this.a

        return new Color(r, g, b, a)
    }

}

export default Color
