"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/truncate-utf8-bytes";
exports.ids = ["vendor-chunks/truncate-utf8-bytes"];
exports.modules = {

/***/ "(rsc)/./node_modules/truncate-utf8-bytes/index.js":
/*!***************************************************!*\
  !*** ./node_modules/truncate-utf8-bytes/index.js ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar truncate = __webpack_require__(/*! ./lib/truncate */ \"(rsc)/./node_modules/truncate-utf8-bytes/lib/truncate.js\");\nvar getLength = Buffer.byteLength.bind(Buffer);\nmodule.exports = truncate.bind(null, getLength);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvdHJ1bmNhdGUtdXRmOC1ieXRlcy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiQUFBYTs7QUFFYixlQUFlLG1CQUFPLENBQUMsZ0ZBQWdCO0FBQ3ZDO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWxhdGVzdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL3RydW5jYXRlLXV0ZjgtYnl0ZXMvaW5kZXguanM/ZTlhYSJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciB0cnVuY2F0ZSA9IHJlcXVpcmUoXCIuL2xpYi90cnVuY2F0ZVwiKTtcbnZhciBnZXRMZW5ndGggPSBCdWZmZXIuYnl0ZUxlbmd0aC5iaW5kKEJ1ZmZlcik7XG5tb2R1bGUuZXhwb3J0cyA9IHRydW5jYXRlLmJpbmQobnVsbCwgZ2V0TGVuZ3RoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/truncate-utf8-bytes/index.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/truncate-utf8-bytes/lib/truncate.js":
/*!**********************************************************!*\
  !*** ./node_modules/truncate-utf8-bytes/lib/truncate.js ***!
  \**********************************************************/
/***/ ((module) => {

eval("\n\nfunction isHighSurrogate(codePoint) {\n  return codePoint >= 0xd800 && codePoint <= 0xdbff;\n}\n\nfunction isLowSurrogate(codePoint) {\n  return codePoint >= 0xdc00 && codePoint <= 0xdfff;\n}\n\n// Truncate string by size in bytes\nmodule.exports = function truncate(getLength, string, byteLength) {\n  if (typeof string !== \"string\") {\n    throw new Error(\"Input must be string\");\n  }\n\n  var charLength = string.length;\n  var curByteLength = 0;\n  var codePoint;\n  var segment;\n\n  for (var i = 0; i < charLength; i += 1) {\n    codePoint = string.charCodeAt(i);\n    segment = string[i];\n\n    if (isHighSurrogate(codePoint) && isLowSurrogate(string.charCodeAt(i + 1))) {\n      i += 1;\n      segment += string[i];\n    }\n\n    curByteLength += getLength(segment);\n\n    if (curByteLength === byteLength) {\n      return string.slice(0, i + 1);\n    }\n    else if (curByteLength > byteLength) {\n      return string.slice(0, i - segment.length + 1);\n    }\n  }\n\n  return string;\n};\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvdHJ1bmNhdGUtdXRmOC1ieXRlcy9saWIvdHJ1bmNhdGUuanMiLCJtYXBwaW5ncyI6IkFBQWE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixnQkFBZ0I7QUFDbEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1sYXRlc3Qtc3RhcnRlci8uL25vZGVfbW9kdWxlcy90cnVuY2F0ZS11dGY4LWJ5dGVzL2xpYi90cnVuY2F0ZS5qcz8wNzcwIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuZnVuY3Rpb24gaXNIaWdoU3Vycm9nYXRlKGNvZGVQb2ludCkge1xuICByZXR1cm4gY29kZVBvaW50ID49IDB4ZDgwMCAmJiBjb2RlUG9pbnQgPD0gMHhkYmZmO1xufVxuXG5mdW5jdGlvbiBpc0xvd1N1cnJvZ2F0ZShjb2RlUG9pbnQpIHtcbiAgcmV0dXJuIGNvZGVQb2ludCA+PSAweGRjMDAgJiYgY29kZVBvaW50IDw9IDB4ZGZmZjtcbn1cblxuLy8gVHJ1bmNhdGUgc3RyaW5nIGJ5IHNpemUgaW4gYnl0ZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gdHJ1bmNhdGUoZ2V0TGVuZ3RoLCBzdHJpbmcsIGJ5dGVMZW5ndGgpIHtcbiAgaWYgKHR5cGVvZiBzdHJpbmcgIT09IFwic3RyaW5nXCIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJJbnB1dCBtdXN0IGJlIHN0cmluZ1wiKTtcbiAgfVxuXG4gIHZhciBjaGFyTGVuZ3RoID0gc3RyaW5nLmxlbmd0aDtcbiAgdmFyIGN1ckJ5dGVMZW5ndGggPSAwO1xuICB2YXIgY29kZVBvaW50O1xuICB2YXIgc2VnbWVudDtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGNoYXJMZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvZGVQb2ludCA9IHN0cmluZy5jaGFyQ29kZUF0KGkpO1xuICAgIHNlZ21lbnQgPSBzdHJpbmdbaV07XG5cbiAgICBpZiAoaXNIaWdoU3Vycm9nYXRlKGNvZGVQb2ludCkgJiYgaXNMb3dTdXJyb2dhdGUoc3RyaW5nLmNoYXJDb2RlQXQoaSArIDEpKSkge1xuICAgICAgaSArPSAxO1xuICAgICAgc2VnbWVudCArPSBzdHJpbmdbaV07XG4gICAgfVxuXG4gICAgY3VyQnl0ZUxlbmd0aCArPSBnZXRMZW5ndGgoc2VnbWVudCk7XG5cbiAgICBpZiAoY3VyQnl0ZUxlbmd0aCA9PT0gYnl0ZUxlbmd0aCkge1xuICAgICAgcmV0dXJuIHN0cmluZy5zbGljZSgwLCBpICsgMSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKGN1ckJ5dGVMZW5ndGggPiBieXRlTGVuZ3RoKSB7XG4gICAgICByZXR1cm4gc3RyaW5nLnNsaWNlKDAsIGkgLSBzZWdtZW50Lmxlbmd0aCArIDEpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHJpbmc7XG59O1xuXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/truncate-utf8-bytes/lib/truncate.js\n");

/***/ })

};
;