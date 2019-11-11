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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _componets_toolBar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./componets/toolBar */ \"./src/js/componets/toolBar.js\");\n/* harmony import */ var _componets_colorPicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./componets/colorPicker */ \"./src/js/componets/colorPicker.js\");\n/* harmony import */ var _componets_canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./componets/canvas */ \"./src/js/componets/canvas.js\");\n/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state/state */ \"./src/js/state/state.js\");\n\n\n\n\n\nvar saveState = function saveState() {\n  var stateJson = JSON.stringify(_state_state__WEBPACK_IMPORTED_MODULE_3__[\"appState\"]);\n  localStorage.setItem('appState', stateJson);\n};\n\nvar resetStorage = function resetStorage() {\n  localStorage.removeItem('appState');\n};\n\nvar loadHandler = function loadHandler() {\n  var state = JSON.parse(localStorage.getItem('appState'));\n  Object(_state_state__WEBPACK_IMPORTED_MODULE_3__[\"initAppState\"])(state);\n  Object(_componets_colorPicker__WEBPACK_IMPORTED_MODULE_1__[\"initColorPicker\"])();\n  Object(_componets_toolBar__WEBPACK_IMPORTED_MODULE_0__[\"initToolBar\"])();\n  Object(_componets_canvas__WEBPACK_IMPORTED_MODULE_2__[\"initCanvas\"])();\n};\n\nvar beforeUnloadHandler = function beforeUnloadHandler(event) {\n  var stateJson = JSON.stringify(_state_state__WEBPACK_IMPORTED_MODULE_3__[\"appState\"]);\n  var state = localStorage.getItem('appState');\n\n  if (stateJson !== state) {\n    event.preventDefault();\n    event.returnValue = '';\n  }\n};\n\nvar saveButton = document.getElementById('save');\nsaveButton.addEventListener('click', function () {\n  saveState(_state_state__WEBPACK_IMPORTED_MODULE_3__[\"appState\"]);\n});\nvar clearButton = document.getElementById('reset');\nclearButton.addEventListener('click', function () {\n  resetStorage();\n});\nwindow.addEventListener('load', loadHandler);\nwindow.addEventListener('beforeunload', beforeUnloadHandler);\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/componets/canvas.js":
/*!************************************!*\
  !*** ./src/js/componets/canvas.js ***!
  \************************************/
/*! exports provided: initCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initCanvas\", function() { return initCanvas; });\n/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/state */ \"./src/js/state/state.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ \"./src/js/utils/utils.js\");\n/* harmony import */ var _tools_pencil__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tools/pencil */ \"./src/js/tools/pencil.js\");\n/* harmony import */ var _tools_fillArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tools/fillArea */ \"./src/js/tools/fillArea.js\");\n/* harmony import */ var _tools_selectColor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tools/selectColor */ \"./src/js/tools/selectColor.js\");\n\n\n\n\n\nvar mainContext = null;\nvar canvasPosition = null;\n\nvar mouseDownHandler = function mouseDownHandler(event) {\n  var pixelSize = _state_state__WEBPACK_IMPORTED_MODULE_0__[\"appState\"].pixelSize;\n  var pageX = event.pageX,\n      pageY = event.pageY;\n  var point = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__[\"getPosition\"])(pageX, pageY, pixelSize, canvasPosition);\n\n  switch (_state_state__WEBPACK_IMPORTED_MODULE_0__[\"appState\"].currentTool) {\n    case 'pencil':\n      Object(_tools_pencil__WEBPACK_IMPORTED_MODULE_2__[\"pencil\"])(mainContext, point, canvasPosition);\n      break;\n\n    case 'paint-bucket':\n      Object(_tools_fillArea__WEBPACK_IMPORTED_MODULE_3__[\"fillArea\"])(mainContext, point);\n      break;\n\n    case 'pipette':\n      Object(_tools_selectColor__WEBPACK_IMPORTED_MODULE_4__[\"selectColor\"])(point);\n      break;\n\n    default:\n      break;\n  }\n};\n\nvar initCanvas = function initCanvas() {\n  var canvas = document.getElementById('canvas-main');\n\n  canvas.ondragstart = function () {\n    return false;\n  };\n\n  mainContext = canvas.getContext('2d');\n  mainContext.imageSmoothingEnabled = false;\n  Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__[\"drawCanvas\"])(mainContext, _state_state__WEBPACK_IMPORTED_MODULE_0__[\"appState\"].matrixState, _state_state__WEBPACK_IMPORTED_MODULE_0__[\"appState\"].matrixSize, _state_state__WEBPACK_IMPORTED_MODULE_0__[\"appState\"].canvasSize);\n  mainContext.scale(_state_state__WEBPACK_IMPORTED_MODULE_0__[\"appState\"].pixelSize, _state_state__WEBPACK_IMPORTED_MODULE_0__[\"appState\"].pixelSize);\n  canvasPosition = canvas.getBoundingClientRect();\n  canvas.addEventListener('mousedown', mouseDownHandler);\n};\n\n\n\n//# sourceURL=webpack:///./src/js/componets/canvas.js?");

