import graphicServices from '../services/GraphicServices.js'
const { scale, width, height } = graphicServices

export default class Food {
    constructor() {
        this.replace()
        this.x
        this.y
    }
    draw() {
        graphicServices.pixel(this.x, this.y, 'red');
    }

    _getRandomArbitrary(min, max) {
        return Math.floor(Math.floor(Math.random() * (Math.floor((max - scale) / scale - min + 1) + min)))* scale
    }

    replace() {
        const min = 0
        this.x = this._getRandomArbitrary(min, width) 
        this.y = this._getRandomArbitrary(min, height)
    }

    getLocation() {
        return { x: this.x, y: this.y }
    }
}