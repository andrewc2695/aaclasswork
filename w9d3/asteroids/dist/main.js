/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object */ \"./src/moving_object.js\");\nconst Util = __webpack_require__(/*! ./util */ \"./src/util.js\");\nconst DEFAULT = {\n    \"color\": \"#808080\",\n    \"radius\": 15\n\n};\n\n\nfunction Asteroid(obj) {\n    // this.whatever = \"\"\n    obj['color'] = DEFAULT[\"color\"];\n    obj['radius'] = DEFAULT[\"radius\"];\n    obj['vel'] = Util.randomVec(5);\n    MovingObject.call(this, obj);\n}\n\nUtil.inherits(Asteroid, MovingObject);\n\nmodule.exports = Asteroid;\n\nfunction Object(x){\n\n}\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Asteroid = __webpack_require__(/*! ./asteroid */ \"./src/asteroid.js\");\n\nfunction Game() {\n    this.asteroids = [];\n    this.addAsteroids();\n}\n\nGame.prototype.addAsteroids = function () {\n    for(let i = 0; i < Game.NUM_ASTEROIDS; i++){\n        this.asteroids.push(new Asteroid({\"pos\": this.randomPosition()}));\n    }\n}\n\nGame.prototype.randomPosition = function () {\n    let x = Math.random() * Game.DIM_X;\n    let y = Math.random() * Game.DIM_Y;\n    return [x, y];\n}\nGame.DIM_X = 300;\nGame.DIM_Y = 150;\nGame.NUM_ASTEROIDS = 9;  \n \nGame.prototype.draw = function (ctx) {\n    // clear board\n    // debugger\n    ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);\n    this.asteroids.forEach(asteroid => {\n        asteroid.draw(ctx);\n    })\n}\n\nGame.prototype.moveObjects = function () {\n    this.asteroids.forEach(asteroid => {\n        asteroid.move();\n    })\n}\n\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("function MovingObject(obj) {\n    this.pos = obj['pos'];\n    this.vel = obj['vel'];\n    this.radius = obj['radius'];\n    this.color = obj['color'];\n\n\n}\n\nMovingObject.prototype.draw = function draw(ctx) {\n    ctx.fillStyle = this.color;\n    ctx.beginPath();\n\n    ctx.arc(\n        this.pos[0],\n        this.pos[1],\n        this.radius,\n        0,\n        2 * Math.PI,\n        false\n    );\n\n    ctx.fill();\n}\n\nMovingObject.prototype.move = function (){\n    this.pos = [this.pos[0] + this.vel[0], this.pos[1] + this.vel[1]];\n}\n\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((module) => {

eval("const Util = {\n    inherits(ChildClass, ParentClass) {\n        ChildClass.prototype = Object.create(ParentClass.prototype);\n        ChildClass.prototype.constructor = ChildClass;\n    },\n\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n    // Scale the length of a vector by the given amount.\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    }\n}\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
eval("console.log(\"Webpack is working!\");\n\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\"); \nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\nconst Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nwindow.MovingObject = MovingObject;\n\n// const mo = new MovingObject({ \n//     'pos': [30, 30], \n//     'vel': [10, 10], \n//     'radius': 5, \n//     'color': '#00ff00' \n// });\n\n// const ast = new Asteroid({\n//      pos: [30, 30]\n// });\n\nwindow.addEventListener(\"DOMContentLoaded\", (event) => {\n    const CanvasEl = document.getElementById('game-canvas');\n    const ctx = CanvasEl.getContext('2d');\n    const gameV1 = new Game();\n    gameV1.draw(ctx);\n})\n\n\n\n//# sourceURL=webpack:///./src/index.js?");
})();

/******/ })()
;