import React from "react"

import Generator from "./Generator/Generator"
import image from "./image.png"

class App extends React.Component
{

    private canvasRef = React.createRef<HTMLCanvasElement>()
    private imageRef = React.createRef<HTMLImageElement>()



    private onImageLoad(): void
    {
        // Scale canvas to fit screen
        let canvas = this.canvasRef.current!
        let c = canvas.getContext("2d")!
        let image = this.getImageData(this.imageRef.current!)

        // Resize and scale context
        canvas.width = 1920
        canvas.height = 1080
        c.scale(canvas.width / image.width, canvas.height / image.height)

        // Pass canvas to generator
        let generator = new Generator(canvas, image)
        generator.generate()
    }

    private getImageData(image: HTMLImageElement): ImageData
    {
        // Create canvas
        let canvas = document.createElement("canvas")
        let c = canvas.getContext("2d")!

        // Scale canvas to match image
        canvas.width = image.width
        canvas.height = image.height

        // Draw image
        c.drawImage(image, 0, 0)
        return c.getImageData(0, 0, image.width, image.height)
    }



    public render(): React.ReactElement
    {
        return (
            <div>
                <img
                    src={ image }
                    alt=""
                    hidden
                    ref={ this.imageRef }
                    onLoad={ this.onImageLoad.bind(this) }
                />
                <canvas ref={ this.canvasRef } />
            </div>
        )
    }

}

export default App
