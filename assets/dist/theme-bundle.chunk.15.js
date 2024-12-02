(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./assets/js/theme/category.js":
/*!*************************************!*\
  !*** ./assets/js/theme/category.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Category; });
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
function _readOnlyError(r) { throw new TypeError('"' + r + '" is read-only'); }
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }




var Category = /*#__PURE__*/function (_CatalogPage) {
  function Category() {
    return _CatalogPage.apply(this, arguments) || this;
  }
  _inheritsLoose(Category, _CatalogPage);
  var _proto = Category.prototype;
  _proto.onReady = function onReady() {
    Object(_global_compare_products__WEBPACK_IMPORTED_MODULE_2__["default"])(this.context.urls);
    if ($('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_0__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
    }
    this.mainCategories();
    this.showCategories();
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    var $productListingContainer = $('#product-listing-container');
    var $facetedSearchContainer = $('#faceted-search-container');
    var productsPerPage = this.context.categoryProductsPerPage;
    var requestOptions = {
      config: {
        category: {
          shop_by_price: true,
          products: {
            limit: productsPerPage
          }
        }
      },
      template: {
        productListing: 'category/product-listing',
        sidebar: 'category/sidebar'
      },
      showMore: 'category/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_3__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      $('body').triggerHandler('compareReset');
      $('html, body').animate({
        scrollTop: 0
      }, 100);
    });
  };
  _proto.mainCategories = function mainCategories() {
    var categories = $('.nav-cats');
    var currentPath = window.location.pathname;
    var currentOrigin = window.location.origin;
    if (categories.length) {
      categories.find('a').each(function (index, item) {
        var currentItem = $(item);
        var parent = currentItem.parents('.nav-cats__level-item--1');
        var closest = currentItem.closest('.nav-cats__level--1');
        var href = currentItem.attr('href');
        var completeUrl = currentOrigin + currentPath;
        if (completeUrl === href) {
          currentItem.addClass('is-active');
          parent.addClass('is-active');
          closest.addClass('is-sub-active');
          if (!currentItem.next('.nav-cats__level--2').length && currentItem.parent('.nav-cats__level-item--1').length) {
            closest.addClass('no-sub');
          }
        }
      });
    }
  };
  _proto.showCategories = function showCategories() {
    var showCategories = $('.show-categories');
    if (showCategories.length) {
      showCategories.on('click', function () {
        showCategories.toggleClass('is-active');
        $('#faceted-search-container').toggleClass('is-active');
      });
    }
  };
  return Category;
}(_catalog__WEBPACK_IMPORTED_MODULE_1__["default"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2F0ZWdvcnkuanMiXSwibmFtZXMiOlsiQ2F0ZWdvcnkiLCJfQ2F0YWxvZ1BhZ2UiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9pbmhlcml0c0xvb3NlIiwiX3Byb3RvIiwicHJvdG90eXBlIiwib25SZWFkeSIsImNvbXBhcmVQcm9kdWN0cyIsImNvbnRleHQiLCJ1cmxzIiwiJCIsImxlbmd0aCIsImluaXRGYWNldGVkU2VhcmNoIiwib25Tb3J0QnlTdWJtaXQiLCJiaW5kIiwiaG9va3MiLCJvbiIsIm1haW5DYXRlZ29yaWVzIiwic2hvd0NhdGVnb3JpZXMiLCIkcHJvZHVjdExpc3RpbmdDb250YWluZXIiLCIkZmFjZXRlZFNlYXJjaENvbnRhaW5lciIsInByb2R1Y3RzUGVyUGFnZSIsImNhdGVnb3J5UHJvZHVjdHNQZXJQYWdlIiwicmVxdWVzdE9wdGlvbnMiLCJjb25maWciLCJjYXRlZ29yeSIsInNob3BfYnlfcHJpY2UiLCJwcm9kdWN0cyIsImxpbWl0IiwidGVtcGxhdGUiLCJwcm9kdWN0TGlzdGluZyIsInNpZGViYXIiLCJzaG93TW9yZSIsImZhY2V0ZWRTZWFyY2giLCJGYWNldGVkU2VhcmNoIiwiY29udGVudCIsImh0bWwiLCJ0cmlnZ2VySGFuZGxlciIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJjYXRlZ29yaWVzIiwiY3VycmVudFBhdGgiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInBhdGhuYW1lIiwiY3VycmVudE9yaWdpbiIsIm9yaWdpbiIsImZpbmQiLCJlYWNoIiwiaW5kZXgiLCJpdGVtIiwiY3VycmVudEl0ZW0iLCJwYXJlbnQiLCJwYXJlbnRzIiwiY2xvc2VzdCIsImhyZWYiLCJhdHRyIiwiY29tcGxldGVVcmwiLCJhZGRDbGFzcyIsIm5leHQiLCJ0b2dnbGVDbGFzcyIsIkNhdGFsb2dQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ2Y7QUFDb0I7QUFDSjtB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QkFBcUIsQ0FBQztRQUMxRCxJQUFNQyxJQUFJLEdBQUdKLFdBQVcsQ0FBQ0ssSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQyxJQUFNQyxXQUFXLEdBQUdaLGFBQWEsR0FBR0osV0FBVztRQUUvQyxJQUFJZ0IsV0FBVyxLQUFLRixJQUFJLEVBQUU7VUFDdEJKLFdBQVcsQ0FBQ08sUUFBUSxDQUFDLFdBQVcsQ0FBQztVQUNqQ04sTUFBTSxDQUFDTSxRQUFRLENBQUMsV0FBVyxDQUFDO1VBQzVCSixPQUFPLENBQUNJLFFBQVEsQ0FBQyxlQUFlLENBQUM7VUFFakMsSUFBSSxDQUFDUCxXQUFXLENBQUNRLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDaEQsTUFBTSxJQUFJd0MsV0FBVyxDQUFDQyxNQUFNLENBQUMsMEJBQTBCLENBQUMsQ0FBQ3pDLE1BQU0sRUFBRTtZQUMxRzJDLE9BQU8sQ0FBQ0ksUUFBUSxDQUFDLFFBQVEsQ0FBQztVQUM5QjtRQUNKO01BQ0osQ0FBQyxDQUFDO0lBQ047RUFDSixDQUFDO0VBQUF0RCxNQUFBLENBRURjLGNBQWMsR0FBZCxTQUFBQSxjQUFjQSxDQUFBLEVBQUc7SUFDYixJQUFNQSxjQUFjLEdBQUdSLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQztJQUU1QyxJQUFJUSxjQUFjLENBQUNQLE1BQU0sRUFBRTtNQUN2Qk8sY0FBYyxDQUFDRixFQUFFLENBQUMsT0FBTyxFQUFFLFlBQU07UUFDN0JFLGNBQWMsQ0FBQzBDLFdBQVcsQ0FBQyxXQUFXLENBQUM7UUFDdkNsRCxDQUFDLENBQUMsMkJBQTJCLENBQUMsQ0FBQ2tELFdBQVcsQ0FBQyxXQUFXLENBQUM7TUFDM0QsQ0FBQyxDQUFDO0lBQ047RUFDSixDQUFDO0VBQUEsT0FBQTdELFFBQUE7QUFBQSxFQWxGaUM4RCxnREFBVyIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuMTUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBob29rcyB9IGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBDYXRhbG9nUGFnZSBmcm9tICcuL2NhdGFsb2cnO1xuaW1wb3J0IGNvbXBhcmVQcm9kdWN0cyBmcm9tICcuL2dsb2JhbC9jb21wYXJlLXByb2R1Y3RzJztcbmltcG9ydCBGYWNldGVkU2VhcmNoIGZyb20gJy4vY29tbW9uL2ZhY2V0ZWQtc2VhcmNoJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2F0ZWdvcnkgZXh0ZW5kcyBDYXRhbG9nUGFnZSB7XG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgY29tcGFyZVByb2R1Y3RzKHRoaXMuY29udGV4dC51cmxzKTtcblxuICAgICAgICBpZiAoJCgnI2ZhY2V0ZWRTZWFyY2gnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRGYWNldGVkU2VhcmNoKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm9uU29ydEJ5U3VibWl0ID0gdGhpcy5vblNvcnRCeVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgICAgICAgaG9va3Mub24oJ3NvcnRCeS1zdWJtaXR0ZWQnLCB0aGlzLm9uU29ydEJ5U3VibWl0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubWFpbkNhdGVnb3JpZXMoKTtcbiAgICAgICAgdGhpcy5zaG93Q2F0ZWdvcmllcygpO1xuICAgIH1cblxuICAgIGluaXRGYWNldGVkU2VhcmNoKCkge1xuICAgICAgICBjb25zdCAkcHJvZHVjdExpc3RpbmdDb250YWluZXIgPSAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCAkZmFjZXRlZFNlYXJjaENvbnRhaW5lciA9ICQoJyNmYWNldGVkLXNlYXJjaC1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgcHJvZHVjdHNQZXJQYWdlID0gdGhpcy5jb250ZXh0LmNhdGVnb3J5UHJvZHVjdHNQZXJQYWdlO1xuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGNvbmZpZzoge1xuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB7XG4gICAgICAgICAgICAgICAgICAgIHNob3BfYnlfcHJpY2U6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW1pdDogcHJvZHVjdHNQZXJQYWdlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0TGlzdGluZzogJ2NhdGVnb3J5L3Byb2R1Y3QtbGlzdGluZycsXG4gICAgICAgICAgICAgICAgc2lkZWJhcjogJ2NhdGVnb3J5L3NpZGViYXInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3dNb3JlOiAnY2F0ZWdvcnkvc2hvdy1tb3JlJyxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmZhY2V0ZWRTZWFyY2ggPSBuZXcgRmFjZXRlZFNlYXJjaChyZXF1ZXN0T3B0aW9ucywgKGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5odG1sKGNvbnRlbnQucHJvZHVjdExpc3RpbmcpO1xuICAgICAgICAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xuXG4gICAgICAgICAgICAkKCdib2R5JykudHJpZ2dlckhhbmRsZXIoJ2NvbXBhcmVSZXNldCcpO1xuXG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAwLFxuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgbWFpbkNhdGVnb3JpZXMoKSB7XG4gICAgICAgIGNvbnN0IGNhdGVnb3JpZXMgPSAkKCcubmF2LWNhdHMnKTtcbiAgICAgICAgY29uc3QgY3VycmVudFBhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRPcmlnaW4gPSB3aW5kb3cubG9jYXRpb24ub3JpZ2luO1xuXG4gICAgICAgIGlmIChjYXRlZ29yaWVzLmxlbmd0aCkge1xuICAgICAgICAgICAgY2F0ZWdvcmllcy5maW5kKCdhJykuZWFjaCgoaW5kZXgsIGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50SXRlbSA9ICQoaXRlbSlcbiAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSBjdXJyZW50SXRlbS5wYXJlbnRzKCcubmF2LWNhdHNfX2xldmVsLWl0ZW0tLTEnKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjbG9zZXN0ID0gY3VycmVudEl0ZW0uY2xvc2VzdCgnLm5hdi1jYXRzX19sZXZlbC0tMScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGhyZWYgPSBjdXJyZW50SXRlbS5hdHRyKCdocmVmJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgY29tcGxldGVVcmwgPSBjdXJyZW50T3JpZ2luICsgY3VycmVudFBhdGg7XG5cbiAgICAgICAgICAgICAgICBpZiAoY29tcGxldGVVcmwgPT09IGhyZWYpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudEl0ZW0uYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnQuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICBjbG9zZXN0LmFkZENsYXNzKCdpcy1zdWItYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50SXRlbS5uZXh0KCcubmF2LWNhdHNfX2xldmVsLS0yJykubGVuZ3RoICYmIGN1cnJlbnRJdGVtLnBhcmVudCgnLm5hdi1jYXRzX19sZXZlbC1pdGVtLS0xJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbG9zZXN0LmFkZENsYXNzKCduby1zdWInKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc2hvd0NhdGVnb3JpZXMoKSB7XG4gICAgICAgIGNvbnN0IHNob3dDYXRlZ29yaWVzID0gJCgnLnNob3ctY2F0ZWdvcmllcycpO1xuXG4gICAgICAgIGlmIChzaG93Q2F0ZWdvcmllcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHNob3dDYXRlZ29yaWVzLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBzaG93Q2F0ZWdvcmllcy50b2dnbGVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lcicpLnRvZ2dsZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG59XG4iXSwic291cmNlUm9vdCI6IiJ9