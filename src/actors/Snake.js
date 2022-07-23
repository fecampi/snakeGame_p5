import graphicServices from '../services/GraphicServices.js'
const { scale, width, height} = graphicServices



export default class Snake {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.xspeed = 1;
        this.yspeed = 0;
        this.total = 0;
        this.tail = [];
        this.gulpSound = new Audio("src/audios/gulp.mp3");
    }


    verifyEat(pos) {
        var d = this._getDistance(this.x, this.y, pos.x, pos.y);
        if (d < 1) {
            this.gulpSound.play()
            this.total++;
            return true;
        } else {
            return false;
        }
    }
    _getDistance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));
    }

    setDirection(direction) {
        switch (direction) {
            // left
            case "left":
                this.xspeed = -1;
                this.yspeed = 0;
                break;

            // up
            case "up":
                this.xspeed = 0;
                this.yspeed = -1;
                break;

            // right
            case "right":
                this.xspeed = 1;
                this.yspeed = 0;
                break;

            // down
            case "down":
                this.xspeed = 0;
                this.yspeed = 1;
                break;

            default:
                break;
        }
        return
    }

    verifyDeath() {
        for (var i = 0; i < this.tail.length; i++) {
            var pos = this.tail[i];
            var d = this._getDistance(this.x, this.y, pos.x, pos.y);
            if (d < 1) {
                this.total = 0;
                this.tail = [];
                return true
            }
        }
        return false
    }

    _limit(value, limit) {
        if (value >= limit) {
            return limit
        }
        if (value <= 0) {
            return 0
        }
        return value
    }

    update() {
        for (var i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1];
        }
        if (this.total >= 1) {
            this.tail[this.total - 1] = { x: this.x, y: this.y };
        }

        this.x = this.x + this.xspeed * scale;
        this.y = this.y + this.yspeed * scale;

        this.x = this._limit(this.x, width - scale);
        this.y = this._limit(this.y, height - scale);
        this._draw()
    }

    _score() {
        graphicServices.text(`SCORE: ${this.total}`, scale, scale, "yellow")
    }

    _draw() {
        graphicServices.pixel(this.x, this.y, 'yellow');
        for (var i = 0; i < this.tail.length; i++) {
            graphicServices.pixel(this.tail[i].x, this.tail[i].y, 'yellow');
        }
        this._score()
    }
}


