/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./babel-loader/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./babel-loader/index.js":
/*!*******************************!*\
  !*** ./babel-loader/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n__webpack_require__(/*! ./master.css */ \"./babel-loader/master.css\");\n\nvar _message = __webpack_require__(/*! ./message.js */ \"./babel-loader/message.js\");\n\n// Importación de archivos JS (Soporte al estándar ECMAScript2015)\n\n/* Entry Point */\nvar message = _message.firstMessage;\n(0, _message.delayedMessage)();\n\ndocument.write(message);\nconsole.log(message);\n\n//# sourceURL=webpack:///./babel-loader/index.js?");

/***/ }),

/***/ "./babel-loader/make-message.js":
/*!**************************************!*\
  !*** ./babel-loader/make-message.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n/* Crea una función que retorna un elemento 'p' con un texto dentro de el */\nfunction makeMessage(msg) {\n    var el = document.createElement('p');\n    el.textContent = msg;\n    return el;\n}\n\nexports.default = makeMessage; // Exporta por defecto este módulo\n\n//# sourceURL=webpack:///./babel-loader/make-message.js?");

/***/ }),

/***/ "./babel-loader/master.css":
/*!*********************************!*\
  !*** ./babel-loader/master.css ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./babel-loader/master.css?");

/***/ }),

/***/ "./babel-loader/message.js":
/*!*********************************!*\
  !*** ./babel-loader/message.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _renderToDom = __webpack_require__(/*! ./render-to-dom.js */ \"./babel-loader/render-to-dom.js\");\n\nvar _renderToDom2 = _interopRequireDefault(_renderToDom);\n\nvar _makeMessage = __webpack_require__(/*! ./make-message.js */ \"./babel-loader/make-message.js\");\n\nvar _makeMessage2 = _interopRequireDefault(_makeMessage);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar waitTime = new Promise(function (bien, mal) {\n    /* Por Standar se usan ( response, reject ) como nombres de atributo */\n    setTimeout(function () {\n        bien('Han pasado 3 segundos');\n    }, 3000);\n}); /* Importación de modulos de ES6 */\n\n\nmodule.exports = {\n    firstMessage: 'Hola desde un módulo con Babel (ECMAScript2015)',\n    delayedMessage: async function delayedMessage() {\n        var message = await waitTime; // Espera una Promesa\n\n        console.log(message);\n        (0, _renderToDom2.default)((0, _makeMessage2.default)(message));\n    }\n};\n\n//# sourceURL=webpack:///./babel-loader/message.js?");

/***/ }),

/***/ "./babel-loader/render-to-dom.js":
/*!***************************************!*\
  !*** ./babel-loader/render-to-dom.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function renderToDOM(element) {\n    document.body.append(element);\n};\n\n//# sourceURL=webpack:///./babel-loader/render-to-dom.js?");

/***/ })

/******/ });