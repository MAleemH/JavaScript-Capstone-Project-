"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkwebpack_tutorial"] = self["webpackChunkwebpack_tutorial"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\r\\n  font-size: 18px;\\r\\n}\\r\\n\\r\\n.navbar {\\r\\n  list-style: none;\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: space-evenly;\\r\\n  align-items: center;\\r\\n  font-size: 22px;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.showItem {\\r\\n  border-bottom: 1px solid black;\\r\\n}\\r\\n\\r\\n.logo-circle {\\r\\n  border: 1px solid black;\\r\\n  height: 50px;\\r\\n  width: 50px;\\r\\n  border-radius: 50px;\\r\\n  font-size: 12px;\\r\\n  display: flex;\\r\\n  align-items: center;\\r\\n  text-align: center;\\r\\n}\\r\\n\\r\\na {\\r\\n  text-decoration: none;\\r\\n  color: black;\\r\\n}\\r\\n\\r\\nmain {\\r\\n  min-height: 85vh;\\r\\n}\\r\\n\\r\\n.shows-list {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  flex-wrap: wrap;\\r\\n  justify-content: center;\\r\\n  column-gap: 200px;\\r\\n  row-gap: 100px;\\r\\n  padding: 100px;\\r\\n}\\r\\n\\r\\n.card {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 10px;\\r\\n}\\r\\n\\r\\n.title-like {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: space-between;\\r\\n}\\r\\n\\r\\n.show-name {\\r\\n  inline-size: 150px;\\r\\n  overflow-wrap: break-word;\\r\\n  margin: 0;\\r\\n}\\r\\n\\r\\n.display-likes {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  align-items: center;\\r\\n}\\r\\n\\r\\n.no-of-likes {\\r\\n  margin: 2px 0 0 0;\\r\\n}\\r\\n\\r\\n#likeButton {\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.buttons {\\r\\n  height: 35px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n  border: 1px solid black;\\r\\n  padding-left: 20px;\\r\\n}\\r\\n\\r\\n.popup {\\r\\n  display: none;\\r\\n  position: fixed;\\r\\n  overflow-y: auto;\\r\\n  overflow-x: hidden;\\r\\n  top: 0;\\r\\n  left: 0;\\r\\n  width: 100%;\\r\\n  height: 100%;\\r\\n  margin: 0 auto;\\r\\n  background-color: rgba(201, 201, 201, 1);\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  text-align: center;\\r\\n  z-index: 20;\\r\\n}\\r\\n\\r\\n.show {\\r\\n  display: block;\\r\\n}\\r\\n\\r\\n.img-card {\\r\\n  width: 200px;\\r\\n  height: 300px;\\r\\n  object-fit: cover;\\r\\n}\\r\\n\\r\\n.popup-close {\\r\\n  position: relative;\\r\\n  top: 10px;\\r\\n  right: -97%;\\r\\n  width: 30px;\\r\\n  height: 30px;\\r\\n  background-color: #d65076;\\r\\n  color: white;\\r\\n  font-size: 20px;\\r\\n  display: flex;\\r\\n  justify-content: center;\\r\\n  align-items: center;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.popup-content {\\r\\n  position: absolute;\\r\\n  padding: 20px;\\r\\n}\\r\\n\\r\\n.summary {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n}\\r\\n\\r\\n.comment {\\r\\n  display: flex;\\r\\n  flex-direction: row;\\r\\n  justify-content: center;\\r\\n}\\r\\n\\r\\n.comment p {\\r\\n  margin: 2px 0 0 0;\\r\\n}\\r\\n\\r\\n.commentsTitle,\\r\\n.addCommentHeader,\\r\\n.commentsHTML {\\r\\n  font-size: 30px;\\r\\n  margin: 20px 0 0 0;\\r\\n  font-weight: bold;\\r\\n}\\r\\n\\r\\n.add-comment {\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 20px;\\r\\n}\\r\\n\\r\\n.form {\\r\\n  width: 30%;\\r\\n  height: 30%;\\r\\n  margin: 0 auto;\\r\\n  align-items: center;\\r\\n  display: flex;\\r\\n  flex-direction: column;\\r\\n  gap: 20px;\\r\\n  border-radius: 5px;\\r\\n}\\r\\n\\r\\n.items {\\r\\n  width: 100%;\\r\\n  border: 1px solid black;\\r\\n  border-radius: 5px;\\r\\n  display: flex;\\r\\n  padding: 5px;\\r\\n}\\r\\n\\r\\n.form-group {\\r\\n  display: flex;\\r\\n  justify-content: space-around;\\r\\n  align-items: center;\\r\\n  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;\\r\\n  width: 100%;\\r\\n}\\r\\n\\r\\n.submit {\\r\\n  align-self: flex-end;\\r\\n  background-color: white;\\r\\n  border-radius: 2px;\\r\\n  border: 3px solid black;\\r\\n  box-shadow: 2px 3px #000;\\r\\n  font-weight: bold;\\r\\n  padding: 0.5rem;\\r\\n  font-size: 18px;\\r\\n  cursor: pointer;\\r\\n}\\r\\n\\r\\n.displayNone {\\r\\n  display: none;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack-tutorial/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://webpack-tutorial/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://webpack-tutorial/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://webpack-tutorial/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack-tutorial/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack-tutorial/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack-tutorial/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack-tutorial/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack-tutorial/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack-tutorial/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_displayShows__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/displayShows */ \"./src/modules/displayShows.js\");\n/* harmony import */ var _modules_addNewLike__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/addNewLike */ \"./src/modules/addNewLike.js\");\n\r\n\r\n\r\n\r\n(0,_modules_displayShows__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n\r\n// add new like\r\nwindow.addEventListener('click', async (e) => {\r\n  const likeB = e.target;\r\n  if (likeB.classList.contains('likeButton')) {\r\n    const showId = likeB.getAttribute('data-id');\r\n    const intIdOfShow = parseInt(showId, 10);\r\n    await (0,_modules_addNewLike__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(intIdOfShow);\r\n    window.location.reload();\r\n  }\r\n});\n\n//# sourceURL=webpack://webpack-tutorial/./src/index.js?");

/***/ }),

