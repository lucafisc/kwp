"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/films/page",{

/***/ "(app-pages-browser)/./src/components/FilmCard.tsx":
/*!*************************************!*\
  !*** ./src/components/FilmCard.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FilmCard; },\n/* harmony export */   notoSerif: function() { return /* reexport default from dynamic */ next_font_google_target_css_path_src_components_FilmCard_tsx_import_Noto_Serif_arguments_subsets_latin_variableName_notoSerif___WEBPACK_IMPORTED_MODULE_4___default.a; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_font_google_target_css_path_src_components_FilmCard_tsx_import_Noto_Serif_arguments_subsets_latin_variableName_notoSerif___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src/components/FilmCard.tsx\",\"import\":\"Noto_Serif\",\"arguments\":[{\"subsets\":[\"latin\"]}],\"variableName\":\"notoSerif\"} */ \"(app-pages-browser)/./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src/components/FilmCard.tsx\\\",\\\"import\\\":\\\"Noto_Serif\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"notoSerif\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_components_FilmCard_tsx_import_Noto_Serif_arguments_subsets_latin_variableName_notoSerif___WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_components_FilmCard_tsx_import_Noto_Serif_arguments_subsets_latin_variableName_notoSerif___WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Line */ \"(app-pages-browser)/./src/components/Line.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ notoSerif,default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst cardVariants = {\n    hidden: {\n        opacity: 0,\n        y: 50\n    },\n    visible: {\n        opacity: 1,\n        y: 0,\n        transition: {\n            ease: \"easeOut\",\n            duration: 0.5\n        }\n    }\n};\nfunction FilmCard(param) {\n    let { film } = param;\n    var _film_featuredImage;\n    _s();\n    const image = ((_film_featuredImage = film.featuredImage) === null || _film_featuredImage === void 0 ? void 0 : _film_featuredImage.node) || null;\n    const trailer = film.trailer || null;\n    const [showTrailer, setShowTrailer] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(true);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Line__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-2 grid-rows-2 gap-4\",\n                children: [\n                    image && !showTrailer && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-white bg-opacity-10 col-span-2 md:col-span-1\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            src: image.guid,\n                            alt: image.altText,\n                            height: image.mediaDetails.height,\n                            width: image.mediaDetails.width,\n                            className: \"object-cover md:w-5/6 xs:w-1/2 w-full mx-auto p-4 \"\n                        }, void 0, false, {\n                            fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                            lineNumber: 41,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                        lineNumber: 40,\n                        columnNumber: 11\n                    }, this),\n                    (!image && !showTrailer || showTrailer && !trailer) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-span-2 md:col-span-1 md:block hidden\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                        lineNumber: 51,\n                        columnNumber: 5\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-span-2 md:col-span-1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-3xl font-medium \",\n                                children: film.filmtitle + \" (\".concat(film.year, \")\")\n                            }, void 0, false, {\n                                fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                                lineNumber: 63,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat((next_font_google_target_css_path_src_components_FilmCard_tsx_import_Noto_Serif_arguments_subsets_latin_variableName_notoSerif___WEBPACK_IMPORTED_MODULE_4___default().className), \" font-light mb-6\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: film.role.map((role, index)=>index === film.role.length - 1 ? role : role + \"/\")\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                                        lineNumber: 69,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: film.duration\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                                        lineNumber: 74,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: film.language.map((language, index)=>index === film.language.length - 1 ? language : language + \", \")\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                                        lineNumber: 75,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                                lineNumber: 68,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                dangerouslySetInnerHTML: {\n                                    __html: film.synopsis\n                                },\n                                className: \"mb-6\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                                lineNumber: 82,\n                                columnNumber: 11\n                            }, this),\n                            film.additionalInformation.map((additional)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"mb-6\",\n                                    children: additional\n                                }, void 0, false, {\n                                    fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                                    lineNumber: 89,\n                                    columnNumber: 13\n                                }, this)),\n                            film.festivals.map((festival)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: festival\n                                }, void 0, false, {\n                                    fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                                    lineNumber: 93,\n                                    columnNumber: 13\n                                }, this))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(FilmCard, \"TamUzxgOt8eTEnzwn3L8OPHdNTk=\");\n_c = FilmCard;\n\nvar _c;\n$RefreshReg$(_c, \"FilmCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZpbG1DYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFXYUE7QUFWYTtBQUNBO0FBRUs7QUFhL0IsTUFBTUksZUFBZTtJQUNuQkMsUUFBUTtRQUFFQyxTQUFTO1FBQUdDLEdBQUc7SUFBRztJQUM1QkMsU0FBUztRQUNQRixTQUFTO1FBQ1RDLEdBQUc7UUFDSEUsWUFBWTtZQUFFQyxNQUFNO1lBQVdDLFVBQVU7UUFBSTtJQUMvQztBQUNGO0FBRWUsU0FBU0MsU0FBUyxLQUFlO1FBQWYsRUFBRUMsSUFBSSxFQUFTLEdBQWY7UUFDQ0E7O0lBQWhDLE1BQU1DLFFBQTBCRCxFQUFBQSxzQkFBQUEsS0FBS0UsYUFBYSxjQUFsQkYsMENBQUFBLG9CQUFvQkcsSUFBSSxLQUFJO0lBQzVELE1BQU1DLFVBQTBCSixLQUFLSSxPQUFPLElBQUk7SUFDakQsTUFBTSxDQUFDQyxhQUFhQyxlQUFlLEdBQUdsQixxREFBYyxDQUFDO0lBRXBELHFCQUNFOzswQkFDRSw4REFBQ0MsNkNBQUlBOzs7OzswQkFFTCw4REFBQ21CO2dCQUFJQyxXQUFVOztvQkFHWlIsU0FBUyxDQUFDSSw2QkFDVCw4REFBQ0c7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUNuQixtREFBS0E7NEJBQ0pvQixLQUFLVCxNQUFNVSxJQUFJOzRCQUNmQyxLQUFLWCxNQUFNWSxPQUFPOzRCQUNsQkMsUUFBUWIsTUFBTWMsWUFBWSxDQUFDRCxNQUFNOzRCQUNqQ0UsT0FBT2YsTUFBTWMsWUFBWSxDQUFDQyxLQUFLOzRCQUMvQlAsV0FBVTs7Ozs7Ozs7Ozs7b0JBSXBCLEVBQUVSLFNBQVMsQ0FBQ0ksZUFBaUJBLGVBQWUsQ0FBQ0QsT0FBTyxtQkFDcEQsOERBQUNJO3dCQUFJQyxXQUFVOzs7Ozs7a0NBVVgsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FFYiw4REFBQ1E7Z0NBQUdSLFdBQVU7MENBQ1hULEtBQUtrQixTQUFTLEdBQUcsS0FBZSxPQUFWbEIsS0FBS21CLElBQUksRUFBQzs7Ozs7OzBDQUluQyw4REFBQ1g7Z0NBQUlDLFdBQVcsR0FBdUIsT0FBcEJ0QixpTEFBbUIsRUFBQzs7a0RBQ3JDLDhEQUFDaUM7a0RBQ0VwQixLQUFLcUIsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0QsTUFBTUUsUUFDcEJBLFVBQVV2QixLQUFLcUIsSUFBSSxDQUFDRyxNQUFNLEdBQUcsSUFBSUgsT0FBT0EsT0FBTzs7Ozs7O2tEQUduRCw4REFBQ0Q7a0RBQUdwQixLQUFLRixRQUFROzs7Ozs7a0RBQ2pCLDhEQUFDc0I7a0RBQ0VwQixLQUFLeUIsUUFBUSxDQUFDSCxHQUFHLENBQUMsQ0FBQ0csVUFBVUYsUUFDNUJBLFVBQVV2QixLQUFLeUIsUUFBUSxDQUFDRCxNQUFNLEdBQUcsSUFBSUMsV0FBV0EsV0FBVzs7Ozs7Ozs7Ozs7OzBDQUtqRSw4REFBQ2pCO2dDQUNDa0IseUJBQXlCO29DQUFFQyxRQUFRM0IsS0FBSzRCLFFBQVE7Z0NBQUM7Z0NBQ2pEbkIsV0FBVTs7Ozs7OzRCQUlYVCxLQUFLNkIscUJBQXFCLENBQUNQLEdBQUcsQ0FBQyxDQUFDUSwyQkFDL0IsOERBQUNWO29DQUFFWCxXQUFVOzhDQUFRcUI7Ozs7Ozs0QkFHdEI5QixLQUFLK0IsU0FBUyxDQUFDVCxHQUFHLENBQUMsQ0FBQ1UseUJBQ25CLDhEQUFDWjs4Q0FBR1k7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWhCO0dBeEV3QmpDO0tBQUFBO0FBZlhaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0ZpbG1DYXJkLnRzeD84N2ZmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmUgZnJvbSBcIi4vTGluZVwiO1xuaW1wb3J0IENhcm91c2VsIGZyb20gXCIuL0Nhcm91c2VsXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB0eXBlIHsgRmlsbVR5cGUgfSBmcm9tIFwiQC90eXBlcy9GaWxtVHlwZXNcIjtcbmltcG9ydCB0eXBlIHsgSW1hZ2VUeXBlIH0gZnJvbSBcIkAvdHlwZXMvSW1hZ2VUeXBlc1wiO1xuaW1wb3J0IHsgTm90b19TZXJpZiB9IGZyb20gXCJuZXh0L2ZvbnQvZ29vZ2xlXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5cbmV4cG9ydCBjb25zdCBub3RvU2VyaWYgPSBOb3RvX1NlcmlmKHsgc3Vic2V0czogW1wibGF0aW5cIl0gfSk7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGZpbG06IEZpbG1UeXBlO1xufTtcblxuY29uc3QgY2FyZFZhcmlhbnRzID0ge1xuICBoaWRkZW46IHsgb3BhY2l0eTogMCwgeTogNTAgfSxcbiAgdmlzaWJsZToge1xuICAgIG9wYWNpdHk6IDEsXG4gICAgeTogMCxcbiAgICB0cmFuc2l0aW9uOiB7IGVhc2U6IFwiZWFzZU91dFwiLCBkdXJhdGlvbjogMC41IH0sXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaWxtQ2FyZCh7IGZpbG0gfTogUHJvcHMpIHtcbiAgY29uc3QgaW1hZ2U6IEltYWdlVHlwZSB8IG51bGwgPSBmaWxtLmZlYXR1cmVkSW1hZ2U/Lm5vZGUgfHwgbnVsbDtcbiAgY29uc3QgdHJhaWxlciA6IHN0cmluZyB8IG51bGwgPSBmaWxtLnRyYWlsZXIgfHwgbnVsbDtcblx0Y29uc3QgW3Nob3dUcmFpbGVyLCBzZXRTaG93VHJhaWxlcl0gPSBSZWFjdC51c2VTdGF0ZSh0cnVlKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGluZSAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ3JpZC1yb3dzLTIgZ2FwLTRcIj5cblxuICAgICAgey8qIEltYWdlICovfVxuICAgICAgICB7aW1hZ2UgJiYgIXNob3dUcmFpbGVyICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIGJnLW9wYWNpdHktMTAgY29sLXNwYW4tMiBtZDpjb2wtc3Bhbi0xXCI+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgc3JjPXtpbWFnZS5ndWlkfVxuICAgICAgICAgICAgICBhbHQ9e2ltYWdlLmFsdFRleHR9XG4gICAgICAgICAgICAgIGhlaWdodD17aW1hZ2UubWVkaWFEZXRhaWxzLmhlaWdodH1cbiAgICAgICAgICAgICAgd2lkdGg9e2ltYWdlLm1lZGlhRGV0YWlscy53aWR0aH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyIG1kOnctNS82IHhzOnctMS8yIHctZnVsbCBteC1hdXRvIHAtNCBcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cblx0XHR7KCghaW1hZ2UgJiYgIXNob3dUcmFpbGVyKSB8fCAoc2hvd1RyYWlsZXIgJiYgIXRyYWlsZXIpKSAmJiAoXG5cdFx0ICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTIgbWQ6Y29sLXNwYW4tMSBtZDpibG9jayBoaWRkZW5cIj48L2Rpdj5cblx0XHQpfVxuXG5cdFx0ey8qIFRyYWlsZXIgKi99XG5cdFx0ey8qIHtzaG93VHJhaWxlciAmJiB0cmFpbGVyLmxlbmd0aCA+IDAgJiYgKFxuXHRcdFx0PGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHRyYWlsZXIgfX0gY2xhc3NOYW1lPVwiY29sLXNwYW4tMiBtZDpjb2wtc3Bhbi0xXCIgLz5cblx0XHQpfVxuXHRcdCAqL31cblxuICAgICAgICB7LyogVGV4dCAqL31cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yIG1kOmNvbC1zcGFuLTFcIj5cbiAgICAgICAgICB7LyogVGl0bGUgKi99XG4gICAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtM3hsIGZvbnQtbWVkaXVtIFwiPlxuICAgICAgICAgICAge2ZpbG0uZmlsbXRpdGxlICsgYCAoJHtmaWxtLnllYXJ9KWB9XG4gICAgICAgICAgPC9oMT5cblxuICAgICAgICAgIHsvKiBJbmZvICovfVxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtub3RvU2VyaWYuY2xhc3NOYW1lfSBmb250LWxpZ2h0IG1iLTZgfT5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICB7ZmlsbS5yb2xlLm1hcCgocm9sZSwgaW5kZXgpID0+XG4gICAgICAgICAgICAgICAgaW5kZXggPT09IGZpbG0ucm9sZS5sZW5ndGggLSAxID8gcm9sZSA6IHJvbGUgKyBcIi9cIlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHA+e2ZpbG0uZHVyYXRpb259PC9wPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIHtmaWxtLmxhbmd1YWdlLm1hcCgobGFuZ3VhZ2UsIGluZGV4KSA9PlxuICAgICAgICAgICAgICAgIGluZGV4ID09PSBmaWxtLmxhbmd1YWdlLmxlbmd0aCAtIDEgPyBsYW5ndWFnZSA6IGxhbmd1YWdlICsgXCIsIFwiXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGZpbG0uc3lub3BzaXMgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm1iLTZcIlxuICAgICAgICAgIC8+XG5cbiAgICAgICAgICB7LyogU3lub3BzaXMsIGZlc3RpdmFscywgYWRkaXRpb25hbCAqL31cbiAgICAgICAgICB7ZmlsbS5hZGRpdGlvbmFsSW5mb3JtYXRpb24ubWFwKChhZGRpdGlvbmFsKSA9PiAoXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtYi02XCI+e2FkZGl0aW9uYWx9PC9wPlxuICAgICAgICAgICkpfVxuXG4gICAgICAgICAge2ZpbG0uZmVzdGl2YWxzLm1hcCgoZmVzdGl2YWwpID0+IChcbiAgICAgICAgICAgIDxwPntmZXN0aXZhbH08L3A+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC8+XG4gICk7XG59XG4iXSwibmFtZXMiOlsibm90b1NlcmlmIiwiUmVhY3QiLCJMaW5lIiwiSW1hZ2UiLCJjYXJkVmFyaWFudHMiLCJoaWRkZW4iLCJvcGFjaXR5IiwieSIsInZpc2libGUiLCJ0cmFuc2l0aW9uIiwiZWFzZSIsImR1cmF0aW9uIiwiRmlsbUNhcmQiLCJmaWxtIiwiaW1hZ2UiLCJmZWF0dXJlZEltYWdlIiwibm9kZSIsInRyYWlsZXIiLCJzaG93VHJhaWxlciIsInNldFNob3dUcmFpbGVyIiwidXNlU3RhdGUiLCJkaXYiLCJjbGFzc05hbWUiLCJzcmMiLCJndWlkIiwiYWx0IiwiYWx0VGV4dCIsImhlaWdodCIsIm1lZGlhRGV0YWlscyIsIndpZHRoIiwiaDEiLCJmaWxtdGl0bGUiLCJ5ZWFyIiwicCIsInJvbGUiLCJtYXAiLCJpbmRleCIsImxlbmd0aCIsImxhbmd1YWdlIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJzeW5vcHNpcyIsImFkZGl0aW9uYWxJbmZvcm1hdGlvbiIsImFkZGl0aW9uYWwiLCJmZXN0aXZhbHMiLCJmZXN0aXZhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FilmCard.tsx\n"));

/***/ })

});