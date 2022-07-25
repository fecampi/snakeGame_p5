import graphicServices from './services/GraphicServices.js'
import Snake from './actors/Snake.js'
import Food from './actors/Food.js'

//----------INIT PROPPS ----
var speed = 7
var speedIncrease = 0.1
var velocity = 0


//------------Create elements-----
const snake = new Snake();
const food = new Food();

// ---------GAME ENGINE---------
function draw() {
    graphicServices.background("black");
    const foodLocation = food.getLocation()
    if (snake.verifyEat(foodLocation)) {
        food.replace()
        speed += speedIncrease
        console.log(`velocity: ${velocity}`)
    }

    if (snake.verifyDeath()) {
        speed = 7
    }
    food.draw()
    snake.update();
    velocity = Math.round(1000 / speed)
    setTimeout(draw, velocity);

}
draw()

//-----------Keyboard Input-------------
window.addEventListener("keydown", (keyCode) => {
    switch (keyCode.key) {
        case "ArrowUp":
            snake.setDirection("up");
            break;

        case "ArrowDown":
            snake.setDirection("down");
            break;

        case "ArrowLeft":
            snake.setDirection("left");
            break;

        case "ArrowRight":
            snake.setDirection("right");
            break;
        default:
            break;
    }
});