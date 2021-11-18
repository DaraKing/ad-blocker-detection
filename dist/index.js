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
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_fonts_Roboto_Regular_ttf__WEBPACK_IMPORTED_MODULE_3__.default);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_fonts_Roboto_Bold_ttf__WEBPACK_IMPORTED_MODULE_4__.default);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_fonts_Roboto_Light_ttf__WEBPACK_IMPORTED_MODULE_5__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: \"Roboto\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") format(\"truetype\");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") format(\"truetype\");\n  font-weight: lighter;\n  font-style: normal;\n}\n#adblock-modal {\n  position: fixed;\n  z-index: 1;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n#adblock-modal .content {\n  background-color: #F5F5F5;\n  margin: auto;\n  border: 1px solid #888;\n  width: 50%;\n  position: relative;\n  color: #0D0C0C;\n  font-family: Roboto, \"sans-serif\";\n  border-radius: 5px;\n  height: 500px;\n  max-height: 70vh;\n}\n#adblock-modal .content .header, #adblock-modal .content .footer {\n  height: 60px;\n}\n#adblock-modal .content .body {\n  height: 350px;\n  overflow: auto;\n  padding: 20px 40px;\n}\n#adblock-modal .content .body .icon {\n  width: 96px;\n  height: 96px;\n  display: block;\n  margin: 20px auto;\n}\n#adblock-modal .content .body .title {\n  text-align: center;\n}\n#adblock-modal .content .body .subtitle {\n  padding: 5px 20px;\n  font-weight: lighter;\n}\n#adblock-modal .content .body .buttons {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  margin-top: 20px;\n  margin-bottom: 30px;\n}\n#adblock-modal .content .body .buttons button {\n  background: #bdc3c7;\n  border: none;\n  outline: none;\n  border-radius: 5px;\n  margin: 0 10px;\n  flex: 1;\n  padding: 10px 15px;\n  color: #2c3e50;\n  font-size: 1rem;\n}\n#adblock-modal .content .body .buttons button:hover {\n  cursor: pointer;\n  color: #ecf0f1;\n  -webkit-box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.75);\n  -moz-box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.75);\n  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.75);\n}\n#adblock-modal .content .close-button {\n  position: absolute;\n  right: -12px;\n  top: -12px;\n  width: 24px;\n  height: 24px;\n  background: #F5F5F5;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #111111;\n  border: 1px solid #111111;\n  font-weight: bold;\n  cursor: default;\n}\n#adblock-modal .content .close-button:hover {\n  cursor: pointer;\n  background: #DCDCDC;\n}\n#adblock-modal .content footer.footer {\n  margin-top: 10px;\n  text-align: center;\n  font-size: 0.7rem;\n  color: #7f8c8d;\n  cursor: default;\n}\n\n.back-button {\n  background: #bdc3c7;\n  border: none;\n  outline: none;\n  border-radius: 5px;\n  margin: 0 10px;\n  flex: 1;\n  padding: 10px 15px;\n  color: #2c3e50;\n  font-size: 1rem;\n}\n.back-button:hover {\n  cursor: pointer;\n  color: #ecf0f1;\n  -webkit-box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.75);\n  -moz-box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.75);\n  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.75);\n}\n\n#turn-off-adblocker .whitelist-adblock {\n  width: 100%;\n  height: 250px;\n}\n#turn-off-adblocker .whitelist-adblock-gif {\n  width: 100%;\n  height: 400px;\n}\n#turn-off-adblocker .whitelist-adblock-text {\n  font-family: Roboto, \"sans-serif\";\n  font-size: 17px;\n  font-weight: 400;\n}\n#turn-off-adblocker .text-bolded {\n  font-weight: bold;\n  font-size: 14px;\n}", "",{"version":3,"sources":["webpack://./src/style/_fonts.scss","webpack://./src/style/main.scss","webpack://./src/style/components/modal.scss","webpack://./src/style/components/buttons.scss","webpack://./src/style/pages/turn-off-adblocker.scss"],"names":[],"mappings":"AAAA;EACE,qBAAA;EACA,+DAAA;EACA,mBAAA;EACA,kBAAA;ACCF;ADEA;EACE,qBAAA;EACA,+DAAA;EACA,iBAAA;EACA,kBAAA;ACAF;ADGA;EACE,qBAAA;EACA,+DAAA;EACA,oBAAA;EACA,kBAAA;ACDF;ACjBA;EACE,eAAA;EACA,UAAA;EACA,kBAAA;EACA,OAAA;EACA,MAAA;EACA,WAAA;EACA,YAAA;EACA,cAAA;EACA,uBAAA;EACA,oCAAA;ADmBF;ACjBE;EACE,yBAAA;EACA,YAAA;EACA,sBAAA;EACA,UAAA;EACA,kBAAA;EACA,cAAA;EACA,iCAAA;EACA,kBAAA;EACA,aAAA;EACA,gBAAA;ADmBJ;ACjBI;EACE,YAAA;ADmBN;AChBI;EACE,aAAA;EACA,cAAA;EACA,kBAAA;ADkBN;AChBM;EACE,WAAA;EACA,YAAA;EACA,cAAA;EACA,iBAAA;ADkBR;ACfM;EACE,kBAAA;ADiBR;ACdM;EACE,iBAAA;EACA,oBAAA;ADgBR;ACbM;EACE,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;EACA,mBAAA;ADeR;ACbQ;EACE,mBAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,cAAA;EACA,OAAA;EACA,kBAAA;EACA,cAAA;EACA,eAAA;ADeV;ACbU;EACE,eAAA;EACA,cAAA;EACA,iDAAA;EACA,8CAAA;EACA,yCAAA;ADeZ;ACTI;EACE,kBAAA;EACA,YAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,mBAAA;EACA,kBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,cAAA;EACA,yBAAA;EACA,iBAAA;EACA,eAAA;ADWN;ACTM;EACE,eAAA;EACA,mBAAA;ADWR;ACPI;EACE,gBAAA;EACA,kBAAA;EACA,iBAAA;EACA,cAAA;EACA,eAAA;ADSN;;AElHA;EACE,mBAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,cAAA;EACA,OAAA;EACA,kBAAA;EACA,cAAA;EACA,eAAA;AFqHF;AEnHE;EACE,eAAA;EACA,cAAA;EACA,iDAAA;EACA,8CAAA;EACA,yCAAA;AFqHJ;;AGpIE;EACE,WAAA;EACA,aAAA;AHuIJ;AGpIE;EACE,WAAA;EACA,aAAA;AHsIJ;AGnIE;EACE,iCAAA;EACA,eAAA;EACA,gBAAA;AHqIJ;AGlIE;EACE,iBAAA;EACA,eAAA;AHoIJ","sourcesContent":["@font-face {\n  font-family: 'Roboto';\n  src: url(fonts/Roboto-Regular.ttf) format('truetype');\n  font-weight: normal;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Roboto';\n  src: url(fonts/Roboto-Bold.ttf) format('truetype');\n  font-weight: bold;\n  font-style: normal;\n}\n\n@font-face {\n  font-family: 'Roboto';\n  src: url(fonts/Roboto-Light.ttf) format('truetype');\n  font-weight: lighter;\n  font-style: normal;\n}\n","@font-face {\n  font-family: \"Roboto\";\n  src: url(fonts/Roboto-Regular.ttf) format(\"truetype\");\n  font-weight: normal;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: url(fonts/Roboto-Bold.ttf) format(\"truetype\");\n  font-weight: bold;\n  font-style: normal;\n}\n@font-face {\n  font-family: \"Roboto\";\n  src: url(fonts/Roboto-Light.ttf) format(\"truetype\");\n  font-weight: lighter;\n  font-style: normal;\n}\n#adblock-modal {\n  position: fixed;\n  z-index: 1;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: black;\n  background-color: rgba(0, 0, 0, 0.5);\n}\n#adblock-modal .content {\n  background-color: #F5F5F5;\n  margin: auto;\n  border: 1px solid #888;\n  width: 50%;\n  position: relative;\n  color: #0D0C0C;\n  font-family: Roboto, \"sans-serif\";\n  border-radius: 5px;\n  height: 500px;\n  max-height: 70vh;\n}\n#adblock-modal .content .header, #adblock-modal .content .footer {\n  height: 60px;\n}\n#adblock-modal .content .body {\n  height: 350px;\n  overflow: auto;\n  padding: 20px 40px;\n}\n#adblock-modal .content .body .icon {\n  width: 96px;\n  height: 96px;\n  display: block;\n  margin: 20px auto;\n}\n#adblock-modal .content .body .title {\n  text-align: center;\n}\n#adblock-modal .content .body .subtitle {\n  padding: 5px 20px;\n  font-weight: lighter;\n}\n#adblock-modal .content .body .buttons {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  margin-top: 20px;\n  margin-bottom: 30px;\n}\n#adblock-modal .content .body .buttons button {\n  background: #bdc3c7;\n  border: none;\n  outline: none;\n  border-radius: 5px;\n  margin: 0 10px;\n  flex: 1;\n  padding: 10px 15px;\n  color: #2c3e50;\n  font-size: 1rem;\n}\n#adblock-modal .content .body .buttons button:hover {\n  cursor: pointer;\n  color: #ecf0f1;\n  -webkit-box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.75);\n  -moz-box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.75);\n  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.75);\n}\n#adblock-modal .content .close-button {\n  position: absolute;\n  right: -12px;\n  top: -12px;\n  width: 24px;\n  height: 24px;\n  background: #F5F5F5;\n  border-radius: 50%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  color: #111111;\n  border: 1px solid #111111;\n  font-weight: bold;\n  cursor: default;\n}\n#adblock-modal .content .close-button:hover {\n  cursor: pointer;\n  background: #DCDCDC;\n}\n#adblock-modal .content footer.footer {\n  margin-top: 10px;\n  text-align: center;\n  font-size: 0.7rem;\n  color: #7f8c8d;\n  cursor: default;\n}\n\n.back-button {\n  background: #bdc3c7;\n  border: none;\n  outline: none;\n  border-radius: 5px;\n  margin: 0 10px;\n  flex: 1;\n  padding: 10px 15px;\n  color: #2c3e50;\n  font-size: 1rem;\n}\n.back-button:hover {\n  cursor: pointer;\n  color: #ecf0f1;\n  -webkit-box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.75);\n  -moz-box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.75);\n  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.75);\n}\n\n#turn-off-adblocker .whitelist-adblock {\n  width: 100%;\n  height: 250px;\n}\n#turn-off-adblocker .whitelist-adblock-gif {\n  width: 100%;\n  height: 400px;\n}\n#turn-off-adblocker .whitelist-adblock-text {\n  font-family: Roboto, \"sans-serif\";\n  font-size: 17px;\n  font-weight: 400;\n}\n#turn-off-adblocker .text-bolded {\n  font-weight: bold;\n  font-size: 14px;\n}","#adblock-modal {\n  position: fixed;\n  z-index: 1;\n  padding-top: 100px;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgb(0,0,0);\n  background-color: rgba(0,0,0,0.5);\n\n  .content {\n    background-color: #F5F5F5;\n    margin: auto;\n    border: 1px solid #888;\n    width: 50%;\n    position: relative;\n    color: #0D0C0C;\n    font-family: Roboto, 'sans-serif';\n    border-radius: 5px;\n    height: 500px;\n    max-height: 70vh;\n\n    .header, .footer {\n      height: 60px;\n    }\n\n    .body {\n      height: 350px;\n      overflow: auto;\n      padding: 20px 40px;\n\n      .icon {\n        width: 96px;\n        height: 96px;\n        display: block;\n        margin: 20px auto;\n      }\n\n      .title {\n        text-align: center;\n      }\n\n      .subtitle {\n        padding: 5px 20px;\n        font-weight: lighter;\n      }\n\n      .buttons {\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        margin-top: 20px;\n        margin-bottom: 30px;\n\n        button {\n          background: #bdc3c7;\n          border: none;\n          outline: none;\n          border-radius: 5px;\n          margin: 0 10px;\n          flex: 1;\n          padding: 10px 15px;\n          color: #2c3e50;\n          font-size: 1rem;\n\n          &:hover {\n            cursor: pointer;\n            color: #ecf0f1;\n            -webkit-box-shadow: 0 0 5px 0 rgba(0,0,0,0.75);\n            -moz-box-shadow: 0 0 5px 0 rgba(0,0,0,0.75);\n            box-shadow: 0 0 5px 0 rgba(0,0,0,0.75);\n          }\n        }\n      }\n    }\n\n    .close-button {\n      position: absolute;\n      right: -12px;\n      top: -12px;\n      width: 24px;\n      height: 24px;\n      background: #F5F5F5;\n      border-radius: 50%;\n      display: flex;\n      justify-content: center;\n      align-items: center;\n      color: #111111;\n      border: 1px solid #111111;\n      font-weight: bold;\n      cursor: default;\n\n      &:hover {\n        cursor: pointer;\n        background: #DCDCDC;\n      }\n    }\n\n    footer.footer {\n      margin-top: 10px;\n      text-align: center;\n      font-size: 0.7rem;\n      color: #7f8c8d;\n      cursor: default;\n    }\n  }\n}\n",".back-button {\n  background: #bdc3c7;\n  border: none;\n  outline: none;\n  border-radius: 5px;\n  margin: 0 10px;\n  flex: 1;\n  padding: 10px 15px;\n  color: #2c3e50;\n  font-size: 1rem;\n\n  &:hover {\n    cursor: pointer;\n    color: #ecf0f1;\n    -webkit-box-shadow: 0 0 5px 0 rgba(0,0,0,0.75);\n    -moz-box-shadow: 0 0 5px 0 rgba(0,0,0,0.75);\n    box-shadow: 0 0 5px 0 rgba(0,0,0,0.75);\n  }\n}\n","#turn-off-adblocker {\n  .whitelist-adblock {\n    width: 100%;\n    height: 250px;\n  }\n\n  .whitelist-adblock-gif {\n    width: 100%;\n    height: 400px;\n  }\n\n  .whitelist-adblock-text {\n    font-family: Roboto, 'sans-serif';\n    font-size: 17px;\n    font-weight: 400;\n  }\n\n  .text-bolded {\n    font-weight: bold;\n    font-size: 14px;\n  }\n}\n"],"sourceRoot":""}]);
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

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

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

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

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
        while (_) try {
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
                        var ad = document.createElement('div');
                        ad.innerHTML = '&nbsp;';
                        ad.className = 'adsbygoogle';
                        document.body.appendChild(ad);
                        window.setTimeout(function () {
                            if (ad.offsetHeight === 0) {
                                _this.adBlockEnabled = true;
                            }
                            ad.remove();
                            return resolve();
                        }, 100);
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
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "createElementWithId": () => (/* binding */ createElementWithId),
/* harmony export */   "createElementWithClasses": () => (/* binding */ createElementWithClasses),
/* harmony export */   "QS": () => (/* binding */ QS),
/* harmony export */   "QSall": () => (/* binding */ QSall)
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
        this.popup = (0,_helpers_DOM__WEBPACK_IMPORTED_MODULE_0__.createElementWithId)("div", _constants_index__WEBPACK_IMPORTED_MODULE_1__.default.popup.id);
        this.content = (0,_helpers_DOM__WEBPACK_IMPORTED_MODULE_0__.createElementWithClasses)("div", _constants_index__WEBPACK_IMPORTED_MODULE_1__.default.popup.contentClasses);
        this.header = (0,_helpers_DOM__WEBPACK_IMPORTED_MODULE_0__.createElementWithClasses)("div", [_constants_index__WEBPACK_IMPORTED_MODULE_1__.default.popup.headerClass]);
        this.body = (0,_helpers_DOM__WEBPACK_IMPORTED_MODULE_0__.createElementWithClasses)("div", [_constants_index__WEBPACK_IMPORTED_MODULE_1__.default.popup.bodyClass]);
        this.footer = (0,_helpers_DOM__WEBPACK_IMPORTED_MODULE_0__.createElementWithClasses)("div", [_constants_index__WEBPACK_IMPORTED_MODULE_1__.default.popup.footerClass]);
        this.prepareContentStructure();
    };
    Popup.prototype.prepareContentStructure = function () {
        var component = new _component_index__WEBPACK_IMPORTED_MODULE_3__.default();
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
        var page = new _page_index__WEBPACK_IMPORTED_MODULE_2__.default();
        switch (this.currentPage) {
            case _constants_index__WEBPACK_IMPORTED_MODULE_1__.default.pages.home:
                this.body.innerHTML = page.renderHome();
                break;
            case _constants_index__WEBPACK_IMPORTED_MODULE_1__.default.pages.turnOffAdBlocker:
                this.body.innerHTML = page.renderTurnOffAdBlocker();
                break;
            default:
                console.error("[404] Page not found!");
        }
        document.body.appendChild(this.popup);
        this.dispatchEvents();
    };
    Popup.prototype.generateCloseButton = function () {
        var closeBtn = (0,_helpers_DOM__WEBPACK_IMPORTED_MODULE_0__.createElementWithClasses)("div", [_constants_index__WEBPACK_IMPORTED_MODULE_1__.default.popup.closeButtonClass]);
        closeBtn.innerHTML = "&times";
        return closeBtn;
    };
    Popup.prototype.dispatchEvents = function () {
        var _this = this;
        (0,_helpers_DOM__WEBPACK_IMPORTED_MODULE_0__.QS)("." + _constants_index__WEBPACK_IMPORTED_MODULE_1__.default.popup.closeButtonClass) ? (0,_helpers_DOM__WEBPACK_IMPORTED_MODULE_0__.QS)("." + _constants_index__WEBPACK_IMPORTED_MODULE_1__.default.popup.closeButtonClass).addEventListener("click", function () { return _this.closeModal(); }, true) : null;
        (0,_helpers_DOM__WEBPACK_IMPORTED_MODULE_0__.QS)("#" + _constants_index__WEBPACK_IMPORTED_MODULE_1__.default.pages.turnOffAdBlocker) ? (0,_helpers_DOM__WEBPACK_IMPORTED_MODULE_0__.QS)("#" + _constants_index__WEBPACK_IMPORTED_MODULE_1__.default.pages.turnOffAdBlocker).addEventListener("click", function () { return _this.changePage(_constants_index__WEBPACK_IMPORTED_MODULE_1__.default.pages.turnOffAdBlocker); }, true) : null;
        (0,_helpers_DOM__WEBPACK_IMPORTED_MODULE_0__.QS)("." + _constants_index__WEBPACK_IMPORTED_MODULE_1__.default.popup.backButtonClass) ? (0,_helpers_DOM__WEBPACK_IMPORTED_MODULE_0__.QS)("." + _constants_index__WEBPACK_IMPORTED_MODULE_1__.default.popup.backButtonClass).addEventListener("click", function (evt) { return _this.returnBack(evt); }, true) : null;
    };
    Popup.prototype.detachEvents = function () {
        var _this = this;
        (0,_helpers_DOM__WEBPACK_IMPORTED_MODULE_0__.QS)("." + _constants_index__WEBPACK_IMPORTED_MODULE_1__.default.popup.closeButtonClass) ? (0,_helpers_DOM__WEBPACK_IMPORTED_MODULE_0__.QS)("." + _constants_index__WEBPACK_IMPORTED_MODULE_1__.default.popup.closeButtonClass).removeEventListener("click", function () { return _this.closeModal(); }, true) : null;
        (0,_helpers_DOM__WEBPACK_IMPORTED_MODULE_0__.QS)("#" + _constants_index__WEBPACK_IMPORTED_MODULE_1__.default.pages.turnOffAdBlocker) ? (0,_helpers_DOM__WEBPACK_IMPORTED_MODULE_0__.QS)("#" + _constants_index__WEBPACK_IMPORTED_MODULE_1__.default.pages.turnOffAdBlocker).removeEventListener("click", function () { return _this.changePage(_constants_index__WEBPACK_IMPORTED_MODULE_1__.default.pages.turnOffAdBlocker); }, true) : null;
        (0,_helpers_DOM__WEBPACK_IMPORTED_MODULE_0__.QS)("." + _constants_index__WEBPACK_IMPORTED_MODULE_1__.default.popup.backButtonClass) ? (0,_helpers_DOM__WEBPACK_IMPORTED_MODULE_0__.QS)("." + _constants_index__WEBPACK_IMPORTED_MODULE_1__.default.popup.backButtonClass).removeEventListener("click", function (evt) { return _this.returnBack(evt); }, true) : null;
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
        (0,_helpers_DOM__WEBPACK_IMPORTED_MODULE_0__.QS)("#" + _constants_index__WEBPACK_IMPORTED_MODULE_1__.default.popup.id).remove();
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
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
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



var detection = new _detection_index__WEBPACK_IMPORTED_MODULE_0__.default();
detection.check()
    .then(function () {
    if (detection.adBlockEnabled) {
        var popup = new _popup_index__WEBPACK_IMPORTED_MODULE_1__.default(true);
        popup.init();
    }
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hZC1ibG9ja2VyLWRldGVjdGlvbi8uL3NyYy9zdHlsZS9tYWluLnNjc3MiLCJ3ZWJwYWNrOi8vYWQtYmxvY2tlci1kZXRlY3Rpb24vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2FkLWJsb2NrZXItZGV0ZWN0aW9uLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vYWQtYmxvY2tlci1kZXRlY3Rpb24vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2FkLWJsb2NrZXItZGV0ZWN0aW9uLy4vc3JjL3N0eWxlL2ZvbnRzL1JvYm90by1Cb2xkLnR0ZiIsIndlYnBhY2s6Ly9hZC1ibG9ja2VyLWRldGVjdGlvbi8uL3NyYy9zdHlsZS9mb250cy9Sb2JvdG8tTGlnaHQudHRmIiwid2VicGFjazovL2FkLWJsb2NrZXItZGV0ZWN0aW9uLy4vc3JjL3N0eWxlL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZiIsIndlYnBhY2s6Ly9hZC1ibG9ja2VyLWRldGVjdGlvbi8uL3NyYy9zdHlsZS9tYWluLnNjc3M/YTIyMSIsIndlYnBhY2s6Ly9hZC1ibG9ja2VyLWRldGVjdGlvbi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9hZC1ibG9ja2VyLWRldGVjdGlvbi8uL3NyYy9zY3JpcHQvY29tcG9uZW50L2luZGV4LnRzIiwid2VicGFjazovL2FkLWJsb2NrZXItZGV0ZWN0aW9uLy4vc3JjL3NjcmlwdC9jb25zdGFudHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYWQtYmxvY2tlci1kZXRlY3Rpb24vLi9zcmMvc2NyaXB0L2RldGVjdGlvbi9pbmRleC50cyIsIndlYnBhY2s6Ly9hZC1ibG9ja2VyLWRldGVjdGlvbi8uL3NyYy9zY3JpcHQvaGVscGVycy9ET00udHMiLCJ3ZWJwYWNrOi8vYWQtYmxvY2tlci1kZXRlY3Rpb24vLi9zcmMvc2NyaXB0L3BhZ2UvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vYWQtYmxvY2tlci1kZXRlY3Rpb24vLi9zcmMvc2NyaXB0L3BvcHVwL2luZGV4LnRzIiwid2VicGFjazovL2FkLWJsb2NrZXItZGV0ZWN0aW9uL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2FkLWJsb2NrZXItZGV0ZWN0aW9uL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2FkLWJsb2NrZXItZGV0ZWN0aW9uL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9hZC1ibG9ja2VyLWRldGVjdGlvbi93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2FkLWJsb2NrZXItZGV0ZWN0aW9uL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYWQtYmxvY2tlci1kZXRlY3Rpb24vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9hZC1ibG9ja2VyLWRldGVjdGlvbi93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9hZC1ibG9ja2VyLWRldGVjdGlvbi8uL3NyYy9zY3JpcHQvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUN5SDtBQUM3QjtBQUNPO0FBQzVCO0FBQ0g7QUFDQztBQUNyRSw4QkFBOEIsbUZBQTJCLENBQUMsd0dBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0IsQ0FBQyw4REFBNkI7QUFDdEcseUNBQXlDLHNGQUErQixDQUFDLDJEQUE2QjtBQUN0Ryx5Q0FBeUMsc0ZBQStCLENB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aWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gZnJvbSBcIi4vZm9udHMvUm9ib3RvLVJlZ3VsYXIudHRmXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gZnJvbSBcIi4vZm9udHMvUm9ib3RvLUJvbGQudHRmXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18gZnJvbSBcIi4vZm9udHMvUm9ib3RvLUxpZ2h0LnR0ZlwiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzJfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCI7XFxuICBzcmM6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gKyBcIikgZm9ybWF0KFxcXCJ0cnVldHlwZVxcXCIpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcbiAgc3JjOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8yX19fICsgXCIpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG4jYWRibG9jay1tb2RhbCB7XFxuICBwb3NpdGlvbjogZml4ZWQ7XFxuICB6LWluZGV4OiAxO1xcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xcbiAgbGVmdDogMDtcXG4gIHRvcDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXG59XFxuI2FkYmxvY2stbW9kYWwgLmNvbnRlbnQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI0Y1RjVGNTtcXG4gIG1hcmdpbjogYXV0bztcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxuICB3aWR0aDogNTAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgY29sb3I6ICMwRDBDMEM7XFxuICBmb250LWZhbWlseTogUm9ib3RvLCBcXFwic2Fucy1zZXJpZlxcXCI7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgbWF4LWhlaWdodDogNzB2aDtcXG59XFxuI2FkYmxvY2stbW9kYWwgLmNvbnRlbnQgLmhlYWRlciwgI2FkYmxvY2stbW9kYWwgLmNvbnRlbnQgLmZvb3RlciB7XFxuICBoZWlnaHQ6IDYwcHg7XFxufVxcbiNhZGJsb2NrLW1vZGFsIC5jb250ZW50IC5ib2R5IHtcXG4gIGhlaWdodDogMzUwcHg7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIHBhZGRpbmc6IDIwcHggNDBweDtcXG59XFxuI2FkYmxvY2stbW9kYWwgLmNvbnRlbnQgLmJvZHkgLmljb24ge1xcbiAgd2lkdGg6IDk2cHg7XFxuICBoZWlnaHQ6IDk2cHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1hcmdpbjogMjBweCBhdXRvO1xcbn1cXG4jYWRibG9jay1tb2RhbCAuY29udGVudCAuYm9keSAudGl0bGUge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4jYWRibG9jay1tb2RhbCAuY29udGVudCAuYm9keSAuc3VidGl0bGUge1xcbiAgcGFkZGluZzogNXB4IDIwcHg7XFxuICBmb250LXdlaWdodDogbGlnaHRlcjtcXG59XFxuI2FkYmxvY2stbW9kYWwgLmNvbnRlbnQgLmJvZHkgLmJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcbn1cXG4jYWRibG9jay1tb2RhbCAuY29udGVudCAuYm9keSAuYnV0dG9ucyBidXR0b24ge1xcbiAgYmFja2dyb3VuZDogI2JkYzNjNztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW46IDAgMTBweDtcXG4gIGZsZXg6IDE7XFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICBjb2xvcjogIzJjM2U1MDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuI2FkYmxvY2stbW9kYWwgLmNvbnRlbnQgLmJvZHkgLmJ1dHRvbnMgYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjZWNmMGYxO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG4gIC1tb3otYm94LXNoYWRvdzogMCAwIDVweCAwIHJnYmEoMCwgMCwgMCwgMC43NSk7XFxuICBib3gtc2hhZG93OiAwIDAgNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG59XFxuI2FkYmxvY2stbW9kYWwgLmNvbnRlbnQgLmNsb3NlLWJ1dHRvbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogLTEycHg7XFxuICB0b3A6IC0xMnB4O1xcbiAgd2lkdGg6IDI0cHg7XFxuICBoZWlnaHQ6IDI0cHg7XFxuICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiAjMTExMTExO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzExMTExMTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG4jYWRibG9jay1tb2RhbCAuY29udGVudCAuY2xvc2UtYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGJhY2tncm91bmQ6ICNEQ0RDREM7XFxufVxcbiNhZGJsb2NrLW1vZGFsIC5jb250ZW50IGZvb3Rlci5mb290ZXIge1xcbiAgbWFyZ2luLXRvcDogMTBweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMC43cmVtO1xcbiAgY29sb3I6ICM3ZjhjOGQ7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblxcbi5iYWNrLWJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiAjYmRjM2M3O1xcbiAgYm9yZGVyOiBub25lO1xcbiAgb3V0bGluZTogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIG1hcmdpbjogMCAxMHB4O1xcbiAgZmxleDogMTtcXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcXG4gIGNvbG9yOiAjMmMzZTUwO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG4uYmFjay1idXR0b246aG92ZXIge1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgY29sb3I6ICNlY2YwZjE7XFxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbiAgLW1vei1ib3gtc2hhZG93OiAwIDAgNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbn1cXG5cXG4jdHVybi1vZmYtYWRibG9ja2VyIC53aGl0ZWxpc3QtYWRibG9jayB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMjUwcHg7XFxufVxcbiN0dXJuLW9mZi1hZGJsb2NrZXIgLndoaXRlbGlzdC1hZGJsb2NrLWdpZiB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNDAwcHg7XFxufVxcbiN0dXJuLW9mZi1hZGJsb2NrZXIgLndoaXRlbGlzdC1hZGJsb2NrLXRleHQge1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXFxcInNhbnMtc2VyaWZcXFwiO1xcbiAgZm9udC1zaXplOiAxN3B4O1xcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXG59XFxuI3R1cm4tb2ZmLWFkYmxvY2tlciAudGV4dC1ib2xkZWQge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDE0cHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS9fZm9udHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlL21haW4uc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlL2NvbXBvbmVudHMvbW9kYWwuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3N0eWxlL2NvbXBvbmVudHMvYnV0dG9ucy5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUvcGFnZXMvdHVybi1vZmYtYWRibG9ja2VyLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxxQkFBQTtFQUNBLCtEQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ0NGO0FERUE7RUFDRSxxQkFBQTtFQUNBLCtEQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0FGO0FER0E7RUFDRSxxQkFBQTtFQUNBLCtEQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQ0RGO0FDakJBO0VBQ0UsZUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQ0FBQTtBRG1CRjtBQ2pCRTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QURtQko7QUNqQkk7RUFDRSxZQUFBO0FEbUJOO0FDaEJJO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBRGtCTjtBQ2hCTTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FEa0JSO0FDZk07RUFDRSxrQkFBQTtBRGlCUjtBQ2RNO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtBRGdCUjtBQ2JNO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FEZVI7QUNiUTtFQUNFLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxPQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtBRGVWO0FDYlU7RUFDRSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGlEQUFBO0VBQ0EsOENBQUE7RUFDQSx5Q0FBQTtBRGVaO0FDVEk7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QURXTjtBQ1RNO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0FEV1I7QUNQSTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FEU047O0FFbEhBO0VBQ0UsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLE9BQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0FGcUhGO0FFbkhFO0VBQ0UsZUFBQTtFQUNBLGNBQUE7RUFDQSxpREFBQTtFQUNBLDhDQUFBO0VBQ0EseUNBQUE7QUZxSEo7O0FHcElFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7QUh1SUo7QUdwSUU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBSHNJSjtBR25JRTtFQUNFLGlDQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FIcUlKO0FHbElFO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0FIb0lKXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgc3JjOiB1cmwoZm9udHMvUm9ib3RvLVJlZ3VsYXIudHRmKSBmb3JtYXQoJ3RydWV0eXBlJyk7XFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJztcXG4gIHNyYzogdXJsKGZvbnRzL1JvYm90by1Cb2xkLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nO1xcbiAgc3JjOiB1cmwoZm9udHMvUm9ib3RvLUxpZ2h0LnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcblwiLFwiQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCI7XFxuICBzcmM6IHVybChmb250cy9Sb2JvdG8tUmVndWxhci50dGYpIGZvcm1hdChcXFwidHJ1ZXR5cGVcXFwiKTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiO1xcbiAgc3JjOiB1cmwoZm9udHMvUm9ib3RvLUJvbGQudHRmKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCI7XFxuICBzcmM6IHVybChmb250cy9Sb2JvdG8tTGlnaHQudHRmKSBmb3JtYXQoXFxcInRydWV0eXBlXFxcIik7XFxuICBmb250LXdlaWdodDogbGlnaHRlcjtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuI2FkYmxvY2stbW9kYWwge1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgei1pbmRleDogMTtcXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIG92ZXJmbG93OiBhdXRvO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxufVxcbiNhZGJsb2NrLW1vZGFsIC5jb250ZW50IHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XFxuICBtYXJnaW46IGF1dG87XFxuICBib3JkZXI6IDFweCBzb2xpZCAjODg4O1xcbiAgd2lkdGg6IDUwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGNvbG9yOiAjMEQwQzBDO1xcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgXFxcInNhbnMtc2VyaWZcXFwiO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgaGVpZ2h0OiA1MDBweDtcXG4gIG1heC1oZWlnaHQ6IDcwdmg7XFxufVxcbiNhZGJsb2NrLW1vZGFsIC5jb250ZW50IC5oZWFkZXIsICNhZGJsb2NrLW1vZGFsIC5jb250ZW50IC5mb290ZXIge1xcbiAgaGVpZ2h0OiA2MHB4O1xcbn1cXG4jYWRibG9jay1tb2RhbCAuY29udGVudCAuYm9keSB7XFxuICBoZWlnaHQ6IDM1MHB4O1xcbiAgb3ZlcmZsb3c6IGF1dG87XFxuICBwYWRkaW5nOiAyMHB4IDQwcHg7XFxufVxcbiNhZGJsb2NrLW1vZGFsIC5jb250ZW50IC5ib2R5IC5pY29uIHtcXG4gIHdpZHRoOiA5NnB4O1xcbiAgaGVpZ2h0OiA5NnB4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXJnaW46IDIwcHggYXV0bztcXG59XFxuI2FkYmxvY2stbW9kYWwgLmNvbnRlbnQgLmJvZHkgLnRpdGxlIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuI2FkYmxvY2stbW9kYWwgLmNvbnRlbnQgLmJvZHkgLnN1YnRpdGxlIHtcXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxufVxcbiNhZGJsb2NrLW1vZGFsIC5jb250ZW50IC5ib2R5IC5idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG59XFxuI2FkYmxvY2stbW9kYWwgLmNvbnRlbnQgLmJvZHkgLmJ1dHRvbnMgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQ6ICNiZGMzYzc7XFxuICBib3JkZXI6IG5vbmU7XFxuICBvdXRsaW5lOiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgbWFyZ2luOiAwIDEwcHg7XFxuICBmbGV4OiAxO1xcbiAgcGFkZGluZzogMTBweCAxNXB4O1xcbiAgY29sb3I6ICMyYzNlNTA7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcbiNhZGJsb2NrLW1vZGFsIC5jb250ZW50IC5ib2R5IC5idXR0b25zIGJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBjb2xvcjogI2VjZjBmMTtcXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDVweCAwIHJnYmEoMCwgMCwgMCwgMC43NSk7XFxuICAtbW96LWJveC1zaGFkb3c6IDAgMCA1cHggMCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xcbiAgYm94LXNoYWRvdzogMCAwIDVweCAwIHJnYmEoMCwgMCwgMCwgMC43NSk7XFxufVxcbiNhZGJsb2NrLW1vZGFsIC5jb250ZW50IC5jbG9zZS1idXR0b24ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgcmlnaHQ6IC0xMnB4O1xcbiAgdG9wOiAtMTJweDtcXG4gIHdpZHRoOiAyNHB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbiAgYmFja2dyb3VuZDogI0Y1RjVGNTtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogIzExMTExMTtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMxMTExMTE7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuI2FkYmxvY2stbW9kYWwgLmNvbnRlbnQgLmNsb3NlLWJ1dHRvbjpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICBiYWNrZ3JvdW5kOiAjRENEQ0RDO1xcbn1cXG4jYWRibG9jay1tb2RhbCAuY29udGVudCBmb290ZXIuZm9vdGVyIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDAuN3JlbTtcXG4gIGNvbG9yOiAjN2Y4YzhkO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5cXG4uYmFjay1idXR0b24ge1xcbiAgYmFja2dyb3VuZDogI2JkYzNjNztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW46IDAgMTBweDtcXG4gIGZsZXg6IDE7XFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICBjb2xvcjogIzJjM2U1MDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuLmJhY2stYnV0dG9uOmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIGNvbG9yOiAjZWNmMGYxO1xcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG4gIC1tb3otYm94LXNoYWRvdzogMCAwIDVweCAwIHJnYmEoMCwgMCwgMCwgMC43NSk7XFxuICBib3gtc2hhZG93OiAwIDAgNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjc1KTtcXG59XFxuXFxuI3R1cm4tb2ZmLWFkYmxvY2tlciAud2hpdGVsaXN0LWFkYmxvY2sge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDI1MHB4O1xcbn1cXG4jdHVybi1vZmYtYWRibG9ja2VyIC53aGl0ZWxpc3QtYWRibG9jay1naWYge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDQwMHB4O1xcbn1cXG4jdHVybi1vZmYtYWRibG9ja2VyIC53aGl0ZWxpc3QtYWRibG9jay10ZXh0IHtcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIFxcXCJzYW5zLXNlcmlmXFxcIjtcXG4gIGZvbnQtc2l6ZTogMTdweDtcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxufVxcbiN0dXJuLW9mZi1hZGJsb2NrZXIgLnRleHQtYm9sZGVkIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbn1cIixcIiNhZGJsb2NrLW1vZGFsIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHotaW5kZXg6IDE7XFxuICBwYWRkaW5nLXRvcDogMTAwcHg7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBvdmVyZmxvdzogYXV0bztcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigwLDAsMCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsMCwwLDAuNSk7XFxuXFxuICAuY29udGVudCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY1RjU7XFxuICAgIG1hcmdpbjogYXV0bztcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXG4gICAgd2lkdGg6IDUwJTtcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICBjb2xvcjogIzBEMEMwQztcXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgJ3NhbnMtc2VyaWYnO1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgIGhlaWdodDogNTAwcHg7XFxuICAgIG1heC1oZWlnaHQ6IDcwdmg7XFxuXFxuICAgIC5oZWFkZXIsIC5mb290ZXIge1xcbiAgICAgIGhlaWdodDogNjBweDtcXG4gICAgfVxcblxcbiAgICAuYm9keSB7XFxuICAgICAgaGVpZ2h0OiAzNTBweDtcXG4gICAgICBvdmVyZmxvdzogYXV0bztcXG4gICAgICBwYWRkaW5nOiAyMHB4IDQwcHg7XFxuXFxuICAgICAgLmljb24ge1xcbiAgICAgICAgd2lkdGg6IDk2cHg7XFxuICAgICAgICBoZWlnaHQ6IDk2cHg7XFxuICAgICAgICBkaXNwbGF5OiBibG9jaztcXG4gICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xcbiAgICAgIH1cXG5cXG4gICAgICAudGl0bGUge1xcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIH1cXG5cXG4gICAgICAuc3VidGl0bGUge1xcbiAgICAgICAgcGFkZGluZzogNXB4IDIwcHg7XFxuICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcXG4gICAgICB9XFxuXFxuICAgICAgLmJ1dHRvbnMge1xcbiAgICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xcblxcbiAgICAgICAgYnV0dG9uIHtcXG4gICAgICAgICAgYmFja2dyb3VuZDogI2JkYzNjNztcXG4gICAgICAgICAgYm9yZGVyOiBub25lO1xcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICAgICAgICAgIG1hcmdpbjogMCAxMHB4O1xcbiAgICAgICAgICBmbGV4OiAxO1xcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICAgICAgICAgIGNvbG9yOiAjMmMzZTUwO1xcbiAgICAgICAgICBmb250LXNpemU6IDFyZW07XFxuXFxuICAgICAgICAgICY6aG92ZXIge1xcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICAgICAgICBjb2xvcjogI2VjZjBmMTtcXG4gICAgICAgICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA1cHggMCByZ2JhKDAsMCwwLDAuNzUpO1xcbiAgICAgICAgICAgIC1tb3otYm94LXNoYWRvdzogMCAwIDVweCAwIHJnYmEoMCwwLDAsMC43NSk7XFxuICAgICAgICAgICAgYm94LXNoYWRvdzogMCAwIDVweCAwIHJnYmEoMCwwLDAsMC43NSk7XFxuICAgICAgICAgIH1cXG4gICAgICAgIH1cXG4gICAgICB9XFxuICAgIH1cXG5cXG4gICAgLmNsb3NlLWJ1dHRvbiB7XFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICAgIHJpZ2h0OiAtMTJweDtcXG4gICAgICB0b3A6IC0xMnB4O1xcbiAgICAgIHdpZHRoOiAyNHB4O1xcbiAgICAgIGhlaWdodDogMjRweDtcXG4gICAgICBiYWNrZ3JvdW5kOiAjRjVGNUY1O1xcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgICAgY29sb3I6ICMxMTExMTE7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzExMTExMTtcXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuXFxuICAgICAgJjpob3ZlciB7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgICBiYWNrZ3JvdW5kOiAjRENEQ0RDO1xcbiAgICAgIH1cXG4gICAgfVxcblxcbiAgICBmb290ZXIuZm9vdGVyIHtcXG4gICAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBmb250LXNpemU6IDAuN3JlbTtcXG4gICAgICBjb2xvcjogIzdmOGM4ZDtcXG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XFxuICAgIH1cXG4gIH1cXG59XFxuXCIsXCIuYmFjay1idXR0b24ge1xcbiAgYmFja2dyb3VuZDogI2JkYzNjNztcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICBtYXJnaW46IDAgMTBweDtcXG4gIGZsZXg6IDE7XFxuICBwYWRkaW5nOiAxMHB4IDE1cHg7XFxuICBjb2xvcjogIzJjM2U1MDtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG5cXG4gICY6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiAjZWNmMGYxO1xcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCA1cHggMCByZ2JhKDAsMCwwLDAuNzUpO1xcbiAgICAtbW96LWJveC1zaGFkb3c6IDAgMCA1cHggMCByZ2JhKDAsMCwwLDAuNzUpO1xcbiAgICBib3gtc2hhZG93OiAwIDAgNXB4IDAgcmdiYSgwLDAsMCwwLjc1KTtcXG4gIH1cXG59XFxuXCIsXCIjdHVybi1vZmYtYWRibG9ja2VyIHtcXG4gIC53aGl0ZWxpc3QtYWRibG9jayB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgfVxcblxcbiAgLndoaXRlbGlzdC1hZGJsb2NrLWdpZiB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDQwMHB4O1xcbiAgfVxcblxcbiAgLndoaXRlbGlzdC1hZGJsb2NrLXRleHQge1xcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCAnc2Fucy1zZXJpZic7XFxuICAgIGZvbnQtc2l6ZTogMTdweDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gIH1cXG5cXG4gIC50ZXh0LWJvbGRlZCB7XFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgICBmb250LXNpemU6IDE0cHg7XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyBpZiAodHlwZW9mIFN5bWJvbCA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKFN5bWJvbC5pdGVyYXRvciBpbiBPYmplY3QoYXJyKSkpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfSAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG5cblxuICB1cmwgPSB1cmwgJiYgdXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybDtcblxuICBpZiAodHlwZW9mIHVybCAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiB1cmw7XG4gIH0gLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG5cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiZXhwb3J0IGRlZmF1bHQgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gKyBcInN0YXRpYy9mb250cy9Sb2JvdG8tQm9sZC50dGZcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL1JvYm90by1MaWdodC50dGZcIjsiLCJleHBvcnQgZGVmYXVsdCBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwic3RhdGljL2ZvbnRzL1JvYm90by1SZWd1bGFyLnR0ZlwiOyIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uc2Nzc1wiO1xuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiY2xhc3MgQ29tcG9uZW50IHtcblxuICAgIHB1YmxpYyByZW5kZXJIZWFkZXIoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIGBgXG4gICAgfVxuXG4gICAgcHVibGljIHJlbmRlckZvb3RlcigpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgICA8aHIvPlxuICAgICAgICA8Zm9vdGVyIGNsYXNzPVwiZm9vdGVyXCI+XG4gICAgICAgICAgICAmY29weTsgQWRCbG9ja2VyXG4gICAgICAgIDwvZm9vdGVyPlxuICAgICAgICBgO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcG9uZW50O1xuIiwiY29uc3QgY29uc3RhbnRzID0ge1xuICAgIHBvcHVwOiB7XG4gICAgICAgIGlkOiBcImFkYmxvY2stbW9kYWxcIixcbiAgICAgICAgaGVhZGVyQ2xhc3M6IFwiaGVhZGVyXCIsXG4gICAgICAgIGJvZHlDbGFzczogXCJib2R5XCIsXG4gICAgICAgIGZvb3RlckNsYXNzOiBcImZvb3RlclwiLFxuICAgICAgICBjb250ZW50Q2xhc3NlczogW1wiY29udGVudFwiXSxcbiAgICAgICAgY2xvc2VCdXR0b25DbGFzczogXCJjbG9zZS1idXR0b25cIixcbiAgICAgICAgYmFja0J1dHRvbkNsYXNzOiBcImJhY2stYnV0dG9uXCJcbiAgICB9LFxuICAgIHBhZ2VzOiB7XG4gICAgICAgIGhvbWU6ICdob21lJyxcbiAgICAgICAgdHVybk9mZkFkQmxvY2tlcjogJ3R1cm4tb2ZmLWFkYmxvY2tlcidcbiAgICB9XG59O1xuXG5PYmplY3QuZnJlZXplKGNvbnN0YW50cyk7XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnN0YW50cztcbiIsImNsYXNzIERldGVjdGlvbiB7XG4gICAgYWRCbG9ja0VuYWJsZWQ6IGJvb2xlYW5cblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmFkQmxvY2tFbmFibGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgYXN5bmMgY2hlY2soKTogUHJvbWlzZTx2b2lkPiB7XG5cbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgICAgICAgICBhZC5pbm5lckhUTUwgPSAnJm5ic3A7J1xuICAgICAgICAgICAgYWQuY2xhc3NOYW1lID0gJ2Fkc2J5Z29vZ2xlJ1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhZClcbiAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoYWQub2Zmc2V0SGVpZ2h0ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRCbG9ja0VuYWJsZWQgPSB0cnVlXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGFkLnJlbW92ZSgpXG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSgpXG4gICAgICAgICAgICB9LCAxMDApXG4gICAgICAgIH0pXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZXRlY3Rpb247XG4iLCJleHBvcnQgY29uc3QgY3JlYXRlRWxlbWVudCA9IChlbGVtZW50OnN0cmluZykgOiBFbGVtZW50ID0+IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG5leHBvcnQgY29uc3QgY3JlYXRlRWxlbWVudFdpdGhJZCA9IChlbGVtZW50OnN0cmluZywgaWQ6c3RyaW5nKSA6IEVsZW1lbnQgPT4ge1xuICAgIGxldCBlbCA9IGNyZWF0ZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgZWwuaWQgPSBpZDtcblxuICAgIHJldHVybiBlbDtcbn07XG5leHBvcnQgY29uc3QgY3JlYXRlRWxlbWVudFdpdGhDbGFzc2VzID0gKGVsZW1lbnQ6c3RyaW5nLCBjbGFzc2VzOkFycmF5PHN0cmluZz4pIDogRWxlbWVudCA9PiB7XG4gICAgbGV0IGVsID0gY3JlYXRlRWxlbWVudChlbGVtZW50KTtcbiAgICBjbGFzc2VzLmZvckVhY2goKGNsYXNzTmFtZSkgPT4ge1xuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSk7XG4gICAgfSlcblxuICAgIHJldHVybiBlbDtcbn07XG5leHBvcnQgY29uc3QgUVMgPSAoc2VsZWN0b3I6c3RyaW5nKSA6IEVsZW1lbnQgPT4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG5leHBvcnQgY29uc3QgUVNhbGwgPSAoc2VsZWN0b3I6c3RyaW5nKSA6IE5vZGVMaXN0ID0+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xuIiwiY2xhc3MgUGFnZSB7XG5cbiAgICBwdWJsaWMgcmVuZGVySG9tZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgICA8aW1nIHNyYz0nLi9zdGF0aWMvaWNvbnMvYWQtYmxvY2suc3ZnJyBjbGFzcz0naWNvbicgYWx0PSdBZEJsb2NrIGljb24nIC8+XG4gICAgICAgIDxoMSBjbGFzcz1cInRpdGxlXCI+WW91J3JlIHVzaW5nIGFuIEFkYmxvY2tlci48L2gxPlxuICAgICAgICA8cCBjbGFzcz1cInN1YnRpdGxlXCI+QWRzIGFyZSBuZWNlc3NhcnkgZm9yIHRoZSBzbW9vdGggb3BlcmF0aW9uIG9mIG91ciBzaXRlLiBJZiB5b3Ugd2FudCB0byBoZWxwLCByZWdpc3RlciBvciB0dXJuIG9mZiB5b3VyIEFkYmxvY2tlci48L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XG4gICAgICAgICAgICA8YnV0dG9uPlJlZ2lzdGVyPC9idXR0b24+XG4gICAgICAgICAgICA8YnV0dG9uIGlkPVwidHVybi1vZmYtYWRibG9ja2VyXCI+VHVybiBvZmYgQWRibG9ja2VyPC9idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuICAgIH1cblxuICAgIHB1YmxpYyByZW5kZXJUdXJuT2ZmQWRCbG9ja2VyKCk6IHN0cmluZyB7XG5cbiAgICAgICAgcmV0dXJuIGBcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJwYWdlLXR1cm4tb2ZmLWFkYmxvY2tlclwiPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0nLi9zdGF0aWMvaWNvbnMvYWQtYmxvY2suc3ZnJyBjbGFzcz0naWNvbicgYWx0PSdBZEJsb2NrIGljb24nIC8+XG4gICAgICAgICAgICAgICAgICAgIDxoMz5EaXNhYmxlIEFkYmxvY2tlcnM8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8aDU+SE9XIFRPIFRVUk4gT0ZGIEFEQkxPQ0sgUExVR0lOID88L2g1PlxuICAgICAgICAgICAgICAgICAgICA8cD5Ob2JvZHkgbGlrZXMgYWRzIGJ1dCB0aGV5IGFyZSB0aGUgbmVjZXNzYXJ5IGV2aWwgb2YgYWxtb3N0IGV2ZXJ5IGZyZWUgc2VydmljZS5cbiAgICBCZSBmYWlyIGFuZCBjb25zaWRlciBwYXVzaW5nIHlvdXIgYWQgYmxvY2tlciB0byBzdXBwb3J0IHRoZSBjcmVhdG9ycyB3aG8gd29yayBoYXJkIHRvIGNyZWF0ZSB2YWx1ZS48L3A+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8aDU+RklSU1QgREVURVJNSU5FIFdISUNIIEFEQkxPQ0tFUiBZT1UgQVJFIFVTSU5HOjwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDxwPkluIHlvdXIgYnJvd3NlciB0b29sYmFyIGxvb2sgZm9yIG9uZSBvZiB0aGUgZm9sbG93aW5nIGljb25zIHRvIGRldGVybWluZSB3aGljaCBhZGJsb2NrZXIgeW91IGFyZSBydW5uaW5nLjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cIndoaXRlbGlzdC1hZGJsb2NrXCIgc3JjPVwiLi9zdGF0aWMvaW1hZ2VzL3doaXRlbGlzdC1iaC1hZGJsb2NrLW9wdGlvbnMuanBlZ1wiIGFsdD1cIlR1cm4gb2ZmIGFkYmxvY2tlclwiIC8+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8aDU+Rk9SIEFEQkxPQ0sgUExVUzo8L2g1PlxuICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzPVwid2hpdGVsaXN0LWFkYmxvY2stZ2lmXCIgc3JjPVwiLi9zdGF0aWMvaW1hZ2VzL3doaXRlbGlzdC1iaC1hZGJsb2NrcGx1cy5naWZcIiBhbHQ9XCJBZGJsb2NrIHBsdXNcIiAvPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cIndoaXRlbGlzdC1hZGJsb2NrLXRleHRcIj5DbGljayB0aGUgYWRibG9jayBwbHVzIGljb24gPGJyLz5cbiAgICAgICAgICAgICAgICAgICAgQ2xpY2sgPHNwYW4gY2xhc3M9XCJ0ZXh0LWJvbGRlZFwiPkVuYWJsZWQgT24gdGhpcyBTaXRlPC9zcGFuPiB0byBjaGFuZ2UgaXQgdG8gPHNwYW4gY2xhc3M9XCJ0ZXh0LWJvbGRlZFwiPkRpc2FibGVkIG9uIHRoaXMgc2l0ZTwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxzZWN0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8aDU+Rk9SIEFEQkxPQ0s6PC9oNT5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cIndoaXRlbGlzdC1hZGJsb2NrLWdpZlwiIHNyYz1cIi4vc3RhdGljL2ltYWdlcy93aGl0ZWxpc3QtYmgtYWRibG9jay5naWZcIiBhbHQ9XCJBZGJsb2NrXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJ3aGl0ZWxpc3QtYWRibG9jay10ZXh0XCI+Q2xpY2sgdGhlIGFkYmxvY2sgcGx1cyBpY29uIDxici8+XG4gICAgICAgICAgICAgICAgICAgIENsaWNrIDxzcGFuIGNsYXNzPVwidGV4dC1ib2xkZWRcIj5Eb27igJl0IHJ1biBvbiBwYWdlcyBvbiB0aGlzIGRvbWFpbjwvc3Bhbj48L3A+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJiYWNrLWJ1dHRvblwiIGRhdGEtc3JjPVwiaG9tZVwiPkJhY2s8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgXG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQYWdlO1xuIiwiaW1wb3J0IHtjcmVhdGVFbGVtZW50V2l0aENsYXNzZXMsIGNyZWF0ZUVsZW1lbnRXaXRoSWQsIFFTfSBmcm9tIFwiLi4vaGVscGVycy9ET01cIjtcbmltcG9ydCBjb25zdGFudHMgZnJvbSBcIi4uL2NvbnN0YW50cy9pbmRleFwiO1xuaW1wb3J0IFBhZ2UgZnJvbSBcIi4uL3BhZ2UvaW5kZXhcIjtcbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4uL2NvbXBvbmVudC9pbmRleFwiO1xuXG5jbGFzcyBQb3B1cCB7XG4gICAgcG9wdXA6IEVsZW1lbnRcbiAgICBoZWFkZXI6IEVsZW1lbnRcbiAgICBib2R5OiBFbGVtZW50XG4gICAgZm9vdGVyOiBFbGVtZW50XG4gICAgY29udGVudDogRWxlbWVudFxuICAgIGhhc0Nsb3NlQnV0dG9uOiBib29sZWFuXG4gICAgY3VycmVudFBhZ2U6IHN0cmluZ1xuXG4gICAgY29uc3RydWN0b3IoaGFzQ2xvc2VCdXR0b246IGJvb2xlYW4sIGN1cnJlbnRQYWdlPzogc3RyaW5nKSB7XG4gICAgICAgdGhpcy5oYXNDbG9zZUJ1dHRvbiA9IGhhc0Nsb3NlQnV0dG9uO1xuICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSBjdXJyZW50UGFnZSA/PyAnaG9tZSc7XG4gICAgfVxuXG4gICAgcHVibGljIGluaXQoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucG9wdXAgPSBjcmVhdGVFbGVtZW50V2l0aElkKFwiZGl2XCIsIGNvbnN0YW50cy5wb3B1cC5pZCk7XG4gICAgICAgIHRoaXMuY29udGVudCA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NlcyhcImRpdlwiLCBjb25zdGFudHMucG9wdXAuY29udGVudENsYXNzZXMpO1xuICAgICAgICB0aGlzLmhlYWRlciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NlcyhcImRpdlwiLCBbY29uc3RhbnRzLnBvcHVwLmhlYWRlckNsYXNzXSk7XG4gICAgICAgIHRoaXMuYm9keSA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NlcyhcImRpdlwiLCBbY29uc3RhbnRzLnBvcHVwLmJvZHlDbGFzc10pO1xuICAgICAgICB0aGlzLmZvb3RlciA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NlcyhcImRpdlwiLCBbY29uc3RhbnRzLnBvcHVwLmZvb3RlckNsYXNzXSk7XG5cbiAgICAgICAgdGhpcy5wcmVwYXJlQ29udGVudFN0cnVjdHVyZSgpXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHByZXBhcmVDb250ZW50U3RydWN0dXJlKCk6IHZvaWQge1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gbmV3IENvbXBvbmVudCgpO1xuICAgICAgICB0aGlzLmhlYWRlci5pbm5lckhUTUwgPSBjb21wb25lbnQucmVuZGVySGVhZGVyKCk7XG4gICAgICAgIHRoaXMuZm9vdGVyLmlubmVySFRNTCA9IGNvbXBvbmVudC5yZW5kZXJGb290ZXIoKTtcblxuICAgICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy5oZWFkZXIpO1xuICAgICAgICB0aGlzLmNvbnRlbnQuYXBwZW5kQ2hpbGQodGhpcy5ib2R5KTtcbiAgICAgICAgdGhpcy5jb250ZW50LmFwcGVuZENoaWxkKHRoaXMuZm9vdGVyKTtcbiAgICAgICAgaWYgKHRoaXMuaGFzQ2xvc2VCdXR0b24pIHtcbiAgICAgICAgICAgIHRoaXMuY29udGVudC5hcHBlbmRDaGlsZCh0aGlzLmdlbmVyYXRlQ2xvc2VCdXR0b24oKSlcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMucG9wdXAuYXBwZW5kQ2hpbGQodGhpcy5jb250ZW50KTtcblxuICAgICAgICB0aGlzLnBhZ2VSZW5kZXIoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcGFnZVJlbmRlcigpOiB2b2lkIHtcbiAgICAgICAgbGV0IHBhZ2UgPSBuZXcgUGFnZSgpO1xuXG4gICAgICAgIHN3aXRjaCAodGhpcy5jdXJyZW50UGFnZSkge1xuICAgICAgICAgICAgY2FzZSBjb25zdGFudHMucGFnZXMuaG9tZTpcbiAgICAgICAgICAgICAgICB0aGlzLmJvZHkuaW5uZXJIVE1MID0gcGFnZS5yZW5kZXJIb21lKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIGNvbnN0YW50cy5wYWdlcy50dXJuT2ZmQWRCbG9ja2VyOlxuICAgICAgICAgICAgICAgIHRoaXMuYm9keS5pbm5lckhUTUwgPSBwYWdlLnJlbmRlclR1cm5PZmZBZEJsb2NrZXIoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIls0MDRdIFBhZ2Ugbm90IGZvdW5kIVwiKVxuICAgICAgICB9XG5cbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLnBvcHVwKTtcblxuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGdlbmVyYXRlQ2xvc2VCdXR0b24oKTogRWxlbWVudCB7XG4gICAgICAgIGxldCBjbG9zZUJ0biA9IGNyZWF0ZUVsZW1lbnRXaXRoQ2xhc3NlcyhcImRpdlwiLCBbY29uc3RhbnRzLnBvcHVwLmNsb3NlQnV0dG9uQ2xhc3NdKTtcbiAgICAgICAgY2xvc2VCdG4uaW5uZXJIVE1MID0gXCImdGltZXNcIjtcblxuICAgICAgICByZXR1cm4gY2xvc2VCdG47XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGRpc3BhdGNoRXZlbnRzKCk6IHZvaWQge1xuICAgICAgICBRUyhgLiR7Y29uc3RhbnRzLnBvcHVwLmNsb3NlQnV0dG9uQ2xhc3N9YCkgPyBRUyhgLiR7Y29uc3RhbnRzLnBvcHVwLmNsb3NlQnV0dG9uQ2xhc3N9YCkuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHRoaXMuY2xvc2VNb2RhbCgpLCB0cnVlKSA6IG51bGw7XG4gICAgICAgIFFTKGAjJHtjb25zdGFudHMucGFnZXMudHVybk9mZkFkQmxvY2tlcn1gKSA/IFFTKGAjJHtjb25zdGFudHMucGFnZXMudHVybk9mZkFkQmxvY2tlcn1gKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5jaGFuZ2VQYWdlKGNvbnN0YW50cy5wYWdlcy50dXJuT2ZmQWRCbG9ja2VyKSwgdHJ1ZSkgOiBudWxsO1xuICAgICAgICBRUyhgLiR7Y29uc3RhbnRzLnBvcHVwLmJhY2tCdXR0b25DbGFzc31gKSA/IFFTKGAuJHtjb25zdGFudHMucG9wdXAuYmFja0J1dHRvbkNsYXNzfWApLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXZ0KSA9PiB0aGlzLnJldHVybkJhY2soZXZ0KSwgdHJ1ZSkgOiBudWxsO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBkZXRhY2hFdmVudHMoKTogdm9pZCB7XG4gICAgICAgIFFTKGAuJHtjb25zdGFudHMucG9wdXAuY2xvc2VCdXR0b25DbGFzc31gKSA/IFFTKGAuJHtjb25zdGFudHMucG9wdXAuY2xvc2VCdXR0b25DbGFzc31gKS5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gdGhpcy5jbG9zZU1vZGFsKCksIHRydWUpIDogbnVsbDtcbiAgICAgICAgUVMoYCMke2NvbnN0YW50cy5wYWdlcy50dXJuT2ZmQWRCbG9ja2VyfWApID8gUVMoYCMke2NvbnN0YW50cy5wYWdlcy50dXJuT2ZmQWRCbG9ja2VyfWApLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB0aGlzLmNoYW5nZVBhZ2UoY29uc3RhbnRzLnBhZ2VzLnR1cm5PZmZBZEJsb2NrZXIpLCB0cnVlKSA6IG51bGw7XG4gICAgICAgIFFTKGAuJHtjb25zdGFudHMucG9wdXAuYmFja0J1dHRvbkNsYXNzfWApID8gUVMoYC4ke2NvbnN0YW50cy5wb3B1cC5iYWNrQnV0dG9uQ2xhc3N9YCkucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldnQpID0+IHRoaXMucmV0dXJuQmFjayhldnQpLCB0cnVlKSA6IG51bGw7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIGNoYW5nZVBhZ2UocGFnZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIHRoaXMuY3VycmVudFBhZ2UgPSBwYWdlO1xuICAgICAgICB0aGlzLmRldGFjaEV2ZW50cygpO1xuICAgICAgICB0aGlzLnBhZ2VSZW5kZXIoKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgcmV0dXJuQmFjayhlPzogRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmICghKGUudGFyZ2V0IGluc3RhbmNlb2YgSFRNTEJ1dHRvbkVsZW1lbnQpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWUudGFyZ2V0LmRhdGFzZXQuc3JjKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNoYW5nZVBhZ2UoZS50YXJnZXQuZGF0YXNldC5zcmMudG9TdHJpbmcoKSlcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgY2xvc2VNb2RhbChlPzogRXZlbnQpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJhYWFhXCIpXG4gICAgICAgIHRoaXMuY29udGVudCA9IG51bGw7XG5cbiAgICAgICAgdGhpcy5kZXRhY2hFdmVudHMoKTtcbiAgICAgICAgUVMoYCMke2NvbnN0YW50cy5wb3B1cC5pZH1gKS5yZW1vdmUoKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvcHVwO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgRGV0ZWN0aW9uIGZyb20gXCIuL2RldGVjdGlvbi9pbmRleFwiO1xuaW1wb3J0IFBvcHVwIGZyb20gXCIuL3BvcHVwL2luZGV4XCI7XG5pbXBvcnQgJy4uL3N0eWxlL21haW4uc2Nzcyc7XG5cbmxldCBkZXRlY3Rpb24gPSBuZXcgRGV0ZWN0aW9uKCk7XG5kZXRlY3Rpb24uY2hlY2soKVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgaWYgKGRldGVjdGlvbi5hZEJsb2NrRW5hYmxlZCkge1xuICAgICAgICAgICAgbGV0IHBvcHVwID0gbmV3IFBvcHVwKHRydWUpO1xuICAgICAgICAgICAgcG9wdXAuaW5pdCgpO1xuICAgICAgICB9XG4gICAgfSlcbiJdLCJzb3VyY2VSb290IjoiIn0=