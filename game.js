class Snake {
    constructor() {
        this.x = 0;
        this.y = 0;
        this.xspeed = 1;
        this.yspeed = 0;
        this.total = 0;
        this.tail = [];
        this.gulpSound = new Audio("gulp.mp3");
        this.gameover = new Audio("gameover.wav");
    }


    eat(pos) {
        var d = dist(this.x, this.y, pos.x, pos.y);
        if (d < 1) {
            this.gulpSound.play()
            this.total++;
            return true;
        } else {
            return false;
        }
    }

    direction(x, y) {
        this.xspeed = x;
        this.yspeed = y;
    }

    death() {
        for (var i = 0; i < this.tail.length; i++) {
            var pos = this.tail[i];
            var d = dist(this.x, this.y, pos.x, pos.y);
            if (d < 1) {
                this.gameover.play()
                this.total = 0;
                this.tail = [];
            }
        }
    }

    update() {
        for (var i = 0; i < this.tail.length - 1; i++) {
            this.tail[i] = this.tail[i + 1];
        }
        if (this.total >= 1) {
            this.tail[this.total - 1] = { x: this.x, y: this.y };
        }

        this.x = this.x + this.xspeed * scl;
        this.y = this.y + this.yspeed * scl;

        this.x = constrain(this.x, 0, width - scl);
        this.y = constrain(this.y, 0, height - scl);
    }

    draw() {
        textSize(1*scl);
        text('SCORE', 10, 30);
        fill(0, 102, 153);
        text(this.total, 10, 60);
        fill(255);
        for (var i = 0; i < this.tail.length; i++) {
            rect(this.tail[i].x, this.tail[i].y, scl, scl);
        }
        rect(this.x, this.y, scl, scl);

    }
}



class Food {
    constructor() {
        this.replace()
    }
    draw() {
        fill(255, 0, 100);
        rect(this.x, this.y, scl, scl);
    }

    replace() {
        this.x = floor(random(floor(width / scl))) * scl
        this.y = floor(random(floor(height / scl))) * scl
    }

    getLocation() {
        return { x: this.x, y: this.y }
    }
}

var snake;
var scl = 40;
var food;

function setup() {
    createCanvas(1920, 1080);
    snake = new Snake();
    food = new Food();
    frameRate(10);
}


function draw() {
    background(50);
    if (snake.eat(food.getLocation())) {
        food.replace()
    }
    snake.death();
    snake.update();
    snake.draw();
    food.draw()
}



function keyPressed() {
    if (keyCode === UP_ARROW) {
        snake.direction(0, -1);
    } else if (keyCode === DOWN_ARROW) {
        snake.direction(0, 1);
    } else if (keyCode === RIGHT_ARROW) {
        snake.direction(1, 0);
    } else if (keyCode === LEFT_ARROW) {
        snake.direction(-1, 0);
    }
}