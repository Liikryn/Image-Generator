import Color from "./Triangle/Color"

class ImageComparer
{

    private canvas: ImageData



    public constructor(private target: ImageData, canvas: HTMLCanvasElement)
    {
        // Get image data of canvas
        this.canvas = canvas.getContext("2d")!.getImageData(0, 0, canvas.width, canvas.height)!
    }



    public compare(): number
    {
        let targetData = this.target.data
        let canvasData = this.canvas.data

        let sum = 0

        for (let i = 0; i < targetData.length; i += 4)
        {
            // Get color for pixel
            let target = new Color(targetData[i], targetData[i + 1], targetData[i + 2]) // We don't care about alpha
            let canvas = new Color(canvasData[i], canvasData[i + 1], canvasData[i + 2])

            // Calculate difference
            let difference = target.difference(canvas) / 765 // Make smaller to avoid overflow
            sum += difference
        }

        // Make comparison independent of resolution
        return sum / (this.target.width * this.target.height) // 0 = same, 1 = opposite
    }

}

export default ImageComparer
