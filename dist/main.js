/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".keyboard {\n  position: fixed;\n  left: 0;\n  bottom: 0;\n  width: 100%;\n  min-width: 320px;\n  padding: 5px 0;\n  background-color: #004134;\n  box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  transition: bottom 0.4s;\n}\n.keyboard-row {\n  display: flex;\n  gap: 0.2%;\n  justify-content: center;\n}\n.keyboard__keys {\n  text-align: center;\n}\n.keyboard__key {\n  height: 45px;\n  min-width: 4.5%;\n  max-width: 90px;\n  margin: 3px;\n  border-radius: 4px;\n  border: none;\n  background-color: rgba(255, 255, 255, 0.2);\n  color: #fff;\n  font-size: 1.05rem;\n  outline: none;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  vertical-align: baseline;\n  padding: 0;\n  position: relative;\n}\n.keyboard__key:active {\n  background: rgba(255, 100, 100, 0.8);\n}\n.keyboard__key--long {\n  min-width: 7.5%;\n}\n.keyboard__key--space {\n  min-width: 20%;\n  max-width: 500px;\n}\n\n.active {\n  background: rgba(255, 100, 100, 0.8);\n}/*# sourceMappingURL=style.css.map */", "",{"version":3,"sources":["webpack://./src/style.scss","webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACA,eAAA;EACA,OAAA;EACA,SAAA;EACA,WAAA;EACA,gBAAA;EACA,cAAA;EACA,yBAAA;EACA,uCAAA;EACA,yBAAA;KAAA,sBAAA;MAAA,qBAAA;UAAA,iBAAA;EACA,uBAAA;ACCA;ADAA;EACI,aAAA;EACA,SAAA;EACA,uBAAA;ACEJ;ADCA;EACI,kBAAA;ACCJ;ADCA;EACI,YAAA;EACA,eAAA;EACA,eAAA;EACA,WAAA;EACA,kBAAA;EACA,YAAA;EACA,0CAAA;EACA,WAAA;EACA,kBAAA;EACA,aAAA;EACA,eAAA;EACA,oBAAA;EACA,mBAAA;EACA,uBAAA;EACA,wBAAA;EACA,UAAA;EACA,kBAAA;ACCJ;ADAI;EACI,oCAAA;ACER;ADAI;EACI,eAAA;ACER;ADAI;EACI,cAAA;EACA,gBAAA;ACER;;ADIA;EACA,oCAAA;ACDA,CAAA,oCAAA","sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/layout-en.js":
/*!**************************!*\
  !*** ./src/layout-en.js ***!
  \**************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const Layout = __webpack_require__(/*! ./modules/layout.js */ "./src/modules/layout.js")

const layout = new Layout("ENG")
module.exports = layout
layout.addMapping("Backquote", "`", "~", "ё", "Ё")
layout.addMapping("Digit1", "1", "!", "1", "!")
layout.addMapping("Digit2", "2", '@', "2", '"')
layout.addMapping("Digit3", "3", "#", "3", "№")
layout.addMapping("Digit4", "4", "$", "4", ";")
layout.addMapping("Digit5", "5", "%", "5", "%")
layout.addMapping("Digit6", "6", "^", "6", ":")
layout.addMapping("Digit7", "7", "&", "7", "?")
layout.addMapping("Digit8", "8", "*", "8", "*")
layout.addMapping("Digit9", "9", "(", "9", "(")
layout.addMapping("Digit0", "0", ")", "0", ")")
layout.addMapping("Minus", "-", "_", "-", "_")
layout.addMapping("Equal", "=", "+", "=", "+")
layout.addMapping("KeyQ", "q", "Q", "й", "Й")
layout.addMapping("KeyW", "w", "W", "ц", "Ц")
layout.addMapping("KeyE", "e", "E", "у", "У")
layout.addMapping("KeyR", "r", "R", "к", "К")
layout.addMapping("KeyT", "t", "T", "е", "Е")
layout.addMapping("KeyY", "y", "Y", "н", "Н")
layout.addMapping("KeyU", "u", "U", "г", "Г")
layout.addMapping("KeyI", "i", "I", "ш", "Ш")
layout.addMapping("KeyO", "o", "O", "щ", "Щ")
layout.addMapping("KeyP", "p", "P", "з", "З")
layout.addMapping("BracketLeft", "[", "{", "х", "Х")
layout.addMapping("BracketRight", "]", "}", "ъ", "Ъ")
layout.addMapping("Backslash", "\\", "|", "\\", "/")
layout.addMapping("KeyA", "a", "A", "ф", "Ф")
layout.addMapping("KeyS", "s", "S", "ы", "Ы")
layout.addMapping("KeyD", "d", "D", "в", "В")
layout.addMapping("KeyF", "f", "F", "а", "А")
layout.addMapping("KeyG", "g", "G", "п", "П")
layout.addMapping("KeyH", "h", "H", "р", "Р")
layout.addMapping("KeyJ", "j", "J", "о", "О")
layout.addMapping("KeyK", "k", "K", "л", "Л")
layout.addMapping("KeyL", "l", "L", "д", "Д")
layout.addMapping("Semicolon", ";", ":", "ж", "Ж")
layout.addMapping("Quote", "'", '"', "э", 'Э')
layout.addMapping("KeyZ", "z", "Z", "я", "Я")
layout.addMapping("KeyX", "x", "X", "ч", "Ч")
layout.addMapping("KeyC", "c", "C", "с", "С")
layout.addMapping("KeyV", "v", "V", "м", "М")
layout.addMapping("KeyB", "b", "B", "и", "И")
layout.addMapping("KeyN", "n", "N", "т", "Т")
layout.addMapping("KeyM", "m", "M", "ь", "Ь")
layout.addMapping("Comma", ",", "<", "б", "Б")
layout.addMapping("Period", ".", ">", "ю", "Ю")
layout.addMapping("Slash", "/", "?", ".", ",")
console.log(layout.mappings)

/***/ }),

/***/ "./src/modules/key.js":
/*!****************************!*\
  !*** ./src/modules/key.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Key)
/* harmony export */ });
class Key {
  constructor(type, code, capName) {
    this.type = type;
    this.code = code;
    this.capName = capName ?? code;
  }
}


/***/ }),

/***/ "./src/modules/keyboard.js":
/*!*********************************!*\
  !*** ./src/modules/keyboard.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Keyboard)
/* harmony export */ });
/* harmony import */ var _layout_en__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../layout-en */ "./src/layout-en.js");
/* harmony import */ var _layout_en__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_layout_en__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./key */ "./src/modules/key.js");



const capTypes = ['normal', 'long', 'space'];

