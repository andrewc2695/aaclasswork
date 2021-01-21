const Asteroid = require('./asteroid');

function Game() {
    this.asteroids = [];
    this.addAsteroids;
}

Game.prototype.addAsteroids = function () {
    this.asteroids.push(new Asteroid({"pos": this.randomPosition()}));
}

Game.prototype.randomPosition = function () {
    let x = Math.floor(Math.random()) * Math.floor(Game.DIM_X);
    let y = Math.floor(Math.random()) * Math.floor(Game.DIM_Y);
    return [x, y];
}
Game.DIM_X = 300;
Game.DIM_Y = 150;
// Game.NUM_ASTEROIDS =  
 
Game.prototype.draw = function (ctx) {
    // clear board
    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
    this.asteroids.forEach(asteroid => {
        asteroid.draw();
    })
}

Game.prototype.moveObjects = function () {
    this.asteroids.forEach(asteroid => {
        asteroid.move();
    })
}