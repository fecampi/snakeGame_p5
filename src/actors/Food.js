import graphicServices from '../services/GraphicServices.js'
const { scale, width, height } = graphicServices

export default class Food {
    constructor() {
        this.replace()
    }
    draw() {
        graphicServices.pixel(this.x, this.y, 'red');
    }

    _getRandomArbitrary(max) {
        return Math.random() * max;
    }

    replace() {
        this.x = Math.floor(this._getRandomArbitrary(Math.floor(width / scale))) * scale
        this.y = Math.floor(this._getRandomArbitrary(Math.floor(height / scale))) * scale
    }

    getLocation() {
        return { x: this.x, y: this.y }
    }
}