//------GRAPHICS ELEMENTS-------------


class GraphicServices {
    constructor() {
        this.c = document.getElementById("myCanvas");
        this.context = this.c.getContext("2d");
        this.width = this.context.canvas.clientWidth
        this.height = this.context.canvas.clientHeight
        this.scale = 40
    }

    background(color) {
        this.context.clearRect(0, 0, this.width, this.height);
        this.context.fillStyle = color;
        this.context.beginPath();
        this.context.rect(0, 0, this.width, this.height);
        this.context.fill();
    }
    pixel(x, y, color) {
        //rectangle
        this.context.fillStyle = color;
        this.context.beginPath();
        this.context.rect(x, y, this.scale, this.scale);
        this.context.fill();
        // board
        this.context.beginPath();
        this.context.lineWidth = "4";
        this.context.strokeStyle = "black";
        this.context.rect(x, y, this.scale, this.scale);
        this.context.stroke();
    }
    text(text, x, y, color) {
        this.context.fillStyle = color;
        this.context.font = `${this.scale}px Georgia`;
        this.context.fillText(text, x, y);
    }
}

const graphicServices = new GraphicServices();
Object.freeze(graphicServices);
export default graphicServices;