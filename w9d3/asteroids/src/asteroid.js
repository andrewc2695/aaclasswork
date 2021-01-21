const MovingObject = require("./moving_object");
const Util = require("./util");
const DEFAULT = {
    "color": "#808080",
    "radius": 15

};


function Asteroid(obj) {
    // this.whatever = ""
    obj['color'] = DEFAULT["color"];
    obj['radius'] = DEFAULT["radius"];
    obj['vel'] = Util.randomVec(5);
    MovingObject.call(this, obj);
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;

function Object(x){

}