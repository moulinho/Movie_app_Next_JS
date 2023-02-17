module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/serie.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Card.js":
/*!****************************!*\
  !*** ./components/Card.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/home/sereme/Bureau/FormAlphorm/nextJs/Alphorm.com-Ressources-Formation-NextJS-Developper-des-Applications-Universelles/Le SSR en pratique et d\\xE9mos/final/components/Card.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\nconst placeholderImg = \"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDsfRCwQvpsd4O5b6IK9evG9H1PTxZLoI6ew5iVnlz3ftQjMBQ\";\nconst Card = ({\n  Title,\n  Poster,\n  Year,\n  imdbID\n}) => {\n  return __jsx(\"div\", {\n    className: \"card\",\n    style: {\n      marginBottom: \"10px\"\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 5,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"card-body d-flex justify-content-between\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"d-flex align-items-start\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 9\n    }\n  }, __jsx(\"a\", {\n    href: `https://www.imdb.com/title/${imdbID}`,\n    target: \"_blank\",\n    style: {\n      color: \"#9b59b6\"\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 11\n    }\n  }, __jsx(\"img\", {\n    className: \"mr-2 rounded\",\n    src: Poster === \"N/A\" ? placeholderImg : Poster,\n    alt: \"placeholder\",\n    width: \"100\",\n    height: \"130\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 13\n    }\n  }), __jsx(\"span\", {\n    className: \"title\",\n    style: {\n      fontSize: \"20px\"\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 13\n    }\n  }, Title))), __jsx(\"p\", {\n    style: {\n      fontSize: \"20px\"\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 9\n    }\n  }, Year)));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Card);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0NhcmQuanM/ZGNjYiJdLCJuYW1lcyI6WyJwbGFjZWhvbGRlckltZyIsIkNhcmQiLCJUaXRsZSIsIlBvc3RlciIsIlllYXIiLCJpbWRiSUQiLCJtYXJnaW5Cb3R0b20iLCJjb2xvciIsImZvbnRTaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxNQUFNQSxjQUFjLEdBQ2xCLDRHQUE0RztBQUM5RyxNQUFNQyxJQUFJLEdBQUcsQ0FBQztFQUFFQyxLQUFLO0VBQUVDLE1BQU07RUFBRUMsSUFBSTtFQUFFQztBQUFPLENBQUMsS0FBSztFQUNoRCxPQUNFO0lBQUssU0FBUyxFQUFDLE1BQU07SUFBQyxLQUFLLEVBQUU7TUFBRUMsWUFBWSxFQUFFO0lBQU8sQ0FBRTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ3BEO0lBQUssU0FBUyxFQUFDLDBDQUEwQztJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ3ZEO0lBQUssU0FBUyxFQUFDLDBCQUEwQjtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQ3ZDO0lBQ0UsSUFBSSxFQUFHLDhCQUE2QkQsTUFBTyxFQUFFO0lBQzdDLE1BQU0sRUFBQyxRQUFRO0lBQ2YsS0FBSyxFQUFFO01BQUVFLEtBQUssRUFBRTtJQUFVLENBQUU7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUU1QjtJQUNFLFNBQVMsRUFBQyxjQUFjO0lBQ3hCLEdBQUcsRUFBRUosTUFBTSxLQUFLLEtBQUssR0FBR0gsY0FBYyxHQUFHRyxNQUFPO0lBQ2hELEdBQUcsRUFBQyxhQUFhO0lBQ2pCLEtBQUssRUFBQyxLQUFLO0lBQ1gsTUFBTSxFQUFDLEtBQUs7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxFQUNaLEVBRUY7SUFBTSxTQUFTLEVBQUMsT0FBTztJQUFDLEtBQUssRUFBRTtNQUFFSyxRQUFRLEVBQUU7SUFBTyxDQUFFO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDakROLEtBQUssQ0FDRCxDQUNMLENBQ0EsRUFDTjtJQUFHLEtBQUssRUFBRTtNQUFFTSxRQUFRLEVBQUU7SUFBTyxDQUFFO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FBRUosSUFBSSxDQUFLLENBQ3RDLENBQ0Y7QUFFVixDQUFDO0FBQ2NILG1FQUFJIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DYXJkLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgcGxhY2Vob2xkZXJJbWcgPVxuICBcImh0dHBzOi8vZW5jcnlwdGVkLXRibjAuZ3N0YXRpYy5jb20vaW1hZ2VzP3E9dGJuJTNBQU5kOUdjUURzZlJDd1F2cHNkNE81YjZJSzlldkc5SDFQVHhaTG9JNmV3NWlWbmx6M2Z0UWpNQlFcIjtcbmNvbnN0IENhcmQgPSAoeyBUaXRsZSwgUG9zdGVyLCBZZWFyLCBpbWRiSUQgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZFwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIxMHB4XCIgfX0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtc3RhcnRcIj5cbiAgICAgICAgICA8YVxuICAgICAgICAgICAgaHJlZj17YGh0dHBzOi8vd3d3LmltZGIuY29tL3RpdGxlLyR7aW1kYklEfWB9XG4gICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiIzliNTliNlwiIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtci0yIHJvdW5kZWRcIlxuICAgICAgICAgICAgICBzcmM9e1Bvc3RlciA9PT0gXCJOL0FcIiA/IHBsYWNlaG9sZGVySW1nIDogUG9zdGVyfVxuICAgICAgICAgICAgICBhbHQ9XCJwbGFjZWhvbGRlclwiXG4gICAgICAgICAgICAgIHdpZHRoPVwiMTAwXCJcbiAgICAgICAgICAgICAgaGVpZ2h0PVwiMTMwXCJcbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRpdGxlXCIgc3R5bGU9e3sgZm9udFNpemU6IFwiMjBweFwiIH19PlxuICAgICAgICAgICAgICB7VGl0bGV9XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHAgc3R5bGU9e3sgZm9udFNpemU6IFwiMjBweFwiIH19PntZZWFyfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IENhcmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Card.js\n");

/***/ }),

