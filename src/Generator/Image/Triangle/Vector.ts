class Vector
{

    public static random(width: number, height: number): Vector
    {
        // Create vector with random values
        return new Vector(

            Math.random() * width,
            Math.random() * height
        )
    }



    public constructor(

        public x: number,
        public y: number
    )
    { }

}

export default Vector
