let inputDirection = { x: 0, y: 0 }

/* Moving the snake */
window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            inputDirection = { x: 0, y: -1 } /* y -1 Moves Upwards */
            break
        case 'ArrowDown':
            inputDirection = { x: 0, y: 1 } /* y positive 1 Moves Downwards */
            break
        case 'ArrowLeft':
            inputDirection = { x: -1, y: 0 } /* x -1 Moves to the Left */
            break
        case 'ArrowRight':
            inputDirection = { x: 1, y: 0 } /* x  positive 1 Moves to the Right */
            break 
    }

})

export function getInputDirection() {
    return inputDirection
}