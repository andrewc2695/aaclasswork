const Asteroid = require('./asteroid');

function Game() {
    this.asteroids = [];
    this.addAsteroids();
}

Game.prototype.addAsteroids = function () {
    for(let i = 0; i < Game.NUM_ASTEROIDS; i++){
        this.asteroids.push(new Asteroid({"pos": this.randomPosition()}));
    }
}

Game.prototype.randomPosition = function () {
    let x = Math.random() * Game.DIM_X;
    let y = Math.random() * Game.DIM_Y;
    return [x, y];
}
Game.DIM_X = 300;
Game.DIM_Y = 150;
Game.NUM_ASTEROIDS = 9;  
 
Game.prototype.draw = function (ctx) {
    // clear board
    // debugger
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.asteroids.forEach(asteroid => {
        asteroid.draw(ctx);
    })
}

Game.prototype.moveObjects = function () {
    this.asteroids.forEach(asteroid => {
        asteroid.move();
    })
}


module.exports = Game;