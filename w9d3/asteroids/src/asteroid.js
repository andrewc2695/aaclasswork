const MovingObject = require("./moving_object");
const Util = require("./util");
const DEFAULT = {
    "color": "#808080",
    "radius": 15

}
function Asteroid() {
    this.color = DEFAULT["color"];
    this.radius = DEFAULT["radius"];
    this.pos = 
    this.vel = 
    MovingObject.call(this, )
}

Util.inherits(Asteroid, MovingObject);