/***/ }),

/***/ "./src/js/componets/colorPicker.js":
/*!*****************************************!*\
  !*** ./src/js/componets/colorPicker.js ***!
  \*****************************************/
/*! exports provided: initColorPicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initColorPicker\", function() { return initColorPicker; });\n/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/state */ \"./src/js/state/state.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ \"./src/js/utils/utils.js\");\n\n\nvar colorPicker = document.getElementById('color-picker');\nvar mainInput = colorPicker.querySelector('.color-picker__input--main');\nvar prevInput = colorPicker.querySelector('.color-picker__input--additional');\nvar button = colorPicker.querySelector('.color-picker__button');\n\nvar clickHandler = function clickHandler() {\n  var tmp = mainInput.value;\n  mainInput.value = prevInput.value;\n  prevInput.value = tmp;\n  Object(_state_state__WEBPACK_IMPORTED_MODULE_0__[\"swapColor\"])();\n};\n\nvar setColor = function setColor(type, color) {\n  if (type === 'main') {\n    Object(_state_state__WEBPACK_IMPORTED_MODULE_0__[\"setCurrentColor\"])(color);\n  } else {\n    Object(_state_state__WEBPACK_IMPORTED_MODULE_0__[\"setPrevColor\"])(color);\n  }\n};\n\nvar changeHandler = function changeHandler(event) {\n  var element = event.target;\n\n  if (element.nodeName === 'INPUT') {\n    var type = element.dataset.type;\n    setColor(type, element.value);\n  }\n};\n\nvar selectColorHandler = function selectColorHandler() {\n  mainInput.value = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__[\"rgbaToHex\"])(_state_state__WEBPACK_IMPORTED_MODULE_0__[\"appState\"].currentColor);\n};\n\nvar initColorPicker = function initColorPicker() {\n  mainInput.value = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__[\"rgbaToHex\"])(_state_state__WEBPACK_IMPORTED_MODULE_0__[\"appState\"].currentColor);\n  prevInput.value = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__[\"rgbaToHex\"])(_state_state__WEBPACK_IMPORTED_MODULE_0__[\"appState\"].prevColor);\n  colorPicker.addEventListener('change', changeHandler);\n  button.addEventListener('click', clickHandler);\n};\n\ncolorPicker.addEventListener('change', changeHandler);\nbutton.addEventListener('click', clickHandler);\ndocument.addEventListener('selectColor', selectColorHandler);\n\n\n//# sourceURL=webpack:///./src/js/componets/colorPicker.js?");

/***/ }),

/***/ "./src/js/componets/toolBar.js":
/*!*************************************!*\
  !*** ./src/js/componets/toolBar.js ***!
  \*************************************/
