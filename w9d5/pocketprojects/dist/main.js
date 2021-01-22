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

/***/ "./src/clock.js":
/*!**********************!*\
  !*** ./src/clock.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Clock\n/* harmony export */ });\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n\n\nclass Clock {\n    constructor($ele){\n        this.clock = $ele;\n        this.currentTime = new Date();\n        this.hour = this.currentTime.getHours();\n        this.minute = this.currentTime.getMinutes();\n        this.second = this.currentTime.getSeconds();\n        setInterval(this._tick.bind(this), 1000);\n    }\n\n    _tick(){\n        this.second++;\n        if(this.second === 60){\n            this.second = 0;\n            this.minute++\n        }\n        if(this.minute === 60){\n            this.minute = 0;\n            this.hour++;\n        }\n        if(this.hour === 24){\n            this.hour = 0;\n        }\n        this.render();\n    };\n\n    printTime(){\n        return `${this.hour}:${this.minute}:${this.second}`;\n    }\n\n    render(){\n        (0,_warmup__WEBPACK_IMPORTED_MODULE_0__.htmlGenerator)(this.printTime(), this.clock)\n    }\n\n\n\n\n}\n\nconst clockElement = document.getElementById(\"clock\");\nconst clock = new Clock(clockElement);\n\n//# sourceURL=webpack://pocketprojects/./src/clock.js?");

/***/ }),

/***/ "./src/drop_down.js":
/*!**************************!*\
  !*** ./src/drop_down.js ***!
  \**************************/
/***/ (() => {

eval("\nconst dogs = {\n  \"Corgi\": \"https://www.akc.org/dog-breeds/cardigan-welsh-corgi/\",\n  \"Australian Shepherd\": \"https://www.akc.org/dog-breeds/australian-shepherd/\",\n  \"Affenpinscher\": \"https://www.akc.org/dog-breeds/affenpinscher/\",\n  \"American Staffordshire Terrier\": \"https://www.akc.org/dog-breeds/american-staffordshire-terrier/\",\n  \"Tosa\": \"https://www.akc.org/dog-breeds/tosa/\",\n  \"Labrador Retriever\": \"https://www.akc.org/dog-breeds/labrador-retriever/\",\n  \"French Bulldog\": \"https://www.akc.org/dog-breeds/french-bulldog/\" \n};\n\nfunction dogLinkCreator() {\n  let dogLinks = [];\n  let keys = Object.keys(dogs);\n  let values = Object.values(dogs);\n  for(let i = 0; i < keys.length; i++) {\n    let a = document.createElement(\"a\");\n    a.innerHTML = keys[i];\n    a.href = values[i];\n    let li = document.createElement(\"li\");\n    li.classList.add(\"dog-link\");\n    li.append(a);\n    dogLinks.push(li);\n  }\n  return dogLinks;\n}\n\nfunction attachDogLinks() {\n  let dogLinks = dogLinkCreator();\n  dogLinks.forEach((dog) => {\n    let dropdown = document.querySelector(\".drop-down-dog-list\")\n    dropdown.append(dog);\n  });\n}\n\nfunction handleEnter(){\n  let dropdown = document.querySelector(\".drop-down-dog-list\");\n  dropdown.classList.add(\"show\");\n}\n\nfunction handleLeave(){\n  let dropdown = document.querySelector(\".drop-down-dog-list\");\n  dropdown.classList.remove(\"show\");\n\n}\n\nattachDogLinks();\nlet dropDownArea = document.querySelector(\".drop-down-dog-nav\");\ndropDownArea.addEventListener(\"mouseenter\", handleEnter)\ndropDownArea.addEventListener(\"mouseleave\", handleLeave)\n\n//# sourceURL=webpack://pocketprojects/./src/drop_down.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _warmup__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./warmup */ \"./src/warmup.js\");\n/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock */ \"./src/clock.js\");\n\n\nlet dropdown = __webpack_require__(/*! ./drop_down */ \"./src/drop_down.js\");\n\nlet h2 = document.getElementById(\"party\")\n;(0,_warmup__WEBPACK_IMPORTED_MODULE_0__.htmlGenerator)(\"i <3 vanilla DOM manipulation\", h2)\n\n\n//# sourceURL=webpack://pocketprojects/./src/index.js?");

/***/ }),

/***/ "./src/warmup.js":
/*!***********************!*\
  !*** ./src/warmup.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"htmlGenerator\": () => /* binding */ htmlGenerator\n/* harmony export */ });\n\nconst partyHeader = document.getElementById('party');\n\nconst htmlGenerator = (string, htmlElement) => {\n    if (htmlElement.children) {\n        Array.from(htmlElement.children).forEach((child) => {\n            htmlElement.removeChild(child)\n        })\n    }\n    let p = document.createElement(\"p\");\n    p.innerText = string;\n    htmlElement.append(p);\n};\n\nhtmlGenerator('Party Time.', partyHeader);\n\n//# sourceURL=webpack://pocketprojects/./src/warmup.js?");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;