import Vector from "./Vector"
import Color from "./Color"

class Triangle
{

    public static random(width: number, height: number): Triangle
    {
        // Create random triangle
        return new Triangle(

            Vector.random(width, height),
            Vector.random(width, height),
            Vector.random(width, height),

            Color.random()
        )
    }



    public constructor(

        public a: Vector,
        public b: Vector,
        public c: Vector,

        public color: Color
    )
    { }

}

export default Triangle
