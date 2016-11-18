/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _sections = __webpack_require__(1);
	
	var _sections2 = _interopRequireDefault(_sections);
	
	var _switcher = __webpack_require__(2);
	
	var _switcher2 = _interopRequireDefault(_switcher);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	$(function () {
	  (0, _sections2.default)();
	  (0, _switcher2.default)();
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var sections = function sections() {
	  $('#calc').on('click', function () {
	    var parent = $('.pitstops');
	    if (parent.children().length == 0 || $('.pitstop').last()[0].value.length != 0) {
	      var child = $("<div class='stop'><input class='pitstop' placeholder='pitstop'><span class='delete-stop'>X</span></div>");
	      parent.append(child);
	    }
	    $('.delete-stop').on('click', function (e) {
	      $(e.target).parent().remove();
	    });
	  });
	};
	
	exports.default = sections;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	var switcher = function switcher() {
	  $('.switcher button').on('click', function (e) {
	    $(e.target).siblings().removeClass("active");
	    $(e.target).addClass("active");
	    if ($(e.target).text() == 'List') {
	      $('#map').attr('style', 'display: none');
	      $('#directions').attr('style', 'display: -webkit-flex; display: flex');
	    } else {
	      $('#directions').attr('style', 'display: none');
	      $('#map').attr('style', 'display: -webkit-flex; display: flex; overflow: hidden; position: relative');
	    };
	  });
	};
	
	exports.default = switcher;

/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map