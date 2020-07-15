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
        let c = this.canvas.getContext("2d")!

        // Create empty background
        c.fillStyle = "white"
        c.fillRect(0, 0, this.canvas.width, this.canvas.height)

        // Draw all triangles
        for (let triangle of this.triangles)
        {
            triangle.draw(c)
        }
    }

}

export default ImageDrawer
