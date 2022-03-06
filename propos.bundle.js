/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/styles.scss":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/styles.scss ***!
  \********************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/** @format */\n/** @format */\n:root {\n  --red: #c23616;\n  --blue: #40739e;\n  --primary: #f5f6fa;\n  --dark: #333;\n  --header: #dcdde1;\n  --panneau: #7f8c8d;\n  --box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);\n  --font-family: \"Comic Neue\", cursive;\n}\n\n/** @format */\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\nul {\n  list-style: none;\n}\n\na {\n  text-decoration: none;\n}\n\n/**\n * /* Landscape phones and down\n *\n * @format\n */\n/* Landscape phone to portrait tablet */\n/* Portrait tablet to landscape and desktop */\n/* Large desktop */\nbody {\n  font-family: var(--font-family);\n  background: var(--primary);\n  color: var(--dark);\n}\n\nstrong {\n  color: var(--red);\n  font-weight: 700;\n}\n\nh2 {\n  font-size: 2rem;\n  color: var(--red);\n  font-weight: 700;\n  margin: 1rem 0 1rem 0;\n}\n\n.tarif {\n  font-size: 2rem;\n  color: var(--red);\n  font-weight: 700;\n  margin: 1rem 0 1rem 0;\n}\n\n.separator {\n  margin: 1rem auto;\n  height: 2px;\n}\n\n.blue {\n  width: 50px;\n  background: var(--blue);\n}\n\n.red {\n  width: 80px;\n  background: var(--red);\n}\n\n.vp-container {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n}\n\nheader {\n  padding: 0.5rem 1.5rem;\n  background: var(--header);\n  box-shadow: var(--box-shadow);\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: space-between;\n  line-height: 1.8rem;\n  align-items: center;\n}\nheader .header-menu {\n  justify-content: flex-end;\n  align-items: flex-end;\n  position: relative;\n}\nheader .header-menu ul {\n  display: flex;\n  text-align: center;\n}\n@media (max-width: 480px) {\n  header .header-menu ul {\n    display: none;\n  }\n}\n@media (max-width: 767px) {\n  header .header-menu ul {\n    display: none;\n  }\n}\n@media (min-width: 768px) and (max-width: 1200px) {\n  header .header-menu ul {\n    display: none;\n  }\n}\n@media (min-width: 1200px) {\n  header .header-menu ul {\n    display: none;\n  }\n}\nheader .header-menu ul li .header-nav {\n  font-size: 1.8rem;\n}\nheader .header-menu ul li .active {\n  font-weight: 700;\n  color: var(--red);\n}\nheader .header-menu .header-menu-icon {\n  font-size: 2rem;\n  color: #333;\n  cursor: pointer;\n}\nheader .header-menu .mobile-menu {\n  display: flex;\n  display: none;\n  position: absolute;\n  box-shadow: var(--box-shadow);\n  top: 2.5rem;\n  right: 0rem;\n  padding: 0.5rem 1.5rem;\n  width: 12rem;\n  background: var(--header);\n  border-radius: 10px;\n}\nheader .header-menu .mobile-menu ul {\n  display: block;\n}\nheader .header-menu .mobile-menu ul li {\n  margin: 2rem 0;\n}\nheader .header-menu .mobile-menu ul li a {\n  color: var(--text);\n}\nheader .header-menu .mobile-menu ul li a:hover {\n  color: var(--red);\n  border-bottom: 3px solid #111;\n  transition: 0.2s;\n  transform: translateY(3px);\n}\nheader .header-menu .mobile-menu ul li .active {\n  color: var(--red);\n  border-bottom: 3px solid #111;\n}\nheader .header-menu .mobile-menu.open {\n  display: block;\n}\n\n.vp-logo {\n  font-size: 2rem;\n  display: flex;\n  flex-flow: row nowrap;\n  justify-content: center;\n  align-items: center;\n}\n.vp-logo i {\n  color: var(--red);\n  margin-right: 0.9rem;\n  font-size: 3rem;\n  animation-name: moveForward;\n  animation-duration: 5s;\n  animation-timing-function: ease-in-out;\n}\n@media (max-width: 480px) {\n  .vp-logo i {\n    animation-duration: 0s;\n  }\n}\n@keyframes moveForward {\n  0% {\n    transform: translateX(0) rotate(0deg);\n  }\n  50% {\n    transform: translateX(280px) rotate(-45deg);\n  }\n  75% {\n    transform: translateX(280px) rotate(0deg);\n  }\n  100% {\n    transform: translateX(0) rotate(0deg);\n  }\n}\n.vp-logo p {\n  color: #111;\n}\n\n.button {\n  margin-top: 3rem;\n  transition: all 1s;\n}\n\n.btn {\n  padding: 15px 25px;\n  border-radius: 30px;\n  font-weight: 700;\n  font-size: 1.3rem;\n  box-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.3);\n}\n\n.btn-reserver {\n  background: #444;\n  color: white;\n}\n\n.button a {\n  text-decoration: none;\n}\n\n.button:hover {\n  transform: translateY(3px);\n}\n\n.button a:hover {\n  color: var(--red);\n}\n\n.button p {\n  margin-bottom: 4rem;\n}\n\nfooter {\n  background: #dcdde1;\n  padding: 1rem 1rem 1rem 1rem;\n  color: #222;\n  text-align: center;\n}\n\nfooter p {\n  margin-bottom: 0;\n}", "",{"version":3,"sources":["webpack://./src/assets/styles/styles.scss","webpack://./src/assets/styles/_variables.scss","webpack://./src/assets/styles/_reset.scss","webpack://./src/assets/styles/_media-queries.scss"],"names":[],"mappings":"AAAA,aAAA;ACAA,aAAA;AAEA;EACC,cAAA;EACA,eAAA;EACA,kBAAA;EACA,YAAA;EACA,iBAAA;EACA,kBAAA;EACA,gFAAA;EACA,oCAAA;ADCD;;AEXA,aAAA;AAEA;EACC,SAAA;EACA,UAAA;EACA,sBAAA;AFaD;;AEVA;EACC,gBAAA;AFaD;;AEVA;EACC,qBAAA;AFaD;;AG1BA;;;;EAAA;AAYA,uCAAA;AAOA,6CAAA;AAOA,kBAAA;AHpBA;EACC,+BAAA;EACA,0BAAA;EACA,kBAAA;AA+BD;;AA5BA;EACC,iBAAA;EACA,gBAAA;AA+BD;;AA5BA;EACC,eAAA;EACA,iBAAA;EACA,gBAAA;EACA,qBAAA;AA+BD;;AA5BA;EACC,eAAA;EACA,iBAAA;EACA,gBAAA;EACA,qBAAA;AA+BD;;AA5BA;EACC,iBAAA;EACA,WAAA;AA+BD;;AA5BA;EACC,WAAA;EACA,uBAAA;AA+BD;;AA5BA;EACC,WAAA;EACA,sBAAA;AA+BD;;AA1BA;EACC,iBAAA;EACA,aAAA;EACA,sBAAA;AA6BD;;AA1BA;EACC,sBAAA;EACA,yBAAA;EACA,6BAAA;EACA,aAAA;EACA,qBAAA;EACA,8BAAA;EACA,mBAAA;EACA,mBAAA;AA6BD;AA1BC;EAEC,yBAAA;EACA,qBAAA;EAEA,kBAAA;AA0BF;AAzBE;EAaC,aAAA;EACA,kBAAA;AAeH;AG7FC;EHgEC;IAEE,aAAA;EA+BF;AACF;AG3FC;EHyDC;IAKE,aAAA;EAiCF;AACF;AGzFC;EHkDC;IAQE,aAAA;EAmCF;AACF;AGvFC;EH2CC;IAWE,aAAA;EAqCF;AACF;AAjCI;EACC,iBAAA;AAmCL;AAjCI;EACC,gBAAA;EAEA,iBAAA;AAkCL;AA7BE;EACC,eAAA;EACA,WAAA;EAEA,eAAA;AA8BH;AA5BE;EACC,aAAA;EAGA,aAAA;EACA,kBAAA;EACA,6BAAA;EACA,WAAA;EACA,WAAA;EACA,sBAAA;EACA,YAAA;EAEA,yBAAA;EACA,mBAAA;AA2BH;AAzBG;EACC,cAAA;AA2BJ;AA1BI;EACC,cAAA;AA4BL;AA3BK;EACC,kBAAA;AA6BN;AA5BM;EACC,iBAAA;EACA,6BAAA;EACA,gBAAA;EACA,0BAAA;AA8BP;AA3BK;EACC,iBAAA;EACA,6BAAA;AA6BN;AAxBE;EACC,cAAA;AA0BH;;AArBA;EACC,eAAA;EACA,aAAA;EACA,qBAAA;EACA,uBAAA;EACA,mBAAA;AAwBD;AAtBC;EACC,iBAAA;EACA,oBAAA;EACA,eAAA;EAIA,2BAAA;EACA,sBAAA;EACA,sCAAA;AAqBF;AG/KC;EHiJA;IAKE,sBAAA;EA6BD;AACF;AAvBC;EACC;IACC,qCAAA;EAyBD;EApBA;IACC,2CAAA;EAsBD;EApBA;IACC,yCAAA;EAsBD;EApBA;IACC,qCAAA;EAsBD;AACF;AAnBC;EACC,WAAA;AAqBF;;AAjBA;EACC,gBAAA;EACA,kBAAA;AAoBD;;AAlBA;EACC,kBAAA;EACA,mBAAA;EACA,gBAAA;EACA,iBAAA;EACA,8CAAA;AAqBD;;AAlBA;EACC,gBAAA;EACA,YAAA;AAqBD;;AAnBA;EACC,qBAAA;AAsBD;;AAnBA;EACC,0BAAA;AAsBD;;AAnBA;EACC,iBAAA;AAsBD;;AAnBA;EACC,mBAAA;AAsBD;;AAnBA;EACC,mBAAA;EACA,4BAAA;EACA,WAAA;EACA,kBAAA;AAsBD;;AAnBA;EACC,gBAAA;AAsBD","sourcesContent":["/** @format */\n\n@import \"variables\";\n@import \"reset\";\n@import \"media-queries\";\n\nbody {\n\tfont-family: var(--font-family);\n\tbackground: var(--primary);\n\tcolor: var(--dark);\n}\n\nstrong {\n\tcolor: var(--red);\n\tfont-weight: 700;\n}\n\nh2 {\n\tfont-size: 2rem;\n\tcolor: var(--red);\n\tfont-weight: 700;\n\tmargin: 1rem 0 1rem 0;\n}\n\n.tarif {\n\tfont-size: 2rem;\n\tcolor: var(--red);\n\tfont-weight: 700;\n\tmargin: 1rem 0 1rem 0;\n}\n\n.separator {\n\tmargin: 1rem auto;\n\theight: 2px;\n}\n\n.blue {\n\twidth: 50px;\n\tbackground: var(--blue);\n}\n\n.red {\n\twidth: 80px;\n\tbackground: var(--red);\n}\n\n//header\n\n.vp-container {\n\tmin-height: 100vh;\n\tdisplay: flex;\n\tflex-direction: column;\n}\n\nheader {\n\tpadding: 0.5rem 1.5rem;\n\tbackground: var(--header);\n\tbox-shadow: var(--box-shadow);\n\tdisplay: flex;\n\tflex-flow: row nowrap;\n\tjustify-content: space-between;\n\tline-height: 1.8rem;\n\talign-items: center;\n\t//position: sticky;\n\n\t.header-menu {\n\t\t//display: flex;\n\t\tjustify-content: flex-end;\n\t\talign-items: flex-end;\n\n\t\tposition: relative;\n\t\tul {\n\t\t\t@include xs {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t\t@include sm {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t\t@include md {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t\t@include xl {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t\tdisplay: flex;\n\t\t\ttext-align: center;\n\t\t\tli {\n\t\t\t\t.header-nav {\n\t\t\t\t\tfont-size: 1.8rem;\n\t\t\t\t}\n\t\t\t\t.active {\n\t\t\t\t\tfont-weight: 700;\n\t\t\t\t\t//text-decoration: underline;\n\t\t\t\t\tcolor: var(--red);\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t.header-menu-icon {\n\t\t\tfont-size: 2rem;\n\t\t\tcolor: #333;\n\n\t\t\tcursor: pointer;\n\t\t}\n\t\t.mobile-menu {\n\t\t\tdisplay: flex;\n\t\t\t//justify-content: flex-end;\n\n\t\t\tdisplay: none;\n\t\t\tposition: absolute;\n\t\t\tbox-shadow: var(--box-shadow);\n\t\t\ttop: 2.5rem;\n\t\t\tright: 0rem;\n\t\t\tpadding: 0.5rem 1.5rem;\n\t\t\twidth: 12rem;\n\t\t\t// background: white;\n\t\t\tbackground: var(--header);\n\t\t\tborder-radius: 10px;\n\n\t\t\tul {\n\t\t\t\tdisplay: block;\n\t\t\t\tli {\n\t\t\t\t\tmargin: 2rem 0;\n\t\t\t\t\ta {\n\t\t\t\t\t\tcolor: var(--text);\n\t\t\t\t\t\t&:hover {\n\t\t\t\t\t\t\tcolor: var(--red);\n\t\t\t\t\t\t\tborder-bottom: 3px solid #111;\n\t\t\t\t\t\t\ttransition: 0.2s;\n\t\t\t\t\t\t\ttransform: translateY(3px);\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\t.active {\n\t\t\t\t\t\tcolor: var(--red);\n\t\t\t\t\t\tborder-bottom: 3px solid #111;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t.mobile-menu.open {\n\t\t\tdisplay: block;\n\t\t}\n\t}\n}\n\n.vp-logo {\n\tfont-size: 2rem;\n\tdisplay: flex;\n\tflex-flow: row nowrap;\n\tjustify-content: center;\n\talign-items: center;\n\n\ti {\n\t\tcolor: var(--red);\n\t\tmargin-right: 0.9rem;\n\t\tfont-size: 3rem;\n\t\t@include xs {\n\t\t\tanimation-duration: 0s;\n\t\t}\n\t\tanimation-name: moveForward;\n\t\tanimation-duration: 5s;\n\t\tanimation-timing-function: ease-in-out;\n\t}\n\n\t@keyframes moveForward {\n\t\t0% {\n\t\t\ttransform: translateX(0) rotate(0deg);\n\t\t}\n\t\t// 25% {\n\t\t// \ttransform: translateX(0px) rotate(-45deg);\n\t\t// }\n\t\t50% {\n\t\t\ttransform: translateX(280px) rotate(-45deg);\n\t\t}\n\t\t75% {\n\t\t\ttransform: translateX(280px) rotate(0deg);\n\t\t}\n\t\t100% {\n\t\t\ttransform: translateX(0) rotate(0deg);\n\t\t}\n\t}\n\n\tp {\n\t\tcolor: #111;\n\t}\n}\n\n.button {\n\tmargin-top: 3rem;\n\ttransition: all 1s;\n}\n.btn {\n\tpadding: 15px 25px;\n\tborder-radius: 30px;\n\tfont-weight: 700;\n\tfont-size: 1.3rem;\n\tbox-shadow: 2px 2px 2px 0px rgba(0, 0, 0, 0.3);\n}\n\n.btn-reserver {\n\tbackground: #444;\n\tcolor: white;\n}\n.button a {\n\ttext-decoration: none;\n}\n\n.button:hover {\n\ttransform: translateY(3px);\n}\n\n.button a:hover {\n\tcolor: var(--red);\n}\n\n.button p {\n\tmargin-bottom: 4rem;\n}\n\nfooter {\n\tbackground: #dcdde1;\n\tpadding: 1rem 1rem 1rem 1rem;\n\tcolor: #222;\n\ttext-align: center;\n}\n\nfooter p {\n\tmargin-bottom: 0;\n}\n","/** @format */\n\n:root {\n\t--red: #c23616;\n\t--blue: #40739e;\n\t--primary: #f5f6fa;\n\t--dark: #333;\n\t--header: #dcdde1;\n\t--panneau: #7f8c8d;\n\t--box-shadow: 0 1px 2px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%);\n\t--font-family: \"Comic Neue\", cursive;\n}\n","/** @format */\n\n* {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n}\n\nul {\n\tlist-style: none;\n}\n\na {\n\ttext-decoration: none;\n}\n","/**\n * /* Landscape phones and down\n *\n * @format\n */\n\n@mixin xs {\n\t@media (max-width: 480px) {\n\t\t@content;\n\t}\n}\n\n/* Landscape phone to portrait tablet */\n@mixin sm {\n\t@media (max-width: 767px) {\n\t\t@content;\n\t}\n}\n\n/* Portrait tablet to landscape and desktop */\n@mixin md {\n\t@media (min-width: 768px) and (max-width: 1200px) {\n\t\t@content;\n\t}\n}\n\n/* Large desktop */\n@mixin xl {\n\t@media (min-width: 1200px) {\n\t\t@content;\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/propos/propos.scss":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/propos/propos.scss ***!
  \*************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/** @format */\n/**\n * /* Landscape phones and down\n *\n * @format\n */\n/* Landscape phone to portrait tablet */\n/* Portrait tablet to landscape and desktop */\n/* Large desktop */\n.vp-presentation {\n  display: flex;\n  flex-flow: row nowrap;\n  background: #f5f6fa;\n}\n@media (max-width: 480px) {\n  .vp-presentation {\n    margin-top: 1rem;\n    flex-direction: column;\n    align-items: center;\n  }\n  .vp-presentation p {\n    margin: 1rem;\n  }\n}\n@media (max-width: 767px) {\n  .vp-presentation {\n    margin-top: 1rem;\n    flex-direction: column;\n    align-items: center;\n  }\n  .vp-presentation p {\n    margin: 1rem;\n  }\n}\n.vp-presentation img {\n  display: flex;\n  border-radius: 250px;\n}\n@media (max-width: 480px) {\n  .vp-presentation img {\n    max-width: 300px;\n  }\n}\n@media (max-width: 767px) {\n  .vp-presentation img {\n    max-width: 300px;\n  }\n}\n\n.vp-presentation-txt {\n  display: flex;\n  flex: 2;\n  flex-direction: column;\n  text-align: center;\n  justify-content: center;\n  font-size: 1.6rem;\n  color: var(--blue);\n}\n.vp-presentation-txt p {\n  margin: 2rem;\n}", "",{"version":3,"sources":["webpack://./src/propos/propos.scss","webpack://./src/assets/styles/_media-queries.scss"],"names":[],"mappings":"AAAA,aAAA;ACAA;;;;EAAA;AAYA,uCAAA;AAOA,6CAAA;AAOA,kBAAA;ADvBA;EACC,aAAA;EACA,qBAAA;EACA,mBAAA;AAOD;ACNC;EDJD;IAKE,gBAAA;IACA,sBAAA;IACA,mBAAA;EASA;EARA;IACC,YAAA;EAUD;AACF;ACTC;EDXD;IAaE,gBAAA;IAEA,sBAAA;IACA,mBAAA;EAUA;EATA;IACC,YAAA;EAWD;AACF;AATC;EACC,aAAA;EACA,oBAAA;AAWF;AC9BC;EDiBA;IAIE,gBAAA;EAaD;AACF;AC5BC;EDUA;IAOE,gBAAA;EAeD;AACF;;AAXA;EACC,aAAA;EACA,OAAA;EACA,sBAAA;EACA,kBAAA;EACA,uBAAA;EAEA,iBAAA;EACA,kBAAA;AAaD;AAZC;EACC,YAAA;AAcF","sourcesContent":["/** @format */\n@import \"../assets/styles/media-queries\";\n\n.vp-presentation {\n\tdisplay: flex;\n\tflex-flow: row nowrap;\n\tbackground: #f5f6fa;\n\t@include xs {\n\t\tmargin-top: 1rem;\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tp {\n\t\t\tmargin: 1rem;\n\t\t}\n\t}\n\t@include sm {\n\t\tmargin-top: 1rem;\n\n\t\tflex-direction: column;\n\t\talign-items: center;\n\t\tp {\n\t\t\tmargin: 1rem;\n\t\t}\n\t}\n\timg {\n\t\tdisplay: flex;\n\t\tborder-radius: 250px;\n\t\t@include xs {\n\t\t\tmax-width: 300px;\n\t\t}\n\t\t@include sm {\n\t\t\tmax-width: 300px;\n\t\t}\n\t}\n}\n\n.vp-presentation-txt {\n\tdisplay: flex;\n\tflex: 2;\n\tflex-direction: column;\n\ttext-align: center;\n\tjustify-content: center;\n\n\tfont-size: 1.6rem;\n\tcolor: var(--blue);\n\tp {\n\t\tmargin: 2rem;\n\t}\n}\n","/**\n * /* Landscape phones and down\n *\n * @format\n */\n\n@mixin xs {\n\t@media (max-width: 480px) {\n\t\t@content;\n\t}\n}\n\n/* Landscape phone to portrait tablet */\n@mixin sm {\n\t@media (max-width: 767px) {\n\t\t@content;\n\t}\n}\n\n/* Portrait tablet to landscape and desktop */\n@mixin md {\n\t@media (min-width: 768px) and (max-width: 1200px) {\n\t\t@content;\n\t}\n}\n\n/* Large desktop */\n@mixin xl {\n\t@media (min-width: 1200px) {\n\t\t@content;\n\t}\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/assets/styles/styles.scss":
/*!***************************************!*\
  !*** ./src/assets/styles/styles.scss ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/assets/styles/styles.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/propos/propos.scss":
/*!********************************!*\
  !*** ./src/propos/propos.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_propos_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./propos.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/propos/propos.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_propos_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_propos_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_propos_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_propos_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/propos/propos.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_styles_styles_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/styles/styles.scss */ "./src/assets/styles/styles.scss");
/* harmony import */ var _propos_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./propos.scss */ "./src/propos/propos.scss");
/** @format */


})();

/******/ })()
;
//# sourceMappingURL=propos.bundle.js.map