/*! exports provided: initToolBar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initToolBar\", function() { return initToolBar; });\n/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/state */ \"./src/js/state/state.js\");\n\nvar toolBar = null;\nvar CLASS_NAME_PRESSED_BUTTON = 'button--active';\nvar KEY_CODES = {\n  KeyP: 'pencil',\n  KeyB: 'paint-bucket',\n  KeyC: 'pipette'\n};\n\nvar changeActiveButton = function changeActiveButton(list, currnetElement) {\n  var buttonList = Array.prototype.slice.apply(list);\n  buttonList.forEach(function (item) {\n    var element = item.children[0];\n\n    if (element.classList.contains(CLASS_NAME_PRESSED_BUTTON)) {\n      element.classList.remove(CLASS_NAME_PRESSED_BUTTON);\n    }\n\n    if (element === currnetElement) {\n      element.classList.add(CLASS_NAME_PRESSED_BUTTON);\n    }\n  });\n};\n\nvar changeCurrentTool = function changeCurrentTool(buttonList, element) {\n  changeActiveButton(buttonList, element);\n  var tool = element.dataset.tool;\n  Object(_state_state__WEBPACK_IMPORTED_MODULE_0__[\"setCurrentTool\"])(tool);\n};\n\nvar clickHandler = function clickHandler(event) {\n  var element = event.target;\n  var isTargetElement = element.nodeName === 'BUTTON' && !element.classList.contains(CLASS_NAME_PRESSED_BUTTON);\n\n  if (isTargetElement) {\n    changeCurrentTool(toolBar.children, element);\n  }\n};\n\nvar keydownHandler = function keydownHandler(_ref) {\n  var code = _ref.code;\n\n  if (KEY_CODES[code]) {\n    var element = toolBar.querySelector(\"button[data-tool=\".concat(KEY_CODES[code], \"]\"));\n    changeCurrentTool(toolBar.children, element);\n  }\n};\n\nvar initToolBar = function initToolBar() {\n  toolBar = document.getElementById('tool-bar');\n\n  if (_state_state__WEBPACK_IMPORTED_MODULE_0__[\"appState\"].currentTool) {\n    var button = toolBar.querySelector(\"button[data-tool=\".concat(_state_state__WEBPACK_IMPORTED_MODULE_0__[\"appState\"].currentTool, \"]\"));\n    button.classList.add(CLASS_NAME_PRESSED_BUTTON);\n  }\n\n  toolBar.addEventListener('click', clickHandler);\n  document.addEventListener('keydown', keydownHandler);\n};\n\n\n\n//# sourceURL=webpack:///./src/js/componets/toolBar.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/main.scss */ \"./src/scss/main.scss\");\n/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ \"./src/js/app.js\");\n\n\n\n//# sourceURL=webpack:///./src/js/index.js?");

/***/ }),

/***/ "./src/js/state/state.js":
/*!*******************************!*\
  !*** ./src/js/state/state.js ***!
  \*******************************/
/*! exports provided: appState, initAppState, setCurrentColor, setPrevColor, setCurrentTool, swapColor, changeMatrixState, getPixelColor, selectCurrentColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"appState\", function() { return appState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"initAppState\", function() { return initAppState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setCurrentColor\", function() { return setCurrentColor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setPrevColor\", function() { return setPrevColor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setCurrentTool\", function() { return setCurrentTool; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"swapColor\", function() { return swapColor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"changeMatrixState\", function() { return changeMatrixState; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPixelColor\", function() { return getPixelColor; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectCurrentColor\", function() { return selectCurrentColor; });\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ \"./src/js/utils/utils.js\");\n\nvar APP_STATE_DEFAULT = {\n  currentTool: 'pencil',\n  currentColor: [0, 255, 0, 255],\n  prevColor: [255, 128, 64, 255],\n  canvasSize: 512,\n  matrixSize: 128,\n  pixelSize: null,\n  matrixState: null\n};\nvar appState = {};\n\nvar getPixelSize = function getPixelSize(canvasSize, matrixSize) {\n  return canvasSize / matrixSize;\n};\n\nvar setAppState = function setAppState(newState) {\n  var state = newState === null ? APP_STATE_DEFAULT : newState;\n  var keys = Object.keys(state);\n  keys.forEach(function (key) {\n    appState[key] = state[key];\n  });\n};\n\nvar createMatrixState = function createMatrixState(canvasSize) {\n  var state = [];\n\n  for (var i = 0; i < canvasSize; i += 1) {\n    var row = [];\n\n    for (var j = 0; j < canvasSize; j += 1) {\n      var pixelColor = [255, 255, 255, 0];\n      row.push(pixelColor);\n    }\n\n    state.push(row);\n  }\n\n  return state;\n};\n\nvar initAppState = function initAppState(state) {\n  setAppState(state);\n\n  if (!state) {\n    appState.matrixState = createMatrixState(appState.matrixSize);\n    appState.pixelSize = getPixelSize(appState.canvasSize, appState.matrixSize);\n  }\n};\n\nvar setCurrentColor = function setCurrentColor(color) {\n  appState.currentColor = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__[\"hexToRgba\"])(color);\n};\n\nvar setPrevColor = function setPrevColor(color) {\n  appState.prevColor = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__[\"hexToRgba\"])(color);\n};\n\nvar swapColor = function swapColor() {\n  var tmp = appState.currentColor;\n  appState.currentColor = appState.prevColor;\n  appState.prevColor = tmp;\n};\n\nvar setCurrentTool = function setCurrentTool(tool) {\n  appState.currentTool = tool;\n};\n\nvar changeMatrixState = function changeMatrixState(pointList) {\n  pointList.forEach(function (point) {\n    var x = point.x,\n        y = point.y;\n\n    if (appState.matrixState[y][x]) {\n      appState.matrixState[y][x] = appState.currentColor;\n    }\n  });\n};\n\nvar getPixelColor = function getPixelColor(point) {\n  return appState.matrixState[point.y][point.x];\n};\n\nvar selectCurrentColor = function selectCurrentColor(color) {\n  appState.currentColor = color;\n  var selectColorEvent = new CustomEvent('selectColor');\n  document.dispatchEvent(selectColorEvent);\n};\n\n\n\n//# sourceURL=webpack:///./src/js/state/state.js?");

/***/ }),

