"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/AnimatedImage.tsx":
/*!******************************************!*\
  !*** ./src/components/AnimatedImage.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AnimatedImage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/animation/hooks/use-animation.mjs\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! framer-motion */ \"(app-pages-browser)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction AnimatedImage(param) {\n    let { image } = param;\n    _s();\n    const controls = (0,framer_motion__WEBPACK_IMPORTED_MODULE_3__.useAnimation)();\n    // Animation variants\n    const fadeInVariants = {\n        hidden: {\n            filter: \"blur(20px)\",\n            opacity: 0\n        },\n        visible: {\n            filter: \"blur(0px)\",\n            opacity: 1,\n            transition: {\n                duration: 1,\n                ease: \"easeInOut\"\n            }\n        }\n    };\n    // Trigger animation on component mount\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        controls.start(\"visible\");\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_4__.motion.div, {\n        initial: \"hidden\",\n        animate: controls,\n        variants: fadeInVariants,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"w-5/6 mt-20 pb-10 pr-2 max-w-md h-96 md:h-full\",\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                src: image.guid,\n                alt: image.altText,\n                height: image.mediaDetails.height,\n                width: image.mediaDetails.width,\n                className: \"object-cover w-full h-full\"\n            }, void 0, false, {\n                fileName: \"/home/lde-ross/repos/kwp/src/components/AnimatedImage.tsx\",\n                lineNumber: 33,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/lde-ross/repos/kwp/src/components/AnimatedImage.tsx\",\n            lineNumber: 32,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/lde-ross/repos/kwp/src/components/AnimatedImage.tsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\n_s(AnimatedImage, \"6pZ2lBElA3YLtcQOKE/nS/LmH94=\", false, function() {\n    return [\n        framer_motion__WEBPACK_IMPORTED_MODULE_3__.useAnimation\n    ];\n});\n_c = AnimatedImage;\nvar _c;\n$RefreshReg$(_c, \"AnimatedImage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0FuaW1hdGVkSW1hZ2UudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFDeUM7QUFDWTtBQUN0QjtBQU9oQixTQUFTSyxjQUFjLEtBQWdCO1FBQWhCLEVBQUVDLEtBQUssRUFBUyxHQUFoQjs7SUFDcEMsTUFBTUMsV0FBV0osMkRBQVlBO0lBRTdCLHFCQUFxQjtJQUNyQixNQUFNSyxpQkFBaUI7UUFDckJDLFFBQVE7WUFBRUMsUUFBUTtZQUFjQyxTQUFTO1FBQUU7UUFDM0NDLFNBQVM7WUFBRUYsUUFBUTtZQUFhQyxTQUFTO1lBQUdFLFlBQVk7Z0JBQUVDLFVBQVU7Z0JBQUdDLE1BQU07WUFBWTtRQUFFO0lBRTdGO0lBRUEsdUNBQXVDO0lBQ3ZDZCxnREFBU0EsQ0FBQztRQUNSTSxTQUFTUyxLQUFLLENBQUM7SUFDakIsR0FBRyxFQUFFO0lBRUwscUJBQ0UsOERBQUNkLGlEQUFNQSxDQUFDZSxHQUFHO1FBQ1RDLFNBQVE7UUFDUkMsU0FBU1o7UUFDVGEsVUFBVVo7a0JBRVYsNEVBQUNTO1lBQUlJLFdBQVU7c0JBQ2IsNEVBQUNqQixtREFBS0E7Z0JBQ0prQixLQUFLaEIsTUFBTWlCLElBQUk7Z0JBQ2ZDLEtBQUtsQixNQUFNbUIsT0FBTztnQkFDbEJDLFFBQVFwQixNQUFNcUIsWUFBWSxDQUFDRCxNQUFNO2dCQUNqQ0UsT0FBT3RCLE1BQU1xQixZQUFZLENBQUNDLEtBQUs7Z0JBQy9CUCxXQUFVOzs7Ozs7Ozs7Ozs7Ozs7O0FBS3BCO0dBaEN3QmhCOztRQUNMRix1REFBWUE7OztLQURQRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9BbmltYXRlZEltYWdlLnRzeD8yMjE5Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBtb3Rpb24sIHVzZUFuaW1hdGlvbiB9IGZyb20gXCJmcmFtZXItbW90aW9uXCI7XG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCB0eXBlIHsgSW1hZ2VUeXBlIH0gZnJvbSBcIkAvdHlwZXMvRmlsbVR5cGVzXCI7XG5cbnR5cGUgUHJvcHMgPSB7XG4gICAgaW1hZ2U6IEltYWdlVHlwZTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFuaW1hdGVkSW1hZ2UoeyBpbWFnZSB9OiBQcm9wcykge1xuICBjb25zdCBjb250cm9scyA9IHVzZUFuaW1hdGlvbigpO1xuXG4gIC8vIEFuaW1hdGlvbiB2YXJpYW50c1xuICBjb25zdCBmYWRlSW5WYXJpYW50cyA9IHtcbiAgICBoaWRkZW46IHsgZmlsdGVyOiBcImJsdXIoMjBweClcIiwgb3BhY2l0eTogMCB9LFxuICAgIHZpc2libGU6IHsgZmlsdGVyOiBcImJsdXIoMHB4KVwiLCBvcGFjaXR5OiAxLCB0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiAxLCBlYXNlOiBcImVhc2VJbk91dFwiIH0gfSxcblxuICB9O1xuXG4gIC8vIFRyaWdnZXIgYW5pbWF0aW9uIG9uIGNvbXBvbmVudCBtb3VudFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnRyb2xzLnN0YXJ0KFwidmlzaWJsZVwiKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIGluaXRpYWw9XCJoaWRkZW5cIlxuICAgICAgYW5pbWF0ZT17Y29udHJvbHN9XG4gICAgICB2YXJpYW50cz17ZmFkZUluVmFyaWFudHN9XG4gICAgPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTUvNiBtdC0yMCBwYi0xMCBwci0yIG1heC13LW1kIGgtOTYgbWQ6aC1mdWxsXCI+XG4gICAgICAgIDxJbWFnZVxuICAgICAgICAgIHNyYz17aW1hZ2UuZ3VpZH1cbiAgICAgICAgICBhbHQ9e2ltYWdlLmFsdFRleHR9XG4gICAgICAgICAgaGVpZ2h0PXtpbWFnZS5tZWRpYURldGFpbHMuaGVpZ2h0fVxuICAgICAgICAgIHdpZHRoPXtpbWFnZS5tZWRpYURldGFpbHMud2lkdGh9XG4gICAgICAgICAgY2xhc3NOYW1lPVwib2JqZWN0LWNvdmVyIHctZnVsbCBoLWZ1bGxcIlxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9tb3Rpb24uZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwibW90aW9uIiwidXNlQW5pbWF0aW9uIiwiSW1hZ2UiLCJBbmltYXRlZEltYWdlIiwiaW1hZ2UiLCJjb250cm9scyIsImZhZGVJblZhcmlhbnRzIiwiaGlkZGVuIiwiZmlsdGVyIiwib3BhY2l0eSIsInZpc2libGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwic3RhcnQiLCJkaXYiLCJpbml0aWFsIiwiYW5pbWF0ZSIsInZhcmlhbnRzIiwiY2xhc3NOYW1lIiwic3JjIiwiZ3VpZCIsImFsdCIsImFsdFRleHQiLCJoZWlnaHQiLCJtZWRpYURldGFpbHMiLCJ3aWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/AnimatedImage.tsx\n"));

/***/ })

});