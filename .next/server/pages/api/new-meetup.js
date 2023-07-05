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
exports.id = "pages/api/new-meetup";
exports.ids = ["pages/api/new-meetup"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        const data = req.body;\n        const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(\"mongodb+srv://techking08:gFQUmENkWxnmNVHR@cluster0.0mtrgnx.mongodb.net/meetups?retryWrites=true&w=majority\");\n        const db = client.db();\n        const meetupCollection = db.collection(\"meetups\");\n        const result = await meetupCollection.insertOne(data);\n        console.log(result);\n        client.close();\n        res.status(201).json({\n            message: \"meetup successfully added\"\n        });\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0M7QUFFdEMsZUFBZUMsT0FBTyxDQUFDQyxHQUFHLEVBQUNDLEdBQUcsRUFBQztJQUMvQixJQUFHRCxHQUFHLENBQUNFLE1BQU0sS0FBRyxNQUFNLEVBQUM7UUFDdkIsTUFBTUMsSUFBSSxHQUFDSCxHQUFHLENBQUNJLElBQUk7UUFFbkIsTUFBTUMsTUFBTSxHQUFHLE1BQU1QLHdEQUFtQixDQUFDLDRHQUE0RyxDQUFDO1FBRXRKLE1BQU1TLEVBQUUsR0FBQ0YsTUFBTSxDQUFDRSxFQUFFLEVBQUU7UUFDcEIsTUFBTUMsZ0JBQWdCLEdBQUNELEVBQUUsQ0FBQ0UsVUFBVSxDQUFDLFNBQVMsQ0FBQztRQUMvQyxNQUFNQyxNQUFNLEdBQUMsTUFBTUYsZ0JBQWdCLENBQUNHLFNBQVMsQ0FBQ1IsSUFBSSxDQUFDO1FBQ25EUyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0gsTUFBTSxDQUFDO1FBQ25CTCxNQUFNLENBQUNTLEtBQUssRUFBRTtRQUNkYixHQUFHLENBQUNjLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDO1lBQUNDLE9BQU8sRUFBQywyQkFBMkI7U0FBQyxDQUFDO0lBQzNELENBQUM7QUFDRCxDQUFDO0FBQ0QsaUVBQWVsQixPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dGpzLWNvdXJzZS8uL3BhZ2VzL2FwaS9uZXctbWVldHVwLmpzPzczOTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tIFwibW9uZ29kYlwiO1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlcihyZXEscmVzKXtcclxuaWYocmVxLm1ldGhvZD09PVwiUE9TVFwiKXtcclxuY29uc3QgZGF0YT1yZXEuYm9keVxyXG5cclxuY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdChcIm1vbmdvZGIrc3J2Oi8vdGVjaGtpbmcwODpnRlFVbUVOa1d4bm1OVkhSQGNsdXN0ZXIwLjBtdHJnbngubW9uZ29kYi5uZXQvbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIik7XHJcblxyXG5jb25zdCBkYj1jbGllbnQuZGIoKVxyXG5jb25zdCBtZWV0dXBDb2xsZWN0aW9uPWRiLmNvbGxlY3Rpb24oXCJtZWV0dXBzXCIpXHJcbmNvbnN0IHJlc3VsdD1hd2FpdCBtZWV0dXBDb2xsZWN0aW9uLmluc2VydE9uZShkYXRhKVxyXG5jb25zb2xlLmxvZyhyZXN1bHQpXHJcbmNsaWVudC5jbG9zZSgpXHJcbnJlcy5zdGF0dXMoMjAxKS5qc29uKHttZXNzYWdlOlwibWVldHVwIHN1Y2Nlc3NmdWxseSBhZGRlZFwifSlcclxufVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXIiXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwibWV0aG9kIiwiZGF0YSIsImJvZHkiLCJjbGllbnQiLCJjb25uZWN0IiwiZGIiLCJtZWV0dXBDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsInJlc3VsdCIsImluc2VydE9uZSIsImNvbnNvbGUiLCJsb2ciLCJjbG9zZSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-meetup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new-meetup.js"));
module.exports = __webpack_exports__;

})();