/***/ "./src/js/tools/fillArea.js":
/*!**********************************!*\
  !*** ./src/js/tools/fillArea.js ***!
  \**********************************/
/*! exports provided: fillArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fillArea\", function() { return fillArea; });\n/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/state */ \"./src/js/state/state.js\");\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/utils */ \"./src/js/utils/utils.js\");\n\n\n\nvar fillArea = function fillArea(context, point) {\n  var matrixState = _state_state__WEBPACK_IMPORTED_MODULE_0__[\"appState\"].matrixState,\n      matrixSize = _state_state__WEBPACK_IMPORTED_MODULE_0__[\"appState\"].matrixSize,\n      currentColor = _state_state__WEBPACK_IMPORTED_MODULE_0__[\"appState\"].currentColor;\n  context.fillStyle = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__[\"rgbaToHex\"])(currentColor);\n  var pixelColor = Object(_state_state__WEBPACK_IMPORTED_MODULE_0__[\"getPixelColor\"])(point);\n  var pointList = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__[\"getFillPoints\"])(point, matrixState, currentColor, pixelColor, matrixSize);\n  Object(_utils_utils__WEBPACK_IMPORTED_MODULE_1__[\"drawPixels\"])(context, pointList);\n};\n\n\n\n//# sourceURL=webpack:///./src/js/tools/fillArea.js?");

/***/ }),

/***/ "./src/js/tools/pencil.js":
/*!********************************!*\
  !*** ./src/js/tools/pencil.js ***!
  \********************************/
/*! exports provided: pencil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"pencil\", function() { return pencil; });\n/* harmony import */ var _utils_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/utils */ \"./src/js/utils/utils.js\");\n/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../state/state */ \"./src/js/state/state.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\n\n\n\nvar pencil = function pencil(context, startPoint, canvasPosition) {\n  var pixelSize = _state_state__WEBPACK_IMPORTED_MODULE_1__[\"appState\"].pixelSize,\n      currentColor = _state_state__WEBPACK_IMPORTED_MODULE_1__[\"appState\"].currentColor,\n      matrixSize = _state_state__WEBPACK_IMPORTED_MODULE_1__[\"appState\"].matrixSize;\n  context.fillStyle = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__[\"rgbaToHex\"])(currentColor);\n  var point = startPoint;\n  var prevPoint = point;\n  var pointList = [point];\n  Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__[\"drawPixels\"])(context, pointList);\n\n  var onMouseMove = function onMouseMove(_ref) {\n    var pageX = _ref.pageX,\n        pageY = _ref.pageY;\n    point = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__[\"getPosition\"])(pageX, pageY, pixelSize, canvasPosition);\n\n    if (!Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__[\"isEqualPoint\"])(point, prevPoint)) {\n      var linePoints = Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__[\"getLinePoints\"])(prevPoint, point);\n      Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__[\"drawPixels\"])(context, linePoints);\n      prevPoint = point;\n      pointList.push.apply(pointList, _toConsumableArray(linePoints));\n    }\n  };\n\n  var onMouseUp = function onMouseUp() {\n    Object(_state_state__WEBPACK_IMPORTED_MODULE_1__[\"changeMatrixState\"])(Object(_utils_utils__WEBPACK_IMPORTED_MODULE_0__[\"getPointsLocatedCanvas\"])(pointList, matrixSize));\n    document.removeEventListener('mousemove', onMouseMove);\n    document.removeEventListener('mouseup', onMouseUp);\n  };\n\n  document.addEventListener('mousemove', onMouseMove);\n  document.addEventListener('mouseup', onMouseUp);\n};\n\n\n\n//# sourceURL=webpack:///./src/js/tools/pencil.js?");