/***/ "./components/List.js":
/*!****************************!*\
  !*** ./components/List.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Card */ \"./components/Card.js\");\nvar _jsxFileName = \"/home/sereme/Bureau/FormAlphorm/nextJs/Alphorm.com-Ressources-Formation-NextJS-Developper-des-Applications-Universelles/Le SSR en pratique et d\\xE9mos/final/components/List.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\nfunction _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\n\nconst List = props => {\n  console.log('props', props);\n  // if (!props.results.length) return <p>No Results :( </p>; \n  return __jsx(\"div\", {\n    style: {\n      height: \"calc(100vh - 180px)\",\n      overflow: \"scroll\"\n    },\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }\n  }, props.results && props.results.map((result, i) => __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _extends({}, result, {\n    key: i,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 57\n    }\n  }))));\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (List);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0xpc3QuanM/MGQ2YyJdLCJuYW1lcyI6WyJMaXN0IiwicHJvcHMiLCJjb25zb2xlIiwibG9nIiwiaGVpZ2h0Iiwib3ZlcmZsb3ciLCJyZXN1bHRzIiwibWFwIiwicmVzdWx0IiwiaSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBaUM7QUFDSztBQUV0QyxNQUFNQSxJQUFJLEdBQUlDLEtBQUssSUFBSztFQUN0QkMsT0FBTyxDQUFDQyxHQUFHLENBQUMsT0FBTyxFQUFDRixLQUFLLENBQUM7RUFDMUI7RUFDQSxPQUNFO0lBQUssS0FBSyxFQUFFO01BQUVHLE1BQU0sRUFBRSxxQkFBcUI7TUFBRUMsUUFBUSxFQUFFO0lBQVMsQ0FBRTtJQUFBO0lBQUE7TUFBQTtNQUFBO01BQUE7SUFBQTtFQUFBLEdBQy9ESixLQUFLLENBQUNLLE9BQU8sSUFBSUwsS0FBSyxDQUFDSyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFDQyxNQUFNLEVBQUNDLENBQUMsS0FBSyxNQUFDLHdEQUFJLGVBQUtELE1BQU07SUFBRyxHQUFHLEVBQUVDLENBQUU7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUFFLENBQUMsQ0FDM0U7QUFFVixDQUFDO0FBRWNULG1FQUFJIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9MaXN0LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuLi9jb21wb25lbnRzL0NhcmRcIjtcblxuY29uc3QgTGlzdCA9IChwcm9wcykgPT4ge1xuICBjb25zb2xlLmxvZygncHJvcHMnLHByb3BzKTtcbiAgLy8gaWYgKCFwcm9wcy5yZXN1bHRzLmxlbmd0aCkgcmV0dXJuIDxwPk5vIFJlc3VsdHMgOiggPC9wPjsgXG4gIHJldHVybiAoXG4gICAgPGRpdiBzdHlsZT17eyBoZWlnaHQ6IFwiY2FsYygxMDB2aCAtIDE4MHB4KVwiLCBvdmVyZmxvdzogXCJzY3JvbGxcIiB9fT5cbiAgICAgIHtwcm9wcy5yZXN1bHRzICYmIHByb3BzLnJlc3VsdHMubWFwKChyZXN1bHQsaSkgPT4gPENhcmQgey4uLnJlc3VsdH0gIGtleT17aX0vPil9XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBMaXN0O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/List.js\n");

