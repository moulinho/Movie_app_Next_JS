webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ \"./node_modules/@babel/runtime/helpers/esm/extends.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _lib_Context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/Context */ \"./lib/Context.js\");\n\nvar _this = undefined,\n  _jsxFileName = \"/home/sereme/Bureau/FormAlphorm/nextJs/Alphorm.com-Ressources-Formation-NextJS-Developper-des-Applications-Universelles/Le SSR en pratique et d\\xE9mos/final/components/Header.js\",\n  _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;\n\n\nvar Links = function Links(_ref) {\n  var children = _ref.children,\n    query = _ref.query,\n    name = _ref.name;\n  return query !== \"\" ? __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: {\n      pathname: \"/\".concat(name),\n      query: {\n        query: query\n      }\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }, children) : __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n    href: {\n      pathname: \"/\".concat(name)\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }\n  }, children);\n};\n_c = Links;\nvar Header = function Header() {\n  _s();\n  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(_lib_Context__WEBPACK_IMPORTED_MODULE_3__[\"Context\"]),\n    setActive = _React$useContext.setActive,\n    _React$useContext$sta = _React$useContext.state,\n    links = _React$useContext$sta.links,\n    active = _React$useContext$sta.active,\n    query = _React$useContext$sta.query;\n  return __jsx(\"ul\", {\n    className: \"nav nav-pills nav-fill\",\n    style: {\n      marginBottom: \"20px\"\n    },\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 5\n    }\n  }, links.map(function (link, i) {\n    return __jsx(\"li\", {\n      className: \"nav-item\",\n      onClick: function onClick() {\n        return setActive(link);\n      },\n      key: i,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 11\n      }\n    }, __jsx(Links, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({}, link, {\n      query: query,\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 13\n      }\n    }), __jsx(\"span\", {\n      className: \"nav-link \".concat(link.name === active.name && \"isActive\"),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 15\n      }\n    }, __jsx(\"i\", {\n      className: \"fas fa-\".concat(link.icon),\n      __self: _this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 30,\n        columnNumber: 17\n      }\n    }), \" \\xA0 \", link.name, \" \")));\n  }));\n};\n_s(Header, \"jZv+4vs3ZWdR4gHRqVSI2hpwdto=\");\n_c2 = Header;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\nvar _c, _c2;\n$RefreshReg$(_c, \"Links\");\n$RefreshReg$(_c2, \"Header\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9IZWFkZXIuanM/NmY0YSJdLCJuYW1lcyI6WyJMaW5rcyIsImNoaWxkcmVuIiwicXVlcnkiLCJuYW1lIiwicGF0aG5hbWUiLCJIZWFkZXIiLCJSZWFjdCIsInVzZUNvbnRleHQiLCJDb250ZXh0Iiwic2V0QWN0aXZlIiwic3RhdGUiLCJsaW5rcyIsImFjdGl2ZSIsIm1hcmdpbkJvdHRvbSIsIm1hcCIsImxpbmsiLCJpIiwiaWNvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUE2QjtBQUNZO0FBRXpDLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFLLE9BQWtDO0VBQUEsSUFBNUJDLFFBQVEsUUFBUkEsUUFBUTtJQUFFQyxLQUFLLFFBQUxBLEtBQUs7SUFBRUMsSUFBSSxRQUFKQSxJQUFJO0VBQ3BDLE9BQU9ELEtBQUssS0FBSyxFQUFFLEdBQ2pCLE1BQUMsZ0RBQUk7SUFBQyxJQUFJLEVBQUU7TUFBRUUsUUFBUSxhQUFNRCxJQUFJLENBQUU7TUFBRUQsS0FBSyxFQUFFO1FBQUVBLEtBQUssRUFBRUE7TUFBTTtJQUFFLENBQUU7SUFBQTtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFBQSxHQUMzREQsUUFBUSxDQUNKLEdBRVAsTUFBQyxnREFBSTtJQUFDLElBQUksRUFBRTtNQUFFRyxRQUFRLGFBQU1ELElBQUk7SUFBRyxDQUFFO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FBRUYsUUFBUSxDQUNoRDtBQUNILENBQUM7QUFBQyxLQVJJRCxLQUFLO0FBVVgsSUFBTUssTUFBTSxHQUFHLFNBQVRBLE1BQU0sR0FBUztFQUFBO0VBQ25CLHdCQUdJQyw0Q0FBSyxDQUFDQyxVQUFVLENBQUNDLG9EQUFPLENBQUM7SUFGM0JDLFNBQVMscUJBQVRBLFNBQVM7SUFBQSwwQ0FDVEMsS0FBSztJQUFJQyxLQUFLLHlCQUFMQSxLQUFLO0lBQUVDLE1BQU0seUJBQU5BLE1BQU07SUFBRVYsS0FBSyx5QkFBTEEsS0FBSztFQUUvQixPQUNFO0lBQUksU0FBUyxFQUFDLHdCQUF3QjtJQUFDLEtBQUssRUFBRTtNQUFFVyxZQUFZLEVBQUU7SUFBTyxDQUFFO0lBQUE7SUFBQTtNQUFBO01BQUE7TUFBQTtJQUFBO0VBQUEsR0FDcEVGLEtBQUssQ0FBQ0csR0FBRyxDQUFDLFVBQUNDLElBQUksRUFBRUMsQ0FBQyxFQUFLO0lBQ3RCLE9BQ0U7TUFBSSxTQUFTLEVBQUMsVUFBVTtNQUFDLE9BQU8sRUFBRTtRQUFBLE9BQU1QLFNBQVMsQ0FBQ00sSUFBSSxDQUFDO01BQUEsQ0FBQztNQUFDLEdBQUcsRUFBRUMsQ0FBRTtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLEdBQzlELE1BQUMsS0FBSyx5RkFBS0QsSUFBSTtNQUFFLEtBQUssRUFBRWIsS0FBTTtNQUFBO01BQUE7UUFBQTtRQUFBO1FBQUE7TUFBQTtJQUFBLElBQzVCO01BQ0UsU0FBUyxxQkFDUGEsSUFBSSxDQUFDWixJQUFJLEtBQUtTLE1BQU0sQ0FBQ1QsSUFBSSxJQUFJLFVBQVUsQ0FDdEM7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxHQUVIO01BQUcsU0FBUyxtQkFBWVksSUFBSSxDQUFDRSxJQUFJLENBQUc7TUFBQTtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFBQSxFQUFLLFVBQVEsRUFBQ0YsSUFBSSxDQUFDWixJQUFJLEVBQUUsR0FBRyxDQUMzRCxDQUNELENBQ0w7RUFFVCxDQUFDLENBQUMsQ0FDQztBQUVULENBQUM7QUFBQyxHQXhCSUUsTUFBTTtBQUFBLE1BQU5BLE1BQU07QUF5QkdBLHFFQUFNLEVBQUM7QUFBQTtBQUFBO0FBQUEiLCJmaWxlIjoiLi9jb21wb25lbnRzL0hlYWRlci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi4vbGliL0NvbnRleHRcIjtcblxuY29uc3QgTGlua3MgPSAoeyBjaGlsZHJlbiwgcXVlcnksIG5hbWUgfSkgPT4ge1xuICByZXR1cm4gcXVlcnkgIT09IFwiXCIgPyAoXG4gICAgPExpbmsgaHJlZj17eyBwYXRobmFtZTogYC8ke25hbWV9YCwgcXVlcnk6IHsgcXVlcnk6IHF1ZXJ5IH0gfX0+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgPC9MaW5rPlxuICApIDogKFxuICAgIDxMaW5rIGhyZWY9e3sgcGF0aG5hbWU6IGAvJHtuYW1lfWAgfX0+e2NoaWxkcmVufTwvTGluaz5cbiAgKTtcbn07XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IHtcbiAgY29uc3Qge1xuICAgIHNldEFjdGl2ZSxcbiAgICBzdGF0ZTogeyBsaW5rcywgYWN0aXZlLCBxdWVyeSB9LFxuICB9ID0gUmVhY3QudXNlQ29udGV4dChDb250ZXh0KTtcbiAgcmV0dXJuIChcbiAgICA8dWwgY2xhc3NOYW1lPVwibmF2IG5hdi1waWxscyBuYXYtZmlsbFwiIHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogXCIyMHB4XCIgfX0+XG4gICAgICB7bGlua3MubWFwKChsaW5rLCBpKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT1cIm5hdi1pdGVtXCIgb25DbGljaz17KCkgPT4gc2V0QWN0aXZlKGxpbmspfSBrZXk9e2l9PlxuICAgICAgICAgICAgPExpbmtzIHsuLi5saW5rfSBxdWVyeT17cXVlcnl9PlxuICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YG5hdi1saW5rICR7XG4gICAgICAgICAgICAgICAgICBsaW5rLm5hbWUgPT09IGFjdGl2ZS5uYW1lICYmIFwiaXNBY3RpdmVcIlxuICAgICAgICAgICAgICAgIH1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPXtgZmFzIGZhLSR7bGluay5pY29ufWB9PjwvaT4gJm5ic3A7IHtsaW5rLm5hbWV9e1wiIFwifVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L0xpbmtzPlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICk7XG4gICAgICB9KX1cbiAgICA8L3VsPlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Header.js\n");

/***/ })

})