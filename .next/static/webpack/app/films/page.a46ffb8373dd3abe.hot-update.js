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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FilmCard; },\n/* harmony export */   notoSerif: function() { return /* reexport default from dynamic */ next_font_google_target_css_path_src_components_FilmCard_tsx_import_Noto_Serif_arguments_subsets_latin_variableName_notoSerif___WEBPACK_IMPORTED_MODULE_4___default.a; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_font_google_target_css_path_src_components_FilmCard_tsx_import_Noto_Serif_arguments_subsets_latin_variableName_notoSerif___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src/components/FilmCard.tsx\",\"import\":\"Noto_Serif\",\"arguments\":[{\"subsets\":[\"latin\"]}],\"variableName\":\"notoSerif\"} */ \"(app-pages-browser)/./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src/components/FilmCard.tsx\\\",\\\"import\\\":\\\"Noto_Serif\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"notoSerif\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_components_FilmCard_tsx_import_Noto_Serif_arguments_subsets_latin_variableName_notoSerif___WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_components_FilmCard_tsx_import_Noto_Serif_arguments_subsets_latin_variableName_notoSerif___WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Line */ \"(app-pages-browser)/./src/components/Line.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ notoSerif,default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst cardVariants = {\n    hidden: {\n        opacity: 0,\n        y: 50\n    },\n    visible: {\n        opacity: 1,\n        y: 0,\n        transition: {\n            ease: \"easeOut\",\n            duration: 0.5\n        }\n    }\n};\nfunction FilmCard(param) {\n    let { film } = param;\n    var _film_featuredImage;\n    _s();\n    const image = ((_film_featuredImage = film.featuredImage) === null || _film_featuredImage === void 0 ? void 0 : _film_featuredImage.node) || null;\n    const trailer = film.trailer || null;\n    console.log(trailer);\n    const [showTrailer, setShowTrailer] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Line__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-2 grid-rows-2 gap-4 md:grid-rows-1\",\n                onClick: ()=>setShowTrailer((prev)=>!prev),\n                children: [\n                    image && !showTrailer && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-white bg-opacity-10 col-span-2 md:col-span-1\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            src: image.guid,\n                            alt: image.altText,\n                            height: image.mediaDetails.height,\n                            width: image.mediaDetails.width,\n                            className: \"object-cover md:w-5/6 xs:w-1/2 w-full mx-auto p-4 \"\n                        }, void 0, false, {\n                            fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, this),\n                    showTrailer && trailer && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        dangerouslySetInnerHTML: {\n                            __html: trailer\n                        },\n                        className: \"col-span-2 md:col-span-1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, this),\n                    (!image && !showTrailer || showTrailer && !trailer) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-span-2 md:col-span-1 md:block hidden\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-span-2 md:col-span-1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-3xl font-medium \",\n                                children: film.filmtitle + \" (\".concat(film.year, \")\")\n                            }, void 0, false, {\n                                fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat((next_font_google_target_css_path_src_components_FilmCard_tsx_import_Noto_Serif_arguments_subsets_latin_variableName_notoSerif___WEBPACK_IMPORTED_MODULE_4___default().className), \" font-light mb-6\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: film.role.map((role, index)=>index === film.role.length - 1 ? role : role + \"/\")\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: film.duration\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: film.language.map((language, index)=>index === film.language.length - 1 ? language : language + \", \")\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                dangerouslySetInnerHTML: {\n                                    __html: film.synopsis\n                                },\n                                className: \"mb-6\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, this),\n                            film.additionalInformation.map((additional)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"mb-6\",\n                                    children: additional\n                                }, void 0, false, {\n                                    fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 13\n                                }, this)),\n                            film.festivals.map((festival)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: festival\n                                }, void 0, false, {\n                                    fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 13\n                                }, this))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(FilmCard, \"2b82GZjuE3AwUUAaqhqt+BHnnf4=\");\n_c = FilmCard;\n\nvar _c;\n$RefreshReg$(_c, \"FilmCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZpbG1DYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFVYUE7QUFUYTtBQUNBO0FBRUs7QUFZL0IsTUFBTUksZUFBZTtJQUNuQkMsUUFBUTtRQUFFQyxTQUFTO1FBQUdDLEdBQUc7SUFBRztJQUM1QkMsU0FBUztRQUNQRixTQUFTO1FBQ1RDLEdBQUc7UUFDSEUsWUFBWTtZQUFFQyxNQUFNO1lBQVdDLFVBQVU7UUFBSTtJQUMvQztBQUNGO0FBRWUsU0FBU0MsU0FBUyxLQUFlO1FBQWYsRUFBRUMsSUFBSSxFQUFTLEdBQWY7UUFDQ0E7O0lBQWhDLE1BQU1DLFFBQTBCRCxFQUFBQSxzQkFBQUEsS0FBS0UsYUFBYSxjQUFsQkYsMENBQUFBLG9CQUFvQkcsSUFBSSxLQUFJO0lBQzVELE1BQU1DLFVBQXlCSixLQUFLSSxPQUFPLElBQUk7SUFDL0NDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWixNQUFNLENBQUNHLGFBQWFDLGVBQWUsR0FBR3BCLHFEQUFjLENBQUM7SUFFckQscUJBQ0U7OzBCQUNFLDhEQUFDQyw2Q0FBSUE7Ozs7OzBCQUVMLDhEQUFDcUI7Z0JBQUlDLFdBQVU7Z0JBQW9EQyxTQUFTLElBQU1KLGVBQWUsQ0FBQ0ssT0FBUyxDQUFDQTs7b0JBRXpHWixTQUFTLENBQUNNLDZCQUNULDhEQUFDRzt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ3JCLG1EQUFLQTs0QkFDSndCLEtBQUtiLE1BQU1jLElBQUk7NEJBQ2ZDLEtBQUtmLE1BQU1nQixPQUFPOzRCQUNsQkMsUUFBUWpCLE1BQU1rQixZQUFZLENBQUNELE1BQU07NEJBQ2pDRSxPQUFPbkIsTUFBTWtCLFlBQVksQ0FBQ0MsS0FBSzs0QkFDL0JULFdBQVU7Ozs7Ozs7Ozs7O29CQU9mSixlQUFlSCx5QkFDZCw4REFBQ007d0JBQ0NXLHlCQUF5Qjs0QkFBRUMsUUFBUWxCO3dCQUFRO3dCQUMzQ08sV0FBVTs7Ozs7O29CQUlaLEVBQUVWLFNBQVMsQ0FBQ00sZUFBaUJBLGVBQWUsQ0FBQ0gsT0FBTyxtQkFDcEQsOERBQUNNO3dCQUFJQyxXQUFVOzs7Ozs7a0NBSWpCLDhEQUFDRDt3QkFBSUMsV0FBVTs7MENBRWIsOERBQUNZO2dDQUFHWixXQUFVOzBDQUNYWCxLQUFLd0IsU0FBUyxHQUFHLEtBQWUsT0FBVnhCLEtBQUt5QixJQUFJLEVBQUM7Ozs7OzswQ0FJbkMsOERBQUNmO2dDQUFJQyxXQUFXLEdBQXVCLE9BQXBCeEIsaUxBQW1CLEVBQUM7O2tEQUNyQyw4REFBQ3VDO2tEQUNFMUIsS0FBSzJCLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUNELE1BQU1FLFFBQ3BCQSxVQUFVN0IsS0FBSzJCLElBQUksQ0FBQ0csTUFBTSxHQUFHLElBQUlILE9BQU9BLE9BQU87Ozs7OztrREFHbkQsOERBQUNEO2tEQUFHMUIsS0FBS0YsUUFBUTs7Ozs7O2tEQUNqQiw4REFBQzRCO2tEQUNFMUIsS0FBSytCLFFBQVEsQ0FBQ0gsR0FBRyxDQUFDLENBQUNHLFVBQVVGLFFBQzVCQSxVQUFVN0IsS0FBSytCLFFBQVEsQ0FBQ0QsTUFBTSxHQUFHLElBQUlDLFdBQVdBLFdBQVc7Ozs7Ozs7Ozs7OzswQ0FLakUsOERBQUNyQjtnQ0FDQ1cseUJBQXlCO29DQUFFQyxRQUFRdEIsS0FBS2dDLFFBQVE7Z0NBQUM7Z0NBQ2pEckIsV0FBVTs7Ozs7OzRCQUlYWCxLQUFLaUMscUJBQXFCLENBQUNMLEdBQUcsQ0FBQyxDQUFDTSwyQkFDL0IsOERBQUNSO29DQUFFZixXQUFVOzhDQUFRdUI7Ozs7Ozs0QkFHdEJsQyxLQUFLbUMsU0FBUyxDQUFDUCxHQUFHLENBQUMsQ0FBQ1EseUJBQ25CLDhEQUFDVjs4Q0FBR1U7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTWhCO0dBNUV3QnJDO0tBQUFBO0FBZlhaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0ZpbG1DYXJkLnRzeD84N2ZmIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpbmUgZnJvbSBcIi4vTGluZVwiO1xuaW1wb3J0IENhcm91c2VsIGZyb20gXCIuL0Nhcm91c2VsXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB0eXBlIHsgRmlsbVR5cGUgfSBmcm9tIFwiQC90eXBlcy9GaWxtVHlwZXNcIjtcbmltcG9ydCB0eXBlIHsgSW1hZ2VUeXBlIH0gZnJvbSBcIkAvdHlwZXMvSW1hZ2VUeXBlc1wiO1xuaW1wb3J0IHsgTm90b19TZXJpZiB9IGZyb20gXCJuZXh0L2ZvbnQvZ29vZ2xlXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5leHBvcnQgY29uc3Qgbm90b1NlcmlmID0gTm90b19TZXJpZih7IHN1YnNldHM6IFtcImxhdGluXCJdIH0pO1xuXG50eXBlIFByb3BzID0ge1xuICBmaWxtOiBGaWxtVHlwZTtcbn07XG5cbmNvbnN0IGNhcmRWYXJpYW50cyA9IHtcbiAgaGlkZGVuOiB7IG9wYWNpdHk6IDAsIHk6IDUwIH0sXG4gIHZpc2libGU6IHtcbiAgICBvcGFjaXR5OiAxLFxuICAgIHk6IDAsXG4gICAgdHJhbnNpdGlvbjogeyBlYXNlOiBcImVhc2VPdXRcIiwgZHVyYXRpb246IDAuNSB9LFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmlsbUNhcmQoeyBmaWxtIH06IFByb3BzKSB7XG4gIGNvbnN0IGltYWdlOiBJbWFnZVR5cGUgfCBudWxsID0gZmlsbS5mZWF0dXJlZEltYWdlPy5ub2RlIHx8IG51bGw7XG4gIGNvbnN0IHRyYWlsZXI6IHN0cmluZyB8IG51bGwgPSBmaWxtLnRyYWlsZXIgfHwgbnVsbDtcbiAgY29uc29sZS5sb2codHJhaWxlcik7XG4gIGNvbnN0IFtzaG93VHJhaWxlciwgc2V0U2hvd1RyYWlsZXJdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxMaW5lIC8+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBncmlkLXJvd3MtMiBnYXAtNCBtZDpncmlkLXJvd3MtMVwiIG9uQ2xpY2s9eygpID0+IHNldFNob3dUcmFpbGVyKChwcmV2KSA9PiAhcHJldil9PlxuICAgICAgICB7LyogSW1hZ2UgKi99XG4gICAgICAgIHtpbWFnZSAmJiAhc2hvd1RyYWlsZXIgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgYmctb3BhY2l0eS0xMCBjb2wtc3Bhbi0yIG1kOmNvbC1zcGFuLTFcIj5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9e2ltYWdlLmd1aWR9XG4gICAgICAgICAgICAgIGFsdD17aW1hZ2UuYWx0VGV4dH1cbiAgICAgICAgICAgICAgaGVpZ2h0PXtpbWFnZS5tZWRpYURldGFpbHMuaGVpZ2h0fVxuICAgICAgICAgICAgICB3aWR0aD17aW1hZ2UubWVkaWFEZXRhaWxzLndpZHRofVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY292ZXIgbWQ6dy01LzYgeHM6dy0xLzIgdy1mdWxsIG14LWF1dG8gcC00IFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAgey8qIFRyYWlsZXIgKi99XG4gICAgICAgIHtzaG93VHJhaWxlciAmJiB0cmFpbGVyICYmIChcbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHRyYWlsZXIgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC1zcGFuLTIgbWQ6Y29sLXNwYW4tMVwiXG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cblxuICAgICAgICB7KCghaW1hZ2UgJiYgIXNob3dUcmFpbGVyKSB8fCAoc2hvd1RyYWlsZXIgJiYgIXRyYWlsZXIpKSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yIG1kOmNvbC1zcGFuLTEgbWQ6YmxvY2sgaGlkZGVuXCI+PC9kaXY+XG4gICAgICAgICl9XG5cbiAgICAgICAgey8qIFRleHQgKi99XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiBtZDpjb2wtc3Bhbi0xXCI+XG4gICAgICAgICAgey8qIFRpdGxlICovfVxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTN4bCBmb250LW1lZGl1bSBcIj5cbiAgICAgICAgICAgIHtmaWxtLmZpbG10aXRsZSArIGAgKCR7ZmlsbS55ZWFyfSlgfVxuICAgICAgICAgIDwvaDE+XG5cbiAgICAgICAgICB7LyogSW5mbyAqL31cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7bm90b1NlcmlmLmNsYXNzTmFtZX0gZm9udC1saWdodCBtYi02YH0+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAge2ZpbG0ucm9sZS5tYXAoKHJvbGUsIGluZGV4KSA9PlxuICAgICAgICAgICAgICAgIGluZGV4ID09PSBmaWxtLnJvbGUubGVuZ3RoIC0gMSA/IHJvbGUgOiByb2xlICsgXCIvXCJcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwPntmaWxtLmR1cmF0aW9ufTwvcD5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICB7ZmlsbS5sYW5ndWFnZS5tYXAoKGxhbmd1YWdlLCBpbmRleCkgPT5cbiAgICAgICAgICAgICAgICBpbmRleCA9PT0gZmlsbS5sYW5ndWFnZS5sZW5ndGggLSAxID8gbGFuZ3VhZ2UgOiBsYW5ndWFnZSArIFwiLCBcIlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBmaWxtLnN5bm9wc2lzIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJtYi02XCJcbiAgICAgICAgICAvPlxuXG4gICAgICAgICAgey8qIFN5bm9wc2lzLCBmZXN0aXZhbHMsIGFkZGl0aW9uYWwgKi99XG4gICAgICAgICAge2ZpbG0uYWRkaXRpb25hbEluZm9ybWF0aW9uLm1hcCgoYWRkaXRpb25hbCkgPT4gKFxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibWItNlwiPnthZGRpdGlvbmFsfTwvcD5cbiAgICAgICAgICApKX1cblxuICAgICAgICAgIHtmaWxtLmZlc3RpdmFscy5tYXAoKGZlc3RpdmFsKSA9PiAoXG4gICAgICAgICAgICA8cD57ZmVzdGl2YWx9PC9wPlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIm5vdG9TZXJpZiIsIlJlYWN0IiwiTGluZSIsIkltYWdlIiwiY2FyZFZhcmlhbnRzIiwiaGlkZGVuIiwib3BhY2l0eSIsInkiLCJ2aXNpYmxlIiwidHJhbnNpdGlvbiIsImVhc2UiLCJkdXJhdGlvbiIsIkZpbG1DYXJkIiwiZmlsbSIsImltYWdlIiwiZmVhdHVyZWRJbWFnZSIsIm5vZGUiLCJ0cmFpbGVyIiwiY29uc29sZSIsImxvZyIsInNob3dUcmFpbGVyIiwic2V0U2hvd1RyYWlsZXIiLCJ1c2VTdGF0ZSIsImRpdiIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJwcmV2Iiwic3JjIiwiZ3VpZCIsImFsdCIsImFsdFRleHQiLCJoZWlnaHQiLCJtZWRpYURldGFpbHMiLCJ3aWR0aCIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiaDEiLCJmaWxtdGl0bGUiLCJ5ZWFyIiwicCIsInJvbGUiLCJtYXAiLCJpbmRleCIsImxlbmd0aCIsImxhbmd1YWdlIiwic3lub3BzaXMiLCJhZGRpdGlvbmFsSW5mb3JtYXRpb24iLCJhZGRpdGlvbmFsIiwiZmVzdGl2YWxzIiwiZmVzdGl2YWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FilmCard.tsx\n"));

/***/ })

});