/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss ***!
  \**********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _fonts_Roboto_Regular_ttf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./fonts/Roboto-Regular.ttf */ "./src/style/fonts/Roboto-Regular.ttf");
/* harmony import */ var _fonts_Roboto_Bold_ttf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./fonts/Roboto-Bold.ttf */ "./src/style/fonts/Roboto-Bold.ttf");
/* harmony import */ var _fonts_Roboto_Light_ttf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./fonts/Roboto-Light.ttf */ "./src/style/fonts/Roboto-Light.ttf");
// Imports






var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_fonts_Roboto_Regular_ttf__WEBPACK_IMPORTED_MODULE_3__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_fonts_Roboto_Bold_ttf__WEBPACK_IMPORTED_MODULE_4__["default"]);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_fonts_Roboto_Light_ttf__WEBPACK_IMPORTED_MODULE_5__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Roboto\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\");\n  font-weight: lighter;\n  font-style: normal;\n}\n#adblock-modal {\n  position: fixed;\n  z-index: 1;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.5);\n}\n#adblock-modal .content {\n  background-color: #F5F5F5;\n  margin: auto;\n  border: 1px solid #888;\n  width: 50%;\n  position: relative;\n  color: #0D0C0C;\n  font-family: Roboto, \"sans-serif\";\n  border-radius: 5px;\n  height: 500px;\n  max-height: 70vh;\n}\n#adblock-modal .content .header, #adblock-modal .content .footer {\n  height: 60px;\n}\n#adblock-modal .content .body {\n  height: 350px;\n  overflow: auto;\n  padding: 20px 40px;\n}\n#adblock-modal .content .body .icon {\n  width: 96px;\n  height: 96px;\n  display: block;\n  margin: 20px auto;\n}\n#adblock-modal .content .body .title {\n  text-align: center;\n}\n#adblock-modal .content .body .subtitle {\n  padding: 5px 20px;\n  font-weight: lighter;\n}\n#adblock-modal .content .body .buttons {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  margin-top: 20px;\n  margin-bottom: 30px;\n}\n#adblock-modal .content .body .buttons button {\n  background: #bdc3c7;\n  border: none;\n  outline: none;\n  border-radius: 5px;\n  margin: 0 10px;\n  flex: 1;\n  padding: 10px 15px;\n  color: #2c3e50;\n  font-size: 1rem;\n}\n#adblock-modal .content .body .buttons button:hover {\n  cursor: pointer;\n  color: #ecf0f1;\n  -webkit-box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.75);\n  -moz-box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.75);\n  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.75);\n}\n#adblock-modal .content .close-button {\n  position: absolute;\n  right: -12px;\n  top: -12px;\n  width: 24px;\n  height: 24px;\n  background: #F5F5F5;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #111111;\n  border: 1px solid #111111;\n  font-weight: bold;\n  cursor: default;\n}\n#adblock-modal .content .close-button:hover {\n  cursor: pointer;\n  background: #DCDCDC;\n}\n#adblock-modal .content footer.footer {\n  margin-top: 10px;\n  text-align: center;\n  font-size: 0.7rem;\n  color: #7f8c8d;\n  cursor: default;\n}\n\n.back-button {\n  background: #bdc3c7;\n  border: none;\n  outline: none;\n  border-radius: 5px;\n  margin: 0 10px;\n  flex: 1;\n  padding: 10px 15px;\n  color: #2c3e50;\n  font-size: 1rem;\n}\n.back-button:hover {\n  cursor: pointer;\n  color: #ecf0f1;\n  -webkit-box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.75);\n  -moz-box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.75);\n  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.75);\n}\n\n#turn-off-adblocker .whitelist-adblock {\n  width: 100%;\n  height: 250px;\n}\n#turn-off-adblocker .whitelist-adblock-gif {\n  width: 100%;\n  height: 400px;\n}\n#turn-off-adblocker .whitelist-adblock-text {\n  font-family: Roboto, \"sans-serif\";\n  font-size: 17px;\n  font-weight: 400;\n}\n#turn-off-adblocker .text-bolded {\n  font-weight: bold;\n  font-size: 14px;\n}", "",{"version":3,"sources":["webpack://./src/style/_fonts.scss","webpack://./src/style/main.scss","webpack://./src/style/components/modal.scss","webpack://./src/style/components/buttons.scss","webpack://./src/style/pages/turn-off-adblocker.scss"],"names":[],"mappings":"AAAA;EACE,qBAAA;EACA,+DAAA;EACA,mBAAA;EACA,kBAAA;ACCF;ADEA;EACE,qBAAA;EACA,+DAAA;EACA,iBAAA;EACA,kBAAA;ACAF;ADGA;EACE,qBAAA;EACA,+DAAA;EACA,oBAAA;EACA,kBAAA;ACDF;ACjBA;EACE,eAAA;EACA,UAAA;EACA,kBAAA;EACA,OAAA;EACA,MAAA;EACA,WAAA;EACA,YAAA;EACA,cAAA;EACA,8BAAA;EACA,oCAAA;ADmBF;ACjBE;EACE,yBAAA;EACA,YAAA;EACA,sBAAA;EACA,UAAA;EACA,kBAAA;EACA,cAAA;EACA,iCAAA;EACA,kBAAA;EACA,aAAA;EACA,gBAAA;ADmBJ;ACjBI;EACE,YAAA;ADmBN;AChBI;EACE,aAAA;EACA,cAAA;EACA,kBAAA;ADkBN;AChBM;EACE,WAAA;EACA,YAAA;EACA,cAAA;EACA,iBAAA;ADkBR;ACfM;EACE,kBAAA;ADiBR;ACdM;EACE,iBAAA;EACA,oBAAA;ADgBR;ACbM;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;EACA,mBAAA;ADeR;ACbQ;EACE,mBAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,cAAA;EACA,OAAA;EACA,kBAAA;EACA,cAAA;EACA,eAAA;ADeV;ACbU;EACE,eAAA;EACA,cAAA;EACA,iDAAA;EACA,8CAAA;EACA,yCAAA;ADeZ;ACTI;EACE,kBAAA;EACA,YAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,cAAA;EACA,yBAAA;EACA,iBAAA;EACA,eAAA;ADWN;ACTM;EACE,eAAA;EACA,mBAAA;ADWR;ACPI;EACE,gBAAA;EACA,kBAAA;EACA,iBAAA;EACA,cAAA;EACA,eAAA;ADSN;;AElHA;EACE,mBAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,cAAA;EACA,OAAA;EACA,kBAAA;EACA,cAAA;EACA,eAAA;AFqHF;AEnHE;EACE,eAAA;EACA,cAAA;EACA,iDAAA;EACA,8CAAA;EACA,yCAAA;AFqHJ;;AGpIE;EACE,WAAA;EACA,aAAA;AHuIJ;AGpIE;EACE,WAAA;EACA,aAAA;AHsIJ;AGnIE;EACE,iCAAA;EACA,eAAA;EACA,gBAAA;AHqIJ;AGlIE;EACE,iBAAA;EACA,eAAA;AHoIJ","sourcesContent":["@font-face {\n  font-family: 'Roboto';\n  src: url(fonts/Roboto-Regular.ttf) format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Roboto';\n  src: url(fonts/Roboto-Bold.ttf) format('truetype');\n  font-weight: bold;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Roboto';\n  src: url(fonts/Roboto-Light.ttf) format('truetype');\n  font-weight: lighter;\n  font-style: normal;\n}\n","@font-face {\n  font-family: \"Roboto\";\n  src: url(fonts/Roboto-Regular.ttf) format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: url(fonts/Roboto-Bold.ttf) format(\"truetype\");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: url(fonts/Roboto-Light.ttf) format(\"truetype\");\n  font-weight: lighter;\n  font-style: normal;\n}\n#adblock-modal {\n  position: fixed;\n  z-index: 1;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0, 0, 0);\n  background-color: rgba(0, 0, 0, 0.5);\n}\n#adblock-modal .content {\n  background-color: #F5F5F5;\n  margin: auto;\n  border: 1px solid #888;\n  width: 50%;\n  position: relative;\n  color: #0D0C0C;\n  font-family: Roboto, \"sans-serif\";\n  border-radius: 5px;\n  height: 500px;\n  max-height: 70vh;\n}\n#adblock-modal .content .header, #adblock-modal .content .footer {\n  height: 60px;\n}\n#adblock-modal .content .body {\n  height: 350px;\n  overflow: auto;\n  padding: 20px 40px;\n}\n#adblock-modal .content .body .icon {\n  width: 96px;\n  height: 96px;\n  display: block;\n  margin: 20px auto;\n}\n#adblock-modal .content .body .title {\n  text-align: center;\n}\n#adblock-modal .content .body .subtitle {\n  padding: 5px 20px;\n  font-weight: lighter;\n}\n#adblock-modal .content .body .buttons {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  margin-top: 20px;\n  margin-bottom: 30px;\n}\n#adblock-modal .content .body .buttons button {\n  background: #bdc3c7;\n  border: none;\n  outline: none;\n  border-radius: 5px;\n  margin: 0 10px;\n  flex: 1;\n  padding: 10px 15px;\n  color: #2c3e50;\n  font-size: 1rem;\n}\n#adblock-modal .content .body .buttons button:hover {\n  cursor: pointer;\n  color: #ecf0f1;\n  -webkit-box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.75);\n  -moz-box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.75);\n  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.75);\n}\n#adblock-modal .content .close-button {\n  position: absolute;\n  right: -12px;\n  top: -12px;\n  width: 24px;\n  height: 24px;\n  background: #F5F5F5;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #111111;\n  border: 1px solid #111111;\n  font-weight: bold;\n  cursor: default;\n}\n#adblock-modal .content .close-button:hover {\n  cursor: pointer;\n  background: #DCDCDC;\n}\n#adblock-modal .content footer.footer {\n  margin-top: 10px;\n  text-align: center;\n  font-size: 0.7rem;\n  color: #7f8c8d;\n  cursor: default;\n}\n\n.back-button {\n  background: #bdc3c7;\n  border: none;\n  outline: none;\n  border-radius: 5px;\n  margin: 0 10px;\n  flex: 1;\n  padding: 10px 15px;\n  color: #2c3e50;\n  font-size: 1rem;\n}\n.back-button:hover {\n  cursor: pointer;\n  color: #ecf0f1;\n  -webkit-box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.75);\n  -moz-box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.75);\n  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.75);\n}\n\n#turn-off-adblocker .whitelist-adblock {\n  width: 100%;\n  height: 250px;\n}\n#turn-off-adblocker .whitelist-adblock-gif {\n  width: 100%;\n  height: 400px;\n}\n#turn-off-adblocker .whitelist-adblock-text {\n  font-family: Roboto, \"sans-serif\";\n  font-size: 17px;\n  font-weight: 400;\n}\n#turn-off-adblocker .text-bolded {\n  font-weight: bold;\n  font-size: 14px;\n}","#adblock-modal {\n  position: fixed;\n  z-index: 1;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0,0,0);\n  background-color: rgba(0,0,0,0.5);\n\n  .content {\n    background-color: #F5F5F5;\n    margin: auto;\n    border: 1px solid #888;\n    width: 50%;\n    position: relative;\n    color: #0D0C0C;\n    font-family: Roboto, 'sans-serif';\n    border-radius: 5px;\n    height: 500px;\n    max-height: 70vh;\n\n    .header, .footer {\n      height: 60px;\n    }\n\n    .body {\n      height: 350px;\n      overflow: auto;\n      padding: 20px 40px;\n\n      .icon {\n        width: 96px;\n        height: 96px;\n        display: block;\n        margin: 20px auto;\n      }\n\n      .title {\n        text-align: center;\n      }\n\n      .subtitle {\n        padding: 5px 20px;\n        font-weight: lighter;\n      }\n\n      .buttons {\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        margin-top: 20px;\n        margin-bottom: 30px;\n\n        button {\n          background: #bdc3c7;\n          border: none;\n          outline: none;\n          border-radius: 5px;\n          margin: 0 10px;\n          flex: 1;\n          padding: 10px 15px;\n          color: #2c3e50;\n          font-size: 1rem;\n\n          &:hover {\n            cursor: pointer;\n            color: #ecf0f1;\n            -webkit-box-shadow: 0 0 5px 0 rgba(0,0,0,0.75);\n            -moz-box-shadow: 0 0 5px 0 rgba(0,0,0,0.75);\n            box-shadow: 0 0 5px 0 rgba(0,0,0,0.75);\n          }\n        }\n      }\n    }\n\n    .close-button {\n      position: absolute;\n      right: -12px;\n      top: -12px;\n      width: 24px;\n      height: 24px;\n      background: #F5F5F5;\n      border-radius: 50%;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      color: #111111;\n      border: 1px solid #111111;\n      font-weight: bold;\n      cursor: default;\n\n      &:hover {\n        cursor: pointer;\n        background: #DCDCDC;\n      }\n    }\n\n    footer.footer {\n      margin-top: 10px;\n      text-align: center;\n      font-size: 0.7rem;\n      color: #7f8c8d;\n      cursor: default;\n    }\n  }\n}\n",".back-button {\n  background: #bdc3c7;\n  border: none;\n  outline: none;\n  border-radius: 5px;\n  margin: 0 10px;\n  flex: 1;\n  padding: 10px 15px;\n  color: #2c3e50;\n  font-size: 1rem;\n\n  &:hover {\n    cursor: pointer;\n    color: #ecf0f1;\n    -webkit-box-shadow: 0 0 5px 0 rgba(0,0,0,0.75);\n    -moz-box-shadow: 0 0 5px 0 rgba(0,0,0,0.75);\n    box-shadow: 0 0 5px 0 rgba(0,0,0,0.75);\n  }\n}\n","#turn-off-adblocker {\n  .whitelist-adblock {\n    width: 100%;\n    height: 250px;\n  }\n\n  .whitelist-adblock-gif {\n    width: 100%;\n    height: 400px;\n  }\n\n  .whitelist-adblock-text {\n    font-family: Roboto, 'sans-serif';\n    font-size: 17px;\n    font-weight: 400;\n  }\n\n  .text-bolded {\n    font-weight: bold;\n    font-size: 14px;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./src/style/fonts/Roboto-Bold.ttf":
/*!*****************************************!*\
  !*** ./src/style/fonts/Roboto-Bold.ttf ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/fonts/Roboto-Bold.ttf");

/***/ }),

