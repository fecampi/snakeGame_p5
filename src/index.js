import graphicServices from './services/GraphicServices.js'
import Snake from './actors/Snake.js'
import Food from './actors/Food.js'

//----------INIT PROPPS ----
var speed = 7
var speedIncrease = 1


//------------Create elements-----
const gameover = new Audio("src/audios/gameover.wav");
const snake = new Snake();
const food = new Food();

// ---------GAME ENGINE---------
function draw() {
    graphicServices.background("black");
    const foodLocation = food.getLocation()
    if (snake.verifyEat(foodLocation)) {
        food.replace()
        speed += speedIncrease
    }

    if (snake.verifyDeath()) {
        speed = 7
        gameover.play()
    }
    food.draw()
    snake.update();
    setTimeout(draw, 1000 / speed);

}
draw()

//-----------Keyboard Input-------------
document.onkeydown = (event) => {
    var keyCode;
    if (event == null) {
        keyCode = window.event.keyCode;
    }
    else {
        keyCode = event.keyCode;
    }

    switch (keyCode) {
        // left
        case 37:
            snake.setDirection("left");
            break;

        // up
        case 38:
            snake.setDirection("up");
            break;

        // right
        case 39:
            snake.setDirection("right");
            break;

        // down
        case 40:
            snake.setDirection("down");
            break;

        default:
            break;
    }
}