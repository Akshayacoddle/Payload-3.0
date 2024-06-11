"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/debounce-fn";
exports.ids = ["vendor-chunks/debounce-fn"];
exports.modules = {

/***/ "(rsc)/./node_modules/debounce-fn/index.js":
/*!*******************************************!*\
  !*** ./node_modules/debounce-fn/index.js ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\nconst mimicFn = __webpack_require__(/*! mimic-fn */ \"(rsc)/./node_modules/mimic-fn/index.js\");\n\nmodule.exports = (inputFunction, options = {}) => {\n\tif (typeof inputFunction !== 'function') {\n\t\tthrow new TypeError(`Expected the first argument to be a function, got \\`${typeof inputFunction}\\``);\n\t}\n\n\tconst {\n\t\twait = 0,\n\t\tbefore = false,\n\t\tafter = true\n\t} = options;\n\n\tif (!before && !after) {\n\t\tthrow new Error('Both `before` and `after` are false, function wouldn\\'t be called.');\n\t}\n\n\tlet timeout;\n\tlet result;\n\n\tconst debouncedFunction = function (...arguments_) {\n\t\tconst context = this;\n\n\t\tconst later = () => {\n\t\t\ttimeout = undefined;\n\n\t\t\tif (after) {\n\t\t\t\tresult = inputFunction.apply(context, arguments_);\n\t\t\t}\n\t\t};\n\n\t\tconst shouldCallNow = before && !timeout;\n\t\tclearTimeout(timeout);\n\t\ttimeout = setTimeout(later, wait);\n\n\t\tif (shouldCallNow) {\n\t\t\tresult = inputFunction.apply(context, arguments_);\n\t\t}\n\n\t\treturn result;\n\t};\n\n\tmimicFn(debouncedFunction, inputFunction);\n\n\tdebouncedFunction.cancel = () => {\n\t\tif (timeout) {\n\t\t\tclearTimeout(timeout);\n\t\t\ttimeout = undefined;\n\t\t}\n\t};\n\n\treturn debouncedFunction;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvZGVib3VuY2UtZm4vaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQWE7QUFDYixnQkFBZ0IsbUJBQU8sQ0FBQyx3REFBVTs7QUFFbEMsNkNBQTZDO0FBQzdDO0FBQ0EsNkVBQTZFLHFCQUFxQjtBQUNsRzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtbGF0ZXN0LXN0YXJ0ZXIvLi9ub2RlX21vZHVsZXMvZGVib3VuY2UtZm4vaW5kZXguanM/MjgyZCJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5jb25zdCBtaW1pY0ZuID0gcmVxdWlyZSgnbWltaWMtZm4nKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoaW5wdXRGdW5jdGlvbiwgb3B0aW9ucyA9IHt9KSA9PiB7XG5cdGlmICh0eXBlb2YgaW5wdXRGdW5jdGlvbiAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYEV4cGVjdGVkIHRoZSBmaXJzdCBhcmd1bWVudCB0byBiZSBhIGZ1bmN0aW9uLCBnb3QgXFxgJHt0eXBlb2YgaW5wdXRGdW5jdGlvbn1cXGBgKTtcblx0fVxuXG5cdGNvbnN0IHtcblx0XHR3YWl0ID0gMCxcblx0XHRiZWZvcmUgPSBmYWxzZSxcblx0XHRhZnRlciA9IHRydWVcblx0fSA9IG9wdGlvbnM7XG5cblx0aWYgKCFiZWZvcmUgJiYgIWFmdGVyKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdCb3RoIGBiZWZvcmVgIGFuZCBgYWZ0ZXJgIGFyZSBmYWxzZSwgZnVuY3Rpb24gd291bGRuXFwndCBiZSBjYWxsZWQuJyk7XG5cdH1cblxuXHRsZXQgdGltZW91dDtcblx0bGV0IHJlc3VsdDtcblxuXHRjb25zdCBkZWJvdW5jZWRGdW5jdGlvbiA9IGZ1bmN0aW9uICguLi5hcmd1bWVudHNfKSB7XG5cdFx0Y29uc3QgY29udGV4dCA9IHRoaXM7XG5cblx0XHRjb25zdCBsYXRlciA9ICgpID0+IHtcblx0XHRcdHRpbWVvdXQgPSB1bmRlZmluZWQ7XG5cblx0XHRcdGlmIChhZnRlcikge1xuXHRcdFx0XHRyZXN1bHQgPSBpbnB1dEZ1bmN0aW9uLmFwcGx5KGNvbnRleHQsIGFyZ3VtZW50c18pO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRjb25zdCBzaG91bGRDYWxsTm93ID0gYmVmb3JlICYmICF0aW1lb3V0O1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG5cblx0XHRpZiAoc2hvdWxkQ2FsbE5vdykge1xuXHRcdFx0cmVzdWx0ID0gaW5wdXRGdW5jdGlvbi5hcHBseShjb250ZXh0LCBhcmd1bWVudHNfKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xuXG5cdG1pbWljRm4oZGVib3VuY2VkRnVuY3Rpb24sIGlucHV0RnVuY3Rpb24pO1xuXG5cdGRlYm91bmNlZEZ1bmN0aW9uLmNhbmNlbCA9ICgpID0+IHtcblx0XHRpZiAodGltZW91dCkge1xuXHRcdFx0Y2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuXHRcdFx0dGltZW91dCA9IHVuZGVmaW5lZDtcblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIGRlYm91bmNlZEZ1bmN0aW9uO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/debounce-fn/index.js\n");

/***/ })

};
;