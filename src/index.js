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
function animate() {
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
    setTimeout(animate, velocity);

}
animate()




function exit() {
    console.log("EXIT")
    if (window.history.length > 1) {
        window.history.back();
    }
    return
}



window.addEventListener('keydown', (evento) => {
    function keyPress(type) {
        const keys = {
            "ArrowUp": () => snake.setDirection("up"),
            "ArrowDown": () => snake.setDirection("down"),
            "ArrowLeft": () => snake.setDirection("left"),
            "ArrowRight": () => snake.setDirection("right"),
            "BrowserBack": () => exit(),
            "Exit": () => exit(),
            "default": () => { return },
        };
        (keys[type] || keys['default'])();
    }
    keyPress(evento.key)
});

