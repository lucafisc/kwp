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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FilmCard; },\n/* harmony export */   notoSerif: function() { return /* reexport default from dynamic */ next_font_google_target_css_path_src_components_FilmCard_tsx_import_Noto_Serif_arguments_subsets_latin_variableName_notoSerif___WEBPACK_IMPORTED_MODULE_4___default.a; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_font_google_target_css_path_src_components_FilmCard_tsx_import_Noto_Serif_arguments_subsets_latin_variableName_notoSerif___WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src/components/FilmCard.tsx\",\"import\":\"Noto_Serif\",\"arguments\":[{\"subsets\":[\"latin\"]}],\"variableName\":\"notoSerif\"} */ \"(app-pages-browser)/./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src/components/FilmCard.tsx\\\",\\\"import\\\":\\\"Noto_Serif\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"]}],\\\"variableName\\\":\\\"notoSerif\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_components_FilmCard_tsx_import_Noto_Serif_arguments_subsets_latin_variableName_notoSerif___WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_components_FilmCard_tsx_import_Noto_Serif_arguments_subsets_latin_variableName_notoSerif___WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Line__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Line */ \"(app-pages-browser)/./src/components/Line.tsx\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ notoSerif,default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst cardVariants = {\n    hidden: {\n        opacity: 0,\n        y: 50\n    },\n    visible: {\n        opacity: 1,\n        y: 0,\n        transition: {\n            ease: \"easeOut\",\n            duration: 0.5\n        }\n    }\n};\nfunction FilmCard(param) {\n    let { film } = param;\n    var _film_featuredImage;\n    _s();\n    const image = ((_film_featuredImage = film.featuredImage) === null || _film_featuredImage === void 0 ? void 0 : _film_featuredImage.node) || null;\n    const [showTrailer, setShowTrailer] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Line__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"grid grid-cols-2 grid-rows-2 gap-4\",\n                children: [\n                    image && !showTrailer && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"bg-white bg-opacity-10 col-span-2 md:col-span-1\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {\n                            src: image.guid,\n                            alt: image.altText,\n                            height: image.mediaDetails.height,\n                            width: image.mediaDetails.width,\n                            className: \"object-cover md:w-5/6 xs:w-1/2 w-full mx-auto p-4 \"\n                        }, void 0, false, {\n                            fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 11\n                    }, this),\n                    !image && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-span-2 md:col-span-1 md:block hidden\"\n                    }, void 0, false, {\n                        fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"col-span-2 md:col-span-1\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"text-3xl font-medium \",\n                                children: film.filmtitle + \" (\".concat(film.year, \")\")\n                            }, void 0, false, {\n                                fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat((next_font_google_target_css_path_src_components_FilmCard_tsx_import_Noto_Serif_arguments_subsets_latin_variableName_notoSerif___WEBPACK_IMPORTED_MODULE_4___default().className), \" font-light mb-6\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: film.role.map((role, index)=>index === film.role.length - 1 ? role : role + \"/\")\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: film.duration\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                                        lineNumber: 66,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: film.language.map((language, index)=>index === film.language.length - 1 ? language : language + \", \")\n                                    }, void 0, false, {\n                                        fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                                        lineNumber: 67,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                                lineNumber: 60,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                dangerouslySetInnerHTML: {\n                                    __html: film.synopsis\n                                },\n                                className: \"mb-6\"\n                            }, void 0, false, {\n                                fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 11\n                            }, this),\n                            film.additionalInformation.map((additional)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    className: \"mb-6\",\n                                    children: additional\n                                }, void 0, false, {\n                                    fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                }, this)),\n                            film.festivals.map((festival)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: festival\n                                }, void 0, false, {\n                                    fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                                    lineNumber: 85,\n                                    columnNumber: 13\n                                }, this))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/lucafischer/repos/kwp/src/components/FilmCard.tsx\",\n                lineNumber: 35,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(FilmCard, \"2b82GZjuE3AwUUAaqhqt+BHnnf4=\");\n_c = FilmCard;\n\nvar _c;\n$RefreshReg$(_c, \"FilmCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ZpbG1DYXJkLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFVYUE7QUFUYTtBQUNBO0FBRUs7QUFZL0IsTUFBTUksZUFBZTtJQUNuQkMsUUFBUTtRQUFFQyxTQUFTO1FBQUdDLEdBQUc7SUFBRztJQUM1QkMsU0FBUztRQUNQRixTQUFTO1FBQ1RDLEdBQUc7UUFDSEUsWUFBWTtZQUFFQyxNQUFNO1lBQVdDLFVBQVU7UUFBSTtJQUMvQztBQUNGO0FBRWUsU0FBU0MsU0FBUyxLQUFlO1FBQWYsRUFBRUMsSUFBSSxFQUFTLEdBQWY7UUFDQ0E7O0lBQWhDLE1BQU1DLFFBQTBCRCxFQUFBQSxzQkFBQUEsS0FBS0UsYUFBYSxjQUFsQkYsMENBQUFBLG9CQUFvQkcsSUFBSSxLQUFJO0lBQzdELE1BQU0sQ0FBQ0MsYUFBYUMsZUFBZSxHQUFHakIscURBQWMsQ0FBQztJQUVwRCxxQkFDRTs7MEJBQ0UsOERBQUNDLDZDQUFJQTs7Ozs7MEJBR0wsOERBQUNrQjtnQkFBSUMsV0FBVTs7b0JBQ1pQLFNBQVMsQ0FBQ0csNkJBQ1QsOERBQUNHO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDbEIsbURBQUtBOzRCQUNKbUIsS0FBS1IsTUFBTVMsSUFBSTs0QkFDZkMsS0FBS1YsTUFBTVcsT0FBTzs0QkFDbEJDLFFBQVFaLE1BQU1hLFlBQVksQ0FBQ0QsTUFBTTs0QkFDakNFLE9BQU9kLE1BQU1hLFlBQVksQ0FBQ0MsS0FBSzs0QkFDL0JQLFdBQVU7Ozs7Ozs7Ozs7O29CQUtmLENBQUNQLHVCQUNBLDhEQUFDTTt3QkFBSUMsV0FBVTs7Ozs7O2tDQUlqQiw4REFBQ0Q7d0JBQUlDLFdBQVU7OzBDQUViLDhEQUFDUTtnQ0FBR1IsV0FBVTswQ0FDWFIsS0FBS2lCLFNBQVMsR0FBRyxLQUFlLE9BQVZqQixLQUFLa0IsSUFBSSxFQUFDOzs7Ozs7MENBSW5DLDhEQUFDWDtnQ0FBSUMsV0FBVyxHQUF1QixPQUFwQnJCLGlMQUFtQixFQUFDOztrREFDckMsOERBQUNnQztrREFDRW5CLEtBQUtvQixJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDRCxNQUFNRSxRQUNwQkEsVUFBVXRCLEtBQUtvQixJQUFJLENBQUNHLE1BQU0sR0FBRyxJQUFJSCxPQUFPQSxPQUFPOzs7Ozs7a0RBR25ELDhEQUFDRDtrREFBR25CLEtBQUtGLFFBQVE7Ozs7OztrREFDakIsOERBQUNxQjtrREFDRW5CLEtBQUt3QixRQUFRLENBQUNILEdBQUcsQ0FBQyxDQUFDRyxVQUFVRixRQUM1QkEsVUFBVXRCLEtBQUt3QixRQUFRLENBQUNELE1BQU0sR0FBRyxJQUFJQyxXQUFXQSxXQUFXOzs7Ozs7Ozs7Ozs7MENBS2pFLDhEQUFDakI7Z0NBQ0NrQix5QkFBeUI7b0NBQUVDLFFBQVExQixLQUFLMkIsUUFBUTtnQ0FBQztnQ0FDakRuQixXQUFVOzs7Ozs7NEJBSVhSLEtBQUs0QixxQkFBcUIsQ0FBQ1AsR0FBRyxDQUFDLENBQUNRLDJCQUMvQiw4REFBQ1Y7b0NBQUVYLFdBQVU7OENBQVFxQjs7Ozs7OzRCQUd0QjdCLEtBQUs4QixTQUFTLENBQUNULEdBQUcsQ0FBQyxDQUFDVSx5QkFDbkIsOERBQUNaOzhDQUFHWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNaEI7R0FqRXdCaEM7S0FBQUE7QUFmWFoiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvRmlsbUNhcmQudHN4Pzg3ZmYiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTGluZSBmcm9tIFwiLi9MaW5lXCI7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcIi4vQ2Fyb3VzZWxcIjtcbmltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHR5cGUgeyBGaWxtVHlwZSB9IGZyb20gXCJAL3R5cGVzL0ZpbG1UeXBlc1wiO1xuaW1wb3J0IHR5cGUgeyBJbWFnZVR5cGUgfSBmcm9tIFwiQC90eXBlcy9JbWFnZVR5cGVzXCI7XG5pbXBvcnQgeyBOb3RvX1NlcmlmIH0gZnJvbSBcIm5leHQvZm9udC9nb29nbGVcIjtcbmltcG9ydCB7IG1vdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5cbmV4cG9ydCBjb25zdCBub3RvU2VyaWYgPSBOb3RvX1NlcmlmKHsgc3Vic2V0czogW1wibGF0aW5cIl0gfSk7XG5cbnR5cGUgUHJvcHMgPSB7XG4gIGZpbG06IEZpbG1UeXBlO1xufTtcblxuY29uc3QgY2FyZFZhcmlhbnRzID0ge1xuICBoaWRkZW46IHsgb3BhY2l0eTogMCwgeTogNTAgfSxcbiAgdmlzaWJsZToge1xuICAgIG9wYWNpdHk6IDEsXG4gICAgeTogMCxcbiAgICB0cmFuc2l0aW9uOiB7IGVhc2U6IFwiZWFzZU91dFwiLCBkdXJhdGlvbjogMC41IH0sXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaWxtQ2FyZCh7IGZpbG0gfTogUHJvcHMpIHtcbiAgY29uc3QgaW1hZ2U6IEltYWdlVHlwZSB8IG51bGwgPSBmaWxtLmZlYXR1cmVkSW1hZ2U/Lm5vZGUgfHwgbnVsbDtcblx0Y29uc3QgW3Nob3dUcmFpbGVyLCBzZXRTaG93VHJhaWxlcl0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPExpbmUgLz5cblxuICAgICAgey8qIEltYWdlICovfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0yIGdyaWQtcm93cy0yIGdhcC00XCI+XG4gICAgICAgIHtpbWFnZSAmJiAhc2hvd1RyYWlsZXIgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctd2hpdGUgYmctb3BhY2l0eS0xMCBjb2wtc3Bhbi0yIG1kOmNvbC1zcGFuLTFcIj5cbiAgICAgICAgICAgIDxJbWFnZVxuICAgICAgICAgICAgICBzcmM9e2ltYWdlLmd1aWR9XG4gICAgICAgICAgICAgIGFsdD17aW1hZ2UuYWx0VGV4dH1cbiAgICAgICAgICAgICAgaGVpZ2h0PXtpbWFnZS5tZWRpYURldGFpbHMuaGVpZ2h0fVxuICAgICAgICAgICAgICB3aWR0aD17aW1hZ2UubWVkaWFEZXRhaWxzLndpZHRofVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJvYmplY3QtY292ZXIgbWQ6dy01LzYgeHM6dy0xLzIgdy1mdWxsIG14LWF1dG8gcC00IFwiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuXHRcdHt9XG4gICAgICAgIHshaW1hZ2UgJiYgKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXNwYW4tMiBtZDpjb2wtc3Bhbi0xIG1kOmJsb2NrIGhpZGRlblwiPjwvZGl2PlxuICAgICAgICApfVxuXG4gICAgICAgIHsvKiBUZXh0ICovfVxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1zcGFuLTIgbWQ6Y29sLXNwYW4tMVwiPlxuICAgICAgICAgIHsvKiBUaXRsZSAqL31cbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0zeGwgZm9udC1tZWRpdW0gXCI+XG4gICAgICAgICAgICB7ZmlsbS5maWxtdGl0bGUgKyBgICgke2ZpbG0ueWVhcn0pYH1cbiAgICAgICAgICA8L2gxPlxuXG4gICAgICAgICAgey8qIEluZm8gKi99XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake25vdG9TZXJpZi5jbGFzc05hbWV9IGZvbnQtbGlnaHQgbWItNmB9PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIHtmaWxtLnJvbGUubWFwKChyb2xlLCBpbmRleCkgPT5cbiAgICAgICAgICAgICAgICBpbmRleCA9PT0gZmlsbS5yb2xlLmxlbmd0aCAtIDEgPyByb2xlIDogcm9sZSArIFwiL1wiXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cD57ZmlsbS5kdXJhdGlvbn08L3A+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAge2ZpbG0ubGFuZ3VhZ2UubWFwKChsYW5ndWFnZSwgaW5kZXgpID0+XG4gICAgICAgICAgICAgICAgaW5kZXggPT09IGZpbG0ubGFuZ3VhZ2UubGVuZ3RoIC0gMSA/IGxhbmd1YWdlIDogbGFuZ3VhZ2UgKyBcIiwgXCJcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogZmlsbS5zeW5vcHNpcyB9fVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibWItNlwiXG4gICAgICAgICAgLz5cblxuICAgICAgICAgIHsvKiBTeW5vcHNpcywgZmVzdGl2YWxzLCBhZGRpdGlvbmFsICovfVxuICAgICAgICAgIHtmaWxtLmFkZGl0aW9uYWxJbmZvcm1hdGlvbi5tYXAoKGFkZGl0aW9uYWwpID0+IChcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm1iLTZcIj57YWRkaXRpb25hbH08L3A+XG4gICAgICAgICAgKSl9XG5cbiAgICAgICAgICB7ZmlsbS5mZXN0aXZhbHMubWFwKChmZXN0aXZhbCkgPT4gKFxuICAgICAgICAgICAgPHA+e2Zlc3RpdmFsfTwvcD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJub3RvU2VyaWYiLCJSZWFjdCIsIkxpbmUiLCJJbWFnZSIsImNhcmRWYXJpYW50cyIsImhpZGRlbiIsIm9wYWNpdHkiLCJ5IiwidmlzaWJsZSIsInRyYW5zaXRpb24iLCJlYXNlIiwiZHVyYXRpb24iLCJGaWxtQ2FyZCIsImZpbG0iLCJpbWFnZSIsImZlYXR1cmVkSW1hZ2UiLCJub2RlIiwic2hvd1RyYWlsZXIiLCJzZXRTaG93VHJhaWxlciIsInVzZVN0YXRlIiwiZGl2IiwiY2xhc3NOYW1lIiwic3JjIiwiZ3VpZCIsImFsdCIsImFsdFRleHQiLCJoZWlnaHQiLCJtZWRpYURldGFpbHMiLCJ3aWR0aCIsImgxIiwiZmlsbXRpdGxlIiwieWVhciIsInAiLCJyb2xlIiwibWFwIiwiaW5kZXgiLCJsZW5ndGgiLCJsYW5ndWFnZSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwic3lub3BzaXMiLCJhZGRpdGlvbmFsSW5mb3JtYXRpb24iLCJhZGRpdGlvbmFsIiwiZmVzdGl2YWxzIiwiZmVzdGl2YWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/FilmCard.tsx\n"));

/***/ })

});