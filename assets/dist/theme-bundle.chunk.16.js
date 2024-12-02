(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./assets/js/theme/home.js":
/*!*********************************!*\
  !*** ./assets/js/theme/home.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Home; });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var Home = /*#__PURE__*/function (_PageManager) {
  function Home() {
    return _PageManager.apply(this, arguments) || this;
  }
  _inheritsLoose(Home, _PageManager);
  var _proto = Home.prototype;
  _proto.onReady = function onReady() {
    this.titleSubString();
  };
  _proto.titleSubString = function titleSubString() {
    $('.ch-info-back h3').each(function (i, elem) {
      var textInH3 = $(elem).text();
      if (textInH3.length > 25) {
        textInH3 = textInH3.substring(0, 25) + "...";
      }
      $(elem).text(textInH3);
    });
  };
  return Home;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvaG9tZS5qcyJdLCJuYW1lcyI6WyJIb21lIiwiX1BhZ2VNYW5hZ2VyIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfaW5oZXJpdHNMb29zZSIsIl9wcm90byIsInByb3RvdHlwZSIsIm9uUmVhZHkiLCJ0aXRsZVN1YlN0cmluZyIsIiQiLCJlYWNoIiwiaSIsImVsZW0iLCJ0ZXh0SW5IMyIsInRleHQiLCJsZW5ndGgiLCJzdWJzdHJpbmciLCJQYWdlTWFuYWdlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQUEsSUFFcEJBLElBQUksMEJBQUFDLFlBQUE7RUFBQSxTQUFBRCxLQUFBO0lBQUEsT0FBQUMsWUFBQSxDQUFBQyxLQUFBLE9BQUFDLFNBQUE7RUFBQTtFQUFBQyxjQUFBLENBQUFKLElBQUEsRUFBQUMsWUFBQTtFQUFBLElBQUFJLE1BQUEsR0FBQUwsSUFBQSxDQUFBTSxTQUFBO0VBQUFELE1BQUEsQ0FDckJFLE9BQU8sR0FBUCxTQUFBQSxPQUFPQSxDQUFBLEVBQUc7SUFDTixJQUFJLENBQUNDLGNBQWMsQ0FBQyxDQUFDO0VBQ3pCLENBQUM7RUFBQUgsTUFBQSxDQUVERyxjQUFjLEdBQWQsU0FBQUEsY0FBY0EsQ0FBQSxFQUFHO0lBQ2JDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDQyxJQUFJLENBQUMsVUFBQ0MsQ0FBQyxFQUFFQyxJQUFJLEVBQUs7TUFDcEMsSUFBSUMsUUFBUSxHQUFHSixDQUFDLENBQUNHLElBQUksQ0FBQyxDQUFDRSxJQUFJLENBQUMsQ0FBQztNQUU3QixJQUFJRCxRQUFRLENBQUNFLE1BQU0sR0FBRyxFQUFFLEVBQUU7UUFDdEJGLFFBQVEsR0FBTUEsUUFBUSxDQUFDRyxTQUFTLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxRQUFLO01BQ2hEO01BRUFQLENBQUMsQ0FBQ0csSUFBSSxDQUFDLENBQUNFLElBQUksQ0FBQ0QsUUFBUSxDQUFDO0lBQzFCLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQSxPQUFBYixJQUFBO0FBQUEsRUFmNkJpQixxREFBVyIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMTYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIHRoaXMudGl0bGVTdWJTdHJpbmcoKTtcbiAgICB9XG5cbiAgICB0aXRsZVN1YlN0cmluZygpIHtcbiAgICAgICAgJCgnLmNoLWluZm8tYmFjayBoMycpLmVhY2goKGksIGVsZW0pID0+IHtcbiAgICAgICAgICAgIGxldCB0ZXh0SW5IMyA9ICQoZWxlbSkudGV4dCgpO1xuXG4gICAgICAgICAgICBpZiAodGV4dEluSDMubGVuZ3RoID4gMjUpIHtcbiAgICAgICAgICAgICAgICB0ZXh0SW5IMyA9IGAke3RleHRJbkgzLnN1YnN0cmluZygwLCAyNSl9Li4uYDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJChlbGVtKS50ZXh0KHRleHRJbkgzKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==