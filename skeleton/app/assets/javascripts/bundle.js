/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((module) => {

class FollowToggle {
    constructor(el) {
        const $el = $(el);
        this.$el = $el;
        this.userId = $el.attr("data-user-id");
        this.followState = $el.attr("data-initial-follow-state");
        this.render();
    }

    render() {
        if (this.followState === "unfollowed") {
            this.$el.html("Follow!");
        } else {
            this.$el.html("Unfollow!");
        }
    }

    handleClick() {
        if (this.followState === "unfollowed") {
            return $.ajax({
                method: "POST",
                url: "/users/:id/follow",
                success: response => {
                    this.followState = 'followed';
                    this.render();
                },

            }) 
        } else {
            return $.ajax({
                method: "DELETE",
                url: "/users/:id/follow",
                success: response => {
                    this.followState = 'unfollowed';
                    this.render();
                },
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
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
const FollowToggle = __webpack_require__(/*! ./follow_toggle.js */ "./frontend/follow_toggle.js");

$(function() {
  $("button.follow-toggle").each(function (idx, $el) {new FollowToggle($el);}), 
  $("button.follow-toggle").on("submit", e => {
    e.preventDefault();
    handleClick();
  })
  // $(),
})
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map