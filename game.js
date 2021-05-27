import {update as updateSnake, draw as drawSnake, SNAKE_SPEED} from './snake.js'

let lastRenderTime = 0
const gameBoard = document.getElementById('game-board')

/*Creating Game Loop*/
function main(currentTime) {
    window.requestAnimationFrame(main) 
    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000 /*Converting from milliseconds to seconds*/
    if (secondsSinceLastRender < 1 / SNAKE_SPEED) return 
    
    lastRenderTime = currentTime

    update()
    draw()
    
}

window.requestAnimationFrame(main)

function update() {
    updateSnake()
}

function draw(){
    drawSnake(gameBoard)
}