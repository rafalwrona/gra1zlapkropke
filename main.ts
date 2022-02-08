input.onButtonPressed(Button.A, function () {
    if (sprite.get(LedSpriteProperty.X) == 2) {
        game.addScore(1)
    } else {
        game.gameOver()
    }
})
let sprite: game.LedSprite = null
sprite = game.createSprite(2, 2)
game.setScore(0)
/**
 * Złap kropkę gdy jest na  środku
 */
basic.forever(function () {
    sprite.move(1)
    sprite.ifOnEdgeBounce()
    if (game.score() <= 5) {
        basic.pause(500)
    } else if (game.score() > 5 && game.score() <= 10) {
        basic.pause(400)
    } else if (game.score() > 10 && game.score() < 20) {
        basic.pause(300)
    } else {
        basic.pause(200)
    }
})
