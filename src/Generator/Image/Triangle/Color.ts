class Color
{

    public static random(): Color
    {
        // Create color with random values
        return new Color(

            Math.floor(Math.random() * 256),
            Math.floor(Math.random() * 256),
            Math.floor(Math.random() * 256)
        )
    }



    public constructor(

        public r: number,
        public g: number,
        public b: number
    )
    { }

}

export default Color
