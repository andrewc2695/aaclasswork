console.log("Webpack is working!");

const MovingObject = require("./moving_object.js"); 
const Asteroid = require("./asteroid.js");
const Util = require("./util.js");
window.MovingObject = MovingObject;

// const mo = new MovingObject({ 
//     'pos': [30, 30], 
//     'vel': [10, 10], 
//     'radius': 5, 
//     'color': '#00ff00' 
// });

// const ast = new Asteroid({
//      pos: [30, 30]
// });

window.addEventListener("DOMContentLoaded", (event) => {
    const CanvasEl = document.getElementById('game-canvas');
    const ctx = CanvasEl.getContext('2d');
    const gameV1 = new Game();
    gameV1.draw(ctx);
})

