class Color
{

    public static random(): Color
    {
        // Create color with random values
        return new Color(

            Math.floor(Math.random() * 256),
            Math.floor(Math.random() * 256),
            Math.floor(Math.random() * 256),
            Math.random()
        )
    }



    public constructor(

        public r: number,
        public g: number,
        public b: number,
        public a: number
    )
    { }

}

export default Color
