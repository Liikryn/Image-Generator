class Vector
{

    public static random(width: number, height: number): Vector
    {
        // Create vector with random values
        return new Vector(

            width,
            height,

            Math.random() * width,
            Math.random() * height
        )
    }



    private constructor(

        private width: number,
        private height: number,

        public x: number,
        public y: number
    )
    { }



    public mutate(rate: number): Vector
    {
        // Randomly mutates values
        let x = (Math.random() < rate) ? (Math.random() * this.width) : this.x
        let y = (Math.random() < rate) ? (Math.random() * this.height) : this.y

        return new Vector(this.width, this.height, x, y)
    }

}

export default Vector