/***/ }),

/***/ "./src/js/tools/selectColor.js":
/*!*************************************!*\
  !*** ./src/js/tools/selectColor.js ***!
  \*************************************/
/*! exports provided: selectColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"selectColor\", function() { return selectColor; });\n/* harmony import */ var _state_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../state/state */ \"./src/js/state/state.js\");\n\n\nvar selectColor = function selectColor(point) {\n  var color = Object(_state_state__WEBPACK_IMPORTED_MODULE_0__[\"getPixelColor\"])(point);\n  Object(_state_state__WEBPACK_IMPORTED_MODULE_0__[\"selectCurrentColor\"])(color);\n};\n\n\n\n//# sourceURL=webpack:///./src/js/tools/selectColor.js?");

/***/ }),

/***/ "./src/js/utils/utils.js":
/*!*******************************!*\
  !*** ./src/js/utils/utils.js ***!
  \*******************************/
/*! exports provided: rgbaToHex, hexToRgba, getLinePoints, getFillPoints, isEqualPoint, drawPixels, getPosition, getPointsLocatedCanvas, drawCanvas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"rgbaToHex\", function() { return rgbaToHex; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"hexToRgba\", function() { return hexToRgba; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getLinePoints\", function() { return getLinePoints; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getFillPoints\", function() { return getFillPoints; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"isEqualPoint\", function() { return isEqualPoint; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawPixels\", function() { return drawPixels; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPosition\", function() { return getPosition; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getPointsLocatedCanvas\", function() { return getPointsLocatedCanvas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"drawCanvas\", function() { return drawCanvas; });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance\"); }\n\nfunction _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === \"[object Arguments]\") return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar rgbaToHex = function rgbaToHex(rgba) {\n  var componentToHex = function componentToHex(component) {\n    var hex = component.toString(16);\n    return hex.length === 1 ? \"0\".concat(hex) : hex;\n  };\n\n  var rgb = rgba.slice(0, 3);\n  return rgb.reduce(function (acc, item) {\n    return \"\".concat(acc).concat(componentToHex(item));\n  }, '#');\n};\n\nvar hexToRgba = function hexToRgba(hex) {\n  var result = /^#?([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})([a-f\\d]{2})?$/i.exec(hex);\n  return result ? [parseInt(result[1], 16), parseInt(result[2], 16), parseInt(result[3], 16), result[4] ? parseInt(result[4], 16) : 255] : null;\n};\n\nvar isEqualPoint = function isEqualPoint(point1, point2) {\n  return point1.x === point2.x && point1.y === point2.y;\n};\n\nvar getLinePoints = function getLinePoints(point1, point2) {\n  var x1 = point1.x,\n      y1 = point1.y;\n  var x2 = point2.x,\n      y2 = point2.y;\n  var x;\n  var y;\n  var px;\n  var py;\n  var xe;\n  var ye;\n  var i;\n  var filledPixels = [];\n  var dx = x2 - x1;\n  var dy = y2 - y1;\n  var dx1 = Math.abs(dx);\n  var dy1 = Math.abs(dy);\n  px = 2 * dy1 - dx1;\n  py = 2 * dx1 - dy1;\n\n  if (dy1 <= dx1) {\n    if (dx >= 0) {\n      x = x1;\n      y = y1;\n      xe = x2;\n    } else {\n      x = x2;\n      y = y2;\n      xe = x1;\n    }\n\n    filledPixels.push({\n      x: x,\n      y: y\n    });\n\n    for (i = 0; x < xe; i += 1) {\n      x += 1;\n\n      if (px < 0) {\n        px += 2 * dy1;\n      } else {\n        if (dx < 0 && dy < 0 || dx > 0 && dy > 0) {\n          y += 1;\n        } else {\n          y -= 1;\n        }\n\n        px += 2 * (dy1 - dx1);\n      }\n\n      filledPixels.push({\n        x: x,\n        y: y\n      });\n    }\n  } else {\n    if (dy >= 0) {\n      x = x1;\n      y = y1;\n      ye = y2;\n    } else {\n      x = x2;\n      y = y2;\n      ye = y1;\n    }\n\n    filledPixels.push({\n      x: x,\n      y: y\n    });\n\n    for (i = 0; y < ye; i += 1) {\n      y += 1;\n\n      if (py <= 0) {\n        py += 2 * dx1;\n      } else {\n        if (dx < 0 && dy < 0 || dx > 0 && dy > 0) {\n          x += 1;\n        } else {\n          x -= 1;\n        }\n\n        py += 2 * (dx1 - dy1);\n      }\n\n      filledPixels.push({\n        x: x,\n        y: y\n      });\n    }\n  }\n\n  return filledPixels;\n};\n\nvar matchColors = function matchColors(color1, color2) {\n  return !color1.some(function (spectr, index) {\n    return spectr !== color2[index];\n  });\n};\n\nvar getFillPoints = function getFillPoints(point, state, fillColor, color, canvasSize) {\n  if (!matchColors(color, fillColor)) {\n    var pixelStack = [[point.y, point.x]];\n    var fillPixels = [];\n    var newPos;\n\n    while (pixelStack.length) {\n      var i = void 0;\n      var reachLeft = void 0;\n      var reachRight = void 0;\n      newPos = pixelStack.pop();\n\n      var _newPos = newPos,\n          _newPos2 = _slicedToArray(_newPos, 2),\n          j = _newPos2[1];\n\n      var _newPos3 = newPos;\n\n      var _newPos4 = _slicedToArray(_newPos3, 1);\n\n      i = _newPos4[0];\n\n      while (i >= 0 && matchColors(state[i][j], color)) {\n        i -= 1;\n      }\n\n      i += 1;\n      reachLeft = false;\n      reachRight = false;\n\n      while (i < canvasSize && matchColors(state[i][j], color)) {\n        fillPixels.push({\n          x: j,\n          y: i\n        });\n        state[i][j] = fillColor;\n\n        if (j > 0) {\n          if (matchColors(state[i][j - 1], color)) {\n            if (!reachLeft) {\n              pixelStack.push([i, j - 1]);\n              reachLeft = true;\n            }\n          } else if (reachLeft) {\n            reachLeft = false;\n          }\n        }\n\n        if (j < canvasSize - 1) {\n          if (matchColors(state[i][j + 1], color)) {\n            if (!reachRight) {\n              pixelStack.push([i, j + 1]);\n              reachRight = true;\n            }\n          } else if (reachRight) {\n            reachRight = false;\n          }\n        }\n\n        i += 1;\n      }\n    }\n\n    return fillPixels;\n  }\n\n  return [];\n};\n\nvar drawPixels = function drawPixels(context, pointList) {\n  pointList.forEach(function (point) {\n    var x = point.x,\n        y = point.y;\n    context.fillRect(x, y, 1, 1);\n  });\n};\n\nvar drawCanvas = function drawCanvas(context, matrixState, matrixSize) {\n  var flatArr = [];\n\n  for (var i = 0; i < matrixState.length; i += 1) {\n    for (var j = 0; j < matrixState.length; j += 1) {\n      flatArr.push.apply(flatArr, _toConsumableArray(matrixState[i][j]));\n    }\n  }\n\n  var imageData = new ImageData(Uint8ClampedArray.from(flatArr), matrixSize, matrixSize);\n  var imageBitmap = createImageBitmap(imageData, 0, 0, matrixSize, matrixSize);\n  imageBitmap.then(function (img) {\n    context.drawImage(img, 0, 0, matrixSize, matrixSize, 0, 0, matrixSize, matrixSize);\n  });\n};\n\nvar getPosition = function getPosition(screenX, screenY, pixelSize, canvasPosition) {\n  var x = Math.floor((screenX - canvasPosition.x) / pixelSize);\n  var y = Math.floor((screenY - canvasPosition.y) / pixelSize);\n  return {\n    x: x,\n    y: y\n  };\n};\n\nvar getPointsLocatedCanvas = function getPointsLocatedCanvas(pointList, size) {\n  var points = pointList.filter(function (point) {\n    if (point.x < 0 || point.x >= size || point.y < 0 || point.y >= size) {\n      return false;\n    }\n\n    return true;\n  });\n  return points;\n};\n\n\n\n//# sourceURL=webpack:///./src/js/utils/utils.js?");

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./src/scss/main.scss?");

/***/ })

/******/ });