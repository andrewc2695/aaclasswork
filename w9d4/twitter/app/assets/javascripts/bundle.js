/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((module) => {

class FollowToggle{
    constructor(el){
        this.$el = $(el);
        this.user_id = this.$el.data('user_id');
        this.followState = this.$el.data('initial-follow-state');
        this.render();
        this.$el.on('click', this.handleClick())
    }

    render(){
        if (this.followState){
            this.$el.html('Unfollow');
        }else{
            this.$el.html('Follow');
        }
    }

    handleClick(e){
        e.preventDefault
        if(this.followState){
            this.followState = false;
            $.ajax({
                method: 'DELETE',
                url: '/users/:user_id/follow',
                data: this.followState,
                dataType: 'JSON'
            })
        }else{
            this.followState = true;
            $.ajax({
                method: 'POST',
                url: '/users/:user_id/follow',
                data: this.followState,
                dataType: 'JSON'
            })
        }
    }
}

module.exports = FollowToggle;

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
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
let FT = __webpack_require__(/*! ./follow_toggle */ "./frontend/follow_toggle.js");

$(function(){
    $('button.follow-toggle').each ((i, button) => new FT(button));
});

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map