/***/ "./src/modules/addComment.js":
/*!***********************************!*\
  !*** ./src/modules/addComment.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getComment\": () => (/* binding */ getComment),\n/* harmony export */   \"postComment\": () => (/* binding */ postComment)\n/* harmony export */ });\nconst url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PHTvFFWrOpX4Hcee8n1y/comments/';\r\n\r\nconst postComment = async (id, username, comment) => {\r\n  await fetch(url, {\r\n    method: 'POST',\r\n    headers: {\r\n      'Content-Type': 'application/json',\r\n    },\r\n    body: JSON.stringify({\r\n      item_id: id,\r\n      username,\r\n      comment,\r\n    }),\r\n  });\r\n};\r\n\r\nconst getComment = async (id) => {\r\n  const response = await fetch(`${url}?item_id=${id}`);\r\n  const data = await response.json();\r\n  return data;\r\n};\r\n\r\n\n\n//# sourceURL=webpack://webpack-tutorial/./src/modules/addComment.js?");

/***/ }),

/***/ "./src/modules/addNewLike.js":
/*!***********************************!*\
  !*** ./src/modules/addNewLike.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _involvementAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./involvementAPI */ \"./src/modules/involvementAPI.js\");\n\r\n\r\nconst addNewLike = async (id) => {\r\n  await fetch(_involvementAPI__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\r\n    method: 'POST',\r\n    body: JSON.stringify({\r\n      item_id: id,\r\n    }),\r\n    headers: {\r\n      'Content-type': 'application/json; charset=UTF-8',\r\n    },\r\n  });\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addNewLike);\n\n//# sourceURL=webpack://webpack-tutorial/./src/modules/addNewLike.js?");

/***/ }),

/***/ "./src/modules/commentCounter.js":
/*!***************************************!*\
  !*** ./src/modules/commentCounter.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst commentCounter = () => {\r\n  const singleComment = document.querySelectorAll('.addedComments');\r\n  return singleComment.length;\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentCounter);\r\n\n\n//# sourceURL=webpack://webpack-tutorial/./src/modules/commentCounter.js?");

/***/ }),