/***/ "./src/style/fonts/Roboto-Light.ttf":
/*!******************************************!*\
  !*** ./src/style/fonts/Roboto-Light.ttf ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/fonts/Roboto-Light.ttf");

/***/ }),

/***/ "./src/style/fonts/Roboto-Regular.ttf":
/*!********************************************!*\
  !*** ./src/style/fonts/Roboto-Regular.ttf ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/fonts/Roboto-Regular.ttf");

/***/ }),

/***/ "./src/style/main.scss":
/*!*****************************!*\
  !*** ./src/style/main.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/main.scss");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/script/component/index.ts":
/*!***************************************!*\
  !*** ./src/script/component/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Component = /** @class */ (function () {
    function Component() {
    }
    Component.prototype.renderHeader = function () {
        return "";
    };
    Component.prototype.renderFooter = function () {
        return "\n        <hr/>\n        <footer class=\"footer\">\n            &copy; AdBlocker\n        </footer>\n        ";
    };
    return Component;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);


/***/ }),

/***/ "./src/script/constants/index.ts":
/*!***************************************!*\
  !*** ./src/script/constants/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var constants = {
    script: {
        id: "adb-detection",
        customerIdAttribute: "data-customer-id"
    },
    popup: {
        id: "adblock-modal",
        headerClass: "header",
        bodyClass: "body",
        footerClass: "footer",
        contentClasses: ["content"],
        closeButtonClass: "close-button",
        backButtonClass: "back-button"
    },
    pages: {
        home: 'home',
        turnOffAdBlocker: 'turn-off-adblocker'
    }
};
Object.freeze(constants);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constants);


/***/ }),

/***/ "./src/script/detection/index.ts":
/*!***************************************!*\
  !*** ./src/script/detection/index.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/DOM */ "./src/script/helpers/DOM.ts");
/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/index */ "./src/script/constants/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var Detection = /** @class */ (function () {
    function Detection() {
        this.adBlockEnabled = false;
        this.initiate();
    }
    Detection.prototype.initiate = function () {
        var scriptTag = document.currentScript || (0,_helpers_DOM__WEBPACK_IMPORTED_MODULE_0__.QS)("#".concat(_constants_index__WEBPACK_IMPORTED_MODULE_1__["default"].script.id));
        this.customerId = scriptTag.getAttribute(_constants_index__WEBPACK_IMPORTED_MODULE_1__["default"].script.customerIdAttribute);
    };
    Detection.prototype.check = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        // If customer ID is not provided, terminate further actions
                        if (!_this.customerId) {
                            resolve();
                        }
                        // Create a new script element
                        var script = document.createElement('script');
                        script.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
                        // Set up an onerror event handler
                        script.onerror = function () {
                            _this.adBlockEnabled = true; // Set the flag to true if the script fails to load
                            resolve();
                        };
                        // Set up an onload event handler
                        script.onload = function () {
                            _this.adBlockEnabled = false; // Set the flag to false if the script loads successfully
                            resolve();
                        };
                        // Append the script to the document
                        document.head.appendChild(script);
                    })];
            });
        });
    };
    return Detection;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Detection);


/***/ }),

/***/ "./src/script/helpers/DOM.ts":
/*!***********************************!*\
  !*** ./src/script/helpers/DOM.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QS: () => (/* binding */ QS),
