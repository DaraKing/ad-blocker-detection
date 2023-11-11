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
    }
    Detection.prototype.check = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve) {
                        // Create a new script element
                        var script = document.createElement('script');
                        script.src = "//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js";
                        // Set up an onerror event handler
                        script.onerror = function () {
                            _this.adBlockEnabled = true; // Set the flag to true if the script fails to load
                            console.log('Adblocker detected');
                            resolve();
                        };
                        // Set up an onload event handler
                        script.onload = function () {
                            _this.adBlockEnabled = false; // Set the flag to false if the script loads successfully
                            console.log('No adblocker detected');
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
        var popup = new _popup_index__WEBPACK_IMPORTED_MODULE_1__["default"](true);
        popup.init();
    }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN5SDtBQUM3QjtBQUNPO0FBQzVCO0FBQ0g7QUFDQztBQUNyRSw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0IsQ0FBQyxpRUFBNkI7QUFDdEcseUNBQXlDLHNGQUErQixDQUFDLDhEQUE2QjtBQUN0Ryx5Q0FBeUMsc0ZBQStCLENBQUMsK0RBQTZCO0FBQ3RHO0FBQ0Esc0RBQXNELDRCQUE0Qiw4RUFBOEUsd0JBQXdCLHVCQUF1QixHQUFHLGNBQWMsNEJBQTRCLDhFQUE4RSxzQkFBc0IsdUJBQXVCLEdBQUcsY0FBYyw0QkFBNEIsOEVBQThFLHlCQUF5Qix1QkFBdUIsR0FBRyxrQkFBa0Isb0JBQW9CLGVBQWUsdUJBQXVCLFlBQVksV0FBVyxnQkFBZ0IsaUJBQWlCLG1CQUFtQixtQ0FBbUMseUNBQXlDLEdBQUcsMkJBQTJCLDhCQUE4QixpQkFBaUIsMkJBQTJCLGVBQWUsdUJBQXVCLG1CQUFtQix3Q0FBd0MsdUJBQXVCLGtCQUFrQixxQkFBcUIsR0FBRyxvRUFBb0UsaUJBQWlCLEdBQUcsaUNBQWlDLGtCQUFrQixtQkFBbUIsdUJBQXVCLEdBQUcsdUNBQXVDLGdCQUFnQixpQkFBaUIsbUJBQW1CLHNCQUFzQixHQUFHLHdDQUF3Qyx1QkFBdUIsR0FBRywyQ0FBMkMsc0JBQXNCLHlCQUF5QixHQUFHLDBDQUEwQyxrQkFBa0Isd0JBQXdCLDRCQUE0QixxQkFBcUIsd0JBQXdCLEdBQUcsaURBQWlELHdCQUF3QixpQkFBaUIsa0JBQWtCLHVCQUF1QixtQkFBbUIsWUFBWSx1QkFBdUIsbUJBQW1CLG9CQUFvQixHQUFHLHVEQUF1RCxvQkFBb0IsbUJBQW1CLHNEQUFzRCxtREFBbUQsOENBQThDLEdBQUcseUNBQXlDLHVCQUF1QixpQkFBaUIsZUFBZSxnQkFBZ0IsaUJBQWlCLHdCQUF3Qix1QkFBdUIsa0JBQWtCLDRCQUE0Qix3QkFBd0IsbUJBQW1CLDhCQUE4QixzQkFBc0Isb0JBQW9CLEdBQUcsK0NBQStDLG9CQUFvQix3QkFBd0IsR0FBRyx5Q0FBeUMscUJBQXFCLHVCQUF1QixzQkFBc0IsbUJBQW1CLG9CQUFvQixHQUFHLGtCQUFrQix3QkFBd0IsaUJBQWlCLGtCQUFrQix1QkFBdUIsbUJBQW1CLFlBQVksdUJBQXVCLG1CQUFtQixvQkFBb0IsR0FBRyxzQkFBc0Isb0JBQW9CLG1CQUFtQixzREFBc0QsbURBQW1ELDhDQUE4QyxHQUFHLDRDQUE0QyxnQkFBZ0Isa0JBQWtCLEdBQUcsOENBQThDLGdCQUFnQixrQkFBa0IsR0FBRywrQ0FBK0Msd0NBQXdDLG9CQUFvQixxQkFBcUIsR0FBRyxvQ0FBb0Msc0JBQXNCLG9CQUFvQixHQUFHLE9BQU8sOFFBQThRLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsc0NBQXNDLDBCQUEwQiwwREFBMEQsd0JBQXdCLHVCQUF1QixHQUFHLGdCQUFnQiwwQkFBMEIsdURBQXVELHNCQUFzQix1QkFBdUIsR0FBRyxnQkFBZ0IsMEJBQTBCLHdEQUF3RCx5QkFBeUIsdUJBQXVCLEdBQUcsaUJBQWlCLDRCQUE0Qiw0REFBNEQsd0JBQXdCLHVCQUF1QixHQUFHLGNBQWMsNEJBQTRCLHlEQUF5RCxzQkFBc0IsdUJBQXVCLEdBQUcsY0FBYyw0QkFBNEIsMERBQTBELHlCQUF5Qix1QkFBdUIsR0FBRyxrQkFBa0Isb0JBQW9CLGVBQWUsdUJBQXVCLFlBQVksV0FBVyxnQkFBZ0IsaUJBQWlCLG1CQUFtQixtQ0FBbUMseUNBQXlDLEdBQUcsMkJBQTJCLDhCQUE4QixpQkFBaUIsMkJBQTJCLGVBQWUsdUJBQXVCLG1CQUFtQix3Q0FBd0MsdUJBQXVCLGtCQUFrQixxQkFBcUIsR0FBRyxvRUFBb0UsaUJBQWlCLEdBQUcsaUNBQWlDLGtCQUFrQixtQkFBbUIsdUJBQXVCLEdBQUcsdUNBQXVDLGdCQUFnQixpQkFBaUIsbUJBQW1CLHNCQUFzQixHQUFHLHdDQUF3Qyx1QkFBdUIsR0FBRywyQ0FBMkMsc0JBQXNCLHlCQUF5QixHQUFHLDBDQUEwQyxrQkFBa0Isd0JBQXdCLDRCQUE0QixxQkFBcUIsd0JBQXdCLEdBQUcsaURBQWlELHdCQUF3QixpQkFBaUIsa0JBQWtCLHVCQUF1QixtQkFBbUIsWUFBWSx1QkFBdUIsbUJBQW1CLG9CQUFvQixHQUFHLHVEQUF1RCxvQkFBb0IsbUJBQW1CLHNEQUFzRCxtREFBbUQsOENBQThDLEdBQUcseUNBQXlDLHVCQUF1QixpQkFBaUIsZUFBZSxnQkFBZ0IsaUJBQWlCLHdCQUF3Qix1QkFBdUIsa0JBQWtCLDRCQUE0Qix3QkFBd0IsbUJBQW1CLDhCQUE4QixzQkFBc0Isb0JBQW9CLEdBQUcsK0NBQStDLG9CQUFvQix3QkFBd0IsR0FBRyx5Q0FBeUMscUJBQXFCLHVCQUF1QixzQkFBc0IsbUJBQW1CLG9CQUFvQixHQUFHLGtCQUFrQix3QkFBd0IsaUJBQWlCLGtCQUFrQix1QkFBdUIsbUJBQW1CLFlBQVksdUJBQXVCLG1CQUFtQixvQkFBb0IsR0FBRyxzQkFBc0Isb0JBQW9CLG1CQUFtQixzREFBc0QsbURBQW1ELDhDQUE4QyxHQUFHLDRDQUE0QyxnQkFBZ0Isa0JBQWtCLEdBQUcsOENBQThDLGdCQUFnQixrQkFBa0IsR0FBRywrQ0FBK0Msd0NBQXdDLG9CQUFvQixxQkFBcUIsR0FBRyxvQ0FBb0Msc0JBQXNCLG9CQUFvQixHQUFHLG1CQUFtQixvQkFBb0IsZUFBZSx1QkFBdUIsWUFBWSxXQUFXLGdCQUFnQixpQkFBaUIsbUJBQW1CLGlDQUFpQyxzQ0FBc0MsZ0JBQWdCLGdDQUFnQyxtQkFBbUIsNkJBQTZCLGlCQUFpQix5QkFBeUIscUJBQXFCLHdDQUF3Qyx5QkFBeUIsb0JBQW9CLHVCQUF1QiwwQkFBMEIscUJBQXFCLE9BQU8sZUFBZSxzQkFBc0IsdUJBQXVCLDJCQUEyQixpQkFBaUIsc0JBQXNCLHVCQUF1Qix5QkFBeUIsNEJBQTRCLFNBQVMsa0JBQWtCLDZCQUE2QixTQUFTLHFCQUFxQiw0QkFBNEIsK0JBQStCLFNBQVMsb0JBQW9CLHdCQUF3Qiw4QkFBOEIsa0NBQWtDLDJCQUEyQiw4QkFBOEIsb0JBQW9CLGdDQUFnQyx5QkFBeUIsMEJBQTBCLCtCQUErQiwyQkFBMkIsb0JBQW9CLCtCQUErQiwyQkFBMkIsNEJBQTRCLHVCQUF1Qiw4QkFBOEIsNkJBQTZCLDZEQUE2RCwwREFBMEQscURBQXFELGFBQWEsV0FBVyxTQUFTLE9BQU8sdUJBQXVCLDJCQUEyQixxQkFBcUIsbUJBQW1CLG9CQUFvQixxQkFBcUIsNEJBQTRCLDJCQUEyQixzQkFBc0IsZ0NBQWdDLDRCQUE0Qix1QkFBdUIsa0NBQWtDLDBCQUEwQix3QkFBd0IsbUJBQW1CLDBCQUEwQiw4QkFBOEIsU0FBUyxPQUFPLHVCQUF1Qix5QkFBeUIsMkJBQTJCLDBCQUEwQix1QkFBdUIsd0JBQXdCLE9BQU8sS0FBSyxHQUFHLG1CQUFtQix3QkFBd0IsaUJBQWlCLGtCQUFrQix1QkFBdUIsbUJBQW1CLFlBQVksdUJBQXVCLG1CQUFtQixvQkFBb0IsZUFBZSxzQkFBc0IscUJBQXFCLHFEQUFxRCxrREFBa0QsNkNBQTZDLEtBQUssR0FBRywwQkFBMEIsd0JBQXdCLGtCQUFrQixvQkFBb0IsS0FBSyw4QkFBOEIsa0JBQWtCLG9CQUFvQixLQUFLLCtCQUErQix3Q0FBd0Msc0JBQXNCLHVCQUF1QixLQUFLLG9CQUFvQix3QkFBd0Isc0JBQXNCLEtBQUssR0FBRyxxQkFBcUI7QUFDdnhYO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7Ozs7O0FDZDFCOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMscUJBQXFCO0FBQ2pFOztBQUVBO0FBQ0EsS0FBSztBQUNMLEtBQUs7QUFDTDs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHNCQUFzQixpQkFBaUI7QUFDdkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixxQkFBcUI7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7OztBQ2pFYTs7QUFFYixrQ0FBa0M7O0FBRWxDLDhCQUE4Qjs7QUFFOUIsa0RBQWtELGdCQUFnQixnRUFBZ0Usd0RBQXdELDZEQUE2RCxzREFBc0Q7O0FBRTdTLHVDQUF1Qyx1REFBdUQsdUNBQXVDLFNBQVMsT0FBTyxvQkFBb0I7O0FBRXpLLHlDQUF5Qyw4RkFBOEYsd0JBQXdCLGVBQWUsZUFBZSxnQkFBZ0IsWUFBWSxNQUFNLHdCQUF3QiwrQkFBK0IsYUFBYSxxQkFBcUIsdUNBQXVDLGNBQWMsV0FBVyxZQUFZLFVBQVUsTUFBTSxtREFBbUQsVUFBVSxzQkFBc0I7O0FBRXZlLGdDQUFnQzs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxjQUFjO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUNuQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJOzs7QUFHSjs7QUFFQTtBQUNBO0FBQ0EsSUFBSTs7O0FBR0o7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNqQ0EsaUVBQWUscUJBQXVCLGlDQUFpQzs7Ozs7Ozs7Ozs7Ozs7QUNBdkUsaUVBQWUscUJBQXVCLGtDQUFrQzs7Ozs7Ozs7Ozs7Ozs7QUNBeEUsaUVBQWUscUJBQXVCLG9DQUFvQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBa0I7QUFDNUYsWUFBcUk7O0FBRXJJOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLDJIQUFPOzs7O0FBSXhCLGlFQUFlLDJIQUFPLGFBQWE7Ozs7Ozs7Ozs7QUNadEI7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdEQUF3RDs7QUFFeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0E7O0FBRUEsa0JBQWtCLHdCQUF3QjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7O0FBRW5GO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLHFFQUFxRSxxQkFBcUIsY0FBYzs7QUFFeEc7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxJQUFJOztBQUVKOzs7QUFHQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCO0FBQzNCOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLDRCQUE0QjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxxQkFBcUIsNkJBQTZCO0FBQ2xEOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUM1UUE7SUFBQTtJQWNBLENBQUM7SUFaVSxnQ0FBWSxHQUFuQjtRQUNJLE9BQU8sRUFBRTtJQUNiLENBQUM7SUFFTSxnQ0FBWSxHQUFuQjtRQUNJLE9BQU8sK0dBS04sQ0FBQztJQUNOLENBQUM7SUFDTCxnQkFBQztBQUFELENBQUM7QUFFRCxpRUFBZSxTQUFTLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ2hCekIsSUFBTSxTQUFTLEdBQUc7SUFDZCxLQUFLLEVBQUU7UUFDSCxFQUFFLEVBQUUsZUFBZTtRQUNuQixXQUFXLEVBQUUsUUFBUTtRQUNyQixTQUFTLEVBQUUsTUFBTTtRQUNqQixXQUFXLEVBQUUsUUFBUTtRQUNyQixjQUFjLEVBQUUsQ0FBQyxTQUFTLENBQUM7UUFDM0IsZ0JBQWdCLEVBQUUsY0FBYztRQUNoQyxlQUFlLEVBQUUsYUFBYTtLQUNqQztJQUNELEtBQUssRUFBRTtRQUNILElBQUksRUFBRSxNQUFNO1FBQ1osZ0JBQWdCLEVBQUUsb0JBQW9CO0tBQ3pDO0NBQ0osQ0FBQztBQUVGLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFekIsaUVBQWUsU0FBUyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQnpCO0lBR0k7UUFDSSxJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQztJQUNoQyxDQUFDO0lBRUsseUJBQUssR0FBWDs7OztnQkFDSSxzQkFBTyxJQUFJLE9BQU8sQ0FBTyxVQUFDLE9BQU87d0JBQzdCLDhCQUE4Qjt3QkFDOUIsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQzt3QkFDaEQsTUFBTSxDQUFDLEdBQUcsR0FBRywwREFBMEQsQ0FBQzt3QkFFeEUsa0NBQWtDO3dCQUNsQyxNQUFNLENBQUMsT0FBTyxHQUFHOzRCQUNiLEtBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLENBQUMsbURBQW1EOzRCQUMvRSxPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixDQUFDLENBQUM7NEJBQ2xDLE9BQU8sRUFBRSxDQUFDO3dCQUNkLENBQUMsQ0FBQzt3QkFFRixpQ0FBaUM7d0JBQ2pDLE1BQU0sQ0FBQyxNQUFNLEdBQUc7NEJBQ1osS0FBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsQ0FBQyx5REFBeUQ7NEJBQ3RGLE9BQU8sQ0FBQyxHQUFHLENBQUMsdUJBQXVCLENBQUMsQ0FBQzs0QkFDckMsT0FBTyxFQUFFLENBQUM7d0JBQ2QsQ0FBQyxDQUFDO3dCQUVGLG9DQUFvQzt3QkFDcEMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLENBQUM7b0JBQ3RDLENBQUMsQ0FBQyxFQUFDOzs7S0FDTjtJQUVMLGdCQUFDO0FBQUQsQ0FBQztBQUVELGlFQUFlLFNBQVMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xDbEIsSUFBTSxhQUFhLEdBQUcsVUFBQyxPQUFjLElBQWUsZUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBL0IsQ0FBK0IsQ0FBQztBQUNwRixJQUFNLG1CQUFtQixHQUFHLFVBQUMsT0FBYyxFQUFFLEVBQVM7SUFDekQsSUFBSSxFQUFFLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ2hDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO0lBRVgsT0FBTyxFQUFFLENBQUM7QUFDZCxDQUFDLENBQUM7QUFDSyxJQUFNLHdCQUF3QixHQUFHLFVBQUMsT0FBYyxFQUFFLE9BQXFCO0lBQzFFLElBQUksRUFBRSxHQUFHLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUNoQyxPQUFPLENBQUMsT0FBTyxDQUFDLFVBQUMsU0FBUztRQUN0QixFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNoQyxDQUFDLENBQUM7SUFFRixPQUFPLEVBQUUsQ0FBQztBQUNkLENBQUMsQ0FBQztBQUNLLElBQU0sRUFBRSxHQUFHLFVBQUMsUUFBZSxJQUFlLGVBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQWhDLENBQWdDLENBQUM7QUFDM0UsSUFBTSxLQUFLLEdBQUcsVUFBQyxRQUFlLElBQWdCLGVBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsRUFBbkMsQ0FBbUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDaEJ6RjtJQUFBO0lBOENBLENBQUM7SUE1Q1UseUJBQVUsR0FBakI7UUFDSSxPQUFPLG9kQVFOLENBQUM7SUFDTixDQUFDO0lBRU0scUNBQXNCLEdBQTdCO1FBRUksT0FBTyxnNkRBNEJOO0lBQ0wsQ0FBQztJQUNMLFdBQUM7QUFBRCxDQUFDO0FBRUQsaUVBQWUsSUFBSSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEQ2RDtBQUN0QztBQUNWO0FBQ1U7QUFFM0M7SUFTSSxlQUFZLGNBQXVCLEVBQUUsV0FBb0I7UUFDdEQsSUFBSSxDQUFDLGNBQWMsR0FBRyxjQUFjLENBQUM7UUFDckMsSUFBSSxDQUFDLFdBQVcsR0FBRyxXQUFXLGFBQVgsV0FBVyxjQUFYLFdBQVcsR0FBSSxNQUFNLENBQUM7SUFDNUMsQ0FBQztJQUVNLG9CQUFJLEdBQVg7UUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLGlFQUFtQixDQUFDLEtBQUssRUFBRSx3REFBUyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsT0FBTyxHQUFHLHNFQUF3QixDQUFDLEtBQUssRUFBRSx3REFBUyxDQUFDLEtBQUssQ0FBQyxjQUFjLENBQUMsQ0FBQztRQUMvRSxJQUFJLENBQUMsTUFBTSxHQUFHLHNFQUF3QixDQUFDLEtBQUssRUFBRSxDQUFDLHdEQUFTLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7UUFDN0UsSUFBSSxDQUFDLElBQUksR0FBRyxzRUFBd0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQyx3REFBUyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxNQUFNLEdBQUcsc0VBQXdCLENBQUMsS0FBSyxFQUFFLENBQUMsd0RBQVMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUU3RSxJQUFJLENBQUMsdUJBQXVCLEVBQUU7SUFDbEMsQ0FBQztJQUVTLHVDQUF1QixHQUFqQztRQUNJLElBQUksU0FBUyxHQUFHLElBQUksd0RBQVMsRUFBRSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNqRCxJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7UUFFakQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNwQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEMsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3JCLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1NBQ3ZEO1FBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBRXJDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztJQUN0QixDQUFDO0lBRVMsMEJBQVUsR0FBcEI7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLG1EQUFJLEVBQUUsQ0FBQztRQUV0QixRQUFRLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDdEIsS0FBSyx3REFBUyxDQUFDLEtBQUssQ0FBQyxJQUFJO2dCQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ3hDLE1BQU07WUFDVixLQUFLLHdEQUFTLENBQUMsS0FBSyxDQUFDLGdCQUFnQjtnQkFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7Z0JBQ3BELE1BQU07WUFDVjtnQkFDSSxPQUFPLENBQUMsS0FBSyxDQUFDLHVCQUF1QixDQUFDO1NBQzdDO1FBRUQsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXRDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRVMsbUNBQW1CLEdBQTdCO1FBQ0ksSUFBSSxRQUFRLEdBQUcsc0VBQXdCLENBQUMsS0FBSyxFQUFFLENBQUMsd0RBQVMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO1FBQ25GLFFBQVEsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDO1FBRTlCLE9BQU8sUUFBUSxDQUFDO0lBQ3BCLENBQUM7SUFFUyw4QkFBYyxHQUF4QjtRQUFBLGlCQUlDO1FBSEcsZ0RBQUUsQ0FBQyxXQUFJLHdEQUFTLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0RBQUUsQ0FBQyxXQUFJLHdEQUFTLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFFLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsY0FBTSxZQUFJLENBQUMsVUFBVSxFQUFFLEVBQWpCLENBQWlCLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUN4SixnREFBRSxDQUFDLFdBQUksd0RBQVMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnREFBRSxDQUFDLFdBQUksd0RBQVMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUUsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxjQUFNLFlBQUksQ0FBQyxVQUFVLENBQUMsd0RBQVMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsRUFBakQsQ0FBaUQsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQ3hMLGdEQUFFLENBQUMsV0FBSSx3REFBUyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnREFBRSxDQUFDLFdBQUksd0RBQVMsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFFLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsVUFBQyxHQUFHLElBQUssWUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBcEIsQ0FBb0IsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ2hLLENBQUM7SUFFUyw0QkFBWSxHQUF0QjtRQUFBLGlCQUlDO1FBSEcsZ0RBQUUsQ0FBQyxXQUFJLHdEQUFTLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0RBQUUsQ0FBQyxXQUFJLHdEQUFTLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFFLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsY0FBTSxZQUFJLENBQUMsVUFBVSxFQUFFLEVBQWpCLENBQWlCLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUMzSixnREFBRSxDQUFDLFdBQUksd0RBQVMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnREFBRSxDQUFDLFdBQUksd0RBQVMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUUsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLE9BQU8sRUFBRSxjQUFNLFlBQUksQ0FBQyxVQUFVLENBQUMsd0RBQVMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsRUFBakQsQ0FBaUQsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzNMLGdEQUFFLENBQUMsV0FBSSx3REFBUyxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnREFBRSxDQUFDLFdBQUksd0RBQVMsQ0FBQyxLQUFLLENBQUMsZUFBZSxDQUFFLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLEVBQUUsVUFBQyxHQUFHLElBQUssWUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsRUFBcEIsQ0FBb0IsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0lBQ25LLENBQUM7SUFFUywwQkFBVSxHQUFwQixVQUFxQixJQUFZO1FBQzdCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVTLDBCQUFVLEdBQXBCLFVBQXFCLENBQVM7UUFDMUIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBRW5CLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLFlBQVksaUJBQWlCLENBQUMsRUFBRTtZQUMxQyxPQUFPO1NBQ1Y7UUFFRCxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFO1lBQ3ZCLE9BQU87U0FDVjtRQUVELElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ3BELENBQUM7SUFFUywwQkFBVSxHQUFwQixVQUFxQixDQUFTO1FBQzFCLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDO1FBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBRXBCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztRQUNwQixnREFBRSxDQUFDLFdBQUksd0RBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBQ0wsWUFBQztBQUFELENBQUM7QUFFRCxpRUFBZSxLQUFLLEVBQUM7Ozs7Ozs7VUNqSHJCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7QUNBMEM7QUFDUjtBQUNOO0FBRTVCLElBQUksU0FBUyxHQUFHLElBQUksd0RBQVMsRUFBRSxDQUFDO0FBQ2hDLFNBQVMsQ0FBQyxLQUFLLEVBQUU7S0FDWixJQUFJLENBQUM7SUFDRixJQUFJLFNBQVMsQ0FBQyxjQUFjLEVBQUU7UUFDMUIsSUFBSSxLQUFLLEdBQUcsSUFBSSxvREFBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzVCLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztLQUNoQjtBQUNMLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FkLWJsb2NrZXItZGV0ZWN0aW9uLy4vc3JjL3N0eWxlL21haW4uc2NzcyIsIndlYnBhY2s6Ly9hZC1ibG9ja2VyLWRldGVjdGlvbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vYWQtYmxvY2tlci1kZXRlY3Rpb24vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9hZC1ibG9ja2VyLWRldGVjdGlvbi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vYWQtYmxvY2tlci1kZXRlY3Rpb24vLi9zcmMvc3R5bGUvZm9udHMvUm9ib3RvLUJvbGQudHRmIiwid2VicGFjazovL2FkLWJsb2NrZXItZGV0ZWN0aW9uLy4vc3JjL3N0eWxlL2ZvbnRzL1JvYm90by1MaWdodC50dGYiLCJ3ZWJwYWNrOi8vYWQtYmxvY2tlci1kZXRlY3Rpb24vLi9zcmMvc3R5bGUvZm9udHMvUm9ib3RvLVJlZ3VsYXIudHRmIiwid2VicGFjazovL2FkLWJsb2NrZXItZGV0ZWN0aW9uLy4vc3JjL3N0eWxlL21haW4uc2Nzcz9hMjIxIiwid2VicGFjazovL2FkLWJsb2NrZXItZGV0ZWN0aW9uLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2FkLWJsb2NrZXItZGV0ZWN0aW9uLy4vc3JjL3NjcmlwdC9jb21wb25lbnQvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYWQtYmxvY2tlci1kZXRlY3Rpb24vLi9zcmMvc2NyaXB0L2NvbnN0YW50cy9pbmRleC50cyIsIndlYnBhY2s6Ly9hZC1ibG9ja2VyLWRldGVjdGlvbi8uL3NyYy9zY3JpcHQvZGV0ZWN0aW9uL2luZGV4LnRzIiwid2VicGFjazovL2FkLWJsb2NrZXItZGV0ZWN0aW9uLy4vc3JjL3NjcmlwdC9oZWxwZXJzL0RPTS50cyIsIndlYnBhY2s6Ly9hZC1ibG9ja2VyLWRldGVjdGlvbi8uL3NyYy9zY3JpcHQvcGFnZS9pbmRleC50cyIsIndlYnBhY2s6Ly9hZC1ibG9ja2VyLWRldGVjdGlvbi8uL3NyYy9zY3JpcHQvcG9wdXAvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYWQtYmxvY2tlci1kZXRlY3Rpb24vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYWQtYmxvY2tlci1kZXRlY3Rpb24vd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYWQtYmxvY2tlci1kZXRlY3Rpb24vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2FkLWJsb2NrZXItZGV0ZWN0aW9uL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYWQtYmxvY2tlci1kZXRlY3Rpb24vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9hZC1ibG9ja2VyLWRldGVjdGlvbi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2FkLWJsb2NrZXItZGV0ZWN0aW9uL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2FkLWJsb2NrZXItZGV0ZWN0aW9uL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9hZC1ibG9ja2VyLWRldGVjdGlvbi8uL3NyYy9zY3JpcHQvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fIGZyb20gXCIuL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZlwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fIGZyb20gXCIuL2ZvbnRzL1JvYm90by1Cb2xkLnR0ZlwiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fIGZyb20gXCIuL2ZvbnRzL1JvYm90by1MaWdodC50dGZcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzJfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8yX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXG4gIHNyYzogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyArIFwiKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxuICBmb250LXdlaWdodDogbGlnaHRlcjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuI2FkYmxvY2stbW9kYWwge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTtcXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDAsIDAsIDApO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG4jYWRibG9jay1tb2RhbCAuY29udGVudCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gIHdpZHRoOiA1MCU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBjb2xvcjogIzBEMEMwQztcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFxcXCJzYW5zLXNlcmlmXFxcIjtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBtYXgtaGVpZ2h0OiA3MHZoO1xcbn1cXG4jYWRibG9jay1tb2RhbCAuY29udGVudCAuaGVhZGVyLCAjYWRibG9jay1tb2RhbCAuY29udGVudCAuZm9vdGVyIHtcXG4gIGhlaWdodDogNjBweDtcXG59XFxuI2FkYmxvY2stbW9kYWwgLmNvbnRlbnQgLmJvZHkge1xcbiAgaGVpZ2h0OiAzNTBweDtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgcGFkZGluZzogMjBweCA0MHB4O1xcbn1cXG4jYWRibG9jay1tb2RhbCAuY29udGVudCAuYm9keSAuaWNvbiB7XFxuICB3aWR0aDogOTZweDtcXG4gIGhlaWdodDogOTZweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWFyZ2luOiAyMHB4IGF1dG87XFxufVxcbiNhZGJsb2NrLW1vZGFsIC5jb250ZW50IC5ib2R5IC50aXRsZSB7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcbiNhZGJsb2NrLW1vZGFsIC5jb250ZW50IC5ib2R5IC5zdWJ0aXRsZSB7XFxuICBwYWRkaW5nOiA1cHggMjBweDtcXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbn1cXG4jYWRibG9jay1tb2RhbCAuY29udGVudCAuYm9keSAuYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XFxufVxcbiNhZGJsb2NrLW1vZGFsIC5jb250ZW50IC5ib2R5IC5idXR0b25zIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiAjYmRjM2M3O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbjogMCAxMHB4O1xcbiAgZmxleDogMTtcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gIGNvbG9yOiAjMmMzZTUwO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4jYWRibG9jay1tb2RhbCAuY29udGVudCAuYm9keSAuYnV0dG9ucyBidXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICNlY2YwZjE7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbiAgLW1vei1ib3gtc2hhZG93OiAwIDAgNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbn1cXG4jYWRibG9jay1tb2RhbCAuY29udGVudCAuY2xvc2UtYnV0dG9uIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHJpZ2h0OiAtMTJweDtcXG4gIHRvcDogLTEycHg7XFxuICB3aWR0aDogMjRweDtcXG4gIGhlaWdodDogMjRweDtcXG4gIGJhY2tncm91bmQ6ICNGNUY1RjU7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6ICMxMTExMTE7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMTExMTExO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcbiNhZGJsb2NrLW1vZGFsIC5jb250ZW50IC5jbG9zZS1idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYmFja2dyb3VuZDogI0RDRENEQztcXG59XFxuI2FkYmxvY2stbW9kYWwgLmNvbnRlbnQgZm9vdGVyLmZvb3RlciB7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAwLjdyZW07XFxuICBjb2xvcjogIzdmOGM4ZDtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLmJhY2stYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6ICNiZGMzYzc7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luOiAwIDEwcHg7XFxuICBmbGV4OiAxO1xcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgY29sb3I6ICMyYzNlNTA7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcbi5iYWNrLWJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogI2VjZjBmMTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDVweCAwIHJnYmEoMCwgMCwgMCwgMC43NSk7XFxuICAtbW96LWJveC1zaGFkb3c6IDAgMCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbiAgYm94LXNoYWRvdzogMCAwIDVweCAwIHJnYmEoMCwgMCwgMCwgMC43NSk7XFxufVxcblxcbiN0dXJuLW9mZi1hZGJsb2NrZXIgLndoaXRlbGlzdC1hZGJsb2NrIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAyNTBweDtcXG59XFxuI3R1cm4tb2ZmLWFkYmxvY2tlciAud2hpdGVsaXN0LWFkYmxvY2stZ2lmIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA0MDBweDtcXG59XFxuI3R1cm4tb2ZmLWFkYmxvY2tlciAud2hpdGVsaXN0LWFkYmxvY2stdGV4dCB7XFxuICBmb250LWZhbWlseTogUm9ib3RvLCBcXFwic2Fucy1zZXJpZlxcXCI7XFxuICBmb250LXNpemU6IDE3cHg7XFxuICBmb250LXdlaWdodDogNDAwO1xcbn1cXG4jdHVybi1vZmYtYWRibG9ja2VyIC50ZXh0LWJvbGRlZCB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlL19mb250cy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvbWFpbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvY29tcG9uZW50cy9tb2RhbC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvY29tcG9uZW50cy9idXR0b25zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9wYWdlcy90dXJuLW9mZi1hZGJsb2NrZXIuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsK0RBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7QURFQTtFQUNFLHFCQUFBO0VBQ0EsK0RBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQUY7QURHQTtFQUNFLHFCQUFBO0VBQ0EsK0RBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FDREY7QUNqQkE7RUFDRSxlQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSw4QkFBQTtFQUNBLG9DQUFBO0FEbUJGO0FDakJFO0VBQ0UseUJBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtBRG1CSjtBQ2pCSTtFQUNFLFlBQUE7QURtQk47QUNoQkk7RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FEa0JOO0FDaEJNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QURrQlI7QUNmTTtFQUNFLGtCQUFBO0FEaUJSO0FDZE07RUFDRSxpQkFBQTtFQUNBLG9CQUFBO0FEZ0JSO0FDYk07RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7QURlUjtBQ2JRO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FEZVY7QUNiVTtFQUNFLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaURBQUE7RUFDQSw4Q0FBQTtFQUNBLHlDQUFBO0FEZVo7QUNUSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBRFdOO0FDVE07RUFDRSxlQUFBO0VBQ0EsbUJBQUE7QURXUjtBQ1BJO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QURTTjs7QUVsSEE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUZxSEY7QUVuSEU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlEQUFBO0VBQ0EsOENBQUE7RUFDQSx5Q0FBQTtBRnFISjs7QUdwSUU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBSHVJSjtBR3BJRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0FIc0lKO0FHbklFO0VBQ0UsaUNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUhxSUo7QUdsSUU7RUFDRSxpQkFBQTtFQUNBLGVBQUE7QUhvSUpcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICBzcmM6IHVybChmb250cy9Sb2JvdG8tUmVndWxhci50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgc3JjOiB1cmwoZm9udHMvUm9ib3RvLUJvbGQudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1JvYm90byc7XFxuICBzcmM6IHVybChmb250cy9Sb2JvdG8tTGlnaHQudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICBmb250LXdlaWdodDogbGlnaHRlcjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuXCIsXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXG4gIHNyYzogdXJsKGZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCI7XFxuICBzcmM6IHVybChmb250cy9Sb2JvdG8tQm9sZC50dGYpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIjtcXG4gIHNyYzogdXJsKGZvbnRzL1JvYm90by1MaWdodC50dGYpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG4jYWRibG9jay1tb2RhbCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMCwgMCwgMCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcbiNhZGJsb2NrLW1vZGFsIC5jb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XFxuICBtYXJnaW46IGF1dG87XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgd2lkdGg6IDUwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGNvbG9yOiAjMEQwQzBDO1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXFxcInNhbnMtc2VyaWZcXFwiO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIG1heC1oZWlnaHQ6IDcwdmg7XFxufVxcbiNhZGJsb2NrLW1vZGFsIC5jb250ZW50IC5oZWFkZXIsICNhZGJsb2NrLW1vZGFsIC5jb250ZW50IC5mb290ZXIge1xcbiAgaGVpZ2h0OiA2MHB4O1xcbn1cXG4jYWRibG9jay1tb2RhbCAuY29udGVudCAuYm9keSB7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBwYWRkaW5nOiAyMHB4IDQwcHg7XFxufVxcbiNhZGJsb2NrLW1vZGFsIC5jb250ZW50IC5ib2R5IC5pY29uIHtcXG4gIHdpZHRoOiA5NnB4O1xcbiAgaGVpZ2h0OiA5NnB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDIwcHggYXV0bztcXG59XFxuI2FkYmxvY2stbW9kYWwgLmNvbnRlbnQgLmJvZHkgLnRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI2FkYmxvY2stbW9kYWwgLmNvbnRlbnQgLmJvZHkgLnN1YnRpdGxlIHtcXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxufVxcbiNhZGJsb2NrLW1vZGFsIC5jb250ZW50IC5ib2R5IC5idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuI2FkYmxvY2stbW9kYWwgLmNvbnRlbnQgLmJvZHkgLmJ1dHRvbnMgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6ICNiZGMzYzc7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luOiAwIDEwcHg7XFxuICBmbGV4OiAxO1xcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgY29sb3I6ICMyYzNlNTA7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcbiNhZGJsb2NrLW1vZGFsIC5jb250ZW50IC5ib2R5IC5idXR0b25zIGJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogI2VjZjBmMTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDVweCAwIHJnYmEoMCwgMCwgMCwgMC43NSk7XFxuICAtbW96LWJveC1zaGFkb3c6IDAgMCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbiAgYm94LXNoYWRvdzogMCAwIDVweCAwIHJnYmEoMCwgMCwgMCwgMC43NSk7XFxufVxcbiNhZGJsb2NrLW1vZGFsIC5jb250ZW50IC5jbG9zZS1idXR0b24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IC0xMnB4O1xcbiAgdG9wOiAtMTJweDtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgYmFja2dyb3VuZDogI0Y1RjVGNTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogIzExMTExMTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxMTExMTE7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuI2FkYmxvY2stbW9kYWwgLmNvbnRlbnQgLmNsb3NlLWJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjRENEQ0RDO1xcbn1cXG4jYWRibG9jay1tb2RhbCAuY29udGVudCBmb290ZXIuZm9vdGVyIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDAuN3JlbTtcXG4gIGNvbG9yOiAjN2Y4YzhkO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4uYmFjay1idXR0b24ge1xcbiAgYmFja2dyb3VuZDogI2JkYzNjNztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW46IDAgMTBweDtcXG4gIGZsZXg6IDE7XFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICBjb2xvcjogIzJjM2U1MDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuLmJhY2stYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjZWNmMGYxO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG4gIC1tb3otYm94LXNoYWRvdzogMCAwIDVweCAwIHJnYmEoMCwgMCwgMCwgMC43NSk7XFxuICBib3gtc2hhZG93OiAwIDAgNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG59XFxuXFxuI3R1cm4tb2ZmLWFkYmxvY2tlciAud2hpdGVsaXN0LWFkYmxvY2sge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDI1MHB4O1xcbn1cXG4jdHVybi1vZmYtYWRibG9ja2VyIC53aGl0ZWxpc3QtYWRibG9jay1naWYge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbn1cXG4jdHVybi1vZmYtYWRibG9ja2VyIC53aGl0ZWxpc3QtYWRibG9jay10ZXh0IHtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFxcXCJzYW5zLXNlcmlmXFxcIjtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbiN0dXJuLW9mZi1hZGJsb2NrZXIgLnRleHQtYm9sZGVkIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cIixcIiNhZGJsb2NrLW1vZGFsIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDE7XFxuICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XFxuXFxuICAuY29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBjb2xvcjogIzBEMEMwQztcXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgJ3NhbnMtc2VyaWYnO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDcwdmg7XFxuXFxuICAgIC5oZWFkZXIsIC5mb290ZXIge1xcbiAgICAgIGhlaWdodDogNjBweDtcXG4gICAgfVxcblxcbiAgICAuYm9keSB7XFxuICAgICAgaGVpZ2h0OiAzNTBweDtcXG4gICAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XFxuXFxuICAgICAgLmljb24ge1xcbiAgICAgICAgd2lkdGg6IDk2cHg7XFxuICAgICAgICBoZWlnaHQ6IDk2cHg7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xcbiAgICAgIH1cXG5cXG4gICAgICAudGl0bGUge1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIH1cXG5cXG4gICAgICAuc3VidGl0bGUge1xcbiAgICAgICAgcGFkZGluZzogNXB4IDIwcHg7XFxuICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcXG4gICAgICB9XFxuXFxuICAgICAgLmJ1dHRvbnMge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcblxcbiAgICAgICAgYnV0dG9uIHtcXG4gICAgICAgICAgYmFja2dyb3VuZDogI2JkYzNjNztcXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xcbiAgICAgICAgICBmbGV4OiAxO1xcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICAgICAgICAgIGNvbG9yOiAjMmMzZTUwO1xcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XFxuXFxuICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICBjb2xvcjogI2VjZjBmMTtcXG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA1cHggMCByZ2JhKDAsMCwwLDAuNzUpO1xcbiAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMCAwIDVweCAwIHJnYmEoMCwwLDAsMC43NSk7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDVweCAwIHJnYmEoMCwwLDAsMC43NSk7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgLmNsb3NlLWJ1dHRvbiB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHJpZ2h0OiAtMTJweDtcXG4gICAgICB0b3A6IC0xMnB4O1xcbiAgICAgIHdpZHRoOiAyNHB4O1xcbiAgICAgIGhlaWdodDogMjRweDtcXG4gICAgICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgY29sb3I6ICMxMTExMTE7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzExMTExMTtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuXFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjRENEQ0RDO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICBmb290ZXIuZm9vdGVyIHtcXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBmb250LXNpemU6IDAuN3JlbTtcXG4gICAgICBjb2xvcjogIzdmOGM4ZDtcXG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXCIuYmFjay1idXR0b24ge1xcbiAgYmFja2dyb3VuZDogI2JkYzNjNztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW46IDAgMTBweDtcXG4gIGZsZXg6IDE7XFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICBjb2xvcjogIzJjM2U1MDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG5cXG4gICY6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiAjZWNmMGYxO1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA1cHggMCByZ2JhKDAsMCwwLDAuNzUpO1xcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMCA1cHggMCByZ2JhKDAsMCwwLDAuNzUpO1xcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IDAgcmdiYSgwLDAsMCwwLjc1KTtcXG4gIH1cXG59XFxuXCIsXCIjdHVybi1vZmYtYWRibG9ja2VyIHtcXG4gIC53aGl0ZWxpc3QtYWRibG9jayB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgfVxcblxcbiAgLndoaXRlbGlzdC1hZGJsb2NrLWdpZiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgfVxcblxcbiAgLndoaXRlbGlzdC1hZGJsb2NrLXRleHQge1xcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCAnc2Fucy1zZXJpZic7XFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIH1cXG5cXG4gIC50ZXh0LWJvbGRlZCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgJiYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXSk7IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH0gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuXG5cbiAgdXJsID0gdXJsICYmIHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmw7XG5cbiAgaWYgKHR5cGVvZiB1cmwgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuXG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9IC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcblxuXG4gIGlmICgvW1wiJygpIFxcdFxcbl0vLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsImV4cG9ydCBkZWZhdWx0IF9fd2VicGFja19wdWJsaWNfcGF0aF9fICsgXCJzdGF0aWMvZm9udHMvUm9ib3RvLUJvbGQudHRmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9Sb2JvdG8tTGlnaHQudHRmXCI7IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9Sb2JvdG8tUmVndWxhci50dGZcIjsiLCJpbXBvcnQgYXBpIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICAgICAgICBpbXBvcnQgY29udGVudCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLnNjc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImNsYXNzIENvbXBvbmVudCB7XG5cbiAgICBwdWJsaWMgcmVuZGVySGVhZGVyKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgYFxuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXJGb290ZXIoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgPGhyLz5cbiAgICAgICAgPGZvb3RlciBjbGFzcz1cImZvb3RlclwiPlxuICAgICAgICAgICAgJmNvcHk7IEFkQmxvY2tlclxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgICAgYDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXBvbmVudDtcbiIsImNvbnN0IGNvbnN0YW50cyA9IHtcbiAgICBwb3B1cDoge1xuICAgICAgICBpZDogXCJhZGJsb2NrLW1vZGFsXCIsXG4gICAgICAgIGhlYWRlckNsYXNzOiBcImhlYWRlclwiLFxuICAgICAgICBib2R5Q2xhc3M6IFwiYm9keVwiLFxuICAgICAgICBmb290ZXJDbGFzczogXCJmb290ZXJcIixcbiAgICAgICAgY29udGVudENsYXNzZXM6IFtcImNvbnRlbnRcIl0sXG4gICAgICAgIGNsb3NlQnV0dG9uQ2xhc3M6IFwiY2xvc2UtYnV0dG9uXCIsXG4gICAgICAgIGJhY2tCdXR0b25DbGFzczogXCJiYWNrLWJ1dHRvblwiXG4gICAgfSxcbiAgICBwYWdlczoge1xuICAgICAgICBob21lOiAnaG9tZScsXG4gICAgICAgIHR1cm5PZmZBZEJsb2NrZXI6ICd0dXJuLW9mZi1hZGJsb2NrZXInXG4gICAgfVxufTtcblxuT2JqZWN0LmZyZWV6ZShjb25zdGFudHMpO1xuXG5leHBvcnQgZGVmYXVsdCBjb25zdGFudHM7XG4iLCJjbGFzcyBEZXRlY3Rpb24ge1xuICAgIGFkQmxvY2tFbmFibGVkOiBib29sZWFuXG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5hZEJsb2NrRW5hYmxlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGFzeW5jIGNoZWNrKCk6IFByb21pc2U8dm9pZD4ge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIG5ldyBzY3JpcHQgZWxlbWVudFxuICAgICAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgICAgICBzY3JpcHQuc3JjID0gXCIvL3BhZ2VhZDIuZ29vZ2xlc3luZGljYXRpb24uY29tL3BhZ2VhZC9qcy9hZHNieWdvb2dsZS5qc1wiO1xuXG4gICAgICAgICAgICAvLyBTZXQgdXAgYW4gb25lcnJvciBldmVudCBoYW5kbGVyXG4gICAgICAgICAgICBzY3JpcHQub25lcnJvciA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkQmxvY2tFbmFibGVkID0gdHJ1ZTsgLy8gU2V0IHRoZSBmbGFnIHRvIHRydWUgaWYgdGhlIHNjcmlwdCBmYWlscyB0byBsb2FkXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0FkYmxvY2tlciBkZXRlY3RlZCcpO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8vIFNldCB1cCBhbiBvbmxvYWQgZXZlbnQgaGFuZGxlclxuICAgICAgICAgICAgc2NyaXB0Lm9ubG9hZCA9ICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkQmxvY2tFbmFibGVkID0gZmFsc2U7IC8vIFNldCB0aGUgZmxhZyB0byBmYWxzZSBpZiB0aGUgc2NyaXB0IGxvYWRzIHN1Y2Nlc3NmdWxseVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdObyBhZGJsb2NrZXIgZGV0ZWN0ZWQnKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAvLyBBcHBlbmQgdGhlIHNjcmlwdCB0byB0aGUgZG9jdW1lbnRcbiAgICAgICAgICAgIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IERldGVjdGlvbjtcbiIsImV4cG9ydCBjb25zdCBjcmVhdGVFbGVtZW50ID0gKGVsZW1lbnQ6c3RyaW5nKSA6IEVsZW1lbnQgPT4gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbmV4cG9ydCBjb25zdCBjcmVhdGVFbGVtZW50V2l0aElkID0gKGVsZW1lbnQ6c3RyaW5nLCBpZDpzdHJpbmcpIDogRWxlbWVudCA9PiB7XG4gICAgbGV0IGVsID0gY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgICBlbC5pZCA9IGlkO1xuXG4gICAgcmV0dXJuIGVsO1xufTtcbmV4cG9ydCBjb25zdCBjcmVhdGVFbGVtZW50V2l0aENsYXNzZXMgPSAoZWxlbWVudDpzdHJpbmcsIGNsYXNzZXM6QXJyYXk8c3RyaW5nPikgOiBFbGVtZW50ID0+IHtcbiAgICBsZXQgZWwgPSBjcmVhdGVFbGVtZW50KGVsZW1lbnQpO1xuICAgIGNsYXNzZXMuZm9yRWFjaCgoY2xhc3NOYW1lKSA9PiB7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcbiAgICB9KVxuXG4gICAgcmV0dXJuIGVsO1xufTtcbmV4cG9ydCBjb25zdCBRUyA9IChzZWxlY3RvcjpzdHJpbmcpIDogRWxlbWVudCA9PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKTtcbmV4cG9ydCBjb25zdCBRU2FsbCA9IChzZWxlY3RvcjpzdHJpbmcpIDogTm9kZUxpc3QgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4iLCJjbGFzcyBQYWdlIHtcblxuICAgIHB1YmxpYyByZW5kZXJIb21lKCk6IHN0cmluZyB7XG4gICAgICAgIHJldHVybiBgXG4gICAgICAgIDxpbWcgc3JjPScuL3N0YXRpYy9pY29ucy9hZC1ibG9jay5zdmcnIGNsYXNzPSdpY29uJyBhbHQ9J0FkQmxvY2sgaWNvbicgLz5cbiAgICAgICAgPGgxIGNsYXNzPVwidGl0bGVcIj5Zb3UncmUgdXNpbmcgYW4gQWRibG9ja2VyLjwvaDE+XG4gICAgICAgIDxwIGNsYXNzPVwic3VidGl0bGVcIj5BZHMgYXJlIG5lY2Vzc2FyeSBmb3IgdGhlIHNtb290aCBvcGVyYXRpb24gb2Ygb3VyIHNpdGUuIElmIHlvdSB3YW50IHRvIGhlbHAsIHJlZ2lzdGVyIG9yIHR1cm4gb2ZmIHlvdXIgQWRibG9ja2VyLjwvcD5cbiAgICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cbiAgICAgICAgICAgIDxidXR0b24+UmVnaXN0ZXI8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gaWQ9XCJ0dXJuLW9mZi1hZGJsb2NrZXJcIj5UdXJuIG9mZiBBZGJsb2NrZXI8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlclR1cm5PZmZBZEJsb2NrZXIoKTogc3RyaW5nIHtcblxuICAgICAgICByZXR1cm4gYFxuICAgICAgICAgICAgPGRpdiBpZD1cInBhZ2UtdHVybi1vZmYtYWRibG9ja2VyXCI+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPScuL3N0YXRpYy9pY29ucy9hZC1ibG9jay5zdmcnIGNsYXNzPSdpY29uJyBhbHQ9J0FkQmxvY2sgaWNvbicgLz5cbiAgICAgICAgICAgICAgICAgICAgPGgzPkRpc2FibGUgQWRibG9ja2VyczwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDxoNT5IT1cgVE8gVFVSTiBPRkYgQURCTE9DSyBQTFVHSU4gPzwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDxwPk5vYm9keSBsaWtlcyBhZHMgYnV0IHRoZXkgYXJlIHRoZSBuZWNlc3NhcnkgZXZpbCBvZiBhbG1vc3QgZXZlcnkgZnJlZSBzZXJ2aWNlLlxuICAgIEJlIGZhaXIgYW5kIGNvbnNpZGVyIHBhdXNpbmcgeW91ciBhZCBibG9ja2VyIHRvIHN1cHBvcnQgdGhlIGNyZWF0b3JzIHdobyB3b3JrIGhhcmQgdG8gY3JlYXRlIHZhbHVlLjwvcD5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxoNT5GSVJTVCBERVRFUk1JTkUgV0hJQ0ggQURCTE9DS0VSIFlPVSBBUkUgVVNJTkc6PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPHA+SW4geW91ciBicm93c2VyIHRvb2xiYXIgbG9vayBmb3Igb25lIG9mIHRoZSBmb2xsb3dpbmcgaWNvbnMgdG8gZGV0ZXJtaW5lIHdoaWNoIGFkYmxvY2tlciB5b3UgYXJlIHJ1bm5pbmcuPC9wPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwid2hpdGVsaXN0LWFkYmxvY2tcIiBzcmM9XCIuL3N0YXRpYy9pbWFnZXMvd2hpdGVsaXN0LWJoLWFkYmxvY2stb3B0aW9ucy5qcGVnXCIgYWx0PVwiVHVybiBvZmYgYWRibG9ja2VyXCIgLz5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxoNT5GT1IgQURCTE9DSyBQTFVTOjwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJ3aGl0ZWxpc3QtYWRibG9jay1naWZcIiBzcmM9XCIuL3N0YXRpYy9pbWFnZXMvd2hpdGVsaXN0LWJoLWFkYmxvY2twbHVzLmdpZlwiIGFsdD1cIkFkYmxvY2sgcGx1c1wiIC8+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwid2hpdGVsaXN0LWFkYmxvY2stdGV4dFwiPkNsaWNrIHRoZSBhZGJsb2NrIHBsdXMgaWNvbiA8YnIvPlxuICAgICAgICAgICAgICAgICAgICBDbGljayA8c3BhbiBjbGFzcz1cInRleHQtYm9sZGVkXCI+RW5hYmxlZCBPbiB0aGlzIFNpdGU8L3NwYW4+IHRvIGNoYW5nZSBpdCB0byA8c3BhbiBjbGFzcz1cInRleHQtYm9sZGVkXCI+RGlzYWJsZWQgb24gdGhpcyBzaXRlPC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPHNlY3Rpb24+XG4gICAgICAgICAgICAgICAgICAgIDxoNT5GT1IgQURCTE9DSzo8L2g1PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwid2hpdGVsaXN0LWFkYmxvY2stZ2lmXCIgc3JjPVwiLi9zdGF0aWMvaW1hZ2VzL3doaXRlbGlzdC1iaC1hZGJsb2NrLmdpZlwiIGFsdD1cIkFkYmxvY2tcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIndoaXRlbGlzdC1hZGJsb2NrLXRleHRcIj5DbGljayB0aGUgYWRibG9jayBwbHVzIGljb24gPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgQ2xpY2sgPHNwYW4gY2xhc3M9XCJ0ZXh0LWJvbGRlZFwiPkRvbuKAmXQgcnVuIG9uIHBhZ2VzIG9uIHRoaXMgZG9tYWluPC9zcGFuPjwvcD5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJhY2stYnV0dG9uXCIgZGF0YS1zcmM9XCJob21lXCI+QmFjazwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIGBcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2U7XG4iLCJpbXBvcnQge2NyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NlcywgY3JlYXRlRWxlbWVudFdpdGhJZCwgUVN9IGZyb20gXCIuLi9oZWxwZXJzL0RPTVwiO1xuaW1wb3J0IGNvbnN0YW50cyBmcm9tIFwiLi4vY29uc3RhbnRzL2luZGV4XCI7XG5pbXBvcnQgUGFnZSBmcm9tIFwiLi4vcGFnZS9pbmRleFwiO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi4vY29tcG9uZW50L2luZGV4XCI7XG5cbmNsYXNzIFBvcHVwIHtcbiAgICBwb3B1cDogRWxlbWVudFxuICAgIGhlYWRlcjogRWxlbWVudFxuICAgIGJvZHk6IEVsZW1lbnRcbiAgICBmb290ZXI6IEVsZW1lbnRcbiAgICBjb250ZW50OiBFbGVtZW50XG4gICAgaGFzQ2xvc2VCdXR0b246IGJvb2xlYW5cbiAgICBjdXJyZW50UGFnZTogc3RyaW5nXG5cbiAgICBjb25zdHJ1Y3RvcihoYXNDbG9zZUJ1dHRvbjogYm9vbGVhbiwgY3VycmVudFBhZ2U/OiBzdHJpbmcpIHtcbiAgICAgICB0aGlzLmhhc0Nsb3NlQnV0dG9uID0gaGFzQ2xvc2VCdXR0b247XG4gICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IGN1cnJlbnRQYWdlID8/ICdob21lJztcbiAgICB9XG5cbiAgICBwdWJsaWMgaW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5wb3B1cCA9IGNyZWF0ZUVsZW1lbnRXaXRoSWQoXCJkaXZcIiwgY29uc3RhbnRzLnBvcHVwLmlkKTtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc2VzKFwiZGl2XCIsIGNvbnN0YW50cy5wb3B1cC5jb250ZW50Q2xhc3Nlcyk7XG4gICAgICAgIHRoaXMuaGVhZGVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc2VzKFwiZGl2XCIsIFtjb25zdGFudHMucG9wdXAuaGVhZGVyQ2xhc3NdKTtcbiAgICAgICAgdGhpcy5ib2R5ID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc2VzKFwiZGl2XCIsIFtjb25zdGFudHMucG9wdXAuYm9keUNsYXNzXSk7XG4gICAgICAgIHRoaXMuZm9vdGVyID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc2VzKFwiZGl2XCIsIFtjb25zdGFudHMucG9wdXAuZm9vdGVyQ2xhc3NdKTtcblxuICAgICAgICB0aGlzLnByZXBhcmVDb250ZW50U3RydWN0dXJlKClcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcHJlcGFyZUNvbnRlbnRTdHJ1Y3R1cmUoKTogdm9pZCB7XG4gICAgICAgIGxldCBjb21wb25lbnQgPSBuZXcgQ29tcG9uZW50KCk7XG4gICAgICAgIHRoaXMuaGVhZGVyLmlubmVySFRNTCA9IGNvbXBvbmVudC5yZW5kZXJIZWFkZXIoKTtcbiAgICAgICAgdGhpcy5mb290ZXIuaW5uZXJIVE1MID0gY29tcG9uZW50LnJlbmRlckZvb3RlcigpO1xuXG4gICAgICAgIHRoaXMuY29udGVudC5hcHBlbmRDaGlsZCh0aGlzLmhlYWRlcik7XG4gICAgICAgIHRoaXMuY29udGVudC5hcHBlbmRDaGlsZCh0aGlzLmJvZHkpO1xuICAgICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy5mb290ZXIpO1xuICAgICAgICBpZiAodGhpcy5oYXNDbG9zZUJ1dHRvbikge1xuICAgICAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZENoaWxkKHRoaXMuZ2VuZXJhdGVDbG9zZUJ1dHRvbigpKVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5wb3B1cC5hcHBlbmRDaGlsZCh0aGlzLmNvbnRlbnQpO1xuXG4gICAgICAgIHRoaXMucGFnZVJlbmRlcigpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBwYWdlUmVuZGVyKCk6IHZvaWQge1xuICAgICAgICBsZXQgcGFnZSA9IG5ldyBQYWdlKCk7XG5cbiAgICAgICAgc3dpdGNoICh0aGlzLmN1cnJlbnRQYWdlKSB7XG4gICAgICAgICAgICBjYXNlIGNvbnN0YW50cy5wYWdlcy5ob21lOlxuICAgICAgICAgICAgICAgIHRoaXMuYm9keS5pbm5lckhUTUwgPSBwYWdlLnJlbmRlckhvbWUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgY29uc3RhbnRzLnBhZ2VzLnR1cm5PZmZBZEJsb2NrZXI6XG4gICAgICAgICAgICAgICAgdGhpcy5ib2R5LmlubmVySFRNTCA9IHBhZ2UucmVuZGVyVHVybk9mZkFkQmxvY2tlcigpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiWzQwNF0gUGFnZSBub3QgZm91bmQhXCIpXG4gICAgICAgIH1cblxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHRoaXMucG9wdXApO1xuXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudHMoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZ2VuZXJhdGVDbG9zZUJ1dHRvbigpOiBFbGVtZW50IHtcbiAgICAgICAgbGV0IGNsb3NlQnRuID0gY3JlYXRlRWxlbWVudFdpdGhDbGFzc2VzKFwiZGl2XCIsIFtjb25zdGFudHMucG9wdXAuY2xvc2VCdXR0b25DbGFzc10pO1xuICAgICAgICBjbG9zZUJ0bi5pbm5lckhUTUwgPSBcIiZ0aW1lc1wiO1xuXG4gICAgICAgIHJldHVybiBjbG9zZUJ0bjtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgZGlzcGF0Y2hFdmVudHMoKTogdm9pZCB7XG4gICAgICAgIFFTKGAuJHtjb25zdGFudHMucG9wdXAuY2xvc2VCdXR0b25DbGFzc31gKSA/IFFTKGAuJHtjb25zdGFudHMucG9wdXAuY2xvc2VCdXR0b25DbGFzc31gKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5jbG9zZU1vZGFsKCksIHRydWUpIDogbnVsbDtcbiAgICAgICAgUVMoYCMke2NvbnN0YW50cy5wYWdlcy50dXJuT2ZmQWRCbG9ja2VyfWApID8gUVMoYCMke2NvbnN0YW50cy5wYWdlcy50dXJuT2ZmQWRCbG9ja2VyfWApLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLmNoYW5nZVBhZ2UoY29uc3RhbnRzLnBhZ2VzLnR1cm5PZmZBZEJsb2NrZXIpLCB0cnVlKSA6IG51bGw7XG4gICAgICAgIFFTKGAuJHtjb25zdGFudHMucG9wdXAuYmFja0J1dHRvbkNsYXNzfWApID8gUVMoYC4ke2NvbnN0YW50cy5wb3B1cC5iYWNrQnV0dG9uQ2xhc3N9YCkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHRoaXMucmV0dXJuQmFjayhldnQpLCB0cnVlKSA6IG51bGw7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGRldGFjaEV2ZW50cygpOiB2b2lkIHtcbiAgICAgICAgUVMoYC4ke2NvbnN0YW50cy5wb3B1cC5jbG9zZUJ1dHRvbkNsYXNzfWApID8gUVMoYC4ke2NvbnN0YW50cy5wb3B1cC5jbG9zZUJ1dHRvbkNsYXNzfWApLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLmNsb3NlTW9kYWwoKSwgdHJ1ZSkgOiBudWxsO1xuICAgICAgICBRUyhgIyR7Y29uc3RhbnRzLnBhZ2VzLnR1cm5PZmZBZEJsb2NrZXJ9YCkgPyBRUyhgIyR7Y29uc3RhbnRzLnBhZ2VzLnR1cm5PZmZBZEJsb2NrZXJ9YCkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuY2hhbmdlUGFnZShjb25zdGFudHMucGFnZXMudHVybk9mZkFkQmxvY2tlciksIHRydWUpIDogbnVsbDtcbiAgICAgICAgUVMoYC4ke2NvbnN0YW50cy5wb3B1cC5iYWNrQnV0dG9uQ2xhc3N9YCkgPyBRUyhgLiR7Y29uc3RhbnRzLnBvcHVwLmJhY2tCdXR0b25DbGFzc31gKS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2dCkgPT4gdGhpcy5yZXR1cm5CYWNrKGV2dCksIHRydWUpIDogbnVsbDtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY2hhbmdlUGFnZShwYWdlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5jdXJyZW50UGFnZSA9IHBhZ2U7XG4gICAgICAgIHRoaXMuZGV0YWNoRXZlbnRzKCk7XG4gICAgICAgIHRoaXMucGFnZVJlbmRlcigpO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCByZXR1cm5CYWNrKGU/OiBFdmVudCk6IHZvaWQge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgaWYgKCEoZS50YXJnZXQgaW5zdGFuY2VvZiBIVE1MQnV0dG9uRWxlbWVudCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghZS50YXJnZXQuZGF0YXNldC5zcmMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2hhbmdlUGFnZShlLnRhcmdldC5kYXRhc2V0LnNyYy50b1N0cmluZygpKVxuICAgIH1cblxuICAgIHByb3RlY3RlZCBjbG9zZU1vZGFsKGU/OiBFdmVudCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhcImFhYWFcIilcbiAgICAgICAgdGhpcy5jb250ZW50ID0gbnVsbDtcblxuICAgICAgICB0aGlzLmRldGFjaEV2ZW50cygpO1xuICAgICAgICBRUyhgIyR7Y29uc3RhbnRzLnBvcHVwLmlkfWApLnJlbW92ZSgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9wdXA7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmM7XG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkge1xuXHRcdFx0dmFyIGkgPSBzY3JpcHRzLmxlbmd0aCAtIDE7XG5cdFx0XHR3aGlsZSAoaSA+IC0xICYmICFzY3JpcHRVcmwpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBEZXRlY3Rpb24gZnJvbSBcIi4vZGV0ZWN0aW9uL2luZGV4XCI7XG5pbXBvcnQgUG9wdXAgZnJvbSBcIi4vcG9wdXAvaW5kZXhcIjtcbmltcG9ydCAnLi4vc3R5bGUvbWFpbi5zY3NzJztcblxubGV0IGRldGVjdGlvbiA9IG5ldyBEZXRlY3Rpb24oKTtcbmRldGVjdGlvbi5jaGVjaygpXG4gICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBpZiAoZGV0ZWN0aW9uLmFkQmxvY2tFbmFibGVkKSB7XG4gICAgICAgICAgICBsZXQgcG9wdXAgPSBuZXcgUG9wdXAodHJ1ZSk7XG4gICAgICAgICAgICBwb3B1cC5pbml0KCk7XG4gICAgICAgIH1cbiAgICB9KVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9