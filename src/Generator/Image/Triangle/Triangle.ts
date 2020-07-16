
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



    private constructor(

        private a: Vector,
        private b: Vector,
        private c: Vector,

        private color: Color
    )
    { }



    public draw(c: CanvasRenderingContext2D): void
    {
        // Draw triangle
        c.beginPath()
        c.lineTo(this.a.x, this.a.y)
        c.lineTo(this.b.x, this.b.y)
        c.lineTo(this.c.x, this.c.y)

        // Set color and fill
        c.fillStyle = `rgba(${ this.color.r }, ${ this.color.g }, ${ this.color.b }, ${ this.color.a })`
        c.fill()
    }

    public mutate(rate: number): Triangle
    {
        // Mutate values with specified rate
        let a = this.a.mutate(rate)
        let b = this.b.mutate(rate)
        let c = this.c.mutate(rate)
        let color = this.color.mutate(rate)

        return new Triangle(a, b, c, color)
    }

}

export default Triangle
