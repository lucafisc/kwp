"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/error",{

/***/ "(app-pages-browser)/./src/app/error.tsx":
/*!***************************!*\
  !*** ./src/app/error.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\nconst ErrorPage = (param)=>{\n    let { statusCode } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: \"my-auto h-full\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-full h-full flex flex-col justify-center items-center\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-4xl font-bold mb-4\",\n                    children: [\n                        \"Error \",\n                        statusCode\n                    ]\n                }, void 0, true, {\n                    fileName: \"/Users/lucafischer/repos/kwp/src/app/error.tsx\",\n                    lineNumber: 9,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-lg mb-6\",\n                    children: \"Oops! Something went wrong on our end. Please try again later.\"\n                }, void 0, false, {\n                    fileName: \"/Users/lucafischer/repos/kwp/src/app/error.tsx\",\n                    lineNumber: 10,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    href: \"/\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        className: \"text-blue-500 hover:underline\",\n                        children: \"Go back to the home page\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lucafischer/repos/kwp/src/app/error.tsx\",\n                        lineNumber: 14,\n                        columnNumber: 11\n                    }, undefined)\n                }, void 0, false, {\n                    fileName: \"/Users/lucafischer/repos/kwp/src/app/error.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"/Users/lucafischer/repos/kwp/src/app/error.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/Users/lucafischer/repos/kwp/src/app/error.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, undefined);\n};\n_c = ErrorPage;\nErrorPage.getInitialProps = (param)=>{\n    let { res, err } = param;\n    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;\n    return {\n        statusCode\n    };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (ErrorPage);\nvar _c;\n$RefreshReg$(_c, \"ErrorPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvZXJyb3IudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDMEI7QUFDRztBQUU3QixNQUFNRSxZQUFZO1FBQUMsRUFBRUMsVUFBVSxFQUFFO0lBQy9CLHFCQUNFLDhEQUFDQztRQUFLQyxXQUFVO2tCQUNkLDRFQUFDQztZQUFJRCxXQUFVOzs4QkFDYiw4REFBQ0U7b0JBQUdGLFdBQVU7O3dCQUEwQjt3QkFBT0Y7Ozs7Ozs7OEJBQy9DLDhEQUFDSztvQkFBRUgsV0FBVTs4QkFBZTs7Ozs7OzhCQUc1Qiw4REFBQ0osa0RBQUlBO29CQUFDUSxNQUFLOzhCQUNULDRFQUFDQzt3QkFBRUwsV0FBVTtrQ0FBZ0M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLdkQ7S0FkTUg7QUFnQk5BLFVBQVVTLGVBQWUsR0FBRztRQUFDLEVBQUVDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3ZDLE1BQU1WLGFBQWFTLE1BQU1BLElBQUlULFVBQVUsR0FBR1UsTUFBTUEsSUFBSVYsVUFBVSxHQUFHO0lBQ2pFLE9BQU87UUFBRUE7SUFBVztBQUN0QjtBQUVBLCtEQUFlRCxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvZXJyb3IudHN4PzM2NTkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcblxuY29uc3QgRXJyb3JQYWdlID0gKHsgc3RhdHVzQ29kZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPG1haW4gY2xhc3NOYW1lPVwibXktYXV0byBoLWZ1bGxcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtZnVsbCBmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC00eGwgZm9udC1ib2xkIG1iLTRcIj5FcnJvciB7c3RhdHVzQ29kZX08L2gxPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWxnIG1iLTZcIj5cbiAgICAgICAgICBPb3BzISBTb21ldGhpbmcgd2VudCB3cm9uZyBvbiBvdXIgZW5kLiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlxuICAgICAgICA8L3A+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGEgY2xhc3NOYW1lPVwidGV4dC1ibHVlLTUwMCBob3Zlcjp1bmRlcmxpbmVcIj5HbyBiYWNrIHRvIHRoZSBob21lIHBhZ2U8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICAgIDwvZGl2PlxuICAgIDwvbWFpbj5cbiAgKTtcbn07XG5cbkVycm9yUGFnZS5nZXRJbml0aWFsUHJvcHMgPSAoeyByZXMsIGVyciB9KSA9PiB7XG4gIGNvbnN0IHN0YXR1c0NvZGUgPSByZXMgPyByZXMuc3RhdHVzQ29kZSA6IGVyciA/IGVyci5zdGF0dXNDb2RlIDogNDA0O1xuICByZXR1cm4geyBzdGF0dXNDb2RlIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBFcnJvclBhZ2U7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJMaW5rIiwiRXJyb3JQYWdlIiwic3RhdHVzQ29kZSIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJoMSIsInAiLCJocmVmIiwiYSIsImdldEluaXRpYWxQcm9wcyIsInJlcyIsImVyciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/error.tsx\n"));

/***/ })

});