/***/ "./src/modules/comments.js":
/*!*********************************!*\
  !*** ./src/modules/comments.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addUi\": () => (/* binding */ addUi),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _fetchComments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchComments */ \"./src/modules/fetchComments.js\");\n/* harmony import */ var _commentCounter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commentCounter */ \"./src/modules/commentCounter.js\");\n\r\n\r\n\r\nconst updateComment = async (id) => {\r\n  const getCommentsData = await (0,_fetchComments__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(id);\r\n  const comments = document.querySelector('.comments');\r\n  const showComments = document.querySelector('.showComments');\r\n  getCommentsData.forEach((comment) => {\r\n    showComments.innerHTML += `\r\n    <p class=\"addedComments\">${comment.creation_date} ${comment.username}: ${comment.comment}</p>\r\n    `;\r\n  });\r\n  comments.appendChild(showComments);\r\n\r\n  // Add comment counter\r\n  const numOfComments = (0,_commentCounter__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  const commentTitle = document.querySelector('h2');\r\n  commentTitle.innerHTML = `\r\n    Comments(${numOfComments}) `;\r\n  const commentsHTML = document.querySelector('.commentsHTML');\r\n  commentsHTML.classList.add('displayNone');\r\n};\r\n\r\nconst addUi = (username, comment) => {\r\n  const comments = document.querySelector('.comments');\r\n  const showComments = document.querySelector('.showComments');\r\n\r\n  const date = new Date();\r\n  const dateString = `${date.getFullYear()}-${(date.getMonth() + 1)\r\n    .toString()\r\n    .padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;\r\n  showComments.innerHTML += `\r\n  <p class=\"addedComments\">${dateString} ${username}: ${comment}</p>\r\n  `;\r\n  comments.appendChild(showComments);\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (updateComment);\r\n\n\n//# sourceURL=webpack://webpack-tutorial/./src/modules/comments.js?");

/***/ }),

/***/ "./src/modules/displayShows.js":
/*!*************************************!*\
  !*** ./src/modules/displayShows.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _fetchData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetchData */ \"./src/modules/fetchData.js\");\n/* harmony import */ var _getLikes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getLikes */ \"./src/modules/getLikes.js\");\n/* harmony import */ var _popup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./popup */ \"./src/modules/popup.js\");\n/* harmony import */ var _domCounter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domCounter */ \"./src/modules/domCounter.js\");\n\r\n\r\n\r\n\r\n\r\nconst showList = document.querySelector('.shows-list');\r\n\r\nconst displayAllShows = async () => {\r\n  const getData = await (0,_fetchData__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n  const getLikesData = await (0,_getLikes__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n  showList.innerHTML = '';\r\n  getData.forEach((data) => {\r\n    const likes = getLikesData.filter((like) => like.item_id === data.id);\r\n    showList.innerHTML += `\r\n      <div class='card'>\r\n        <img src='${data.image.medium}' alt='Thumbnail' >\r\n        <div class='title-like'>\r\n          <p class='show-name'>${data.name}</p>\r\n          <div class='display-likes'>\r\n            <i class='fa-regular fa-heart likeButton' id='likeButton' data-id='${data.id}'></i>\r\n            <p class='no-of-likes'>${likes.length > 0 ? likes[0].likes : 0} likes</p>\r\n          </div>\r\n        </div>\r\n        <button type='button' class='buttons btn-comment' data-id=${data.id}>Comments</button>\r\n        <button type='button' class='buttons'>Reservations</button>\r\n      </div>\r\n    `;\r\n  });\r\n\r\n  const popup = document.querySelector('.popup');\r\n  const btnComment = document.querySelectorAll('.btn-comment');\r\n  Array.from(btnComment)?.forEach((button) => {\r\n    button.addEventListener('click', () => {\r\n      const { id } = button.dataset;\r\n      (0,_popup__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(id);\r\n      popup.classList.add('show');\r\n    });\r\n  });\r\n\r\n  // no of shows\r\n  const countShows = (0,_domCounter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n  const navItem = document.querySelector('.navItem');\r\n  navItem.innerHTML += `Shows (${countShows})`;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (displayAllShows);\r\n\n\n//# sourceURL=webpack://webpack-tutorial/./src/modules/displayShows.js?");

/***/ }),

/***/ "./src/modules/domCounter.js":
/*!***********************************!*\
  !*** ./src/modules/domCounter.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst domCounter = () => {\r\n  const cards = document.querySelectorAll('.card');\r\n  const noOfShows = cards.length;\r\n  return noOfShows;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (domCounter);\n\n//# sourceURL=webpack://webpack-tutorial/./src/modules/domCounter.js?");

/***/ }),

/***/ "./src/modules/fetchComments.js":
/*!**************************************!*\
  !*** ./src/modules/fetchComments.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PHTvFFWrOpX4Hcee8n1y/comments/';\r\nconst commentsData = async (id) => {\r\n  const response = await fetch(`${url}?item_id=${id}`);\r\n  const data = await response.json();\r\n  return data;\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (commentsData);\n\n//# sourceURL=webpack://webpack-tutorial/./src/modules/fetchComments.js?");

/***/ }),

