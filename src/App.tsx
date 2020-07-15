import React from "react"

import Generator from "./Generator/Generator"

class App extends React.Component
{

    private canvasRef = React.createRef<HTMLCanvasElement>()



    public componentDidMount(): void
    {
        // Scale canvas to fit screen
        let canvas = this.canvasRef.current!;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Generate image
        this.generateImage(canvas);
    }

    private generateImage(canvas: HTMLCanvasElement): void
    {
        // Pass canvas to generator
        let generator = new Generator(canvas);
        generator.generate();
    }



    public render(): React.ReactElement
    {
        return (
            <div>
                <canvas ref={ this.canvasRef } />
            </div>
        )
    }

}

export default App
