import Triangle from "./Triangle/Triangle"

class ImageDrawer
{

    public constructor(

        private triangles: Triangle[],
        private canvas: HTMLCanvasElement
    )
    { }



    public draw(): void
    {
        // Get drawing context for canvas
        let ctx = this.canvas.getContext("2d")!
        ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)

        for (let triangle of this.triangles)
        {
            let a = triangle.a
            let b = triangle.b
            let c = triangle.c
            let color = triangle.color

            // Draw triangles
            ctx.beginPath()
            ctx.lineTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.lineTo(c.x, c.y)

            ctx.fillStyle = `rgba(${ color.r }, ${ color.g }, ${ color.b }, ${ color.a })`
            ctx.fill()
        }
    }

}

export default ImageDrawer
