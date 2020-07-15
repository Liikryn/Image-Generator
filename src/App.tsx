import React from "react"

import Generator from "./Generator/Generator"
import image from "./image2.png"

class App extends React.Component
{

    private canvasRef = React.createRef<HTMLCanvasElement>()
    private imageRef = React.createRef<HTMLImageElement>()



    private onImageLoad(): void
    {
        // Scale canvas to fit screen
        let canvas = this.canvasRef.current!
        let image = this.getImageData(this.imageRef.current!)

        canvas.width = image.width
        canvas.height = image.height

        // Generate image
        this.generateImage(canvas, image)
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

    private generateImage(canvas: HTMLCanvasElement, image: ImageData): void
    {
        // Pass canvas to generator
        let generator = new Generator(canvas, image)
        generator.generate()
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
