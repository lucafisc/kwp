"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/press/page",{

/***/ "(app-pages-browser)/./src/components/ClippingCard.tsx":
/*!*****************************************!*\
  !*** ./src/components/ClippingCard.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FilmCard; },\n/* harmony export */   notoSerif: function() { return /* reexport default from dynamic */ next_font_google_target_css_path_src_components_ClippingCard_tsx_import_Noto_Serif_arguments_subsets_latin_variableName_notoSerif___WEBPACK_IMPORTED_MODULE_5___default.a; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_font_google_target_css_path_src_components_ClippingCard_tsx_import_Noto_Serif_arguments_subsets_latin_variableName_notoSerif___WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src/components/ClippingCard.tsx\",\"import\":\"Noto_Serif\",\"arguments\":[{\"subsets\":[\"latin\"]}],\"variableName\":\"notoSerif\"} */ \"(app-pages-browser)/./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src/components/ClippingCard.tsx\\\",\\\"import\\\":\\\"Noto_Serif\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"notoSerif\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_components_ClippingCard_tsx_import_Noto_Serif_arguments_subsets_latin_variableName_notoSerif___WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_components_ClippingCard_tsx_import_Noto_Serif_arguments_subsets_latin_variableName_notoSerif___WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Line */ \"(app-pages-browser)/./src/components/Line.tsx\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* __next_internal_client_entry_do_not_use__ notoSerif,default auto */ \n\n\n\n\n\nconst cardVariants = {\n    hidden: {\n        opacity: 0,\n        y: 50\n    },\n    visible: (index)=>({\n            opacity: 1,\n            y: 0,\n            transition: {\n                ease: \"easeOut\",\n                duration: 0.5,\n                delay: index * 0\n            }\n        })\n};\nfunction FilmCard(param) {\n    let { pressClipping, index } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            index === 0 && appearingLine(),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n                initial: \"hidden\",\n                animate: \"visible\",\n                variants: cardVariants,\n                custom: index,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    href: pressClipping.link,\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"grid grid-cols-5 gap-4 py-4 group text-black cursor-pointer\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"col-span-1\",\n                                children: pressClipping.pressDate\n                            }, void 0, false, {\n                                fileName: \"/home/lde-ross/repos/kwp/src/components/ClippingCard.tsx\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"col-span-3 group-hover:font-bold transition-all\",\n                                children: pressClipping.title\n                            }, void 0, false, {\n                                fileName: \"/home/lde-ross/repos/kwp/src/components/ClippingCard.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"col-span-1 text-right\",\n                                children: pressClipping.pressAuthor\n                            }, void 0, false, {\n                                fileName: \"/home/lde-ross/repos/kwp/src/components/ClippingCard.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/lde-ross/repos/kwp/src/components/ClippingCard.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/lde-ross/repos/kwp/src/components/ClippingCard.tsx\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/lde-ross/repos/kwp/src/components/ClippingCard.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            appearingLine()\n        ]\n    }, void 0, true);\n    function appearingLine() {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n            initial: {\n                opacity: 0\n            },\n            animate: {\n                opacity: 1\n            },\n            exit: {\n                opacity: 0\n            },\n            transition: {\n                duration: 0.8,\n                ease: \"easeIn\",\n                delay: 0.2\n            },\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Line__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                borderSize: 1\n            }, void 0, false, {\n                fileName: \"/home/lde-ross/repos/kwp/src/components/ClippingCard.tsx\",\n                lineNumber: 58,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/lde-ross/repos/kwp/src/components/ClippingCard.tsx\",\n            lineNumber: 52,\n            columnNumber: 12\n        }, this);\n    }\n}\n_c = FilmCard;\n\nvar _c;\n$RefreshReg$(_c, \"FilmCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0NsaXBwaW5nQ2FyZC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBUWFBO0FBUGE7QUFDQTtBQUdHO0FBQ1U7QUFTdkMsTUFBTUssZUFBZTtJQUNuQkMsUUFBUTtRQUFFQyxTQUFTO1FBQUdDLEdBQUc7SUFBRztJQUM1QkMsU0FBUyxDQUFDQyxRQUFtQjtZQUMzQkgsU0FBUztZQUNUQyxHQUFHO1lBQ0hHLFlBQVk7Z0JBQUVDLE1BQU07Z0JBQVdDLFVBQVU7Z0JBQUtDLE9BQU9KLFFBQVE7WUFBRTtRQUNqRTtBQUNGO0FBRWUsU0FBU0ssU0FBUyxLQUErQjtRQUEvQixFQUFFQyxhQUFhLEVBQUVOLEtBQUssRUFBUyxHQUEvQjtJQUMvQixxQkFDRTs7WUFDR0EsVUFBVSxLQUFLTzswQkFDaEIsOERBQUNiLGlEQUFNQSxDQUFDYyxHQUFHO2dCQUNUQyxTQUFRO2dCQUNSQyxTQUFRO2dCQUNSQyxVQUFVaEI7Z0JBQ1ZpQixRQUFRWjswQkFFUiw0RUFBQ1Asa0RBQUlBO29CQUFDb0IsTUFBTVAsY0FBY1EsSUFBSTs4QkFDNUIsNEVBQUNOO3dCQUFJTyxXQUFVOzswQ0FDYiw4REFBQ0M7Z0NBQUdELFdBQVU7MENBQWNULGNBQWNXLFNBQVM7Ozs7OzswQ0FDbkQsOERBQUNEO2dDQUFHRCxXQUFVOzBDQUNYVCxjQUFjWSxLQUFLOzs7Ozs7MENBRXRCLDhEQUFDRjtnQ0FBR0QsV0FBVTswQ0FDWFQsY0FBY2EsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQUtqQ1o7OztJQUlMLFNBQVNBO1FBQ1AscUJBQU8sOERBQUNiLGlEQUFNQSxDQUFDYyxHQUFHO1lBQ2hCQyxTQUFTO2dCQUFFWixTQUFTO1lBQUU7WUFDdEJhLFNBQVM7Z0JBQUViLFNBQVM7WUFBRTtZQUN0QnVCLE1BQU07Z0JBQUV2QixTQUFTO1lBQUU7WUFDbkJJLFlBQVk7Z0JBQUVFLFVBQVU7Z0JBQUtELE1BQU07Z0JBQVVFLE9BQU87WUFBSTtzQkFFeEQsNEVBQUNaLDZDQUFJQTtnQkFBQzZCLFlBQVk7Ozs7Ozs7Ozs7O0lBRXRCO0FBQ0Y7S0FwQ3dCaEI7QUFoQlhmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0NsaXBwaW5nQ2FyZC50c3g/YWQzNCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5lIGZyb20gXCIuL0xpbmVcIjtcbmltcG9ydCB0eXBlIHsgQ2xpcHBpbmdUeXBlIH0gZnJvbSBcIkAvdHlwZXMvQ2xpcHBpbmdUeXBlc1wiO1xuaW1wb3J0IHsgTm90b19TZXJpZiB9IGZyb20gXCJuZXh0L2ZvbnQvZ29vZ2xlXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5leHBvcnQgY29uc3Qgbm90b1NlcmlmID0gTm90b19TZXJpZih7IHN1YnNldHM6IFtcImxhdGluXCJdIH0pO1xuXG50eXBlIFByb3BzID0ge1xuICBwcmVzc0NsaXBwaW5nOiBDbGlwcGluZ1R5cGU7XG4gIGluZGV4OiBudW1iZXI7XG59O1xuXG5jb25zdCBjYXJkVmFyaWFudHMgPSB7XG4gIGhpZGRlbjogeyBvcGFjaXR5OiAwLCB5OiA1MCB9LFxuICB2aXNpYmxlOiAoaW5kZXg6IG51bWJlcikgPT4gKHtcbiAgICBvcGFjaXR5OiAxLFxuICAgIHk6IDAsXG4gICAgdHJhbnNpdGlvbjogeyBlYXNlOiBcImVhc2VPdXRcIiwgZHVyYXRpb246IDAuNSwgZGVsYXk6IGluZGV4ICogMCB9LFxuICB9KSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpbG1DYXJkKHsgcHJlc3NDbGlwcGluZywgaW5kZXggfTogUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2luZGV4ID09PSAwICYmIGFwcGVhcmluZ0xpbmUoKX1cbiAgICAgIDxtb3Rpb24uZGl2XG4gICAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgICBhbmltYXRlPVwidmlzaWJsZVwiXG4gICAgICAgIHZhcmlhbnRzPXtjYXJkVmFyaWFudHN9XG4gICAgICAgIGN1c3RvbT17aW5kZXh9XG4gICAgICA+XG4gICAgICAgIDxMaW5rIGhyZWY9e3ByZXNzQ2xpcHBpbmcubGlua30+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy01IGdhcC00IHB5LTQgZ3JvdXAgdGV4dC1ibGFjayBjdXJzb3ItcG9pbnRlclwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cImNvbC1zcGFuLTFcIj57cHJlc3NDbGlwcGluZy5wcmVzc0RhdGV9PC9oMT5cbiAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJjb2wtc3Bhbi0zIGdyb3VwLWhvdmVyOmZvbnQtYm9sZCB0cmFuc2l0aW9uLWFsbFwiPlxuICAgICAgICAgICAgICB7cHJlc3NDbGlwcGluZy50aXRsZX1cbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiY29sLXNwYW4tMSB0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgICAgIHtwcmVzc0NsaXBwaW5nLnByZXNzQXV0aG9yfVxuICAgICAgICAgICAgPC9oMT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAge2FwcGVhcmluZ0xpbmUoKX1cbiAgICA8Lz5cbiAgKTtcblxuICBmdW5jdGlvbiBhcHBlYXJpbmdMaW5lKCkge1xuICAgIHJldHVybiA8bW90aW9uLmRpdlxuICAgICAgaW5pdGlhbD17eyBvcGFjaXR5OiAwIH19XG4gICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEgfX1cbiAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMCB9fVxuICAgICAgdHJhbnNpdGlvbj17eyBkdXJhdGlvbjogMC44LCBlYXNlOiBcImVhc2VJblwiLCBkZWxheTogMC4yIH19XG4gICAgPlxuICAgICAgPExpbmUgYm9yZGVyU2l6ZT17MX0gLz5cbiAgICA8L21vdGlvbi5kaXY+O1xuICB9XG59XG4iXSwibmFtZXMiOlsibm90b1NlcmlmIiwiUmVhY3QiLCJMaW5lIiwiTGluayIsIm1vdGlvbiIsImNhcmRWYXJpYW50cyIsImhpZGRlbiIsIm9wYWNpdHkiLCJ5IiwidmlzaWJsZSIsImluZGV4IiwidHJhbnNpdGlvbiIsImVhc2UiLCJkdXJhdGlvbiIsImRlbGF5IiwiRmlsbUNhcmQiLCJwcmVzc0NsaXBwaW5nIiwiYXBwZWFyaW5nTGluZSIsImRpdiIsImluaXRpYWwiLCJhbmltYXRlIiwidmFyaWFudHMiLCJjdXN0b20iLCJocmVmIiwibGluayIsImNsYXNzTmFtZSIsImgxIiwicHJlc3NEYXRlIiwidGl0bGUiLCJwcmVzc0F1dGhvciIsImV4aXQiLCJib3JkZXJTaXplIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ClippingCard.tsx\n"));

/***/ })

});