/* harmony export */   QSall: () => (/* binding */ QSall),
/* harmony export */   createElement: () => (/* binding */ createElement),
/* harmony export */   createElementWithClasses: () => (/* binding */ createElementWithClasses),
/* harmony export */   createElementWithId: () => (/* binding */ createElementWithId)
/* harmony export */ });
var createElement = function (element) { return document.createElement(element); };
var createElementWithId = function (element, id) {
    var el = createElement(element);
    el.id = id;
    return el;
};
var createElementWithClasses = function (element, classes) {
    var el = createElement(element);
    classes.forEach(function (className) {
        el.classList.add(className);
    });
    return el;
};
var QS = function (selector) { return document.querySelector(selector); };
var QSall = function (selector) { return document.querySelectorAll(selector); };


/***/ }),

/***/ "./src/script/page/index.ts":
/*!**********************************!*\
  !*** ./src/script/page/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var Page = /** @class */ (function () {
    function Page() {
    }
    Page.prototype.renderHome = function () {
        return "\n        <img src='./static/icons/ad-block.svg' class='icon' alt='AdBlock icon' />\n        <h1 class=\"title\">You're using an Adblocker.</h1>\n        <p class=\"subtitle\">Ads are necessary for the smooth operation of our site. If you want to help, register or turn off your Adblocker.</p>\n        <div class=\"buttons\">\n            <button>Register</button>\n            <button id=\"turn-off-adblocker\">Turn off Adblocker</button>\n        </div>\n        ";
    };
    Page.prototype.renderTurnOffAdBlocker = function () {
        return "\n            <div id=\"page-turn-off-adblocker\">\n                <section>\n                    <img src='./static/icons/ad-block.svg' class='icon' alt='AdBlock icon' />\n                    <h3>Disable Adblockers</h3>\n                    <h5>HOW TO TURN OFF ADBLOCK PLUGIN ?</h5>\n                    <p>Nobody likes ads but they are the necessary evil of almost every free service.\n    Be fair and consider pausing your ad blocker to support the creators who work hard to create value.</p>\n                </section>\n                <section>\n                    <h5>FIRST DETERMINE WHICH ADBLOCKER YOU ARE USING:</h5>\n                    <p>In your browser toolbar look for one of the following icons to determine which adblocker you are running.</p>\n                    <img class=\"whitelist-adblock\" src=\"./static/images/whitelist-bh-adblock-options.jpeg\" alt=\"Turn off adblocker\" />\n                </section>\n                <section>\n                    <h5>FOR ADBLOCK PLUS:</h5>\n                    <img class=\"whitelist-adblock-gif\" src=\"./static/images/whitelist-bh-adblockplus.gif\" alt=\"Adblock plus\" />\n                    <p class=\"whitelist-adblock-text\">Click the adblock plus icon <br/>\n                    Click <span class=\"text-bolded\">Enabled On this Site</span> to change it to <span class=\"text-bolded\">Disabled on this site</span></p>\n                </section>\n                <section>\n                    <h5>FOR ADBLOCK:</h5>\n                    <img class=\"whitelist-adblock-gif\" src=\"./static/images/whitelist-bh-adblock.gif\" alt=\"Adblock\" />\n                    <p class=\"whitelist-adblock-text\">Click the adblock plus icon <br/>\n                    Click <span class=\"text-bolded\">Don\u2019t run on pages on this domain</span></p>\n                </section>\n                <button class=\"back-button\" data-src=\"home\">Back</button>\n            </div>\n        ";
    };
    return Page;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page);


/***/ }),

/***/ "./src/script/popup/index.ts":
/*!***********************************!*\
  !*** ./src/script/popup/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _helpers_DOM__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/DOM */ "./src/script/helpers/DOM.ts");
/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/index */ "./src/script/constants/index.ts");
/* harmony import */ var _page_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../page/index */ "./src/script/page/index.ts");
/* harmony import */ var _component_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../component/index */ "./src/script/component/index.ts");




var Popup = /** @class */ (function () {
    function Popup(hasCloseButton, currentPage) {
        this.hasCloseButton = hasCloseButton;
        this.currentPage = currentPage !== null && currentPage !== void 0 ? currentPage : 'home';
        this.customerId = "";
    }
    Popup.prototype.init = function () {
        this.popup = (0,_helpers_DOM__WEBPACK_IMPORTED_MODULE_0__.createElementWithId)("div", _constants_index__WEBPACK_IMPORTED_MODULE_1__["default"].popup.id);
        this.content = (0,_helpers_DOM__WEBPACK_IMPORTED_MODULE_0__.createElementWithClasses)("div", _constants_index__WEBPACK_IMPORTED_MODULE_1__["default"].popup.contentClasses);
        this.header = (0,_helpers_DOM__WEBPACK_IMPORTED_MODULE_0__.createElementWithClasses)("div", [_constants_index__WEBPACK_IMPORTED_MODULE_1__["default"].popup.headerClass]);
        this.body = (0,_helpers_DOM__WEBPACK_IMPORTED_MODULE_0__.createElementWithClasses)("div", [_constants_index__WEBPACK_IMPORTED_MODULE_1__["default"].popup.bodyClass]);
        this.footer = (0,_helpers_DOM__WEBPACK_IMPORTED_MODULE_0__.createElementWithClasses)("div", [_constants_index__WEBPACK_IMPORTED_MODULE_1__["default"].popup.footerClass]);
        this.prepareContentStructure();
    };
    Popup.prototype.prepareContentStructure = function () {
        var component = new _component_index__WEBPACK_IMPORTED_MODULE_3__["default"]();
        this.header.innerHTML = component.renderHeader();
        this.footer.innerHTML = component.renderFooter();
        this.content.appendChild(this.header);
        this.content.appendChild(this.body);
        this.content.appendChild(this.footer);
        if (this.hasCloseButton) {
            this.content.appendChild(this.generateCloseButton());
        }
        this.popup.appendChild(this.content);
        this.pageRender();
    };
    Popup.prototype.pageRender = function () {
        var page = new _page_index__WEBPACK_IMPORTED_MODULE_2__["default"]();
        switch (this.currentPage) {
            case _constants_index__WEBPACK_IMPORTED_MODULE_1__["default"].pages.home:
                this.body.innerHTML = page.renderHome();
                break;
            case _constants_index__WEBPACK_IMPORTED_MODULE_1__["default"].pages.turnOffAdBlocker:
                this.body.innerHTML = page.renderTurnOffAdBlocker();
                break;
            default:
                console.error("[404] Page not found!");
        }
        document.body.appendChild(this.popup);
        this.dispatchEvents();
    };
    Popup.prototype.generateCloseButton = function () {
        var closeBtn = (0,_helpers_DOM__WEBPACK_IMPORTED_MODULE_0__.createElementWithClasses)("div", [_constants_index__WEBPACK_IMPORTED_MODULE_1__["default"].popup.closeButtonClass]);
        closeBtn.innerHTML = "&times";
        return closeBtn;
    };
    Popup.prototype.dispatchEvents = function () {
        var _this = this;
        (0,_helpers_DOM__WEBPACK_IMPORTED_MODULE_0__.QS)(".".concat(_constants_index__WEBPACK_IMPORTED_MODULE_1__["default"].popup.closeButtonClass)) ? (0,_helpers_DOM__WEBPACK_IMPORTED_MODULE_0__.QS)(".".concat(_constants_index__WEBPACK_IMPORTED_MODULE_1__["default"].popup.closeButtonClass)).addEventListener("click", function () { return _this.closeModal(); }, true) : null;
        (0,_helpers_DOM__WEBPACK_IMPORTED_MODULE_0__.QS)("#".concat(_constants_index__WEBPACK_IMPORTED_MODULE_1__["default"].pages.turnOffAdBlocker)) ? (0,_helpers_DOM__WEBPACK_IMPORTED_MODULE_0__.QS)("#".concat(_constants_index__WEBPACK_IMPORTED_MODULE_1__["default"].pages.turnOffAdBlocker)).addEventListener("click", function () { return _this.changePage(_constants_index__WEBPACK_IMPORTED_MODULE_1__["default"].pages.turnOffAdBlocker); }, true) : null;
        (0,_helpers_DOM__WEBPACK_IMPORTED_MODULE_0__.QS)(".".concat(_constants_index__WEBPACK_IMPORTED_MODULE_1__["default"].popup.backButtonClass)) ? (0,_helpers_DOM__WEBPACK_IMPORTED_MODULE_0__.QS)(".".concat(_constants_index__WEBPACK_IMPORTED_MODULE_1__["default"].popup.backButtonClass)).addEventListener("click", function (evt) { return _this.returnBack(evt); }, true) : null;
    };
    Popup.prototype.detachEvents = function () {
        var _this = this;
        (0,_helpers_DOM__WEBPACK_IMPORTED_MODULE_0__.QS)(".".concat(_constants_index__WEBPACK_IMPORTED_MODULE_1__["default"].popup.closeButtonClass)) ? (0,_helpers_DOM__WEBPACK_IMPORTED_MODULE_0__.QS)(".".concat(_constants_index__WEBPACK_IMPORTED_MODULE_1__["default"].popup.closeButtonClass)).removeEventListener("click", function () { return _this.closeModal(); }, true) : null;
        (0,_helpers_DOM__WEBPACK_IMPORTED_MODULE_0__.QS)("#".concat(_constants_index__WEBPACK_IMPORTED_MODULE_1__["default"].pages.turnOffAdBlocker)) ? (0,_helpers_DOM__WEBPACK_IMPORTED_MODULE_0__.QS)("#".concat(_constants_index__WEBPACK_IMPORTED_MODULE_1__["default"].pages.turnOffAdBlocker)).removeEventListener("click", function () { return _this.changePage(_constants_index__WEBPACK_IMPORTED_MODULE_1__["default"].pages.turnOffAdBlocker); }, true) : null;
        (0,_helpers_DOM__WEBPACK_IMPORTED_MODULE_0__.QS)(".".concat(_constants_index__WEBPACK_IMPORTED_MODULE_1__["default"].popup.backButtonClass)) ? (0,_helpers_DOM__WEBPACK_IMPORTED_MODULE_0__.QS)(".".concat(_constants_index__WEBPACK_IMPORTED_MODULE_1__["default"].popup.backButtonClass)).removeEventListener("click", function (evt) { return _this.returnBack(evt); }, true) : null;
    };
    Popup.prototype.changePage = function (page) {
        this.currentPage = page;
        this.detachEvents();
        this.pageRender();
    };
    Popup.prototype.returnBack = function (e) {
        e.preventDefault();
        if (!(e.target instanceof HTMLButtonElement)) {
            return;
        }
        if (!e.target.dataset.src) {
            return;
        }
        this.changePage(e.target.dataset.src.toString());
    };
    Popup.prototype.closeModal = function (e) {
        console.log("aaaa");
        this.content = null;
        this.detachEvents();
        (0,_helpers_DOM__WEBPACK_IMPORTED_MODULE_0__.QS)("#".concat(_constants_index__WEBPACK_IMPORTED_MODULE_1__["default"].popup.id)).remove();
    };
    return Popup;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Popup);


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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./src/script/index.ts ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _detection_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./detection/index */ "./src/script/detection/index.ts");
/* harmony import */ var _popup_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popup/index */ "./src/script/popup/index.ts");
/* harmony import */ var _style_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style/main.scss */ "./src/style/main.scss");