/***/ "./src/modules/fetchData.js":
/*!**********************************!*\
  !*** ./src/modules/fetchData.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst url = 'https://api.tvmaze.com/shows';\r\n\r\nconst fetchData = async () => {\r\n  const response = await fetch(url);\r\n  const data = await response.json();\r\n  return data;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (fetchData);\n\n//# sourceURL=webpack://webpack-tutorial/./src/modules/fetchData.js?");

/***/ }),

/***/ "./src/modules/getLikes.js":
/*!*********************************!*\
  !*** ./src/modules/getLikes.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _involvementAPI__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./involvementAPI */ \"./src/modules/involvementAPI.js\");\n\r\n\r\nconst getLikes = async () => {\r\n  const response = await fetch(_involvementAPI__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\r\n  const data = await response.json();\r\n  return data;\r\n};\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getLikes);\n\n//# sourceURL=webpack://webpack-tutorial/./src/modules/getLikes.js?");

/***/ }),

/***/ "./src/modules/involvementAPI.js":
/*!***************************************!*\
  !*** ./src/modules/involvementAPI.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst involvementAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/PHTvFFWrOpX4Hcee8n1y/likes/';\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (involvementAPI);\n\n//# sourceURL=webpack://webpack-tutorial/./src/modules/involvementAPI.js?");

/***/ }),

/***/ "./src/modules/popup.js":
/*!******************************!*\
  !*** ./src/modules/popup.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _addComment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addComment */ \"./src/modules/addComment.js\");\n/* harmony import */ var _comments__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comments */ \"./src/modules/comments.js\");\n/* harmony import */ var _fetchData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./fetchData */ \"./src/modules/fetchData.js\");\n\r\n\r\n\r\n\r\nconst getSingleData = async (id) => {\r\n  const getData = await (0,_fetchData__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n  const singleData = getData.find((data) => data.id === parseInt(id, 10));\r\n\r\n  const popup = document.querySelector('.popup');\r\n  const popupContent = document.querySelector('.popup-content');\r\n  const popupClose = document.querySelector('.popup-close');\r\n  popupContent.innerHTML = `<img src='${singleData.image.original}' alt='Thumbnail' class='img-card' >\r\n      <div class='popup-info'>\r\n          <h1>${singleData?.name}</h1>\r\n          <p><b>Genre(s):</b> ${singleData?.genres}</p>\r\n          <p class=\"summary\"><b>Summary:</b> ${singleData?.summary}</p>\r\n          <p class=\"commentsHTML\">Comments</p>\r\n         <h2></h2>\r\n         <div class=\"comments\">\r\n          <div class=\"showComments\"></div>\r\n         </div>\r\n        <section class=\"add-comment\">\r\n          <h1 class=\"addCommentHeader\">Add a comment</h1>\r\n          <form class=\"form\">\r\n              <div class=\"form-group\"><input type=\"text\"class=\"items\" id=\"name\" placeholder=\"Your name\"></div>\r\n              <div class=\"form-group\"><textarea type=\"text\" class=\"items\" id=\"comment\" placeholder=\"Your vision\" maxlength=\"400\"></textarea></div>\r\n              <input type=\"submit\" class=\"submit\" value=\"Comment\" id=\"subComment\"></input>\r\n          </form>\r\n         </section>\r\n      </div>\r\n      `;\r\n\r\n  const name = document.getElementById('name');\r\n  const comment = document.getElementById('comment');\r\n  const submit = document.getElementById('subComment');\r\n\r\n  submit.addEventListener('click', async (e) => {\r\n    e.preventDefault();\r\n\r\n    // Add new comment\r\n    if (name.value !== '' && comment.value !== '') {\r\n      await (0,_addComment__WEBPACK_IMPORTED_MODULE_0__.postComment)(singleData?.id, name.value, comment.value);\r\n      (0,_comments__WEBPACK_IMPORTED_MODULE_1__.addUi)(name.value, comment.value);\r\n      name.value = '';\r\n      comment.value = '';\r\n    }\r\n    // updateComment(singleData?.id);\r\n  });\r\n\r\n  // Update popup and add comments\r\n  (0,_comments__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(singleData?.id);\r\n\r\n  // Close button\r\n  popupClose.addEventListener('click', () => {\r\n    popup.classList.remove('show');\r\n    // clear the comments\r\n    const comments = document.querySelector('.comments');\r\n    comments.innerHTML = '';\r\n  });\r\n\r\n  popup.append(popupContent, popupClose);\r\n};\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getSingleData);\r\n\n\n//# sourceURL=webpack://webpack-tutorial/./src/modules/popup.js?");

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);