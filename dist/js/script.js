/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function() {

eval(" \r\n\r\nlet hamburger = document.querySelector('.hamburger');\r\nlet menu = document.querySelector('.menu');\r\n\r\nhamburger.addEventListener('click', () => {\r\n    hamburger.classList.toggle('hamburger__active');\r\n    menu.classList.toggle('menu_active');\r\n});\r\n\r\nmenu.addEventListener('click', function(e) {\r\n    if (e.target.closest('li')) {\r\n        hamburger.classList.remove('hamburger__active');\r\n        menu.classList.remove('menu_active');\r\n    };\r\n});\n\n//# sourceURL=webpack://gulp-start/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/main.js"]();
/******/ 	
/******/ })()
;