/***/ }),

/***/ "./pages/serie.js":
/*!************************!*\
  !*** ./pages/serie.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! node-fetch */ \"node-fetch\");\n/* harmony import */ var node_fetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(node_fetch__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_List__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/List */ \"./components/List.js\");\nvar _jsxFileName = \"/home/sereme/Bureau/FormAlphorm/nextJs/Alphorm.com-Ressources-Formation-NextJS-Developper-des-Applications-Universelles/Le SSR en pratique et d\\xE9mos/final/pages/serie.js\";\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\n\n\nfunction Serie({\n  results\n}) {\n  console.log({\n    results\n  });\n  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_components_List__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    results: results,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }));\n}\nSerie.getInitialProps = async _ref => {\n  var _ctx$query$query, _ctx$query, _await$response$json, _data$Search;\n  let {\n      req,\n      res,\n      match,\n      history,\n      location\n    } = _ref,\n    ctx = _objectWithoutProperties(_ref, [\"req\", \"res\", \"match\", \"history\", \"location\"]);\n  const search = (_ctx$query$query = ctx === null || ctx === void 0 ? void 0 : (_ctx$query = ctx.query) === null || _ctx$query === void 0 ? void 0 : _ctx$query.query) !== null && _ctx$query$query !== void 0 ? _ctx$query$query : \"\";\n  // Get external data from the file system, API, DB, etc.\n  const response = await node_fetch__WEBPACK_IMPORTED_MODULE_1___default()(`http://www.omdbapi.com/?apikey=158fe49&s=${search}&type=series`);\n  const data = (_await$response$json = await response.json()) !== null && _await$response$json !== void 0 ? _await$response$json : [];\n  const results = (_data$Search = data.Search) !== null && _data$Search !== void 0 ? _data$Search : [];\n\n  // The value of the `props` key will be\n  //  passed to the `Home` component\n  return {\n    results\n  };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (Serie);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9zZXJpZS5qcz82NTc4Il0sIm5hbWVzIjpbIlNlcmllIiwicmVzdWx0cyIsImNvbnNvbGUiLCJsb2ciLCJnZXRJbml0aWFsUHJvcHMiLCJyZXEiLCJyZXMiLCJtYXRjaCIsImhpc3RvcnkiLCJsb2NhdGlvbiIsImN0eCIsInNlYXJjaCIsInF1ZXJ5IiwicmVzcG9uc2UiLCJmZXRjaCIsImRhdGEiLCJqc29uIiwiU2VhcmNoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUErQjtBQUVPO0FBQ3RDLFNBQVNBLEtBQUssQ0FBQztFQUFFQztBQUFRLENBQUMsRUFBRTtFQUMxQkMsT0FBTyxDQUFDQyxHQUFHLENBQUM7SUFBRUY7RUFBUSxDQUFDLENBQUM7RUFDeEIsT0FDRSxtRUFDRSxNQUFDLHdEQUFJO0lBQUMsT0FBTyxFQUFFQSxPQUFRO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsRUFBRyxDQUN6QjtBQUVQO0FBQ0FELEtBQUssQ0FBQ0ksZUFBZSxHQUFHLGNBT2xCO0VBQUE7RUFBQSxJQVB5QjtNQUM3QkMsR0FBRztNQUNIQyxHQUFHO01BQ0hDLEtBQUs7TUFDTEMsT0FBTztNQUNQQztJQUVGLENBQUM7SUFESUMsR0FBRztFQUVOLE1BQU1DLE1BQU0sdUJBQUdELEdBQUcsYUFBSEEsR0FBRyxxQ0FBSEEsR0FBRyxDQUFFRSxLQUFLLCtDQUFWLFdBQVlBLEtBQUssK0RBQUksRUFBRTtFQUN0QztFQUNBLE1BQU1DLFFBQVEsR0FBRyxNQUFNQyxpREFBSyxDQUN6Qiw0Q0FBMkNILE1BQU8sY0FBYSxDQUNqRTtFQUNELE1BQU1JLElBQUksMkJBQUksTUFBTUYsUUFBUSxDQUFDRyxJQUFJLEVBQUUsdUVBQUssRUFBRTtFQUMxQyxNQUFNZixPQUFPLG1CQUFHYyxJQUFJLENBQUNFLE1BQU0sdURBQUksRUFBRTs7RUFFakM7RUFDQTtFQUNBLE9BQU87SUFDTGhCO0VBQ0YsQ0FBQztBQUNILENBQUM7QUFDY0Qsb0VBQUsiLCJmaWxlIjoiLi9wYWdlcy9zZXJpZS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmZXRjaCBmcm9tIFwibm9kZS1mZXRjaFwiO1xuXG5pbXBvcnQgTGlzdCBmcm9tIFwiLi4vY29tcG9uZW50cy9MaXN0XCI7XG5mdW5jdGlvbiBTZXJpZSh7IHJlc3VsdHMgfSkge1xuICBjb25zb2xlLmxvZyh7IHJlc3VsdHMgfSk7XG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMaXN0IHJlc3VsdHM9e3Jlc3VsdHN9IC8+XG4gICAgPC8+XG4gICk7XG59XG5TZXJpZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoe1xuICByZXEsXG4gIHJlcyxcbiAgbWF0Y2gsXG4gIGhpc3RvcnksXG4gIGxvY2F0aW9uLFxuICAuLi5jdHhcbn0pID0+IHtcbiAgY29uc3Qgc2VhcmNoID0gY3R4Py5xdWVyeT8ucXVlcnkgPz8gXCJcIjtcbiAgLy8gR2V0IGV4dGVybmFsIGRhdGEgZnJvbSB0aGUgZmlsZSBzeXN0ZW0sIEFQSSwgREIsIGV0Yy5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cDovL3d3dy5vbWRiYXBpLmNvbS8/YXBpa2V5PTE1OGZlNDkmcz0ke3NlYXJjaH0mdHlwZT1zZXJpZXNgXG4gICk7XG4gIGNvbnN0IGRhdGEgPSAoYXdhaXQgcmVzcG9uc2UuanNvbigpKSA/PyBbXTtcbiAgY29uc3QgcmVzdWx0cyA9IGRhdGEuU2VhcmNoID8/IFtdO1xuXG4gIC8vIFRoZSB2YWx1ZSBvZiB0aGUgYHByb3BzYCBrZXkgd2lsbCBiZVxuICAvLyAgcGFzc2VkIHRvIHRoZSBgSG9tZWAgY29tcG9uZW50XG4gIHJldHVybiB7XG4gICAgcmVzdWx0cyxcbiAgfTtcbn07XG5leHBvcnQgZGVmYXVsdCBTZXJpZTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/serie.js\n");

/***/ }),

/***/ "node-fetch":
/*!*****************************!*\
  !*** external "node-fetch" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"node-fetch\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJub2RlLWZldGNoXCI/NWNkNSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSIsImZpbGUiOiJub2RlLWZldGNoLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibm9kZS1mZXRjaFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///node-fetch\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });