"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-array-buffer";
exports.ids = ["vendor-chunks/is-array-buffer"];
exports.modules = {

/***/ "(ssr)/./node_modules/is-array-buffer/index.js":
/*!***********************************************!*\
  !*** ./node_modules/is-array-buffer/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar callBind = __webpack_require__(/*! call-bind */ \"(ssr)/./node_modules/call-bind/index.js\");\nvar callBound = __webpack_require__(/*! call-bind/callBound */ \"(ssr)/./node_modules/call-bind/callBound.js\");\nvar GetIntrinsic = __webpack_require__(/*! get-intrinsic */ \"(ssr)/./node_modules/get-intrinsic/index.js\");\n\nvar $ArrayBuffer = GetIntrinsic('%ArrayBuffer%', true);\n/** @type {undefined | ((receiver: ArrayBuffer) => number) | ((receiver: unknown) => never)} */\nvar $byteLength = callBound('ArrayBuffer.prototype.byteLength', true);\nvar $toString = callBound('Object.prototype.toString');\n\n// in node 0.10, ArrayBuffers have no prototype methods, but have an own slot-checking `slice` method\nvar abSlice = !!$ArrayBuffer && !$byteLength && new $ArrayBuffer(0).slice;\nvar $abSlice = !!abSlice && callBind(abSlice);\n\n/** @type {import('.')} */\nmodule.exports = $byteLength || $abSlice\n\t? function isArrayBuffer(obj) {\n\t\tif (!obj || typeof obj !== 'object') {\n\t\t\treturn false;\n\t\t}\n\t\ttry {\n\t\t\tif ($byteLength) {\n\t\t\t\t// @ts-expect-error no idea why TS can't handle the overload\n\t\t\t\t$byteLength(obj);\n\t\t\t} else {\n\t\t\t\t// @ts-expect-error TS chooses not to type-narrow inside a closure\n\t\t\t\t$abSlice(obj, 0);\n\t\t\t}\n\t\t\treturn true;\n\t\t} catch (e) {\n\t\t\treturn false;\n\t\t}\n\t}\n\t: $ArrayBuffer\n\t\t// in node 0.8, ArrayBuffers have no prototype or own methods, but also no Symbol.toStringTag\n\t\t? function isArrayBuffer(obj) {\n\t\t\treturn $toString(obj) === '[object ArrayBuffer]';\n\t\t}\n\t\t: function isArrayBuffer(obj) { // eslint-disable-line no-unused-vars\n\t\t\treturn false;\n\t\t};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaXMtYXJyYXktYnVmZmVyL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFhOztBQUViLGVBQWUsbUJBQU8sQ0FBQywwREFBVztBQUNsQyxnQkFBZ0IsbUJBQU8sQ0FBQyx3RUFBcUI7QUFDN0MsbUJBQW1CLG1CQUFPLENBQUMsa0VBQWU7O0FBRTFDO0FBQ0EsV0FBVyxrRkFBa0Y7QUFDN0Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVyxhQUFhO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWxhdGVzdC1zdGFydGVyLy4vbm9kZV9tb2R1bGVzL2lzLWFycmF5LWJ1ZmZlci9pbmRleC5qcz8zYWJmIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIGNhbGxCaW5kID0gcmVxdWlyZSgnY2FsbC1iaW5kJyk7XG52YXIgY2FsbEJvdW5kID0gcmVxdWlyZSgnY2FsbC1iaW5kL2NhbGxCb3VuZCcpO1xudmFyIEdldEludHJpbnNpYyA9IHJlcXVpcmUoJ2dldC1pbnRyaW5zaWMnKTtcblxudmFyICRBcnJheUJ1ZmZlciA9IEdldEludHJpbnNpYygnJUFycmF5QnVmZmVyJScsIHRydWUpO1xuLyoqIEB0eXBlIHt1bmRlZmluZWQgfCAoKHJlY2VpdmVyOiBBcnJheUJ1ZmZlcikgPT4gbnVtYmVyKSB8ICgocmVjZWl2ZXI6IHVua25vd24pID0+IG5ldmVyKX0gKi9cbnZhciAkYnl0ZUxlbmd0aCA9IGNhbGxCb3VuZCgnQXJyYXlCdWZmZXIucHJvdG90eXBlLmJ5dGVMZW5ndGgnLCB0cnVlKTtcbnZhciAkdG9TdHJpbmcgPSBjYWxsQm91bmQoJ09iamVjdC5wcm90b3R5cGUudG9TdHJpbmcnKTtcblxuLy8gaW4gbm9kZSAwLjEwLCBBcnJheUJ1ZmZlcnMgaGF2ZSBubyBwcm90b3R5cGUgbWV0aG9kcywgYnV0IGhhdmUgYW4gb3duIHNsb3QtY2hlY2tpbmcgYHNsaWNlYCBtZXRob2RcbnZhciBhYlNsaWNlID0gISEkQXJyYXlCdWZmZXIgJiYgISRieXRlTGVuZ3RoICYmIG5ldyAkQXJyYXlCdWZmZXIoMCkuc2xpY2U7XG52YXIgJGFiU2xpY2UgPSAhIWFiU2xpY2UgJiYgY2FsbEJpbmQoYWJTbGljZSk7XG5cbi8qKiBAdHlwZSB7aW1wb3J0KCcuJyl9ICovXG5tb2R1bGUuZXhwb3J0cyA9ICRieXRlTGVuZ3RoIHx8ICRhYlNsaWNlXG5cdD8gZnVuY3Rpb24gaXNBcnJheUJ1ZmZlcihvYmopIHtcblx0XHRpZiAoIW9iaiB8fCB0eXBlb2Ygb2JqICE9PSAnb2JqZWN0Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR0cnkge1xuXHRcdFx0aWYgKCRieXRlTGVuZ3RoKSB7XG5cdFx0XHRcdC8vIEB0cy1leHBlY3QtZXJyb3Igbm8gaWRlYSB3aHkgVFMgY2FuJ3QgaGFuZGxlIHRoZSBvdmVybG9hZFxuXHRcdFx0XHQkYnl0ZUxlbmd0aChvYmopO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUyBjaG9vc2VzIG5vdCB0byB0eXBlLW5hcnJvdyBpbnNpZGUgYSBjbG9zdXJlXG5cdFx0XHRcdCRhYlNsaWNlKG9iaiwgMCk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cdDogJEFycmF5QnVmZmVyXG5cdFx0Ly8gaW4gbm9kZSAwLjgsIEFycmF5QnVmZmVycyBoYXZlIG5vIHByb3RvdHlwZSBvciBvd24gbWV0aG9kcywgYnV0IGFsc28gbm8gU3ltYm9sLnRvU3RyaW5nVGFnXG5cdFx0PyBmdW5jdGlvbiBpc0FycmF5QnVmZmVyKG9iaikge1xuXHRcdFx0cmV0dXJuICR0b1N0cmluZyhvYmopID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nO1xuXHRcdH1cblx0XHQ6IGZ1bmN0aW9uIGlzQXJyYXlCdWZmZXIob2JqKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/is-array-buffer/index.js\n");

/***/ })

};
;