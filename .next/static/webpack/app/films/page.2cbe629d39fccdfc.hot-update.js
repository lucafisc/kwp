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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FilmCard; },\n/* harmony export */   notoSerif: function() { return /* reexport default from dynamic */ next_font_google_target_css_path_src_components_FilmCard_tsx_import_Noto_Serif_arguments_subsets_latin_variableName_notoSerif___WEBPACK_IMPORTED_MODULE_4___default.a; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_font_google_target_css_path_src_components_FilmCard_tsx_import_Noto_Serif_arguments_subsets_latin_variableName_notoSerif___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src/components/FilmCard.tsx\",\"import\":\"Noto_Serif\",\"arguments\":[{\"subsets\":[\"latin\"]}],\"variableName\":\"notoSerif\"} */ \"(app-pages-browser)/./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src/components/FilmCard.tsx\\\",\\\"import\\\":\\\"Noto_Serif\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"notoSerif\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_components_FilmCard_tsx_import_Noto_Serif_arguments_subsets_latin_variableName_notoSerif___WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_components_FilmCard_tsx_import_Noto_Serif_arguments_subsets_latin_variableName_notoSerif___WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Line */ \"(app-pages-browser)/./src/components/Line.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ notoSerif,default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst cardVariants = {\n    hidden: {\n        opacity: 0,\n        y: 50\n    },\n    visible: {\n        opacity: 1,\n        y: 0,\n        transition: {\n            ease: \"easeOut\",\n            duration: 0.5\n        }\n    }\n};\nfunction FilmCard(param) {\n    let { film } = param;\n    var _film_featuredImage;\n    _s();\n    const image = ((_film_featuredImage = film.featuredImage) === null || _film_featuredImage === void 0 ? void 0 : _film_featuredImage.node) || null;\n    const trailer = film.trailer || null;\n    console.log(trailer);\n    const [showTrailer, setShowTrailer] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Line__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-2 grid-rows-2 gap-4 md:grid-rows-1\",\n                onClick: ()=>setShowTrailer((prev)=>!prev),\n                children: [\n                    image && !showTrailer && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-white bg-opacity-10 col-span-2 md:col-span-1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                                src: image.guid,\n                                alt: image.altText,\n                                height: image.mediaDetails.height,\n                                width: image.mediaDetails.width,\n                                className: \"object-cover md:w-5/6 xs:w-1/2 w-full mx-auto p-4 \"\n                            }, void 0, false, {\n                                fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"iframe\", {\n                                width: \"560\",\n                                height: \"315\",\n                                src: \"https://www.youtube.com/embed/DGP8PwCpxLk?si=Iy5xgnizwXMYYQqL\",\n                                title: \"YouTube video player\",\n                                frameborder: \"0\",\n                                allow: \"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\",\n                                allowfullscreen: true\n                            }, void 0, false, {\n                                fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 11\n                    }, this),\n                    showTrailer && trailer && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        dangerouslySetInnerHTML: {\n                            __html: trailer\n                        },\n                        className: \"col-span-2 md:col-span-1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 11\n                    }, this),\n                    (!image && !showTrailer || showTrailer && !trailer) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-span-2 md:col-span-1 md:block hidden\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                        lineNumber: 60,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-span-2 md:col-span-1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-3xl font-medium \",\n                                children: film.filmtitle + \" (\".concat(film.year, \")\")\n                            }, void 0, false, {\n                                fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat((next_font_google_target_css_path_src_components_FilmCard_tsx_import_Noto_Serif_arguments_subsets_latin_variableName_notoSerif___WEBPACK_IMPORTED_MODULE_4___default().className), \" font-light mb-6\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: film.role.map((role, index)=>index === film.role.length - 1 ? role : role + \"/\")\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                                        lineNumber: 72,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: film.duration\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                                        lineNumber: 77,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: film.language.map((language, index)=>index === film.language.length - 1 ? language : language + \", \")\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                                        lineNumber: 78,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                                lineNumber: 71,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                dangerouslySetInnerHTML: {\n                                    __html: film.synopsis\n                                },\n                                className: \"mb-6\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                                lineNumber: 85,\n                                columnNumber: 11\n                            }, this),\n                            film.additionalInformation.map((additional)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"mb-6\",\n                                    children: additional\n                                }, void 0, false, {\n                                    fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                                    lineNumber: 92,\n                                    columnNumber: 13\n                                }, this)),\n                            film.festivals.map((festival)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: festival\n                                }, void 0, false, {\n                                    fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                                    lineNumber: 96,\n                                    columnNumber: 13\n                                }, this))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                        lineNumber: 64,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(FilmCard, \"2b82GZjuE3AwUUAaqhqt+BHnnf4=\");\n_c = FilmCard;\n\nvar _c;\n$RefreshReg$(_c, \"FilmCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZpbG1DYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFVYUE7QUFUYTtBQUNBO0FBRUs7QUFZL0IsTUFBTUksZUFBZTtJQUNuQkMsUUFBUTtRQUFFQyxTQUFTO1FBQUdDLEdBQUc7SUFBRztJQUM1QkMsU0FBUztRQUNQRixTQUFTO1FBQ1RDLEdBQUc7UUFDSEUsWUFBWTtZQUFFQyxNQUFNO1lBQVdDLFVBQVU7UUFBSTtJQUMvQztBQUNGO0FBRWUsU0FBU0MsU0FBUyxLQUFlO1FBQWYsRUFBRUMsSUFBSSxFQUFTLEdBQWY7UUFDQ0E7O0lBQWhDLE1BQU1DLFFBQTBCRCxFQUFBQSxzQkFBQUEsS0FBS0UsYUFBYSxjQUFsQkYsMENBQUFBLG9CQUFvQkcsSUFBSSxLQUFJO0lBQzVELE1BQU1DLFVBQXlCSixLQUFLSSxPQUFPLElBQUk7SUFDL0NDLFFBQVFDLEdBQUcsQ0FBQ0Y7SUFDWixNQUFNLENBQUNHLGFBQWFDLGVBQWUsR0FBR3BCLHFEQUFjLENBQUM7SUFFckQscUJBQ0U7OzBCQUNFLDhEQUFDQyw2Q0FBSUE7Ozs7OzBCQUVMLDhEQUFDcUI7Z0JBQUlDLFdBQVU7Z0JBQW9EQyxTQUFTLElBQU1KLGVBQWUsQ0FBQ0ssT0FBUyxDQUFDQTs7b0JBRXpHWixTQUFTLENBQUNNLDZCQUNULDhEQUFDRzt3QkFBSUMsV0FBVTs7MENBQ2IsOERBQUNyQixtREFBS0E7Z0NBQ0p3QixLQUFLYixNQUFNYyxJQUFJO2dDQUNmQyxLQUFLZixNQUFNZ0IsT0FBTztnQ0FDbEJDLFFBQVFqQixNQUFNa0IsWUFBWSxDQUFDRCxNQUFNO2dDQUNqQ0UsT0FBT25CLE1BQU1rQixZQUFZLENBQUNDLEtBQUs7Z0NBQy9CVCxXQUFVOzs7Ozs7MENBRVosOERBQUNVO2dDQUFPRCxPQUFNO2dDQUFNRixRQUFPO2dDQUFNSixLQUFJO2dDQUFnRVEsT0FBTTtnQ0FBdUJDLGFBQVk7Z0NBQUlDLE9BQU07Z0NBQXNHQyxlQUFlOzs7Ozs7Ozs7Ozs7b0JBS2hSbEIsZUFBZUgseUJBQ2QsOERBQUNNO3dCQUNDZ0IseUJBQXlCOzRCQUFFQyxRQUFRdkI7d0JBQVE7d0JBQzNDTyxXQUFVOzs7Ozs7b0JBSVosRUFBRVYsU0FBUyxDQUFDTSxlQUFpQkEsZUFBZSxDQUFDSCxPQUFPLG1CQUNwRCw4REFBQ007d0JBQUlDLFdBQVU7Ozs7OztrQ0FJakIsOERBQUNEO3dCQUFJQyxXQUFVOzswQ0FFYiw4REFBQ2lCO2dDQUFHakIsV0FBVTswQ0FDWFgsS0FBSzZCLFNBQVMsR0FBRyxLQUFlLE9BQVY3QixLQUFLOEIsSUFBSSxFQUFDOzs7Ozs7MENBSW5DLDhEQUFDcEI7Z0NBQUlDLFdBQVcsR0FBdUIsT0FBcEJ4QixpTEFBbUIsRUFBQzs7a0RBQ3JDLDhEQUFDNEM7a0RBQ0UvQixLQUFLZ0MsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQ0QsTUFBTUUsUUFDcEJBLFVBQVVsQyxLQUFLZ0MsSUFBSSxDQUFDRyxNQUFNLEdBQUcsSUFBSUgsT0FBT0EsT0FBTzs7Ozs7O2tEQUduRCw4REFBQ0Q7a0RBQUcvQixLQUFLRixRQUFROzs7Ozs7a0RBQ2pCLDhEQUFDaUM7a0RBQ0UvQixLQUFLb0MsUUFBUSxDQUFDSCxHQUFHLENBQUMsQ0FBQ0csVUFBVUYsUUFDNUJBLFVBQVVsQyxLQUFLb0MsUUFBUSxDQUFDRCxNQUFNLEdBQUcsSUFBSUMsV0FBV0EsV0FBVzs7Ozs7Ozs7Ozs7OzBDQUtqRSw4REFBQzFCO2dDQUNDZ0IseUJBQXlCO29DQUFFQyxRQUFRM0IsS0FBS3FDLFFBQVE7Z0NBQUM7Z0NBQ2pEMUIsV0FBVTs7Ozs7OzRCQUlYWCxLQUFLc0MscUJBQXFCLENBQUNMLEdBQUcsQ0FBQyxDQUFDTSwyQkFDL0IsOERBQUNSO29DQUFFcEIsV0FBVTs4Q0FBUTRCOzs7Ozs7NEJBR3RCdkMsS0FBS3dDLFNBQVMsQ0FBQ1AsR0FBRyxDQUFDLENBQUNRLHlCQUNuQiw4REFBQ1Y7OENBQUdVOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1oQjtHQTVFd0IxQztLQUFBQTtBQWZYWiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9GaWxtQ2FyZC50c3g/ODdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5lIGZyb20gXCIuL0xpbmVcIjtcbmltcG9ydCBDYXJvdXNlbCBmcm9tIFwiLi9DYXJvdXNlbFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgdHlwZSB7IEZpbG1UeXBlIH0gZnJvbSBcIkAvdHlwZXMvRmlsbVR5cGVzXCI7XG5pbXBvcnQgdHlwZSB7IEltYWdlVHlwZSB9IGZyb20gXCJAL3R5cGVzL0ltYWdlVHlwZXNcIjtcbmltcG9ydCB7IE5vdG9fU2VyaWYgfSBmcm9tIFwibmV4dC9mb250L2dvb2dsZVwiO1xuaW1wb3J0IHsgbW90aW9uIH0gZnJvbSBcImZyYW1lci1tb3Rpb25cIjtcblxuZXhwb3J0IGNvbnN0IG5vdG9TZXJpZiA9IE5vdG9fU2VyaWYoeyBzdWJzZXRzOiBbXCJsYXRpblwiXSB9KTtcblxudHlwZSBQcm9wcyA9IHtcbiAgZmlsbTogRmlsbVR5cGU7XG59O1xuXG5jb25zdCBjYXJkVmFyaWFudHMgPSB7XG4gIGhpZGRlbjogeyBvcGFjaXR5OiAwLCB5OiA1MCB9LFxuICB2aXNpYmxlOiB7XG4gICAgb3BhY2l0eTogMSxcbiAgICB5OiAwLFxuICAgIHRyYW5zaXRpb246IHsgZWFzZTogXCJlYXNlT3V0XCIsIGR1cmF0aW9uOiAwLjUgfSxcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpbG1DYXJkKHsgZmlsbSB9OiBQcm9wcykge1xuICBjb25zdCBpbWFnZTogSW1hZ2VUeXBlIHwgbnVsbCA9IGZpbG0uZmVhdHVyZWRJbWFnZT8ubm9kZSB8fCBudWxsO1xuICBjb25zdCB0cmFpbGVyOiBzdHJpbmcgfCBudWxsID0gZmlsbS50cmFpbGVyIHx8IG51bGw7XG4gIGNvbnNvbGUubG9nKHRyYWlsZXIpO1xuICBjb25zdCBbc2hvd1RyYWlsZXIsIHNldFNob3dUcmFpbGVyXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TGluZSAvPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyaWQgZ3JpZC1jb2xzLTIgZ3JpZC1yb3dzLTIgZ2FwLTQgbWQ6Z3JpZC1yb3dzLTFcIiBvbkNsaWNrPXsoKSA9PiBzZXRTaG93VHJhaWxlcigocHJldikgPT4gIXByZXYpfT5cbiAgICAgICAgey8qIEltYWdlICovfVxuICAgICAgICB7aW1hZ2UgJiYgIXNob3dUcmFpbGVyICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJnLXdoaXRlIGJnLW9wYWNpdHktMTAgY29sLXNwYW4tMiBtZDpjb2wtc3Bhbi0xXCI+XG4gICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgc3JjPXtpbWFnZS5ndWlkfVxuICAgICAgICAgICAgICBhbHQ9e2ltYWdlLmFsdFRleHR9XG4gICAgICAgICAgICAgIGhlaWdodD17aW1hZ2UubWVkaWFEZXRhaWxzLmhlaWdodH1cbiAgICAgICAgICAgICAgd2lkdGg9e2ltYWdlLm1lZGlhRGV0YWlscy53aWR0aH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyIG1kOnctNS82IHhzOnctMS8yIHctZnVsbCBteC1hdXRvIHAtNCBcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxpZnJhbWUgd2lkdGg9XCI1NjBcIiBoZWlnaHQ9XCIzMTVcIiBzcmM9XCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9lbWJlZC9ER1A4UHdDcHhMaz9zaT1JeTV4Z25pendYTVlZUXFMXCIgdGl0bGU9XCJZb3VUdWJlIHZpZGVvIHBsYXllclwiIGZyYW1lYm9yZGVyPVwiMFwiIGFsbG93PVwiYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZTsgd2ViLXNoYXJlXCIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIHsvKiBUcmFpbGVyICovfVxuICAgICAgICB7c2hvd1RyYWlsZXIgJiYgdHJhaWxlciAmJiAoXG4gICAgICAgICAgPGRpdlxuICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiB0cmFpbGVyIH19XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtc3Bhbi0yIG1kOmNvbC1zcGFuLTFcIlxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG5cbiAgICAgICAgeygoIWltYWdlICYmICFzaG93VHJhaWxlcikgfHwgKHNob3dUcmFpbGVyICYmICF0cmFpbGVyKSkgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiBtZDpjb2wtc3Bhbi0xIG1kOmJsb2NrIGhpZGRlblwiPjwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIHsvKiBUZXh0ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTIgbWQ6Y29sLXNwYW4tMVwiPlxuICAgICAgICAgIHsvKiBUaXRsZSAqL31cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1tZWRpdW0gXCI+XG4gICAgICAgICAgICB7ZmlsbS5maWxtdGl0bGUgKyBgICgke2ZpbG0ueWVhcn0pYH1cbiAgICAgICAgICA8L2gxPlxuXG4gICAgICAgICAgey8qIEluZm8gKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake25vdG9TZXJpZi5jbGFzc05hbWV9IGZvbnQtbGlnaHQgbWItNmB9PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIHtmaWxtLnJvbGUubWFwKChyb2xlLCBpbmRleCkgPT5cbiAgICAgICAgICAgICAgICBpbmRleCA9PT0gZmlsbS5yb2xlLmxlbmd0aCAtIDEgPyByb2xlIDogcm9sZSArIFwiL1wiXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD57ZmlsbS5kdXJhdGlvbn08L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAge2ZpbG0ubGFuZ3VhZ2UubWFwKChsYW5ndWFnZSwgaW5kZXgpID0+XG4gICAgICAgICAgICAgICAgaW5kZXggPT09IGZpbG0ubGFuZ3VhZ2UubGVuZ3RoIC0gMSA/IGxhbmd1YWdlIDogbGFuZ3VhZ2UgKyBcIiwgXCJcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZmlsbS5zeW5vcHNpcyB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItNlwiXG4gICAgICAgICAgLz5cblxuICAgICAgICAgIHsvKiBTeW5vcHNpcywgZmVzdGl2YWxzLCBhZGRpdGlvbmFsICovfVxuICAgICAgICAgIHtmaWxtLmFkZGl0aW9uYWxJbmZvcm1hdGlvbi5tYXAoKGFkZGl0aW9uYWwpID0+IChcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTZcIj57YWRkaXRpb25hbH08L3A+XG4gICAgICAgICAgKSl9XG5cbiAgICAgICAgICB7ZmlsbS5mZXN0aXZhbHMubWFwKChmZXN0aXZhbCkgPT4gKFxuICAgICAgICAgICAgPHA+e2Zlc3RpdmFsfTwvcD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJub3RvU2VyaWYiLCJSZWFjdCIsIkxpbmUiLCJJbWFnZSIsImNhcmRWYXJpYW50cyIsImhpZGRlbiIsIm9wYWNpdHkiLCJ5IiwidmlzaWJsZSIsInRyYW5zaXRpb24iLCJlYXNlIiwiZHVyYXRpb24iLCJGaWxtQ2FyZCIsImZpbG0iLCJpbWFnZSIsImZlYXR1cmVkSW1hZ2UiLCJub2RlIiwidHJhaWxlciIsImNvbnNvbGUiLCJsb2ciLCJzaG93VHJhaWxlciIsInNldFNob3dUcmFpbGVyIiwidXNlU3RhdGUiLCJkaXYiLCJjbGFzc05hbWUiLCJvbkNsaWNrIiwicHJldiIsInNyYyIsImd1aWQiLCJhbHQiLCJhbHRUZXh0IiwiaGVpZ2h0IiwibWVkaWFEZXRhaWxzIiwid2lkdGgiLCJpZnJhbWUiLCJ0aXRsZSIsImZyYW1lYm9yZGVyIiwiYWxsb3ciLCJhbGxvd2Z1bGxzY3JlZW4iLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImgxIiwiZmlsbXRpdGxlIiwieWVhciIsInAiLCJyb2xlIiwibWFwIiwiaW5kZXgiLCJsZW5ndGgiLCJsYW5ndWFnZSIsInN5bm9wc2lzIiwiYWRkaXRpb25hbEluZm9ybWF0aW9uIiwiYWRkaXRpb25hbCIsImZlc3RpdmFscyIsImZlc3RpdmFsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FilmCard.tsx\n"));

/***/ })

});