var detection = new _detection_index__WEBPACK_IMPORTED_MODULE_0__["default"]();
detection.check()
    .then(function () {
    if (detection.adBlockEnabled) {
        console.log(detection.customerId);
        var popup = new _popup_index__WEBPACK_IMPORTED_MODULE_1__["default"](true);
        popup.init();
    }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7Ozs7Ozs7Ozs7Ozs7O0FDQTBDO0FBQ1I7QUFDTjtBQUU1QixJQUFJLFNBQVMsR0FBRyxJQUFJLHdEQUFTLEVBQUUsQ0FBQztBQUNoQyxTQUFTLENBQUMsS0FBSyxFQUFFO0tBQ1osSUFBSSxDQUFDO0lBQ0YsSUFBSSxTQUFTLENBQUMsY0FBYyxFQUFFO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xDLElBQUksS0FBSyxHQUFHLElBQUksb0RBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM1QixLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7S0FDaEI7QUFDTCxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZC1ibG9ja2VyLWRldGVjdGlvbi8uL3NyYy9zdHlsZS9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vYWQtYmxvY2tlci1kZXRlY3Rpb24vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2FkLWJsb2NrZXItZGV0ZWN0aW9uLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vYWQtYmxvY2tlci1kZXRlY3Rpb24vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2FkLWJsb2NrZXItZGV0ZWN0aW9uLy4vc3JjL3N0eWxlL2ZvbnRzL1JvYm90by1Cb2xkLnR0ZiIsIndlYnBhY2s6Ly9hZC1ibG9ja2VyLWRldGVjdGlvbi8uL3NyYy9zdHlsZS9mb250cy9Sb2JvdG8tTGlnaHQudHRmIiwid2VicGFjazovL2FkLWJsb2NrZXItZGV0ZWN0aW9uLy4vc3JjL3N0eWxlL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZiIsIndlYnBhY2s6Ly9hZC1ibG9ja2VyLWRldGVjdGlvbi8uL3NyYy9zdHlsZS9tYWluLnNjc3M/YTIyMSIsIndlYnBhY2s6Ly9hZC1ibG9ja2VyLWRldGVjdGlvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9hZC1ibG9ja2VyLWRldGVjdGlvbi8uL3NyYy9zY3JpcHQvY29tcG9uZW50L2luZGV4LnRzIiwid2VicGFjazovL2FkLWJsb2NrZXItZGV0ZWN0aW9uLy4vc3JjL3NjcmlwdC9jb25zdGFudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYWQtYmxvY2tlci1kZXRlY3Rpb24vLi9zcmMvc2NyaXB0L2RldGVjdGlvbi9pbmRleC50cyIsIndlYnBhY2s6Ly9hZC1ibG9ja2VyLWRldGVjdGlvbi8uL3NyYy9zY3JpcHQvaGVscGVycy9ET00udHMiLCJ3ZWJwYWNrOi8vYWQtYmxvY2tlci1kZXRlY3Rpb24vLi9zcmMvc2NyaXB0L3BhZ2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYWQtYmxvY2tlci1kZXRlY3Rpb24vLi9zcmMvc2NyaXB0L3BvcHVwL2luZGV4LnRzIiwid2VicGFjazovL2FkLWJsb2NrZXItZGV0ZWN0aW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FkLWJsb2NrZXItZGV0ZWN0aW9uL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2FkLWJsb2NrZXItZGV0ZWN0aW9uL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hZC1ibG9ja2VyLWRldGVjdGlvbi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2FkLWJsb2NrZXItZGV0ZWN0aW9uL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYWQtYmxvY2tlci1kZXRlY3Rpb24vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hZC1ibG9ja2VyLWRldGVjdGlvbi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9hZC1ibG9ja2VyLWRldGVjdGlvbi93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vYWQtYmxvY2tlci1kZXRlY3Rpb24vLi9zcmMvc2NyaXB0L2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyBmcm9tIFwiLi9mb250cy9Sb2JvdG8tUmVndWxhci50dGZcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyBmcm9tIFwiLi9mb250cy9Sb2JvdG8tQm9sZC50dGZcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyBmcm9tIFwiLi9mb250cy9Sb2JvdG8tTGlnaHQudHRmXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMl9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyArIFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gKyBcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbiNhZGJsb2NrLW1vZGFsIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDE7XFxuICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLCAwLCAwKTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuI2FkYmxvY2stbW9kYWwgLmNvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICB3aWR0aDogNTAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY29sb3I6ICMwRDBDMEM7XFxuICBmb250LWZhbWlseTogUm9ib3RvLCBcXFwic2Fucy1zZXJpZlxcXCI7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgbWF4LWhlaWdodDogNzB2aDtcXG59XFxuI2FkYmxvY2stbW9kYWwgLmNvbnRlbnQgLmhlYWRlciwgI2FkYmxvY2stbW9kYWwgLmNvbnRlbnQgLmZvb3RlciB7XFxuICBoZWlnaHQ6IDYwcHg7XFxufVxcbiNhZGJsb2NrLW1vZGFsIC5jb250ZW50IC5ib2R5IHtcXG4gIGhlaWdodDogMzUwcHg7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHBhZGRpbmc6IDIwcHggNDBweDtcXG59XFxuI2FkYmxvY2stbW9kYWwgLmNvbnRlbnQgLmJvZHkgLmljb24ge1xcbiAgd2lkdGg6IDk2cHg7XFxuICBoZWlnaHQ6IDk2cHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMjBweCBhdXRvO1xcbn1cXG4jYWRibG9jay1tb2RhbCAuY29udGVudCAuYm9keSAudGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4jYWRibG9jay1tb2RhbCAuY29udGVudCAuYm9keSAuc3VidGl0bGUge1xcbiAgcGFkZGluZzogNXB4IDIwcHg7XFxuICBmb250LXdlaWdodDogbGlnaHRlcjtcXG59XFxuI2FkYmxvY2stbW9kYWwgLmNvbnRlbnQgLmJvZHkgLmJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG4jYWRibG9jay1tb2RhbCAuY29udGVudCAuYm9keSAuYnV0dG9ucyBidXR0b24ge1xcbiAgYmFja2dyb3VuZDogI2JkYzNjNztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW46IDAgMTBweDtcXG4gIGZsZXg6IDE7XFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICBjb2xvcjogIzJjM2U1MDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuI2FkYmxvY2stbW9kYWwgLmNvbnRlbnQgLmJvZHkgLmJ1dHRvbnMgYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjZWNmMGYxO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG4gIC1tb3otYm94LXNoYWRvdzogMCAwIDVweCAwIHJnYmEoMCwgMCwgMCwgMC43NSk7XFxuICBib3gtc2hhZG93OiAwIDAgNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG59XFxuI2FkYmxvY2stbW9kYWwgLmNvbnRlbnQgLmNsb3NlLWJ1dHRvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogLTEycHg7XFxuICB0b3A6IC0xMnB4O1xcbiAgd2lkdGg6IDI0cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiAjMTExMTExO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzExMTExMTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG4jYWRibG9jay1tb2RhbCAuY29udGVudCAuY2xvc2UtYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6ICNEQ0RDREM7XFxufVxcbiNhZGJsb2NrLW1vZGFsIC5jb250ZW50IGZvb3Rlci5mb290ZXIge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xcbiAgY29sb3I6ICM3ZjhjOGQ7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi5iYWNrLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiAjYmRjM2M3O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbjogMCAxMHB4O1xcbiAgZmxleDogMTtcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gIGNvbG9yOiAjMmMzZTUwO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4uYmFjay1idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICNlY2YwZjE7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbiAgLW1vei1ib3gtc2hhZG93OiAwIDAgNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbn1cXG5cXG4jdHVybi1vZmYtYWRibG9ja2VyIC53aGl0ZWxpc3QtYWRibG9jayB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjUwcHg7XFxufVxcbiN0dXJuLW9mZi1hZGJsb2NrZXIgLndoaXRlbGlzdC1hZGJsb2NrLWdpZiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDAwcHg7XFxufVxcbiN0dXJuLW9mZi1hZGJsb2NrZXIgLndoaXRlbGlzdC1hZGJsb2NrLXRleHQge1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXFxcInNhbnMtc2VyaWZcXFwiO1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuI3R1cm4tb2ZmLWFkYmxvY2tlciAudGV4dC1ib2xkZWQge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9fZm9udHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlL21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlL2NvbXBvbmVudHMvbW9kYWwuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlL2NvbXBvbmVudHMvYnV0dG9ucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvcGFnZXMvdHVybi1vZmYtYWRibG9ja2VyLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBQTtFQUNBLCtEQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NGO0FERUE7RUFDRSxxQkFBQTtFQUNBLCtEQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0FGO0FER0E7RUFDRSxxQkFBQTtFQUNBLCtEQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ0RGO0FDakJBO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQ0FBQTtBRG1CRjtBQ2pCRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QURtQko7QUNqQkk7RUFDRSxZQUFBO0FEbUJOO0FDaEJJO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBRGtCTjtBQ2hCTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FEa0JSO0FDZk07RUFDRSxrQkFBQTtBRGlCUjtBQ2RNO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBRGdCUjtBQ2JNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FEZVI7QUNiUTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBRGVWO0FDYlU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlEQUFBO0VBQ0EsOENBQUE7RUFDQSx5Q0FBQTtBRGVaO0FDVEk7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QURXTjtBQ1RNO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FEV1I7QUNQSTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FEU047O0FFbEhBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FGcUhGO0FFbkhFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxpREFBQTtFQUNBLDhDQUFBO0VBQ0EseUNBQUE7QUZxSEo7O0FHcElFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUh1SUo7QUdwSUU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBSHNJSjtBR25JRTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FIcUlKO0FHbElFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FIb0lKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgc3JjOiB1cmwoZm9udHMvUm9ib3RvLVJlZ3VsYXIudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gIHNyYzogdXJsKGZvbnRzL1JvYm90by1Cb2xkLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgc3JjOiB1cmwoZm9udHMvUm9ib3RvLUxpZ2h0LnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblwiLFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCI7XFxuICBzcmM6IHVybChmb250cy9Sb2JvdG8tUmVndWxhci50dGYpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcbiAgc3JjOiB1cmwoZm9udHMvUm9ib3RvLUJvbGQudHRmKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCI7XFxuICBzcmM6IHVybChmb250cy9Sb2JvdG8tTGlnaHQudHRmKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxuICBmb250LXdlaWdodDogbGlnaHRlcjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuI2FkYmxvY2stbW9kYWwge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTtcXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG4jYWRibG9jay1tb2RhbCAuY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gIHdpZHRoOiA1MCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjb2xvcjogIzBEMEMwQztcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFxcXCJzYW5zLXNlcmlmXFxcIjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBtYXgtaGVpZ2h0OiA3MHZoO1xcbn1cXG4jYWRibG9jay1tb2RhbCAuY29udGVudCAuaGVhZGVyLCAjYWRibG9jay1tb2RhbCAuY29udGVudCAuZm9vdGVyIHtcXG4gIGhlaWdodDogNjBweDtcXG59XFxuI2FkYmxvY2stbW9kYWwgLmNvbnRlbnQgLmJvZHkge1xcbiAgaGVpZ2h0OiAzNTBweDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgcGFkZGluZzogMjBweCA0MHB4O1xcbn1cXG4jYWRibG9jay1tb2RhbCAuY29udGVudCAuYm9keSAuaWNvbiB7XFxuICB3aWR0aDogOTZweDtcXG4gIGhlaWdodDogOTZweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxufVxcbiNhZGJsb2NrLW1vZGFsIC5jb250ZW50IC5ib2R5IC50aXRsZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbiNhZGJsb2NrLW1vZGFsIC5jb250ZW50IC5ib2R5IC5zdWJ0aXRsZSB7XFxuICBwYWRkaW5nOiA1cHggMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbn1cXG4jYWRibG9jay1tb2RhbCAuY29udGVudCAuYm9keSAuYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcbiNhZGJsb2NrLW1vZGFsIC5jb250ZW50IC5ib2R5IC5idXR0b25zIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiAjYmRjM2M3O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbjogMCAxMHB4O1xcbiAgZmxleDogMTtcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gIGNvbG9yOiAjMmMzZTUwO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4jYWRibG9jay1tb2RhbCAuY29udGVudCAuYm9keSAuYnV0dG9ucyBidXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICNlY2YwZjE7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbiAgLW1vei1ib3gtc2hhZG93OiAwIDAgNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbn1cXG4jYWRibG9jay1tb2RhbCAuY29udGVudCAuY2xvc2UtYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAtMTJweDtcXG4gIHRvcDogLTEycHg7XFxuICB3aWR0aDogMjRweDtcXG4gIGhlaWdodDogMjRweDtcXG4gIGJhY2tncm91bmQ6ICNGNUY1RjU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6ICMxMTExMTE7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMTExMTExO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcbiNhZGJsb2NrLW1vZGFsIC5jb250ZW50IC5jbG9zZS1idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogI0RDRENEQztcXG59XFxuI2FkYmxvY2stbW9kYWwgLmNvbnRlbnQgZm9vdGVyLmZvb3RlciB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAwLjdyZW07XFxuICBjb2xvcjogIzdmOGM4ZDtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLmJhY2stYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6ICNiZGMzYzc7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luOiAwIDEwcHg7XFxuICBmbGV4OiAxO1xcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgY29sb3I6ICMyYzNlNTA7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcbi5iYWNrLWJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogI2VjZjBmMTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDVweCAwIHJnYmEoMCwgMCwgMCwgMC43NSk7XFxuICAtbW96LWJveC1zaGFkb3c6IDAgMCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbiAgYm94LXNoYWRvdzogMCAwIDVweCAwIHJnYmEoMCwgMCwgMCwgMC43NSk7XFxufVxcblxcbiN0dXJuLW9mZi1hZGJsb2NrZXIgLndoaXRlbGlzdC1hZGJsb2NrIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyNTBweDtcXG59XFxuI3R1cm4tb2ZmLWFkYmxvY2tlciAud2hpdGVsaXN0LWFkYmxvY2stZ2lmIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0MDBweDtcXG59XFxuI3R1cm4tb2ZmLWFkYmxvY2tlciAud2hpdGVsaXN0LWFkYmxvY2stdGV4dCB7XFxuICBmb250LWZhbWlseTogUm9ib3RvLCBcXFwic2Fucy1zZXJpZlxcXCI7XFxuICBmb250LXNpemU6IDE3cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG4jdHVybi1vZmYtYWRibG9ja2VyIC50ZXh0LWJvbGRlZCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XCIsXCIjYWRibG9jay1tb2RhbCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwwLDApO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xcblxcbiAgLmNvbnRlbnQge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICAgIHdpZHRoOiA1MCU7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgY29sb3I6ICMwRDBDMEM7XFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sICdzYW5zLXNlcmlmJztcXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICBoZWlnaHQ6IDUwMHB4O1xcbiAgICBtYXgtaGVpZ2h0OiA3MHZoO1xcblxcbiAgICAuaGVhZGVyLCAuZm9vdGVyIHtcXG4gICAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIH1cXG5cXG4gICAgLmJvZHkge1xcbiAgICAgIGhlaWdodDogMzUwcHg7XFxuICAgICAgb3ZlcmZsb3c6IGF1dG87XFxuICAgICAgcGFkZGluZzogMjBweCA0MHB4O1xcblxcbiAgICAgIC5pY29uIHtcXG4gICAgICAgIHdpZHRoOiA5NnB4O1xcbiAgICAgICAgaGVpZ2h0OiA5NnB4O1xcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XFxuICAgICAgICBtYXJnaW46IDIwcHggYXV0bztcXG4gICAgICB9XFxuXFxuICAgICAgLnRpdGxlIHtcXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICB9XFxuXFxuICAgICAgLnN1YnRpdGxlIHtcXG4gICAgICAgIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgICAgICAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICAgICAgfVxcblxcbiAgICAgIC5idXR0b25zIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG5cXG4gICAgICAgIGJ1dHRvbiB7XFxuICAgICAgICAgIGJhY2tncm91bmQ6ICNiZGMzYzc7XFxuICAgICAgICAgIGJvcmRlcjogbm9uZTtcXG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcXG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgICAgICAgICBtYXJnaW46IDAgMTBweDtcXG4gICAgICAgICAgZmxleDogMTtcXG4gICAgICAgICAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgICAgICAgICBjb2xvcjogIzJjM2U1MDtcXG4gICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcblxcbiAgICAgICAgICAmOmhvdmVyIHtcXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICAgICAgY29sb3I6ICNlY2YwZjE7XFxuICAgICAgICAgICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgNXB4IDAgcmdiYSgwLDAsMCwwLjc1KTtcXG4gICAgICAgICAgICAtbW96LWJveC1zaGFkb3c6IDAgMCA1cHggMCByZ2JhKDAsMCwwLDAuNzUpO1xcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA1cHggMCByZ2JhKDAsMCwwLDAuNzUpO1xcbiAgICAgICAgICB9XFxuICAgICAgICB9XFxuICAgICAgfVxcbiAgICB9XFxuXFxuICAgIC5jbG9zZS1idXR0b24ge1xcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgICByaWdodDogLTEycHg7XFxuICAgICAgdG9wOiAtMTJweDtcXG4gICAgICB3aWR0aDogMjRweDtcXG4gICAgICBoZWlnaHQ6IDI0cHg7XFxuICAgICAgYmFja2dyb3VuZDogI0Y1RjVGNTtcXG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICAgIGNvbG9yOiAjMTExMTExO1xcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMxMTExMTE7XFxuICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xcblxcbiAgICAgICY6aG92ZXIge1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgICAgYmFja2dyb3VuZDogI0RDRENEQztcXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgZm9vdGVyLmZvb3RlciB7XFxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgICAgZm9udC1zaXplOiAwLjdyZW07XFxuICAgICAgY29sb3I6ICM3ZjhjOGQ7XFxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgICB9XFxuICB9XFxufVxcblwiLFwiLmJhY2stYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6ICNiZGMzYzc7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luOiAwIDEwcHg7XFxuICBmbGV4OiAxO1xcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgY29sb3I6ICMyYzNlNTA7XFxuICBmb250LXNpemU6IDFyZW07XFxuXFxuICAmOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBjb2xvcjogI2VjZjBmMTtcXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgNXB4IDAgcmdiYSgwLDAsMCwwLjc1KTtcXG4gICAgLW1vei1ib3gtc2hhZG93OiAwIDAgNXB4IDAgcmdiYSgwLDAsMCwwLjc1KTtcXG4gICAgYm94LXNoYWRvdzogMCAwIDVweCAwIHJnYmEoMCwwLDAsMC43NSk7XFxuICB9XFxufVxcblwiLFwiI3R1cm4tb2ZmLWFkYmxvY2tlciB7XFxuICAud2hpdGVsaXN0LWFkYmxvY2sge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAyNTBweDtcXG4gIH1cXG5cXG4gIC53aGl0ZWxpc3QtYWRibG9jay1naWYge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA0MDBweDtcXG4gIH1cXG5cXG4gIC53aGl0ZWxpc3QtYWRibG9jay10ZXh0IHtcXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgJ3NhbnMtc2VyaWYnO1xcbiAgICBmb250LXNpemU6IDE3cHg7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICB9XFxuXFxuICAudGV4dC1ib2xkZWQge1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiAxNHB4O1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyICYmICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl0pOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cblxuXG4gIHVybCA9IHVybCAmJiB1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsO1xuXG4gIGlmICh0eXBlb2YgdXJsICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cblxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cblxuICByZXR1cm4gdXJsO1xufTsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL1JvYm90by1Cb2xkLnR0ZlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvUm9ib3RvLUxpZ2h0LnR0ZlwiOyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvUm9ib3RvLVJlZ3VsYXIudHRmXCI7IiwiaW1wb3J0IGFwaSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgICAgICAgaW1wb3J0IGNvbnRlbnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5zY3NzXCI7XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0IGRlZmF1bHQgY29udGVudC5sb2NhbHMgfHwge307IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJjbGFzcyBDb21wb25lbnQge1xuXG4gICAgcHVibGljIHJlbmRlckhlYWRlcigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYGBcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVuZGVyRm9vdGVyKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgIDxoci8+XG4gICAgICAgIDxmb290ZXIgY2xhc3M9XCJmb290ZXJcIj5cbiAgICAgICAgICAgICZjb3B5OyBBZEJsb2NrZXJcbiAgICAgICAgPC9mb290ZXI+XG4gICAgICAgIGA7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21wb25lbnQ7XG4iLCJjb25zdCBjb25zdGFudHMgPSB7XG4gICAgc2NyaXB0OiB7XG4gICAgICAgIGlkOiBcImFkYi1kZXRlY3Rpb25cIixcbiAgICAgICAgY3VzdG9tZXJJZEF0dHJpYnV0ZTogXCJkYXRhLWN1c3RvbWVyLWlkXCJcbiAgICB9LFxuICAgIHBvcHVwOiB7XG4gICAgICAgIGlkOiBcImFkYmxvY2stbW9kYWxcIixcbiAgICAgICAgaGVhZGVyQ2xhc3M6IFwiaGVhZGVyXCIsXG4gICAgICAgIGJvZHlDbGFzczogXCJib2R5XCIsXG4gICAgICAgIGZvb3RlckNsYXNzOiBcImZvb3RlclwiLFxuICAgICAgICBjb250ZW50Q2xhc3NlczogW1wiY29udGVudFwiXSxcbiAgICAgICAgY2xvc2VCdXR0b25DbGFzczogXCJjbG9zZS1idXR0b25cIixcbiAgICAgICAgYmFja0J1dHRvbkNsYXNzOiBcImJhY2stYnV0dG9uXCJcbiAgICB9LFxuICAgIHBhZ2VzOiB7XG4gICAgICAgIGhvbWU6ICdob21lJyxcbiAgICAgICAgdHVybk9mZkFkQmxvY2tlcjogJ3R1cm4tb2ZmLWFkYmxvY2tlcidcbiAgICB9XG59O1xuXG5PYmplY3QuZnJlZXplKGNvbnN0YW50cyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnN0YW50cztcbiIsImltcG9ydCB7IFFTIH0gZnJvbSBcIi4uL2hlbHBlcnMvRE9NXCI7XG5pbXBvcnQgY29uc3RhbnRzIGZyb20gXCIuLi9jb25zdGFudHMvaW5kZXhcIjtcblxuY2xhc3MgRGV0ZWN0aW9uIHtcbiAgICBhZEJsb2NrRW5hYmxlZDogYm9vbGVhblxuICAgIGN1c3RvbWVySWQ6IHN0cmluZ1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuYWRCbG9ja0VuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5pbml0aWF0ZSgpO1xuICAgIH1cblxuICAgIGluaXRpYXRlKCkge1xuICAgICAgICBjb25zdCBzY3JpcHRUYWcgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0IHx8IFFTKGAjJHtjb25zdGFudHMuc2NyaXB0LmlkfWApO1xuICAgICAgICB0aGlzLmN1c3RvbWVySWQgPSBzY3JpcHRUYWcuZ2V0QXR0cmlidXRlKGNvbnN0YW50cy5zY3JpcHQuY3VzdG9tZXJJZEF0dHJpYnV0ZSk7XG4gICAgfVxuXG4gICAgYXN5bmMgY2hlY2soKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgLy8gSWYgY3VzdG9tZXIgSUQgaXMgbm90IHByb3ZpZGVkLCB0ZXJtaW5hdGUgZnVydGhlciBhY3Rpb25zXG4gICAgICAgICAgICBpZiAoIXRoaXMuY3VzdG9tZXJJZCkge1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgbmV3IHNjcmlwdCBlbGVtZW50XG4gICAgICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgICAgIHNjcmlwdC5zcmMgPSBcIi8vcGFnZWFkMi5nb29nbGVzeW5kaWNhdGlvbi5jb20vcGFnZWFkL2pzL2Fkc2J5Z29vZ2xlLmpzXCI7XG5cbiAgICAgICAgICAgIC8vIFNldCB1cCBhbiBvbmVycm9yIGV2ZW50IGhhbmRsZXJcbiAgICAgICAgICAgIHNjcmlwdC5vbmVycm9yID0gKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRCbG9ja0VuYWJsZWQgPSB0cnVlOyAvLyBTZXQgdGhlIGZsYWcgdG8gdHJ1ZSBpZiB0aGUgc2NyaXB0IGZhaWxzIHRvIGxvYWRcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBTZXQgdXAgYW4gb25sb2FkIGV2ZW50IGhhbmRsZXJcbiAgICAgICAgICAgIHNjcmlwdC5vbmxvYWQgPSAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZEJsb2NrRW5hYmxlZCA9IGZhbHNlOyAvLyBTZXQgdGhlIGZsYWcgdG8gZmFsc2UgaWYgdGhlIHNjcmlwdCBsb2FkcyBzdWNjZXNzZnVsbHlcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBBcHBlbmQgdGhlIHNjcmlwdCB0byB0aGUgZG9jdW1lbnRcbiAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IERldGVjdGlvbjtcbiIsImV4cG9ydCBjb25zdCBjcmVhdGVFbGVtZW50ID0gKGVsZW1lbnQ6c3RyaW5nKSA6IEVsZW1lbnQgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbmV4cG9ydCBjb25zdCBjcmVhdGVFbGVtZW50V2l0aElkID0gKGVsZW1lbnQ6c3RyaW5nLCBpZDpzdHJpbmcpIDogRWxlbWVudCA9PiB7XG4gICAgbGV0IGVsID0gY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgICBlbC5pZCA9IGlkO1xuXG4gICAgcmV0dXJuIGVsO1xufTtcbmV4cG9ydCBjb25zdCBjcmVhdGVFbGVtZW50V2l0aENsYXNzZXMgPSAoZWxlbWVudDpzdHJpbmcsIGNsYXNzZXM6QXJyYXk8c3RyaW5nPikgOiBFbGVtZW50ID0+IHtcbiAgICBsZXQgZWwgPSBjcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICAgIGNsYXNzZXMuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB9KVxuXG4gICAgcmV0dXJuIGVsO1xufTtcbmV4cG9ydCBjb25zdCBRUyA9IChzZWxlY3RvcjpzdHJpbmcpIDogRWxlbWVudCA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbmV4cG9ydCBjb25zdCBRU2FsbCA9IChzZWxlY3RvcjpzdHJpbmcpIDogTm9kZUxpc3QgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4iLCJjbGFzcyBQYWdlIHtcblxuICAgIHB1YmxpYyByZW5kZXJIb21lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgIDxpbWcgc3JjPScuL3N0YXRpYy9pY29ucy9hZC1ibG9jay5zdmcnIGNsYXNzPSdpY29uJyBhbHQ9J0FkQmxvY2sgaWNvbicgLz5cbiAgICAgICAgPGgxIGNsYXNzPVwidGl0bGVcIj5Zb3UncmUgdXNpbmcgYW4gQWRibG9ja2VyLjwvaDE+XG4gICAgICAgIDxwIGNsYXNzPVwic3VidGl0bGVcIj5BZHMgYXJlIG5lY2Vzc2FyeSBmb3IgdGhlIHNtb290aCBvcGVyYXRpb24gb2Ygb3VyIHNpdGUuIElmIHlvdSB3YW50IHRvIGhlbHAsIHJlZ2lzdGVyIG9yIHR1cm4gb2ZmIHlvdXIgQWRibG9ja2VyLjwvcD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cbiAgICAgICAgICAgIDxidXR0b24+UmVnaXN0ZXI8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJ0dXJuLW9mZi1hZGJsb2NrZXJcIj5UdXJuIG9mZiBBZGJsb2NrZXI8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlclR1cm5PZmZBZEJsb2NrZXIoKTogc3RyaW5nIHtcblxuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGRpdiBpZD1cInBhZ2UtdHVybi1vZmYtYWRibG9ja2VyXCI+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScuL3N0YXRpYy9pY29ucy9hZC1ibG9jay5zdmcnIGNsYXNzPSdpY29uJyBhbHQ9J0FkQmxvY2sgaWNvbicgLz5cbiAgICAgICAgICAgICAgICAgICAgPGgzPkRpc2FibGUgQWRibG9ja2VyczwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxoNT5IT1cgVE8gVFVSTiBPRkYgQURCTE9DSyBQTFVHSU4gPzwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDxwPk5vYm9keSBsaWtlcyBhZHMgYnV0IHRoZXkgYXJlIHRoZSBuZWNlc3NhcnkgZXZpbCBvZiBhbG1vc3QgZXZlcnkgZnJlZSBzZXJ2aWNlLlxuICAgIEJlIGZhaXIgYW5kIGNvbnNpZGVyIHBhdXNpbmcgeW91ciBhZCBibG9ja2VyIHRvIHN1cHBvcnQgdGhlIGNyZWF0b3JzIHdobyB3b3JrIGhhcmQgdG8gY3JlYXRlIHZhbHVlLjwvcD5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxoNT5GSVJTVCBERVRFUk1JTkUgV0hJQ0ggQURCTE9DS0VSIFlPVSBBUkUgVVNJTkc6PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPHA+SW4geW91ciBicm93c2VyIHRvb2xiYXIgbG9vayBmb3Igb25lIG9mIHRoZSBmb2xsb3dpbmcgaWNvbnMgdG8gZGV0ZXJtaW5lIHdoaWNoIGFkYmxvY2tlciB5b3UgYXJlIHJ1bm5pbmcuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwid2hpdGVsaXN0LWFkYmxvY2tcIiBzcmM9XCIuL3N0YXRpYy9pbWFnZXMvd2hpdGVsaXN0LWJoLWFkYmxvY2stb3B0aW9ucy5qcGVnXCIgYWx0PVwiVHVybiBvZmYgYWRibG9ja2VyXCIgLz5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxoNT5GT1IgQURCTE9DSyBQTFVTOjwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJ3aGl0ZWxpc3QtYWRibG9jay1naWZcIiBzcmM9XCIuL3N0YXRpYy9pbWFnZXMvd2hpdGVsaXN0LWJoLWFkYmxvY2twbHVzLmdpZlwiIGFsdD1cIkFkYmxvY2sgcGx1c1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwid2hpdGVsaXN0LWFkYmxvY2stdGV4dFwiPkNsaWNrIHRoZSBhZGJsb2NrIHBsdXMgaWNvbiA8YnIvPlxuICAgICAgICAgICAgICAgICAgICBDbGljayA8c3BhbiBjbGFzcz1cInRleHQtYm9sZGVkXCI+RW5hYmxlZCBPbiB0aGlzIFNpdGU8L3NwYW4+IHRvIGNoYW5nZSBpdCB0byA8c3BhbiBjbGFzcz1cInRleHQtYm9sZGVkXCI+RGlzYWJsZWQgb24gdGhpcyBzaXRlPC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxoNT5GT1IgQURCTE9DSzo8L2g1PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwid2hpdGVsaXN0LWFkYmxvY2stZ2lmXCIgc3JjPVwiLi9zdGF0aWMvaW1hZ2VzL3doaXRlbGlzdC1iaC1hZGJsb2NrLmdpZlwiIGFsdD1cIkFkYmxvY2tcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIndoaXRlbGlzdC1hZGJsb2NrLXRleHRcIj5DbGljayB0aGUgYWRibG9jayBwbHVzIGljb24gPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgQ2xpY2sgPHNwYW4gY2xhc3M9XCJ0ZXh0LWJvbGRlZFwiPkRvbuKAmXQgcnVuIG9uIHBhZ2VzIG9uIHRoaXMgZG9tYWluPC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJhY2stYnV0dG9uXCIgZGF0YS1zcmM9XCJob21lXCI+QmFjazwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGBcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XG4iLCJpbXBvcnQge2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NlcywgY3JlYXRlRWxlbWVudFdpdGhJZCwgUVN9IGZyb20gXCIuLi9oZWxwZXJzL0RPTVwiO1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tIFwiLi4vY29uc3RhbnRzL2luZGV4XCI7XG5pbXBvcnQgUGFnZSBmcm9tIFwiLi4vcGFnZS9pbmRleFwiO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50L2luZGV4XCI7XG5cbmNsYXNzIFBvcHVwIHtcbiAgICBwb3B1cDogRWxlbWVudFxuICAgIGhlYWRlcjogRWxlbWVudFxuICAgIGJvZHk6IEVsZW1lbnRcbiAgICBmb290ZXI6IEVsZW1lbnRcbiAgICBjb250ZW50OiBFbGVtZW50XG4gICAgaGFzQ2xvc2VCdXR0b246IGJvb2xlYW5cbiAgICBjdXJyZW50UGFnZTogc3RyaW5nXG4gICAgY3VzdG9tZXJJZDogc3RyaW5nXG5cbiAgICBjb25zdHJ1Y3RvcihoYXNDbG9zZUJ1dHRvbjogYm9vbGVhbiwgY3VycmVudFBhZ2U/OiBzdHJpbmcpIHtcbiAgICAgICB0aGlzLmhhc0Nsb3NlQnV0dG9uID0gaGFzQ2xvc2VCdXR0b247XG4gICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IGN1cnJlbnRQYWdlID8/ICdob21lJztcbiAgICAgICB0aGlzLmN1c3RvbWVySWQgPSBcIlwiO1xuICAgIH1cblxuICAgIHB1YmxpYyBpbml0KCk6IHZvaWQge1xuICAgICAgICB0aGlzLnBvcHVwID0gY3JlYXRlRWxlbWVudFdpdGhJZChcImRpdlwiLCBjb25zdGFudHMucG9wdXAuaWQpO1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzZXMoXCJkaXZcIiwgY29uc3RhbnRzLnBvcHVwLmNvbnRlbnRDbGFzc2VzKTtcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzZXMoXCJkaXZcIiwgW2NvbnN0YW50cy5wb3B1cC5oZWFkZXJDbGFzc10pO1xuICAgICAgICB0aGlzLmJvZHkgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzZXMoXCJkaXZcIiwgW2NvbnN0YW50cy5wb3B1cC5ib2R5Q2xhc3NdKTtcbiAgICAgICAgdGhpcy5mb290ZXIgPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzZXMoXCJkaXZcIiwgW2NvbnN0YW50cy5wb3B1cC5mb290ZXJDbGFzc10pO1xuXG4gICAgICAgIHRoaXMucHJlcGFyZUNvbnRlbnRTdHJ1Y3R1cmUoKVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBwcmVwYXJlQ29udGVudFN0cnVjdHVyZSgpOiB2b2lkIHtcbiAgICAgICAgbGV0IGNvbXBvbmVudCA9IG5ldyBDb21wb25lbnQoKTtcbiAgICAgICAgdGhpcy5oZWFkZXIuaW5uZXJIVE1MID0gY29tcG9uZW50LnJlbmRlckhlYWRlcigpO1xuICAgICAgICB0aGlzLmZvb3Rlci5pbm5lckhUTUwgPSBjb21wb25lbnQucmVuZGVyRm9vdGVyKCk7XG5cbiAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZENoaWxkKHRoaXMuaGVhZGVyKTtcbiAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZENoaWxkKHRoaXMuYm9keSk7XG4gICAgICAgIHRoaXMuY29udGVudC5hcHBlbmRDaGlsZCh0aGlzLmZvb3Rlcik7XG4gICAgICAgIGlmICh0aGlzLmhhc0Nsb3NlQnV0dG9uKSB7XG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy5nZW5lcmF0ZUNsb3NlQnV0dG9uKCkpXG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBvcHVwLmFwcGVuZENoaWxkKHRoaXMuY29udGVudCk7XG5cbiAgICAgICAgdGhpcy5wYWdlUmVuZGVyKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHBhZ2VSZW5kZXIoKTogdm9pZCB7XG4gICAgICAgIGxldCBwYWdlID0gbmV3IFBhZ2UoKTtcblxuICAgICAgICBzd2l0Y2ggKHRoaXMuY3VycmVudFBhZ2UpIHtcbiAgICAgICAgICAgIGNhc2UgY29uc3RhbnRzLnBhZ2VzLmhvbWU6XG4gICAgICAgICAgICAgICAgdGhpcy5ib2R5LmlubmVySFRNTCA9IHBhZ2UucmVuZGVySG9tZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBjb25zdGFudHMucGFnZXMudHVybk9mZkFkQmxvY2tlcjpcbiAgICAgICAgICAgICAgICB0aGlzLmJvZHkuaW5uZXJIVE1MID0gcGFnZS5yZW5kZXJUdXJuT2ZmQWRCbG9ja2VyKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJbNDA0XSBQYWdlIG5vdCBmb3VuZCFcIilcbiAgICAgICAgfVxuXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5wb3B1cCk7XG5cbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50cygpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBnZW5lcmF0ZUNsb3NlQnV0dG9uKCk6IEVsZW1lbnQge1xuICAgICAgICBsZXQgY2xvc2VCdG4gPSBjcmVhdGVFbGVtZW50V2l0aENsYXNzZXMoXCJkaXZcIiwgW2NvbnN0YW50cy5wb3B1cC5jbG9zZUJ1dHRvbkNsYXNzXSk7XG4gICAgICAgIGNsb3NlQnRuLmlubmVySFRNTCA9IFwiJnRpbWVzXCI7XG5cbiAgICAgICAgcmV0dXJuIGNsb3NlQnRuO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBkaXNwYXRjaEV2ZW50cygpOiB2b2lkIHtcbiAgICAgICAgUVMoYC4ke2NvbnN0YW50cy5wb3B1cC5jbG9zZUJ1dHRvbkNsYXNzfWApID8gUVMoYC4ke2NvbnN0YW50cy5wb3B1cC5jbG9zZUJ1dHRvbkNsYXNzfWApLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLmNsb3NlTW9kYWwoKSwgdHJ1ZSkgOiBudWxsO1xuICAgICAgICBRUyhgIyR7Y29uc3RhbnRzLnBhZ2VzLnR1cm5PZmZBZEJsb2NrZXJ9YCkgPyBRUyhgIyR7Y29uc3RhbnRzLnBhZ2VzLnR1cm5PZmZBZEJsb2NrZXJ9YCkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuY2hhbmdlUGFnZShjb25zdGFudHMucGFnZXMudHVybk9mZkFkQmxvY2tlciksIHRydWUpIDogbnVsbDtcbiAgICAgICAgUVMoYC4ke2NvbnN0YW50cy5wb3B1cC5iYWNrQnV0dG9uQ2xhc3N9YCkgPyBRUyhgLiR7Y29uc3RhbnRzLnBvcHVwLmJhY2tCdXR0b25DbGFzc31gKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4gdGhpcy5yZXR1cm5CYWNrKGV2dCksIHRydWUpIDogbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZGV0YWNoRXZlbnRzKCk6IHZvaWQge1xuICAgICAgICBRUyhgLiR7Y29uc3RhbnRzLnBvcHVwLmNsb3NlQnV0dG9uQ2xhc3N9YCkgPyBRUyhgLiR7Y29uc3RhbnRzLnBvcHVwLmNsb3NlQnV0dG9uQ2xhc3N9YCkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuY2xvc2VNb2RhbCgpLCB0cnVlKSA6IG51bGw7XG4gICAgICAgIFFTKGAjJHtjb25zdGFudHMucGFnZXMudHVybk9mZkFkQmxvY2tlcn1gKSA/IFFTKGAjJHtjb25zdGFudHMucGFnZXMudHVybk9mZkFkQmxvY2tlcn1gKS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5jaGFuZ2VQYWdlKGNvbnN0YW50cy5wYWdlcy50dXJuT2ZmQWRCbG9ja2VyKSwgdHJ1ZSkgOiBudWxsO1xuICAgICAgICBRUyhgLiR7Y29uc3RhbnRzLnBvcHVwLmJhY2tCdXR0b25DbGFzc31gKSA/IFFTKGAuJHtjb25zdGFudHMucG9wdXAuYmFja0J1dHRvbkNsYXNzfWApLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZ0KSA9PiB0aGlzLnJldHVybkJhY2soZXZ0KSwgdHJ1ZSkgOiBudWxsO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBjaGFuZ2VQYWdlKHBhZ2U6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICB0aGlzLmN1cnJlbnRQYWdlID0gcGFnZTtcbiAgICAgICAgdGhpcy5kZXRhY2hFdmVudHMoKTtcbiAgICAgICAgdGhpcy5wYWdlUmVuZGVyKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHJldHVybkJhY2soZT86IEV2ZW50KTogdm9pZCB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpZiAoIShlLnRhcmdldCBpbnN0YW5jZW9mIEhUTUxCdXR0b25FbGVtZW50KSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFlLnRhcmdldC5kYXRhc2V0LnNyYykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5jaGFuZ2VQYWdlKGUudGFyZ2V0LmRhdGFzZXQuc3JjLnRvU3RyaW5nKCkpXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNsb3NlTW9kYWwoZT86IEV2ZW50KTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiYWFhYVwiKVxuICAgICAgICB0aGlzLmNvbnRlbnQgPSBudWxsO1xuXG4gICAgICAgIHRoaXMuZGV0YWNoRXZlbnRzKCk7XG4gICAgICAgIFFTKGAjJHtjb25zdGFudHMucG9wdXAuaWR9YCkucmVtb3ZlKCk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQb3B1cDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgIXNjcmlwdFVybCkgc2NyaXB0VXJsID0gc2NyaXB0c1tpLS1dLnNyYztcblx0XHR9XG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IERldGVjdGlvbiBmcm9tIFwiLi9kZXRlY3Rpb24vaW5kZXhcIjtcbmltcG9ydCBQb3B1cCBmcm9tIFwiLi9wb3B1cC9pbmRleFwiO1xuaW1wb3J0ICcuLi9zdHlsZS9tYWluLnNjc3MnO1xuXG5sZXQgZGV0ZWN0aW9uID0gbmV3IERldGVjdGlvbigpO1xuZGV0ZWN0aW9uLmNoZWNrKClcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICAgIGlmIChkZXRlY3Rpb24uYWRCbG9ja0VuYWJsZWQpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRldGVjdGlvbi5jdXN0b21lcklkKTtcbiAgICAgICAgICAgIGxldCBwb3B1cCA9IG5ldyBQb3B1cCh0cnVlKTtcbiAgICAgICAgICAgIHBvcHVwLmluaXQoKTtcbiAgICAgICAgfVxuICAgIH0pXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=