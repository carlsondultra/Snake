let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0}

/* Moving the snake */
window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            if (lastInputDirection.y !== 0) break /* So snake cannot 'reverse', can't move up if moving down. */
            inputDirection = { x: 0, y: -1 } /* y -1 Moves Upwards */
            break
        case 'ArrowDown':
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: 1 } /* y positive 1 Moves Downwards */
            break
        case 'ArrowLeft':
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: -1, y: 0 } /* x -1 Moves to the Left */
            break
        case 'ArrowRight':
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: 1, y: 0 } /* x  positive 1 Moves to the Right */
            break 
    }

})

export function getInputDirection() {
    lastInputDirection = inputDirection 
    return inputDirection
}