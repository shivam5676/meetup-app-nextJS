"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/[meetid]";
exports.ids = ["pages/[meetid]"];
exports.modules = {

/***/ "./pages/[meetid]/index.js":
/*!*********************************!*\
  !*** ./pages/[meetid]/index.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next */ \"next\");\n/* harmony import */ var next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\nfunction MeetUpDetails() {\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n    const userId = router.query.meetid;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n        children: userId\n    }, void 0, false, {\n        fileName: \"C:\\\\nextjs Project\\\\meetup-app\\\\pages\\\\[meetid]\\\\index.js\",\n        lineNumber: 8,\n        columnNumber: 10\n    }, this);\n}\nasync function getStaticPaths() {\n    return {\n        fallback: false,\n        paths: [\n            {\n                params: {\n                    meetid: \"a1\"\n                }\n            },\n            {\n                params: {\n                    meetid: \"a2\"\n                }\n            },\n            {\n                params: {\n                    meetid: \"a3\"\n                }\n            }, \n        ]\n    };\n}\nasync function getStaticProps(context) {\n    const meetupid = context.params.meetid;\n    console.log(meetupid);\n    return {\n        props: {\n            meetupdata: {\n                id: meetupid\n            }\n        }\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MeetUpDetails);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bbWVldGlkXS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUF3QztBQUNGO0FBQ0E7QUFFdEMsU0FBU0csYUFBYSxHQUFHO0lBQ3ZCLE1BQU1DLE1BQU0sR0FBR0osc0RBQVMsRUFBRTtJQUMxQixNQUFNSyxNQUFNLEdBQUdELE1BQU0sQ0FBQ0UsS0FBSyxDQUFDQyxNQUFNO0lBQ2xDLHFCQUFPLDhEQUFDQyxJQUFFO2tCQUFFSCxNQUFNOzs7OztZQUFNLENBQUM7QUFDM0IsQ0FBQztBQUVNLGVBQWVJLGNBQWMsR0FBRztJQUNyQyxPQUFPO1FBQ0xDLFFBQVEsRUFBRSxLQUFLO1FBQ2ZDLEtBQUssRUFBRTtZQUNMO2dCQUNFQyxNQUFNLEVBQUU7b0JBQ05MLE1BQU0sRUFBQyxJQUFJO2lCQUNaO2FBQ0Y7WUFDRDtnQkFDRUssTUFBTSxFQUFFO29CQUNOTCxNQUFNLEVBQUMsSUFBSTtpQkFDWjthQUNGO1lBQ0Q7Z0JBQ0VLLE1BQU0sRUFBRTtvQkFDTkwsTUFBTSxFQUFDLElBQUk7aUJBQ1o7YUFDRjtTQUNGO0tBQ0YsQ0FBQztBQUNKLENBQUM7QUFFTSxlQUFlTSxjQUFjLENBQUNDLE9BQU8sRUFBRTtJQUM1QyxNQUFNQyxRQUFRLEdBQUdELE9BQU8sQ0FBQ0YsTUFBTSxDQUFDTCxNQUFNO0lBQ3RDUyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsUUFBUSxDQUFDLENBQUM7SUFDdEIsT0FBTztRQUNMRyxLQUFLLEVBQUU7WUFDTEMsVUFBVSxFQUFFO2dCQUNWQyxFQUFFLEVBQUVMLFFBQVE7YUFDYjtTQUNGO0tBQ0YsQ0FBQztBQUNKLENBQUM7QUFDRCxpRUFBZVosYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL3BhZ2VzL1ttZWV0aWRdL2luZGV4LmpzPzdhZjUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IEdldFN0YXRpY1BhdGhzIH0gZnJvbSBcIm5leHRcIjtcclxuaW1wb3J0IHsgR2V0U3RhdGljUHJvcHMgfSBmcm9tIFwibmV4dFwiO1xyXG5cclxuZnVuY3Rpb24gTWVldFVwRGV0YWlscygpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCB1c2VySWQgPSByb3V0ZXIucXVlcnkubWVldGlkO1xyXG4gIHJldHVybiA8aDE+e3VzZXJJZH08L2gxPjtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xyXG4gIHJldHVybiB7XHJcbiAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgICBwYXRoczogW1xyXG4gICAgICB7XHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICBtZWV0aWQ6J2ExJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICBtZWV0aWQ6J2EyJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICBtZWV0aWQ6J2EzJyxcclxuICAgICAgICB9LFxyXG4gICAgICB9LFxyXG4gICAgXSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG4gIGNvbnN0IG1lZXR1cGlkID0gY29udGV4dC5wYXJhbXMubWVldGlkO1xyXG4gIGNvbnNvbGUubG9nKG1lZXR1cGlkKTtcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgbWVldHVwZGF0YToge1xyXG4gICAgICAgIGlkOiBtZWV0dXBpZCxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfTtcclxufVxyXG5leHBvcnQgZGVmYXVsdCBNZWV0VXBEZXRhaWxzO1xyXG4iXSwibmFtZXMiOlsidXNlUm91dGVyIiwiR2V0U3RhdGljUGF0aHMiLCJHZXRTdGF0aWNQcm9wcyIsIk1lZXRVcERldGFpbHMiLCJyb3V0ZXIiLCJ1c2VySWQiLCJxdWVyeSIsIm1lZXRpZCIsImgxIiwiZ2V0U3RhdGljUGF0aHMiLCJmYWxsYmFjayIsInBhdGhzIiwicGFyYW1zIiwiZ2V0U3RhdGljUHJvcHMiLCJjb250ZXh0IiwibWVldHVwaWQiLCJjb25zb2xlIiwibG9nIiwicHJvcHMiLCJtZWV0dXBkYXRhIiwiaWQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[meetid]/index.js\n");

/***/ }),

/***/ "next":
/*!****************************************************!*\
  !*** external "next/dist/lib/import-next-warning" ***!
  \****************************************************/
/***/ ((module) => {

module.exports = require("next/dist/lib/import-next-warning");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/[meetid]/index.js"));
module.exports = __webpack_exports__;

})();