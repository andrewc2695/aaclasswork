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

/***/ "./src/dom_node_collection.js":
/*!************************************!*\
  !*** ./src/dom_node_collection.js ***!
  \************************************/
/***/ ((module) => {

eval("class DOMNodeCollection {\n    constructor (arrayHtml) {\n        this.arrayHtml = arrayHtml;\n    }\n\n    html (string) {\n        if(string === undefined) {\n            return this.arrayHtml[0].innerHTML;\n        } else {\n            this.arrayHtml.forEach(node => {\n                node.innerHTML = string;\n            });\n        }\n    }\n\n    empty(){\n        this.html(\"\");\n    }\n\n    append(){\n       const argsArray =  Array.from(arguments);\n       argsArray.forEach(argEle => {\n          this.arrayHtml.forEach(htmlEle => {\n              if(typeof argEle === 'string'){\n                  htmlEle.innerHTML += argEle;\n              }else{\n                  htmlEle.appendChild(argEle);\n              }\n          }) \n       })\n    }\n\n    addClass (newClass) {\n        this.arrayHtml.forEach(htmlEle => {\n            htmlEle.classList.add(newClass);\n        });\n    }\n\n    removeClass (className) {\n        this.arrayHtml.forEach(htmlEle => {\n            htmlEle.classList.remove(className);\n        })\n    }\n\n    attr (key, value) {\n        if(value === undefined) {\n            return this.arrayHtml[0].getAttribute(key);\n        } else {\n            this.arrayHtml.forEach(htmlEle => {\n                htmlEle.setAttribute(key, value);\n            });\n        }\n    \n    }\n\n    children(){\n        const childrenArr = [];\n        this.arrayHtml.forEach(htmlEle => {\n            childrenArr.push(htmlEle.childNodes);\n        });\n        return new DOMNodeCollection(childrenArr);\n    }\n\n    parent(){\n        const parentArr = [];\n        this.arrayHtml.forEach(htmlEle => {\n            parentArr.push(htmlEle.parentNode);\n        })\n        return new DOMNodeCollection(parentArr);\n    }\n\n    find(selector){\n        const found = [];\n        this.arrayHtml.forEach(htmlEle => {\n            found.push(htmlEle.querySelectorAll(selectors));\n        });\n        return new DOMNodeCollection(found);\n    }\n\n    remove(){\n        this.arrayHtml.forEach(htmlEle => {\n            htmlEle.parentNode.removeChild(htmlEle);\n        });\n    }\n}\n\n\nmodule.exports = DOMNodeCollection;\n\n//# sourceURL=webpack:///./src/dom_node_collection.js?");

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
eval("const DOMNodeCollection = __webpack_require__(/*! ./dom_node_collection */ \"./src/dom_node_collection.js\");\n\nwindow.$l = (arg) => {\n\n    if(arg instanceof HTMLElement) {\n        const domCollection = new DOMNodeCollection([arg]);\n        return domCollection;\n    } else{ \n        const nodeList = document.querySelectorAll(arg);\n        const nodesArray = [...nodeList];\n        const domCollection = new DOMNodeCollection(nodesArray);\n        return domCollection;\n    }\n}\n\n\n\n//# sourceURL=webpack:///./src/index.js?");
})();

/******/ })()
;