class Keyboard 
{
  constructor() {
    this.rows = [
      [
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](0, 'Backquote'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](0, 'Digit1'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](0, 'Digit2'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](0, 'Digit3'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](0, 'Digit4'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](0, 'Digit5'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](0, 'Digit6'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](0, 'Digit7'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](0, 'Digit8'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](0, 'Digit9'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](0, 'Digit0'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](0, 'Minus'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](0, 'Equal'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](1, 'Backspace'),
      ],
      [
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](1, 'Tab'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](0, 'KeyQ'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](0, 'KeyW'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](0, 'KeyE'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](0, 'KeyR'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](0, 'KeyT'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](0, 'KeyY'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](0, 'KeyU'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](0, 'KeyI'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](0, 'KeyO'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](0, 'KeyP'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](0, 'BracketLeft'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](0, 'BracketRight'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](0, 'Backslash'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](0, 'Delete', 'Del'),
      ],
      [
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](1, 'CapsLock', 'Caps Lock'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](0, 'KeyA'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](0, 'KeyS'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](0, 'KeyD'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](0, 'KeyF'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](0, 'KeyG'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](0, 'KeyH'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](0, 'KeyJ'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](0, 'KeyK'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](0, 'KeyL'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](0, 'Semicolon'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](0, 'Quote'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](1, 'Enter'),
      ],
      [
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](1, 'ShiftLeft', 'Shift'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](0, 'KeyZ'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](0, 'KeyX'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](0, 'KeyC'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](0, 'KeyV'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](0, 'KeyB'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](0, 'KeyN'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](0, 'KeyM'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](0, 'Comma'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](0, 'Period'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](0, 'Slash'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](1, 'ShiftRight', 'Shift'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](0, 'ArrowUp', '&#x2191;'),
      ],
      [
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](1, 'ControlLeft', 'Ctrl'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](1, 'Super', 'Win'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](1, 'AltLeft', 'Alt'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](2, 'Space'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](1, 'AltRight', 'Alt'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](1, 'ControlRight', 'Ctrl'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](0, 'ArrowLeft', '&#x2190;'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](0, 'ArrowDown', '&#x2193;'),
        new _key__WEBPACK_IMPORTED_MODULE_1__["default"](0, 'ArrowRight', '&#x2192;'),
      ],
    ];
    this.value = ''; // предварительное содержание поля для ввода клавиатурой
    this.capsLock = false; // текущий режим CapsLock
    this.cntrAlt = false;// текущий языковой режим
    this.shift = false;
    this.modifierState = true;
    this.langSwitch = 0;
    this.swithState = false;
  }

  create(arg) {
    if (document.cookie.match(/[0-2]/g) ===null) this.langSwitch = 0;
    else this.langSwitch = document.cookie.match(/[0-2]/g)[0];
    const container = document.createElement('div');
    container.classList.add('keyboard');
    this.rows.forEach((row) => {
      const rowElement = document.createElement('div');
      rowElement.classList.add('keyboard-row');
      container.appendChild(rowElement);
      row.forEach((key) => {
        const cap = document.createElement('div');
        cap.classList.add('keyboard__key');
        cap.classList.add(`keyboard__key--${capTypes[key.type]}`);
        let langVar = 0+Number(this.langSwitch);
        const capName = arg.getChar(key.code, langVar) ?? key.capName;
        cap.innerHTML = capName;
        cap.dataset.code = key.code;
        rowElement.appendChild(cap);
      });
    });
    this.container = container;
    return container;
  }

  backspace() {
    const inputValueArray = document.querySelector('.aim-field').value.split('');
    const selStart = document.querySelector('.aim-field').selectionStart;
    const selEnd = document.querySelector('.aim-field').selectionEnd;
    if (selEnd !== selStart) {
      inputValueArray.splice(selStart, selEnd - selStart);
      document.querySelector('.aim-field').value = inputValueArray.join('');
      document.querySelector('.aim-field').setSelectionRange(selStart, selStart);
      document.querySelector('.aim-field').focus();
    } else if (selStart !== 0) {
      inputValueArray.splice(selStart - 1, 1);
      document.querySelector('.aim-field').value = inputValueArray.join('');
      document.querySelector('.aim-field').setSelectionRange(selStart - 1, selEnd - 1);
      document.querySelector('.aim-field').focus();
    }
  }

  del() {
    const inputValueArray = document.querySelector('.aim-field').value.split('');
    const selStart = document.querySelector('.aim-field').selectionStart;
    const selEnd = document.querySelector('.aim-field').selectionEnd;
    if (selEnd !== selStart) {
      inputValueArray.splice(selStart, selEnd - selStart);
      document.querySelector('.aim-field').value = inputValueArray.join('');
      document.querySelector('.aim-field').setSelectionRange(selStart, selStart);
    } else {
      inputValueArray.splice(selStart, 1);
      document.querySelector('.aim-field').value = inputValueArray.join('');
      document.querySelector('.aim-field').setSelectionRange(selStart, selEnd);
      document.querySelector('.aim-field').focus();
    }
  }

  toggleCapslock(e, arg) {

    this.capsLock = !this.capsLock;
    const keys = document.querySelectorAll('.keyboard__key');
    keys.forEach((e) => {
      let langVar = Number(this.langSwitch);
      if (e.dataset.code.includes('Key') && this.capsLock === true) e.innerHTML = [...arg.mappings.get(e.dataset.code)[1+langVar]];
      else if (e.dataset.code.includes('Key') && this.capsLock === false) e.innerHTML = [...arg.mappings.get(e.dataset.code)[0+langVar]];
    });
    if (e.getModifierState('CapsLock')) this.modifierState = false;
  }

  toggleShift(e, arg) {
    this.shift = true;
    const keys = document.querySelectorAll('.keyboard__key');
    keys.forEach((k) => {
      const shiftKey = arg.mappings.get(k.dataset.code);
      let langVar = 1+Number(this.langSwitch);
      if (shiftKey !==undefined) k.innerHTML = [...arg.mappings.get(k.dataset.code)[langVar]];
    });
  }

  clickShift(arg) {
    document.querySelector('.aim-field').focus();
    this.shift = true;
    const keys = document.querySelectorAll('.keyboard__key');
    onmousedown = (e) => {
      keys.forEach((k) => {
        const shiftKey = arg.mappings.get(k.dataset.code);        
        let langVar = 1+Number(this.langSwitch);
        if (shiftKey) k.innerHTML = [...arg.mappings.get(k.dataset.code)[langVar]];
      }); 
    }
  }

  cancelShift(arg)
  {
    const keys = document.querySelectorAll('.keyboard__key');
    onmouseup = (e) => {
      if (e.target.innerText === 'Shift') {
        this.shift = false;
        keys.forEach((k) => {
          const shiftKey = arg.mappings.get(k.dataset.code);
          let langVar = 0+Number(this.langSwitch);
          if (shiftKey) k.innerHTML = [...shiftKey[langVar]];
        });
      }
    };
  }

  directInput(e, arg) 
  {
    if (e.code ==='ShiftLeft') document.querySelector("[data-code='ShiftLeft']").classList.add('active');
    if (e.code ==='ShiftRight') document.querySelector("[data-code='ShiftRight']").classList.add('active');
    if (e.code==='AltLeft') document.querySelector("[data-code='AltLeft']").classList.add('active');
    if (e.code==='AltRight' && e.key === 'AltGraph') document.querySelector("[data-code='AltRight']").classList.add('active');
    if (e.code==='ControlLeft') document.querySelector("[data-code='ControlLeft']").classList.add('active');
    if (e.code==='ControlRight') document.querySelector("[data-code='ControlRight']").classList.add('active');
    if (e.code === 'CapsLock' || (e.getModifierState('CapsLock') && this.modifierState)) {
      this.toggleCapslock(e, arg);
    }
    if (e.key === 'Shift') {
      this.toggleShift(e, arg);
    }
    if (e.key === 'Tab') {
      e.preventDefault();
      const inputValueArray = document.querySelector('.aim-field').value.split('');
      const selStart = document.querySelector('.aim-field').selectionStart;
      const selEnd = document.querySelector('.aim-field').selectionEnd;
      inputValueArray.splice(selStart, 0, '\t');
      document.querySelector('.aim-field').value = inputValueArray.join('');
      this.selectionStart = this.selectionEnd;
      document.querySelector('.aim-field').setSelectionRange(selStart + 1, selEnd + 1);
      document.querySelector('.aim-field').focus();
    }
    document.querySelector(`[data-code='${e.code}']`).classList.add('active');
    if ((this.capsLock) && e.code.includes('Key')) {
      const shiftKey = arg.mappings.get(e.code);
      let langVar = 1+Number(this.langSwitch);
      document.querySelector('.aim-field').value += [...shiftKey[langVar]];
      e.preventDefault(); 
    } if ((this.shift)) {
      const shiftKey = arg.mappings.get(e.code);
      let langVar = 1+Number(this.langSwitch);
      document.querySelector('.aim-field').value += [...shiftKey[langVar]];
      e.preventDefault(); 
    } else if (arg.mappings.get(e.code) !== undefined) { 
      const shiftKey = arg.mappings.get(e.code);
      let langVar = 0+Number(this.langSwitch);
      document.querySelector('.aim-field').value += [...shiftKey[langVar]]; 
      e.preventDefault(); 
    }
    document.querySelector('.aim-field').focus();
  }

  releaseKey(e, arg) 
  {
    const keys = document.querySelectorAll('.keyboard__key');
    if (document.querySelector('.active') !== null) document.querySelector('.active').classList.remove('active');
    if (e.key === 'Shift') {
      this.shift = false;
      keys.forEach((k) => {
        const shiftKey = arg.mappings.get(k.dataset.code);
        let langVar = 0+Number(this.langSwitch);
        if (shiftKey) k.innerHTML = [...shiftKey[langVar]];
      });
    }
  }

  addByClick(e, arg)
  {
    if ((arg.mappings.get(e.target.dataset.code) !== undefined) || !!e.target.dataset.code) {
      const inputValueArray = document.querySelector('.aim-field').value.split('');
      const selStart = document.querySelector('.aim-field').selectionStart;
      const selEnd = document.querySelector('.aim-field').selectionEnd;
      const key = arg.mappings.get(e.target.dataset.code);
      if ((this.shift) && e.target.innerText !== 'Tab' && key!== undefined) {
        let langVar = 1+Number(this.langSwitch);
        inputValueArray.splice(selStart, 0, key[langVar]);
        document.querySelector('.aim-field').value = inputValueArray.join('');
        document.querySelector('.aim-field').setSelectionRange(selStart + 1, selEnd + 1);
        document.querySelector('.aim-field').focus();
      } else if ((this.capsLock && !this.shift) && e.target.innerText !== 'Tab' && key!== undefined) {
        let langVar;
        if (e.target.dataset.code.includes('Key')) langVar = 1+Number(this.langSwitch);
        else if (e.target.dataset.code.includes('Digit')) langVar = 0+Number(this.langSwitch);
        inputValueArray.splice(selStart, 0, key[langVar]);
        document.querySelector('.aim-field').value = inputValueArray.join('');
        document.querySelector('.aim-field').setSelectionRange(selStart + 1, selEnd + 1);
        document.querySelector('.aim-field').focus();
      } else if (e.target.innerText === 'Tab') {
        inputValueArray.splice(selStart, 0, '\t');
        let value = document.querySelector('.aim-field').value;
        document.querySelector('.aim-field').value = inputValueArray.join('');
        this.selectionStart = this.selectionEnd;
        document.querySelector('.aim-field').setSelectionRange(selStart + 1, selEnd + 1);
        document.querySelector('.aim-field').focus();
      } else if (e.target.innerText === 'Enter') {
        inputValueArray.splice(selStart, 0, '\n');
        let value = document.querySelector('.aim-field').value;
        document.querySelector('.aim-field').value = inputValueArray.join('');
        this.selectionStart = this.selectionEnd;
        document.querySelector('.aim-field').setSelectionRange(selStart + 1, selEnd + 1);
        document.querySelector('.aim-field').focus();
      } else if (e.target.innerText === 'Space') {
        inputValueArray.splice(selStart, 0, ' ');
        let value = document.querySelector('.aim-field').value;
        document.querySelector('.aim-field').value = inputValueArray.join('');
        this.selectionStart = this.selectionEnd;
        document.querySelector('.aim-field').setSelectionRange(selStart + 1, selEnd + 1);
        document.querySelector('.aim-field').focus();
      } else if (e.target.dataset.code.includes('Arrow')) { 
        inputValueArray.splice(selStart, 0, e.target.innerHTML);
        let value = document.querySelector('.aim-field').value;
        document.querySelector('.aim-field').value = inputValueArray.join('');
        this.selectionStart = this.selectionEnd;
        document.querySelector('.aim-field').setSelectionRange(selStart + 1, selEnd + 1);
        document.querySelector('.aim-field').focus();
      } else if (key!== undefined) {
        let langVar = 0 + Number(this.langSwitch)
        inputValueArray.splice(selStart, 0, key[langVar]).join('');
        document.querySelector('.aim-field').value = inputValueArray.join('');
        document.querySelector('.aim-field').setSelectionRange(selStart + 1, selEnd + 1);
        document.querySelector('.aim-field').focus();
      }
    }
  }
  switchLang(arg)
  {
    onkeydown = (e) => {
      if (e.ctrlKey && e.altKey ) {
        {
          this.swithState=!this.swithState;
          if (this.swithState) { 
            this.langSwitch = 2;
          } else {
          this.langSwitch = 0;
          }
          const keys = document.querySelectorAll('.keyboard__key');
          keys.forEach((k) => {
            const shiftKey = arg.mappings.get(k.dataset.code);
            let langVar = 0+Number(this.langSwitch);
            if (shiftKey) k.innerHTML = [...shiftKey[langVar]];
          });
        }
        document.cookie=`this.langSwitch=${this.langSwitch}; secure;`;
      }
    }
  }
}


