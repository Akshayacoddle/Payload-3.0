"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/unicorn-magic";
exports.ids = ["vendor-chunks/unicorn-magic"];
exports.modules = {

/***/ "(rsc)/./node_modules/unicorn-magic/default.js":
/*!***********************************************!*\
  !*** ./node_modules/unicorn-magic/default.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   delay: () => (/* binding */ delay)\n/* harmony export */ });\nasync function delay({seconds, milliseconds} = {}) {\n\tlet duration;\n\tif (typeof seconds === 'number') {\n\t\tduration = seconds * 1000;\n\t} else if (typeof milliseconds === 'number') {\n\t\tduration = milliseconds;\n\t} else {\n\t\tthrow new TypeError('Expected an object with either `seconds` or `milliseconds`.');\n\t}\n\n\treturn new Promise(resolve => {\n\t\tsetTimeout(resolve, duration);\n\t});\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvdW5pY29ybi1tYWdpYy9kZWZhdWx0LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxzQkFBc0IsdUJBQXVCLElBQUk7QUFDeEQ7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUU7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtbGF0ZXN0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdW5pY29ybi1tYWdpYy9kZWZhdWx0LmpzPzQ5N2MiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGF5KHtzZWNvbmRzLCBtaWxsaXNlY29uZHN9ID0ge30pIHtcblx0bGV0IGR1cmF0aW9uO1xuXHRpZiAodHlwZW9mIHNlY29uZHMgPT09ICdudW1iZXInKSB7XG5cdFx0ZHVyYXRpb24gPSBzZWNvbmRzICogMTAwMDtcblx0fSBlbHNlIGlmICh0eXBlb2YgbWlsbGlzZWNvbmRzID09PSAnbnVtYmVyJykge1xuXHRcdGR1cmF0aW9uID0gbWlsbGlzZWNvbmRzO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0V4cGVjdGVkIGFuIG9iamVjdCB3aXRoIGVpdGhlciBgc2Vjb25kc2Agb3IgYG1pbGxpc2Vjb25kc2AuJyk7XG5cdH1cblxuXHRyZXR1cm4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG5cdFx0c2V0VGltZW91dChyZXNvbHZlLCBkdXJhdGlvbik7XG5cdH0pO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/unicorn-magic/default.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/unicorn-magic/node.js":
/*!********************************************!*\
  !*** ./node_modules/unicorn-magic/node.js ***!
  \********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   delay: () => (/* reexport safe */ _default_js__WEBPACK_IMPORTED_MODULE_1__.delay),\n/* harmony export */   toPath: () => (/* binding */ toPath)\n/* harmony export */ });\n/* harmony import */ var node_url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! node:url */ \"node:url\");\n/* harmony import */ var _default_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default.js */ \"(rsc)/./node_modules/unicorn-magic/default.js\");\n\n\nfunction toPath(urlOrPath) {\n\treturn urlOrPath instanceof URL ? (0,node_url__WEBPACK_IMPORTED_MODULE_0__.fileURLToPath)(urlOrPath) : urlOrPath;\n}\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvdW5pY29ybi1tYWdpYy9ub2RlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBdUM7O0FBRWhDO0FBQ1AsbUNBQW1DLHVEQUFhO0FBQ2hEOztBQUU2QiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtbGF0ZXN0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvdW5pY29ybi1tYWdpYy9ub2RlLmpzP2ZhMTMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtmaWxlVVJMVG9QYXRofSBmcm9tICdub2RlOnVybCc7XG5cbmV4cG9ydCBmdW5jdGlvbiB0b1BhdGgodXJsT3JQYXRoKSB7XG5cdHJldHVybiB1cmxPclBhdGggaW5zdGFuY2VvZiBVUkwgPyBmaWxlVVJMVG9QYXRoKHVybE9yUGF0aCkgOiB1cmxPclBhdGg7XG59XG5cbmV4cG9ydCAqIGZyb20gJy4vZGVmYXVsdC5qcyc7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/unicorn-magic/node.js\n");

/***/ })

};
;