/***/ }),

/***/ "./src/modules/layout.js":
/*!*******************************!*\
  !*** ./src/modules/layout.js ***!
  \*******************************/
/***/ ((module) => {

/**
 * Класс layout 
 */

module.exports = class Layout {
  constructor(name) {
    this.name = name;

    /**
     * @type {Map<string,string[]>}
     */
    this.mappings = new Map();
  }

  /**
   * @example
   * layout.addMapping("KeyQ", "й", "Й")
   */
  addMapping(code, char, char2, char3, char4) {
    this.mappings.set(code, [char, char2, char3, char4]);
  }

  /**
   * @param {0|1} num Variation
   * @return string
   */
  getChar(code, num) {
    const chars = this.mappings.get(code);
    if (!chars) return;
    return chars[num];
  }
}

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");

const Keyboard = (__webpack_require__(/*! ./modules/keyboard */ "./src/modules/keyboard.js")["default"]);
const layout = __webpack_require__(/*! ./layout-en */ "./src/layout-en.js");
const keyboard = new Keyboard();
const keyboardContainer = keyboard.create(layout);
const textInfo = document.createElement('div');
let cost = 1;
document.body.appendChild(keyboardContainer);
document.body.inputField = document.createElement('textarea');
document.body.inputField.classList.add('aim-field');
document.body.appendChild(textInfo);
textInfo.innerHTML = 'Клавиатура создана в Windows. Переключение языка: левые ctrl + alt'
document.body.appendChild(document.body.inputField);  
document.body.appendChild(document.body.inputField).focus();
document.querySelector("[data-code='Backspace']").addEventListener('click', keyboard.backspace);
document.querySelector("[data-code='Delete']").addEventListener('click', keyboard.del);
document.querySelector("[data-code='CapsLock']").addEventListener('click', function(event) {keyboard.toggleCapslock(event, layout)});
document.querySelector("[data-code='ShiftLeft']").addEventListener('mousedown', function() {keyboard.clickShift(layout)});
document.querySelector("[data-code='ShiftRight']").addEventListener('mousedown', function() {keyboard.clickShift(layout)});
document.addEventListener('mouseup', function () {keyboard.cancelShift(layout)});
window.addEventListener('keydown', function(event) {keyboard.directInput(event, layout)});
document.body.inputField.addEventListener('keyup', function(event) {keyboard.releaseKey(event, layout)});
document.querySelector('.keyboard').addEventListener('click', function(event) {keyboard.addByClick(event, layout)});
document.addEventListener('keydown', function () {keyboard.switchLang(layout)});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFHO0FBQ2YsWUFBWSw0Q0FBRztBQUNmLFlBQVksNENBQUc7QUFDZixZQUFZLDRDQUFHO0FBQ2YsWUFBWSw0Q0FBRztBQUNmLFlBQVksNENBQUc7QUFDZixZQUFZLDRDQUFHO0FBQ2YsWUFBWSw0Q0FBRztBQUNmLFlBQVksNENBQUc7QUFDZixZQUFZLDRDQUFHO0FBQ2YsWUFBWSw0Q0FBRztBQUNmLFlBQVksNENBQUc7QUFDZjtBQUNBO0FBQ0EsWUFBWSw0Q0FBRztBQUNmLFlBQVksNENBQUc7QUFDZixZQUFZLDRDQUFHO0FBQ2YsWUFBWSw0Q0FBRztBQUNmLFlBQVksNENBQUc7QUFDZixZQUFZLDRDQUFHO0FBQ2YsWUFBWSw0Q0FBRztBQUNmLFlBQVksNENBQUc7QUFDZixZQUFZLDRDQUFHO0FBQ2YsWUFBWSw0Q0FBRztBQUNmLFlBQVksNENBQUc7QUFDZixZQUFZLDRDQUFHO0FBQ2YsWUFBWSw0Q0FBRztBQUNmLFlBQVksNENBQUc7QUFDZixZQUFZLDRDQUFHO0FBQ2Y7QUFDQTtBQUNBLFlBQVksNENBQUc7QUFDZixZQUFZLDRDQUFHO0FBQ2YsWUFBWSw0Q0FBRztBQUNmLFlBQVksNENBQUc7QUFDZixZQUFZLDRDQUFHO0FBQ2YsWUFBWSw0Q0FBRztBQUNmLFlBQVksNENBQUc7QUFDZixZQUFZLDRDQUFHO0FBQ2YsWUFBWSw0Q0FBRztBQUNmLFlBQVksNENBQUc7QUFDZixZQUFZLDRDQUFHO0FBQ2YsWUFBWSw0Q0FBRztBQUNmLFlBQVksNENBQUc7QUFDZjtBQUNBO0FBQ0EsWUFBWSw0Q0FBRztBQUNmLFlBQVksNENBQUc7QUFDZixZQUFZLDRDQUFHO0FBQ2YsWUFBWSw0Q0FBRztBQUNmLFlBQVksNENBQUc7QUFDZixZQUFZLDRDQUFHO0FBQ2YsWUFBWSw0Q0FBRztBQUNmLFlBQVksNENBQUc7QUFDZixZQUFZLDRDQUFHO0FBQ2YsWUFBWSw0Q0FBRztBQUNmLFlBQVksNENBQUc7QUFDZixZQUFZLDRDQUFHO0FBQ2YsWUFBWSw0Q0FBRyx3QkFBd0I7QUFDdkM7QUFDQTtBQUNBLFlBQVksNENBQUc7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O1VDL0JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnFCO0FBQ3JCLGlCQUFpQix1RkFBcUM7QUFDdEQsZUFBZSxtQkFBTyxDQUFDLHVDQUFhO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEZBQTRGLHVDQUF1QztBQUNuSSw0RkFBNEYsNEJBQTRCO0FBQ3hILDZGQUE2Riw0QkFBNEI7QUFDekgsa0RBQWtELDZCQUE2QjtBQUMvRSxvREFBb0Qsb0NBQW9DO0FBQ3hGLG9FQUFvRSxtQ0FBbUM7QUFDdkcsK0VBQStFLG1DQUFtQztBQUNsSCxrREFBa0QsNEJBQTRCLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92aXJ0dWFsLWtleWJvYXJkLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly92aXJ0dWFsLWtleWJvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly92aXJ0dWFsLWtleWJvYXJkLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdmlydHVhbC1rZXlib2FyZC8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly92aXJ0dWFsLWtleWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdmlydHVhbC1rZXlib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly92aXJ0dWFsLWtleWJvYXJkLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdmlydHVhbC1rZXlib2FyZC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvLi9zcmMvbGF5b3V0LWVuLmpzIiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvLi9zcmMvbW9kdWxlcy9rZXkuanMiLCJ3ZWJwYWNrOi8vdmlydHVhbC1rZXlib2FyZC8uL3NyYy9tb2R1bGVzL2tleWJvYXJkLmpzIiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvLi9zcmMvbW9kdWxlcy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vdmlydHVhbC1rZXlib2FyZC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly92aXJ0dWFsLWtleWJvYXJkL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3ZpcnR1YWwta2V5Ym9hcmQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly92aXJ0dWFsLWtleWJvYXJkL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdmlydHVhbC1rZXlib2FyZC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5rZXlib2FyZCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICBsZWZ0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4td2lkdGg6IDMyMHB4O1xcbiAgcGFkZGluZzogNXB4IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA0MTM0O1xcbiAgYm94LXNoYWRvdzogMCAwIDUwcHggcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcXG4gIHRyYW5zaXRpb246IGJvdHRvbSAwLjRzO1xcbn1cXG4ua2V5Ym9hcmQtcm93IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDAuMiU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuLmtleWJvYXJkX19rZXlzIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLmtleWJvYXJkX19rZXkge1xcbiAgaGVpZ2h0OiA0NXB4O1xcbiAgbWluLXdpZHRoOiA0LjUlO1xcbiAgbWF4LXdpZHRoOiA5MHB4O1xcbiAgbWFyZ2luOiAzcHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICBib3JkZXI6IG5vbmU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XFxuICBjb2xvcjogI2ZmZjtcXG4gIGZvbnQtc2l6ZTogMS4wNXJlbTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXG4gIHBhZGRpbmc6IDA7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbi5rZXlib2FyZF9fa2V5OmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTAwLCAxMDAsIDAuOCk7XFxufVxcbi5rZXlib2FyZF9fa2V5LS1sb25nIHtcXG4gIG1pbi13aWR0aDogNy41JTtcXG59XFxuLmtleWJvYXJkX19rZXktLXNwYWNlIHtcXG4gIG1pbi13aWR0aDogMjAlO1xcbiAgbWF4LXdpZHRoOiA1MDBweDtcXG59XFxuXFxuLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMTAwLCAxMDAsIDAuOCk7XFxufS8qIyBzb3VyY2VNYXBwaW5nVVJMPXN0eWxlLmNzcy5tYXAgKi9cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNBLGVBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLHVDQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFDQSx1QkFBQTtBQ0NBO0FEQUE7RUFDSSxhQUFBO0VBQ0EsU0FBQTtFQUNBLHVCQUFBO0FDRUo7QURDQTtFQUNJLGtCQUFBO0FDQ0o7QURDQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSwwQ0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUNDSjtBREFJO0VBQ0ksb0NBQUE7QUNFUjtBREFJO0VBQ0ksZUFBQTtBQ0VSO0FEQUk7RUFDSSxjQUFBO0VBQ0EsZ0JBQUE7QUNFUjs7QURJQTtFQUNBLG9DQUFBO0FDREEsQ0FBQSxvQ0FBQVwiLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBMYXlvdXQgPSByZXF1aXJlKFwiLi9tb2R1bGVzL2xheW91dC5qc1wiKVxyXG5cclxuY29uc3QgbGF5b3V0ID0gbmV3IExheW91dChcIkVOR1wiKVxyXG5tb2R1bGUuZXhwb3J0cyA9IGxheW91dFxyXG5sYXlvdXQuYWRkTWFwcGluZyhcIkJhY2txdW90ZVwiLCBcImBcIiwgXCJ+XCIsIFwi0ZFcIiwgXCLQgVwiKVxyXG5sYXlvdXQuYWRkTWFwcGluZyhcIkRpZ2l0MVwiLCBcIjFcIiwgXCIhXCIsIFwiMVwiLCBcIiFcIilcclxubGF5b3V0LmFkZE1hcHBpbmcoXCJEaWdpdDJcIiwgXCIyXCIsICdAJywgXCIyXCIsICdcIicpXHJcbmxheW91dC5hZGRNYXBwaW5nKFwiRGlnaXQzXCIsIFwiM1wiLCBcIiNcIiwgXCIzXCIsIFwi4oSWXCIpXHJcbmxheW91dC5hZGRNYXBwaW5nKFwiRGlnaXQ0XCIsIFwiNFwiLCBcIiRcIiwgXCI0XCIsIFwiO1wiKVxyXG5sYXlvdXQuYWRkTWFwcGluZyhcIkRpZ2l0NVwiLCBcIjVcIiwgXCIlXCIsIFwiNVwiLCBcIiVcIilcclxubGF5b3V0LmFkZE1hcHBpbmcoXCJEaWdpdDZcIiwgXCI2XCIsIFwiXlwiLCBcIjZcIiwgXCI6XCIpXHJcbmxheW91dC5hZGRNYXBwaW5nKFwiRGlnaXQ3XCIsIFwiN1wiLCBcIiZcIiwgXCI3XCIsIFwiP1wiKVxyXG5sYXlvdXQuYWRkTWFwcGluZyhcIkRpZ2l0OFwiLCBcIjhcIiwgXCIqXCIsIFwiOFwiLCBcIipcIilcclxubGF5b3V0LmFkZE1hcHBpbmcoXCJEaWdpdDlcIiwgXCI5XCIsIFwiKFwiLCBcIjlcIiwgXCIoXCIpXHJcbmxheW91dC5hZGRNYXBwaW5nKFwiRGlnaXQwXCIsIFwiMFwiLCBcIilcIiwgXCIwXCIsIFwiKVwiKVxyXG5sYXlvdXQuYWRkTWFwcGluZyhcIk1pbnVzXCIsIFwiLVwiLCBcIl9cIiwgXCItXCIsIFwiX1wiKVxyXG5sYXlvdXQuYWRkTWFwcGluZyhcIkVxdWFsXCIsIFwiPVwiLCBcIitcIiwgXCI9XCIsIFwiK1wiKVxyXG5sYXlvdXQuYWRkTWFwcGluZyhcIktleVFcIiwgXCJxXCIsIFwiUVwiLCBcItC5XCIsIFwi0JlcIilcclxubGF5b3V0LmFkZE1hcHBpbmcoXCJLZXlXXCIsIFwid1wiLCBcIldcIiwgXCLRhlwiLCBcItCmXCIpXHJcbmxheW91dC5hZGRNYXBwaW5nKFwiS2V5RVwiLCBcImVcIiwgXCJFXCIsIFwi0YNcIiwgXCLQo1wiKVxyXG5sYXlvdXQuYWRkTWFwcGluZyhcIktleVJcIiwgXCJyXCIsIFwiUlwiLCBcItC6XCIsIFwi0JpcIilcclxubGF5b3V0LmFkZE1hcHBpbmcoXCJLZXlUXCIsIFwidFwiLCBcIlRcIiwgXCLQtVwiLCBcItCVXCIpXHJcbmxheW91dC5hZGRNYXBwaW5nKFwiS2V5WVwiLCBcInlcIiwgXCJZXCIsIFwi0L1cIiwgXCLQnVwiKVxyXG5sYXlvdXQuYWRkTWFwcGluZyhcIktleVVcIiwgXCJ1XCIsIFwiVVwiLCBcItCzXCIsIFwi0JNcIilcclxubGF5b3V0LmFkZE1hcHBpbmcoXCJLZXlJXCIsIFwiaVwiLCBcIklcIiwgXCLRiFwiLCBcItCoXCIpXHJcbmxheW91dC5hZGRNYXBwaW5nKFwiS2V5T1wiLCBcIm9cIiwgXCJPXCIsIFwi0YlcIiwgXCLQqVwiKVxyXG5sYXlvdXQuYWRkTWFwcGluZyhcIktleVBcIiwgXCJwXCIsIFwiUFwiLCBcItC3XCIsIFwi0JdcIilcclxubGF5b3V0LmFkZE1hcHBpbmcoXCJCcmFja2V0TGVmdFwiLCBcIltcIiwgXCJ7XCIsIFwi0YVcIiwgXCLQpVwiKVxyXG5sYXlvdXQuYWRkTWFwcGluZyhcIkJyYWNrZXRSaWdodFwiLCBcIl1cIiwgXCJ9XCIsIFwi0YpcIiwgXCLQqlwiKVxyXG5sYXlvdXQuYWRkTWFwcGluZyhcIkJhY2tzbGFzaFwiLCBcIlxcXFxcIiwgXCJ8XCIsIFwiXFxcXFwiLCBcIi9cIilcclxubGF5b3V0LmFkZE1hcHBpbmcoXCJLZXlBXCIsIFwiYVwiLCBcIkFcIiwgXCLRhFwiLCBcItCkXCIpXHJcbmxheW91dC5hZGRNYXBwaW5nKFwiS2V5U1wiLCBcInNcIiwgXCJTXCIsIFwi0YtcIiwgXCLQq1wiKVxyXG5sYXlvdXQuYWRkTWFwcGluZyhcIktleURcIiwgXCJkXCIsIFwiRFwiLCBcItCyXCIsIFwi0JJcIilcclxubGF5b3V0LmFkZE1hcHBpbmcoXCJLZXlGXCIsIFwiZlwiLCBcIkZcIiwgXCLQsFwiLCBcItCQXCIpXHJcbmxheW91dC5hZGRNYXBwaW5nKFwiS2V5R1wiLCBcImdcIiwgXCJHXCIsIFwi0L9cIiwgXCLQn1wiKVxyXG5sYXlvdXQuYWRkTWFwcGluZyhcIktleUhcIiwgXCJoXCIsIFwiSFwiLCBcItGAXCIsIFwi0KBcIilcclxubGF5b3V0LmFkZE1hcHBpbmcoXCJLZXlKXCIsIFwialwiLCBcIkpcIiwgXCLQvlwiLCBcItCeXCIpXHJcbmxheW91dC5hZGRNYXBwaW5nKFwiS2V5S1wiLCBcImtcIiwgXCJLXCIsIFwi0LtcIiwgXCLQm1wiKVxyXG5sYXlvdXQuYWRkTWFwcGluZyhcIktleUxcIiwgXCJsXCIsIFwiTFwiLCBcItC0XCIsIFwi0JRcIilcclxubGF5b3V0LmFkZE1hcHBpbmcoXCJTZW1pY29sb25cIiwgXCI7XCIsIFwiOlwiLCBcItC2XCIsIFwi0JZcIilcclxubGF5b3V0LmFkZE1hcHBpbmcoXCJRdW90ZVwiLCBcIidcIiwgJ1wiJywgXCLRjVwiLCAn0K0nKVxyXG5sYXlvdXQuYWRkTWFwcGluZyhcIktleVpcIiwgXCJ6XCIsIFwiWlwiLCBcItGPXCIsIFwi0K9cIilcclxubGF5b3V0LmFkZE1hcHBpbmcoXCJLZXlYXCIsIFwieFwiLCBcIlhcIiwgXCLRh1wiLCBcItCnXCIpXHJcbmxheW91dC5hZGRNYXBwaW5nKFwiS2V5Q1wiLCBcImNcIiwgXCJDXCIsIFwi0YFcIiwgXCLQoVwiKVxyXG5sYXlvdXQuYWRkTWFwcGluZyhcIktleVZcIiwgXCJ2XCIsIFwiVlwiLCBcItC8XCIsIFwi0JxcIilcclxubGF5b3V0LmFkZE1hcHBpbmcoXCJLZXlCXCIsIFwiYlwiLCBcIkJcIiwgXCLQuFwiLCBcItCYXCIpXHJcbmxheW91dC5hZGRNYXBwaW5nKFwiS2V5TlwiLCBcIm5cIiwgXCJOXCIsIFwi0YJcIiwgXCLQolwiKVxyXG5sYXlvdXQuYWRkTWFwcGluZyhcIktleU1cIiwgXCJtXCIsIFwiTVwiLCBcItGMXCIsIFwi0KxcIilcclxubGF5b3V0LmFkZE1hcHBpbmcoXCJDb21tYVwiLCBcIixcIiwgXCI8XCIsIFwi0LFcIiwgXCLQkVwiKVxyXG5sYXlvdXQuYWRkTWFwcGluZyhcIlBlcmlvZFwiLCBcIi5cIiwgXCI+XCIsIFwi0Y5cIiwgXCLQrlwiKVxyXG5sYXlvdXQuYWRkTWFwcGluZyhcIlNsYXNoXCIsIFwiL1wiLCBcIj9cIiwgXCIuXCIsIFwiLFwiKVxyXG5jb25zb2xlLmxvZyhsYXlvdXQubWFwcGluZ3MpIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgS2V5IHtcclxuICBjb25zdHJ1Y3Rvcih0eXBlLCBjb2RlLCBjYXBOYW1lKSB7XHJcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgdGhpcy5jb2RlID0gY29kZTtcclxuICAgIHRoaXMuY2FwTmFtZSA9IGNhcE5hbWUgPz8gY29kZTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IGxheW91dCBmcm9tICcuLi9sYXlvdXQtZW4nO1xyXG5pbXBvcnQgS2V5IGZyb20gJy4va2V5JztcclxuXHJcbmNvbnN0IGNhcFR5cGVzID0gWydub3JtYWwnLCAnbG9uZycsICdzcGFjZSddO1xyXG5cclxuZXhwb3J0IGRlZmF1bHRcclxuY2xhc3MgS2V5Ym9hcmQgXHJcbntcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMucm93cyA9IFtcclxuICAgICAgW1xyXG4gICAgICAgIG5ldyBLZXkoMCwgJ0JhY2txdW90ZScpLFxyXG4gICAgICAgIG5ldyBLZXkoMCwgJ0RpZ2l0MScpLFxyXG4gICAgICAgIG5ldyBLZXkoMCwgJ0RpZ2l0MicpLFxyXG4gICAgICAgIG5ldyBLZXkoMCwgJ0RpZ2l0MycpLFxyXG4gICAgICAgIG5ldyBLZXkoMCwgJ0RpZ2l0NCcpLFxyXG4gICAgICAgIG5ldyBLZXkoMCwgJ0RpZ2l0NScpLFxyXG4gICAgICAgIG5ldyBLZXkoMCwgJ0RpZ2l0NicpLFxyXG4gICAgICAgIG5ldyBLZXkoMCwgJ0RpZ2l0NycpLFxyXG4gICAgICAgIG5ldyBLZXkoMCwgJ0RpZ2l0OCcpLFxyXG4gICAgICAgIG5ldyBLZXkoMCwgJ0RpZ2l0OScpLFxyXG4gICAgICAgIG5ldyBLZXkoMCwgJ0RpZ2l0MCcpLFxyXG4gICAgICAgIG5ldyBLZXkoMCwgJ01pbnVzJyksXHJcbiAgICAgICAgbmV3IEtleSgwLCAnRXF1YWwnKSxcclxuICAgICAgICBuZXcgS2V5KDEsICdCYWNrc3BhY2UnKSxcclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIG5ldyBLZXkoMSwgJ1RhYicpLFxyXG4gICAgICAgIG5ldyBLZXkoMCwgJ0tleVEnKSxcclxuICAgICAgICBuZXcgS2V5KDAsICdLZXlXJyksXHJcbiAgICAgICAgbmV3IEtleSgwLCAnS2V5RScpLFxyXG4gICAgICAgIG5ldyBLZXkoMCwgJ0tleVInKSxcclxuICAgICAgICBuZXcgS2V5KDAsICdLZXlUJyksXHJcbiAgICAgICAgbmV3IEtleSgwLCAnS2V5WScpLFxyXG4gICAgICAgIG5ldyBLZXkoMCwgJ0tleVUnKSxcclxuICAgICAgICBuZXcgS2V5KDAsICdLZXlJJyksXHJcbiAgICAgICAgbmV3IEtleSgwLCAnS2V5TycpLFxyXG4gICAgICAgIG5ldyBLZXkoMCwgJ0tleVAnKSxcclxuICAgICAgICBuZXcgS2V5KDAsICdCcmFja2V0TGVmdCcpLFxyXG4gICAgICAgIG5ldyBLZXkoMCwgJ0JyYWNrZXRSaWdodCcpLFxyXG4gICAgICAgIG5ldyBLZXkoMCwgJ0JhY2tzbGFzaCcpLFxyXG4gICAgICAgIG5ldyBLZXkoMCwgJ0RlbGV0ZScsICdEZWwnKSxcclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIG5ldyBLZXkoMSwgJ0NhcHNMb2NrJywgJ0NhcHMgTG9jaycpLFxyXG4gICAgICAgIG5ldyBLZXkoMCwgJ0tleUEnKSxcclxuICAgICAgICBuZXcgS2V5KDAsICdLZXlTJyksXHJcbiAgICAgICAgbmV3IEtleSgwLCAnS2V5RCcpLFxyXG4gICAgICAgIG5ldyBLZXkoMCwgJ0tleUYnKSxcclxuICAgICAgICBuZXcgS2V5KDAsICdLZXlHJyksXHJcbiAgICAgICAgbmV3IEtleSgwLCAnS2V5SCcpLFxyXG4gICAgICAgIG5ldyBLZXkoMCwgJ0tleUonKSxcclxuICAgICAgICBuZXcgS2V5KDAsICdLZXlLJyksXHJcbiAgICAgICAgbmV3IEtleSgwLCAnS2V5TCcpLFxyXG4gICAgICAgIG5ldyBLZXkoMCwgJ1NlbWljb2xvbicpLFxyXG4gICAgICAgIG5ldyBLZXkoMCwgJ1F1b3RlJyksXHJcbiAgICAgICAgbmV3IEtleSgxLCAnRW50ZXInKSxcclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIG5ldyBLZXkoMSwgJ1NoaWZ0TGVmdCcsICdTaGlmdCcpLFxyXG4gICAgICAgIG5ldyBLZXkoMCwgJ0tleVonKSxcclxuICAgICAgICBuZXcgS2V5KDAsICdLZXlYJyksXHJcbiAgICAgICAgbmV3IEtleSgwLCAnS2V5QycpLFxyXG4gICAgICAgIG5ldyBLZXkoMCwgJ0tleVYnKSxcclxuICAgICAgICBuZXcgS2V5KDAsICdLZXlCJyksXHJcbiAgICAgICAgbmV3IEtleSgwLCAnS2V5TicpLFxyXG4gICAgICAgIG5ldyBLZXkoMCwgJ0tleU0nKSxcclxuICAgICAgICBuZXcgS2V5KDAsICdDb21tYScpLFxyXG4gICAgICAgIG5ldyBLZXkoMCwgJ1BlcmlvZCcpLFxyXG4gICAgICAgIG5ldyBLZXkoMCwgJ1NsYXNoJyksXHJcbiAgICAgICAgbmV3IEtleSgxLCAnU2hpZnRSaWdodCcsICdTaGlmdCcpLFxyXG4gICAgICAgIG5ldyBLZXkoMCwgJ0Fycm93VXAnLCAnJiN4MjE5MTsnKSxcclxuICAgICAgXSxcclxuICAgICAgW1xyXG4gICAgICAgIG5ldyBLZXkoMSwgJ0NvbnRyb2xMZWZ0JywgJ0N0cmwnKSxcclxuICAgICAgICBuZXcgS2V5KDEsICdTdXBlcicsICdXaW4nKSxcclxuICAgICAgICBuZXcgS2V5KDEsICdBbHRMZWZ0JywgJ0FsdCcpLFxyXG4gICAgICAgIG5ldyBLZXkoMiwgJ1NwYWNlJyksXHJcbiAgICAgICAgbmV3IEtleSgxLCAnQWx0UmlnaHQnLCAnQWx0JyksXHJcbiAgICAgICAgbmV3IEtleSgxLCAnQ29udHJvbFJpZ2h0JywgJ0N0cmwnKSxcclxuICAgICAgICBuZXcgS2V5KDAsICdBcnJvd0xlZnQnLCAnJiN4MjE5MDsnKSxcclxuICAgICAgICBuZXcgS2V5KDAsICdBcnJvd0Rvd24nLCAnJiN4MjE5MzsnKSxcclxuICAgICAgICBuZXcgS2V5KDAsICdBcnJvd1JpZ2h0JywgJyYjeDIxOTI7JyksXHJcbiAgICAgIF0sXHJcbiAgICBdO1xyXG4gICAgdGhpcy52YWx1ZSA9ICcnOyAvLyDQv9GA0LXQtNCy0LDRgNC40YLQtdC70YzQvdC+0LUg0YHQvtC00LXRgNC20LDQvdC40LUg0L/QvtC70Y8g0LTQu9GPINCy0LLQvtC00LAg0LrQu9Cw0LLQuNCw0YLRg9GA0L7QuVxyXG4gICAgdGhpcy5jYXBzTG9jayA9IGZhbHNlOyAvLyDRgtC10LrRg9GJ0LjQuSDRgNC10LbQuNC8IENhcHNMb2NrXHJcbiAgICB0aGlzLmNudHJBbHQgPSBmYWxzZTsvLyDRgtC10LrRg9GJ0LjQuSDRj9C30YvQutC+0LLQvtC5INGA0LXQttC40LxcclxuICAgIHRoaXMuc2hpZnQgPSBmYWxzZTtcclxuICAgIHRoaXMubW9kaWZpZXJTdGF0ZSA9IHRydWU7XHJcbiAgICB0aGlzLmxhbmdTd2l0Y2ggPSAwO1xyXG4gICAgdGhpcy5zd2l0aFN0YXRlID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBjcmVhdGUoYXJnKSB7XHJcbiAgICBpZiAoZG9jdW1lbnQuY29va2llLm1hdGNoKC9bMC0yXS9nKSA9PT1udWxsKSB0aGlzLmxhbmdTd2l0Y2ggPSAwO1xyXG4gICAgZWxzZSB0aGlzLmxhbmdTd2l0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2goL1swLTJdL2cpWzBdO1xyXG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgna2V5Ym9hcmQnKTtcclxuICAgIHRoaXMucm93cy5mb3JFYWNoKChyb3cpID0+IHtcclxuICAgICAgY29uc3Qgcm93RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICByb3dFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2tleWJvYXJkLXJvdycpO1xyXG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocm93RWxlbWVudCk7XHJcbiAgICAgIHJvdy5mb3JFYWNoKChrZXkpID0+IHtcclxuICAgICAgICBjb25zdCBjYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICBjYXAuY2xhc3NMaXN0LmFkZCgna2V5Ym9hcmRfX2tleScpO1xyXG4gICAgICAgIGNhcC5jbGFzc0xpc3QuYWRkKGBrZXlib2FyZF9fa2V5LS0ke2NhcFR5cGVzW2tleS50eXBlXX1gKTtcclxuICAgICAgICBsZXQgbGFuZ1ZhciA9IDArTnVtYmVyKHRoaXMubGFuZ1N3aXRjaCk7XHJcbiAgICAgICAgY29uc3QgY2FwTmFtZSA9IGFyZy5nZXRDaGFyKGtleS5jb2RlLCBsYW5nVmFyKSA/PyBrZXkuY2FwTmFtZTtcclxuICAgICAgICBjYXAuaW5uZXJIVE1MID0gY2FwTmFtZTtcclxuICAgICAgICBjYXAuZGF0YXNldC5jb2RlID0ga2V5LmNvZGU7XHJcbiAgICAgICAgcm93RWxlbWVudC5hcHBlbmRDaGlsZChjYXApO1xyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XHJcbiAgICByZXR1cm4gY29udGFpbmVyO1xyXG4gIH1cclxuXHJcbiAgYmFja3NwYWNlKCkge1xyXG4gICAgY29uc3QgaW5wdXRWYWx1ZUFycmF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFpbS1maWVsZCcpLnZhbHVlLnNwbGl0KCcnKTtcclxuICAgIGNvbnN0IHNlbFN0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFpbS1maWVsZCcpLnNlbGVjdGlvblN0YXJ0O1xyXG4gICAgY29uc3Qgc2VsRW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFpbS1maWVsZCcpLnNlbGVjdGlvbkVuZDtcclxuICAgIGlmIChzZWxFbmQgIT09IHNlbFN0YXJ0KSB7XHJcbiAgICAgIGlucHV0VmFsdWVBcnJheS5zcGxpY2Uoc2VsU3RhcnQsIHNlbEVuZCAtIHNlbFN0YXJ0KTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFpbS1maWVsZCcpLnZhbHVlID0gaW5wdXRWYWx1ZUFycmF5LmpvaW4oJycpO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWltLWZpZWxkJykuc2V0U2VsZWN0aW9uUmFuZ2Uoc2VsU3RhcnQsIHNlbFN0YXJ0KTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFpbS1maWVsZCcpLmZvY3VzKCk7XHJcbiAgICB9IGVsc2UgaWYgKHNlbFN0YXJ0ICE9PSAwKSB7XHJcbiAgICAgIGlucHV0VmFsdWVBcnJheS5zcGxpY2Uoc2VsU3RhcnQgLSAxLCAxKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFpbS1maWVsZCcpLnZhbHVlID0gaW5wdXRWYWx1ZUFycmF5LmpvaW4oJycpO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWltLWZpZWxkJykuc2V0U2VsZWN0aW9uUmFuZ2Uoc2VsU3RhcnQgLSAxLCBzZWxFbmQgLSAxKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFpbS1maWVsZCcpLmZvY3VzKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkZWwoKSB7XHJcbiAgICBjb25zdCBpbnB1dFZhbHVlQXJyYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWltLWZpZWxkJykudmFsdWUuc3BsaXQoJycpO1xyXG4gICAgY29uc3Qgc2VsU3RhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWltLWZpZWxkJykuc2VsZWN0aW9uU3RhcnQ7XHJcbiAgICBjb25zdCBzZWxFbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWltLWZpZWxkJykuc2VsZWN0aW9uRW5kO1xyXG4gICAgaWYgKHNlbEVuZCAhPT0gc2VsU3RhcnQpIHtcclxuICAgICAgaW5wdXRWYWx1ZUFycmF5LnNwbGljZShzZWxTdGFydCwgc2VsRW5kIC0gc2VsU3RhcnQpO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWltLWZpZWxkJykudmFsdWUgPSBpbnB1dFZhbHVlQXJyYXkuam9pbignJyk7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5haW0tZmllbGQnKS5zZXRTZWxlY3Rpb25SYW5nZShzZWxTdGFydCwgc2VsU3RhcnQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaW5wdXRWYWx1ZUFycmF5LnNwbGljZShzZWxTdGFydCwgMSk7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5haW0tZmllbGQnKS52YWx1ZSA9IGlucHV0VmFsdWVBcnJheS5qb2luKCcnKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFpbS1maWVsZCcpLnNldFNlbGVjdGlvblJhbmdlKHNlbFN0YXJ0LCBzZWxFbmQpO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWltLWZpZWxkJykuZm9jdXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRvZ2dsZUNhcHNsb2NrKGUsIGFyZykge1xyXG5cclxuICAgIHRoaXMuY2Fwc0xvY2sgPSAhdGhpcy5jYXBzTG9jaztcclxuICAgIGNvbnN0IGtleXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcua2V5Ym9hcmRfX2tleScpO1xyXG4gICAga2V5cy5mb3JFYWNoKChlKSA9PiB7XHJcbiAgICAgIGxldCBsYW5nVmFyID0gTnVtYmVyKHRoaXMubGFuZ1N3aXRjaCk7XHJcbiAgICAgIGlmIChlLmRhdGFzZXQuY29kZS5pbmNsdWRlcygnS2V5JykgJiYgdGhpcy5jYXBzTG9jayA9PT0gdHJ1ZSkgZS5pbm5lckhUTUwgPSBbLi4uYXJnLm1hcHBpbmdzLmdldChlLmRhdGFzZXQuY29kZSlbMStsYW5nVmFyXV07XHJcbiAgICAgIGVsc2UgaWYgKGUuZGF0YXNldC5jb2RlLmluY2x1ZGVzKCdLZXknKSAmJiB0aGlzLmNhcHNMb2NrID09PSBmYWxzZSkgZS5pbm5lckhUTUwgPSBbLi4uYXJnLm1hcHBpbmdzLmdldChlLmRhdGFzZXQuY29kZSlbMCtsYW5nVmFyXV07XHJcbiAgICB9KTtcclxuICAgIGlmIChlLmdldE1vZGlmaWVyU3RhdGUoJ0NhcHNMb2NrJykpIHRoaXMubW9kaWZpZXJTdGF0ZSA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgdG9nZ2xlU2hpZnQoZSwgYXJnKSB7XHJcbiAgICB0aGlzLnNoaWZ0ID0gdHJ1ZTtcclxuICAgIGNvbnN0IGtleXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcua2V5Ym9hcmRfX2tleScpO1xyXG4gICAga2V5cy5mb3JFYWNoKChrKSA9PiB7XHJcbiAgICAgIGNvbnN0IHNoaWZ0S2V5ID0gYXJnLm1hcHBpbmdzLmdldChrLmRhdGFzZXQuY29kZSk7XHJcbiAgICAgIGxldCBsYW5nVmFyID0gMStOdW1iZXIodGhpcy5sYW5nU3dpdGNoKTtcclxuICAgICAgaWYgKHNoaWZ0S2V5ICE9PXVuZGVmaW5lZCkgay5pbm5lckhUTUwgPSBbLi4uYXJnLm1hcHBpbmdzLmdldChrLmRhdGFzZXQuY29kZSlbbGFuZ1Zhcl1dO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjbGlja1NoaWZ0KGFyZykge1xyXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFpbS1maWVsZCcpLmZvY3VzKCk7XHJcbiAgICB0aGlzLnNoaWZ0ID0gdHJ1ZTtcclxuICAgIGNvbnN0IGtleXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcua2V5Ym9hcmRfX2tleScpO1xyXG4gICAgb25tb3VzZWRvd24gPSAoZSkgPT4ge1xyXG4gICAgICBrZXlzLmZvckVhY2goKGspID0+IHtcclxuICAgICAgICBjb25zdCBzaGlmdEtleSA9IGFyZy5tYXBwaW5ncy5nZXQoay5kYXRhc2V0LmNvZGUpOyAgICAgICAgXHJcbiAgICAgICAgbGV0IGxhbmdWYXIgPSAxK051bWJlcih0aGlzLmxhbmdTd2l0Y2gpO1xyXG4gICAgICAgIGlmIChzaGlmdEtleSkgay5pbm5lckhUTUwgPSBbLi4uYXJnLm1hcHBpbmdzLmdldChrLmRhdGFzZXQuY29kZSlbbGFuZ1Zhcl1dO1xyXG4gICAgICB9KTsgXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjYW5jZWxTaGlmdChhcmcpXHJcbiAge1xyXG4gICAgY29uc3Qga2V5cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5rZXlib2FyZF9fa2V5Jyk7XHJcbiAgICBvbm1vdXNldXAgPSAoZSkgPT4ge1xyXG4gICAgICBpZiAoZS50YXJnZXQuaW5uZXJUZXh0ID09PSAnU2hpZnQnKSB7XHJcbiAgICAgICAgdGhpcy5zaGlmdCA9IGZhbHNlO1xyXG4gICAgICAgIGtleXMuZm9yRWFjaCgoaykgPT4ge1xyXG4gICAgICAgICAgY29uc3Qgc2hpZnRLZXkgPSBhcmcubWFwcGluZ3MuZ2V0KGsuZGF0YXNldC5jb2RlKTtcclxuICAgICAgICAgIGxldCBsYW5nVmFyID0gMCtOdW1iZXIodGhpcy5sYW5nU3dpdGNoKTtcclxuICAgICAgICAgIGlmIChzaGlmdEtleSkgay5pbm5lckhUTUwgPSBbLi4uc2hpZnRLZXlbbGFuZ1Zhcl1dO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZGlyZWN0SW5wdXQoZSwgYXJnKSBcclxuICB7XHJcbiAgICBpZiAoZS5jb2RlID09PSdTaGlmdExlZnQnKSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtY29kZT0nU2hpZnRMZWZ0J11cIikuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICBpZiAoZS5jb2RlID09PSdTaGlmdFJpZ2h0JykgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWNvZGU9J1NoaWZ0UmlnaHQnXVwiKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIGlmIChlLmNvZGU9PT0nQWx0TGVmdCcpIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1jb2RlPSdBbHRMZWZ0J11cIikuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICBpZiAoZS5jb2RlPT09J0FsdFJpZ2h0JyAmJiBlLmtleSA9PT0gJ0FsdEdyYXBoJykgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWNvZGU9J0FsdFJpZ2h0J11cIikuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICBpZiAoZS5jb2RlPT09J0NvbnRyb2xMZWZ0JykgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIltkYXRhLWNvZGU9J0NvbnRyb2xMZWZ0J11cIikuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICBpZiAoZS5jb2RlPT09J0NvbnRyb2xSaWdodCcpIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1jb2RlPSdDb250cm9sUmlnaHQnXVwiKS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgIGlmIChlLmNvZGUgPT09ICdDYXBzTG9jaycgfHwgKGUuZ2V0TW9kaWZpZXJTdGF0ZSgnQ2Fwc0xvY2snKSAmJiB0aGlzLm1vZGlmaWVyU3RhdGUpKSB7XHJcbiAgICAgIHRoaXMudG9nZ2xlQ2Fwc2xvY2soZSwgYXJnKTtcclxuICAgIH1cclxuICAgIGlmIChlLmtleSA9PT0gJ1NoaWZ0Jykge1xyXG4gICAgICB0aGlzLnRvZ2dsZVNoaWZ0KGUsIGFyZyk7XHJcbiAgICB9XHJcbiAgICBpZiAoZS5rZXkgPT09ICdUYWInKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgY29uc3QgaW5wdXRWYWx1ZUFycmF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFpbS1maWVsZCcpLnZhbHVlLnNwbGl0KCcnKTtcclxuICAgICAgY29uc3Qgc2VsU3RhcnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWltLWZpZWxkJykuc2VsZWN0aW9uU3RhcnQ7XHJcbiAgICAgIGNvbnN0IHNlbEVuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5haW0tZmllbGQnKS5zZWxlY3Rpb25FbmQ7XHJcbiAgICAgIGlucHV0VmFsdWVBcnJheS5zcGxpY2Uoc2VsU3RhcnQsIDAsICdcXHQnKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFpbS1maWVsZCcpLnZhbHVlID0gaW5wdXRWYWx1ZUFycmF5LmpvaW4oJycpO1xyXG4gICAgICB0aGlzLnNlbGVjdGlvblN0YXJ0ID0gdGhpcy5zZWxlY3Rpb25FbmQ7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5haW0tZmllbGQnKS5zZXRTZWxlY3Rpb25SYW5nZShzZWxTdGFydCArIDEsIHNlbEVuZCArIDEpO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWltLWZpZWxkJykuZm9jdXMoKTtcclxuICAgIH1cclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWNvZGU9JyR7ZS5jb2RlfSddYCkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgICBpZiAoKHRoaXMuY2Fwc0xvY2spICYmIGUuY29kZS5pbmNsdWRlcygnS2V5JykpIHtcclxuICAgICAgY29uc3Qgc2hpZnRLZXkgPSBhcmcubWFwcGluZ3MuZ2V0KGUuY29kZSk7XHJcbiAgICAgIGxldCBsYW5nVmFyID0gMStOdW1iZXIodGhpcy5sYW5nU3dpdGNoKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFpbS1maWVsZCcpLnZhbHVlICs9IFsuLi5zaGlmdEtleVtsYW5nVmFyXV07XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTsgXHJcbiAgICB9IGlmICgodGhpcy5zaGlmdCkpIHtcclxuICAgICAgY29uc3Qgc2hpZnRLZXkgPSBhcmcubWFwcGluZ3MuZ2V0KGUuY29kZSk7XHJcbiAgICAgIGxldCBsYW5nVmFyID0gMStOdW1iZXIodGhpcy5sYW5nU3dpdGNoKTtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFpbS1maWVsZCcpLnZhbHVlICs9IFsuLi5zaGlmdEtleVtsYW5nVmFyXV07XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTsgXHJcbiAgICB9IGVsc2UgaWYgKGFyZy5tYXBwaW5ncy5nZXQoZS5jb2RlKSAhPT0gdW5kZWZpbmVkKSB7IFxyXG4gICAgICBjb25zdCBzaGlmdEtleSA9IGFyZy5tYXBwaW5ncy5nZXQoZS5jb2RlKTtcclxuICAgICAgbGV0IGxhbmdWYXIgPSAwK051bWJlcih0aGlzLmxhbmdTd2l0Y2gpO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWltLWZpZWxkJykudmFsdWUgKz0gWy4uLnNoaWZ0S2V5W2xhbmdWYXJdXTsgXHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTsgXHJcbiAgICB9XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWltLWZpZWxkJykuZm9jdXMoKTtcclxuICB9XHJcblxyXG4gIHJlbGVhc2VLZXkoZSwgYXJnKSBcclxuICB7XHJcbiAgICBjb25zdCBrZXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmtleWJvYXJkX19rZXknKTtcclxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWN0aXZlJykgIT09IG51bGwpIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hY3RpdmUnKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgIGlmIChlLmtleSA9PT0gJ1NoaWZ0Jykge1xyXG4gICAgICB0aGlzLnNoaWZ0ID0gZmFsc2U7XHJcbiAgICAgIGtleXMuZm9yRWFjaCgoaykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNoaWZ0S2V5ID0gYXJnLm1hcHBpbmdzLmdldChrLmRhdGFzZXQuY29kZSk7XHJcbiAgICAgICAgbGV0IGxhbmdWYXIgPSAwK051bWJlcih0aGlzLmxhbmdTd2l0Y2gpO1xyXG4gICAgICAgIGlmIChzaGlmdEtleSkgay5pbm5lckhUTUwgPSBbLi4uc2hpZnRLZXlbbGFuZ1Zhcl1dO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFkZEJ5Q2xpY2soZSwgYXJnKVxyXG4gIHtcclxuICAgIGlmICgoYXJnLm1hcHBpbmdzLmdldChlLnRhcmdldC5kYXRhc2V0LmNvZGUpICE9PSB1bmRlZmluZWQpIHx8ICEhZS50YXJnZXQuZGF0YXNldC5jb2RlKSB7XHJcbiAgICAgIGNvbnN0IGlucHV0VmFsdWVBcnJheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5haW0tZmllbGQnKS52YWx1ZS5zcGxpdCgnJyk7XHJcbiAgICAgIGNvbnN0IHNlbFN0YXJ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFpbS1maWVsZCcpLnNlbGVjdGlvblN0YXJ0O1xyXG4gICAgICBjb25zdCBzZWxFbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWltLWZpZWxkJykuc2VsZWN0aW9uRW5kO1xyXG4gICAgICBjb25zdCBrZXkgPSBhcmcubWFwcGluZ3MuZ2V0KGUudGFyZ2V0LmRhdGFzZXQuY29kZSk7XHJcbiAgICAgIGlmICgodGhpcy5zaGlmdCkgJiYgZS50YXJnZXQuaW5uZXJUZXh0ICE9PSAnVGFiJyAmJiBrZXkhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgbGV0IGxhbmdWYXIgPSAxK051bWJlcih0aGlzLmxhbmdTd2l0Y2gpO1xyXG4gICAgICAgIGlucHV0VmFsdWVBcnJheS5zcGxpY2Uoc2VsU3RhcnQsIDAsIGtleVtsYW5nVmFyXSk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFpbS1maWVsZCcpLnZhbHVlID0gaW5wdXRWYWx1ZUFycmF5LmpvaW4oJycpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5haW0tZmllbGQnKS5zZXRTZWxlY3Rpb25SYW5nZShzZWxTdGFydCArIDEsIHNlbEVuZCArIDEpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5haW0tZmllbGQnKS5mb2N1cygpO1xyXG4gICAgICB9IGVsc2UgaWYgKCh0aGlzLmNhcHNMb2NrICYmICF0aGlzLnNoaWZ0KSAmJiBlLnRhcmdldC5pbm5lclRleHQgIT09ICdUYWInICYmIGtleSE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBsZXQgbGFuZ1ZhcjtcclxuICAgICAgICBpZiAoZS50YXJnZXQuZGF0YXNldC5jb2RlLmluY2x1ZGVzKCdLZXknKSkgbGFuZ1ZhciA9IDErTnVtYmVyKHRoaXMubGFuZ1N3aXRjaCk7XHJcbiAgICAgICAgZWxzZSBpZiAoZS50YXJnZXQuZGF0YXNldC5jb2RlLmluY2x1ZGVzKCdEaWdpdCcpKSBsYW5nVmFyID0gMCtOdW1iZXIodGhpcy5sYW5nU3dpdGNoKTtcclxuICAgICAgICBpbnB1dFZhbHVlQXJyYXkuc3BsaWNlKHNlbFN0YXJ0LCAwLCBrZXlbbGFuZ1Zhcl0pO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5haW0tZmllbGQnKS52YWx1ZSA9IGlucHV0VmFsdWVBcnJheS5qb2luKCcnKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWltLWZpZWxkJykuc2V0U2VsZWN0aW9uUmFuZ2Uoc2VsU3RhcnQgKyAxLCBzZWxFbmQgKyAxKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWltLWZpZWxkJykuZm9jdXMoKTtcclxuICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5pbm5lclRleHQgPT09ICdUYWInKSB7XHJcbiAgICAgICAgaW5wdXRWYWx1ZUFycmF5LnNwbGljZShzZWxTdGFydCwgMCwgJ1xcdCcpO1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5haW0tZmllbGQnKS52YWx1ZTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWltLWZpZWxkJykudmFsdWUgPSBpbnB1dFZhbHVlQXJyYXkuam9pbignJyk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25TdGFydCA9IHRoaXMuc2VsZWN0aW9uRW5kO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5haW0tZmllbGQnKS5zZXRTZWxlY3Rpb25SYW5nZShzZWxTdGFydCArIDEsIHNlbEVuZCArIDEpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5haW0tZmllbGQnKS5mb2N1cygpO1xyXG4gICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmlubmVyVGV4dCA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgIGlucHV0VmFsdWVBcnJheS5zcGxpY2Uoc2VsU3RhcnQsIDAsICdcXG4nKTtcclxuICAgICAgICBsZXQgdmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWltLWZpZWxkJykudmFsdWU7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFpbS1maWVsZCcpLnZhbHVlID0gaW5wdXRWYWx1ZUFycmF5LmpvaW4oJycpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0aW9uU3RhcnQgPSB0aGlzLnNlbGVjdGlvbkVuZDtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWltLWZpZWxkJykuc2V0U2VsZWN0aW9uUmFuZ2Uoc2VsU3RhcnQgKyAxLCBzZWxFbmQgKyAxKTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWltLWZpZWxkJykuZm9jdXMoKTtcclxuICAgICAgfSBlbHNlIGlmIChlLnRhcmdldC5pbm5lclRleHQgPT09ICdTcGFjZScpIHtcclxuICAgICAgICBpbnB1dFZhbHVlQXJyYXkuc3BsaWNlKHNlbFN0YXJ0LCAwLCAnICcpO1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5haW0tZmllbGQnKS52YWx1ZTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWltLWZpZWxkJykudmFsdWUgPSBpbnB1dFZhbHVlQXJyYXkuam9pbignJyk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25TdGFydCA9IHRoaXMuc2VsZWN0aW9uRW5kO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5haW0tZmllbGQnKS5zZXRTZWxlY3Rpb25SYW5nZShzZWxTdGFydCArIDEsIHNlbEVuZCArIDEpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5haW0tZmllbGQnKS5mb2N1cygpO1xyXG4gICAgICB9IGVsc2UgaWYgKGUudGFyZ2V0LmRhdGFzZXQuY29kZS5pbmNsdWRlcygnQXJyb3cnKSkgeyBcclxuICAgICAgICBpbnB1dFZhbHVlQXJyYXkuc3BsaWNlKHNlbFN0YXJ0LCAwLCBlLnRhcmdldC5pbm5lckhUTUwpO1xyXG4gICAgICAgIGxldCB2YWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5haW0tZmllbGQnKS52YWx1ZTtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWltLWZpZWxkJykudmFsdWUgPSBpbnB1dFZhbHVlQXJyYXkuam9pbignJyk7XHJcbiAgICAgICAgdGhpcy5zZWxlY3Rpb25TdGFydCA9IHRoaXMuc2VsZWN0aW9uRW5kO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5haW0tZmllbGQnKS5zZXRTZWxlY3Rpb25SYW5nZShzZWxTdGFydCArIDEsIHNlbEVuZCArIDEpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5haW0tZmllbGQnKS5mb2N1cygpO1xyXG4gICAgICB9IGVsc2UgaWYgKGtleSE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICBsZXQgbGFuZ1ZhciA9IDAgKyBOdW1iZXIodGhpcy5sYW5nU3dpdGNoKVxyXG4gICAgICAgIGlucHV0VmFsdWVBcnJheS5zcGxpY2Uoc2VsU3RhcnQsIDAsIGtleVtsYW5nVmFyXSkuam9pbignJyk7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFpbS1maWVsZCcpLnZhbHVlID0gaW5wdXRWYWx1ZUFycmF5LmpvaW4oJycpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5haW0tZmllbGQnKS5zZXRTZWxlY3Rpb25SYW5nZShzZWxTdGFydCArIDEsIHNlbEVuZCArIDEpO1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5haW0tZmllbGQnKS5mb2N1cygpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG4gIHN3aXRjaExhbmcoYXJnKVxyXG4gIHtcclxuICAgIG9ua2V5ZG93biA9IChlKSA9PiB7XHJcbiAgICAgIGlmIChlLmN0cmxLZXkgJiYgZS5hbHRLZXkgKSB7XHJcbiAgICAgICAge1xyXG4gICAgICAgICAgdGhpcy5zd2l0aFN0YXRlPSF0aGlzLnN3aXRoU3RhdGU7XHJcbiAgICAgICAgICBpZiAodGhpcy5zd2l0aFN0YXRlKSB7IFxyXG4gICAgICAgICAgICB0aGlzLmxhbmdTd2l0Y2ggPSAyO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMubGFuZ1N3aXRjaCA9IDA7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBjb25zdCBrZXlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmtleWJvYXJkX19rZXknKTtcclxuICAgICAgICAgIGtleXMuZm9yRWFjaCgoaykgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzaGlmdEtleSA9IGFyZy5tYXBwaW5ncy5nZXQoay5kYXRhc2V0LmNvZGUpO1xyXG4gICAgICAgICAgICBsZXQgbGFuZ1ZhciA9IDArTnVtYmVyKHRoaXMubGFuZ1N3aXRjaCk7XHJcbiAgICAgICAgICAgIGlmIChzaGlmdEtleSkgay5pbm5lckhUTUwgPSBbLi4uc2hpZnRLZXlbbGFuZ1Zhcl1dO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRvY3VtZW50LmNvb2tpZT1gdGhpcy5sYW5nU3dpdGNoPSR7dGhpcy5sYW5nU3dpdGNofTsgc2VjdXJlO2A7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiLyoqXHJcbiAqINCa0LvQsNGB0YEgbGF5b3V0IFxyXG4gKi9cclxuXHJcbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgTGF5b3V0IHtcclxuICBjb25zdHJ1Y3RvcihuYW1lKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQHR5cGUge01hcDxzdHJpbmcsc3RyaW5nW10+fVxyXG4gICAgICovXHJcbiAgICB0aGlzLm1hcHBpbmdzID0gbmV3IE1hcCgpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQGV4YW1wbGVcclxuICAgKiBsYXlvdXQuYWRkTWFwcGluZyhcIktleVFcIiwgXCLQuVwiLCBcItCZXCIpXHJcbiAgICovXHJcbiAgYWRkTWFwcGluZyhjb2RlLCBjaGFyLCBjaGFyMiwgY2hhcjMsIGNoYXI0KSB7XHJcbiAgICB0aGlzLm1hcHBpbmdzLnNldChjb2RlLCBbY2hhciwgY2hhcjIsIGNoYXIzLCBjaGFyNF0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQHBhcmFtIHswfDF9IG51bSBWYXJpYXRpb25cclxuICAgKiBAcmV0dXJuIHN0cmluZ1xyXG4gICAqL1xyXG4gIGdldENoYXIoY29kZSwgbnVtKSB7XHJcbiAgICBjb25zdCBjaGFycyA9IHRoaXMubWFwcGluZ3MuZ2V0KGNvZGUpO1xyXG4gICAgaWYgKCFjaGFycykgcmV0dXJuO1xyXG4gICAgcmV0dXJuIGNoYXJzW251bV07XHJcbiAgfVxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xyXG5jb25zdCBLZXlib2FyZCA9IHJlcXVpcmUoJy4vbW9kdWxlcy9rZXlib2FyZCcpLmRlZmF1bHQ7XHJcbmNvbnN0IGxheW91dCA9IHJlcXVpcmUoJy4vbGF5b3V0LWVuJyk7XHJcbmNvbnN0IGtleWJvYXJkID0gbmV3IEtleWJvYXJkKCk7XHJcbmNvbnN0IGtleWJvYXJkQ29udGFpbmVyID0ga2V5Ym9hcmQuY3JlYXRlKGxheW91dCk7XHJcbmNvbnN0IHRleHRJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbmxldCBjb3N0ID0gMTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChrZXlib2FyZENvbnRhaW5lcik7XHJcbmRvY3VtZW50LmJvZHkuaW5wdXRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XHJcbmRvY3VtZW50LmJvZHkuaW5wdXRGaWVsZC5jbGFzc0xpc3QuYWRkKCdhaW0tZmllbGQnKTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0ZXh0SW5mbyk7XHJcbnRleHRJbmZvLmlubmVySFRNTCA9ICfQmtC70LDQstC40LDRgtGD0YDQsCDRgdC+0LfQtNCw0L3QsCDQsiBXaW5kb3dzLiDQn9C10YDQtdC60LvRjtGH0LXQvdC40LUg0Y/Qt9GL0LrQsDog0LvQtdCy0YvQtSBjdHJsICsgYWx0J1xyXG5kb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvY3VtZW50LmJvZHkuaW5wdXRGaWVsZCk7ICBcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb2N1bWVudC5ib2R5LmlucHV0RmllbGQpLmZvY3VzKCk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1jb2RlPSdCYWNrc3BhY2UnXVwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGtleWJvYXJkLmJhY2tzcGFjZSk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1jb2RlPSdEZWxldGUnXVwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGtleWJvYXJkLmRlbCk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1jb2RlPSdDYXBzTG9jayddXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtrZXlib2FyZC50b2dnbGVDYXBzbG9jayhldmVudCwgbGF5b3V0KX0pO1xyXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiW2RhdGEtY29kZT0nU2hpZnRMZWZ0J11cIikuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZnVuY3Rpb24oKSB7a2V5Ym9hcmQuY2xpY2tTaGlmdChsYXlvdXQpfSk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1jb2RlPSdTaGlmdFJpZ2h0J11cIikuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZnVuY3Rpb24oKSB7a2V5Ym9hcmQuY2xpY2tTaGlmdChsYXlvdXQpfSk7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBmdW5jdGlvbiAoKSB7a2V5Ym9hcmQuY2FuY2VsU2hpZnQobGF5b3V0KX0pO1xyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGV2ZW50KSB7a2V5Ym9hcmQuZGlyZWN0SW5wdXQoZXZlbnQsIGxheW91dCl9KTtcclxuZG9jdW1lbnQuYm9keS5pbnB1dEZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZnVuY3Rpb24oZXZlbnQpIHtrZXlib2FyZC5yZWxlYXNlS2V5KGV2ZW50LCBsYXlvdXQpfSk7XHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5rZXlib2FyZCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZXZlbnQpIHtrZXlib2FyZC5hZGRCeUNsaWNrKGV2ZW50LCBsYXlvdXQpfSk7XHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbiAoKSB7a2V5Ym9hcmQuc3dpdGNoTGFuZyhsYXlvdXQpfSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9