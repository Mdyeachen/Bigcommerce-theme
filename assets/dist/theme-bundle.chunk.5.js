(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./assets/js/theme/product.js":
/*!************************************!*\
  !*** ./assets/js/theme/product.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Product; });
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _product_reviews__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product/reviews */ "./assets/js/theme/product/reviews.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_product_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/product-details */ "./assets/js/theme/common/product-details.js");
/* harmony import */ var _product_video_gallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./product/video-gallery */ "./assets/js/theme/product/video-gallery.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _product_jquery_fancybox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./product/jquery-fancybox */ "./assets/js/theme/product/jquery-fancybox.js");
/* harmony import */ var _product_jquery_fancybox__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_product_jquery_fancybox__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _ysw_modules_product__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ysw/modules/product */ "./assets/js/theme/ysw/modules/product.js");
function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
/*
 Import all product specific js
 */









var WRITE_REVIEW = _global_modal__WEBPACK_IMPORTED_MODULE_6__["modalTypes"].WRITE_REVIEW;
var Product = /*#__PURE__*/function (_PageManager) {
  function Product(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.url = window.location.href;
    _this.$reviewLink = $('[data-reveal-id="modal-review-form"]');
    _this.$bulkPricingLink = $('[data-reveal-id="modal-bulk-pricing"]');
    _this.reviewModal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_6__["default"])('#modal-review-form')[0];
    return _this;
  }
  _inheritsLoose(Product, _PageManager);
  var _proto = Product.prototype;
  _proto.onReady = function onReady() {
    var _this2 = this;
    // Listen for foundation modal close events to sanitize URL after review.
    $(document).on('close.fndtn.reveal', function () {
      if (_this2.url.indexOf('#write_review') !== -1 && typeof window.history.replaceState === 'function') {
        window.history.replaceState(null, document.title, window.location.pathname);
      }
    });
    $(document).on('opened.fndtn.reveal', function () {
      var _this2$reviewModal;
      return (_this2$reviewModal = _this2.reviewModal) == null ? void 0 : _this2$reviewModal.setupFocusableElements(WRITE_REVIEW);
    });
    var validator;

    // Init collapsible
    Object(_common_collapsible__WEBPACK_IMPORTED_MODULE_2__["default"])();
    this.productDetails = new _common_product_details__WEBPACK_IMPORTED_MODULE_3__["default"]($('.productView'), this.context, window.BCData.product_attributes);
    this.productDetails.setProductVariant();
    Object(_product_video_gallery__WEBPACK_IMPORTED_MODULE_4__["default"])();
    var $reviewForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_5__["classifyForm"])('.writeReview-form');
    var review = new _product_reviews__WEBPACK_IMPORTED_MODULE_1__["default"]($reviewForm);
    $('body').on('click', '[data-reveal-id="modal-review-form"]', function () {
      validator = review.registerValidation(_this2.context);
      _this2.ariaDescribeReviewInputs($reviewForm);
    });
    $reviewForm.on('submit', function () {
      if (validator) {
        validator.performCheck();
        return validator.areAll('valid');
      }
      return false;
    });
    this.productReviewHandler();
    this.bulkPricingHandler();
    Object(_ysw_modules_product__WEBPACK_IMPORTED_MODULE_8__["default"])(this.context);
  };
  _proto.ariaDescribeReviewInputs = function ariaDescribeReviewInputs($form) {
    $form.find('[data-input]').each(function (_, input) {
      var $input = $(input);
      var msgSpanId = $input.attr('name') + "-msg";
      $input.siblings('span').attr('id', msgSpanId);
      $input.attr('aria-describedby', msgSpanId);
    });
  };
  _proto.productReviewHandler = function productReviewHandler() {
    if (this.url.indexOf('#write_review') !== -1) {
      this.$reviewLink.trigger('click');
    }
  };
  _proto.bulkPricingHandler = function bulkPricingHandler() {
    if (this.url.indexOf('#bulk_pricing') !== -1) {
      this.$bulkPricingLink.trigger('click');
    }
  };
  return Product;
}(_page_manager__WEBPACK_IMPORTED_MODULE_0__["default"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/product/jquery-fancybox.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/product/jquery-fancybox.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {// ==================================================
// fancyBox v3.5.7
//
// Licensed GPLv3 for open source use
// or fancyBox Commercial License for commercial use
//
// http://fancyapps.com/fancybox/
// Copyright 2019 fancyApps
//
// ==================================================
(function (window, document, $, undefined) {
  "use strict";

  window.console = window.console || {
    info: function info(stuff) {}
  };

  // If there's no jQuery, fancyBox can't work
  // =========================================

  if (!$) {
    return;
  }

  // Check if fancyBox is already initialized
  // ========================================

  if ($.fn.fancybox) {
    console.info("fancyBox already initialized");
    return;
  }

  // Private default settings
  // ========================

  var defaults = {
    // Close existing modals
    // Set this to false if you do not need to stack multiple instances
    closeExisting: false,
    // Enable infinite gallery navigation
    loop: false,
    // Horizontal space between slides
    gutter: 50,
    // Enable keyboard navigation
    keyboard: true,
    // Should allow caption to overlap the content
    preventCaptionOverlap: true,
    // Should display navigation arrows at the screen edges
    arrows: true,
    // Should display counter at the top left corner
    infobar: true,
    // Should display close button (using `btnTpl.smallBtn` template) over the content
    // Can be true, false, "auto"
    // If "auto" - will be automatically enabled for "html", "inline" or "ajax" items
    smallBtn: "auto",
    // Should display toolbar (buttons at the top)
    // Can be true, false, "auto"
    // If "auto" - will be automatically hidden if "smallBtn" is enabled
    toolbar: "auto",
    // What buttons should appear in the top right corner.
    // Buttons will be created using templates from `btnTpl` option
    // and they will be placed into toolbar (class="fancybox-toolbar"` element)
    buttons: ["zoom",
    //"share",
    "slideShow",
    //"fullScreen",
    //"download",
    "thumbs", "close"],
    // Detect "idle" time in seconds
    idleTime: 3,
    // Disable right-click and use simple image protection for images
    protect: false,
    // Shortcut to make content "modal" - disable keyboard navigtion, hide buttons, etc
    modal: false,
    image: {
      // Wait for images to load before displaying
      //   true  - wait for image to load and then display;
      //   false - display thumbnail and load the full-sized image over top,
      //           requires predefined image dimensions (`data-width` and `data-height` attributes)
      preload: false
    },
    ajax: {
      // Object containing settings for ajax request
      settings: {
        // This helps to indicate that request comes from the modal
        // Feel free to change naming
        data: {
          fancybox: true
        }
      }
    },
    iframe: {
      // Iframe template
      tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen="allowfullscreen" allow="autoplay; fullscreen" src=""></iframe>',
      // Preload iframe before displaying it
      // This allows to calculate iframe content width and height
      // (note: Due to "Same Origin Policy", you can't get cross domain data).
      preload: true,
      // Custom CSS styling for iframe wrapping element
      // You can use this to set custom iframe dimensions
      css: {},
      // Iframe tag attributes
      attr: {
        scrolling: "auto"
      }
    },
    // For HTML5 video only
    video: {
      tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}">' + '<source src="{{src}}" type="{{format}}" />' + 'Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!' + "</video>",
      format: "",
      // custom video format
      autoStart: true
    },
    // Default content type if cannot be detected automatically
    defaultType: "image",
    // Open/close animation type
    // Possible values:
    //   false            - disable
    //   "zoom"           - zoom images from/to thumbnail
    //   "fade"
    //   "zoom-in-out"
    //
    animationEffect: "zoom",
    // Duration in ms for open/close animation
    animationDuration: 366,
    // Should image change opacity while zooming
    // If opacity is "auto", then opacity will be changed if image and thumbnail have different aspect ratios
    zoomOpacity: "auto",
    // Transition effect between slides
    //
    // Possible values:
    //   false            - disable
    //   "fade'
    //   "slide'
    //   "circular'
    //   "tube'
    //   "zoom-in-out'
    //   "rotate'
    //
    transitionEffect: "fade",
    // Duration in ms for transition animation
    transitionDuration: 366,
    // Custom CSS class for slide element
    slideClass: "",
    // Custom CSS class for layout
    baseClass: "",
    // Base template for layout
    baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1">' + '<div class="fancybox-bg"></div>' + '<div class="fancybox-inner">' + '<div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div>' + '<div class="fancybox-toolbar">{{buttons}}</div>' + '<div class="fancybox-navigation">{{arrows}}</div>' + '<div class="fancybox-stage"></div>' + '<div class="fancybox-caption"><div class="fancybox-caption__body"></div></div>' + "</div>" + "</div>",
    // Loading indicator template
    spinnerTpl: '<div class="fancybox-loading"></div>',
    // Error message template
    errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
    btnTpl: {
      download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;">' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg>' + "</a>",
      zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}">' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg>' + "</button>",
      close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}">' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg>' + "</button>",
      // Arrows
      arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}">' + '<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div>' + "</button>",
      arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}">' + '<div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div>' + "</button>",
      // This small close button will be appended to your html/inline/ajax content by default,
      // if "smallBtn" option is not set to false
      smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}">' + '<svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg>' + "</button>"
    },
    // Container is injected into this element
    parentEl: "body",
    // Hide browser vertical scrollbars; use at your own risk
    hideScrollbar: true,
    // Focus handling
    // ==============

    // Try to focus on the first focusable element after opening
    autoFocus: true,
    // Put focus back to active element after closing
    backFocus: true,
    // Do not let user to focus on element outside modal content
    trapFocus: true,
    // Module specific options
    // =======================

    fullScreen: {
      autoStart: false
    },
    // Set `touch: false` to disable panning/swiping
    touch: {
      vertical: true,
      // Allow to drag content vertically
      momentum: true // Continue movement after releasing mouse/touch when panning
    },
    // Hash value when initializing manually,
    // set `false` to disable hash change
    hash: null,
    // Customize or add new media types
    // Example:
    /*
      media : {
        youtube : {
          params : {
            autoplay : 0
          }
        }
      }
    */
    media: {},
    slideShow: {
      autoStart: false,
      speed: 3000
    },
    thumbs: {
      autoStart: false,
      // Display thumbnails on opening
      hideOnClose: true,
      // Hide thumbnail grid when closing animation starts
      parentEl: ".fancybox-container",
      // Container is injected into this element
      axis: "y" // Vertical (y) or horizontal (x) scrolling
    },
    // Use mousewheel to navigate gallery
    // If 'auto' - enabled for images only
    wheel: "auto",
    // Callbacks
    //==========

    // See Documentation/API/Events for more information
    // Example:
    /*
      afterShow: function( instance, current ) {
        console.info( 'Clicked element:' );
        console.info( current.opts.$orig );
      }
    */

    onInit: $.noop,
    // When instance has been initialized

    beforeLoad: $.noop,
    // Before the content of a slide is being loaded
    afterLoad: $.noop,
    // When the content of a slide is done loading

    beforeShow: $.noop,
    // Before open animation starts
    afterShow: $.noop,
    // When content is done loading and animating

    beforeClose: $.noop,
    // Before the instance attempts to close. Return false to cancel the close.
    afterClose: $.noop,
    // After instance has been closed

    onActivate: $.noop,
    // When instance is brought to front
    onDeactivate: $.noop,
    // When other instance has been activated

    // Interaction
    // ===========

    // Use options below to customize taken action when user clicks or double clicks on the fancyBox area,
    // each option can be string or method that returns value.
    //
    // Possible values:
    //   "close"           - close instance
    //   "next"            - move to next gallery item
    //   "nextOrClose"     - move to next gallery item or close if gallery has only one item
    //   "toggleControls"  - show/hide controls
    //   "zoom"            - zoom image (if loaded)
    //   false             - do nothing

    // Clicked on the content
    clickContent: function clickContent(current, event) {
      return current.type === "image" ? "zoom" : false;
    },
    // Clicked on the slide
    clickSlide: "close",
    // Clicked on the background (backdrop) element;
    // if you have not changed the layout, then most likely you need to use `clickSlide` option
    clickOutside: "close",
    // Same as previous two, but for double click
    dblclickContent: false,
    dblclickSlide: false,
    dblclickOutside: false,
    // Custom options when mobile device is detected
    // =============================================

    mobile: {
      preventCaptionOverlap: false,
      idleTime: false,
      clickContent: function clickContent(current, event) {
        return current.type === "image" ? "toggleControls" : false;
      },
      clickSlide: function clickSlide(current, event) {
        return current.type === "image" ? "toggleControls" : "close";
      },
      dblclickContent: function dblclickContent(current, event) {
        return current.type === "image" ? "zoom" : false;
      },
      dblclickSlide: function dblclickSlide(current, event) {
        return current.type === "image" ? "zoom" : false;
      }
    },
    // Internationalization
    // ====================

    lang: "en",
    i18n: {
      en: {
        CLOSE: "Close",
        NEXT: "Next",
        PREV: "Previous",
        ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
        PLAY_START: "Start slideshow",
        PLAY_STOP: "Pause slideshow",
        FULL_SCREEN: "Full screen",
        THUMBS: "Thumbnails",
        DOWNLOAD: "Download",
        SHARE: "Share",
        ZOOM: "Zoom"
      },
      de: {
        CLOSE: "Schlie&szlig;en",
        NEXT: "Weiter",
        PREV: "Zur&uuml;ck",
        ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es sp&auml;ter nochmal.",
        PLAY_START: "Diaschau starten",
        PLAY_STOP: "Diaschau beenden",
        FULL_SCREEN: "Vollbild",
        THUMBS: "Vorschaubilder",
        DOWNLOAD: "Herunterladen",
        SHARE: "Teilen",
        ZOOM: "Vergr&ouml;&szlig;ern"
      }
    }
  };

  // Few useful variables and methods
  // ================================

  var $W = $(window);
  var $D = $(document);
  var called = 0;

  // Check if an object is a jQuery object and not a native JavaScript object
  // ========================================================================
  var isQuery = function isQuery(obj) {
    return obj && obj.hasOwnProperty && obj instanceof $;
  };

  // Handle multiple browsers for "requestAnimationFrame" and "cancelAnimationFrame"
  // ===============================================================================
  var requestAFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame ||
    // if all else fails, use setTimeout
    function (callback) {
      return window.setTimeout(callback, 1000 / 60);
    };
  }();
  var cancelAFrame = function () {
    return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || function (id) {
      window.clearTimeout(id);
    };
  }();

  // Detect the supported transition-end event property name
  // =======================================================
  var transitionEnd = function () {
    var el = document.createElement("fakeelement"),
      t;
    var transitions = {
      transition: "transitionend",
      OTransition: "oTransitionEnd",
      MozTransition: "transitionend",
      WebkitTransition: "webkitTransitionEnd"
    };
    for (t in transitions) {
      if (el.style[t] !== undefined) {
        return transitions[t];
      }
    }
    return "transitionend";
  }();

  // Force redraw on an element.
  // This helps in cases where the browser doesn't redraw an updated element properly
  // ================================================================================
  var forceRedraw = function forceRedraw($el) {
    return $el && $el.length && $el[0].offsetHeight;
  };

  // Exclude array (`buttons`) options from deep merging
  // ===================================================
  var mergeOpts = function mergeOpts(opts1, opts2) {
    var rez = $.extend(true, {}, opts1, opts2);
    $.each(opts2, function (key, value) {
      if ($.isArray(value)) {
        rez[key] = value;
      }
    });
    return rez;
  };

  // How much of an element is visible in viewport
  // =============================================

  var inViewport = function inViewport(elem) {
    var elemCenter, rez;
    if (!elem || elem.ownerDocument !== document) {
      return false;
    }
    $(".fancybox-container").css("pointer-events", "none");
    elemCenter = {
      x: elem.getBoundingClientRect().left + elem.offsetWidth / 2,
      y: elem.getBoundingClientRect().top + elem.offsetHeight / 2
    };
    rez = document.elementFromPoint(elemCenter.x, elemCenter.y) === elem;
    $(".fancybox-container").css("pointer-events", "");
    return rez;
  };

  // Class definition
  // ================

  var FancyBox = function FancyBox(content, opts, index) {
    var self = this;
    self.opts = mergeOpts({
      index: index
    }, $.fancybox.defaults);
    if ($.isPlainObject(opts)) {
      self.opts = mergeOpts(self.opts, opts);
    }
    if ($.fancybox.isMobile) {
      self.opts = mergeOpts(self.opts, self.opts.mobile);
    }
    self.id = self.opts.id || ++called;
    self.currIndex = parseInt(self.opts.index, 10) || 0;
    self.prevIndex = null;
    self.prevPos = null;
    self.currPos = 0;
    self.firstRun = true;

    // All group items
    self.group = [];

    // Existing slides (for current, next and previous gallery items)
    self.slides = {};

    // Create group elements
    self.addContent(content);
    if (!self.group.length) {
      return;
    }
    self.init();
  };
  $.extend(FancyBox.prototype, {
    // Create DOM structure
    // ====================

    init: function init() {
      var self = this,
        firstItem = self.group[self.currIndex],
        firstItemOpts = firstItem.opts,
        $container,
        buttonStr;
      if (firstItemOpts.closeExisting) {
        $.fancybox.close(true);
      }

      // Hide scrollbars
      // ===============

      $("body").addClass("fancybox-active");
      if (!$.fancybox.getInstance() && firstItemOpts.hideScrollbar !== false && !$.fancybox.isMobile && document.body.scrollHeight > window.innerHeight) {
        $("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (window.innerWidth - document.documentElement.clientWidth) + "px;}</style>");
        $("body").addClass("compensate-for-scrollbar");
      }

      // Build html markup and set references
      // ====================================

      // Build html code for buttons and insert into main template
      buttonStr = "";
      $.each(firstItemOpts.buttons, function (index, value) {
        buttonStr += firstItemOpts.btnTpl[value] || "";
      });

      // Create markup from base template, it will be initially hidden to
      // avoid unnecessary work like painting while initializing is not complete
      $container = $(self.translate(self, firstItemOpts.baseTpl.replace("{{buttons}}", buttonStr).replace("{{arrows}}", firstItemOpts.btnTpl.arrowLeft + firstItemOpts.btnTpl.arrowRight))).attr("id", "fancybox-container-" + self.id).addClass(firstItemOpts.baseClass).data("FancyBox", self).appendTo(firstItemOpts.parentEl);

      // Create object holding references to jQuery wrapped nodes
      self.$refs = {
        container: $container
      };
      ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function (item) {
        self.$refs[item] = $container.find(".fancybox-" + item);
      });
      self.trigger("onInit");

      // Enable events, deactive previous instances
      self.activate();

      // Build slides, load and reveal content
      self.jumpTo(self.currIndex);
    },
    // Simple i18n support - replaces object keys found in template
    // with corresponding values
    // ============================================================

    translate: function translate(obj, str) {
      var arr = obj.opts.i18n[obj.opts.lang] || obj.opts.i18n.en;
      return str.replace(/\{\{(\w+)\}\}/g, function (match, n) {
        return arr[n] === undefined ? match : arr[n];
      });
    },
    // Populate current group with fresh content
    // Check if each object has valid type and content
    // ===============================================

    addContent: function addContent(content) {
      var self = this,
        items = $.makeArray(content),
        thumbs;
      $.each(items, function (i, item) {
        var obj = {},
          opts = {},
          $item,
          type,
          found,
          src,
          srcParts;

        // Step 1 - Make sure we have an object
        // ====================================

        if ($.isPlainObject(item)) {
          // We probably have manual usage here, something like
          // $.fancybox.open( [ { src : "image.jpg", type : "image" } ] )

          obj = item;
          opts = item.opts || item;
        } else if ($.type(item) === "object" && $(item).length) {
          // Here we probably have jQuery collection returned by some selector
          $item = $(item);

          // Support attributes like `data-options='{"touch" : false}'` and `data-touch='false'`
          opts = $item.data() || {};
          opts = $.extend(true, {}, opts, opts.options);

          // Here we store clicked element
          opts.$orig = $item;
          obj.src = self.opts.src || opts.src || $item.attr("href");

          // Assume that simple syntax is used, for example:
          //   `$.fancybox.open( $("#test"), {} );`
          if (!obj.type && !obj.src) {
            obj.type = "inline";
            obj.src = item;
          }
        } else {
          // Assume we have a simple html code, for example:
          //   $.fancybox.open( '<div><h1>Hi!</h1></div>' );
          obj = {
            type: "html",
            src: item + ""
          };
        }

        // Each gallery object has full collection of options
        obj.opts = $.extend(true, {}, self.opts, opts);

        // Do not merge buttons array
        if ($.isArray(opts.buttons)) {
          obj.opts.buttons = opts.buttons;
        }
        if ($.fancybox.isMobile && obj.opts.mobile) {
          obj.opts = mergeOpts(obj.opts, obj.opts.mobile);
        }

        // Step 2 - Make sure we have content type, if not - try to guess
        // ==============================================================

        type = obj.type || obj.opts.type;
        src = obj.src || "";
        if (!type && src) {
          if (found = src.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) {
            type = "video";
            if (!obj.opts.video.format) {
              obj.opts.video.format = "video/" + (found[1] === "ogv" ? "ogg" : found[1]);
            }
          } else if (src.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i)) {
            type = "image";
          } else if (src.match(/\.(pdf)((\?|#).*)?$/i)) {
            type = "iframe";
            obj = $.extend(true, obj, {
              contentType: "pdf",
              opts: {
                iframe: {
                  preload: false
                }
              }
            });
          } else if (src.charAt(0) === "#") {
            type = "inline";
          }
        }
        if (type) {
          obj.type = type;
        } else {
          self.trigger("objectNeedsType", obj);
        }
        if (!obj.contentType) {
          obj.contentType = $.inArray(obj.type, ["html", "inline", "ajax"]) > -1 ? "html" : obj.type;
        }

        // Step 3 - Some adjustments
        // =========================

        obj.index = self.group.length;
        if (obj.opts.smallBtn == "auto") {
          obj.opts.smallBtn = $.inArray(obj.type, ["html", "inline", "ajax"]) > -1;
        }
        if (obj.opts.toolbar === "auto") {
          obj.opts.toolbar = !obj.opts.smallBtn;
        }

        // Find thumbnail image, check if exists and if is in the viewport
        obj.$thumb = obj.opts.$thumb || null;
        if (obj.opts.$trigger && obj.index === self.opts.index) {
          obj.$thumb = obj.opts.$trigger.find("img:first");
          if (obj.$thumb.length) {
            obj.opts.$orig = obj.opts.$trigger;
          }
        }
        if (!(obj.$thumb && obj.$thumb.length) && obj.opts.$orig) {
          obj.$thumb = obj.opts.$orig.find("img:first");
        }
        if (obj.$thumb && !obj.$thumb.length) {
          obj.$thumb = null;
        }
        obj.thumb = obj.opts.thumb || (obj.$thumb ? obj.$thumb[0].src : null);

        // "caption" is a "special" option, it can be used to customize caption per gallery item
        if ($.type(obj.opts.caption) === "function") {
          obj.opts.caption = obj.opts.caption.apply(item, [self, obj]);
        }
        if ($.type(self.opts.caption) === "function") {
          obj.opts.caption = self.opts.caption.apply(item, [self, obj]);
        }

        // Make sure we have caption as a string or jQuery object
        if (!(obj.opts.caption instanceof $)) {
          obj.opts.caption = obj.opts.caption === undefined ? "" : obj.opts.caption + "";
        }

        // Check if url contains "filter" used to filter the content
        // Example: "ajax.html #something"
        if (obj.type === "ajax") {
          srcParts = src.split(/\s+/, 2);
          if (srcParts.length > 1) {
            obj.src = srcParts.shift();
            obj.opts.filter = srcParts.shift();
          }
        }

        // Hide all buttons and disable interactivity for modal items
        if (obj.opts.modal) {
          obj.opts = $.extend(true, obj.opts, {
            trapFocus: true,
            // Remove buttons
            infobar: 0,
            toolbar: 0,
            smallBtn: 0,
            // Disable keyboard navigation
            keyboard: 0,
            // Disable some modules
            slideShow: 0,
            fullScreen: 0,
            thumbs: 0,
            touch: 0,
            // Disable click event handlers
            clickContent: false,
            clickSlide: false,
            clickOutside: false,
            dblclickContent: false,
            dblclickSlide: false,
            dblclickOutside: false
          });
        }

        // Step 4 - Add processed object to group
        // ======================================

        self.group.push(obj);
      });

      // Update controls if gallery is already opened
      if (Object.keys(self.slides).length) {
        self.updateControls();

        // Update thumbnails, if needed
        thumbs = self.Thumbs;
        if (thumbs && thumbs.isActive) {
          thumbs.create();
          thumbs.focus();
        }
      }
    },
    // Attach an event handler functions for:
    //   - navigation buttons
    //   - browser scrolling, resizing;
    //   - focusing
    //   - keyboard
    //   - detecting inactivity
    // ======================================

    addEvents: function addEvents() {
      var self = this;
      self.removeEvents();

      // Make navigation elements clickable
      // ==================================

      self.$refs.container.on("click.fb-close", "[data-fancybox-close]", function (e) {
        e.stopPropagation();
        e.preventDefault();
        self.close(e);
      }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function (e) {
        e.stopPropagation();
        e.preventDefault();
        self.previous();
      }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function (e) {
        e.stopPropagation();
        e.preventDefault();
        self.next();
      }).on("click.fb", "[data-fancybox-zoom]", function (e) {
        // Click handler for zoom button
        self[self.isScaledDown() ? "scaleToActual" : "scaleToFit"]();
      });

      // Handle page scrolling and browser resizing
      // ==========================================

      $W.on("orientationchange.fb resize.fb", function (e) {
        if (e && e.originalEvent && e.originalEvent.type === "resize") {
          if (self.requestId) {
            cancelAFrame(self.requestId);
          }
          self.requestId = requestAFrame(function () {
            self.update(e);
          });
        } else {
          if (self.current && self.current.type === "iframe") {
            self.$refs.stage.hide();
          }
          setTimeout(function () {
            self.$refs.stage.show();
            self.update(e);
          }, $.fancybox.isMobile ? 600 : 250);
        }
      });
      $D.on("keydown.fb", function (e) {
        var instance = $.fancybox ? $.fancybox.getInstance() : null,
          current = instance.current,
          keycode = e.keyCode || e.which;

        // Trap keyboard focus inside of the modal
        // =======================================

        if (keycode == 9) {
          if (current.opts.trapFocus) {
            self.focus(e);
          }
          return;
        }

        // Enable keyboard navigation
        // ==========================

        if (!current.opts.keyboard || e.ctrlKey || e.altKey || e.shiftKey || $(e.target).is("input,textarea,video,audio,select")) {
          return;
        }

        // Backspace and Esc keys
        if (keycode === 8 || keycode === 27) {
          e.preventDefault();
          self.close(e);
          return;
        }

        // Left arrow and Up arrow
        if (keycode === 37 || keycode === 38) {
          e.preventDefault();
          self.previous();
          return;
        }

        // Righ arrow and Down arrow
        if (keycode === 39 || keycode === 40) {
          e.preventDefault();
          self.next();
          return;
        }
        self.trigger("afterKeydown", e, keycode);
      });

      // Hide controls after some inactivity period
      if (self.group[self.currIndex].opts.idleTime) {
        self.idleSecondsCounter = 0;
        $D.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function (e) {
          self.idleSecondsCounter = 0;
          if (self.isIdle) {
            self.showControls();
          }
          self.isIdle = false;
        });
        self.idleInterval = window.setInterval(function () {
          self.idleSecondsCounter++;
          if (self.idleSecondsCounter >= self.group[self.currIndex].opts.idleTime && !self.isDragging) {
            self.isIdle = true;
            self.idleSecondsCounter = 0;
            self.hideControls();
          }
        }, 1000);
      }
    },
    // Remove events added by the core
    // ===============================

    removeEvents: function removeEvents() {
      var self = this;
      $W.off("orientationchange.fb resize.fb");
      $D.off("keydown.fb .fb-idle");
      this.$refs.container.off(".fb-close .fb-prev .fb-next");
      if (self.idleInterval) {
        window.clearInterval(self.idleInterval);
        self.idleInterval = null;
      }
    },
    // Change to previous gallery item
    // ===============================

    previous: function previous(duration) {
      return this.jumpTo(this.currPos - 1, duration);
    },
    // Change to next gallery item
    // ===========================

    next: function next(duration) {
      return this.jumpTo(this.currPos + 1, duration);
    },
    // Switch to selected gallery item
    // ===============================

    jumpTo: function jumpTo(pos, duration) {
      var self = this,
        groupLen = self.group.length,
        firstRun,
        isMoved,
        loop,
        current,
        previous,
        slidePos,
        stagePos,
        prop,
        diff;
      if (self.isDragging || self.isClosing || self.isAnimating && self.firstRun) {
        return;
      }

      // Should loop?
      pos = parseInt(pos, 10);
      loop = self.current ? self.current.opts.loop : self.opts.loop;
      if (!loop && (pos < 0 || pos >= groupLen)) {
        return false;
      }

      // Check if opening for the first time; this helps to speed things up
      firstRun = self.firstRun = !Object.keys(self.slides).length;

      // Create slides
      previous = self.current;
      self.prevIndex = self.currIndex;
      self.prevPos = self.currPos;
      current = self.createSlide(pos);
      if (groupLen > 1) {
        if (loop || current.index < groupLen - 1) {
          self.createSlide(pos + 1);
        }
        if (loop || current.index > 0) {
          self.createSlide(pos - 1);
        }
      }
      self.current = current;
      self.currIndex = current.index;
      self.currPos = current.pos;
      self.trigger("beforeShow", firstRun);
      self.updateControls();

      // Validate duration length
      current.forcedDuration = undefined;
      if ($.isNumeric(duration)) {
        current.forcedDuration = duration;
      } else {
        duration = current.opts[firstRun ? "animationDuration" : "transitionDuration"];
      }
      duration = parseInt(duration, 10);

      // Check if user has swiped the slides or if still animating
      isMoved = self.isMoved(current);

      // Make sure current slide is visible
      current.$slide.addClass("fancybox-slide--current");

      // Fresh start - reveal container, current slide and start loading content
      if (firstRun) {
        if (current.opts.animationEffect && duration) {
          self.$refs.container.css("transition-duration", duration + "ms");
        }
        self.$refs.container.addClass("fancybox-is-open").trigger("focus");

        // Attempt to load content into slide
        // This will later call `afterLoad` -> `revealContent`
        self.loadSlide(current);
        self.preload("image");
        return;
      }

      // Get actual slide/stage positions (before cleaning up)
      slidePos = $.fancybox.getTranslate(previous.$slide);
      stagePos = $.fancybox.getTranslate(self.$refs.stage);

      // Clean up all slides
      $.each(self.slides, function (index, slide) {
        $.fancybox.stop(slide.$slide, true);
      });
      if (previous.pos !== current.pos) {
        previous.isComplete = false;
      }
      previous.$slide.removeClass("fancybox-slide--complete fancybox-slide--current");

      // If slides are out of place, then animate them to correct position
      if (isMoved) {
        // Calculate horizontal swipe distance
        diff = slidePos.left - (previous.pos * slidePos.width + previous.pos * previous.opts.gutter);
        $.each(self.slides, function (index, slide) {
          slide.$slide.removeClass("fancybox-animated").removeClass(function (index, className) {
            return (className.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
          });

          // Make sure that each slide is in equal distance
          // This is mostly needed for freshly added slides, because they are not yet positioned
          var leftPos = slide.pos * slidePos.width + slide.pos * slide.opts.gutter;
          $.fancybox.setTranslate(slide.$slide, {
            top: 0,
            left: leftPos - stagePos.left + diff
          });
          if (slide.pos !== current.pos) {
            slide.$slide.addClass("fancybox-slide--" + (slide.pos > current.pos ? "next" : "previous"));
          }

          // Redraw to make sure that transition will start
          forceRedraw(slide.$slide);

          // Animate the slide
          $.fancybox.animate(slide.$slide, {
            top: 0,
            left: (slide.pos - current.pos) * slidePos.width + (slide.pos - current.pos) * slide.opts.gutter
          }, duration, function () {
            slide.$slide.css({
              transform: "",
              opacity: ""
            }).removeClass("fancybox-slide--next fancybox-slide--previous");
            if (slide.pos === self.currPos) {
              self.complete();
            }
          });
        });
      } else if (duration && current.opts.transitionEffect) {
        // Set transition effect for previously active slide
        prop = "fancybox-animated fancybox-fx-" + current.opts.transitionEffect;
        previous.$slide.addClass("fancybox-slide--" + (previous.pos > current.pos ? "next" : "previous"));
        $.fancybox.animate(previous.$slide, prop, duration, function () {
          previous.$slide.removeClass(prop).removeClass("fancybox-slide--next fancybox-slide--previous");
        }, false);
      }
      if (current.isLoaded) {
        self.revealContent(current);
      } else {
        self.loadSlide(current);
      }
      self.preload("image");
    },
    // Create new "slide" element
    // These are gallery items  that are actually added to DOM
    // =======================================================

    createSlide: function createSlide(pos) {
      var self = this,
        $slide,
        index;
      index = pos % self.group.length;
      index = index < 0 ? self.group.length + index : index;
      if (!self.slides[pos] && self.group[index]) {
        $slide = $('<div class="fancybox-slide"></div>').appendTo(self.$refs.stage);
        self.slides[pos] = $.extend(true, {}, self.group[index], {
          pos: pos,
          $slide: $slide,
          isLoaded: false
        });
        self.updateSlide(self.slides[pos]);
      }
      return self.slides[pos];
    },
    // Scale image to the actual size of the image;
    // x and y values should be relative to the slide
    // ==============================================

    scaleToActual: function scaleToActual(x, y, duration) {
      var self = this,
        current = self.current,
        $content = current.$content,
        canvasWidth = $.fancybox.getTranslate(current.$slide).width,
        canvasHeight = $.fancybox.getTranslate(current.$slide).height,
        newImgWidth = current.width,
        newImgHeight = current.height,
        imgPos,
        posX,
        posY,
        scaleX,
        scaleY;
      if (self.isAnimating || self.isMoved() || !$content || !(current.type == "image" && current.isLoaded && !current.hasError)) {
        return;
      }
      self.isAnimating = true;
      $.fancybox.stop($content);
      x = x === undefined ? canvasWidth * 0.5 : x;
      y = y === undefined ? canvasHeight * 0.5 : y;
      imgPos = $.fancybox.getTranslate($content);
      imgPos.top -= $.fancybox.getTranslate(current.$slide).top;
      imgPos.left -= $.fancybox.getTranslate(current.$slide).left;
      scaleX = newImgWidth / imgPos.width;
      scaleY = newImgHeight / imgPos.height;

      // Get center position for original image
      posX = canvasWidth * 0.5 - newImgWidth * 0.5;
      posY = canvasHeight * 0.5 - newImgHeight * 0.5;

      // Make sure image does not move away from edges
      if (newImgWidth > canvasWidth) {
        posX = imgPos.left * scaleX - (x * scaleX - x);
        if (posX > 0) {
          posX = 0;
        }
        if (posX < canvasWidth - newImgWidth) {
          posX = canvasWidth - newImgWidth;
        }
      }
      if (newImgHeight > canvasHeight) {
        posY = imgPos.top * scaleY - (y * scaleY - y);
        if (posY > 0) {
          posY = 0;
        }
        if (posY < canvasHeight - newImgHeight) {
          posY = canvasHeight - newImgHeight;
        }
      }
      self.updateCursor(newImgWidth, newImgHeight);
      $.fancybox.animate($content, {
        top: posY,
        left: posX,
        scaleX: scaleX,
        scaleY: scaleY
      }, duration || 366, function () {
        self.isAnimating = false;
      });

      // Stop slideshow
      if (self.SlideShow && self.SlideShow.isActive) {
        self.SlideShow.stop();
      }
    },
    // Scale image to fit inside parent element
    // ========================================

    scaleToFit: function scaleToFit(duration) {
      var self = this,
        current = self.current,
        $content = current.$content,
        end;
      if (self.isAnimating || self.isMoved() || !$content || !(current.type == "image" && current.isLoaded && !current.hasError)) {
        return;
      }
      self.isAnimating = true;
      $.fancybox.stop($content);
      end = self.getFitPos(current);
      self.updateCursor(end.width, end.height);
      $.fancybox.animate($content, {
        top: end.top,
        left: end.left,
        scaleX: end.width / $content.width(),
        scaleY: end.height / $content.height()
      }, duration || 366, function () {
        self.isAnimating = false;
      });
    },
    // Calculate image size to fit inside viewport
    // ===========================================

    getFitPos: function getFitPos(slide) {
      var self = this,
        $content = slide.$content,
        $slide = slide.$slide,
        width = slide.width || slide.opts.width,
        height = slide.height || slide.opts.height,
        maxWidth,
        maxHeight,
        minRatio,
        aspectRatio,
        rez = {};
      if (!slide.isLoaded || !$content || !$content.length) {
        return false;
      }
      maxWidth = $.fancybox.getTranslate(self.$refs.stage).width;
      maxHeight = $.fancybox.getTranslate(self.$refs.stage).height;
      maxWidth -= parseFloat($slide.css("paddingLeft")) + parseFloat($slide.css("paddingRight")) + parseFloat($content.css("marginLeft")) + parseFloat($content.css("marginRight"));
      maxHeight -= parseFloat($slide.css("paddingTop")) + parseFloat($slide.css("paddingBottom")) + parseFloat($content.css("marginTop")) + parseFloat($content.css("marginBottom"));
      if (!width || !height) {
        width = maxWidth;
        height = maxHeight;
      }
      minRatio = Math.min(1, maxWidth / width, maxHeight / height);
      width = minRatio * width;
      height = minRatio * height;

      // Adjust width/height to precisely fit into container
      if (width > maxWidth - 0.5) {
        width = maxWidth;
      }
      if (height > maxHeight - 0.5) {
        height = maxHeight;
      }
      if (slide.type === "image") {
        rez.top = Math.floor((maxHeight - height) * 0.5) + parseFloat($slide.css("paddingTop"));
        rez.left = Math.floor((maxWidth - width) * 0.5) + parseFloat($slide.css("paddingLeft"));
      } else if (slide.contentType === "video") {
        // Force aspect ratio for the video
        // "I say the whole world must learn of our peaceful ways… by force!"
        aspectRatio = slide.opts.width && slide.opts.height ? width / height : slide.opts.ratio || 16 / 9;
        if (height > width / aspectRatio) {
          height = width / aspectRatio;
        } else if (width > height * aspectRatio) {
          width = height * aspectRatio;
        }
      }
      rez.width = width;
      rez.height = height;
      return rez;
    },
    // Update content size and position for all slides
    // ==============================================

    update: function update(e) {
      var self = this;
      $.each(self.slides, function (key, slide) {
        self.updateSlide(slide, e);
      });
    },
    // Update slide content position and size
    // ======================================

    updateSlide: function updateSlide(slide, e) {
      var self = this,
        $content = slide && slide.$content,
        width = slide.width || slide.opts.width,
        height = slide.height || slide.opts.height,
        $slide = slide.$slide;

      // First, prevent caption overlap, if needed
      self.adjustCaption(slide);

      // Then resize content to fit inside the slide
      if ($content && (width || height || slide.contentType === "video") && !slide.hasError) {
        $.fancybox.stop($content);
        $.fancybox.setTranslate($content, self.getFitPos(slide));
        if (slide.pos === self.currPos) {
          self.isAnimating = false;
          self.updateCursor();
        }
      }

      // Then some adjustments
      self.adjustLayout(slide);
      if ($slide.length) {
        $slide.trigger("refresh");
        if (slide.pos === self.currPos) {
          self.$refs.toolbar.add(self.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", $slide.get(0).scrollHeight > $slide.get(0).clientHeight);
        }
      }
      self.trigger("onUpdate", slide, e);
    },
    // Horizontally center slide
    // =========================

    centerSlide: function centerSlide(duration) {
      var self = this,
        current = self.current,
        $slide = current.$slide;
      if (self.isClosing || !current) {
        return;
      }
      $slide.siblings().css({
        transform: "",
        opacity: ""
      });
      $slide.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next");
      $.fancybox.animate($slide, {
        top: 0,
        left: 0,
        opacity: 1
      }, duration === undefined ? 0 : duration, function () {
        // Clean up
        $slide.css({
          transform: "",
          opacity: ""
        });
        if (!current.isComplete) {
          self.complete();
        }
      }, false);
    },
    // Check if current slide is moved (swiped)
    // ========================================

    isMoved: function isMoved(slide) {
      var current = slide || this.current,
        slidePos,
        stagePos;
      if (!current) {
        return false;
      }
      stagePos = $.fancybox.getTranslate(this.$refs.stage);
      slidePos = $.fancybox.getTranslate(current.$slide);
      return !current.$slide.hasClass("fancybox-animated") && (Math.abs(slidePos.top - stagePos.top) > 0.5 || Math.abs(slidePos.left - stagePos.left) > 0.5);
    },
    // Update cursor style depending if content can be zoomed
    // ======================================================

    updateCursor: function updateCursor(nextWidth, nextHeight) {
      var self = this,
        current = self.current,
        $container = self.$refs.container,
        canPan,
        isZoomable;
      if (!current || self.isClosing || !self.Guestures) {
        return;
      }
      $container.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan");
      canPan = self.canPan(nextWidth, nextHeight);
      isZoomable = canPan ? true : self.isZoomable();
      $container.toggleClass("fancybox-is-zoomable", isZoomable);
      $("[data-fancybox-zoom]").prop("disabled", !isZoomable);
      if (canPan) {
        $container.addClass("fancybox-can-pan");
      } else if (isZoomable && (current.opts.clickContent === "zoom" || $.isFunction(current.opts.clickContent) && current.opts.clickContent(current) == "zoom")) {
        $container.addClass("fancybox-can-zoomIn");
      } else if (current.opts.touch && (current.opts.touch.vertical || self.group.length > 1) && current.contentType !== "video") {
        $container.addClass("fancybox-can-swipe");
      }
    },
    // Check if current slide is zoomable
    // ==================================

    isZoomable: function isZoomable() {
      var self = this,
        current = self.current,
        fitPos;

      // Assume that slide is zoomable if:
      //   - image is still loading
      //   - actual size of the image is smaller than available area
      if (current && !self.isClosing && current.type === "image" && !current.hasError) {
        if (!current.isLoaded) {
          return true;
        }
        fitPos = self.getFitPos(current);
        if (fitPos && (current.width > fitPos.width || current.height > fitPos.height)) {
          return true;
        }
      }
      return false;
    },
    // Check if current image dimensions are smaller than actual
    // =========================================================

    isScaledDown: function isScaledDown(nextWidth, nextHeight) {
      var self = this,
        rez = false,
        current = self.current,
        $content = current.$content;
      if (nextWidth !== undefined && nextHeight !== undefined) {
        rez = nextWidth < current.width && nextHeight < current.height;
      } else if ($content) {
        rez = $.fancybox.getTranslate($content);
        rez = rez.width < current.width && rez.height < current.height;
      }
      return rez;
    },
    // Check if image dimensions exceed parent element
    // ===============================================

    canPan: function canPan(nextWidth, nextHeight) {
      var self = this,
        current = self.current,
        pos = null,
        rez = false;
      if (current.type === "image" && (current.isComplete || nextWidth && nextHeight) && !current.hasError) {
        rez = self.getFitPos(current);
        if (nextWidth !== undefined && nextHeight !== undefined) {
          pos = {
            width: nextWidth,
            height: nextHeight
          };
        } else if (current.isComplete) {
          pos = $.fancybox.getTranslate(current.$content);
        }
        if (pos && rez) {
          rez = Math.abs(pos.width - rez.width) > 1.5 || Math.abs(pos.height - rez.height) > 1.5;
        }
      }
      return rez;
    },
    // Load content into the slide
    // ===========================

    loadSlide: function loadSlide(slide) {
      var self = this,
        type,
        $slide,
        ajaxLoad;
      if (slide.isLoading || slide.isLoaded) {
        return;
      }
      slide.isLoading = true;
      if (self.trigger("beforeLoad", slide) === false) {
        slide.isLoading = false;
        return false;
      }
      type = slide.type;
      $slide = slide.$slide;
      $slide.off("refresh").trigger("onReset").addClass(slide.opts.slideClass);

      // Create content depending on the type
      switch (type) {
        case "image":
          self.setImage(slide);
          break;
        case "iframe":
          self.setIframe(slide);
          break;
        case "html":
          self.setContent(slide, slide.src || slide.content);
          break;
        case "video":
          self.setContent(slide, slide.opts.video.tpl.replace(/\{\{src\}\}/gi, slide.src).replace("{{format}}", slide.opts.videoFormat || slide.opts.video.format || "").replace("{{poster}}", slide.thumb || ""));
          break;
        case "inline":
          if ($(slide.src).length) {
            self.setContent(slide, $(slide.src));
          } else {
            self.setError(slide);
          }
          break;
        case "ajax":
          self.showLoading(slide);
          ajaxLoad = $.ajax($.extend({}, slide.opts.ajax.settings, {
            url: slide.src,
            success: function success(data, textStatus) {
              if (textStatus === "success") {
                self.setContent(slide, data);
              }
            },
            error: function error(jqXHR, textStatus) {
              if (jqXHR && textStatus !== "abort") {
                self.setError(slide);
              }
            }
          }));
          $slide.one("onReset", function () {
            ajaxLoad.abort();
          });
          break;
        default:
          self.setError(slide);
          break;
      }
      return true;
    },
    // Use thumbnail image, if possible
    // ================================

    setImage: function setImage(slide) {
      var self = this,
        ghost;

      // Check if need to show loading icon
      setTimeout(function () {
        var $img = slide.$image;
        if (!self.isClosing && slide.isLoading && (!$img || !$img.length || !$img[0].complete) && !slide.hasError) {
          self.showLoading(slide);
        }
      }, 50);

      //Check if image has srcset
      self.checkSrcset(slide);

      // This will be wrapper containing both ghost and actual image
      slide.$content = $('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(slide.$slide.addClass("fancybox-slide--image"));

      // If we have a thumbnail, we can display it while actual image is loading
      // Users will not stare at black screen and actual image will appear gradually
      if (slide.opts.preload !== false && slide.opts.width && slide.opts.height && slide.thumb) {
        slide.width = slide.opts.width;
        slide.height = slide.opts.height;
        ghost = document.createElement("img");
        ghost.onerror = function () {
          $(this).remove();
          slide.$ghost = null;
        };
        ghost.onload = function () {
          self.afterLoad(slide);
        };
        slide.$ghost = $(ghost).addClass("fancybox-image").appendTo(slide.$content).attr("src", slide.thumb);
      }

      // Start loading actual image
      self.setBigImage(slide);
    },
    // Check if image has srcset and get the source
    // ============================================
    checkSrcset: function checkSrcset(slide) {
      var srcset = slide.opts.srcset || slide.opts.image.srcset,
        found,
        temp,
        pxRatio,
        windowWidth;

      // If we have "srcset", then we need to find first matching "src" value.
      // This is necessary, because when you set an src attribute, the browser will preload the image
      // before any javascript or even CSS is applied.
      if (srcset) {
        pxRatio = window.devicePixelRatio || 1;
        windowWidth = window.innerWidth * pxRatio;
        temp = srcset.split(",").map(function (el) {
          var ret = {};
          el.trim().split(/\s+/).forEach(function (el, i) {
            var value = parseInt(el.substring(0, el.length - 1), 10);
            if (i === 0) {
              return ret.url = el;
            }
            if (value) {
              ret.value = value;
              ret.postfix = el[el.length - 1];
            }
          });
          return ret;
        });

        // Sort by value
        temp.sort(function (a, b) {
          return a.value - b.value;
        });

        // Ok, now we have an array of all srcset values
        for (var j = 0; j < temp.length; j++) {
          var el = temp[j];
          if (el.postfix === "w" && el.value >= windowWidth || el.postfix === "x" && el.value >= pxRatio) {
            found = el;
            break;
          }
        }

        // If not found, take the last one
        if (!found && temp.length) {
          found = temp[temp.length - 1];
        }
        if (found) {
          slide.src = found.url;

          // If we have default width/height values, we can calculate height for matching source
          if (slide.width && slide.height && found.postfix == "w") {
            slide.height = slide.width / slide.height * found.value;
            slide.width = found.value;
          }
          slide.opts.srcset = srcset;
        }
      }
    },
    // Create full-size image
    // ======================

    setBigImage: function setBigImage(slide) {
      var self = this,
        img = document.createElement("img"),
        $img = $(img);
      slide.$image = $img.one("error", function () {
        self.setError(slide);
      }).one("load", function () {
        var sizes;
        if (!slide.$ghost) {
          self.resolveImageSlideSize(slide, this.naturalWidth, this.naturalHeight);
          self.afterLoad(slide);
        }
        if (self.isClosing) {
          return;
        }
        if (slide.opts.srcset) {
          sizes = slide.opts.sizes;
          if (!sizes || sizes === "auto") {
            sizes = (slide.width / slide.height > 1 && $W.width() / $W.height() > 1 ? "100" : Math.round(slide.width / slide.height * 100)) + "vw";
          }
          $img.attr("sizes", sizes).attr("srcset", slide.opts.srcset);
        }

        // Hide temporary image after some delay
        if (slide.$ghost) {
          setTimeout(function () {
            if (slide.$ghost && !self.isClosing) {
              slide.$ghost.hide();
            }
          }, Math.min(300, Math.max(1000, slide.height / 1600)));
        }
        self.hideLoading(slide);
      }).addClass("fancybox-image").attr("src", slide.src).appendTo(slide.$content);
      if ((img.complete || img.readyState == "complete") && $img.naturalWidth && $img.naturalHeight) {
        $img.trigger("load");
      } else if (img.error) {
        $img.trigger("error");
      }
    },
    // Computes the slide size from image size and maxWidth/maxHeight
    // ==============================================================

    resolveImageSlideSize: function resolveImageSlideSize(slide, imgWidth, imgHeight) {
      var maxWidth = parseInt(slide.opts.width, 10),
        maxHeight = parseInt(slide.opts.height, 10);

      // Sets the default values from the image
      slide.width = imgWidth;
      slide.height = imgHeight;
      if (maxWidth > 0) {
        slide.width = maxWidth;
        slide.height = Math.floor(maxWidth * imgHeight / imgWidth);
      }
      if (maxHeight > 0) {
        slide.width = Math.floor(maxHeight * imgWidth / imgHeight);
        slide.height = maxHeight;
      }
    },
    // Create iframe wrapper, iframe and bindings
    // ==========================================

    setIframe: function setIframe(slide) {
      var self = this,
        opts = slide.opts.iframe,
        $slide = slide.$slide,
        $iframe;
      slide.$content = $('<div class="fancybox-content' + (opts.preload ? " fancybox-is-hidden" : "") + '"></div>').css(opts.css).appendTo($slide);
      $slide.addClass("fancybox-slide--" + slide.contentType);
      slide.$iframe = $iframe = $(opts.tpl.replace(/\{rnd\}/g, new Date().getTime())).attr(opts.attr).appendTo(slide.$content);
      if (opts.preload) {
        self.showLoading(slide);

        // Unfortunately, it is not always possible to determine if iframe is successfully loaded
        // (due to browser security policy)

        $iframe.on("load.fb error.fb", function (e) {
          this.isReady = 1;
          slide.$slide.trigger("refresh");
          self.afterLoad(slide);
        });

        // Recalculate iframe content size
        // ===============================

        $slide.on("refresh.fb", function () {
          var $content = slide.$content,
            frameWidth = opts.css.width,
            frameHeight = opts.css.height,
            $contents,
            $body;
          if ($iframe[0].isReady !== 1) {
            return;
          }
          try {
            $contents = $iframe.contents();
            $body = $contents.find("body");
          } catch (ignore) {}

          // Calculate content dimensions, if it is accessible
          if ($body && $body.length && $body.children().length) {
            // Avoid scrolling to top (if multiple instances)
            $slide.css("overflow", "visible");
            $content.css({
              width: "100%",
              "max-width": "100%",
              height: "9999px"
            });
            if (frameWidth === undefined) {
              frameWidth = Math.ceil(Math.max($body[0].clientWidth, $body.outerWidth(true)));
            }
            $content.css("width", frameWidth ? frameWidth : "").css("max-width", "");
            if (frameHeight === undefined) {
              frameHeight = Math.ceil(Math.max($body[0].clientHeight, $body.outerHeight(true)));
            }
            $content.css("height", frameHeight ? frameHeight : "");
            $slide.css("overflow", "auto");
          }
          $content.removeClass("fancybox-is-hidden");
        });
      } else {
        self.afterLoad(slide);
      }
      $iframe.attr("src", slide.src);

      // Remove iframe if closing or changing gallery item
      $slide.one("onReset", function () {
        // This helps IE not to throw errors when closing
        try {
          $(this).find("iframe").hide().unbind().attr("src", "//about:blank");
        } catch (ignore) {}
        $(this).off("refresh.fb").empty();
        slide.isLoaded = false;
        slide.isRevealed = false;
      });
    },
    // Wrap and append content to the slide
    // ======================================

    setContent: function setContent(slide, content) {
      var self = this;
      if (self.isClosing) {
        return;
      }
      self.hideLoading(slide);
      if (slide.$content) {
        $.fancybox.stop(slide.$content);
      }
      slide.$slide.empty();

      // If content is a jQuery object, then it will be moved to the slide.
      // The placeholder is created so we will know where to put it back.
      if (isQuery(content) && content.parent().length) {
        // Make sure content is not already moved to fancyBox
        if (content.hasClass("fancybox-content") || content.parent().hasClass("fancybox-content")) {
          content.parents(".fancybox-slide").trigger("onReset");
        }

        // Create temporary element marking original place of the content
        slide.$placeholder = $("<div>").hide().insertAfter(content);

        // Make sure content is visible
        content.css("display", "inline-block");
      } else if (!slide.hasError) {
        // If content is just a plain text, try to convert it to html
        if ($.type(content) === "string") {
          content = $("<div>").append($.trim(content)).contents();
        }

        // If "filter" option is provided, then filter content
        if (slide.opts.filter) {
          content = $("<div>").html(content).find(slide.opts.filter);
        }
      }
      slide.$slide.one("onReset", function () {
        // Pause all html5 video/audio
        $(this).find("video,audio").trigger("pause");

        // Put content back
        if (slide.$placeholder) {
          slide.$placeholder.after(content.removeClass("fancybox-content").hide()).remove();
          slide.$placeholder = null;
        }

        // Remove custom close button
        if (slide.$smallBtn) {
          slide.$smallBtn.remove();
          slide.$smallBtn = null;
        }

        // Remove content and mark slide as not loaded
        if (!slide.hasError) {
          $(this).empty();
          slide.isLoaded = false;
          slide.isRevealed = false;
        }
      });
      $(content).appendTo(slide.$slide);
      if ($(content).is("video,audio")) {
        $(content).addClass("fancybox-video");
        $(content).wrap("<div></div>");
        slide.contentType = "video";
        slide.opts.width = slide.opts.width || $(content).attr("width");
        slide.opts.height = slide.opts.height || $(content).attr("height");
      }
      slide.$content = slide.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first();
      slide.$content.siblings().hide();

      // Re-check if there is a valid content
      // (in some cases, ajax response can contain various elements or plain text)
      if (!slide.$content.length) {
        slide.$content = slide.$slide.wrapInner("<div></div>").children().first();
      }
      slide.$content.addClass("fancybox-content");
      slide.$slide.addClass("fancybox-slide--" + slide.contentType);
      self.afterLoad(slide);
    },
    // Display error message
    // =====================

    setError: function setError(slide) {
      slide.hasError = true;
      slide.$slide.trigger("onReset").removeClass("fancybox-slide--" + slide.contentType).addClass("fancybox-slide--error");
      slide.contentType = "html";
      this.setContent(slide, this.translate(slide, slide.opts.errorTpl));
      if (slide.pos === this.currPos) {
        this.isAnimating = false;
      }
    },
    // Show loading icon inside the slide
    // ==================================

    showLoading: function showLoading(slide) {
      var self = this;
      slide = slide || self.current;
      if (slide && !slide.$spinner) {
        slide.$spinner = $(self.translate(self, self.opts.spinnerTpl)).appendTo(slide.$slide).hide().fadeIn("fast");
      }
    },
    // Remove loading icon from the slide
    // ==================================

    hideLoading: function hideLoading(slide) {
      var self = this;
      slide = slide || self.current;
      if (slide && slide.$spinner) {
        slide.$spinner.stop().remove();
        delete slide.$spinner;
      }
    },
    // Adjustments after slide content has been loaded
    // ===============================================

    afterLoad: function afterLoad(slide) {
      var self = this;
      if (self.isClosing) {
        return;
      }
      slide.isLoading = false;
      slide.isLoaded = true;
      self.trigger("afterLoad", slide);
      self.hideLoading(slide);

      // Add small close button
      if (slide.opts.smallBtn && (!slide.$smallBtn || !slide.$smallBtn.length)) {
        slide.$smallBtn = $(self.translate(slide, slide.opts.btnTpl.smallBtn)).appendTo(slide.$content);
      }

      // Disable right click
      if (slide.opts.protect && slide.$content && !slide.hasError) {
        slide.$content.on("contextmenu.fb", function (e) {
          if (e.button == 2) {
            e.preventDefault();
          }
          return true;
        });

        // Add fake element on top of the image
        // This makes a bit harder for user to select image
        if (slide.type === "image") {
          $('<div class="fancybox-spaceball"></div>').appendTo(slide.$content);
        }
      }
      self.adjustCaption(slide);
      self.adjustLayout(slide);
      if (slide.pos === self.currPos) {
        self.updateCursor();
      }
      self.revealContent(slide);
    },
    // Prevent caption overlap,
    // fix css inconsistency across browsers
    // =====================================

    adjustCaption: function adjustCaption(slide) {
      var self = this,
        current = slide || self.current,
        caption = current.opts.caption,
        preventOverlap = current.opts.preventCaptionOverlap,
        $caption = self.$refs.caption,
        $clone,
        captionH = false;
      $caption.toggleClass("fancybox-caption--separate", preventOverlap);
      if (preventOverlap && caption && caption.length) {
        if (current.pos !== self.currPos) {
          $clone = $caption.clone().appendTo($caption.parent());
          $clone.children().eq(0).empty().html(caption);
          captionH = $clone.outerHeight(true);
          $clone.empty().remove();
        } else if (self.$caption) {
          captionH = self.$caption.outerHeight(true);
        }
        current.$slide.css("padding-bottom", captionH || "");
      }
    },
    // Simple hack to fix inconsistency across browsers, described here (affects Edge, too):
    // https://bugzilla.mozilla.org/show_bug.cgi?id=748518
    // ====================================================================================

    adjustLayout: function adjustLayout(slide) {
      var self = this,
        current = slide || self.current,
        scrollHeight,
        marginBottom,
        inlinePadding,
        actualPadding;
      if (current.isLoaded && current.opts.disableLayoutFix !== true) {
        current.$content.css("margin-bottom", "");

        // If we would always set margin-bottom for the content,
        // then it would potentially break vertical align
        if (current.$content.outerHeight() > current.$slide.height() + 0.5) {
          inlinePadding = current.$slide[0].style["padding-bottom"];
          actualPadding = current.$slide.css("padding-bottom");
          if (parseFloat(actualPadding) > 0) {
            scrollHeight = current.$slide[0].scrollHeight;
            current.$slide.css("padding-bottom", 0);
            if (Math.abs(scrollHeight - current.$slide[0].scrollHeight) < 1) {
              marginBottom = actualPadding;
            }
            current.$slide.css("padding-bottom", inlinePadding);
          }
        }
        current.$content.css("margin-bottom", marginBottom);
      }
    },
    // Make content visible
    // This method is called right after content has been loaded or
    // user navigates gallery and transition should start
    // ============================================================

    revealContent: function revealContent(slide) {
      var self = this,
        $slide = slide.$slide,
        end = false,
        start = false,
        isMoved = self.isMoved(slide),
        isRevealed = slide.isRevealed,
        effect,
        effectClassName,
        duration,
        opacity;
      slide.isRevealed = true;
      effect = slide.opts[self.firstRun ? "animationEffect" : "transitionEffect"];
      duration = slide.opts[self.firstRun ? "animationDuration" : "transitionDuration"];
      duration = parseInt(slide.forcedDuration === undefined ? duration : slide.forcedDuration, 10);
      if (isMoved || slide.pos !== self.currPos || !duration) {
        effect = false;
      }

      // Check if can zoom
      if (effect === "zoom") {
        if (slide.pos === self.currPos && duration && slide.type === "image" && !slide.hasError && (start = self.getThumbPos(slide))) {
          end = self.getFitPos(slide);
        } else {
          effect = "fade";
        }
      }

      // Zoom animation
      // ==============
      if (effect === "zoom") {
        self.isAnimating = true;
        end.scaleX = end.width / start.width;
        end.scaleY = end.height / start.height;

        // Check if we need to animate opacity
        opacity = slide.opts.zoomOpacity;
        if (opacity == "auto") {
          opacity = Math.abs(slide.width / slide.height - start.width / start.height) > 0.1;
        }
        if (opacity) {
          start.opacity = 0.1;
          end.opacity = 1;
        }

        // Draw image at start position
        $.fancybox.setTranslate(slide.$content.removeClass("fancybox-is-hidden"), start);
        forceRedraw(slide.$content);

        // Start animation
        $.fancybox.animate(slide.$content, end, duration, function () {
          self.isAnimating = false;
          self.complete();
        });
        return;
      }
      self.updateSlide(slide);

      // Simply show content if no effect
      // ================================
      if (!effect) {
        slide.$content.removeClass("fancybox-is-hidden");
        if (!isRevealed && isMoved && slide.type === "image" && !slide.hasError) {
          slide.$content.hide().fadeIn("fast");
        }
        if (slide.pos === self.currPos) {
          self.complete();
        }
        return;
      }

      // Prepare for CSS transiton
      // =========================
      $.fancybox.stop($slide);

      //effectClassName = "fancybox-animated fancybox-slide--" + (slide.pos >= self.prevPos ? "next" : "previous") + " fancybox-fx-" + effect;
      effectClassName = "fancybox-slide--" + (slide.pos >= self.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + effect;
      $slide.addClass(effectClassName).removeClass("fancybox-slide--current"); //.addClass(effectClassName);

      slide.$content.removeClass("fancybox-is-hidden");

      // Force reflow
      forceRedraw($slide);
      if (slide.type !== "image") {
        slide.$content.hide().show(0);
      }
      $.fancybox.animate($slide, "fancybox-slide--current", duration, function () {
        $slide.removeClass(effectClassName).css({
          transform: "",
          opacity: ""
        });
        if (slide.pos === self.currPos) {
          self.complete();
        }
      }, true);
    },
    // Check if we can and have to zoom from thumbnail
    //================================================

    getThumbPos: function getThumbPos(slide) {
      var rez = false,
        $thumb = slide.$thumb,
        thumbPos,
        btw,
        brw,
        bbw,
        blw;
      if (!$thumb || !inViewport($thumb[0])) {
        return false;
      }
      thumbPos = $.fancybox.getTranslate($thumb);
      btw = parseFloat($thumb.css("border-top-width") || 0);
      brw = parseFloat($thumb.css("border-right-width") || 0);
      bbw = parseFloat($thumb.css("border-bottom-width") || 0);
      blw = parseFloat($thumb.css("border-left-width") || 0);
      rez = {
        top: thumbPos.top + btw,
        left: thumbPos.left + blw,
        width: thumbPos.width - brw - blw,
        height: thumbPos.height - btw - bbw,
        scaleX: 1,
        scaleY: 1
      };
      return thumbPos.width > 0 && thumbPos.height > 0 ? rez : false;
    },
    // Final adjustments after current gallery item is moved to position
    // and it`s content is loaded
    // ==================================================================

    complete: function complete() {
      var self = this,
        current = self.current,
        slides = {},
        $el;
      if (self.isMoved() || !current.isLoaded) {
        return;
      }
      if (!current.isComplete) {
        current.isComplete = true;
        current.$slide.siblings().trigger("onReset");
        self.preload("inline");

        // Trigger any CSS transiton inside the slide
        forceRedraw(current.$slide);
        current.$slide.addClass("fancybox-slide--complete");

        // Remove unnecessary slides
        $.each(self.slides, function (key, slide) {
          if (slide.pos >= self.currPos - 1 && slide.pos <= self.currPos + 1) {
            slides[slide.pos] = slide;
          } else if (slide) {
            $.fancybox.stop(slide.$slide);
            slide.$slide.off().remove();
          }
        });
        self.slides = slides;
      }
      self.isAnimating = false;
      self.updateCursor();
      self.trigger("afterShow");

      // Autoplay first html5 video/audio
      if (!!current.opts.video.autoStart) {
        current.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", function () {
          if (Document.exitFullscreen) {
            Document.exitFullscreen();
          } else if (this.webkitExitFullscreen) {
            this.webkitExitFullscreen();
          }
          self.next();
        });
      }

      // Try to focus on the first focusable element
      if (current.opts.autoFocus && current.contentType === "html") {
        // Look for the first input with autofocus attribute
        $el = current.$content.find("input[autofocus]:enabled:visible:first");
        if ($el.length) {
          $el.trigger("focus");
        } else {
          self.focus(null, true);
        }
      }

      // Avoid jumping
      current.$slide.scrollTop(0).scrollLeft(0);
    },
    // Preload next and previous slides
    // ================================

    preload: function preload(type) {
      var self = this,
        prev,
        next;
      if (self.group.length < 2) {
        return;
      }
      next = self.slides[self.currPos + 1];
      prev = self.slides[self.currPos - 1];
      if (prev && prev.type === type) {
        self.loadSlide(prev);
      }
      if (next && next.type === type) {
        self.loadSlide(next);
      }
    },
    // Try to find and focus on the first focusable element
    // ====================================================

    focus: function focus(e, firstRun) {
      var self = this,
        focusableStr = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "video", "audio", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'].join(","),
        focusableItems,
        focusedItemIndex;
      if (self.isClosing) {
        return;
      }
      if (e || !self.current || !self.current.isComplete) {
        // Focus on any element inside fancybox
        focusableItems = self.$refs.container.find("*:visible");
      } else {
        // Focus inside current slide
        focusableItems = self.current.$slide.find("*:visible" + (firstRun ? ":not(.fancybox-close-small)" : ""));
      }
      focusableItems = focusableItems.filter(focusableStr).filter(function () {
        return $(this).css("visibility") !== "hidden" && !$(this).hasClass("disabled");
      });
      if (focusableItems.length) {
        focusedItemIndex = focusableItems.index(document.activeElement);
        if (e && e.shiftKey) {
          // Back tab
          if (focusedItemIndex < 0 || focusedItemIndex == 0) {
            e.preventDefault();
            focusableItems.eq(focusableItems.length - 1).trigger("focus");
          }
        } else {
          // Outside or Forward tab
          if (focusedItemIndex < 0 || focusedItemIndex == focusableItems.length - 1) {
            if (e) {
              e.preventDefault();
            }
            focusableItems.eq(0).trigger("focus");
          }
        }
      } else {
        self.$refs.container.trigger("focus");
      }
    },
    // Activates current instance - brings container to the front and enables keyboard,
    // notifies other instances about deactivating
    // =================================================================================

    activate: function activate() {
      var self = this;

      // Deactivate all instances
      $(".fancybox-container").each(function () {
        var instance = $(this).data("FancyBox");

        // Skip self and closing instances
        if (instance && instance.id !== self.id && !instance.isClosing) {
          instance.trigger("onDeactivate");
          instance.removeEvents();
          instance.isVisible = false;
        }
      });
      self.isVisible = true;
      if (self.current || self.isIdle) {
        self.update();
        self.updateControls();
      }
      self.trigger("onActivate");
      self.addEvents();
    },
    // Start closing procedure
    // This will start "zoom-out" animation if needed and clean everything up afterwards
    // =================================================================================

    close: function close(e, d) {
      var self = this,
        current = self.current,
        effect,
        duration,
        $content,
        domRect,
        opacity,
        start,
        end;
      var done = function done() {
        self.cleanUp(e);
      };
      if (self.isClosing) {
        return false;
      }
      self.isClosing = true;

      // If beforeClose callback prevents closing, make sure content is centered
      if (self.trigger("beforeClose", e) === false) {
        self.isClosing = false;
        requestAFrame(function () {
          self.update();
        });
        return false;
      }

      // Remove all events
      // If there are multiple instances, they will be set again by "activate" method
      self.removeEvents();
      $content = current.$content;
      effect = current.opts.animationEffect;
      duration = $.isNumeric(d) ? d : effect ? current.opts.animationDuration : 0;
      current.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated");
      if (e !== true) {
        $.fancybox.stop(current.$slide);
      } else {
        effect = false;
      }

      // Remove other slides
      current.$slide.siblings().trigger("onReset").remove();

      // Trigger animations
      if (duration) {
        self.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", duration + "ms");
      }

      // Clean up
      self.hideLoading(current);
      self.hideControls(true);
      self.updateCursor();

      // Check if possible to zoom-out
      if (effect === "zoom" && !($content && duration && current.type === "image" && !self.isMoved() && !current.hasError && (end = self.getThumbPos(current)))) {
        effect = "fade";
      }
      if (effect === "zoom") {
        $.fancybox.stop($content);
        domRect = $.fancybox.getTranslate($content);
        start = {
          top: domRect.top,
          left: domRect.left,
          scaleX: domRect.width / end.width,
          scaleY: domRect.height / end.height,
          width: end.width,
          height: end.height
        };

        // Check if we need to animate opacity
        opacity = current.opts.zoomOpacity;
        if (opacity == "auto") {
          opacity = Math.abs(current.width / current.height - end.width / end.height) > 0.1;
        }
        if (opacity) {
          end.opacity = 0;
        }
        $.fancybox.setTranslate($content, start);
        forceRedraw($content);
        $.fancybox.animate($content, end, duration, done);
        return true;
      }
      if (effect && duration) {
        $.fancybox.animate(current.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + effect, duration, done);
      } else {
        // If skip animation
        if (e === true) {
          setTimeout(done, duration);
        } else {
          done();
        }
      }
      return true;
    },
    // Final adjustments after removing the instance
    // =============================================

    cleanUp: function cleanUp(e) {
      var self = this,
        instance,
        $focus = self.current.opts.$orig,
        x,
        y;
      self.current.$slide.trigger("onReset");
      self.$refs.container.empty().remove();
      self.trigger("afterClose", e);

      // Place back focus
      if (!!self.current.opts.backFocus) {
        if (!$focus || !$focus.length || !$focus.is(":visible")) {
          $focus = self.$trigger;
        }
        if ($focus && $focus.length) {
          x = window.scrollX;
          y = window.scrollY;
          $focus.trigger("focus");
          $("html, body").scrollTop(y).scrollLeft(x);
        }
      }
      self.current = null;

      // Check if there are other instances
      instance = $.fancybox.getInstance();
      if (instance) {
        instance.activate();
      } else {
        $("body").removeClass("fancybox-active compensate-for-scrollbar");
        $("#fancybox-style-noscroll").remove();
      }
    },
    // Call callback and trigger an event
    // ==================================

    trigger: function trigger(name, slide) {
      var args = Array.prototype.slice.call(arguments, 1),
        self = this,
        obj = slide && slide.opts ? slide : self.current,
        rez;
      if (obj) {
        args.unshift(obj);
      } else {
        obj = self;
      }
      args.unshift(self);
      if ($.isFunction(obj.opts[name])) {
        rez = obj.opts[name].apply(obj, args);
      }
      if (rez === false) {
        return rez;
      }
      if (name === "afterClose" || !self.$refs) {
        $D.trigger(name + ".fb", args);
      } else {
        self.$refs.container.trigger(name + ".fb", args);
      }
    },
    // Update infobar values, navigation button states and reveal caption
    // ==================================================================

    updateControls: function updateControls() {
      var self = this,
        current = self.current,
        index = current.index,
        $container = self.$refs.container,
        $caption = self.$refs.caption,
        caption = current.opts.caption;

      // Recalculate content dimensions
      current.$slide.trigger("refresh");

      // Set caption
      if (caption && caption.length) {
        self.$caption = $caption;
        $caption.children().eq(0).html(caption);
      } else {
        self.$caption = null;
      }
      if (!self.hasHiddenControls && !self.isIdle) {
        self.showControls();
      }

      // Update info and navigation elements
      $container.find("[data-fancybox-count]").html(self.group.length);
      $container.find("[data-fancybox-index]").html(index + 1);
      $container.find("[data-fancybox-prev]").prop("disabled", !current.opts.loop && index <= 0);
      $container.find("[data-fancybox-next]").prop("disabled", !current.opts.loop && index >= self.group.length - 1);
      if (current.type === "image") {
        // Re-enable buttons; update download button source
        $container.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", current.opts.image.src || current.src).show();
      } else if (current.opts.toolbar) {
        $container.find("[data-fancybox-download],[data-fancybox-zoom]").hide();
      }

      // Make sure focus is not on disabled button/element
      if ($(document.activeElement).is(":hidden,[disabled]")) {
        self.$refs.container.trigger("focus");
      }
    },
    // Hide toolbar and caption
    // ========================

    hideControls: function hideControls(andCaption) {
      var self = this,
        arr = ["infobar", "toolbar", "nav"];
      if (andCaption || !self.current.opts.preventCaptionOverlap) {
        arr.push("caption");
      }
      this.$refs.container.removeClass(arr.map(function (i) {
        return "fancybox-show-" + i;
      }).join(" "));
      this.hasHiddenControls = true;
    },
    showControls: function showControls() {
      var self = this,
        opts = self.current ? self.current.opts : self.opts,
        $container = self.$refs.container;
      self.hasHiddenControls = false;
      self.idleSecondsCounter = 0;
      $container.toggleClass("fancybox-show-toolbar", !!(opts.toolbar && opts.buttons)).toggleClass("fancybox-show-infobar", !!(opts.infobar && self.group.length > 1)).toggleClass("fancybox-show-caption", !!self.$caption).toggleClass("fancybox-show-nav", !!(opts.arrows && self.group.length > 1)).toggleClass("fancybox-is-modal", !!opts.modal);
    },
    // Toggle toolbar and caption
    // ==========================

    toggleControls: function toggleControls() {
      if (this.hasHiddenControls) {
        this.showControls();
      } else {
        this.hideControls();
      }
    }
  });
  $.fancybox = {
    version: "3.5.7",
    defaults: defaults,
    // Get current instance and execute a command.
    //
    // Examples of usage:
    //
    //   $instance = $.fancybox.getInstance();
    //   $.fancybox.getInstance().jumpTo( 1 );
    //   $.fancybox.getInstance( 'jumpTo', 1 );
    //   $.fancybox.getInstance( function() {
    //       console.info( this.currIndex );
    //   });
    // ======================================================

    getInstance: function getInstance(command) {
      var instance = $('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
        args = Array.prototype.slice.call(arguments, 1);
      if (instance instanceof FancyBox) {
        if ($.type(command) === "string") {
          instance[command].apply(instance, args);
        } else if ($.type(command) === "function") {
          command.apply(instance, args);
        }
        return instance;
      }
      return false;
    },
    // Create new instance
    // ===================

    open: function open(items, opts, index) {
      return new FancyBox(items, opts, index);
    },
    // Close current or all instances
    // ==============================

    close: function close(all) {
      var instance = this.getInstance();
      if (instance) {
        instance.close();

        // Try to find and close next instance
        if (all === true) {
          this.close(all);
        }
      }
    },
    // Close all instances and unbind all events
    // =========================================

    destroy: function destroy() {
      this.close(true);
      $D.add("body").off("click.fb-start", "**");
    },
    // Try to detect mobile devices
    // ============================

    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    // Detect if 'translate3d' support is available
    // ============================================

    use3d: function () {
      var div = document.createElement("div");
      return window.getComputedStyle && window.getComputedStyle(div) && window.getComputedStyle(div).getPropertyValue("transform") && !(document.documentMode && document.documentMode < 11);
    }(),
    // Helper function to get current visual state of an element
    // returns array[ top, left, horizontal-scale, vertical-scale, opacity ]
    // =====================================================================

    getTranslate: function getTranslate($el) {
      var domRect;
      if (!$el || !$el.length) {
        return false;
      }
      domRect = $el[0].getBoundingClientRect();
      return {
        top: domRect.top || 0,
        left: domRect.left || 0,
        width: domRect.width,
        height: domRect.height,
        opacity: parseFloat($el.css("opacity"))
      };
    },
    // Shortcut for setting "translate3d" properties for element
    // Can set be used to set opacity, too
    // ========================================================

    setTranslate: function setTranslate($el, props) {
      var str = "",
        css = {};
      if (!$el || !props) {
        return;
      }
      if (props.left !== undefined || props.top !== undefined) {
        str = (props.left === undefined ? $el.position().left : props.left) + "px, " + (props.top === undefined ? $el.position().top : props.top) + "px";
        if (this.use3d) {
          str = "translate3d(" + str + ", 0px)";
        } else {
          str = "translate(" + str + ")";
        }
      }
      if (props.scaleX !== undefined && props.scaleY !== undefined) {
        str += " scale(" + props.scaleX + ", " + props.scaleY + ")";
      } else if (props.scaleX !== undefined) {
        str += " scaleX(" + props.scaleX + ")";
      }
      if (str.length) {
        css.transform = str;
      }
      if (props.opacity !== undefined) {
        css.opacity = props.opacity;
      }
      if (props.width !== undefined) {
        css.width = props.width;
      }
      if (props.height !== undefined) {
        css.height = props.height;
      }
      return $el.css(css);
    },
    // Simple CSS transition handler
    // =============================

    animate: function animate($el, to, duration, callback, leaveAnimationName) {
      var self = this,
        from;
      if ($.isFunction(duration)) {
        callback = duration;
        duration = null;
      }
      self.stop($el);
      from = self.getTranslate($el);
      $el.on(transitionEnd, function (e) {
        // Skip events from child elements and z-index change
        if (e && e.originalEvent && (!$el.is(e.originalEvent.target) || e.originalEvent.propertyName == "z-index")) {
          return;
        }
        self.stop($el);
        if ($.isNumeric(duration)) {
          $el.css("transition-duration", "");
        }
        if ($.isPlainObject(to)) {
          if (to.scaleX !== undefined && to.scaleY !== undefined) {
            self.setTranslate($el, {
              top: to.top,
              left: to.left,
              width: from.width * to.scaleX,
              height: from.height * to.scaleY,
              scaleX: 1,
              scaleY: 1
            });
          }
        } else if (leaveAnimationName !== true) {
          $el.removeClass(to);
        }
        if ($.isFunction(callback)) {
          callback(e);
        }
      });
      if ($.isNumeric(duration)) {
        $el.css("transition-duration", duration + "ms");
      }

      // Start animation by changing CSS properties or class name
      if ($.isPlainObject(to)) {
        if (to.scaleX !== undefined && to.scaleY !== undefined) {
          delete to.width;
          delete to.height;
          if ($el.parent().hasClass("fancybox-slide--image")) {
            $el.parent().addClass("fancybox-is-scaling");
          }
        }
        $.fancybox.setTranslate($el, to);
      } else {
        $el.addClass(to);
      }

      // Make sure that `transitionend` callback gets fired
      $el.data("timer", setTimeout(function () {
        $el.trigger(transitionEnd);
      }, duration + 33));
    },
    stop: function stop($el, callCallback) {
      if ($el && $el.length) {
        clearTimeout($el.data("timer"));
        if (callCallback) {
          $el.trigger(transitionEnd);
        }
        $el.off(transitionEnd).css("transition-duration", "");
        $el.parent().removeClass("fancybox-is-scaling");
      }
    }
  };

  // Default click handler for "fancyboxed" links
  // ============================================

  function _run(e, opts) {
    var items = [],
      index = 0,
      $target,
      value,
      instance;

    // Avoid opening multiple times
    if (e && e.isDefaultPrevented()) {
      return;
    }
    e.preventDefault();
    opts = opts || {};
    if (e && e.data) {
      opts = mergeOpts(e.data.options, opts);
    }
    $target = opts.$target || $(e.currentTarget).trigger("blur");
    instance = $.fancybox.getInstance();
    if (instance && instance.$trigger && instance.$trigger.is($target)) {
      return;
    }
    if (opts.selector) {
      items = $(opts.selector);
    } else {
      // Get all related items and find index for clicked one
      value = $target.attr("data-fancybox") || "";
      if (value) {
        items = e.data ? e.data.items : [];
        items = items.length ? items.filter('[data-fancybox="' + value + '"]') : $('[data-fancybox="' + value + '"]');
      } else {
        items = [$target];
      }
    }
    index = $(items).index($target);

    // Sometimes current item can not be found
    if (index < 0) {
      index = 0;
    }
    instance = $.fancybox.open(items, opts, index);

    // Save last active element
    instance.$trigger = $target;
  }

  // Create a jQuery plugin
  // ======================

  $.fn.fancybox = function (options) {
    var selector;
    options = options || {};
    selector = options.selector || false;
    if (selector) {
      // Use body element instead of document so it executes first
      $("body").off("click.fb-start", selector).on("click.fb-start", selector, {
        options: options
      }, _run);
    } else {
      this.off("click.fb-start").on("click.fb-start", {
        items: this,
        options: options
      }, _run);
    }
    return this;
  };

  // Self initializing plugin for all elements having `data-fancybox` attribute
  // ==========================================================================

  $D.on("click.fb-start", "[data-fancybox]", _run);

  // Enable "trigger elements"
  // =========================

  $D.on("click.fb-start", "[data-fancybox-trigger]", function (e) {
    $('[data-fancybox="' + $(this).attr("data-fancybox-trigger") + '"]').eq($(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {
      $trigger: $(this)
    });
  });

  // Track focus event for better accessibility styling
  // ==================================================
  (function () {
    var buttonStr = ".fancybox-button",
      focusStr = "fancybox-focus",
      $pressed = null;
    $D.on("mousedown mouseup focus blur", buttonStr, function (e) {
      switch (e.type) {
        case "mousedown":
          $pressed = $(this);
          break;
        case "mouseup":
          $pressed = null;
          break;
        case "focusin":
          $(buttonStr).removeClass(focusStr);
          if (!$(this).is($pressed) && !$(this).is("[disabled]")) {
            $(this).addClass(focusStr);
          }
          break;
        case "focusout":
          $(buttonStr).removeClass(focusStr);
          break;
      }
    });
  })();
})(window, document, jQuery);
// ==========================================================================
//
// Media
// Adds additional media type support
//
// ==========================================================================
(function ($) {
  "use strict";

  // Object containing properties for each media type
  var defaults = {
    youtube: {
      matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
      params: {
        autoplay: 1,
        autohide: 1,
        fs: 1,
        rel: 0,
        hd: 1,
        wmode: "transparent",
        enablejsapi: 1,
        html5: 1
      },
      paramPlace: 8,
      type: "iframe",
      url: "https://www.youtube-nocookie.com/embed/$4",
      thumb: "https://img.youtube.com/vi/$4/hqdefault.jpg"
    },
    vimeo: {
      matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
      params: {
        autoplay: 1,
        hd: 1,
        show_title: 1,
        show_byline: 1,
        show_portrait: 0,
        fullscreen: 1
      },
      paramPlace: 3,
      type: "iframe",
      url: "//player.vimeo.com/video/$2"
    },
    instagram: {
      matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
      type: "image",
      url: "//$1/p/$2/media/?size=l"
    },
    // Examples:
    // http://maps.google.com/?ll=48.857995,2.294297&spn=0.007666,0.021136&t=m&z=16
    // https://www.google.com/maps/@37.7852006,-122.4146355,14.65z
    // https://www.google.com/maps/@52.2111123,2.9237542,6.61z?hl=en
    // https://www.google.com/maps/place/Googleplex/@37.4220041,-122.0833494,17z/data=!4m5!3m4!1s0x0:0x6c296c66619367e0!8m2!3d37.4219998!4d-122.0840572
    gmap_place: {
      matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
      type: "iframe",
      url: function url(rez) {
        return "//maps.google." + rez[2] + "/?ll=" + (rez[9] ? rez[9] + "&z=" + Math.floor(rez[10]) + (rez[12] ? rez[12].replace(/^\//, "&") : "") : rez[12] + "").replace(/\?/, "&") + "&output=" + (rez[12] && rez[12].indexOf("layer=c") > 0 ? "svembed" : "embed");
      }
    },
    // Examples:
    // https://www.google.com/maps/search/Empire+State+Building/
    // https://www.google.com/maps/search/?api=1&query=centurylink+field
    // https://www.google.com/maps/search/?api=1&query=47.5951518,-122.3316393
    gmap_search: {
      matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
      type: "iframe",
      url: function url(rez) {
        return "//maps.google." + rez[2] + "/maps?q=" + rez[5].replace("query=", "q=").replace("api=1", "") + "&output=embed";
      }
    }
  };

  // Formats matching url to final form
  var format = function format(url, rez, params) {
    if (!url) {
      return;
    }
    params = params || "";
    if ($.type(params) === "object") {
      params = $.param(params, true);
    }
    $.each(rez, function (key, value) {
      url = url.replace("$" + key, value || "");
    });
    if (params.length) {
      url += (url.indexOf("?") > 0 ? "&" : "?") + params;
    }
    return url;
  };
  $(document).on("objectNeedsType.fb", function (e, instance, item) {
    var url = item.src || "",
      type = false,
      media,
      thumb,
      rez,
      params,
      urlParams,
      paramObj,
      provider;
    media = $.extend(true, {}, defaults, item.opts.media);

    // Look for any matching media type
    $.each(media, function (providerName, providerOpts) {
      rez = url.match(providerOpts.matcher);
      if (!rez) {
        return;
      }
      type = providerOpts.type;
      provider = providerName;
      paramObj = {};
      if (providerOpts.paramPlace && rez[providerOpts.paramPlace]) {
        urlParams = rez[providerOpts.paramPlace];
        if (urlParams[0] == "?") {
          urlParams = urlParams.substring(1);
        }
        urlParams = urlParams.split("&");
        for (var m = 0; m < urlParams.length; ++m) {
          var p = urlParams[m].split("=", 2);
          if (p.length == 2) {
            paramObj[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
          }
        }
      }
      params = $.extend(true, {}, providerOpts.params, item.opts[providerName], paramObj);
      url = $.type(providerOpts.url) === "function" ? providerOpts.url.call(this, rez, params, item) : format(providerOpts.url, rez, params);
      thumb = $.type(providerOpts.thumb) === "function" ? providerOpts.thumb.call(this, rez, params, item) : format(providerOpts.thumb, rez);
      if (providerName === "youtube") {
        url = url.replace(/&t=((\d+)m)?(\d+)s/, function (match, p1, m, s) {
          return "&start=" + ((m ? parseInt(m, 10) * 60 : 0) + parseInt(s, 10));
        });
      } else if (providerName === "vimeo") {
        url = url.replace("&%23", "#");
      }
      return false;
    });

    // If it is found, then change content type and update the url

    if (type) {
      if (!item.opts.thumb && !(item.opts.$thumb && item.opts.$thumb.length)) {
        item.opts.thumb = thumb;
      }
      if (type === "iframe") {
        item.opts = $.extend(true, item.opts, {
          iframe: {
            preload: false,
            attr: {
              scrolling: "no"
            }
          }
        });
      }
      $.extend(item, {
        type: type,
        src: url,
        origSrc: item.src,
        contentSource: provider,
        contentType: type === "image" ? "image" : provider == "gmap_place" || provider == "gmap_search" ? "map" : "video"
      });
    } else if (url) {
      item.type = item.opts.defaultType;
    }
  });

  // Load YouTube/Video API on request to detect when video finished playing
  var VideoAPILoader = {
    youtube: {
      src: "https://www.youtube.com/iframe_api",
      class: "YT",
      loading: false,
      loaded: false
    },
    vimeo: {
      src: "https://player.vimeo.com/api/player.js",
      class: "Vimeo",
      loading: false,
      loaded: false
    },
    load: function load(vendor) {
      var _this = this,
        script;
      if (this[vendor].loaded) {
        setTimeout(function () {
          _this.done(vendor);
        });
        return;
      }
      if (this[vendor].loading) {
        return;
      }
      this[vendor].loading = true;
      script = document.createElement("script");
      script.type = "text/javascript";
      script.src = this[vendor].src;
      if (vendor === "youtube") {
        window.onYouTubeIframeAPIReady = function () {
          _this[vendor].loaded = true;
          _this.done(vendor);
        };
      } else {
        script.onload = function () {
          _this[vendor].loaded = true;
          _this.done(vendor);
        };
      }
      document.body.appendChild(script);
    },
    done: function done(vendor) {
      var instance, $el, player;
      if (vendor === "youtube") {
        delete window.onYouTubeIframeAPIReady;
      }
      instance = $.fancybox.getInstance();
      if (instance) {
        $el = instance.current.$content.find("iframe");
        if (vendor === "youtube" && YT !== undefined && YT) {
          player = new YT.Player($el.attr("id"), {
            events: {
              onStateChange: function onStateChange(e) {
                if (e.data == 0) {
                  instance.next();
                }
              }
            }
          });
        } else if (vendor === "vimeo" && Vimeo !== undefined && Vimeo) {
          player = new Vimeo.Player($el);
          player.on("ended", function () {
            instance.next();
          });
        }
      }
    }
  };
  $(document).on({
    "afterShow.fb": function afterShowFb(e, instance, current) {
      if (instance.group.length > 1 && (current.contentSource === "youtube" || current.contentSource === "vimeo")) {
        VideoAPILoader.load(current.contentSource);
      }
    }
  });
})(jQuery);
// ==========================================================================
//
// Guestures
// Adds touch guestures, handles click and tap events
//
// ==========================================================================
(function (window, document, $) {
  "use strict";

  var requestAFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame ||
    // if all else fails, use setTimeout
    function (callback) {
      return window.setTimeout(callback, 1000 / 60);
    };
  }();
  var cancelAFrame = function () {
    return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || function (id) {
      window.clearTimeout(id);
    };
  }();
  var getPointerXY = function getPointerXY(e) {
    var result = [];
    e = e.originalEvent || e || window.e;
    e = e.touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e];
    for (var key in e) {
      if (e[key].pageX) {
        result.push({
          x: e[key].pageX,
          y: e[key].pageY
        });
      } else if (e[key].clientX) {
        result.push({
          x: e[key].clientX,
          y: e[key].clientY
        });
      }
    }
    return result;
  };
  var distance = function distance(point2, point1, what) {
    if (!point1 || !point2) {
      return 0;
    }
    if (what === "x") {
      return point2.x - point1.x;
    } else if (what === "y") {
      return point2.y - point1.y;
    }
    return Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
  };
  var isClickable = function isClickable($el) {
    if ($el.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || $.isFunction($el.get(0).onclick) || $el.data("selectable")) {
      return true;
    }

    // Check for attributes like data-fancybox-next or data-fancybox-close
    for (var i = 0, atts = $el[0].attributes, n = atts.length; i < n; i++) {
      if (atts[i].nodeName.substr(0, 14) === "data-fancybox-") {
        return true;
      }
    }
    return false;
  };
  var hasScrollbars = function hasScrollbars(el) {
    var overflowY = window.getComputedStyle(el)["overflow-y"],
      overflowX = window.getComputedStyle(el)["overflow-x"],
      vertical = (overflowY === "scroll" || overflowY === "auto") && el.scrollHeight > el.clientHeight,
      horizontal = (overflowX === "scroll" || overflowX === "auto") && el.scrollWidth > el.clientWidth;
    return vertical || horizontal;
  };
  var isScrollable = function isScrollable($el) {
    var rez = false;
    while (true) {
      rez = hasScrollbars($el.get(0));
      if (rez) {
        break;
      }
      $el = $el.parent();
      if (!$el.length || $el.hasClass("fancybox-stage") || $el.is("body")) {
        break;
      }
    }
    return rez;
  };
  var Guestures = function Guestures(instance) {
    var self = this;
    self.instance = instance;
    self.$bg = instance.$refs.bg;
    self.$stage = instance.$refs.stage;
    self.$container = instance.$refs.container;
    self.destroy();
    self.$container.on("touchstart.fb.touch mousedown.fb.touch", $.proxy(self, "ontouchstart"));
  };
  Guestures.prototype.destroy = function () {
    var self = this;
    self.$container.off(".fb.touch");
    $(document).off(".fb.touch");
    if (self.requestId) {
      cancelAFrame(self.requestId);
      self.requestId = null;
    }
    if (self.tapped) {
      clearTimeout(self.tapped);
      self.tapped = null;
    }
  };
  Guestures.prototype.ontouchstart = function (e) {
    var self = this,
      $target = $(e.target),
      instance = self.instance,
      current = instance.current,
      $slide = current.$slide,
      $content = current.$content,
      isTouchDevice = e.type == "touchstart";

    // Do not respond to both (touch and mouse) events
    if (isTouchDevice) {
      self.$container.off("mousedown.fb.touch");
    }

    // Ignore right click
    if (e.originalEvent && e.originalEvent.button == 2) {
      return;
    }

    // Ignore taping on links, buttons, input elements
    if (!$slide.length || !$target.length || isClickable($target) || isClickable($target.parent())) {
      return;
    }
    // Ignore clicks on the scrollbar
    if (!$target.is("img") && e.originalEvent.clientX > $target[0].clientWidth + $target.offset().left) {
      return;
    }

    // Ignore clicks while zooming or closing
    if (!current || instance.isAnimating || current.$slide.hasClass("fancybox-animated")) {
      e.stopPropagation();
      e.preventDefault();
      return;
    }
    self.realPoints = self.startPoints = getPointerXY(e);
    if (!self.startPoints.length) {
      return;
    }

    // Allow other scripts to catch touch event if "touch" is set to false
    if (current.touch) {
      e.stopPropagation();
    }
    self.startEvent = e;
    self.canTap = true;
    self.$target = $target;
    self.$content = $content;
    self.opts = current.opts.touch;
    self.isPanning = false;
    self.isSwiping = false;
    self.isZooming = false;
    self.isScrolling = false;
    self.canPan = instance.canPan();
    self.startTime = new Date().getTime();
    self.distanceX = self.distanceY = self.distance = 0;
    self.canvasWidth = Math.round($slide[0].clientWidth);
    self.canvasHeight = Math.round($slide[0].clientHeight);
    self.contentLastPos = null;
    self.contentStartPos = $.fancybox.getTranslate(self.$content) || {
      top: 0,
      left: 0
    };
    self.sliderStartPos = $.fancybox.getTranslate($slide);

    // Since position will be absolute, but we need to make it relative to the stage
    self.stagePos = $.fancybox.getTranslate(instance.$refs.stage);
    self.sliderStartPos.top -= self.stagePos.top;
    self.sliderStartPos.left -= self.stagePos.left;
    self.contentStartPos.top -= self.stagePos.top;
    self.contentStartPos.left -= self.stagePos.left;
    $(document).off(".fb.touch").on(isTouchDevice ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", $.proxy(self, "ontouchend")).on(isTouchDevice ? "touchmove.fb.touch" : "mousemove.fb.touch", $.proxy(self, "ontouchmove"));
    if ($.fancybox.isMobile) {
      document.addEventListener("scroll", self.onscroll, true);
    }

    // Skip if clicked outside the sliding area
    if (!(self.opts || self.canPan) || !($target.is(self.$stage) || self.$stage.find($target).length)) {
      if ($target.is(".fancybox-image")) {
        e.preventDefault();
      }
      if (!($.fancybox.isMobile && $target.parents(".fancybox-caption").length)) {
        return;
      }
    }
    self.isScrollable = isScrollable($target) || isScrollable($target.parent());

    // Check if element is scrollable and try to prevent default behavior (scrolling)
    if (!($.fancybox.isMobile && self.isScrollable)) {
      e.preventDefault();
    }

    // One finger or mouse click - swipe or pan an image
    if (self.startPoints.length === 1 || current.hasError) {
      if (self.canPan) {
        $.fancybox.stop(self.$content);
        self.isPanning = true;
      } else {
        self.isSwiping = true;
      }
      self.$container.addClass("fancybox-is-grabbing");
    }

    // Two fingers - zoom image
    if (self.startPoints.length === 2 && current.type === "image" && (current.isLoaded || current.$ghost)) {
      self.canTap = false;
      self.isSwiping = false;
      self.isPanning = false;
      self.isZooming = true;
      $.fancybox.stop(self.$content);
      self.centerPointStartX = (self.startPoints[0].x + self.startPoints[1].x) * 0.5 - $(window).scrollLeft();
      self.centerPointStartY = (self.startPoints[0].y + self.startPoints[1].y) * 0.5 - $(window).scrollTop();
      self.percentageOfImageAtPinchPointX = (self.centerPointStartX - self.contentStartPos.left) / self.contentStartPos.width;
      self.percentageOfImageAtPinchPointY = (self.centerPointStartY - self.contentStartPos.top) / self.contentStartPos.height;
      self.startDistanceBetweenFingers = distance(self.startPoints[0], self.startPoints[1]);
    }
  };
  Guestures.prototype.onscroll = function (e) {
    var self = this;
    self.isScrolling = true;
    document.removeEventListener("scroll", self.onscroll, true);
  };
  Guestures.prototype.ontouchmove = function (e) {
    var self = this;

    // Make sure user has not released over iframe or disabled element
    if (e.originalEvent.buttons !== undefined && e.originalEvent.buttons === 0) {
      self.ontouchend(e);
      return;
    }
    if (self.isScrolling) {
      self.canTap = false;
      return;
    }
    self.newPoints = getPointerXY(e);
    if (!(self.opts || self.canPan) || !self.newPoints.length || !self.newPoints.length) {
      return;
    }
    if (!(self.isSwiping && self.isSwiping === true)) {
      e.preventDefault();
    }
    self.distanceX = distance(self.newPoints[0], self.startPoints[0], "x");
    self.distanceY = distance(self.newPoints[0], self.startPoints[0], "y");
    self.distance = distance(self.newPoints[0], self.startPoints[0]);

    // Skip false ontouchmove events (Chrome)
    if (self.distance > 0) {
      if (self.isSwiping) {
        self.onSwipe(e);
      } else if (self.isPanning) {
        self.onPan();
      } else if (self.isZooming) {
        self.onZoom();
      }
    }
  };
  Guestures.prototype.onSwipe = function (e) {
    var self = this,
      instance = self.instance,
      swiping = self.isSwiping,
      left = self.sliderStartPos.left || 0,
      angle;

    // If direction is not yet determined
    if (swiping === true) {
      // We need at least 10px distance to correctly calculate an angle
      if (Math.abs(self.distance) > 10) {
        self.canTap = false;
        if (instance.group.length < 2 && self.opts.vertical) {
          self.isSwiping = "y";
        } else if (instance.isDragging || self.opts.vertical === false || self.opts.vertical === "auto" && $(window).width() > 800) {
          self.isSwiping = "x";
        } else {
          angle = Math.abs(Math.atan2(self.distanceY, self.distanceX) * 180 / Math.PI);
          self.isSwiping = angle > 45 && angle < 135 ? "y" : "x";
        }
        if (self.isSwiping === "y" && $.fancybox.isMobile && self.isScrollable) {
          self.isScrolling = true;
          return;
        }
        instance.isDragging = self.isSwiping;

        // Reset points to avoid jumping, because we dropped first swipes to calculate the angle
        self.startPoints = self.newPoints;
        $.each(instance.slides, function (index, slide) {
          var slidePos, stagePos;
          $.fancybox.stop(slide.$slide);
          slidePos = $.fancybox.getTranslate(slide.$slide);
          stagePos = $.fancybox.getTranslate(instance.$refs.stage);
          slide.$slide.css({
            transform: "",
            opacity: "",
            "transition-duration": ""
          }).removeClass("fancybox-animated").removeClass(function (index, className) {
            return (className.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ");
          });
          if (slide.pos === instance.current.pos) {
            self.sliderStartPos.top = slidePos.top - stagePos.top;
            self.sliderStartPos.left = slidePos.left - stagePos.left;
          }
          $.fancybox.setTranslate(slide.$slide, {
            top: slidePos.top - stagePos.top,
            left: slidePos.left - stagePos.left
          });
        });

        // Stop slideshow
        if (instance.SlideShow && instance.SlideShow.isActive) {
          instance.SlideShow.stop();
        }
      }
      return;
    }

    // Sticky edges
    if (swiping == "x") {
      if (self.distanceX > 0 && (self.instance.group.length < 2 || self.instance.current.index === 0 && !self.instance.current.opts.loop)) {
        left = left + Math.pow(self.distanceX, 0.8);
      } else if (self.distanceX < 0 && (self.instance.group.length < 2 || self.instance.current.index === self.instance.group.length - 1 && !self.instance.current.opts.loop)) {
        left = left - Math.pow(-self.distanceX, 0.8);
      } else {
        left = left + self.distanceX;
      }
    }
    self.sliderLastPos = {
      top: swiping == "x" ? 0 : self.sliderStartPos.top + self.distanceY,
      left: left
    };
    if (self.requestId) {
      cancelAFrame(self.requestId);
      self.requestId = null;
    }
    self.requestId = requestAFrame(function () {
      if (self.sliderLastPos) {
        $.each(self.instance.slides, function (index, slide) {
          var pos = slide.pos - self.instance.currPos;
          $.fancybox.setTranslate(slide.$slide, {
            top: self.sliderLastPos.top,
            left: self.sliderLastPos.left + pos * self.canvasWidth + pos * slide.opts.gutter
          });
        });
        self.$container.addClass("fancybox-is-sliding");
      }
    });
  };
  Guestures.prototype.onPan = function () {
    var self = this;

    // Prevent accidental movement (sometimes, when tapping casually, finger can move a bit)
    if (distance(self.newPoints[0], self.realPoints[0]) < ($.fancybox.isMobile ? 10 : 5)) {
      self.startPoints = self.newPoints;
      return;
    }
    self.canTap = false;
    self.contentLastPos = self.limitMovement();
    if (self.requestId) {
      cancelAFrame(self.requestId);
    }
    self.requestId = requestAFrame(function () {
      $.fancybox.setTranslate(self.$content, self.contentLastPos);
    });
  };

  // Make panning sticky to the edges
  Guestures.prototype.limitMovement = function () {
    var self = this;
    var canvasWidth = self.canvasWidth;
    var canvasHeight = self.canvasHeight;
    var distanceX = self.distanceX;
    var distanceY = self.distanceY;
    var contentStartPos = self.contentStartPos;
    var currentOffsetX = contentStartPos.left;
    var currentOffsetY = contentStartPos.top;
    var currentWidth = contentStartPos.width;
    var currentHeight = contentStartPos.height;
    var minTranslateX, minTranslateY, maxTranslateX, maxTranslateY, newOffsetX, newOffsetY;
    if (currentWidth > canvasWidth) {
      newOffsetX = currentOffsetX + distanceX;
    } else {
      newOffsetX = currentOffsetX;
    }
    newOffsetY = currentOffsetY + distanceY;

    // Slow down proportionally to traveled distance
    minTranslateX = Math.max(0, canvasWidth * 0.5 - currentWidth * 0.5);
    minTranslateY = Math.max(0, canvasHeight * 0.5 - currentHeight * 0.5);
    maxTranslateX = Math.min(canvasWidth - currentWidth, canvasWidth * 0.5 - currentWidth * 0.5);
    maxTranslateY = Math.min(canvasHeight - currentHeight, canvasHeight * 0.5 - currentHeight * 0.5);

    //   ->
    if (distanceX > 0 && newOffsetX > minTranslateX) {
      newOffsetX = minTranslateX - 1 + Math.pow(-minTranslateX + currentOffsetX + distanceX, 0.8) || 0;
    }

    //    <-
    if (distanceX < 0 && newOffsetX < maxTranslateX) {
      newOffsetX = maxTranslateX + 1 - Math.pow(maxTranslateX - currentOffsetX - distanceX, 0.8) || 0;
    }

    //   \/
    if (distanceY > 0 && newOffsetY > minTranslateY) {
      newOffsetY = minTranslateY - 1 + Math.pow(-minTranslateY + currentOffsetY + distanceY, 0.8) || 0;
    }

    //   /\
    if (distanceY < 0 && newOffsetY < maxTranslateY) {
      newOffsetY = maxTranslateY + 1 - Math.pow(maxTranslateY - currentOffsetY - distanceY, 0.8) || 0;
    }
    return {
      top: newOffsetY,
      left: newOffsetX
    };
  };
  Guestures.prototype.limitPosition = function (newOffsetX, newOffsetY, newWidth, newHeight) {
    var self = this;
    var canvasWidth = self.canvasWidth;
    var canvasHeight = self.canvasHeight;
    if (newWidth > canvasWidth) {
      newOffsetX = newOffsetX > 0 ? 0 : newOffsetX;
      newOffsetX = newOffsetX < canvasWidth - newWidth ? canvasWidth - newWidth : newOffsetX;
    } else {
      // Center horizontally
      newOffsetX = Math.max(0, canvasWidth / 2 - newWidth / 2);
    }
    if (newHeight > canvasHeight) {
      newOffsetY = newOffsetY > 0 ? 0 : newOffsetY;
      newOffsetY = newOffsetY < canvasHeight - newHeight ? canvasHeight - newHeight : newOffsetY;
    } else {
      // Center vertically
      newOffsetY = Math.max(0, canvasHeight / 2 - newHeight / 2);
    }
    return {
      top: newOffsetY,
      left: newOffsetX
    };
  };
  Guestures.prototype.onZoom = function () {
    var self = this;

    // Calculate current distance between points to get pinch ratio and new width and height
    var contentStartPos = self.contentStartPos;
    var currentWidth = contentStartPos.width;
    var currentHeight = contentStartPos.height;
    var currentOffsetX = contentStartPos.left;
    var currentOffsetY = contentStartPos.top;
    var endDistanceBetweenFingers = distance(self.newPoints[0], self.newPoints[1]);
    var pinchRatio = endDistanceBetweenFingers / self.startDistanceBetweenFingers;
    var newWidth = Math.floor(currentWidth * pinchRatio);
    var newHeight = Math.floor(currentHeight * pinchRatio);

    // This is the translation due to pinch-zooming
    var translateFromZoomingX = (currentWidth - newWidth) * self.percentageOfImageAtPinchPointX;
    var translateFromZoomingY = (currentHeight - newHeight) * self.percentageOfImageAtPinchPointY;

    // Point between the two touches
    var centerPointEndX = (self.newPoints[0].x + self.newPoints[1].x) / 2 - $(window).scrollLeft();
    var centerPointEndY = (self.newPoints[0].y + self.newPoints[1].y) / 2 - $(window).scrollTop();

    // And this is the translation due to translation of the centerpoint
    // between the two fingers
    var translateFromTranslatingX = centerPointEndX - self.centerPointStartX;
    var translateFromTranslatingY = centerPointEndY - self.centerPointStartY;

    // The new offset is the old/current one plus the total translation
    var newOffsetX = currentOffsetX + (translateFromZoomingX + translateFromTranslatingX);
    var newOffsetY = currentOffsetY + (translateFromZoomingY + translateFromTranslatingY);
    var newPos = {
      top: newOffsetY,
      left: newOffsetX,
      scaleX: pinchRatio,
      scaleY: pinchRatio
    };
    self.canTap = false;
    self.newWidth = newWidth;
    self.newHeight = newHeight;
    self.contentLastPos = newPos;
    if (self.requestId) {
      cancelAFrame(self.requestId);
    }
    self.requestId = requestAFrame(function () {
      $.fancybox.setTranslate(self.$content, self.contentLastPos);
    });
  };
  Guestures.prototype.ontouchend = function (e) {
    var self = this;
    var swiping = self.isSwiping;
    var panning = self.isPanning;
    var zooming = self.isZooming;
    var scrolling = self.isScrolling;
    self.endPoints = getPointerXY(e);
    self.dMs = Math.max(new Date().getTime() - self.startTime, 1);
    self.$container.removeClass("fancybox-is-grabbing");
    $(document).off(".fb.touch");
    document.removeEventListener("scroll", self.onscroll, true);
    if (self.requestId) {
      cancelAFrame(self.requestId);
      self.requestId = null;
    }
    self.isSwiping = false;
    self.isPanning = false;
    self.isZooming = false;
    self.isScrolling = false;
    self.instance.isDragging = false;
    if (self.canTap) {
      return self.onTap(e);
    }
    self.speed = 100;

    // Speed in px/ms
    self.velocityX = self.distanceX / self.dMs * 0.5;
    self.velocityY = self.distanceY / self.dMs * 0.5;
    if (panning) {
      self.endPanning();
    } else if (zooming) {
      self.endZooming();
    } else {
      self.endSwiping(swiping, scrolling);
    }
    return;
  };
  Guestures.prototype.endSwiping = function (swiping, scrolling) {
    var self = this,
      ret = false,
      len = self.instance.group.length,
      distanceX = Math.abs(self.distanceX),
      canAdvance = swiping == "x" && len > 1 && (self.dMs > 130 && distanceX > 10 || distanceX > 50),
      speedX = 300;
    self.sliderLastPos = null;

    // Close if swiped vertically / navigate if horizontally
    if (swiping == "y" && !scrolling && Math.abs(self.distanceY) > 50) {
      // Continue vertical movement
      $.fancybox.animate(self.instance.current.$slide, {
        top: self.sliderStartPos.top + self.distanceY + self.velocityY * 150,
        opacity: 0
      }, 200);
      ret = self.instance.close(true, 250);
    } else if (canAdvance && self.distanceX > 0) {
      ret = self.instance.previous(speedX);
    } else if (canAdvance && self.distanceX < 0) {
      ret = self.instance.next(speedX);
    }
    if (ret === false && (swiping == "x" || swiping == "y")) {
      self.instance.centerSlide(200);
    }
    self.$container.removeClass("fancybox-is-sliding");
  };

  // Limit panning from edges
  // ========================
  Guestures.prototype.endPanning = function () {
    var self = this,
      newOffsetX,
      newOffsetY,
      newPos;
    if (!self.contentLastPos) {
      return;
    }
    if (self.opts.momentum === false || self.dMs > 350) {
      newOffsetX = self.contentLastPos.left;
      newOffsetY = self.contentLastPos.top;
    } else {
      // Continue movement
      newOffsetX = self.contentLastPos.left + self.velocityX * 500;
      newOffsetY = self.contentLastPos.top + self.velocityY * 500;
    }
    newPos = self.limitPosition(newOffsetX, newOffsetY, self.contentStartPos.width, self.contentStartPos.height);
    newPos.width = self.contentStartPos.width;
    newPos.height = self.contentStartPos.height;
    $.fancybox.animate(self.$content, newPos, 366);
  };
  Guestures.prototype.endZooming = function () {
    var self = this;
    var current = self.instance.current;
    var newOffsetX, newOffsetY, newPos, reset;
    var newWidth = self.newWidth;
    var newHeight = self.newHeight;
    if (!self.contentLastPos) {
      return;
    }
    newOffsetX = self.contentLastPos.left;
    newOffsetY = self.contentLastPos.top;
    reset = {
      top: newOffsetY,
      left: newOffsetX,
      width: newWidth,
      height: newHeight,
      scaleX: 1,
      scaleY: 1
    };

    // Reset scalex/scaleY values; this helps for perfomance and does not break animation
    $.fancybox.setTranslate(self.$content, reset);
    if (newWidth < self.canvasWidth && newHeight < self.canvasHeight) {
      self.instance.scaleToFit(150);
    } else if (newWidth > current.width || newHeight > current.height) {
      self.instance.scaleToActual(self.centerPointStartX, self.centerPointStartY, 150);
    } else {
      newPos = self.limitPosition(newOffsetX, newOffsetY, newWidth, newHeight);
      $.fancybox.animate(self.$content, newPos, 150);
    }
  };
  Guestures.prototype.onTap = function (e) {
    var self = this;
    var $target = $(e.target);
    var instance = self.instance;
    var current = instance.current;
    var endPoints = e && getPointerXY(e) || self.startPoints;
    var tapX = endPoints[0] ? endPoints[0].x - $(window).scrollLeft() - self.stagePos.left : 0;
    var tapY = endPoints[0] ? endPoints[0].y - $(window).scrollTop() - self.stagePos.top : 0;
    var where;
    var process = function process(prefix) {
      var action = current.opts[prefix];
      if ($.isFunction(action)) {
        action = action.apply(instance, [current, e]);
      }
      if (!action) {
        return;
      }
      switch (action) {
        case "close":
          instance.close(self.startEvent);
          break;
        case "toggleControls":
          instance.toggleControls();
          break;
        case "next":
          instance.next();
          break;
        case "nextOrClose":
          if (instance.group.length > 1) {
            instance.next();
          } else {
            instance.close(self.startEvent);
          }
          break;
        case "zoom":
          if (current.type == "image" && (current.isLoaded || current.$ghost)) {
            if (instance.canPan()) {
              instance.scaleToFit();
            } else if (instance.isScaledDown()) {
              instance.scaleToActual(tapX, tapY);
            } else if (instance.group.length < 2) {
              instance.close(self.startEvent);
            }
          }
          break;
      }
    };

    // Ignore right click
    if (e.originalEvent && e.originalEvent.button == 2) {
      return;
    }

    // Skip if clicked on the scrollbar
    if (!$target.is("img") && tapX > $target[0].clientWidth + $target.offset().left) {
      return;
    }

    // Check where is clicked
    if ($target.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) {
      where = "Outside";
    } else if ($target.is(".fancybox-slide")) {
      where = "Slide";
    } else if (instance.current.$content && instance.current.$content.find($target).addBack().filter($target).length) {
      where = "Content";
    } else {
      return;
    }

    // Check if this is a double tap
    if (self.tapped) {
      // Stop previously created single tap
      clearTimeout(self.tapped);
      self.tapped = null;

      // Skip if distance between taps is too big
      if (Math.abs(tapX - self.tapX) > 50 || Math.abs(tapY - self.tapY) > 50) {
        return this;
      }

      // OK, now we assume that this is a double-tap
      process("dblclick" + where);
    } else {
      // Single tap will be processed if user has not clicked second time within 300ms
      // or there is no need to wait for double-tap
      self.tapX = tapX;
      self.tapY = tapY;
      if (current.opts["dblclick" + where] && current.opts["dblclick" + where] !== current.opts["click" + where]) {
        self.tapped = setTimeout(function () {
          self.tapped = null;
          if (!instance.isAnimating) {
            process("click" + where);
          }
        }, 500);
      } else {
        process("click" + where);
      }
    }
    return this;
  };
  $(document).on("onActivate.fb", function (e, instance) {
    if (instance && !instance.Guestures) {
      instance.Guestures = new Guestures(instance);
    }
  }).on("beforeClose.fb", function (e, instance) {
    if (instance && instance.Guestures) {
      instance.Guestures.destroy();
    }
  });
})(window, document, jQuery);
// ==========================================================================
//
// SlideShow
// Enables slideshow functionality
//
// Example of usage:
// $.fancybox.getInstance().SlideShow.start()
//
// ==========================================================================
(function (document, $) {
  "use strict";

  $.extend(true, $.fancybox.defaults, {
    btnTpl: {
      slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}">' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg>' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg>' + "</button>"
    },
    slideShow: {
      autoStart: false,
      speed: 3000,
      progress: true
    }
  });
  var SlideShow = function SlideShow(instance) {
    this.instance = instance;
    this.init();
  };
  $.extend(SlideShow.prototype, {
    timer: null,
    isActive: false,
    $button: null,
    init: function init() {
      var self = this,
        instance = self.instance,
        opts = instance.group[instance.currIndex].opts.slideShow;
      self.$button = instance.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
        self.toggle();
      });
      if (instance.group.length < 2 || !opts) {
        self.$button.hide();
      } else if (opts.progress) {
        self.$progress = $('<div class="fancybox-progress"></div>').appendTo(instance.$refs.inner);
      }
    },
    set: function set(force) {
      var self = this,
        instance = self.instance,
        current = instance.current;

      // Check if reached last element
      if (current && (force === true || current.opts.loop || instance.currIndex < instance.group.length - 1)) {
        if (self.isActive && current.contentType !== "video") {
          if (self.$progress) {
            $.fancybox.animate(self.$progress.show(), {
              scaleX: 1
            }, current.opts.slideShow.speed);
          }
          self.timer = setTimeout(function () {
            if (!instance.current.opts.loop && instance.current.index == instance.group.length - 1) {
              instance.jumpTo(0);
            } else {
              instance.next();
            }
          }, current.opts.slideShow.speed);
        }
      } else {
        self.stop();
        instance.idleSecondsCounter = 0;
        instance.showControls();
      }
    },
    clear: function clear() {
      var self = this;
      clearTimeout(self.timer);
      self.timer = null;
      if (self.$progress) {
        self.$progress.removeAttr("style").hide();
      }
    },
    start: function start() {
      var self = this,
        current = self.instance.current;
      if (current) {
        self.$button.attr("title", (current.opts.i18n[current.opts.lang] || current.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause");
        self.isActive = true;
        if (current.isComplete) {
          self.set(true);
        }
        self.instance.trigger("onSlideShowChange", true);
      }
    },
    stop: function stop() {
      var self = this,
        current = self.instance.current;
      self.clear();
      self.$button.attr("title", (current.opts.i18n[current.opts.lang] || current.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play");
      self.isActive = false;
      self.instance.trigger("onSlideShowChange", false);
      if (self.$progress) {
        self.$progress.removeAttr("style").hide();
      }
    },
    toggle: function toggle() {
      var self = this;
      if (self.isActive) {
        self.stop();
      } else {
        self.start();
      }
    }
  });
  $(document).on({
    "onInit.fb": function onInitFb(e, instance) {
      if (instance && !instance.SlideShow) {
        instance.SlideShow = new SlideShow(instance);
      }
    },
    "beforeShow.fb": function beforeShowFb(e, instance, current, firstRun) {
      var SlideShow = instance && instance.SlideShow;
      if (firstRun) {
        if (SlideShow && current.opts.slideShow.autoStart) {
          SlideShow.start();
        }
      } else if (SlideShow && SlideShow.isActive) {
        SlideShow.clear();
      }
    },
    "afterShow.fb": function afterShowFb(e, instance, current) {
      var SlideShow = instance && instance.SlideShow;
      if (SlideShow && SlideShow.isActive) {
        SlideShow.set();
      }
    },
    "afterKeydown.fb": function afterKeydownFb(e, instance, current, keypress, keycode) {
      var SlideShow = instance && instance.SlideShow;

      // "P" or Spacebar
      if (SlideShow && current.opts.slideShow && (keycode === 80 || keycode === 32) && !$(document.activeElement).is("button,a,input")) {
        keypress.preventDefault();
        SlideShow.toggle();
      }
    },
    "beforeClose.fb onDeactivate.fb": function beforeCloseFb_onDeactivateFb(e, instance) {
      var SlideShow = instance && instance.SlideShow;
      if (SlideShow) {
        SlideShow.stop();
      }
    }
  });

  // Page Visibility API to pause slideshow when window is not active
  $(document).on("visibilitychange", function () {
    var instance = $.fancybox.getInstance(),
      SlideShow = instance && instance.SlideShow;
    if (SlideShow && SlideShow.isActive) {
      if (document.hidden) {
        SlideShow.clear();
      } else {
        SlideShow.set();
      }
    }
  });
})(document, jQuery);
// ==========================================================================
//
// FullScreen
// Adds fullscreen functionality
//
// ==========================================================================
(function (document, $) {
  "use strict";

  // Collection of methods supported by user browser
  var fn = function () {
    var fnMap = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"],
    // new WebKit
    ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"],
    // old WebKit (Safari 5.1)
    ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]];
    var ret = {};
    for (var i = 0; i < fnMap.length; i++) {
      var val = fnMap[i];
      if (val && val[1] in document) {
        for (var j = 0; j < val.length; j++) {
          ret[fnMap[0][j]] = val[j];
        }
        return ret;
      }
    }
    return false;
  }();
  if (fn) {
    var FullScreen = {
      request: function request(elem) {
        elem = elem || document.documentElement;
        elem[fn.requestFullscreen](elem.ALLOW_KEYBOARD_INPUT);
      },
      exit: function exit() {
        document[fn.exitFullscreen]();
      },
      toggle: function toggle(elem) {
        elem = elem || document.documentElement;
        if (this.isFullscreen()) {
          this.exit();
        } else {
          this.request(elem);
        }
      },
      isFullscreen: function isFullscreen() {
        return Boolean(document[fn.fullscreenElement]);
      },
      enabled: function enabled() {
        return Boolean(document[fn.fullscreenEnabled]);
      }
    };
    $.extend(true, $.fancybox.defaults, {
      btnTpl: {
        fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}">' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg>' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg>' + "</button>"
      },
      fullScreen: {
        autoStart: false
      }
    });
    $(document).on(fn.fullscreenchange, function () {
      var isFullscreen = FullScreen.isFullscreen(),
        instance = $.fancybox.getInstance();
      if (instance) {
        // If image is zooming, then force to stop and reposition properly
        if (instance.current && instance.current.type === "image" && instance.isAnimating) {
          instance.isAnimating = false;
          instance.update(true, true, 0);
          if (!instance.isComplete) {
            instance.complete();
          }
        }
        instance.trigger("onFullscreenChange", isFullscreen);
        instance.$refs.container.toggleClass("fancybox-is-fullscreen", isFullscreen);
        instance.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !isFullscreen).toggleClass("fancybox-button--fsexit", isFullscreen);
      }
    });
  }
  $(document).on({
    "onInit.fb": function onInitFb(e, instance) {
      var $container;
      if (!fn) {
        instance.$refs.toolbar.find("[data-fancybox-fullscreen]").remove();
        return;
      }
      if (instance && instance.group[instance.currIndex].opts.fullScreen) {
        $container = instance.$refs.container;
        $container.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (e) {
          e.stopPropagation();
          e.preventDefault();
          FullScreen.toggle();
        });
        if (instance.opts.fullScreen && instance.opts.fullScreen.autoStart === true) {
          FullScreen.request();
        }

        // Expose API
        instance.FullScreen = FullScreen;
      } else if (instance) {
        instance.$refs.toolbar.find("[data-fancybox-fullscreen]").hide();
      }
    },
    "afterKeydown.fb": function afterKeydownFb(e, instance, current, keypress, keycode) {
      // "F"
      if (instance && instance.FullScreen && keycode === 70) {
        keypress.preventDefault();
        instance.FullScreen.toggle();
      }
    },
    "beforeClose.fb": function beforeCloseFb(e, instance) {
      if (instance && instance.FullScreen && instance.$refs.container.hasClass("fancybox-is-fullscreen")) {
        FullScreen.exit();
      }
    }
  });
})(document, jQuery);
// ==========================================================================
//
// Thumbs
// Displays thumbnails in a grid
//
// ==========================================================================
(function (document, $) {
  "use strict";

  var CLASS = "fancybox-thumbs",
    CLASS_ACTIVE = CLASS + "-active";

  // Make sure there are default values
  $.fancybox.defaults = $.extend(true, {
    btnTpl: {
      thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}">' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg>' + "</button>"
    },
    thumbs: {
      autoStart: false,
      // Display thumbnails on opening
      hideOnClose: true,
      // Hide thumbnail grid when closing animation starts
      parentEl: ".fancybox-container",
      // Container is injected into this element
      axis: "y" // Vertical (y) or horizontal (x) scrolling
    }
  }, $.fancybox.defaults);
  var FancyThumbs = function FancyThumbs(instance) {
    this.init(instance);
  };
  $.extend(FancyThumbs.prototype, {
    $button: null,
    $grid: null,
    $list: null,
    isVisible: false,
    isActive: false,
    init: function init(instance) {
      var self = this,
        group = instance.group,
        enabled = 0;
      self.instance = instance;
      self.opts = group[instance.currIndex].opts.thumbs;
      instance.Thumbs = self;
      self.$button = instance.$refs.toolbar.find("[data-fancybox-thumbs]");

      // Enable thumbs if at least two group items have thumbnails
      for (var i = 0, len = group.length; i < len; i++) {
        if (group[i].thumb) {
          enabled++;
        }
        if (enabled > 1) {
          break;
        }
      }
      if (enabled > 1 && !!self.opts) {
        self.$button.removeAttr("style").on("click", function () {
          self.toggle();
        });
        self.isActive = true;
      } else {
        self.$button.hide();
      }
    },
    create: function create() {
      var self = this,
        instance = self.instance,
        parentEl = self.opts.parentEl,
        list = [],
        src;
      if (!self.$grid) {
        // Create main element
        self.$grid = $('<div class="' + CLASS + " " + CLASS + "-" + self.opts.axis + '"></div>').appendTo(instance.$refs.container.find(parentEl).addBack().filter(parentEl));

        // Add "click" event that performs gallery navigation
        self.$grid.on("click", "a", function () {
          instance.jumpTo($(this).attr("data-index"));
        });
      }

      // Build the list
      if (!self.$list) {
        self.$list = $('<div class="' + CLASS + '__list">').appendTo(self.$grid);
      }
      $.each(instance.group, function (i, item) {
        src = item.thumb;
        if (!src && item.type === "image") {
          src = item.src;
        }
        list.push('<a href="javascript:;" tabindex="0" data-index="' + i + '"' + (src && src.length ? ' style="background-image:url(' + src + ')"' : 'class="fancybox-thumbs-missing"') + "></a>");
      });
      self.$list[0].innerHTML = list.join("");
      if (self.opts.axis === "x") {
        // Set fixed width for list element to enable horizontal scrolling
        self.$list.width(parseInt(self.$grid.css("padding-right"), 10) + instance.group.length * self.$list.children().eq(0).outerWidth(true));
      }
    },
    focus: function focus(duration) {
      var self = this,
        $list = self.$list,
        $grid = self.$grid,
        thumb,
        thumbPos;
      if (!self.instance.current) {
        return;
      }
      thumb = $list.children().removeClass(CLASS_ACTIVE).filter('[data-index="' + self.instance.current.index + '"]').addClass(CLASS_ACTIVE);
      thumbPos = thumb.position();

      // Check if need to scroll to make current thumb visible
      if (self.opts.axis === "y" && (thumbPos.top < 0 || thumbPos.top > $list.height() - thumb.outerHeight())) {
        $list.stop().animate({
          scrollTop: $list.scrollTop() + thumbPos.top
        }, duration);
      } else if (self.opts.axis === "x" && (thumbPos.left < $grid.scrollLeft() || thumbPos.left > $grid.scrollLeft() + ($grid.width() - thumb.outerWidth()))) {
        $list.parent().stop().animate({
          scrollLeft: thumbPos.left
        }, duration);
      }
    },
    update: function update() {
      var that = this;
      that.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible);
      if (that.isVisible) {
        if (!that.$grid) {
          that.create();
        }
        that.instance.trigger("onThumbsShow");
        that.focus(0);
      } else if (that.$grid) {
        that.instance.trigger("onThumbsHide");
      }

      // Update content position
      that.instance.update();
    },
    hide: function hide() {
      this.isVisible = false;
      this.update();
    },
    show: function show() {
      this.isVisible = true;
      this.update();
    },
    toggle: function toggle() {
      this.isVisible = !this.isVisible;
      this.update();
    }
  });
  $(document).on({
    "onInit.fb": function onInitFb(e, instance) {
      var Thumbs;
      if (instance && !instance.Thumbs) {
        Thumbs = new FancyThumbs(instance);
        if (Thumbs.isActive && Thumbs.opts.autoStart === true) {
          Thumbs.show();
        }
      }
    },
    "beforeShow.fb": function beforeShowFb(e, instance, item, firstRun) {
      var Thumbs = instance && instance.Thumbs;
      if (Thumbs && Thumbs.isVisible) {
        Thumbs.focus(firstRun ? 0 : 250);
      }
    },
    "afterKeydown.fb": function afterKeydownFb(e, instance, current, keypress, keycode) {
      var Thumbs = instance && instance.Thumbs;

      // "G"
      if (Thumbs && Thumbs.isActive && keycode === 71) {
        keypress.preventDefault();
        Thumbs.toggle();
      }
    },
    "beforeClose.fb": function beforeCloseFb(e, instance) {
      var Thumbs = instance && instance.Thumbs;
      if (Thumbs && Thumbs.isVisible && Thumbs.opts.hideOnClose !== false) {
        Thumbs.$grid.hide();
      }
    }
  });
})(document, jQuery);
//// ==========================================================================
//
// Share
// Displays simple form for sharing current url
//
// ==========================================================================
(function (document, $) {
  "use strict";

  $.extend(true, $.fancybox.defaults, {
    btnTpl: {
      share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}">' + '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg>' + "</button>"
    },
    share: {
      url: function url(instance, item) {
        return (!instance.currentHash && !(item.type === "inline" || item.type === "html") ? item.origSrc || item.src : false) || window.location;
      },
      tpl: '<div class="fancybox-share">' + "<h1>{{SHARE}}</h1>" + "<p>" + '<a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}">' + '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg>' + "<span>Facebook</span>" + "</a>" + '<a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}">' + '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg>' + "<span>Twitter</span>" + "</a>" + '<a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}">' + '<svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg>' + "<span>Pinterest</span>" + "</a>" + "</p>" + '<p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p>' + "</div>"
    }
  });
  function escapeHtml(string) {
    var entityMap = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
      "/": "&#x2F;",
      "`": "&#x60;",
      "=": "&#x3D;"
    };
    return String(string).replace(/[&<>"'`=\/]/g, function (s) {
      return entityMap[s];
    });
  }
  $(document).on("click", "[data-fancybox-share]", function () {
    var instance = $.fancybox.getInstance(),
      current = instance.current || null,
      url,
      tpl;
    if (!current) {
      return;
    }
    if ($.type(current.opts.share.url) === "function") {
      url = current.opts.share.url.apply(current, [instance, current]);
    }
    tpl = current.opts.share.tpl.replace(/\{\{media\}\}/g, current.type === "image" ? encodeURIComponent(current.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(url)).replace(/\{\{url_raw\}\}/g, escapeHtml(url)).replace(/\{\{descr\}\}/g, instance.$caption ? encodeURIComponent(instance.$caption.text()) : "");
    $.fancybox.open({
      src: instance.translate(instance, tpl),
      type: "html",
      opts: {
        touch: false,
        animationEffect: false,
        afterLoad: function afterLoad(shareInstance, shareCurrent) {
          // Close self if parent instance is closing
          instance.$refs.container.one("beforeClose.fb", function () {
            shareInstance.close(null, 0);
          });

          // Opening links in a popup window
          shareCurrent.$content.find(".fancybox-share__button").click(function () {
            window.open(this.href, "Share", "width=550, height=450");
            return false;
          });
        },
        mobile: {
          autoFocus: false
        }
      }
    });
  });
})(document, jQuery);
// ==========================================================================
//
// Hash
// Enables linking to each modal
//
// ==========================================================================
(function (window, document, $) {
  "use strict";

  // Simple $.escapeSelector polyfill (for jQuery prior v3)
  if (!$.escapeSelector) {
    $.escapeSelector = function (sel) {
      var rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
      var fcssescape = function fcssescape(ch, asCodePoint) {
        if (asCodePoint) {
          // U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
          if (ch === "\0") {
            return "\uFFFD";
          }

          // Control characters and (dependent upon position) numbers get escaped as code points
          return ch.slice(0, -1) + "\\" + ch.charCodeAt(ch.length - 1).toString(16) + " ";
        }

        // Other potentially-special ASCII characters get backslash-escaped
        return "\\" + ch;
      };
      return (sel + "").replace(rcssescape, fcssescape);
    };
  }

  // Get info about gallery name and current index from url
  function parseUrl() {
    var hash = window.location.hash.substr(1),
      rez = hash.split("-"),
      index = rez.length > 1 && /^\+?\d+$/.test(rez[rez.length - 1]) ? parseInt(rez.pop(-1), 10) || 1 : 1,
      gallery = rez.join("-");
    return {
      hash: hash,
      /* Index is starting from 1 */
      index: index < 1 ? 1 : index,
      gallery: gallery
    };
  }

  // Trigger click evnt on links to open new fancyBox instance
  function triggerFromUrl(url) {
    if (url.gallery !== "") {
      // If we can find element matching 'data-fancybox' atribute,
      // then triggering click event should start fancyBox
      $("[data-fancybox='" + $.escapeSelector(url.gallery) + "']").eq(url.index - 1).focus().trigger("click.fb-start");
    }
  }

  // Get gallery name from current instance
  function getGalleryID(instance) {
    var opts, ret;
    if (!instance) {
      return false;
    }
    opts = instance.current ? instance.current.opts : instance.opts;
    ret = opts.hash || (opts.$orig ? opts.$orig.data("fancybox") || opts.$orig.data("fancybox-trigger") : "");
    return ret === "" ? false : ret;
  }

  // Start when DOM becomes ready
  $(function () {
    // Check if user has disabled this module
    if ($.fancybox.defaults.hash === false) {
      return;
    }

    // Update hash when opening/closing fancyBox
    $(document).on({
      "onInit.fb": function onInitFb(e, instance) {
        var url, gallery;
        if (instance.group[instance.currIndex].opts.hash === false) {
          return;
        }
        url = parseUrl();
        gallery = getGalleryID(instance);

        // Make sure gallery start index matches index from hash
        if (gallery && url.gallery && gallery == url.gallery) {
          instance.currIndex = url.index - 1;
        }
      },
      "beforeShow.fb": function beforeShowFb(e, instance, current, firstRun) {
        var gallery;
        if (!current || current.opts.hash === false) {
          return;
        }

        // Check if need to update window hash
        gallery = getGalleryID(instance);
        if (!gallery) {
          return;
        }

        // Variable containing last hash value set by fancyBox
        // It will be used to determine if fancyBox needs to close after hash change is detected
        instance.currentHash = gallery + (instance.group.length > 1 ? "-" + (current.index + 1) : "");

        // If current hash is the same (this instance most likely is opened by hashchange), then do nothing
        if (window.location.hash === "#" + instance.currentHash) {
          return;
        }
        if (firstRun && !instance.origHash) {
          instance.origHash = window.location.hash;
        }
        if (instance.hashTimer) {
          clearTimeout(instance.hashTimer);
        }

        // Update hash
        instance.hashTimer = setTimeout(function () {
          if ("replaceState" in window.history) {
            window.history[firstRun ? "pushState" : "replaceState"]({}, document.title, window.location.pathname + window.location.search + "#" + instance.currentHash);
            if (firstRun) {
              instance.hasCreatedHistory = true;
            }
          } else {
            window.location.hash = instance.currentHash;
          }
          instance.hashTimer = null;
        }, 300);
      },
      "beforeClose.fb": function beforeCloseFb(e, instance, current) {
        if (!current || current.opts.hash === false) {
          return;
        }
        clearTimeout(instance.hashTimer);

        // Goto previous history entry
        if (instance.currentHash && instance.hasCreatedHistory) {
          window.history.back();
        } else if (instance.currentHash) {
          if ("replaceState" in window.history) {
            window.history.replaceState({}, document.title, window.location.pathname + window.location.search + (instance.origHash || ""));
          } else {
            window.location.hash = instance.origHash;
          }
        }
        instance.currentHash = null;
      }
    });

    // Check if need to start/close after url has changed
    $(window).on("hashchange.fb", function () {
      var url = parseUrl(),
        fb = null;

      // Find last fancyBox instance that has "hash"
      $.each($(".fancybox-container").get().reverse(), function (index, value) {
        var tmp = $(value).data("FancyBox");
        if (tmp && tmp.currentHash) {
          fb = tmp;
          return false;
        }
      });
      if (fb) {
        // Now, compare hash values
        if (fb.currentHash !== url.gallery + "-" + url.index && !(url.index === 1 && fb.currentHash == url.gallery)) {
          fb.currentHash = null;
          fb.close();
        }
      } else if (url.gallery !== "") {
        triggerFromUrl(url);
      }
    });

    // Check current hash and trigger click event on matching element to start fancyBox, if needed
    setTimeout(function () {
      if (!$.fancybox.getInstance()) {
        triggerFromUrl(parseUrl());
      }
    }, 50);
  });
})(window, document, jQuery);
// ==========================================================================
//
// Wheel
// Basic mouse weheel support for gallery navigation
//
// ==========================================================================
(function (document, $) {
  "use strict";

  var prevTime = new Date().getTime();
  $(document).on({
    "onInit.fb": function onInitFb(e, instance, current) {
      instance.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function (e) {
        var current = instance.current,
          currTime = new Date().getTime();
        if (instance.group.length < 2 || current.opts.wheel === false || current.opts.wheel === "auto" && current.type !== "image") {
          return;
        }
        e.preventDefault();
        e.stopPropagation();
        if (current.$slide.hasClass("fancybox-animated")) {
          return;
        }
        e = e.originalEvent || e;
        if (currTime - prevTime < 250) {
          return;
        }
        prevTime = currTime;
        instance[(-e.deltaY || -e.deltaX || e.wheelDelta || -e.detail) < 0 ? "next" : "previous"]();
      });
    }
  });
})(document, jQuery);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/product/reviews.js":
/*!********************************************!*\
  !*** ./assets/js/theme/product/reviews.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/models/forms */ "./assets/js/theme/common/models/forms.js");



var _default = /*#__PURE__*/function () {
  function _default($reviewForm) {
    this.validator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_0__["default"])({
      submit: $reviewForm.find('input[type="submit"]')
    });
    this.$reviewsContent = $('#product-reviews');
    this.$collapsible = $('[data-collapsible]', this.$reviewsContent);
    this.initLinkBind();
    this.injectPaginationLink();
    this.collapseReviews();
  }

  /**
   * On initial page load, the user clicks on "(12 Reviews)" link
   * The browser jumps to the review page and should expand the reviews section
   */
  var _proto = _default.prototype;
  _proto.initLinkBind = function initLinkBind() {
    var _this = this;
    var $content = $('#productReviews-content', this.$reviewsContent);
    $('.productView-reviewLink').on('click', function () {
      $('.productView-reviewTabLink').trigger('click');
      if (!$content.hasClass('is-open')) {
        _this.$collapsible.trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_1__["CollapsibleEvents"].click);
      }
    });
  };
  _proto.collapseReviews = function collapseReviews() {
    // We're in paginating state, do not collapse
    if (window.location.hash && window.location.hash.indexOf('#product-reviews') === 0) {
      return;
    }

    // force collapse on page load
    this.$collapsible.trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_1__["CollapsibleEvents"].click);
  }

  /**
   * Inject ID into the pagination link
   */;
  _proto.injectPaginationLink = function injectPaginationLink() {
    var $nextLink = $('.pagination-item--next .pagination-link', this.$reviewsContent);
    var $prevLink = $('.pagination-item--previous .pagination-link', this.$reviewsContent);
    if ($nextLink.length) {
      $nextLink.attr('href', $nextLink.attr('href') + " #product-reviews");
    }
    if ($prevLink.length) {
      $prevLink.attr('href', $prevLink.attr('href') + " #product-reviews");
    }
  };
  _proto.registerValidation = function registerValidation(context) {
    this.context = context;
    this.validator.add([{
      selector: '[name="revrating"]',
      validate: 'presence',
      errorMessage: this.context.reviewRating
    }, {
      selector: '[name="revtitle"]',
      validate: 'presence',
      errorMessage: this.context.reviewSubject
    }, {
      selector: '[name="revtext"]',
      validate: 'presence',
      errorMessage: this.context.reviewComment
    }, {
      selector: '.writeReview-form [name="email"]',
      validate: function validate(cb, val) {
        var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_2__["default"].email(val);
        cb(result);
      },
      errorMessage: this.context.reviewEmail
    }]);
    return this.validator;
  };
  _proto.validate = function validate() {
    return this.validator.performCheck();
  };
  return _default;
}();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/product/video-gallery.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/product/video-gallery.js ***!
  \**************************************************/
/*! exports provided: VideoGallery, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoGallery", function() { return VideoGallery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return videoGallery; });
var VideoGallery = /*#__PURE__*/function () {
  function VideoGallery($element) {
    this.$player = $element.find('[data-video-player]');
    this.$videos = $element.find('[data-video-item]');
    this.currentVideo = {};
    this.bindEvents();
  }
  var _proto = VideoGallery.prototype;
  _proto.selectNewVideo = function selectNewVideo(e) {
    e.preventDefault();
    var $target = $(e.currentTarget);
    this.currentVideo = {
      id: $target.data('videoId'),
      $selectedThumb: $target
    };
    this.setMainVideo();
    this.setActiveThumb();
  };
  _proto.setMainVideo = function setMainVideo() {
    this.$player.attr('src', "//www.youtube.com/embed/" + this.currentVideo.id);
  };
  _proto.setActiveThumb = function setActiveThumb() {
    this.$videos.removeClass('is-active');
    this.currentVideo.$selectedThumb.addClass('is-active');
  };
  _proto.bindEvents = function bindEvents() {
    this.$videos.on('click', this.selectNewVideo.bind(this));
  };
  return VideoGallery;
}();
function videoGallery() {
  var pluginKey = 'video-gallery';
  var $videoGallery = $("[data-" + pluginKey + "]");
  $videoGallery.each(function (index, element) {
    var $el = $(element);
    var isInitialized = $el.data(pluginKey) instanceof VideoGallery;
    if (isInitialized) {
      return;
    }
    $el.data(pluginKey, new VideoGallery($el));
  });
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/ysw/components/sticky-product.js":
/*!**********************************************************!*\
  !*** ./assets/js/theme/ysw/components/sticky-product.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return YswStickyProductFactory; });
var YswStickyProduct = /*#__PURE__*/function () {
  function YswStickyProduct(context) {
    this.context = context;
    this.productView = document.getElementById('product-view');
    this.footer = document.querySelector('.site-footer');
    this.template = document.getElementById('sticky-product-template');
    this.stickyProduct = null;
    this.product = {
      btnInc: document.querySelector('.product-options [data-action="inc"]'),
      btnDec: document.querySelector('.product-options [data-action="dec"]'),
      input: document.getElementById('qty[]'),
      action: document.getElementById('form-action-addToCart')
    };
    this.stickyProductInputs = {
      btnInc: null,
      btnDec: null,
      input: null,
      action: null
    };
    this.init();
  }
  var _proto = YswStickyProduct.prototype;
  _proto.init = function init() {
    var _this = this;
    var flag = false;
    window.addEventListener('scroll', function () {
      if (flag) return;
      _this.insertTemplate();
      _this.getStickyProduct();
      _this.setObservers();
      _this.setEvents(_this.product, _this.stickyProductInputs);
      _this.setEvents(_this.stickyProductInputs, _this.product, 'sticky');
      flag = true;
    });
  };
  _proto.insertTemplate = function insertTemplate() {
    var clone = this.template.content.cloneNode(true);
    document.body.appendChild(clone);
  };
  _proto.getStickyProduct = function getStickyProduct() {
    this.stickyProduct = document.getElementById('sticky-product');
    this.stickyProductInputs.btnInc = this.stickyProduct.querySelector('[data-action="inc"]');
    this.stickyProductInputs.btnDec = this.stickyProduct.querySelector('[data-action="dec"]');
    this.stickyProductInputs.input = this.stickyProduct.querySelector('#stycky-product-quantity');
    this.stickyProductInputs.action = this.stickyProduct.querySelector('.form-action input');
  };
  _proto.obserFunc = function obserFunc(entry, item, dataName, dataNames) {
    if (dataNames === void 0) {
      dataNames = [];
    }
    if (entry.isIntersecting) {
      item.classList.remove('is-active');
      item.setAttribute("data-" + dataName, true);
      return;
    }
    var isData = dataNames.map(function (data) {
      return item.dataset[data] !== 'false';
    });
    if (isData.includes(false)) {
      item.classList.add('is-active');
    }
    item.setAttribute("data-" + dataName, false);
  };
  _proto.setObservers = function setObservers() {
    var _this2 = this;
    var productViewObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        return _this2.obserFunc(entry, _this2.stickyProduct, 'observer-add-to-cart', ['observerAddToCart', 'observerFooter']);
      });
    }, {
      threshold: [0, 0.50, 1],
      rootMargin: '-420px 0px -200px 0px'
    });
    var footerObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        return _this2.obserFunc(entry, _this2.stickyProduct, 'observer-footer', ['observerFooter', 'observerAddToCart']);
      });
    }, {
      threshold: [0.30, 1]
    });
    productViewObserver.observe(this.productView);
    footerObserver.observe(this.footer);
  };
  _proto.setEvents = function setEvents(obj, target, type) {
    if (type === void 0) {
      type = 'normal';
    }
    obj.input.addEventListener('change', function () {
      target.input.value = obj.input.value;
    });
    obj.input.addEventListener('input', function () {
      target.input.value = obj.input.value;
    });
    obj.btnInc.addEventListener('click', function () {
      if (type !== 'sticky') {
        target.input.value = Number(obj.input.value) + 1;
        return;
      }
      target.btnInc.click();
      obj.input.value = target.input.value;
    });
    obj.btnDec.addEventListener('click', function () {
      var _target$input$value;
      if (type !== 'sticky') {
        target.input.value = Number(obj.input.value) - 1 > 0 ? Number(obj.input.value) - 1 : 1;
        return;
      }
      target.btnDec.click();
      obj.input.value = (_target$input$value = target.input.value) != null ? _target$input$value : 1;
    });
    if (type !== 'sticky') return;
    obj.action.addEventListener('click', function () {
      target.action.click();
    });
  };
  return YswStickyProduct;
}();
function YswStickyProductFactory(context) {
  if (this instanceof YswStickyProduct) {
    this.context = context;
  } else {
    return new YswStickyProduct(context);
  }
}

/***/ }),

/***/ "./assets/js/theme/ysw/modules/product.js":
/*!************************************************!*\
  !*** ./assets/js/theme/ysw/modules/product.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return YswProductFactory; });
/* harmony import */ var _components_sticky_product__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../components/sticky-product */ "./assets/js/theme/ysw/components/sticky-product.js");


/**
 * Add product functionalities to this class as methods.
 *
 * @since 1.0.0
 * @author YourStoreWizards
 */
var YswProduct = /*#__PURE__*/function () {
  function YswProduct(context) {
    this.context = context;
    this.init();
  }
  var _proto = YswProduct.prototype;
  _proto.init = function init() {
    Object(_components_sticky_product__WEBPACK_IMPORTED_MODULE_0__["default"])();
    this.moveProductData();
    this.acordeon();
  };
  _proto.moveProductData = function moveProductData() {
    var productView = document.getElementById('product-view');
    var productData = document.querySelector('.product-data');
    var productDataDesktop = document.getElementById('product-data-desktop');
    window.addEventListener('resize', function () {
      if (window.innerWidth < 801) {
        productView.insertAdjacentElement('afterend', productData);
        return;
      }
      productDataDesktop.appendChild(productData);
    });
    if (window.innerWidth < 801) {
      productView.insertAdjacentElement('afterend', productData);
      return;
    }
    productDataDesktop.appendChild(productData);
  };
  _proto.acordeon = function acordeon() {
    var accordions = document.querySelectorAll('.ysw-c-accordion');
    if (!accordions.length) return;
    accordions.forEach(function (accordion) {
      var accordionTitle = accordion.querySelector('.ysw-c-accordion__title');
      accordionTitle.addEventListener('click', function () {
        if (accordion.classList.contains('ysw-c-accordion--active')) {
          accordion.classList.remove('ysw-c-accordion--active');
          return;
        }
        accordionTitle.classList.toggle('ysw-c-accordion__title--active');
      });
    });
  };
  return YswProduct;
}();
function YswProductFactory(context) {
  if (this instanceof YswProduct) {
    this.context = context;
  } else {
    return new YswProduct(context);
  }
}

/***/ }),

/***/ "./node_modules/lodash/_apply.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/_apply.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ "./node_modules/lodash/_baseRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_baseRest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var identity = __webpack_require__(/*! ./identity */ "./node_modules/lodash/identity.js"),
    overRest = __webpack_require__(/*! ./_overRest */ "./node_modules/lodash/_overRest.js"),
    setToString = __webpack_require__(/*! ./_setToString */ "./node_modules/lodash/_setToString.js");

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),

/***/ "./node_modules/lodash/_createAssigner.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_createAssigner.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/lodash/_baseRest.js"),
    isIterateeCall = __webpack_require__(/*! ./_isIterateeCall */ "./node_modules/lodash/_isIterateeCall.js");

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),

/***/ "./node_modules/lodash/_isIterateeCall.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_isIterateeCall.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "./node_modules/lodash/_overRest.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/_overRest.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(/*! ./_apply */ "./node_modules/lodash/_apply.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ "./node_modules/lodash/_setToString.js":
/*!*********************************************!*\
  !*** ./node_modules/lodash/_setToString.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/assignIn.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/assignIn.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var copyObject = __webpack_require__(/*! ./_copyObject */ "./node_modules/lodash/_copyObject.js"),
    createAssigner = __webpack_require__(/*! ./_createAssigner */ "./node_modules/lodash/_createAssigner.js"),
    keysIn = __webpack_require__(/*! ./keysIn */ "./node_modules/lodash/keysIn.js");

/**
 * This method is like `_.assign` except that it iterates over own and
 * inherited source properties.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @alias extend
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @see _.assign
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * function Bar() {
 *   this.c = 3;
 * }
 *
 * Foo.prototype.b = 2;
 * Bar.prototype.d = 4;
 *
 * _.assignIn({ 'a': 0 }, new Foo, new Bar);
 * // => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
 */
var assignIn = createAssigner(function(object, source) {
  copyObject(source, keysIn(source), object);
});

module.exports = assignIn;


/***/ }),

/***/ "./node_modules/lodash/extend.js":
/*!***************************************!*\
  !*** ./node_modules/lodash/extend.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./assignIn */ "./node_modules/lodash/assignIn.js");


/***/ }),

/***/ "./node_modules/lodash/identity.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/identity.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvcHJvZHVjdC9qcXVlcnktZmFuY3lib3guanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL3Byb2R1Y3QvcmV2aWV3cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvcHJvZHVjdC92aWRlby1nYWxsZXJ5LmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS95c3cvY29tcG9uZW50cy9zdGlja3ktcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUveXN3L21vZHVsZXMvcHJvZHVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19hcHBseS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlUmVzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jcmVhdGVBc3NpZ25lci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19pc0l0ZXJhdGVlQ2FsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19vdmVyUmVzdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19zZXRUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2Fzc2lnbkluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvZXh0ZW5kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvaWRlbnRpdHkuanMiXSwibmFtZXMiOlsiV1JJVEVfUkVWSUVXIiwibW9kYWxUeXBlcyIsIlByb2R1Y3QiLCJfUGFnZU1hbmFnZXIiLCJjb250ZXh0IiwiX3RoaXMiLCJjYWxsIiwidXJsIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwiJHJldmlld0xpbmsiLCIkIiwiJGJ1bGtQcmljaW5nTGluayIsInJldmlld01vZGFsIiwibW9kYWxGYWN0b3J5IiwiX2luaGVyaXRzTG9vc2UiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJvblJlYWR5IiwiX3RoaXMyIiwiZG9jdW1lbnQiLCJvbiIsImluZGV4T2YiLCJoaXN0b3J5IiwicmVwbGFjZVN0YXRlIiwidGl0bGUiLCJwYXRobmFtZSIsIl90aGlzMiRyZXZpZXdNb2RhbCIsInNldHVwRm9jdXNhYmxlRWxlbWVudHMiLCJ2YWxpZGF0b3IiLCJjb2xsYXBzaWJsZUZhY3RvcnkiLCJwcm9kdWN0RGV0YWlscyIsIlByb2R1Y3REZXRhaWxzIiwiQkNEYXRhIiwicHJvZHVjdF9hdHRyaWJ1dGVzIiwic2V0UHJvZHVjdFZhcmlhbnQiLCJ2aWRlb0dhbGxlcnkiLCIkcmV2aWV3Rm9ybSIsImNsYXNzaWZ5Rm9ybSIsInJldmlldyIsIlJldmlldyIsInJlZ2lzdGVyVmFsaWRhdGlvbiIsImFyaWFEZXNjcmliZVJldmlld0lucHV0cyIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsInByb2R1Y3RSZXZpZXdIYW5kbGVyIiwiYnVsa1ByaWNpbmdIYW5kbGVyIiwiWXN3UHJvZHVjdEZhY3RvcnkiLCIkZm9ybSIsImZpbmQiLCJlYWNoIiwiXyIsImlucHV0IiwiJGlucHV0IiwibXNnU3BhbklkIiwiYXR0ciIsInNpYmxpbmdzIiwidHJpZ2dlciIsIlBhZ2VNYW5hZ2VyIiwidW5kZWZpbmVkIiwiY29uc29sZSIsImluZm8iLCJzdHVmZiIsImZuIiwiZmFuY3lib3giLCJkZWZhdWx0cyIsImNsb3NlRXhpc3RpbmciLCJsb29wIiwiZ3V0dGVyIiwia2V5Ym9hcmQiLCJwcmV2ZW50Q2FwdGlvbk92ZXJsYXAiLCJhcnJvd3MiLCJpbmZvYmFyIiwic21hbGxCdG4iLCJ0b29sYmFyIiwiYnV0dG9ucyIsImlkbGVUaW1lIiwicHJvdGVjdCIsIm1vZGFsIiwiaW1hZ2UiLCJwcmVsb2FkIiwiYWpheCIsInNldHRpbmdzIiwiZGF0YSIsImlmcmFtZSIsInRwbCIsImNzcyIsInNjcm9sbGluZyIsInZpZGVvIiwiZm9ybWF0IiwiYXV0b1N0YXJ0IiwiZGVmYXVsdFR5cGUiLCJhbmltYXRpb25FZmZlY3QiLCJhbmltYXRpb25EdXJhdGlvbiIsInpvb21PcGFjaXR5IiwidHJhbnNpdGlvbkVmZmVjdCIsInRyYW5zaXRpb25EdXJhdGlvbiIsInNsaWRlQ2xhc3MiLCJiYXNlQ2xhc3MiLCJiYXNlVHBsIiwic3Bpbm5lclRwbCIsImVycm9yVHBsIiwiYnRuVHBsIiwiZG93bmxvYWQiLCJ6b29tIiwiY2xvc2UiLCJhcnJvd0xlZnQiLCJhcnJvd1JpZ2h0IiwicGFyZW50RWwiLCJoaWRlU2Nyb2xsYmFyIiwiYXV0b0ZvY3VzIiwiYmFja0ZvY3VzIiwidHJhcEZvY3VzIiwiZnVsbFNjcmVlbiIsInRvdWNoIiwidmVydGljYWwiLCJtb21lbnR1bSIsImhhc2giLCJtZWRpYSIsInNsaWRlU2hvdyIsInNwZWVkIiwidGh1bWJzIiwiaGlkZU9uQ2xvc2UiLCJheGlzIiwid2hlZWwiLCJvbkluaXQiLCJub29wIiwiYmVmb3JlTG9hZCIsImFmdGVyTG9hZCIsImJlZm9yZVNob3ciLCJhZnRlclNob3ciLCJiZWZvcmVDbG9zZSIsImFmdGVyQ2xvc2UiLCJvbkFjdGl2YXRlIiwib25EZWFjdGl2YXRlIiwiY2xpY2tDb250ZW50IiwiY3VycmVudCIsImV2ZW50IiwidHlwZSIsImNsaWNrU2xpZGUiLCJjbGlja091dHNpZGUiLCJkYmxjbGlja0NvbnRlbnQiLCJkYmxjbGlja1NsaWRlIiwiZGJsY2xpY2tPdXRzaWRlIiwibW9iaWxlIiwibGFuZyIsImkxOG4iLCJlbiIsIkNMT1NFIiwiTkVYVCIsIlBSRVYiLCJFUlJPUiIsIlBMQVlfU1RBUlQiLCJQTEFZX1NUT1AiLCJGVUxMX1NDUkVFTiIsIlRIVU1CUyIsIkRPV05MT0FEIiwiU0hBUkUiLCJaT09NIiwiZGUiLCIkVyIsIiREIiwiY2FsbGVkIiwiaXNRdWVyeSIsIm9iaiIsImhhc093blByb3BlcnR5IiwicmVxdWVzdEFGcmFtZSIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm1velJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjYWxsYmFjayIsInNldFRpbWVvdXQiLCJjYW5jZWxBRnJhbWUiLCJjYW5jZWxBbmltYXRpb25GcmFtZSIsIndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lIiwibW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJvQ2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJpZCIsImNsZWFyVGltZW91dCIsInRyYW5zaXRpb25FbmQiLCJlbCIsImNyZWF0ZUVsZW1lbnQiLCJ0IiwidHJhbnNpdGlvbnMiLCJ0cmFuc2l0aW9uIiwiT1RyYW5zaXRpb24iLCJNb3pUcmFuc2l0aW9uIiwiV2Via2l0VHJhbnNpdGlvbiIsInN0eWxlIiwiZm9yY2VSZWRyYXciLCIkZWwiLCJsZW5ndGgiLCJvZmZzZXRIZWlnaHQiLCJtZXJnZU9wdHMiLCJvcHRzMSIsIm9wdHMyIiwicmV6IiwiZXh0ZW5kIiwia2V5IiwidmFsdWUiLCJpc0FycmF5IiwiaW5WaWV3cG9ydCIsImVsZW0iLCJlbGVtQ2VudGVyIiwib3duZXJEb2N1bWVudCIsIngiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJsZWZ0Iiwib2Zmc2V0V2lkdGgiLCJ5IiwidG9wIiwiZWxlbWVudEZyb21Qb2ludCIsIkZhbmN5Qm94IiwiY29udGVudCIsIm9wdHMiLCJpbmRleCIsInNlbGYiLCJpc1BsYWluT2JqZWN0IiwiaXNNb2JpbGUiLCJjdXJySW5kZXgiLCJwYXJzZUludCIsInByZXZJbmRleCIsInByZXZQb3MiLCJjdXJyUG9zIiwiZmlyc3RSdW4iLCJncm91cCIsInNsaWRlcyIsImFkZENvbnRlbnQiLCJpbml0IiwiZmlyc3RJdGVtIiwiZmlyc3RJdGVtT3B0cyIsIiRjb250YWluZXIiLCJidXR0b25TdHIiLCJhZGRDbGFzcyIsImdldEluc3RhbmNlIiwiYm9keSIsInNjcm9sbEhlaWdodCIsImlubmVySGVpZ2h0IiwiYXBwZW5kIiwiaW5uZXJXaWR0aCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudFdpZHRoIiwidHJhbnNsYXRlIiwicmVwbGFjZSIsImFwcGVuZFRvIiwiJHJlZnMiLCJjb250YWluZXIiLCJmb3JFYWNoIiwiaXRlbSIsImFjdGl2YXRlIiwianVtcFRvIiwic3RyIiwiYXJyIiwibWF0Y2giLCJuIiwiaXRlbXMiLCJtYWtlQXJyYXkiLCJpIiwiJGl0ZW0iLCJmb3VuZCIsInNyYyIsInNyY1BhcnRzIiwib3B0aW9ucyIsIiRvcmlnIiwiY29udGVudFR5cGUiLCJjaGFyQXQiLCJpbkFycmF5IiwiJHRodW1iIiwiJHRyaWdnZXIiLCJ0aHVtYiIsImNhcHRpb24iLCJhcHBseSIsInNwbGl0Iiwic2hpZnQiLCJmaWx0ZXIiLCJwdXNoIiwiT2JqZWN0Iiwia2V5cyIsInVwZGF0ZUNvbnRyb2xzIiwiVGh1bWJzIiwiaXNBY3RpdmUiLCJjcmVhdGUiLCJmb2N1cyIsImFkZEV2ZW50cyIsInJlbW92ZUV2ZW50cyIsImUiLCJzdG9wUHJvcGFnYXRpb24iLCJwcmV2ZW50RGVmYXVsdCIsInByZXZpb3VzIiwibmV4dCIsImlzU2NhbGVkRG93biIsIm9yaWdpbmFsRXZlbnQiLCJyZXF1ZXN0SWQiLCJ1cGRhdGUiLCJzdGFnZSIsImhpZGUiLCJzaG93IiwiaW5zdGFuY2UiLCJrZXljb2RlIiwia2V5Q29kZSIsIndoaWNoIiwiY3RybEtleSIsImFsdEtleSIsInNoaWZ0S2V5IiwidGFyZ2V0IiwiaXMiLCJpZGxlU2Vjb25kc0NvdW50ZXIiLCJpc0lkbGUiLCJzaG93Q29udHJvbHMiLCJpZGxlSW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsImlzRHJhZ2dpbmciLCJoaWRlQ29udHJvbHMiLCJvZmYiLCJjbGVhckludGVydmFsIiwiZHVyYXRpb24iLCJwb3MiLCJncm91cExlbiIsImlzTW92ZWQiLCJzbGlkZVBvcyIsInN0YWdlUG9zIiwicHJvcCIsImRpZmYiLCJpc0Nsb3NpbmciLCJpc0FuaW1hdGluZyIsImNyZWF0ZVNsaWRlIiwiZm9yY2VkRHVyYXRpb24iLCJpc051bWVyaWMiLCIkc2xpZGUiLCJsb2FkU2xpZGUiLCJnZXRUcmFuc2xhdGUiLCJzbGlkZSIsInN0b3AiLCJpc0NvbXBsZXRlIiwicmVtb3ZlQ2xhc3MiLCJ3aWR0aCIsImNsYXNzTmFtZSIsImpvaW4iLCJsZWZ0UG9zIiwic2V0VHJhbnNsYXRlIiwiYW5pbWF0ZSIsInRyYW5zZm9ybSIsIm9wYWNpdHkiLCJjb21wbGV0ZSIsImlzTG9hZGVkIiwicmV2ZWFsQ29udGVudCIsInVwZGF0ZVNsaWRlIiwic2NhbGVUb0FjdHVhbCIsIiRjb250ZW50IiwiY2FudmFzV2lkdGgiLCJjYW52YXNIZWlnaHQiLCJoZWlnaHQiLCJuZXdJbWdXaWR0aCIsIm5ld0ltZ0hlaWdodCIsImltZ1BvcyIsInBvc1giLCJwb3NZIiwic2NhbGVYIiwic2NhbGVZIiwiaGFzRXJyb3IiLCJ1cGRhdGVDdXJzb3IiLCJTbGlkZVNob3ciLCJzY2FsZVRvRml0IiwiZW5kIiwiZ2V0Rml0UG9zIiwibWF4V2lkdGgiLCJtYXhIZWlnaHQiLCJtaW5SYXRpbyIsImFzcGVjdFJhdGlvIiwicGFyc2VGbG9hdCIsIk1hdGgiLCJtaW4iLCJmbG9vciIsInJhdGlvIiwiYWRqdXN0Q2FwdGlvbiIsImFkanVzdExheW91dCIsImFkZCIsIm5hdmlnYXRpb24iLCJ0b2dnbGVDbGFzcyIsImdldCIsImNsaWVudEhlaWdodCIsImNlbnRlclNsaWRlIiwicGFyZW50IiwiY2hpbGRyZW4iLCJoYXNDbGFzcyIsImFicyIsIm5leHRXaWR0aCIsIm5leHRIZWlnaHQiLCJjYW5QYW4iLCJpc1pvb21hYmxlIiwiR3Vlc3R1cmVzIiwiaXNGdW5jdGlvbiIsImZpdFBvcyIsImFqYXhMb2FkIiwiaXNMb2FkaW5nIiwic2V0SW1hZ2UiLCJzZXRJZnJhbWUiLCJzZXRDb250ZW50IiwidmlkZW9Gb3JtYXQiLCJzZXRFcnJvciIsInNob3dMb2FkaW5nIiwic3VjY2VzcyIsInRleHRTdGF0dXMiLCJlcnJvciIsImpxWEhSIiwib25lIiwiYWJvcnQiLCJnaG9zdCIsIiRpbWciLCIkaW1hZ2UiLCJjaGVja1NyY3NldCIsIm9uZXJyb3IiLCJyZW1vdmUiLCIkZ2hvc3QiLCJvbmxvYWQiLCJzZXRCaWdJbWFnZSIsInNyY3NldCIsInRlbXAiLCJweFJhdGlvIiwid2luZG93V2lkdGgiLCJkZXZpY2VQaXhlbFJhdGlvIiwibWFwIiwicmV0IiwidHJpbSIsInN1YnN0cmluZyIsInBvc3RmaXgiLCJzb3J0IiwiYSIsImIiLCJqIiwiaW1nIiwic2l6ZXMiLCJyZXNvbHZlSW1hZ2VTbGlkZVNpemUiLCJuYXR1cmFsV2lkdGgiLCJuYXR1cmFsSGVpZ2h0Iiwicm91bmQiLCJtYXgiLCJoaWRlTG9hZGluZyIsInJlYWR5U3RhdGUiLCJpbWdXaWR0aCIsImltZ0hlaWdodCIsIiRpZnJhbWUiLCJEYXRlIiwiZ2V0VGltZSIsImlzUmVhZHkiLCJmcmFtZVdpZHRoIiwiZnJhbWVIZWlnaHQiLCIkY29udGVudHMiLCIkYm9keSIsImNvbnRlbnRzIiwiaWdub3JlIiwiY2VpbCIsIm91dGVyV2lkdGgiLCJvdXRlckhlaWdodCIsInVuYmluZCIsImVtcHR5IiwiaXNSZXZlYWxlZCIsInBhcmVudHMiLCIkcGxhY2Vob2xkZXIiLCJpbnNlcnRBZnRlciIsImh0bWwiLCJhZnRlciIsIiRzbWFsbEJ0biIsIndyYXAiLCJmaXJzdCIsIndyYXBJbm5lciIsIiRzcGlubmVyIiwiZmFkZUluIiwiYnV0dG9uIiwicHJldmVudE92ZXJsYXAiLCIkY2FwdGlvbiIsIiRjbG9uZSIsImNhcHRpb25IIiwiY2xvbmUiLCJlcSIsIm1hcmdpbkJvdHRvbSIsImlubGluZVBhZGRpbmciLCJhY3R1YWxQYWRkaW5nIiwiZGlzYWJsZUxheW91dEZpeCIsInN0YXJ0IiwiZWZmZWN0IiwiZWZmZWN0Q2xhc3NOYW1lIiwiZ2V0VGh1bWJQb3MiLCJ0aHVtYlBvcyIsImJ0dyIsImJydyIsImJidyIsImJsdyIsIkRvY3VtZW50IiwiZXhpdEZ1bGxzY3JlZW4iLCJ3ZWJraXRFeGl0RnVsbHNjcmVlbiIsInNjcm9sbFRvcCIsInNjcm9sbExlZnQiLCJwcmV2IiwiZm9jdXNhYmxlU3RyIiwiZm9jdXNhYmxlSXRlbXMiLCJmb2N1c2VkSXRlbUluZGV4IiwiYWN0aXZlRWxlbWVudCIsImlzVmlzaWJsZSIsImQiLCJkb21SZWN0IiwiZG9uZSIsImNsZWFuVXAiLCIkZm9jdXMiLCJzY3JvbGxYIiwic2Nyb2xsWSIsIm5hbWUiLCJhcmdzIiwiQXJyYXkiLCJzbGljZSIsImFyZ3VtZW50cyIsInVuc2hpZnQiLCJoYXNIaWRkZW5Db250cm9scyIsImFuZENhcHRpb24iLCJ0b2dnbGVDb250cm9scyIsInZlcnNpb24iLCJjb21tYW5kIiwib3BlbiIsImFsbCIsImRlc3Ryb3kiLCJ0ZXN0IiwibmF2aWdhdG9yIiwidXNlckFnZW50IiwidXNlM2QiLCJkaXYiLCJnZXRDb21wdXRlZFN0eWxlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImRvY3VtZW50TW9kZSIsInByb3BzIiwicG9zaXRpb24iLCJ0byIsImxlYXZlQW5pbWF0aW9uTmFtZSIsImZyb20iLCJwcm9wZXJ0eU5hbWUiLCJjYWxsQ2FsbGJhY2siLCJfcnVuIiwiJHRhcmdldCIsImlzRGVmYXVsdFByZXZlbnRlZCIsImN1cnJlbnRUYXJnZXQiLCJzZWxlY3RvciIsImZvY3VzU3RyIiwiJHByZXNzZWQiLCJqUXVlcnkiLCJ5b3V0dWJlIiwibWF0Y2hlciIsInBhcmFtcyIsImF1dG9wbGF5IiwiYXV0b2hpZGUiLCJmcyIsInJlbCIsImhkIiwid21vZGUiLCJlbmFibGVqc2FwaSIsImh0bWw1IiwicGFyYW1QbGFjZSIsInZpbWVvIiwic2hvd190aXRsZSIsInNob3dfYnlsaW5lIiwic2hvd19wb3J0cmFpdCIsImZ1bGxzY3JlZW4iLCJpbnN0YWdyYW0iLCJnbWFwX3BsYWNlIiwiZ21hcF9zZWFyY2giLCJwYXJhbSIsInVybFBhcmFtcyIsInBhcmFtT2JqIiwicHJvdmlkZXIiLCJwcm92aWRlck5hbWUiLCJwcm92aWRlck9wdHMiLCJtIiwicCIsImRlY29kZVVSSUNvbXBvbmVudCIsInAxIiwicyIsIm9yaWdTcmMiLCJjb250ZW50U291cmNlIiwiVmlkZW9BUElMb2FkZXIiLCJjbGFzcyIsImxvYWRpbmciLCJsb2FkZWQiLCJsb2FkIiwidmVuZG9yIiwic2NyaXB0Iiwib25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkiLCJhcHBlbmRDaGlsZCIsInBsYXllciIsIllUIiwiUGxheWVyIiwiZXZlbnRzIiwib25TdGF0ZUNoYW5nZSIsIlZpbWVvIiwiYWZ0ZXJTaG93RmIiLCJnZXRQb2ludGVyWFkiLCJyZXN1bHQiLCJ0b3VjaGVzIiwiY2hhbmdlZFRvdWNoZXMiLCJwYWdlWCIsInBhZ2VZIiwiY2xpZW50WCIsImNsaWVudFkiLCJkaXN0YW5jZSIsInBvaW50MiIsInBvaW50MSIsIndoYXQiLCJzcXJ0IiwicG93IiwiaXNDbGlja2FibGUiLCJvbmNsaWNrIiwiYXR0cyIsImF0dHJpYnV0ZXMiLCJub2RlTmFtZSIsInN1YnN0ciIsImhhc1Njcm9sbGJhcnMiLCJvdmVyZmxvd1kiLCJvdmVyZmxvd1giLCJob3Jpem9udGFsIiwic2Nyb2xsV2lkdGgiLCJpc1Njcm9sbGFibGUiLCIkYmciLCJiZyIsIiRzdGFnZSIsInByb3h5IiwidGFwcGVkIiwib250b3VjaHN0YXJ0IiwiaXNUb3VjaERldmljZSIsIm9mZnNldCIsInJlYWxQb2ludHMiLCJzdGFydFBvaW50cyIsInN0YXJ0RXZlbnQiLCJjYW5UYXAiLCJpc1Bhbm5pbmciLCJpc1N3aXBpbmciLCJpc1pvb21pbmciLCJpc1Njcm9sbGluZyIsInN0YXJ0VGltZSIsImRpc3RhbmNlWCIsImRpc3RhbmNlWSIsImNvbnRlbnRMYXN0UG9zIiwiY29udGVudFN0YXJ0UG9zIiwic2xpZGVyU3RhcnRQb3MiLCJhZGRFdmVudExpc3RlbmVyIiwib25zY3JvbGwiLCJjZW50ZXJQb2ludFN0YXJ0WCIsImNlbnRlclBvaW50U3RhcnRZIiwicGVyY2VudGFnZU9mSW1hZ2VBdFBpbmNoUG9pbnRYIiwicGVyY2VudGFnZU9mSW1hZ2VBdFBpbmNoUG9pbnRZIiwic3RhcnREaXN0YW5jZUJldHdlZW5GaW5nZXJzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIm9udG91Y2htb3ZlIiwib250b3VjaGVuZCIsIm5ld1BvaW50cyIsIm9uU3dpcGUiLCJvblBhbiIsIm9uWm9vbSIsInN3aXBpbmciLCJhbmdsZSIsImF0YW4yIiwiUEkiLCJzbGlkZXJMYXN0UG9zIiwibGltaXRNb3ZlbWVudCIsImN1cnJlbnRPZmZzZXRYIiwiY3VycmVudE9mZnNldFkiLCJjdXJyZW50V2lkdGgiLCJjdXJyZW50SGVpZ2h0IiwibWluVHJhbnNsYXRlWCIsIm1pblRyYW5zbGF0ZVkiLCJtYXhUcmFuc2xhdGVYIiwibWF4VHJhbnNsYXRlWSIsIm5ld09mZnNldFgiLCJuZXdPZmZzZXRZIiwibGltaXRQb3NpdGlvbiIsIm5ld1dpZHRoIiwibmV3SGVpZ2h0IiwiZW5kRGlzdGFuY2VCZXR3ZWVuRmluZ2VycyIsInBpbmNoUmF0aW8iLCJ0cmFuc2xhdGVGcm9tWm9vbWluZ1giLCJ0cmFuc2xhdGVGcm9tWm9vbWluZ1kiLCJjZW50ZXJQb2ludEVuZFgiLCJjZW50ZXJQb2ludEVuZFkiLCJ0cmFuc2xhdGVGcm9tVHJhbnNsYXRpbmdYIiwidHJhbnNsYXRlRnJvbVRyYW5zbGF0aW5nWSIsIm5ld1BvcyIsInBhbm5pbmciLCJ6b29taW5nIiwiZW5kUG9pbnRzIiwiZE1zIiwib25UYXAiLCJ2ZWxvY2l0eVgiLCJ2ZWxvY2l0eVkiLCJlbmRQYW5uaW5nIiwiZW5kWm9vbWluZyIsImVuZFN3aXBpbmciLCJsZW4iLCJjYW5BZHZhbmNlIiwic3BlZWRYIiwicmVzZXQiLCJ0YXBYIiwidGFwWSIsIndoZXJlIiwicHJvY2VzcyIsInByZWZpeCIsImFjdGlvbiIsImFkZEJhY2siLCJwcm9ncmVzcyIsInRpbWVyIiwiJGJ1dHRvbiIsInRvZ2dsZSIsIiRwcm9ncmVzcyIsImlubmVyIiwic2V0IiwiZm9yY2UiLCJjbGVhciIsInJlbW92ZUF0dHIiLCJvbkluaXRGYiIsImJlZm9yZVNob3dGYiIsImFmdGVyS2V5ZG93bkZiIiwia2V5cHJlc3MiLCJiZWZvcmVDbG9zZUZiX29uRGVhY3RpdmF0ZUZiIiwiaGlkZGVuIiwiZm5NYXAiLCJ2YWwiLCJGdWxsU2NyZWVuIiwicmVxdWVzdCIsInJlcXVlc3RGdWxsc2NyZWVuIiwiQUxMT1dfS0VZQk9BUkRfSU5QVVQiLCJleGl0IiwiaXNGdWxsc2NyZWVuIiwiQm9vbGVhbiIsImZ1bGxzY3JlZW5FbGVtZW50IiwiZW5hYmxlZCIsImZ1bGxzY3JlZW5FbmFibGVkIiwiZnVsbHNjcmVlbmNoYW5nZSIsImJlZm9yZUNsb3NlRmIiLCJDTEFTUyIsIkNMQVNTX0FDVElWRSIsIkZhbmN5VGh1bWJzIiwiJGdyaWQiLCIkbGlzdCIsImxpc3QiLCJpbm5lckhUTUwiLCJ0aGF0Iiwic2hhcmUiLCJjdXJyZW50SGFzaCIsImVzY2FwZUh0bWwiLCJzdHJpbmciLCJlbnRpdHlNYXAiLCJTdHJpbmciLCJlbmNvZGVVUklDb21wb25lbnQiLCJ0ZXh0Iiwic2hhcmVJbnN0YW5jZSIsInNoYXJlQ3VycmVudCIsImNsaWNrIiwiZXNjYXBlU2VsZWN0b3IiLCJzZWwiLCJyY3NzZXNjYXBlIiwiZmNzc2VzY2FwZSIsImNoIiwiYXNDb2RlUG9pbnQiLCJjaGFyQ29kZUF0IiwidG9TdHJpbmciLCJwYXJzZVVybCIsInBvcCIsImdhbGxlcnkiLCJ0cmlnZ2VyRnJvbVVybCIsImdldEdhbGxlcnlJRCIsIm9yaWdIYXNoIiwiaGFzaFRpbWVyIiwic2VhcmNoIiwiaGFzQ3JlYXRlZEhpc3RvcnkiLCJiYWNrIiwiZmIiLCJyZXZlcnNlIiwidG1wIiwicHJldlRpbWUiLCJjdXJyVGltZSIsImRlbHRhWSIsImRlbHRhWCIsIndoZWVsRGVsdGEiLCJkZXRhaWwiLCJfZGVmYXVsdCIsIm5vZCIsInN1Ym1pdCIsIiRyZXZpZXdzQ29udGVudCIsIiRjb2xsYXBzaWJsZSIsImluaXRMaW5rQmluZCIsImluamVjdFBhZ2luYXRpb25MaW5rIiwiY29sbGFwc2VSZXZpZXdzIiwiQ29sbGFwc2libGVFdmVudHMiLCIkbmV4dExpbmsiLCIkcHJldkxpbmsiLCJ2YWxpZGF0ZSIsImVycm9yTWVzc2FnZSIsInJldmlld1JhdGluZyIsInJldmlld1N1YmplY3QiLCJyZXZpZXdDb21tZW50IiwiY2IiLCJmb3JtcyIsImVtYWlsIiwicmV2aWV3RW1haWwiLCJWaWRlb0dhbGxlcnkiLCIkZWxlbWVudCIsIiRwbGF5ZXIiLCIkdmlkZW9zIiwiY3VycmVudFZpZGVvIiwiYmluZEV2ZW50cyIsInNlbGVjdE5ld1ZpZGVvIiwiJHNlbGVjdGVkVGh1bWIiLCJzZXRNYWluVmlkZW8iLCJzZXRBY3RpdmVUaHVtYiIsImJpbmQiLCJwbHVnaW5LZXkiLCIkdmlkZW9HYWxsZXJ5IiwiZWxlbWVudCIsImlzSW5pdGlhbGl6ZWQiLCJZc3dTdGlja3lQcm9kdWN0IiwicHJvZHVjdFZpZXciLCJnZXRFbGVtZW50QnlJZCIsImZvb3RlciIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZW1wbGF0ZSIsInN0aWNreVByb2R1Y3QiLCJwcm9kdWN0IiwiYnRuSW5jIiwiYnRuRGVjIiwic3RpY2t5UHJvZHVjdElucHV0cyIsImZsYWciLCJpbnNlcnRUZW1wbGF0ZSIsImdldFN0aWNreVByb2R1Y3QiLCJzZXRPYnNlcnZlcnMiLCJzZXRFdmVudHMiLCJjbG9uZU5vZGUiLCJvYnNlckZ1bmMiLCJlbnRyeSIsImRhdGFOYW1lIiwiZGF0YU5hbWVzIiwiaXNJbnRlcnNlY3RpbmciLCJjbGFzc0xpc3QiLCJzZXRBdHRyaWJ1dGUiLCJpc0RhdGEiLCJkYXRhc2V0IiwiaW5jbHVkZXMiLCJwcm9kdWN0Vmlld09ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwidGhyZXNob2xkIiwicm9vdE1hcmdpbiIsImZvb3Rlck9ic2VydmVyIiwib2JzZXJ2ZSIsIk51bWJlciIsIl90YXJnZXQkaW5wdXQkdmFsdWUiLCJZc3dTdGlja3lQcm9kdWN0RmFjdG9yeSIsIllzd1Byb2R1Y3QiLCJtb3ZlUHJvZHVjdERhdGEiLCJhY29yZGVvbiIsInByb2R1Y3REYXRhIiwicHJvZHVjdERhdGFEZXNrdG9wIiwiaW5zZXJ0QWRqYWNlbnRFbGVtZW50IiwiYWNjb3JkaW9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJhY2NvcmRpb24iLCJhY2NvcmRpb25UaXRsZSIsImNvbnRhaW5zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDeUM7QUFDRjtBQUNlO0FBQ0E7QUFDSDtBQUNNO0FBQ0M7QUFDdkI7QUFDbUI7QUFFdEQsSUFBUUEsWUFBWSxHQUFLQyx3REFBVSxDQUEzQkQsWUFBWTtBQUFnQixJQUVmRSxPQUFPLDBCQUFBQyxZQUFBO0VBQ3hCLFNBQUFELFFBQVlFLE9BQU8sRUFBRTtJQUFBLElBQUFDLEtBQUE7SUFDakJBLEtBQUEsR0FBQUYsWUFBQSxDQUFBRyxJQUFBLE9BQU1GLE9BQU8sQ0FBQztJQUNkQyxLQUFBLENBQUtFLEdBQUcsR0FBR0MsTUFBTSxDQUFDQyxRQUFRLENBQUNDLElBQUk7SUFDL0JMLEtBQUEsQ0FBS00sV0FBVyxHQUFHQyxDQUFDLENBQUMsc0NBQXNDLENBQUM7SUFDNURQLEtBQUEsQ0FBS1EsZ0JBQWdCLEdBQUdELENBQUMsQ0FBQyx1Q0FBdUMsQ0FBQztJQUNsRVAsS0FBQSxDQUFLUyxXQUFXLEdBQUdDLDZEQUFZLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFBQyxPQUFBVixLQUFBO0VBQzdEO0VBQUNXLGNBQUEsQ0FBQWQsT0FBQSxFQUFBQyxZQUFBO0VBQUEsSUFBQWMsTUFBQSxHQUFBZixPQUFBLENBQUFnQixTQUFBO0VBQUFELE1BQUEsQ0FFREUsT0FBTyxHQUFQLFNBQUFBLE9BQU9BLENBQUEsRUFBRztJQUFBLElBQUFDLE1BQUE7SUFDTjtJQUNBUixDQUFDLENBQUNTLFFBQVEsQ0FBQyxDQUFDQyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsWUFBTTtNQUN2QyxJQUFJRixNQUFJLENBQUNiLEdBQUcs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VTtBQUNyQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsU0FBUztBQUN4QixVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7Ozs7Ozs7Ozs7O0FDdkNBLGlCQUFpQixtQkFBTyxDQUFDLHFEQUFZOzs7Ozs7Ozs7Ozs7QUNBckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEVBQUU7QUFDYixhQUFhLEVBQUU7QUFDZjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay41LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiBJbXBvcnQgYWxsIHByb2R1Y3Qgc3BlY2lmaWMganNcbiAqL1xuaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcbmltcG9ydCBSZXZpZXcgZnJvbSAnLi9wcm9kdWN0L3Jldmlld3MnO1xuaW1wb3J0IGNvbGxhcHNpYmxlRmFjdG9yeSBmcm9tICcuL2NvbW1vbi9jb2xsYXBzaWJsZSc7XG5pbXBvcnQgUHJvZHVjdERldGFpbHMgZnJvbSAnLi9jb21tb24vcHJvZHVjdC1kZXRhaWxzJztcbmltcG9ydCB2aWRlb0dhbGxlcnkgZnJvbSAnLi9wcm9kdWN0L3ZpZGVvLWdhbGxlcnknO1xuaW1wb3J0IHsgY2xhc3NpZnlGb3JtIH0gZnJvbSAnLi9jb21tb24vdXRpbHMvZm9ybS11dGlscyc7XG5pbXBvcnQgbW9kYWxGYWN0b3J5LCB7IG1vZGFsVHlwZXMgfSBmcm9tICcuL2dsb2JhbC9tb2RhbCc7XG5pbXBvcnQgJy4vcHJvZHVjdC9qcXVlcnktZmFuY3lib3gnO1xuaW1wb3J0IFlzd1Byb2R1Y3RGYWN0b3J5IGZyb20gJy4veXN3L21vZHVsZXMvcHJvZHVjdCc7XG5cbmNvbnN0IHsgV1JJVEVfUkVWSUVXIH0gPSBtb2RhbFR5cGVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0IGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgc3VwZXIoY29udGV4dCk7XG4gICAgICAgIHRoaXMudXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgICAgIHRoaXMuJHJldmlld0xpbmsgPSAkKCdbZGF0YS1yZXZlYWwtaWQ9XCJtb2RhbC1yZXZpZXctZm9ybVwiXScpO1xuICAgICAgICB0aGlzLiRidWxrUHJpY2luZ0xpbmsgPSAkKCdbZGF0YS1yZXZlYWwtaWQ9XCJtb2RhbC1idWxrLXByaWNpbmdcIl0nKTtcbiAgICAgICAgdGhpcy5yZXZpZXdNb2RhbCA9IG1vZGFsRmFjdG9yeSgnI21vZGFsLXJldmlldy1mb3JtJylbMF07XG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgLy8gTGlzdGVuIGZvciBmb3VuZGF0aW9uIG1vZGFsIGNsb3NlIGV2ZW50cyB0byBzYW5pdGl6ZSBVUkwgYWZ0ZXIgcmV2aWV3LlxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xvc2UuZm5kdG4ucmV2ZWFsJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMudXJsLmluZGV4T2YoJyN3cml0ZV9yZXZpZXcnKSAhPT0gLTEgJiYgdHlwZW9mIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBkb2N1bWVudC50aXRsZSwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJChkb2N1bWVudCkub24oJ29wZW5lZC5mbmR0bi5yZXZlYWwnLCAoKSA9PiB0aGlzLnJldmlld01vZGFsPy5zZXR1cEZvY3VzYWJsZUVsZW1lbnRzKFdSSVRFX1JFVklFVykpO1xuXG4gICAgICAgIGxldCB2YWxpZGF0b3I7XG5cbiAgICAgICAgLy8gSW5pdCBjb2xsYXBzaWJsZVxuICAgICAgICBjb2xsYXBzaWJsZUZhY3RvcnkoKTtcblxuICAgICAgICB0aGlzLnByb2R1Y3REZXRhaWxzID0gbmV3IFByb2R1Y3REZXRhaWxzKCQoJy5wcm9kdWN0VmlldycpLCB0aGlzLmNvbnRleHQsIHdpbmRvdy5CQ0RhdGEucHJvZHVjdF9hdHRyaWJ1dGVzKTtcbiAgICAgICAgdGhpcy5wcm9kdWN0RGV0YWlscy5zZXRQcm9kdWN0VmFyaWFudCgpO1xuXG4gICAgICAgIHZpZGVvR2FsbGVyeSgpO1xuXG4gICAgICAgIGNvbnN0ICRyZXZpZXdGb3JtID0gY2xhc3NpZnlGb3JtKCcud3JpdGVSZXZpZXctZm9ybScpO1xuICAgICAgICBjb25zdCByZXZpZXcgPSBuZXcgUmV2aWV3KCRyZXZpZXdGb3JtKTtcblxuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tkYXRhLXJldmVhbC1pZD1cIm1vZGFsLXJldmlldy1mb3JtXCJdJywgKCkgPT4ge1xuICAgICAgICAgICAgdmFsaWRhdG9yID0gcmV2aWV3LnJlZ2lzdGVyVmFsaWRhdGlvbih0aGlzLmNvbnRleHQpO1xuICAgICAgICAgICAgdGhpcy5hcmlhRGVzY3JpYmVSZXZpZXdJbnB1dHMoJHJldmlld0Zvcm0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAkcmV2aWV3Rm9ybS5vbignc3VibWl0JywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHZhbGlkYXRvcikge1xuICAgICAgICAgICAgICAgIHZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnByb2R1Y3RSZXZpZXdIYW5kbGVyKCk7XG4gICAgICAgIHRoaXMuYnVsa1ByaWNpbmdIYW5kbGVyKCk7XG5cbiAgICAgICAgWXN3UHJvZHVjdEZhY3RvcnkodGhpcy5jb250ZXh0KTtcbiAgICB9XG5cbiAgICBhcmlhRGVzY3JpYmVSZXZpZXdJbnB1dHMoJGZvcm0pIHtcbiAgICAgICAgJGZvcm0uZmluZCgnW2RhdGEtaW5wdXRdJykuZWFjaCgoXywgaW5wdXQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRpbnB1dCA9ICQoaW5wdXQpO1xuICAgICAgICAgICAgY29uc3QgbXNnU3BhbklkID0gYCR7JGlucHV0LmF0dHIoJ25hbWUnKX0tbXNnYDtcblxuICAgICAgICAgICAgJGlucHV0LnNpYmxpbmdzKCdzcGFuJykuYXR0cignaWQnLCBtc2dTcGFuSWQpO1xuICAgICAgICAgICAgJGlucHV0LmF0dHIoJ2FyaWEtZGVzY3JpYmVkYnknLCBtc2dTcGFuSWQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBwcm9kdWN0UmV2aWV3SGFuZGxlcigpIHtcbiAgICAgICAgaWYgKHRoaXMudXJsLmluZGV4T2YoJyN3cml0ZV9yZXZpZXcnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuJHJldmlld0xpbmsudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJ1bGtQcmljaW5nSGFuZGxlcigpIHtcbiAgICAgICAgaWYgKHRoaXMudXJsLmluZGV4T2YoJyNidWxrX3ByaWNpbmcnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuJGJ1bGtQcmljaW5nTGluay50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vIGZhbmN5Qm94IHYzLjUuN1xuLy9cbi8vIExpY2Vuc2VkIEdQTHYzIGZvciBvcGVuIHNvdXJjZSB1c2Vcbi8vIG9yIGZhbmN5Qm94IENvbW1lcmNpYWwgTGljZW5zZSBmb3IgY29tbWVyY2lhbCB1c2Vcbi8vXG4vLyBodHRwOi8vZmFuY3lhcHBzLmNvbS9mYW5jeWJveC9cbi8vIENvcHlyaWdodCAyMDE5IGZhbmN5QXBwc1xuLy9cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4oZnVuY3Rpb24gKHdpbmRvdywgZG9jdW1lbnQsICQsIHVuZGVmaW5lZCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB3aW5kb3cuY29uc29sZSA9IHdpbmRvdy5jb25zb2xlIHx8IHtcbiAgICBpbmZvOiBmdW5jdGlvbiAoc3R1ZmYpIHt9XG4gIH07XG5cbiAgLy8gSWYgdGhlcmUncyBubyBqUXVlcnksIGZhbmN5Qm94IGNhbid0IHdvcmtcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBpZiAoISQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBDaGVjayBpZiBmYW5jeUJveCBpcyBhbHJlYWR5IGluaXRpYWxpemVkXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICBpZiAoJC5mbi5mYW5jeWJveCkge1xuICAgIGNvbnNvbGUuaW5mbyhcImZhbmN5Qm94IGFscmVhZHkgaW5pdGlhbGl6ZWRcIik7XG5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBQcml2YXRlIGRlZmF1bHQgc2V0dGluZ3NcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIGRlZmF1bHRzID0ge1xuICAgIC8vIENsb3NlIGV4aXN0aW5nIG1vZGFsc1xuICAgIC8vIFNldCB0aGlzIHRvIGZhbHNlIGlmIHlvdSBkbyBub3QgbmVlZCB0byBzdGFjayBtdWx0aXBsZSBpbnN0YW5jZXNcbiAgICBjbG9zZUV4aXN0aW5nOiBmYWxzZSxcblxuICAgIC8vIEVuYWJsZSBpbmZpbml0ZSBnYWxsZXJ5IG5hdmlnYXRpb25cbiAgICBsb29wOiBmYWxzZSxcblxuICAgIC8vIEhvcml6b250YWwgc3BhY2UgYmV0d2VlbiBzbGlkZXNcbiAgICBndXR0ZXI6IDUwLFxuXG4gICAgLy8gRW5hYmxlIGtleWJvYXJkIG5hdmlnYXRpb25cbiAgICBrZXlib2FyZDogdHJ1ZSxcblxuICAgIC8vIFNob3VsZCBhbGxvdyBjYXB0aW9uIHRvIG92ZXJsYXAgdGhlIGNvbnRlbnRcbiAgICBwcmV2ZW50Q2FwdGlvbk92ZXJsYXA6IHRydWUsXG5cbiAgICAvLyBTaG91bGQgZGlzcGxheSBuYXZpZ2F0aW9uIGFycm93cyBhdCB0aGUgc2NyZWVuIGVkZ2VzXG4gICAgYXJyb3dzOiB0cnVlLFxuXG4gICAgLy8gU2hvdWxkIGRpc3BsYXkgY291bnRlciBhdCB0aGUgdG9wIGxlZnQgY29ybmVyXG4gICAgaW5mb2JhcjogdHJ1ZSxcblxuICAgIC8vIFNob3VsZCBkaXNwbGF5IGNsb3NlIGJ1dHRvbiAodXNpbmcgYGJ0blRwbC5zbWFsbEJ0bmAgdGVtcGxhdGUpIG92ZXIgdGhlIGNvbnRlbnRcbiAgICAvLyBDYW4gYmUgdHJ1ZSwgZmFsc2UsIFwiYXV0b1wiXG4gICAgLy8gSWYgXCJhdXRvXCIgLSB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgZW5hYmxlZCBmb3IgXCJodG1sXCIsIFwiaW5saW5lXCIgb3IgXCJhamF4XCIgaXRlbXNcbiAgICBzbWFsbEJ0bjogXCJhdXRvXCIsXG5cbiAgICAvLyBTaG91bGQgZGlzcGxheSB0b29sYmFyIChidXR0b25zIGF0IHRoZSB0b3ApXG4gICAgLy8gQ2FuIGJlIHRydWUsIGZhbHNlLCBcImF1dG9cIlxuICAgIC8vIElmIFwiYXV0b1wiIC0gd2lsbCBiZSBhdXRvbWF0aWNhbGx5IGhpZGRlbiBpZiBcInNtYWxsQnRuXCIgaXMgZW5hYmxlZFxuICAgIHRvb2xiYXI6IFwiYXV0b1wiLFxuXG4gICAgLy8gV2hhdCBidXR0b25zIHNob3VsZCBhcHBlYXIgaW4gdGhlIHRvcCByaWdodCBjb3JuZXIuXG4gICAgLy8gQnV0dG9ucyB3aWxsIGJlIGNyZWF0ZWQgdXNpbmcgdGVtcGxhdGVzIGZyb20gYGJ0blRwbGAgb3B0aW9uXG4gICAgLy8gYW5kIHRoZXkgd2lsbCBiZSBwbGFjZWQgaW50byB0b29sYmFyIChjbGFzcz1cImZhbmN5Ym94LXRvb2xiYXJcImAgZWxlbWVudClcbiAgICBidXR0b25zOiBbXG4gICAgICBcInpvb21cIixcbiAgICAgIC8vXCJzaGFyZVwiLFxuICAgICAgXCJzbGlkZVNob3dcIixcbiAgICAgIC8vXCJmdWxsU2NyZWVuXCIsXG4gICAgICAvL1wiZG93bmxvYWRcIixcbiAgICAgIFwidGh1bWJzXCIsXG4gICAgICBcImNsb3NlXCJcbiAgICBdLFxuXG4gICAgLy8gRGV0ZWN0IFwiaWRsZVwiIHRpbWUgaW4gc2Vjb25kc1xuICAgIGlkbGVUaW1lOiAzLFxuXG4gICAgLy8gRGlzYWJsZSByaWdodC1jbGljayBhbmQgdXNlIHNpbXBsZSBpbWFnZSBwcm90ZWN0aW9uIGZvciBpbWFnZXNcbiAgICBwcm90ZWN0OiBmYWxzZSxcblxuICAgIC8vIFNob3J0Y3V0IHRvIG1ha2UgY29udGVudCBcIm1vZGFsXCIgLSBkaXNhYmxlIGtleWJvYXJkIG5hdmlndGlvbiwgaGlkZSBidXR0b25zLCBldGNcbiAgICBtb2RhbDogZmFsc2UsXG5cbiAgICBpbWFnZToge1xuICAgICAgLy8gV2FpdCBmb3IgaW1hZ2VzIHRvIGxvYWQgYmVmb3JlIGRpc3BsYXlpbmdcbiAgICAgIC8vICAgdHJ1ZSAgLSB3YWl0IGZvciBpbWFnZSB0byBsb2FkIGFuZCB0aGVuIGRpc3BsYXk7XG4gICAgICAvLyAgIGZhbHNlIC0gZGlzcGxheSB0aHVtYm5haWwgYW5kIGxvYWQgdGhlIGZ1bGwtc2l6ZWQgaW1hZ2Ugb3ZlciB0b3AsXG4gICAgICAvLyAgICAgICAgICAgcmVxdWlyZXMgcHJlZGVmaW5lZCBpbWFnZSBkaW1lbnNpb25zIChgZGF0YS13aWR0aGAgYW5kIGBkYXRhLWhlaWdodGAgYXR0cmlidXRlcylcbiAgICAgIHByZWxvYWQ6IGZhbHNlXG4gICAgfSxcblxuICAgIGFqYXg6IHtcbiAgICAgIC8vIE9iamVjdCBjb250YWluaW5nIHNldHRpbmdzIGZvciBhamF4IHJlcXVlc3RcbiAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgIC8vIFRoaXMgaGVscHMgdG8gaW5kaWNhdGUgdGhhdCByZXF1ZXN0IGNvbWVzIGZyb20gdGhlIG1vZGFsXG4gICAgICAgIC8vIEZlZWwgZnJlZSB0byBjaGFuZ2UgbmFtaW5nXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBmYW5jeWJveDogdHJ1ZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGlmcmFtZToge1xuICAgICAgLy8gSWZyYW1lIHRlbXBsYXRlXG4gICAgICB0cGw6ICc8aWZyYW1lIGlkPVwiZmFuY3lib3gtZnJhbWV7cm5kfVwiIG5hbWU9XCJmYW5jeWJveC1mcmFtZXtybmR9XCIgY2xhc3M9XCJmYW5jeWJveC1pZnJhbWVcIiBhbGxvd2Z1bGxzY3JlZW49XCJhbGxvd2Z1bGxzY3JlZW5cIiBhbGxvdz1cImF1dG9wbGF5OyBmdWxsc2NyZWVuXCIgc3JjPVwiXCI+PC9pZnJhbWU+JyxcblxuICAgICAgLy8gUHJlbG9hZCBpZnJhbWUgYmVmb3JlIGRpc3BsYXlpbmcgaXRcbiAgICAgIC8vIFRoaXMgYWxsb3dzIHRvIGNhbGN1bGF0ZSBpZnJhbWUgY29udGVudCB3aWR0aCBhbmQgaGVpZ2h0XG4gICAgICAvLyAobm90ZTogRHVlIHRvIFwiU2FtZSBPcmlnaW4gUG9saWN5XCIsIHlvdSBjYW4ndCBnZXQgY3Jvc3MgZG9tYWluIGRhdGEpLlxuICAgICAgcHJlbG9hZDogdHJ1ZSxcblxuICAgICAgLy8gQ3VzdG9tIENTUyBzdHlsaW5nIGZvciBpZnJhbWUgd3JhcHBpbmcgZWxlbWVudFxuICAgICAgLy8gWW91IGNhbiB1c2UgdGhpcyB0byBzZXQgY3VzdG9tIGlmcmFtZSBkaW1lbnNpb25zXG4gICAgICBjc3M6IHt9LFxuXG4gICAgICAvLyBJZnJhbWUgdGFnIGF0dHJpYnV0ZXNcbiAgICAgIGF0dHI6IHtcbiAgICAgICAgc2Nyb2xsaW5nOiBcImF1dG9cIlxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBGb3IgSFRNTDUgdmlkZW8gb25seVxuICAgIHZpZGVvOiB7XG4gICAgICB0cGw6ICc8dmlkZW8gY2xhc3M9XCJmYW5jeWJveC12aWRlb1wiIGNvbnRyb2xzIGNvbnRyb2xzTGlzdD1cIm5vZG93bmxvYWRcIiBwb3N0ZXI9XCJ7e3Bvc3Rlcn19XCI+JyArXG4gICAgICAgICc8c291cmNlIHNyYz1cInt7c3JjfX1cIiB0eXBlPVwie3tmb3JtYXR9fVwiIC8+JyArXG4gICAgICAgICdTb3JyeSwgeW91ciBicm93c2VyIGRvZXNuXFwndCBzdXBwb3J0IGVtYmVkZGVkIHZpZGVvcywgPGEgaHJlZj1cInt7c3JjfX1cIj5kb3dubG9hZDwvYT4gYW5kIHdhdGNoIHdpdGggeW91ciBmYXZvcml0ZSB2aWRlbyBwbGF5ZXIhJyArXG4gICAgICAgIFwiPC92aWRlbz5cIixcbiAgICAgIGZvcm1hdDogXCJcIiwgLy8gY3VzdG9tIHZpZGVvIGZvcm1hdFxuICAgICAgYXV0b1N0YXJ0OiB0cnVlXG4gICAgfSxcblxuICAgIC8vIERlZmF1bHQgY29udGVudCB0eXBlIGlmIGNhbm5vdCBiZSBkZXRlY3RlZCBhdXRvbWF0aWNhbGx5XG4gICAgZGVmYXVsdFR5cGU6IFwiaW1hZ2VcIixcblxuICAgIC8vIE9wZW4vY2xvc2UgYW5pbWF0aW9uIHR5cGVcbiAgICAvLyBQb3NzaWJsZSB2YWx1ZXM6XG4gICAgLy8gICBmYWxzZSAgICAgICAgICAgIC0gZGlzYWJsZVxuICAgIC8vICAgXCJ6b29tXCIgICAgICAgICAgIC0gem9vbSBpbWFnZXMgZnJvbS90byB0aHVtYm5haWxcbiAgICAvLyAgIFwiZmFkZVwiXG4gICAgLy8gICBcInpvb20taW4tb3V0XCJcbiAgICAvL1xuICAgIGFuaW1hdGlvbkVmZmVjdDogXCJ6b29tXCIsXG5cbiAgICAvLyBEdXJhdGlvbiBpbiBtcyBmb3Igb3Blbi9jbG9zZSBhbmltYXRpb25cbiAgICBhbmltYXRpb25EdXJhdGlvbjogMzY2LFxuXG4gICAgLy8gU2hvdWxkIGltYWdlIGNoYW5nZSBvcGFjaXR5IHdoaWxlIHpvb21pbmdcbiAgICAvLyBJZiBvcGFjaXR5IGlzIFwiYXV0b1wiLCB0aGVuIG9wYWNpdHkgd2lsbCBiZSBjaGFuZ2VkIGlmIGltYWdlIGFuZCB0aHVtYm5haWwgaGF2ZSBkaWZmZXJlbnQgYXNwZWN0IHJhdGlvc1xuICAgIHpvb21PcGFjaXR5OiBcImF1dG9cIixcblxuICAgIC8vIFRyYW5zaXRpb24gZWZmZWN0IGJldHdlZW4gc2xpZGVzXG4gICAgLy9cbiAgICAvLyBQb3NzaWJsZSB2YWx1ZXM6XG4gICAgLy8gICBmYWxzZSAgICAgICAgICAgIC0gZGlzYWJsZVxuICAgIC8vICAgXCJmYWRlJ1xuICAgIC8vICAgXCJzbGlkZSdcbiAgICAvLyAgIFwiY2lyY3VsYXInXG4gICAgLy8gICBcInR1YmUnXG4gICAgLy8gICBcInpvb20taW4tb3V0J1xuICAgIC8vICAgXCJyb3RhdGUnXG4gICAgLy9cbiAgICB0cmFuc2l0aW9uRWZmZWN0OiBcImZhZGVcIixcblxuICAgIC8vIER1cmF0aW9uIGluIG1zIGZvciB0cmFuc2l0aW9uIGFuaW1hdGlvblxuICAgIHRyYW5zaXRpb25EdXJhdGlvbjogMzY2LFxuXG4gICAgLy8gQ3VzdG9tIENTUyBjbGFzcyBmb3Igc2xpZGUgZWxlbWVudFxuICAgIHNsaWRlQ2xhc3M6IFwiXCIsXG5cbiAgICAvLyBDdXN0b20gQ1NTIGNsYXNzIGZvciBsYXlvdXRcbiAgICBiYXNlQ2xhc3M6IFwiXCIsXG5cbiAgICAvLyBCYXNlIHRlbXBsYXRlIGZvciBsYXlvdXRcbiAgICBiYXNlVHBsOiAnPGRpdiBjbGFzcz1cImZhbmN5Ym94LWNvbnRhaW5lclwiIHJvbGU9XCJkaWFsb2dcIiB0YWJpbmRleD1cIi0xXCI+JyArXG4gICAgICAnPGRpdiBjbGFzcz1cImZhbmN5Ym94LWJnXCI+PC9kaXY+JyArXG4gICAgICAnPGRpdiBjbGFzcz1cImZhbmN5Ym94LWlubmVyXCI+JyArXG4gICAgICAnPGRpdiBjbGFzcz1cImZhbmN5Ym94LWluZm9iYXJcIj48c3BhbiBkYXRhLWZhbmN5Ym94LWluZGV4Pjwvc3Bhbj4mbmJzcDsvJm5ic3A7PHNwYW4gZGF0YS1mYW5jeWJveC1jb3VudD48L3NwYW4+PC9kaXY+JyArXG4gICAgICAnPGRpdiBjbGFzcz1cImZhbmN5Ym94LXRvb2xiYXJcIj57e2J1dHRvbnN9fTwvZGl2PicgK1xuICAgICAgJzxkaXYgY2xhc3M9XCJmYW5jeWJveC1uYXZpZ2F0aW9uXCI+e3thcnJvd3N9fTwvZGl2PicgK1xuICAgICAgJzxkaXYgY2xhc3M9XCJmYW5jeWJveC1zdGFnZVwiPjwvZGl2PicgK1xuICAgICAgJzxkaXYgY2xhc3M9XCJmYW5jeWJveC1jYXB0aW9uXCI+PGRpdiBjbGFzcz1cImZhbmN5Ym94LWNhcHRpb25fX2JvZHlcIj48L2Rpdj48L2Rpdj4nICtcbiAgICAgIFwiPC9kaXY+XCIgK1xuICAgICAgXCI8L2Rpdj5cIixcblxuICAgIC8vIExvYWRpbmcgaW5kaWNhdG9yIHRlbXBsYXRlXG4gICAgc3Bpbm5lclRwbDogJzxkaXYgY2xhc3M9XCJmYW5jeWJveC1sb2FkaW5nXCI+PC9kaXY+JyxcblxuICAgIC8vIEVycm9yIG1lc3NhZ2UgdGVtcGxhdGVcbiAgICBlcnJvclRwbDogJzxkaXYgY2xhc3M9XCJmYW5jeWJveC1lcnJvclwiPjxwPnt7RVJST1J9fTwvcD48L2Rpdj4nLFxuXG4gICAgYnRuVHBsOiB7XG4gICAgICBkb3dubG9hZDogJzxhIGRvd25sb2FkIGRhdGEtZmFuY3lib3gtZG93bmxvYWQgY2xhc3M9XCJmYW5jeWJveC1idXR0b24gZmFuY3lib3gtYnV0dG9uLS1kb3dubG9hZFwiIHRpdGxlPVwie3tET1dOTE9BRH19XCIgaHJlZj1cImphdmFzY3JpcHQ6O1wiPicgK1xuICAgICAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMTguNjIgMTcuMDlWMTlINS4zOHYtMS45MXptLTIuOTctNi45NkwxNyAxMS40NWwtNSA0Ljg3LTUtNC44NyAxLjM2LTEuMzIgMi42OCAyLjY0VjVoMS45MnY3Ljc3elwiLz48L3N2Zz4nICtcbiAgICAgICAgXCI8L2E+XCIsXG5cbiAgICAgIHpvb206ICc8YnV0dG9uIGRhdGEtZmFuY3lib3gtem9vbSBjbGFzcz1cImZhbmN5Ym94LWJ1dHRvbiBmYW5jeWJveC1idXR0b24tLXpvb21cIiB0aXRsZT1cInt7Wk9PTX19XCI+JyArXG4gICAgICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0xOC43IDE3LjNsLTMtM2E1LjkgNS45IDAgMCAwLS42LTcuNiA1LjkgNS45IDAgMCAwLTguNCAwIDUuOSA1LjkgMCAwIDAgMCA4LjQgNS45IDUuOSAwIDAgMCA3LjcuN2wzIDNhMSAxIDAgMCAwIDEuMyAwYy40LS41LjQtMSAwLTEuNXpNOC4xIDEzLjhhNCA0IDAgMCAxIDAtNS43IDQgNCAwIDAgMSA1LjcgMCA0IDQgMCAwIDEgMCA1LjcgNCA0IDAgMCAxLTUuNyAwelwiLz48L3N2Zz4nICtcbiAgICAgICAgXCI8L2J1dHRvbj5cIixcblxuICAgICAgY2xvc2U6ICc8YnV0dG9uIGRhdGEtZmFuY3lib3gtY2xvc2UgY2xhc3M9XCJmYW5jeWJveC1idXR0b24gZmFuY3lib3gtYnV0dG9uLS1jbG9zZVwiIHRpdGxlPVwie3tDTE9TRX19XCI+JyArXG4gICAgICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk0xMiAxMC42TDYuNiA1LjIgNS4yIDYuNmw1LjQgNS40LTUuNCA1LjQgMS40IDEuNCA1LjQtNS40IDUuNCA1LjQgMS40LTEuNC01LjQtNS40IDUuNC01LjQtMS40LTEuNC01LjQgNS40elwiLz48L3N2Zz4nICtcbiAgICAgICAgXCI8L2J1dHRvbj5cIixcblxuICAgICAgLy8gQXJyb3dzXG4gICAgICBhcnJvd0xlZnQ6ICc8YnV0dG9uIGRhdGEtZmFuY3lib3gtcHJldiBjbGFzcz1cImZhbmN5Ym94LWJ1dHRvbiBmYW5jeWJveC1idXR0b24tLWFycm93X2xlZnRcIiB0aXRsZT1cInt7UFJFVn19XCI+JyArXG4gICAgICAgICc8ZGl2PjxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTExLjI4IDE1LjdsLTEuMzQgMS4zN0w1IDEybDQuOTQtNS4wNyAxLjM0IDEuMzgtMi42OCAyLjcySDE5djEuOTRIOC42elwiLz48L3N2Zz48L2Rpdj4nICtcbiAgICAgICAgXCI8L2J1dHRvbj5cIixcblxuICAgICAgYXJyb3dSaWdodDogJzxidXR0b24gZGF0YS1mYW5jeWJveC1uZXh0IGNsYXNzPVwiZmFuY3lib3gtYnV0dG9uIGZhbmN5Ym94LWJ1dHRvbi0tYXJyb3dfcmlnaHRcIiB0aXRsZT1cInt7TkVYVH19XCI+JyArXG4gICAgICAgICc8ZGl2PjxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTE1LjQgMTIuOTdsLTIuNjggMi43MiAxLjM0IDEuMzhMMTkgMTJsLTQuOTQtNS4wNy0xLjM0IDEuMzggMi42OCAyLjcySDV2MS45NHpcIi8+PC9zdmc+PC9kaXY+JyArXG4gICAgICAgIFwiPC9idXR0b24+XCIsXG5cbiAgICAgIC8vIFRoaXMgc21hbGwgY2xvc2UgYnV0dG9uIHdpbGwgYmUgYXBwZW5kZWQgdG8geW91ciBodG1sL2lubGluZS9hamF4IGNvbnRlbnQgYnkgZGVmYXVsdCxcbiAgICAgIC8vIGlmIFwic21hbGxCdG5cIiBvcHRpb24gaXMgbm90IHNldCB0byBmYWxzZVxuICAgICAgc21hbGxCdG46ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBkYXRhLWZhbmN5Ym94LWNsb3NlIGNsYXNzPVwiZmFuY3lib3gtYnV0dG9uIGZhbmN5Ym94LWNsb3NlLXNtYWxsXCIgdGl0bGU9XCJ7e0NMT1NFfX1cIj4nICtcbiAgICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZlcnNpb249XCIxXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMTMgMTJsNS01LTEtMS01IDUtNS01LTEgMSA1IDUtNSA1IDEgMSA1LTUgNSA1IDEtMXpcIi8+PC9zdmc+JyArXG4gICAgICAgIFwiPC9idXR0b24+XCJcbiAgICB9LFxuXG4gICAgLy8gQ29udGFpbmVyIGlzIGluamVjdGVkIGludG8gdGhpcyBlbGVtZW50XG4gICAgcGFyZW50RWw6IFwiYm9keVwiLFxuXG4gICAgLy8gSGlkZSBicm93c2VyIHZlcnRpY2FsIHNjcm9sbGJhcnM7IHVzZSBhdCB5b3VyIG93biByaXNrXG4gICAgaGlkZVNjcm9sbGJhcjogdHJ1ZSxcblxuICAgIC8vIEZvY3VzIGhhbmRsaW5nXG4gICAgLy8gPT09PT09PT09PT09PT1cblxuICAgIC8vIFRyeSB0byBmb2N1cyBvbiB0aGUgZmlyc3QgZm9jdXNhYmxlIGVsZW1lbnQgYWZ0ZXIgb3BlbmluZ1xuICAgIGF1dG9Gb2N1czogdHJ1ZSxcblxuICAgIC8vIFB1dCBmb2N1cyBiYWNrIHRvIGFjdGl2ZSBlbGVtZW50IGFmdGVyIGNsb3NpbmdcbiAgICBiYWNrRm9jdXM6IHRydWUsXG5cbiAgICAvLyBEbyBub3QgbGV0IHVzZXIgdG8gZm9jdXMgb24gZWxlbWVudCBvdXRzaWRlIG1vZGFsIGNvbnRlbnRcbiAgICB0cmFwRm9jdXM6IHRydWUsXG5cbiAgICAvLyBNb2R1bGUgc3BlY2lmaWMgb3B0aW9uc1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICBmdWxsU2NyZWVuOiB7XG4gICAgICBhdXRvU3RhcnQ6IGZhbHNlXG4gICAgfSxcblxuICAgIC8vIFNldCBgdG91Y2g6IGZhbHNlYCB0byBkaXNhYmxlIHBhbm5pbmcvc3dpcGluZ1xuICAgIHRvdWNoOiB7XG4gICAgICB2ZXJ0aWNhbDogdHJ1ZSwgLy8gQWxsb3cgdG8gZHJhZyBjb250ZW50IHZlcnRpY2FsbHlcbiAgICAgIG1vbWVudHVtOiB0cnVlIC8vIENvbnRpbnVlIG1vdmVtZW50IGFmdGVyIHJlbGVhc2luZyBtb3VzZS90b3VjaCB3aGVuIHBhbm5pbmdcbiAgICB9LFxuXG4gICAgLy8gSGFzaCB2YWx1ZSB3aGVuIGluaXRpYWxpemluZyBtYW51YWxseSxcbiAgICAvLyBzZXQgYGZhbHNlYCB0byBkaXNhYmxlIGhhc2ggY2hhbmdlXG4gICAgaGFzaDogbnVsbCxcblxuICAgIC8vIEN1c3RvbWl6ZSBvciBhZGQgbmV3IG1lZGlhIHR5cGVzXG4gICAgLy8gRXhhbXBsZTpcbiAgICAvKlxuICAgICAgbWVkaWEgOiB7XG4gICAgICAgIHlvdXR1YmUgOiB7XG4gICAgICAgICAgcGFyYW1zIDoge1xuICAgICAgICAgICAgYXV0b3BsYXkgOiAwXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgKi9cbiAgICBtZWRpYToge30sXG5cbiAgICBzbGlkZVNob3c6IHtcbiAgICAgIGF1dG9TdGFydDogZmFsc2UsXG4gICAgICBzcGVlZDogMzAwMFxuICAgIH0sXG5cbiAgICB0aHVtYnM6IHtcbiAgICAgIGF1dG9TdGFydDogZmFsc2UsIC8vIERpc3BsYXkgdGh1bWJuYWlscyBvbiBvcGVuaW5nXG4gICAgICBoaWRlT25DbG9zZTogdHJ1ZSwgLy8gSGlkZSB0aHVtYm5haWwgZ3JpZCB3aGVuIGNsb3NpbmcgYW5pbWF0aW9uIHN0YXJ0c1xuICAgICAgcGFyZW50RWw6IFwiLmZhbmN5Ym94LWNvbnRhaW5lclwiLCAvLyBDb250YWluZXIgaXMgaW5qZWN0ZWQgaW50byB0aGlzIGVsZW1lbnRcbiAgICAgIGF4aXM6IFwieVwiIC8vIFZlcnRpY2FsICh5KSBvciBob3Jpem9udGFsICh4KSBzY3JvbGxpbmdcbiAgICB9LFxuXG4gICAgLy8gVXNlIG1vdXNld2hlZWwgdG8gbmF2aWdhdGUgZ2FsbGVyeVxuICAgIC8vIElmICdhdXRvJyAtIGVuYWJsZWQgZm9yIGltYWdlcyBvbmx5XG4gICAgd2hlZWw6IFwiYXV0b1wiLFxuXG4gICAgLy8gQ2FsbGJhY2tzXG4gICAgLy89PT09PT09PT09XG5cbiAgICAvLyBTZWUgRG9jdW1lbnRhdGlvbi9BUEkvRXZlbnRzIGZvciBtb3JlIGluZm9ybWF0aW9uXG4gICAgLy8gRXhhbXBsZTpcbiAgICAvKlxuICAgICAgYWZ0ZXJTaG93OiBmdW5jdGlvbiggaW5zdGFuY2UsIGN1cnJlbnQgKSB7XG4gICAgICAgIGNvbnNvbGUuaW5mbyggJ0NsaWNrZWQgZWxlbWVudDonICk7XG4gICAgICAgIGNvbnNvbGUuaW5mbyggY3VycmVudC5vcHRzLiRvcmlnICk7XG4gICAgICB9XG4gICAgKi9cblxuICAgIG9uSW5pdDogJC5ub29wLCAvLyBXaGVuIGluc3RhbmNlIGhhcyBiZWVuIGluaXRpYWxpemVkXG5cbiAgICBiZWZvcmVMb2FkOiAkLm5vb3AsIC8vIEJlZm9yZSB0aGUgY29udGVudCBvZiBhIHNsaWRlIGlzIGJlaW5nIGxvYWRlZFxuICAgIGFmdGVyTG9hZDogJC5ub29wLCAvLyBXaGVuIHRoZSBjb250ZW50IG9mIGEgc2xpZGUgaXMgZG9uZSBsb2FkaW5nXG5cbiAgICBiZWZvcmVTaG93OiAkLm5vb3AsIC8vIEJlZm9yZSBvcGVuIGFuaW1hdGlvbiBzdGFydHNcbiAgICBhZnRlclNob3c6ICQubm9vcCwgLy8gV2hlbiBjb250ZW50IGlzIGRvbmUgbG9hZGluZyBhbmQgYW5pbWF0aW5nXG5cbiAgICBiZWZvcmVDbG9zZTogJC5ub29wLCAvLyBCZWZvcmUgdGhlIGluc3RhbmNlIGF0dGVtcHRzIHRvIGNsb3NlLiBSZXR1cm4gZmFsc2UgdG8gY2FuY2VsIHRoZSBjbG9zZS5cbiAgICBhZnRlckNsb3NlOiAkLm5vb3AsIC8vIEFmdGVyIGluc3RhbmNlIGhhcyBiZWVuIGNsb3NlZFxuXG4gICAgb25BY3RpdmF0ZTogJC5ub29wLCAvLyBXaGVuIGluc3RhbmNlIGlzIGJyb3VnaHQgdG8gZnJvbnRcbiAgICBvbkRlYWN0aXZhdGU6ICQubm9vcCwgLy8gV2hlbiBvdGhlciBpbnN0YW5jZSBoYXMgYmVlbiBhY3RpdmF0ZWRcblxuICAgIC8vIEludGVyYWN0aW9uXG4gICAgLy8gPT09PT09PT09PT1cblxuICAgIC8vIFVzZSBvcHRpb25zIGJlbG93IHRvIGN1c3RvbWl6ZSB0YWtlbiBhY3Rpb24gd2hlbiB1c2VyIGNsaWNrcyBvciBkb3VibGUgY2xpY2tzIG9uIHRoZSBmYW5jeUJveCBhcmVhLFxuICAgIC8vIGVhY2ggb3B0aW9uIGNhbiBiZSBzdHJpbmcgb3IgbWV0aG9kIHRoYXQgcmV0dXJucyB2YWx1ZS5cbiAgICAvL1xuICAgIC8vIFBvc3NpYmxlIHZhbHVlczpcbiAgICAvLyAgIFwiY2xvc2VcIiAgICAgICAgICAgLSBjbG9zZSBpbnN0YW5jZVxuICAgIC8vICAgXCJuZXh0XCIgICAgICAgICAgICAtIG1vdmUgdG8gbmV4dCBnYWxsZXJ5IGl0ZW1cbiAgICAvLyAgIFwibmV4dE9yQ2xvc2VcIiAgICAgLSBtb3ZlIHRvIG5leHQgZ2FsbGVyeSBpdGVtIG9yIGNsb3NlIGlmIGdhbGxlcnkgaGFzIG9ubHkgb25lIGl0ZW1cbiAgICAvLyAgIFwidG9nZ2xlQ29udHJvbHNcIiAgLSBzaG93L2hpZGUgY29udHJvbHNcbiAgICAvLyAgIFwiem9vbVwiICAgICAgICAgICAgLSB6b29tIGltYWdlIChpZiBsb2FkZWQpXG4gICAgLy8gICBmYWxzZSAgICAgICAgICAgICAtIGRvIG5vdGhpbmdcblxuICAgIC8vIENsaWNrZWQgb24gdGhlIGNvbnRlbnRcbiAgICBjbGlja0NvbnRlbnQ6IGZ1bmN0aW9uIChjdXJyZW50LCBldmVudCkge1xuICAgICAgcmV0dXJuIGN1cnJlbnQudHlwZSA9PT0gXCJpbWFnZVwiID8gXCJ6b29tXCIgOiBmYWxzZTtcbiAgICB9LFxuXG4gICAgLy8gQ2xpY2tlZCBvbiB0aGUgc2xpZGVcbiAgICBjbGlja1NsaWRlOiBcImNsb3NlXCIsXG5cbiAgICAvLyBDbGlja2VkIG9uIHRoZSBiYWNrZ3JvdW5kIChiYWNrZHJvcCkgZWxlbWVudDtcbiAgICAvLyBpZiB5b3UgaGF2ZSBub3QgY2hhbmdlZCB0aGUgbGF5b3V0LCB0aGVuIG1vc3QgbGlrZWx5IHlvdSBuZWVkIHRvIHVzZSBgY2xpY2tTbGlkZWAgb3B0aW9uXG4gICAgY2xpY2tPdXRzaWRlOiBcImNsb3NlXCIsXG5cbiAgICAvLyBTYW1lIGFzIHByZXZpb3VzIHR3bywgYnV0IGZvciBkb3VibGUgY2xpY2tcbiAgICBkYmxjbGlja0NvbnRlbnQ6IGZhbHNlLFxuICAgIGRibGNsaWNrU2xpZGU6IGZhbHNlLFxuICAgIGRibGNsaWNrT3V0c2lkZTogZmFsc2UsXG5cbiAgICAvLyBDdXN0b20gb3B0aW9ucyB3aGVuIG1vYmlsZSBkZXZpY2UgaXMgZGV0ZWN0ZWRcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIG1vYmlsZToge1xuICAgICAgcHJldmVudENhcHRpb25PdmVybGFwOiBmYWxzZSxcbiAgICAgIGlkbGVUaW1lOiBmYWxzZSxcbiAgICAgIGNsaWNrQ29udGVudDogZnVuY3Rpb24gKGN1cnJlbnQsIGV2ZW50KSB7XG4gICAgICAgIHJldHVybiBjdXJyZW50LnR5cGUgPT09IFwiaW1hZ2VcIiA/IFwidG9nZ2xlQ29udHJvbHNcIiA6IGZhbHNlO1xuICAgICAgfSxcbiAgICAgIGNsaWNrU2xpZGU6IGZ1bmN0aW9uIChjdXJyZW50LCBldmVudCkge1xuICAgICAgICByZXR1cm4gY3VycmVudC50eXBlID09PSBcImltYWdlXCIgPyBcInRvZ2dsZUNvbnRyb2xzXCIgOiBcImNsb3NlXCI7XG4gICAgICB9LFxuICAgICAgZGJsY2xpY2tDb250ZW50OiBmdW5jdGlvbiAoY3VycmVudCwgZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnQudHlwZSA9PT0gXCJpbWFnZVwiID8gXCJ6b29tXCIgOiBmYWxzZTtcbiAgICAgIH0sXG4gICAgICBkYmxjbGlja1NsaWRlOiBmdW5jdGlvbiAoY3VycmVudCwgZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnQudHlwZSA9PT0gXCJpbWFnZVwiID8gXCJ6b29tXCIgOiBmYWxzZTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gSW50ZXJuYXRpb25hbGl6YXRpb25cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PVxuXG4gICAgbGFuZzogXCJlblwiLFxuICAgIGkxOG46IHtcbiAgICAgIGVuOiB7XG4gICAgICAgIENMT1NFOiBcIkNsb3NlXCIsXG4gICAgICAgIE5FWFQ6IFwiTmV4dFwiLFxuICAgICAgICBQUkVWOiBcIlByZXZpb3VzXCIsXG4gICAgICAgIEVSUk9SOiBcIlRoZSByZXF1ZXN0ZWQgY29udGVudCBjYW5ub3QgYmUgbG9hZGVkLiA8YnIvPiBQbGVhc2UgdHJ5IGFnYWluIGxhdGVyLlwiLFxuICAgICAgICBQTEFZX1NUQVJUOiBcIlN0YXJ0IHNsaWRlc2hvd1wiLFxuICAgICAgICBQTEFZX1NUT1A6IFwiUGF1c2Ugc2xpZGVzaG93XCIsXG4gICAgICAgIEZVTExfU0NSRUVOOiBcIkZ1bGwgc2NyZWVuXCIsXG4gICAgICAgIFRIVU1CUzogXCJUaHVtYm5haWxzXCIsXG4gICAgICAgIERPV05MT0FEOiBcIkRvd25sb2FkXCIsXG4gICAgICAgIFNIQVJFOiBcIlNoYXJlXCIsXG4gICAgICAgIFpPT006IFwiWm9vbVwiXG4gICAgICB9LFxuICAgICAgZGU6IHtcbiAgICAgICAgQ0xPU0U6IFwiU2NobGllJnN6bGlnO2VuXCIsXG4gICAgICAgIE5FWFQ6IFwiV2VpdGVyXCIsXG4gICAgICAgIFBSRVY6IFwiWnVyJnV1bWw7Y2tcIixcbiAgICAgICAgRVJST1I6IFwiRGllIGFuZ2Vmb3JkZXJ0ZW4gRGF0ZW4ga29ubnRlbiBuaWNodCBnZWxhZGVuIHdlcmRlbi4gPGJyLz4gQml0dGUgdmVyc3VjaGVuIFNpZSBlcyBzcCZhdW1sO3RlciBub2NobWFsLlwiLFxuICAgICAgICBQTEFZX1NUQVJUOiBcIkRpYXNjaGF1IHN0YXJ0ZW5cIixcbiAgICAgICAgUExBWV9TVE9QOiBcIkRpYXNjaGF1IGJlZW5kZW5cIixcbiAgICAgICAgRlVMTF9TQ1JFRU46IFwiVm9sbGJpbGRcIixcbiAgICAgICAgVEhVTUJTOiBcIlZvcnNjaGF1YmlsZGVyXCIsXG4gICAgICAgIERPV05MT0FEOiBcIkhlcnVudGVybGFkZW5cIixcbiAgICAgICAgU0hBUkU6IFwiVGVpbGVuXCIsXG4gICAgICAgIFpPT006IFwiVmVyZ3Imb3VtbDsmc3psaWc7ZXJuXCJcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLy8gRmV3IHVzZWZ1bCB2YXJpYWJsZXMgYW5kIG1ldGhvZHNcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgJFcgPSAkKHdpbmRvdyk7XG4gIHZhciAkRCA9ICQoZG9jdW1lbnQpO1xuXG4gIHZhciBjYWxsZWQgPSAwO1xuXG4gIC8vIENoZWNrIGlmIGFuIG9iamVjdCBpcyBhIGpRdWVyeSBvYmplY3QgYW5kIG5vdCBhIG5hdGl2ZSBKYXZhU2NyaXB0IG9iamVjdFxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgdmFyIGlzUXVlcnkgPSBmdW5jdGlvbiAob2JqKSB7XG4gICAgcmV0dXJuIG9iaiAmJiBvYmouaGFzT3duUHJvcGVydHkgJiYgb2JqIGluc3RhbmNlb2YgJDtcbiAgfTtcblxuICAvLyBIYW5kbGUgbXVsdGlwbGUgYnJvd3NlcnMgZm9yIFwicmVxdWVzdEFuaW1hdGlvbkZyYW1lXCIgYW5kIFwiY2FuY2VsQW5pbWF0aW9uRnJhbWVcIlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIHZhciByZXF1ZXN0QUZyYW1lID0gKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgd2luZG93LndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgd2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSB8fFxuICAgICAgd2luZG93Lm9SZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgIC8vIGlmIGFsbCBlbHNlIGZhaWxzLCB1c2Ugc2V0VGltZW91dFxuICAgICAgZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cuc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDYwKTtcbiAgICAgIH1cbiAgICApO1xuICB9KSgpO1xuXG4gIHZhciBjYW5jZWxBRnJhbWUgPSAoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAoXG4gICAgICB3aW5kb3cuY2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgIHdpbmRvdy53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZSB8fFxuICAgICAgd2luZG93Lm1vekNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICB3aW5kb3cub0NhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICBmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChpZCk7XG4gICAgICB9XG4gICAgKTtcbiAgfSkoKTtcblxuICAvLyBEZXRlY3QgdGhlIHN1cHBvcnRlZCB0cmFuc2l0aW9uLWVuZCBldmVudCBwcm9wZXJ0eSBuYW1lXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgdmFyIHRyYW5zaXRpb25FbmQgPSAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJmYWtlZWxlbWVudFwiKSxcbiAgICAgIHQ7XG5cbiAgICB2YXIgdHJhbnNpdGlvbnMgPSB7XG4gICAgICB0cmFuc2l0aW9uOiBcInRyYW5zaXRpb25lbmRcIixcbiAgICAgIE9UcmFuc2l0aW9uOiBcIm9UcmFuc2l0aW9uRW5kXCIsXG4gICAgICBNb3pUcmFuc2l0aW9uOiBcInRyYW5zaXRpb25lbmRcIixcbiAgICAgIFdlYmtpdFRyYW5zaXRpb246IFwid2Via2l0VHJhbnNpdGlvbkVuZFwiXG4gICAgfTtcblxuICAgIGZvciAodCBpbiB0cmFuc2l0aW9ucykge1xuICAgICAgaWYgKGVsLnN0eWxlW3RdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRyYW5zaXRpb25zW3RdO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBcInRyYW5zaXRpb25lbmRcIjtcbiAgfSkoKTtcblxuICAvLyBGb3JjZSByZWRyYXcgb24gYW4gZWxlbWVudC5cbiAgLy8gVGhpcyBoZWxwcyBpbiBjYXNlcyB3aGVyZSB0aGUgYnJvd3NlciBkb2Vzbid0IHJlZHJhdyBhbiB1cGRhdGVkIGVsZW1lbnQgcHJvcGVybHlcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgdmFyIGZvcmNlUmVkcmF3ID0gZnVuY3Rpb24gKCRlbCkge1xuICAgIHJldHVybiAkZWwgJiYgJGVsLmxlbmd0aCAmJiAkZWxbMF0ub2Zmc2V0SGVpZ2h0O1xuICB9O1xuXG4gIC8vIEV4Y2x1ZGUgYXJyYXkgKGBidXR0b25zYCkgb3B0aW9ucyBmcm9tIGRlZXAgbWVyZ2luZ1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgdmFyIG1lcmdlT3B0cyA9IGZ1bmN0aW9uIChvcHRzMSwgb3B0czIpIHtcbiAgICB2YXIgcmV6ID0gJC5leHRlbmQodHJ1ZSwge30sIG9wdHMxLCBvcHRzMik7XG5cbiAgICAkLmVhY2gob3B0czIsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICBpZiAoJC5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICByZXpba2V5XSA9IHZhbHVlO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHJlejtcbiAgfTtcblxuICAvLyBIb3cgbXVjaCBvZiBhbiBlbGVtZW50IGlzIHZpc2libGUgaW4gdmlld3BvcnRcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIGluVmlld3BvcnQgPSBmdW5jdGlvbiAoZWxlbSkge1xuICAgIHZhciBlbGVtQ2VudGVyLCByZXo7XG5cbiAgICBpZiAoIWVsZW0gfHwgZWxlbS5vd25lckRvY3VtZW50ICE9PSBkb2N1bWVudCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgICQoXCIuZmFuY3lib3gtY29udGFpbmVyXCIpLmNzcyhcInBvaW50ZXItZXZlbnRzXCIsIFwibm9uZVwiKTtcblxuICAgIGVsZW1DZW50ZXIgPSB7XG4gICAgICB4OiBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgKyBlbGVtLm9mZnNldFdpZHRoIC8gMixcbiAgICAgIHk6IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgZWxlbS5vZmZzZXRIZWlnaHQgLyAyXG4gICAgfTtcblxuICAgIHJleiA9IGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoZWxlbUNlbnRlci54LCBlbGVtQ2VudGVyLnkpID09PSBlbGVtO1xuXG4gICAgJChcIi5mYW5jeWJveC1jb250YWluZXJcIikuY3NzKFwicG9pbnRlci1ldmVudHNcIiwgXCJcIik7XG5cbiAgICByZXR1cm4gcmV6O1xuICB9O1xuXG4gIC8vIENsYXNzIGRlZmluaXRpb25cbiAgLy8gPT09PT09PT09PT09PT09PVxuXG4gIHZhciBGYW5jeUJveCA9IGZ1bmN0aW9uIChjb250ZW50LCBvcHRzLCBpbmRleCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHNlbGYub3B0cyA9IG1lcmdlT3B0cyh7XG4gICAgICBpbmRleDogaW5kZXhcbiAgICB9LCAkLmZhbmN5Ym94LmRlZmF1bHRzKTtcblxuICAgIGlmICgkLmlzUGxhaW5PYmplY3Qob3B0cykpIHtcbiAgICAgIHNlbGYub3B0cyA9IG1lcmdlT3B0cyhzZWxmLm9wdHMsIG9wdHMpO1xuICAgIH1cblxuICAgIGlmICgkLmZhbmN5Ym94LmlzTW9iaWxlKSB7XG4gICAgICBzZWxmLm9wdHMgPSBtZXJnZU9wdHMoc2VsZi5vcHRzLCBzZWxmLm9wdHMubW9iaWxlKTtcbiAgICB9XG5cbiAgICBzZWxmLmlkID0gc2VsZi5vcHRzLmlkIHx8ICsrY2FsbGVkO1xuXG4gICAgc2VsZi5jdXJySW5kZXggPSBwYXJzZUludChzZWxmLm9wdHMuaW5kZXgsIDEwKSB8fCAwO1xuICAgIHNlbGYucHJldkluZGV4ID0gbnVsbDtcblxuICAgIHNlbGYucHJldlBvcyA9IG51bGw7XG4gICAgc2VsZi5jdXJyUG9zID0gMDtcblxuICAgIHNlbGYuZmlyc3RSdW4gPSB0cnVlO1xuXG4gICAgLy8gQWxsIGdyb3VwIGl0ZW1zXG4gICAgc2VsZi5ncm91cCA9IFtdO1xuXG4gICAgLy8gRXhpc3Rpbmcgc2xpZGVzIChmb3IgY3VycmVudCwgbmV4dCBhbmQgcHJldmlvdXMgZ2FsbGVyeSBpdGVtcylcbiAgICBzZWxmLnNsaWRlcyA9IHt9O1xuXG4gICAgLy8gQ3JlYXRlIGdyb3VwIGVsZW1lbnRzXG4gICAgc2VsZi5hZGRDb250ZW50KGNvbnRlbnQpO1xuXG4gICAgaWYgKCFzZWxmLmdyb3VwLmxlbmd0aCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNlbGYuaW5pdCgpO1xuICB9O1xuXG4gICQuZXh0ZW5kKEZhbmN5Qm94LnByb3RvdHlwZSwge1xuICAgIC8vIENyZWF0ZSBET00gc3RydWN0dXJlXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT1cblxuICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgZmlyc3RJdGVtID0gc2VsZi5ncm91cFtzZWxmLmN1cnJJbmRleF0sXG4gICAgICAgIGZpcnN0SXRlbU9wdHMgPSBmaXJzdEl0ZW0ub3B0cyxcbiAgICAgICAgJGNvbnRhaW5lcixcbiAgICAgICAgYnV0dG9uU3RyO1xuXG4gICAgICBpZiAoZmlyc3RJdGVtT3B0cy5jbG9zZUV4aXN0aW5nKSB7XG4gICAgICAgICQuZmFuY3lib3guY2xvc2UodHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIC8vIEhpZGUgc2Nyb2xsYmFyc1xuICAgICAgLy8gPT09PT09PT09PT09PT09XG5cbiAgICAgICQoXCJib2R5XCIpLmFkZENsYXNzKFwiZmFuY3lib3gtYWN0aXZlXCIpO1xuXG4gICAgICBpZiAoXG4gICAgICAgICEkLmZhbmN5Ym94LmdldEluc3RhbmNlKCkgJiZcbiAgICAgICAgZmlyc3RJdGVtT3B0cy5oaWRlU2Nyb2xsYmFyICE9PSBmYWxzZSAmJlxuICAgICAgICAhJC5mYW5jeWJveC5pc01vYmlsZSAmJlxuICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCA+IHdpbmRvdy5pbm5lckhlaWdodFxuICAgICAgKSB7XG4gICAgICAgICQoXCJoZWFkXCIpLmFwcGVuZChcbiAgICAgICAgICAnPHN0eWxlIGlkPVwiZmFuY3lib3gtc3R5bGUtbm9zY3JvbGxcIiB0eXBlPVwidGV4dC9jc3NcIj4uY29tcGVuc2F0ZS1mb3Itc2Nyb2xsYmFye21hcmdpbi1yaWdodDonICtcbiAgICAgICAgICAod2luZG93LmlubmVyV2lkdGggLSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50V2lkdGgpICtcbiAgICAgICAgICBcInB4O308L3N0eWxlPlwiXG4gICAgICAgICk7XG5cbiAgICAgICAgJChcImJvZHlcIikuYWRkQ2xhc3MoXCJjb21wZW5zYXRlLWZvci1zY3JvbGxiYXJcIik7XG4gICAgICB9XG5cbiAgICAgIC8vIEJ1aWxkIGh0bWwgbWFya3VwIGFuZCBzZXQgcmVmZXJlbmNlc1xuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICAgIC8vIEJ1aWxkIGh0bWwgY29kZSBmb3IgYnV0dG9ucyBhbmQgaW5zZXJ0IGludG8gbWFpbiB0ZW1wbGF0ZVxuICAgICAgYnV0dG9uU3RyID0gXCJcIjtcblxuICAgICAgJC5lYWNoKGZpcnN0SXRlbU9wdHMuYnV0dG9ucywgZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xuICAgICAgICBidXR0b25TdHIgKz0gZmlyc3RJdGVtT3B0cy5idG5UcGxbdmFsdWVdIHx8IFwiXCI7XG4gICAgICB9KTtcblxuICAgICAgLy8gQ3JlYXRlIG1hcmt1cCBmcm9tIGJhc2UgdGVtcGxhdGUsIGl0IHdpbGwgYmUgaW5pdGlhbGx5IGhpZGRlbiB0b1xuICAgICAgLy8gYXZvaWQgdW5uZWNlc3Nhcnkgd29yayBsaWtlIHBhaW50aW5nIHdoaWxlIGluaXRpYWxpemluZyBpcyBub3QgY29tcGxldGVcbiAgICAgICRjb250YWluZXIgPSAkKFxuICAgICAgICAgIHNlbGYudHJhbnNsYXRlKFxuICAgICAgICAgICAgc2VsZixcbiAgICAgICAgICAgIGZpcnN0SXRlbU9wdHMuYmFzZVRwbFxuICAgICAgICAgICAgLnJlcGxhY2UoXCJ7e2J1dHRvbnN9fVwiLCBidXR0b25TdHIpXG4gICAgICAgICAgICAucmVwbGFjZShcInt7YXJyb3dzfX1cIiwgZmlyc3RJdGVtT3B0cy5idG5UcGwuYXJyb3dMZWZ0ICsgZmlyc3RJdGVtT3B0cy5idG5UcGwuYXJyb3dSaWdodClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICAgLmF0dHIoXCJpZFwiLCBcImZhbmN5Ym94LWNvbnRhaW5lci1cIiArIHNlbGYuaWQpXG4gICAgICAgIC5hZGRDbGFzcyhmaXJzdEl0ZW1PcHRzLmJhc2VDbGFzcylcbiAgICAgICAgLmRhdGEoXCJGYW5jeUJveFwiLCBzZWxmKVxuICAgICAgICAuYXBwZW5kVG8oZmlyc3RJdGVtT3B0cy5wYXJlbnRFbCk7XG5cbiAgICAgIC8vIENyZWF0ZSBvYmplY3QgaG9sZGluZyByZWZlcmVuY2VzIHRvIGpRdWVyeSB3cmFwcGVkIG5vZGVzXG4gICAgICBzZWxmLiRyZWZzID0ge1xuICAgICAgICBjb250YWluZXI6ICRjb250YWluZXJcbiAgICAgIH07XG5cbiAgICAgIFtcImJnXCIsIFwiaW5uZXJcIiwgXCJpbmZvYmFyXCIsIFwidG9vbGJhclwiLCBcInN0YWdlXCIsIFwiY2FwdGlvblwiLCBcIm5hdmlnYXRpb25cIl0uZm9yRWFjaChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBzZWxmLiRyZWZzW2l0ZW1dID0gJGNvbnRhaW5lci5maW5kKFwiLmZhbmN5Ym94LVwiICsgaXRlbSk7XG4gICAgICB9KTtcblxuICAgICAgc2VsZi50cmlnZ2VyKFwib25Jbml0XCIpO1xuXG4gICAgICAvLyBFbmFibGUgZXZlbnRzLCBkZWFjdGl2ZSBwcmV2aW91cyBpbnN0YW5jZXNcbiAgICAgIHNlbGYuYWN0aXZhdGUoKTtcblxuICAgICAgLy8gQnVpbGQgc2xpZGVzLCBsb2FkIGFuZCByZXZlYWwgY29udGVudFxuICAgICAgc2VsZi5qdW1wVG8oc2VsZi5jdXJySW5kZXgpO1xuICAgIH0sXG5cbiAgICAvLyBTaW1wbGUgaTE4biBzdXBwb3J0IC0gcmVwbGFjZXMgb2JqZWN0IGtleXMgZm91bmQgaW4gdGVtcGxhdGVcbiAgICAvLyB3aXRoIGNvcnJlc3BvbmRpbmcgdmFsdWVzXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICB0cmFuc2xhdGU6IGZ1bmN0aW9uIChvYmosIHN0cikge1xuICAgICAgdmFyIGFyciA9IG9iai5vcHRzLmkxOG5bb2JqLm9wdHMubGFuZ10gfHwgb2JqLm9wdHMuaTE4bi5lbjtcblxuICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHtcXHsoXFx3KylcXH1cXH0vZywgZnVuY3Rpb24gKG1hdGNoLCBuKSB7XG4gICAgICAgIHJldHVybiBhcnJbbl0gPT09IHVuZGVmaW5lZCA/IG1hdGNoIDogYXJyW25dO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8vIFBvcHVsYXRlIGN1cnJlbnQgZ3JvdXAgd2l0aCBmcmVzaCBjb250ZW50XG4gICAgLy8gQ2hlY2sgaWYgZWFjaCBvYmplY3QgaGFzIHZhbGlkIHR5cGUgYW5kIGNvbnRlbnRcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgYWRkQ29udGVudDogZnVuY3Rpb24gKGNvbnRlbnQpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgaXRlbXMgPSAkLm1ha2VBcnJheShjb250ZW50KSxcbiAgICAgICAgdGh1bWJzO1xuXG4gICAgICAkLmVhY2goaXRlbXMsIGZ1bmN0aW9uIChpLCBpdGVtKSB7XG4gICAgICAgIHZhciBvYmogPSB7fSxcbiAgICAgICAgICBvcHRzID0ge30sXG4gICAgICAgICAgJGl0ZW0sXG4gICAgICAgICAgdHlwZSxcbiAgICAgICAgICBmb3VuZCxcbiAgICAgICAgICBzcmMsXG4gICAgICAgICAgc3JjUGFydHM7XG5cbiAgICAgICAgLy8gU3RlcCAxIC0gTWFrZSBzdXJlIHdlIGhhdmUgYW4gb2JqZWN0XG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgICAgIGlmICgkLmlzUGxhaW5PYmplY3QoaXRlbSkpIHtcbiAgICAgICAgICAvLyBXZSBwcm9iYWJseSBoYXZlIG1hbnVhbCB1c2FnZSBoZXJlLCBzb21ldGhpbmcgbGlrZVxuICAgICAgICAgIC8vICQuZmFuY3lib3gub3BlbiggWyB7IHNyYyA6IFwiaW1hZ2UuanBnXCIsIHR5cGUgOiBcImltYWdlXCIgfSBdIClcblxuICAgICAgICAgIG9iaiA9IGl0ZW07XG4gICAgICAgICAgb3B0cyA9IGl0ZW0ub3B0cyB8fCBpdGVtO1xuICAgICAgICB9IGVsc2UgaWYgKCQudHlwZShpdGVtKSA9PT0gXCJvYmplY3RcIiAmJiAkKGl0ZW0pLmxlbmd0aCkge1xuICAgICAgICAgIC8vIEhlcmUgd2UgcHJvYmFibHkgaGF2ZSBqUXVlcnkgY29sbGVjdGlvbiByZXR1cm5lZCBieSBzb21lIHNlbGVjdG9yXG4gICAgICAgICAgJGl0ZW0gPSAkKGl0ZW0pO1xuXG4gICAgICAgICAgLy8gU3VwcG9ydCBhdHRyaWJ1dGVzIGxpa2UgYGRhdGEtb3B0aW9ucz0ne1widG91Y2hcIiA6IGZhbHNlfSdgIGFuZCBgZGF0YS10b3VjaD0nZmFsc2UnYFxuICAgICAgICAgIG9wdHMgPSAkaXRlbS5kYXRhKCkgfHwge307XG4gICAgICAgICAgb3B0cyA9ICQuZXh0ZW5kKHRydWUsIHt9LCBvcHRzLCBvcHRzLm9wdGlvbnMpO1xuXG4gICAgICAgICAgLy8gSGVyZSB3ZSBzdG9yZSBjbGlja2VkIGVsZW1lbnRcbiAgICAgICAgICBvcHRzLiRvcmlnID0gJGl0ZW07XG5cbiAgICAgICAgICBvYmouc3JjID0gc2VsZi5vcHRzLnNyYyB8fCBvcHRzLnNyYyB8fCAkaXRlbS5hdHRyKFwiaHJlZlwiKTtcblxuICAgICAgICAgIC8vIEFzc3VtZSB0aGF0IHNpbXBsZSBzeW50YXggaXMgdXNlZCwgZm9yIGV4YW1wbGU6XG4gICAgICAgICAgLy8gICBgJC5mYW5jeWJveC5vcGVuKCAkKFwiI3Rlc3RcIiksIHt9ICk7YFxuICAgICAgICAgIGlmICghb2JqLnR5cGUgJiYgIW9iai5zcmMpIHtcbiAgICAgICAgICAgIG9iai50eXBlID0gXCJpbmxpbmVcIjtcbiAgICAgICAgICAgIG9iai5zcmMgPSBpdGVtO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBBc3N1bWUgd2UgaGF2ZSBhIHNpbXBsZSBodG1sIGNvZGUsIGZvciBleGFtcGxlOlxuICAgICAgICAgIC8vICAgJC5mYW5jeWJveC5vcGVuKCAnPGRpdj48aDE+SGkhPC9oMT48L2Rpdj4nICk7XG4gICAgICAgICAgb2JqID0ge1xuICAgICAgICAgICAgdHlwZTogXCJodG1sXCIsXG4gICAgICAgICAgICBzcmM6IGl0ZW0gKyBcIlwiXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEVhY2ggZ2FsbGVyeSBvYmplY3QgaGFzIGZ1bGwgY29sbGVjdGlvbiBvZiBvcHRpb25zXG4gICAgICAgIG9iai5vcHRzID0gJC5leHRlbmQodHJ1ZSwge30sIHNlbGYub3B0cywgb3B0cyk7XG5cbiAgICAgICAgLy8gRG8gbm90IG1lcmdlIGJ1dHRvbnMgYXJyYXlcbiAgICAgICAgaWYgKCQuaXNBcnJheShvcHRzLmJ1dHRvbnMpKSB7XG4gICAgICAgICAgb2JqLm9wdHMuYnV0dG9ucyA9IG9wdHMuYnV0dG9ucztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkLmZhbmN5Ym94LmlzTW9iaWxlICYmIG9iai5vcHRzLm1vYmlsZSkge1xuICAgICAgICAgIG9iai5vcHRzID0gbWVyZ2VPcHRzKG9iai5vcHRzLCBvYmoub3B0cy5tb2JpbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gU3RlcCAyIC0gTWFrZSBzdXJlIHdlIGhhdmUgY29udGVudCB0eXBlLCBpZiBub3QgLSB0cnkgdG8gZ3Vlc3NcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgICAgICB0eXBlID0gb2JqLnR5cGUgfHwgb2JqLm9wdHMudHlwZTtcbiAgICAgICAgc3JjID0gb2JqLnNyYyB8fCBcIlwiO1xuXG4gICAgICAgIGlmICghdHlwZSAmJiBzcmMpIHtcbiAgICAgICAgICBpZiAoKGZvdW5kID0gc3JjLm1hdGNoKC9cXC4obXA0fG1vdnxvZ3Z8d2VibSkoKFxcP3wjKS4qKT8kL2kpKSkge1xuICAgICAgICAgICAgdHlwZSA9IFwidmlkZW9cIjtcblxuICAgICAgICAgICAgaWYgKCFvYmoub3B0cy52aWRlby5mb3JtYXQpIHtcbiAgICAgICAgICAgICAgb2JqLm9wdHMudmlkZW8uZm9ybWF0ID0gXCJ2aWRlby9cIiArIChmb3VuZFsxXSA9PT0gXCJvZ3ZcIiA/IFwib2dnXCIgOiBmb3VuZFsxXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChzcmMubWF0Y2goLyheZGF0YTppbWFnZVxcL1thLXowLTkrXFwvPV0qLCl8KFxcLihqcChlfGd8ZWcpfGdpZnxwbmd8Ym1wfHdlYnB8c3ZnfGljbykoKFxcP3wjKS4qKT8kKS9pKSkge1xuICAgICAgICAgICAgdHlwZSA9IFwiaW1hZ2VcIjtcbiAgICAgICAgICB9IGVsc2UgaWYgKHNyYy5tYXRjaCgvXFwuKHBkZikoKFxcP3wjKS4qKT8kL2kpKSB7XG4gICAgICAgICAgICB0eXBlID0gXCJpZnJhbWVcIjtcbiAgICAgICAgICAgIG9iaiA9ICQuZXh0ZW5kKHRydWUsIG9iaiwge1xuICAgICAgICAgICAgICBjb250ZW50VHlwZTogXCJwZGZcIixcbiAgICAgICAgICAgICAgb3B0czoge1xuICAgICAgICAgICAgICAgIGlmcmFtZToge1xuICAgICAgICAgICAgICAgICAgcHJlbG9hZDogZmFsc2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSBpZiAoc3JjLmNoYXJBdCgwKSA9PT0gXCIjXCIpIHtcbiAgICAgICAgICAgIHR5cGUgPSBcImlubGluZVwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0eXBlKSB7XG4gICAgICAgICAgb2JqLnR5cGUgPSB0eXBlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHNlbGYudHJpZ2dlcihcIm9iamVjdE5lZWRzVHlwZVwiLCBvYmopO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFvYmouY29udGVudFR5cGUpIHtcbiAgICAgICAgICBvYmouY29udGVudFR5cGUgPSAkLmluQXJyYXkob2JqLnR5cGUsIFtcImh0bWxcIiwgXCJpbmxpbmVcIiwgXCJhamF4XCJdKSA+IC0xID8gXCJodG1sXCIgOiBvYmoudHlwZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFN0ZXAgMyAtIFNvbWUgYWRqdXN0bWVudHNcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgICAgIG9iai5pbmRleCA9IHNlbGYuZ3JvdXAubGVuZ3RoO1xuXG4gICAgICAgIGlmIChvYmoub3B0cy5zbWFsbEJ0biA9PSBcImF1dG9cIikge1xuICAgICAgICAgIG9iai5vcHRzLnNtYWxsQnRuID0gJC5pbkFycmF5KG9iai50eXBlLCBbXCJodG1sXCIsIFwiaW5saW5lXCIsIFwiYWpheFwiXSkgPiAtMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvYmoub3B0cy50b29sYmFyID09PSBcImF1dG9cIikge1xuICAgICAgICAgIG9iai5vcHRzLnRvb2xiYXIgPSAhb2JqLm9wdHMuc21hbGxCdG47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaW5kIHRodW1ibmFpbCBpbWFnZSwgY2hlY2sgaWYgZXhpc3RzIGFuZCBpZiBpcyBpbiB0aGUgdmlld3BvcnRcbiAgICAgICAgb2JqLiR0aHVtYiA9IG9iai5vcHRzLiR0aHVtYiB8fCBudWxsO1xuXG4gICAgICAgIGlmIChvYmoub3B0cy4kdHJpZ2dlciAmJiBvYmouaW5kZXggPT09IHNlbGYub3B0cy5pbmRleCkge1xuICAgICAgICAgIG9iai4kdGh1bWIgPSBvYmoub3B0cy4kdHJpZ2dlci5maW5kKFwiaW1nOmZpcnN0XCIpO1xuXG4gICAgICAgICAgaWYgKG9iai4kdGh1bWIubGVuZ3RoKSB7XG4gICAgICAgICAgICBvYmoub3B0cy4kb3JpZyA9IG9iai5vcHRzLiR0cmlnZ2VyO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghKG9iai4kdGh1bWIgJiYgb2JqLiR0aHVtYi5sZW5ndGgpICYmIG9iai5vcHRzLiRvcmlnKSB7XG4gICAgICAgICAgb2JqLiR0aHVtYiA9IG9iai5vcHRzLiRvcmlnLmZpbmQoXCJpbWc6Zmlyc3RcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob2JqLiR0aHVtYiAmJiAhb2JqLiR0aHVtYi5sZW5ndGgpIHtcbiAgICAgICAgICBvYmouJHRodW1iID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIG9iai50aHVtYiA9IG9iai5vcHRzLnRodW1iIHx8IChvYmouJHRodW1iID8gb2JqLiR0aHVtYlswXS5zcmMgOiBudWxsKTtcblxuICAgICAgICAvLyBcImNhcHRpb25cIiBpcyBhIFwic3BlY2lhbFwiIG9wdGlvbiwgaXQgY2FuIGJlIHVzZWQgdG8gY3VzdG9taXplIGNhcHRpb24gcGVyIGdhbGxlcnkgaXRlbVxuICAgICAgICBpZiAoJC50eXBlKG9iai5vcHRzLmNhcHRpb24pID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICBvYmoub3B0cy5jYXB0aW9uID0gb2JqLm9wdHMuY2FwdGlvbi5hcHBseShpdGVtLCBbc2VsZiwgb2JqXSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJC50eXBlKHNlbGYub3B0cy5jYXB0aW9uKSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgb2JqLm9wdHMuY2FwdGlvbiA9IHNlbGYub3B0cy5jYXB0aW9uLmFwcGx5KGl0ZW0sIFtzZWxmLCBvYmpdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBoYXZlIGNhcHRpb24gYXMgYSBzdHJpbmcgb3IgalF1ZXJ5IG9iamVjdFxuICAgICAgICBpZiAoIShvYmoub3B0cy5jYXB0aW9uIGluc3RhbmNlb2YgJCkpIHtcbiAgICAgICAgICBvYmoub3B0cy5jYXB0aW9uID0gb2JqLm9wdHMuY2FwdGlvbiA9PT0gdW5kZWZpbmVkID8gXCJcIiA6IG9iai5vcHRzLmNhcHRpb24gKyBcIlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgdXJsIGNvbnRhaW5zIFwiZmlsdGVyXCIgdXNlZCB0byBmaWx0ZXIgdGhlIGNvbnRlbnRcbiAgICAgICAgLy8gRXhhbXBsZTogXCJhamF4Lmh0bWwgI3NvbWV0aGluZ1wiXG4gICAgICAgIGlmIChvYmoudHlwZSA9PT0gXCJhamF4XCIpIHtcbiAgICAgICAgICBzcmNQYXJ0cyA9IHNyYy5zcGxpdCgvXFxzKy8sIDIpO1xuXG4gICAgICAgICAgaWYgKHNyY1BhcnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIG9iai5zcmMgPSBzcmNQYXJ0cy5zaGlmdCgpO1xuXG4gICAgICAgICAgICBvYmoub3B0cy5maWx0ZXIgPSBzcmNQYXJ0cy5zaGlmdCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEhpZGUgYWxsIGJ1dHRvbnMgYW5kIGRpc2FibGUgaW50ZXJhY3Rpdml0eSBmb3IgbW9kYWwgaXRlbXNcbiAgICAgICAgaWYgKG9iai5vcHRzLm1vZGFsKSB7XG4gICAgICAgICAgb2JqLm9wdHMgPSAkLmV4dGVuZCh0cnVlLCBvYmoub3B0cywge1xuICAgICAgICAgICAgdHJhcEZvY3VzOiB0cnVlLFxuICAgICAgICAgICAgLy8gUmVtb3ZlIGJ1dHRvbnNcbiAgICAgICAgICAgIGluZm9iYXI6IDAsXG4gICAgICAgICAgICB0b29sYmFyOiAwLFxuXG4gICAgICAgICAgICBzbWFsbEJ0bjogMCxcblxuICAgICAgICAgICAgLy8gRGlzYWJsZSBrZXlib2FyZCBuYXZpZ2F0aW9uXG4gICAgICAgICAgICBrZXlib2FyZDogMCxcblxuICAgICAgICAgICAgLy8gRGlzYWJsZSBzb21lIG1vZHVsZXNcbiAgICAgICAgICAgIHNsaWRlU2hvdzogMCxcbiAgICAgICAgICAgIGZ1bGxTY3JlZW46IDAsXG4gICAgICAgICAgICB0aHVtYnM6IDAsXG4gICAgICAgICAgICB0b3VjaDogMCxcblxuICAgICAgICAgICAgLy8gRGlzYWJsZSBjbGljayBldmVudCBoYW5kbGVyc1xuICAgICAgICAgICAgY2xpY2tDb250ZW50OiBmYWxzZSxcbiAgICAgICAgICAgIGNsaWNrU2xpZGU6IGZhbHNlLFxuICAgICAgICAgICAgY2xpY2tPdXRzaWRlOiBmYWxzZSxcbiAgICAgICAgICAgIGRibGNsaWNrQ29udGVudDogZmFsc2UsXG4gICAgICAgICAgICBkYmxjbGlja1NsaWRlOiBmYWxzZSxcbiAgICAgICAgICAgIGRibGNsaWNrT3V0c2lkZTogZmFsc2VcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFN0ZXAgNCAtIEFkZCBwcm9jZXNzZWQgb2JqZWN0IHRvIGdyb3VwXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICAgICAgc2VsZi5ncm91cC5wdXNoKG9iaik7XG4gICAgICB9KTtcblxuICAgICAgLy8gVXBkYXRlIGNvbnRyb2xzIGlmIGdhbGxlcnkgaXMgYWxyZWFkeSBvcGVuZWRcbiAgICAgIGlmIChPYmplY3Qua2V5cyhzZWxmLnNsaWRlcykubGVuZ3RoKSB7XG4gICAgICAgIHNlbGYudXBkYXRlQ29udHJvbHMoKTtcblxuICAgICAgICAvLyBVcGRhdGUgdGh1bWJuYWlscywgaWYgbmVlZGVkXG4gICAgICAgIHRodW1icyA9IHNlbGYuVGh1bWJzO1xuXG4gICAgICAgIGlmICh0aHVtYnMgJiYgdGh1bWJzLmlzQWN0aXZlKSB7XG4gICAgICAgICAgdGh1bWJzLmNyZWF0ZSgpO1xuXG4gICAgICAgICAgdGh1bWJzLmZvY3VzKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gQXR0YWNoIGFuIGV2ZW50IGhhbmRsZXIgZnVuY3Rpb25zIGZvcjpcbiAgICAvLyAgIC0gbmF2aWdhdGlvbiBidXR0b25zXG4gICAgLy8gICAtIGJyb3dzZXIgc2Nyb2xsaW5nLCByZXNpemluZztcbiAgICAvLyAgIC0gZm9jdXNpbmdcbiAgICAvLyAgIC0ga2V5Ym9hcmRcbiAgICAvLyAgIC0gZGV0ZWN0aW5nIGluYWN0aXZpdHlcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgYWRkRXZlbnRzOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIHNlbGYucmVtb3ZlRXZlbnRzKCk7XG5cbiAgICAgIC8vIE1ha2UgbmF2aWdhdGlvbiBlbGVtZW50cyBjbGlja2FibGVcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgICAgc2VsZi4kcmVmcy5jb250YWluZXJcbiAgICAgICAgLm9uKFwiY2xpY2suZmItY2xvc2VcIiwgXCJbZGF0YS1mYW5jeWJveC1jbG9zZV1cIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgIHNlbGYuY2xvc2UoZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbihcInRvdWNoc3RhcnQuZmItcHJldiBjbGljay5mYi1wcmV2XCIsIFwiW2RhdGEtZmFuY3lib3gtcHJldl1cIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgIHNlbGYucHJldmlvdXMoKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKFwidG91Y2hzdGFydC5mYi1uZXh0IGNsaWNrLmZiLW5leHRcIiwgXCJbZGF0YS1mYW5jeWJveC1uZXh0XVwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgc2VsZi5uZXh0KCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbihcImNsaWNrLmZiXCIsIFwiW2RhdGEtZmFuY3lib3gtem9vbV1cIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICAvLyBDbGljayBoYW5kbGVyIGZvciB6b29tIGJ1dHRvblxuICAgICAgICAgIHNlbGZbc2VsZi5pc1NjYWxlZERvd24oKSA/IFwic2NhbGVUb0FjdHVhbFwiIDogXCJzY2FsZVRvRml0XCJdKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAvLyBIYW5kbGUgcGFnZSBzY3JvbGxpbmcgYW5kIGJyb3dzZXIgcmVzaXppbmdcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgICAkVy5vbihcIm9yaWVudGF0aW9uY2hhbmdlLmZiIHJlc2l6ZS5mYlwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoZSAmJiBlLm9yaWdpbmFsRXZlbnQgJiYgZS5vcmlnaW5hbEV2ZW50LnR5cGUgPT09IFwicmVzaXplXCIpIHtcbiAgICAgICAgICBpZiAoc2VsZi5yZXF1ZXN0SWQpIHtcbiAgICAgICAgICAgIGNhbmNlbEFGcmFtZShzZWxmLnJlcXVlc3RJZCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2VsZi5yZXF1ZXN0SWQgPSByZXF1ZXN0QUZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHNlbGYudXBkYXRlKGUpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChzZWxmLmN1cnJlbnQgJiYgc2VsZi5jdXJyZW50LnR5cGUgPT09IFwiaWZyYW1lXCIpIHtcbiAgICAgICAgICAgIHNlbGYuJHJlZnMuc3RhZ2UuaGlkZSgpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHNldFRpbWVvdXQoXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHNlbGYuJHJlZnMuc3RhZ2Uuc2hvdygpO1xuXG4gICAgICAgICAgICAgIHNlbGYudXBkYXRlKGUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICQuZmFuY3lib3guaXNNb2JpbGUgPyA2MDAgOiAyNTBcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgJEQub24oXCJrZXlkb3duLmZiXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciBpbnN0YW5jZSA9ICQuZmFuY3lib3ggPyAkLmZhbmN5Ym94LmdldEluc3RhbmNlKCkgOiBudWxsLFxuICAgICAgICAgIGN1cnJlbnQgPSBpbnN0YW5jZS5jdXJyZW50LFxuICAgICAgICAgIGtleWNvZGUgPSBlLmtleUNvZGUgfHwgZS53aGljaDtcblxuICAgICAgICAvLyBUcmFwIGtleWJvYXJkIGZvY3VzIGluc2lkZSBvZiB0aGUgbW9kYWxcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICAgICAgaWYgKGtleWNvZGUgPT0gOSkge1xuICAgICAgICAgIGlmIChjdXJyZW50Lm9wdHMudHJhcEZvY3VzKSB7XG4gICAgICAgICAgICBzZWxmLmZvY3VzKGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEVuYWJsZSBrZXlib2FyZCBuYXZpZ2F0aW9uXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICAgICAgaWYgKCFjdXJyZW50Lm9wdHMua2V5Ym9hcmQgfHwgZS5jdHJsS2V5IHx8IGUuYWx0S2V5IHx8IGUuc2hpZnRLZXkgfHwgJChlLnRhcmdldCkuaXMoXCJpbnB1dCx0ZXh0YXJlYSx2aWRlbyxhdWRpbyxzZWxlY3RcIikpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCYWNrc3BhY2UgYW5kIEVzYyBrZXlzXG4gICAgICAgIGlmIChrZXljb2RlID09PSA4IHx8IGtleWNvZGUgPT09IDI3KSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgc2VsZi5jbG9zZShlKTtcblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIExlZnQgYXJyb3cgYW5kIFVwIGFycm93XG4gICAgICAgIGlmIChrZXljb2RlID09PSAzNyB8fCBrZXljb2RlID09PSAzOCkge1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgIHNlbGYucHJldmlvdXMoKTtcblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJpZ2ggYXJyb3cgYW5kIERvd24gYXJyb3dcbiAgICAgICAgaWYgKGtleWNvZGUgPT09IDM5IHx8IGtleWNvZGUgPT09IDQwKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgc2VsZi5uZXh0KCk7XG5cbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBzZWxmLnRyaWdnZXIoXCJhZnRlcktleWRvd25cIiwgZSwga2V5Y29kZSk7XG4gICAgICB9KTtcblxuICAgICAgLy8gSGlkZSBjb250cm9scyBhZnRlciBzb21lIGluYWN0aXZpdHkgcGVyaW9kXG4gICAgICBpZiAoc2VsZi5ncm91cFtzZWxmLmN1cnJJbmRleF0ub3B0cy5pZGxlVGltZSkge1xuICAgICAgICBzZWxmLmlkbGVTZWNvbmRzQ291bnRlciA9IDA7XG5cbiAgICAgICAgJEQub24oXG4gICAgICAgICAgXCJtb3VzZW1vdmUuZmItaWRsZSBtb3VzZWxlYXZlLmZiLWlkbGUgbW91c2Vkb3duLmZiLWlkbGUgdG91Y2hzdGFydC5mYi1pZGxlIHRvdWNobW92ZS5mYi1pZGxlIHNjcm9sbC5mYi1pZGxlIGtleWRvd24uZmItaWRsZVwiLFxuICAgICAgICAgIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICBzZWxmLmlkbGVTZWNvbmRzQ291bnRlciA9IDA7XG5cbiAgICAgICAgICAgIGlmIChzZWxmLmlzSWRsZSkge1xuICAgICAgICAgICAgICBzZWxmLnNob3dDb250cm9scygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLmlzSWRsZSA9IGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcblxuICAgICAgICBzZWxmLmlkbGVJbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2VsZi5pZGxlU2Vjb25kc0NvdW50ZXIrKztcblxuICAgICAgICAgIGlmIChzZWxmLmlkbGVTZWNvbmRzQ291bnRlciA+PSBzZWxmLmdyb3VwW3NlbGYuY3VyckluZGV4XS5vcHRzLmlkbGVUaW1lICYmICFzZWxmLmlzRHJhZ2dpbmcpIHtcbiAgICAgICAgICAgIHNlbGYuaXNJZGxlID0gdHJ1ZTtcbiAgICAgICAgICAgIHNlbGYuaWRsZVNlY29uZHNDb3VudGVyID0gMDtcblxuICAgICAgICAgICAgc2VsZi5oaWRlQ29udHJvbHMoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMDApO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBSZW1vdmUgZXZlbnRzIGFkZGVkIGJ5IHRoZSBjb3JlXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgcmVtb3ZlRXZlbnRzOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgICRXLm9mZihcIm9yaWVudGF0aW9uY2hhbmdlLmZiIHJlc2l6ZS5mYlwiKTtcbiAgICAgICRELm9mZihcImtleWRvd24uZmIgLmZiLWlkbGVcIik7XG5cbiAgICAgIHRoaXMuJHJlZnMuY29udGFpbmVyLm9mZihcIi5mYi1jbG9zZSAuZmItcHJldiAuZmItbmV4dFwiKTtcblxuICAgICAgaWYgKHNlbGYuaWRsZUludGVydmFsKSB7XG4gICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKHNlbGYuaWRsZUludGVydmFsKTtcblxuICAgICAgICBzZWxmLmlkbGVJbnRlcnZhbCA9IG51bGw7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIENoYW5nZSB0byBwcmV2aW91cyBnYWxsZXJ5IGl0ZW1cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICBwcmV2aW91czogZnVuY3Rpb24gKGR1cmF0aW9uKSB7XG4gICAgICByZXR1cm4gdGhpcy5qdW1wVG8odGhpcy5jdXJyUG9zIC0gMSwgZHVyYXRpb24pO1xuICAgIH0sXG5cbiAgICAvLyBDaGFuZ2UgdG8gbmV4dCBnYWxsZXJ5IGl0ZW1cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIG5leHQ6IGZ1bmN0aW9uIChkdXJhdGlvbikge1xuICAgICAgcmV0dXJuIHRoaXMuanVtcFRvKHRoaXMuY3VyclBvcyArIDEsIGR1cmF0aW9uKTtcbiAgICB9LFxuXG4gICAgLy8gU3dpdGNoIHRvIHNlbGVjdGVkIGdhbGxlcnkgaXRlbVxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIGp1bXBUbzogZnVuY3Rpb24gKHBvcywgZHVyYXRpb24pIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgZ3JvdXBMZW4gPSBzZWxmLmdyb3VwLmxlbmd0aCxcbiAgICAgICAgZmlyc3RSdW4sXG4gICAgICAgIGlzTW92ZWQsXG4gICAgICAgIGxvb3AsXG4gICAgICAgIGN1cnJlbnQsXG4gICAgICAgIHByZXZpb3VzLFxuICAgICAgICBzbGlkZVBvcyxcbiAgICAgICAgc3RhZ2VQb3MsXG4gICAgICAgIHByb3AsXG4gICAgICAgIGRpZmY7XG5cbiAgICAgIGlmIChzZWxmLmlzRHJhZ2dpbmcgfHwgc2VsZi5pc0Nsb3NpbmcgfHwgKHNlbGYuaXNBbmltYXRpbmcgJiYgc2VsZi5maXJzdFJ1bikpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBTaG91bGQgbG9vcD9cbiAgICAgIHBvcyA9IHBhcnNlSW50KHBvcywgMTApO1xuICAgICAgbG9vcCA9IHNlbGYuY3VycmVudCA/IHNlbGYuY3VycmVudC5vcHRzLmxvb3AgOiBzZWxmLm9wdHMubG9vcDtcblxuICAgICAgaWYgKCFsb29wICYmIChwb3MgPCAwIHx8IHBvcyA+PSBncm91cExlbikpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyBDaGVjayBpZiBvcGVuaW5nIGZvciB0aGUgZmlyc3QgdGltZTsgdGhpcyBoZWxwcyB0byBzcGVlZCB0aGluZ3MgdXBcbiAgICAgIGZpcnN0UnVuID0gc2VsZi5maXJzdFJ1biA9ICFPYmplY3Qua2V5cyhzZWxmLnNsaWRlcykubGVuZ3RoO1xuXG4gICAgICAvLyBDcmVhdGUgc2xpZGVzXG4gICAgICBwcmV2aW91cyA9IHNlbGYuY3VycmVudDtcblxuICAgICAgc2VsZi5wcmV2SW5kZXggPSBzZWxmLmN1cnJJbmRleDtcbiAgICAgIHNlbGYucHJldlBvcyA9IHNlbGYuY3VyclBvcztcblxuICAgICAgY3VycmVudCA9IHNlbGYuY3JlYXRlU2xpZGUocG9zKTtcblxuICAgICAgaWYgKGdyb3VwTGVuID4gMSkge1xuICAgICAgICBpZiAobG9vcCB8fCBjdXJyZW50LmluZGV4IDwgZ3JvdXBMZW4gLSAxKSB7XG4gICAgICAgICAgc2VsZi5jcmVhdGVTbGlkZShwb3MgKyAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChsb29wIHx8IGN1cnJlbnQuaW5kZXggPiAwKSB7XG4gICAgICAgICAgc2VsZi5jcmVhdGVTbGlkZShwb3MgLSAxKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzZWxmLmN1cnJlbnQgPSBjdXJyZW50O1xuICAgICAgc2VsZi5jdXJySW5kZXggPSBjdXJyZW50LmluZGV4O1xuICAgICAgc2VsZi5jdXJyUG9zID0gY3VycmVudC5wb3M7XG5cbiAgICAgIHNlbGYudHJpZ2dlcihcImJlZm9yZVNob3dcIiwgZmlyc3RSdW4pO1xuXG4gICAgICBzZWxmLnVwZGF0ZUNvbnRyb2xzKCk7XG5cbiAgICAgIC8vIFZhbGlkYXRlIGR1cmF0aW9uIGxlbmd0aFxuICAgICAgY3VycmVudC5mb3JjZWREdXJhdGlvbiA9IHVuZGVmaW5lZDtcblxuICAgICAgaWYgKCQuaXNOdW1lcmljKGR1cmF0aW9uKSkge1xuICAgICAgICBjdXJyZW50LmZvcmNlZER1cmF0aW9uID0gZHVyYXRpb247XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkdXJhdGlvbiA9IGN1cnJlbnQub3B0c1tmaXJzdFJ1biA/IFwiYW5pbWF0aW9uRHVyYXRpb25cIiA6IFwidHJhbnNpdGlvbkR1cmF0aW9uXCJdO1xuICAgICAgfVxuXG4gICAgICBkdXJhdGlvbiA9IHBhcnNlSW50KGR1cmF0aW9uLCAxMCk7XG5cbiAgICAgIC8vIENoZWNrIGlmIHVzZXIgaGFzIHN3aXBlZCB0aGUgc2xpZGVzIG9yIGlmIHN0aWxsIGFuaW1hdGluZ1xuICAgICAgaXNNb3ZlZCA9IHNlbGYuaXNNb3ZlZChjdXJyZW50KTtcblxuICAgICAgLy8gTWFrZSBzdXJlIGN1cnJlbnQgc2xpZGUgaXMgdmlzaWJsZVxuICAgICAgY3VycmVudC4kc2xpZGUuYWRkQ2xhc3MoXCJmYW5jeWJveC1zbGlkZS0tY3VycmVudFwiKTtcblxuICAgICAgLy8gRnJlc2ggc3RhcnQgLSByZXZlYWwgY29udGFpbmVyLCBjdXJyZW50IHNsaWRlIGFuZCBzdGFydCBsb2FkaW5nIGNvbnRlbnRcbiAgICAgIGlmIChmaXJzdFJ1bikge1xuICAgICAgICBpZiAoY3VycmVudC5vcHRzLmFuaW1hdGlvbkVmZmVjdCAmJiBkdXJhdGlvbikge1xuICAgICAgICAgIHNlbGYuJHJlZnMuY29udGFpbmVyLmNzcyhcInRyYW5zaXRpb24tZHVyYXRpb25cIiwgZHVyYXRpb24gKyBcIm1zXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi4kcmVmcy5jb250YWluZXIuYWRkQ2xhc3MoXCJmYW5jeWJveC1pcy1vcGVuXCIpLnRyaWdnZXIoXCJmb2N1c1wiKTtcblxuICAgICAgICAvLyBBdHRlbXB0IHRvIGxvYWQgY29udGVudCBpbnRvIHNsaWRlXG4gICAgICAgIC8vIFRoaXMgd2lsbCBsYXRlciBjYWxsIGBhZnRlckxvYWRgIC0+IGByZXZlYWxDb250ZW50YFxuICAgICAgICBzZWxmLmxvYWRTbGlkZShjdXJyZW50KTtcblxuICAgICAgICBzZWxmLnByZWxvYWQoXCJpbWFnZVwiKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIEdldCBhY3R1YWwgc2xpZGUvc3RhZ2UgcG9zaXRpb25zIChiZWZvcmUgY2xlYW5pbmcgdXApXG4gICAgICBzbGlkZVBvcyA9ICQuZmFuY3lib3guZ2V0VHJhbnNsYXRlKHByZXZpb3VzLiRzbGlkZSk7XG4gICAgICBzdGFnZVBvcyA9ICQuZmFuY3lib3guZ2V0VHJhbnNsYXRlKHNlbGYuJHJlZnMuc3RhZ2UpO1xuXG4gICAgICAvLyBDbGVhbiB1cCBhbGwgc2xpZGVzXG4gICAgICAkLmVhY2goc2VsZi5zbGlkZXMsIGZ1bmN0aW9uIChpbmRleCwgc2xpZGUpIHtcbiAgICAgICAgJC5mYW5jeWJveC5zdG9wKHNsaWRlLiRzbGlkZSwgdHJ1ZSk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKHByZXZpb3VzLnBvcyAhPT0gY3VycmVudC5wb3MpIHtcbiAgICAgICAgcHJldmlvdXMuaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBwcmV2aW91cy4kc2xpZGUucmVtb3ZlQ2xhc3MoXCJmYW5jeWJveC1zbGlkZS0tY29tcGxldGUgZmFuY3lib3gtc2xpZGUtLWN1cnJlbnRcIik7XG5cbiAgICAgIC8vIElmIHNsaWRlcyBhcmUgb3V0IG9mIHBsYWNlLCB0aGVuIGFuaW1hdGUgdGhlbSB0byBjb3JyZWN0IHBvc2l0aW9uXG4gICAgICBpZiAoaXNNb3ZlZCkge1xuICAgICAgICAvLyBDYWxjdWxhdGUgaG9yaXpvbnRhbCBzd2lwZSBkaXN0YW5jZVxuICAgICAgICBkaWZmID0gc2xpZGVQb3MubGVmdCAtIChwcmV2aW91cy5wb3MgKiBzbGlkZVBvcy53aWR0aCArIHByZXZpb3VzLnBvcyAqIHByZXZpb3VzLm9wdHMuZ3V0dGVyKTtcblxuICAgICAgICAkLmVhY2goc2VsZi5zbGlkZXMsIGZ1bmN0aW9uIChpbmRleCwgc2xpZGUpIHtcbiAgICAgICAgICBzbGlkZS4kc2xpZGUucmVtb3ZlQ2xhc3MoXCJmYW5jeWJveC1hbmltYXRlZFwiKS5yZW1vdmVDbGFzcyhmdW5jdGlvbiAoaW5kZXgsIGNsYXNzTmFtZSkge1xuICAgICAgICAgICAgcmV0dXJuIChjbGFzc05hbWUubWF0Y2goLyhefFxccylmYW5jeWJveC1meC1cXFMrL2cpIHx8IFtdKS5qb2luKFwiIFwiKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGF0IGVhY2ggc2xpZGUgaXMgaW4gZXF1YWwgZGlzdGFuY2VcbiAgICAgICAgICAvLyBUaGlzIGlzIG1vc3RseSBuZWVkZWQgZm9yIGZyZXNobHkgYWRkZWQgc2xpZGVzLCBiZWNhdXNlIHRoZXkgYXJlIG5vdCB5ZXQgcG9zaXRpb25lZFxuICAgICAgICAgIHZhciBsZWZ0UG9zID0gc2xpZGUucG9zICogc2xpZGVQb3Mud2lkdGggKyBzbGlkZS5wb3MgKiBzbGlkZS5vcHRzLmd1dHRlcjtcblxuICAgICAgICAgICQuZmFuY3lib3guc2V0VHJhbnNsYXRlKHNsaWRlLiRzbGlkZSwge1xuICAgICAgICAgICAgdG9wOiAwLFxuICAgICAgICAgICAgbGVmdDogbGVmdFBvcyAtIHN0YWdlUG9zLmxlZnQgKyBkaWZmXG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpZiAoc2xpZGUucG9zICE9PSBjdXJyZW50LnBvcykge1xuICAgICAgICAgICAgc2xpZGUuJHNsaWRlLmFkZENsYXNzKFwiZmFuY3lib3gtc2xpZGUtLVwiICsgKHNsaWRlLnBvcyA+IGN1cnJlbnQucG9zID8gXCJuZXh0XCIgOiBcInByZXZpb3VzXCIpKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBSZWRyYXcgdG8gbWFrZSBzdXJlIHRoYXQgdHJhbnNpdGlvbiB3aWxsIHN0YXJ0XG4gICAgICAgICAgZm9yY2VSZWRyYXcoc2xpZGUuJHNsaWRlKTtcblxuICAgICAgICAgIC8vIEFuaW1hdGUgdGhlIHNsaWRlXG4gICAgICAgICAgJC5mYW5jeWJveC5hbmltYXRlKFxuICAgICAgICAgICAgc2xpZGUuJHNsaWRlLCB7XG4gICAgICAgICAgICAgIHRvcDogMCxcbiAgICAgICAgICAgICAgbGVmdDogKHNsaWRlLnBvcyAtIGN1cnJlbnQucG9zKSAqIHNsaWRlUG9zLndpZHRoICsgKHNsaWRlLnBvcyAtIGN1cnJlbnQucG9zKSAqIHNsaWRlLm9wdHMuZ3V0dGVyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZHVyYXRpb24sXG4gICAgICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgIHNsaWRlLiRzbGlkZVxuICAgICAgICAgICAgICAgIC5jc3Moe1xuICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgb3BhY2l0eTogXCJcIlxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtc2xpZGUtLW5leHQgZmFuY3lib3gtc2xpZGUtLXByZXZpb3VzXCIpO1xuXG4gICAgICAgICAgICAgIGlmIChzbGlkZS5wb3MgPT09IHNlbGYuY3VyclBvcykge1xuICAgICAgICAgICAgICAgIHNlbGYuY29tcGxldGUoKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIGlmIChkdXJhdGlvbiAmJiBjdXJyZW50Lm9wdHMudHJhbnNpdGlvbkVmZmVjdCkge1xuICAgICAgICAvLyBTZXQgdHJhbnNpdGlvbiBlZmZlY3QgZm9yIHByZXZpb3VzbHkgYWN0aXZlIHNsaWRlXG4gICAgICAgIHByb3AgPSBcImZhbmN5Ym94LWFuaW1hdGVkIGZhbmN5Ym94LWZ4LVwiICsgY3VycmVudC5vcHRzLnRyYW5zaXRpb25FZmZlY3Q7XG5cbiAgICAgICAgcHJldmlvdXMuJHNsaWRlLmFkZENsYXNzKFwiZmFuY3lib3gtc2xpZGUtLVwiICsgKHByZXZpb3VzLnBvcyA+IGN1cnJlbnQucG9zID8gXCJuZXh0XCIgOiBcInByZXZpb3VzXCIpKTtcblxuICAgICAgICAkLmZhbmN5Ym94LmFuaW1hdGUoXG4gICAgICAgICAgcHJldmlvdXMuJHNsaWRlLFxuICAgICAgICAgIHByb3AsXG4gICAgICAgICAgZHVyYXRpb24sXG4gICAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcHJldmlvdXMuJHNsaWRlLnJlbW92ZUNsYXNzKHByb3ApLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtc2xpZGUtLW5leHQgZmFuY3lib3gtc2xpZGUtLXByZXZpb3VzXCIpO1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZmFsc2VcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGN1cnJlbnQuaXNMb2FkZWQpIHtcbiAgICAgICAgc2VsZi5yZXZlYWxDb250ZW50KGN1cnJlbnQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5sb2FkU2xpZGUoY3VycmVudCk7XG4gICAgICB9XG5cbiAgICAgIHNlbGYucHJlbG9hZChcImltYWdlXCIpO1xuICAgIH0sXG5cbiAgICAvLyBDcmVhdGUgbmV3IFwic2xpZGVcIiBlbGVtZW50XG4gICAgLy8gVGhlc2UgYXJlIGdhbGxlcnkgaXRlbXMgIHRoYXQgYXJlIGFjdHVhbGx5IGFkZGVkIHRvIERPTVxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIGNyZWF0ZVNsaWRlOiBmdW5jdGlvbiAocG9zKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgICRzbGlkZSxcbiAgICAgICAgaW5kZXg7XG5cbiAgICAgIGluZGV4ID0gcG9zICUgc2VsZi5ncm91cC5sZW5ndGg7XG4gICAgICBpbmRleCA9IGluZGV4IDwgMCA/IHNlbGYuZ3JvdXAubGVuZ3RoICsgaW5kZXggOiBpbmRleDtcblxuICAgICAgaWYgKCFzZWxmLnNsaWRlc1twb3NdICYmIHNlbGYuZ3JvdXBbaW5kZXhdKSB7XG4gICAgICAgICRzbGlkZSA9ICQoJzxkaXYgY2xhc3M9XCJmYW5jeWJveC1zbGlkZVwiPjwvZGl2PicpLmFwcGVuZFRvKHNlbGYuJHJlZnMuc3RhZ2UpO1xuXG4gICAgICAgIHNlbGYuc2xpZGVzW3Bvc10gPSAkLmV4dGVuZCh0cnVlLCB7fSwgc2VsZi5ncm91cFtpbmRleF0sIHtcbiAgICAgICAgICBwb3M6IHBvcyxcbiAgICAgICAgICAkc2xpZGU6ICRzbGlkZSxcbiAgICAgICAgICBpc0xvYWRlZDogZmFsc2VcbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2VsZi51cGRhdGVTbGlkZShzZWxmLnNsaWRlc1twb3NdKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHNlbGYuc2xpZGVzW3Bvc107XG4gICAgfSxcblxuICAgIC8vIFNjYWxlIGltYWdlIHRvIHRoZSBhY3R1YWwgc2l6ZSBvZiB0aGUgaW1hZ2U7XG4gICAgLy8geCBhbmQgeSB2YWx1ZXMgc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBzbGlkZVxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIHNjYWxlVG9BY3R1YWw6IGZ1bmN0aW9uICh4LCB5LCBkdXJhdGlvbikge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBjdXJyZW50ID0gc2VsZi5jdXJyZW50LFxuICAgICAgICAkY29udGVudCA9IGN1cnJlbnQuJGNvbnRlbnQsXG4gICAgICAgIGNhbnZhc1dpZHRoID0gJC5mYW5jeWJveC5nZXRUcmFuc2xhdGUoY3VycmVudC4kc2xpZGUpLndpZHRoLFxuICAgICAgICBjYW52YXNIZWlnaHQgPSAkLmZhbmN5Ym94LmdldFRyYW5zbGF0ZShjdXJyZW50LiRzbGlkZSkuaGVpZ2h0LFxuICAgICAgICBuZXdJbWdXaWR0aCA9IGN1cnJlbnQud2lkdGgsXG4gICAgICAgIG5ld0ltZ0hlaWdodCA9IGN1cnJlbnQuaGVpZ2h0LFxuICAgICAgICBpbWdQb3MsXG4gICAgICAgIHBvc1gsXG4gICAgICAgIHBvc1ksXG4gICAgICAgIHNjYWxlWCxcbiAgICAgICAgc2NhbGVZO1xuXG4gICAgICBpZiAoc2VsZi5pc0FuaW1hdGluZyB8fCBzZWxmLmlzTW92ZWQoKSB8fCAhJGNvbnRlbnQgfHwgIShjdXJyZW50LnR5cGUgPT0gXCJpbWFnZVwiICYmIGN1cnJlbnQuaXNMb2FkZWQgJiYgIWN1cnJlbnQuaGFzRXJyb3IpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2VsZi5pc0FuaW1hdGluZyA9IHRydWU7XG5cbiAgICAgICQuZmFuY3lib3guc3RvcCgkY29udGVudCk7XG5cbiAgICAgIHggPSB4ID09PSB1bmRlZmluZWQgPyBjYW52YXNXaWR0aCAqIDAuNSA6IHg7XG4gICAgICB5ID0geSA9PT0gdW5kZWZpbmVkID8gY2FudmFzSGVpZ2h0ICogMC41IDogeTtcblxuICAgICAgaW1nUG9zID0gJC5mYW5jeWJveC5nZXRUcmFuc2xhdGUoJGNvbnRlbnQpO1xuXG4gICAgICBpbWdQb3MudG9wIC09ICQuZmFuY3lib3guZ2V0VHJhbnNsYXRlKGN1cnJlbnQuJHNsaWRlKS50b3A7XG4gICAgICBpbWdQb3MubGVmdCAtPSAkLmZhbmN5Ym94LmdldFRyYW5zbGF0ZShjdXJyZW50LiRzbGlkZSkubGVmdDtcblxuICAgICAgc2NhbGVYID0gbmV3SW1nV2lkdGggLyBpbWdQb3Mud2lkdGg7XG4gICAgICBzY2FsZVkgPSBuZXdJbWdIZWlnaHQgLyBpbWdQb3MuaGVpZ2h0O1xuXG4gICAgICAvLyBHZXQgY2VudGVyIHBvc2l0aW9uIGZvciBvcmlnaW5hbCBpbWFnZVxuICAgICAgcG9zWCA9IGNhbnZhc1dpZHRoICogMC41IC0gbmV3SW1nV2lkdGggKiAwLjU7XG4gICAgICBwb3NZID0gY2FudmFzSGVpZ2h0ICogMC41IC0gbmV3SW1nSGVpZ2h0ICogMC41O1xuXG4gICAgICAvLyBNYWtlIHN1cmUgaW1hZ2UgZG9lcyBub3QgbW92ZSBhd2F5IGZyb20gZWRnZXNcbiAgICAgIGlmIChuZXdJbWdXaWR0aCA+IGNhbnZhc1dpZHRoKSB7XG4gICAgICAgIHBvc1ggPSBpbWdQb3MubGVmdCAqIHNjYWxlWCAtICh4ICogc2NhbGVYIC0geCk7XG5cbiAgICAgICAgaWYgKHBvc1ggPiAwKSB7XG4gICAgICAgICAgcG9zWCA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocG9zWCA8IGNhbnZhc1dpZHRoIC0gbmV3SW1nV2lkdGgpIHtcbiAgICAgICAgICBwb3NYID0gY2FudmFzV2lkdGggLSBuZXdJbWdXaWR0aDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobmV3SW1nSGVpZ2h0ID4gY2FudmFzSGVpZ2h0KSB7XG4gICAgICAgIHBvc1kgPSBpbWdQb3MudG9wICogc2NhbGVZIC0gKHkgKiBzY2FsZVkgLSB5KTtcblxuICAgICAgICBpZiAocG9zWSA+IDApIHtcbiAgICAgICAgICBwb3NZID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwb3NZIDwgY2FudmFzSGVpZ2h0IC0gbmV3SW1nSGVpZ2h0KSB7XG4gICAgICAgICAgcG9zWSA9IGNhbnZhc0hlaWdodCAtIG5ld0ltZ0hlaWdodDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzZWxmLnVwZGF0ZUN1cnNvcihuZXdJbWdXaWR0aCwgbmV3SW1nSGVpZ2h0KTtcblxuICAgICAgJC5mYW5jeWJveC5hbmltYXRlKFxuICAgICAgICAkY29udGVudCwge1xuICAgICAgICAgIHRvcDogcG9zWSxcbiAgICAgICAgICBsZWZ0OiBwb3NYLFxuICAgICAgICAgIHNjYWxlWDogc2NhbGVYLFxuICAgICAgICAgIHNjYWxlWTogc2NhbGVZXG4gICAgICAgIH0sXG4gICAgICAgIGR1cmF0aW9uIHx8IDM2NixcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHNlbGYuaXNBbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgKTtcblxuICAgICAgLy8gU3RvcCBzbGlkZXNob3dcbiAgICAgIGlmIChzZWxmLlNsaWRlU2hvdyAmJiBzZWxmLlNsaWRlU2hvdy5pc0FjdGl2ZSkge1xuICAgICAgICBzZWxmLlNsaWRlU2hvdy5zdG9wKCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIFNjYWxlIGltYWdlIHRvIGZpdCBpbnNpZGUgcGFyZW50IGVsZW1lbnRcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICBzY2FsZVRvRml0OiBmdW5jdGlvbiAoZHVyYXRpb24pIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgY3VycmVudCA9IHNlbGYuY3VycmVudCxcbiAgICAgICAgJGNvbnRlbnQgPSBjdXJyZW50LiRjb250ZW50LFxuICAgICAgICBlbmQ7XG5cbiAgICAgIGlmIChzZWxmLmlzQW5pbWF0aW5nIHx8IHNlbGYuaXNNb3ZlZCgpIHx8ICEkY29udGVudCB8fCAhKGN1cnJlbnQudHlwZSA9PSBcImltYWdlXCIgJiYgY3VycmVudC5pc0xvYWRlZCAmJiAhY3VycmVudC5oYXNFcnJvcikpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzZWxmLmlzQW5pbWF0aW5nID0gdHJ1ZTtcblxuICAgICAgJC5mYW5jeWJveC5zdG9wKCRjb250ZW50KTtcblxuICAgICAgZW5kID0gc2VsZi5nZXRGaXRQb3MoY3VycmVudCk7XG5cbiAgICAgIHNlbGYudXBkYXRlQ3Vyc29yKGVuZC53aWR0aCwgZW5kLmhlaWdodCk7XG5cbiAgICAgICQuZmFuY3lib3guYW5pbWF0ZShcbiAgICAgICAgJGNvbnRlbnQsIHtcbiAgICAgICAgICB0b3A6IGVuZC50b3AsXG4gICAgICAgICAgbGVmdDogZW5kLmxlZnQsXG4gICAgICAgICAgc2NhbGVYOiBlbmQud2lkdGggLyAkY29udGVudC53aWR0aCgpLFxuICAgICAgICAgIHNjYWxlWTogZW5kLmhlaWdodCAvICRjb250ZW50LmhlaWdodCgpXG4gICAgICAgIH0sXG4gICAgICAgIGR1cmF0aW9uIHx8IDM2NixcbiAgICAgICAgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHNlbGYuaXNBbmltYXRpbmcgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9LFxuXG4gICAgLy8gQ2FsY3VsYXRlIGltYWdlIHNpemUgdG8gZml0IGluc2lkZSB2aWV3cG9ydFxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIGdldEZpdFBvczogZnVuY3Rpb24gKHNsaWRlKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgICRjb250ZW50ID0gc2xpZGUuJGNvbnRlbnQsXG4gICAgICAgICRzbGlkZSA9IHNsaWRlLiRzbGlkZSxcbiAgICAgICAgd2lkdGggPSBzbGlkZS53aWR0aCB8fCBzbGlkZS5vcHRzLndpZHRoLFxuICAgICAgICBoZWlnaHQgPSBzbGlkZS5oZWlnaHQgfHwgc2xpZGUub3B0cy5oZWlnaHQsXG4gICAgICAgIG1heFdpZHRoLFxuICAgICAgICBtYXhIZWlnaHQsXG4gICAgICAgIG1pblJhdGlvLFxuICAgICAgICBhc3BlY3RSYXRpbyxcbiAgICAgICAgcmV6ID0ge307XG5cbiAgICAgIGlmICghc2xpZGUuaXNMb2FkZWQgfHwgISRjb250ZW50IHx8ICEkY29udGVudC5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBtYXhXaWR0aCA9ICQuZmFuY3lib3guZ2V0VHJhbnNsYXRlKHNlbGYuJHJlZnMuc3RhZ2UpLndpZHRoO1xuICAgICAgbWF4SGVpZ2h0ID0gJC5mYW5jeWJveC5nZXRUcmFuc2xhdGUoc2VsZi4kcmVmcy5zdGFnZSkuaGVpZ2h0O1xuXG4gICAgICBtYXhXaWR0aCAtPVxuICAgICAgICBwYXJzZUZsb2F0KCRzbGlkZS5jc3MoXCJwYWRkaW5nTGVmdFwiKSkgK1xuICAgICAgICBwYXJzZUZsb2F0KCRzbGlkZS5jc3MoXCJwYWRkaW5nUmlnaHRcIikpICtcbiAgICAgICAgcGFyc2VGbG9hdCgkY29udGVudC5jc3MoXCJtYXJnaW5MZWZ0XCIpKSArXG4gICAgICAgIHBhcnNlRmxvYXQoJGNvbnRlbnQuY3NzKFwibWFyZ2luUmlnaHRcIikpO1xuXG4gICAgICBtYXhIZWlnaHQgLT1cbiAgICAgICAgcGFyc2VGbG9hdCgkc2xpZGUuY3NzKFwicGFkZGluZ1RvcFwiKSkgK1xuICAgICAgICBwYXJzZUZsb2F0KCRzbGlkZS5jc3MoXCJwYWRkaW5nQm90dG9tXCIpKSArXG4gICAgICAgIHBhcnNlRmxvYXQoJGNvbnRlbnQuY3NzKFwibWFyZ2luVG9wXCIpKSArXG4gICAgICAgIHBhcnNlRmxvYXQoJGNvbnRlbnQuY3NzKFwibWFyZ2luQm90dG9tXCIpKTtcblxuICAgICAgaWYgKCF3aWR0aCB8fCAhaGVpZ2h0KSB7XG4gICAgICAgIHdpZHRoID0gbWF4V2lkdGg7XG4gICAgICAgIGhlaWdodCA9IG1heEhlaWdodDtcbiAgICAgIH1cblxuICAgICAgbWluUmF0aW8gPSBNYXRoLm1pbigxLCBtYXhXaWR0aCAvIHdpZHRoLCBtYXhIZWlnaHQgLyBoZWlnaHQpO1xuXG4gICAgICB3aWR0aCA9IG1pblJhdGlvICogd2lkdGg7XG4gICAgICBoZWlnaHQgPSBtaW5SYXRpbyAqIGhlaWdodDtcblxuICAgICAgLy8gQWRqdXN0IHdpZHRoL2hlaWdodCB0byBwcmVjaXNlbHkgZml0IGludG8gY29udGFpbmVyXG4gICAgICBpZiAod2lkdGggPiBtYXhXaWR0aCAtIDAuNSkge1xuICAgICAgICB3aWR0aCA9IG1heFdpZHRoO1xuICAgICAgfVxuXG4gICAgICBpZiAoaGVpZ2h0ID4gbWF4SGVpZ2h0IC0gMC41KSB7XG4gICAgICAgIGhlaWdodCA9IG1heEhlaWdodDtcbiAgICAgIH1cblxuICAgICAgaWYgKHNsaWRlLnR5cGUgPT09IFwiaW1hZ2VcIikge1xuICAgICAgICByZXoudG9wID0gTWF0aC5mbG9vcigobWF4SGVpZ2h0IC0gaGVpZ2h0KSAqIDAuNSkgKyBwYXJzZUZsb2F0KCRzbGlkZS5jc3MoXCJwYWRkaW5nVG9wXCIpKTtcbiAgICAgICAgcmV6LmxlZnQgPSBNYXRoLmZsb29yKChtYXhXaWR0aCAtIHdpZHRoKSAqIDAuNSkgKyBwYXJzZUZsb2F0KCRzbGlkZS5jc3MoXCJwYWRkaW5nTGVmdFwiKSk7XG4gICAgICB9IGVsc2UgaWYgKHNsaWRlLmNvbnRlbnRUeXBlID09PSBcInZpZGVvXCIpIHtcbiAgICAgICAgLy8gRm9yY2UgYXNwZWN0IHJhdGlvIGZvciB0aGUgdmlkZW9cbiAgICAgICAgLy8gXCJJIHNheSB0aGUgd2hvbGUgd29ybGQgbXVzdCBsZWFybiBvZiBvdXIgcGVhY2VmdWwgd2F5c+KApiBieSBmb3JjZSFcIlxuICAgICAgICBhc3BlY3RSYXRpbyA9IHNsaWRlLm9wdHMud2lkdGggJiYgc2xpZGUub3B0cy5oZWlnaHQgPyB3aWR0aCAvIGhlaWdodCA6IHNsaWRlLm9wdHMucmF0aW8gfHwgMTYgLyA5O1xuXG4gICAgICAgIGlmIChoZWlnaHQgPiB3aWR0aCAvIGFzcGVjdFJhdGlvKSB7XG4gICAgICAgICAgaGVpZ2h0ID0gd2lkdGggLyBhc3BlY3RSYXRpbztcbiAgICAgICAgfSBlbHNlIGlmICh3aWR0aCA+IGhlaWdodCAqIGFzcGVjdFJhdGlvKSB7XG4gICAgICAgICAgd2lkdGggPSBoZWlnaHQgKiBhc3BlY3RSYXRpbztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXoud2lkdGggPSB3aWR0aDtcbiAgICAgIHJlei5oZWlnaHQgPSBoZWlnaHQ7XG5cbiAgICAgIHJldHVybiByZXo7XG4gICAgfSxcblxuICAgIC8vIFVwZGF0ZSBjb250ZW50IHNpemUgYW5kIHBvc2l0aW9uIGZvciBhbGwgc2xpZGVzXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAkLmVhY2goc2VsZi5zbGlkZXMsIGZ1bmN0aW9uIChrZXksIHNsaWRlKSB7XG4gICAgICAgIHNlbGYudXBkYXRlU2xpZGUoc2xpZGUsIGUpO1xuICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8vIFVwZGF0ZSBzbGlkZSBjb250ZW50IHBvc2l0aW9uIGFuZCBzaXplXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIHVwZGF0ZVNsaWRlOiBmdW5jdGlvbiAoc2xpZGUsIGUpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgJGNvbnRlbnQgPSBzbGlkZSAmJiBzbGlkZS4kY29udGVudCxcbiAgICAgICAgd2lkdGggPSBzbGlkZS53aWR0aCB8fCBzbGlkZS5vcHRzLndpZHRoLFxuICAgICAgICBoZWlnaHQgPSBzbGlkZS5oZWlnaHQgfHwgc2xpZGUub3B0cy5oZWlnaHQsXG4gICAgICAgICRzbGlkZSA9IHNsaWRlLiRzbGlkZTtcblxuICAgICAgLy8gRmlyc3QsIHByZXZlbnQgY2FwdGlvbiBvdmVybGFwLCBpZiBuZWVkZWRcbiAgICAgIHNlbGYuYWRqdXN0Q2FwdGlvbihzbGlkZSk7XG5cbiAgICAgIC8vIFRoZW4gcmVzaXplIGNvbnRlbnQgdG8gZml0IGluc2lkZSB0aGUgc2xpZGVcbiAgICAgIGlmICgkY29udGVudCAmJiAod2lkdGggfHwgaGVpZ2h0IHx8IHNsaWRlLmNvbnRlbnRUeXBlID09PSBcInZpZGVvXCIpICYmICFzbGlkZS5oYXNFcnJvcikge1xuICAgICAgICAkLmZhbmN5Ym94LnN0b3AoJGNvbnRlbnQpO1xuXG4gICAgICAgICQuZmFuY3lib3guc2V0VHJhbnNsYXRlKCRjb250ZW50LCBzZWxmLmdldEZpdFBvcyhzbGlkZSkpO1xuXG4gICAgICAgIGlmIChzbGlkZS5wb3MgPT09IHNlbGYuY3VyclBvcykge1xuICAgICAgICAgIHNlbGYuaXNBbmltYXRpbmcgPSBmYWxzZTtcblxuICAgICAgICAgIHNlbGYudXBkYXRlQ3Vyc29yKCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlbiBzb21lIGFkanVzdG1lbnRzXG4gICAgICBzZWxmLmFkanVzdExheW91dChzbGlkZSk7XG5cbiAgICAgIGlmICgkc2xpZGUubGVuZ3RoKSB7XG4gICAgICAgICRzbGlkZS50cmlnZ2VyKFwicmVmcmVzaFwiKTtcblxuICAgICAgICBpZiAoc2xpZGUucG9zID09PSBzZWxmLmN1cnJQb3MpIHtcbiAgICAgICAgICBzZWxmLiRyZWZzLnRvb2xiYXJcbiAgICAgICAgICAgIC5hZGQoc2VsZi4kcmVmcy5uYXZpZ2F0aW9uLmZpbmQoXCIuZmFuY3lib3gtYnV0dG9uLS1hcnJvd19yaWdodFwiKSlcbiAgICAgICAgICAgIC50b2dnbGVDbGFzcyhcImNvbXBlbnNhdGUtZm9yLXNjcm9sbGJhclwiLCAkc2xpZGUuZ2V0KDApLnNjcm9sbEhlaWdodCA+ICRzbGlkZS5nZXQoMCkuY2xpZW50SGVpZ2h0KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzZWxmLnRyaWdnZXIoXCJvblVwZGF0ZVwiLCBzbGlkZSwgZSk7XG4gICAgfSxcblxuICAgIC8vIEhvcml6b250YWxseSBjZW50ZXIgc2xpZGVcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICBjZW50ZXJTbGlkZTogZnVuY3Rpb24gKGR1cmF0aW9uKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGN1cnJlbnQgPSBzZWxmLmN1cnJlbnQsXG4gICAgICAgICRzbGlkZSA9IGN1cnJlbnQuJHNsaWRlO1xuXG4gICAgICBpZiAoc2VsZi5pc0Nsb3NpbmcgfHwgIWN1cnJlbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAkc2xpZGUuc2libGluZ3MoKS5jc3Moe1xuICAgICAgICB0cmFuc2Zvcm06IFwiXCIsXG4gICAgICAgIG9wYWNpdHk6IFwiXCJcbiAgICAgIH0pO1xuXG4gICAgICAkc2xpZGVcbiAgICAgICAgLnBhcmVudCgpXG4gICAgICAgIC5jaGlsZHJlbigpXG4gICAgICAgIC5yZW1vdmVDbGFzcyhcImZhbmN5Ym94LXNsaWRlLS1wcmV2aW91cyBmYW5jeWJveC1zbGlkZS0tbmV4dFwiKTtcblxuICAgICAgJC5mYW5jeWJveC5hbmltYXRlKFxuICAgICAgICAkc2xpZGUsIHtcbiAgICAgICAgICB0b3A6IDAsXG4gICAgICAgICAgbGVmdDogMCxcbiAgICAgICAgICBvcGFjaXR5OiAxXG4gICAgICAgIH0sXG4gICAgICAgIGR1cmF0aW9uID09PSB1bmRlZmluZWQgPyAwIDogZHVyYXRpb24sXG4gICAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAvLyBDbGVhbiB1cFxuICAgICAgICAgICRzbGlkZS5jc3Moe1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBcIlwiLFxuICAgICAgICAgICAgb3BhY2l0eTogXCJcIlxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKCFjdXJyZW50LmlzQ29tcGxldGUpIHtcbiAgICAgICAgICAgIHNlbGYuY29tcGxldGUoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGZhbHNlXG4gICAgICApO1xuICAgIH0sXG5cbiAgICAvLyBDaGVjayBpZiBjdXJyZW50IHNsaWRlIGlzIG1vdmVkIChzd2lwZWQpXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgaXNNb3ZlZDogZnVuY3Rpb24gKHNsaWRlKSB7XG4gICAgICB2YXIgY3VycmVudCA9IHNsaWRlIHx8IHRoaXMuY3VycmVudCxcbiAgICAgICAgc2xpZGVQb3MsXG4gICAgICAgIHN0YWdlUG9zO1xuXG4gICAgICBpZiAoIWN1cnJlbnQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICBzdGFnZVBvcyA9ICQuZmFuY3lib3guZ2V0VHJhbnNsYXRlKHRoaXMuJHJlZnMuc3RhZ2UpO1xuICAgICAgc2xpZGVQb3MgPSAkLmZhbmN5Ym94LmdldFRyYW5zbGF0ZShjdXJyZW50LiRzbGlkZSk7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgICFjdXJyZW50LiRzbGlkZS5oYXNDbGFzcyhcImZhbmN5Ym94LWFuaW1hdGVkXCIpICYmXG4gICAgICAgIChNYXRoLmFicyhzbGlkZVBvcy50b3AgLSBzdGFnZVBvcy50b3ApID4gMC41IHx8IE1hdGguYWJzKHNsaWRlUG9zLmxlZnQgLSBzdGFnZVBvcy5sZWZ0KSA+IDAuNSlcbiAgICAgICk7XG4gICAgfSxcblxuICAgIC8vIFVwZGF0ZSBjdXJzb3Igc3R5bGUgZGVwZW5kaW5nIGlmIGNvbnRlbnQgY2FuIGJlIHpvb21lZFxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgdXBkYXRlQ3Vyc29yOiBmdW5jdGlvbiAobmV4dFdpZHRoLCBuZXh0SGVpZ2h0KSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGN1cnJlbnQgPSBzZWxmLmN1cnJlbnQsXG4gICAgICAgICRjb250YWluZXIgPSBzZWxmLiRyZWZzLmNvbnRhaW5lcixcbiAgICAgICAgY2FuUGFuLFxuICAgICAgICBpc1pvb21hYmxlO1xuXG4gICAgICBpZiAoIWN1cnJlbnQgfHwgc2VsZi5pc0Nsb3NpbmcgfHwgIXNlbGYuR3Vlc3R1cmVzKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgJGNvbnRhaW5lci5yZW1vdmVDbGFzcyhcImZhbmN5Ym94LWlzLXpvb21hYmxlIGZhbmN5Ym94LWNhbi16b29tSW4gZmFuY3lib3gtY2FuLXpvb21PdXQgZmFuY3lib3gtY2FuLXN3aXBlIGZhbmN5Ym94LWNhbi1wYW5cIik7XG5cbiAgICAgIGNhblBhbiA9IHNlbGYuY2FuUGFuKG5leHRXaWR0aCwgbmV4dEhlaWdodCk7XG5cbiAgICAgIGlzWm9vbWFibGUgPSBjYW5QYW4gPyB0cnVlIDogc2VsZi5pc1pvb21hYmxlKCk7XG5cbiAgICAgICRjb250YWluZXIudG9nZ2xlQ2xhc3MoXCJmYW5jeWJveC1pcy16b29tYWJsZVwiLCBpc1pvb21hYmxlKTtcblxuICAgICAgJChcIltkYXRhLWZhbmN5Ym94LXpvb21dXCIpLnByb3AoXCJkaXNhYmxlZFwiLCAhaXNab29tYWJsZSk7XG5cbiAgICAgIGlmIChjYW5QYW4pIHtcbiAgICAgICAgJGNvbnRhaW5lci5hZGRDbGFzcyhcImZhbmN5Ym94LWNhbi1wYW5cIik7XG4gICAgICB9IGVsc2UgaWYgKFxuICAgICAgICBpc1pvb21hYmxlICYmXG4gICAgICAgIChjdXJyZW50Lm9wdHMuY2xpY2tDb250ZW50ID09PSBcInpvb21cIiB8fCAoJC5pc0Z1bmN0aW9uKGN1cnJlbnQub3B0cy5jbGlja0NvbnRlbnQpICYmIGN1cnJlbnQub3B0cy5jbGlja0NvbnRlbnQoY3VycmVudCkgPT0gXCJ6b29tXCIpKVxuICAgICAgKSB7XG4gICAgICAgICRjb250YWluZXIuYWRkQ2xhc3MoXCJmYW5jeWJveC1jYW4tem9vbUluXCIpO1xuICAgICAgfSBlbHNlIGlmIChjdXJyZW50Lm9wdHMudG91Y2ggJiYgKGN1cnJlbnQub3B0cy50b3VjaC52ZXJ0aWNhbCB8fCBzZWxmLmdyb3VwLmxlbmd0aCA+IDEpICYmIGN1cnJlbnQuY29udGVudFR5cGUgIT09IFwidmlkZW9cIikge1xuICAgICAgICAkY29udGFpbmVyLmFkZENsYXNzKFwiZmFuY3lib3gtY2FuLXN3aXBlXCIpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBDaGVjayBpZiBjdXJyZW50IHNsaWRlIGlzIHpvb21hYmxlXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgaXNab29tYWJsZTogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBjdXJyZW50ID0gc2VsZi5jdXJyZW50LFxuICAgICAgICBmaXRQb3M7XG5cbiAgICAgIC8vIEFzc3VtZSB0aGF0IHNsaWRlIGlzIHpvb21hYmxlIGlmOlxuICAgICAgLy8gICAtIGltYWdlIGlzIHN0aWxsIGxvYWRpbmdcbiAgICAgIC8vICAgLSBhY3R1YWwgc2l6ZSBvZiB0aGUgaW1hZ2UgaXMgc21hbGxlciB0aGFuIGF2YWlsYWJsZSBhcmVhXG4gICAgICBpZiAoY3VycmVudCAmJiAhc2VsZi5pc0Nsb3NpbmcgJiYgY3VycmVudC50eXBlID09PSBcImltYWdlXCIgJiYgIWN1cnJlbnQuaGFzRXJyb3IpIHtcbiAgICAgICAgaWYgKCFjdXJyZW50LmlzTG9hZGVkKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBmaXRQb3MgPSBzZWxmLmdldEZpdFBvcyhjdXJyZW50KTtcblxuICAgICAgICBpZiAoZml0UG9zICYmIChjdXJyZW50LndpZHRoID4gZml0UG9zLndpZHRoIHx8IGN1cnJlbnQuaGVpZ2h0ID4gZml0UG9zLmhlaWdodCkpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSxcblxuICAgIC8vIENoZWNrIGlmIGN1cnJlbnQgaW1hZ2UgZGltZW5zaW9ucyBhcmUgc21hbGxlciB0aGFuIGFjdHVhbFxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgaXNTY2FsZWREb3duOiBmdW5jdGlvbiAobmV4dFdpZHRoLCBuZXh0SGVpZ2h0KSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIHJleiA9IGZhbHNlLFxuICAgICAgICBjdXJyZW50ID0gc2VsZi5jdXJyZW50LFxuICAgICAgICAkY29udGVudCA9IGN1cnJlbnQuJGNvbnRlbnQ7XG5cbiAgICAgIGlmIChuZXh0V2lkdGggIT09IHVuZGVmaW5lZCAmJiBuZXh0SGVpZ2h0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV6ID0gbmV4dFdpZHRoIDwgY3VycmVudC53aWR0aCAmJiBuZXh0SGVpZ2h0IDwgY3VycmVudC5oZWlnaHQ7XG4gICAgICB9IGVsc2UgaWYgKCRjb250ZW50KSB7XG4gICAgICAgIHJleiA9ICQuZmFuY3lib3guZ2V0VHJhbnNsYXRlKCRjb250ZW50KTtcbiAgICAgICAgcmV6ID0gcmV6LndpZHRoIDwgY3VycmVudC53aWR0aCAmJiByZXouaGVpZ2h0IDwgY3VycmVudC5oZWlnaHQ7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXo7XG4gICAgfSxcblxuICAgIC8vIENoZWNrIGlmIGltYWdlIGRpbWVuc2lvbnMgZXhjZWVkIHBhcmVudCBlbGVtZW50XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIGNhblBhbjogZnVuY3Rpb24gKG5leHRXaWR0aCwgbmV4dEhlaWdodCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBjdXJyZW50ID0gc2VsZi5jdXJyZW50LFxuICAgICAgICBwb3MgPSBudWxsLFxuICAgICAgICByZXogPSBmYWxzZTtcblxuICAgICAgaWYgKGN1cnJlbnQudHlwZSA9PT0gXCJpbWFnZVwiICYmIChjdXJyZW50LmlzQ29tcGxldGUgfHwgKG5leHRXaWR0aCAmJiBuZXh0SGVpZ2h0KSkgJiYgIWN1cnJlbnQuaGFzRXJyb3IpIHtcbiAgICAgICAgcmV6ID0gc2VsZi5nZXRGaXRQb3MoY3VycmVudCk7XG5cbiAgICAgICAgaWYgKG5leHRXaWR0aCAhPT0gdW5kZWZpbmVkICYmIG5leHRIZWlnaHQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHBvcyA9IHtcbiAgICAgICAgICAgIHdpZHRoOiBuZXh0V2lkdGgsXG4gICAgICAgICAgICBoZWlnaHQ6IG5leHRIZWlnaHRcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKGN1cnJlbnQuaXNDb21wbGV0ZSkge1xuICAgICAgICAgIHBvcyA9ICQuZmFuY3lib3guZ2V0VHJhbnNsYXRlKGN1cnJlbnQuJGNvbnRlbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBvcyAmJiByZXopIHtcbiAgICAgICAgICByZXogPSBNYXRoLmFicyhwb3Mud2lkdGggLSByZXoud2lkdGgpID4gMS41IHx8IE1hdGguYWJzKHBvcy5oZWlnaHQgLSByZXouaGVpZ2h0KSA+IDEuNTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmV6O1xuICAgIH0sXG5cbiAgICAvLyBMb2FkIGNvbnRlbnQgaW50byB0aGUgc2xpZGVcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIGxvYWRTbGlkZTogZnVuY3Rpb24gKHNsaWRlKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIHR5cGUsXG4gICAgICAgICRzbGlkZSxcbiAgICAgICAgYWpheExvYWQ7XG5cbiAgICAgIGlmIChzbGlkZS5pc0xvYWRpbmcgfHwgc2xpZGUuaXNMb2FkZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBzbGlkZS5pc0xvYWRpbmcgPSB0cnVlO1xuXG4gICAgICBpZiAoc2VsZi50cmlnZ2VyKFwiYmVmb3JlTG9hZFwiLCBzbGlkZSkgPT09IGZhbHNlKSB7XG4gICAgICAgIHNsaWRlLmlzTG9hZGluZyA9IGZhbHNlO1xuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgdHlwZSA9IHNsaWRlLnR5cGU7XG4gICAgICAkc2xpZGUgPSBzbGlkZS4kc2xpZGU7XG5cbiAgICAgICRzbGlkZVxuICAgICAgICAub2ZmKFwicmVmcmVzaFwiKVxuICAgICAgICAudHJpZ2dlcihcIm9uUmVzZXRcIilcbiAgICAgICAgLmFkZENsYXNzKHNsaWRlLm9wdHMuc2xpZGVDbGFzcyk7XG5cbiAgICAgIC8vIENyZWF0ZSBjb250ZW50IGRlcGVuZGluZyBvbiB0aGUgdHlwZVxuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgXCJpbWFnZVwiOlxuICAgICAgICAgIHNlbGYuc2V0SW1hZ2Uoc2xpZGUpO1xuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcImlmcmFtZVwiOlxuICAgICAgICAgIHNlbGYuc2V0SWZyYW1lKHNsaWRlKTtcblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJodG1sXCI6XG4gICAgICAgICAgc2VsZi5zZXRDb250ZW50KHNsaWRlLCBzbGlkZS5zcmMgfHwgc2xpZGUuY29udGVudCk7XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwidmlkZW9cIjpcbiAgICAgICAgICBzZWxmLnNldENvbnRlbnQoXG4gICAgICAgICAgICBzbGlkZSxcbiAgICAgICAgICAgIHNsaWRlLm9wdHMudmlkZW8udHBsXG4gICAgICAgICAgICAucmVwbGFjZSgvXFx7XFx7c3JjXFx9XFx9L2dpLCBzbGlkZS5zcmMpXG4gICAgICAgICAgICAucmVwbGFjZShcInt7Zm9ybWF0fX1cIiwgc2xpZGUub3B0cy52aWRlb0Zvcm1hdCB8fCBzbGlkZS5vcHRzLnZpZGVvLmZvcm1hdCB8fCBcIlwiKVxuICAgICAgICAgICAgLnJlcGxhY2UoXCJ7e3Bvc3Rlcn19XCIsIHNsaWRlLnRodW1iIHx8IFwiXCIpXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJpbmxpbmVcIjpcbiAgICAgICAgICBpZiAoJChzbGlkZS5zcmMpLmxlbmd0aCkge1xuICAgICAgICAgICAgc2VsZi5zZXRDb250ZW50KHNsaWRlLCAkKHNsaWRlLnNyYykpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzZWxmLnNldEVycm9yKHNsaWRlKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwiYWpheFwiOlxuICAgICAgICAgIHNlbGYuc2hvd0xvYWRpbmcoc2xpZGUpO1xuXG4gICAgICAgICAgYWpheExvYWQgPSAkLmFqYXgoXG4gICAgICAgICAgICAkLmV4dGVuZCh7fSwgc2xpZGUub3B0cy5hamF4LnNldHRpbmdzLCB7XG4gICAgICAgICAgICAgIHVybDogc2xpZGUuc3JjLFxuICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSwgdGV4dFN0YXR1cykge1xuICAgICAgICAgICAgICAgIGlmICh0ZXh0U3RhdHVzID09PSBcInN1Y2Nlc3NcIikge1xuICAgICAgICAgICAgICAgICAgc2VsZi5zZXRDb250ZW50KHNsaWRlLCBkYXRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMpIHtcbiAgICAgICAgICAgICAgICBpZiAoanFYSFIgJiYgdGV4dFN0YXR1cyAhPT0gXCJhYm9ydFwiKSB7XG4gICAgICAgICAgICAgICAgICBzZWxmLnNldEVycm9yKHNsaWRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgKTtcblxuICAgICAgICAgICRzbGlkZS5vbmUoXCJvblJlc2V0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGFqYXhMb2FkLmFib3J0KCk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHNlbGYuc2V0RXJyb3Ioc2xpZGUpO1xuXG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG5cbiAgICAvLyBVc2UgdGh1bWJuYWlsIGltYWdlLCBpZiBwb3NzaWJsZVxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICBzZXRJbWFnZTogZnVuY3Rpb24gKHNsaWRlKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGdob3N0O1xuXG4gICAgICAvLyBDaGVjayBpZiBuZWVkIHRvIHNob3cgbG9hZGluZyBpY29uXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyICRpbWcgPSBzbGlkZS4kaW1hZ2U7XG5cbiAgICAgICAgaWYgKCFzZWxmLmlzQ2xvc2luZyAmJiBzbGlkZS5pc0xvYWRpbmcgJiYgKCEkaW1nIHx8ICEkaW1nLmxlbmd0aCB8fCAhJGltZ1swXS5jb21wbGV0ZSkgJiYgIXNsaWRlLmhhc0Vycm9yKSB7XG4gICAgICAgICAgc2VsZi5zaG93TG9hZGluZyhzbGlkZSk7XG4gICAgICAgIH1cbiAgICAgIH0sIDUwKTtcblxuICAgICAgLy9DaGVjayBpZiBpbWFnZSBoYXMgc3Jjc2V0XG4gICAgICBzZWxmLmNoZWNrU3Jjc2V0KHNsaWRlKTtcblxuICAgICAgLy8gVGhpcyB3aWxsIGJlIHdyYXBwZXIgY29udGFpbmluZyBib3RoIGdob3N0IGFuZCBhY3R1YWwgaW1hZ2VcbiAgICAgIHNsaWRlLiRjb250ZW50ID0gJCgnPGRpdiBjbGFzcz1cImZhbmN5Ym94LWNvbnRlbnRcIj48L2Rpdj4nKVxuICAgICAgICAuYWRkQ2xhc3MoXCJmYW5jeWJveC1pcy1oaWRkZW5cIilcbiAgICAgICAgLmFwcGVuZFRvKHNsaWRlLiRzbGlkZS5hZGRDbGFzcyhcImZhbmN5Ym94LXNsaWRlLS1pbWFnZVwiKSk7XG5cbiAgICAgIC8vIElmIHdlIGhhdmUgYSB0aHVtYm5haWwsIHdlIGNhbiBkaXNwbGF5IGl0IHdoaWxlIGFjdHVhbCBpbWFnZSBpcyBsb2FkaW5nXG4gICAgICAvLyBVc2VycyB3aWxsIG5vdCBzdGFyZSBhdCBibGFjayBzY3JlZW4gYW5kIGFjdHVhbCBpbWFnZSB3aWxsIGFwcGVhciBncmFkdWFsbHlcbiAgICAgIGlmIChzbGlkZS5vcHRzLnByZWxvYWQgIT09IGZhbHNlICYmIHNsaWRlLm9wdHMud2lkdGggJiYgc2xpZGUub3B0cy5oZWlnaHQgJiYgc2xpZGUudGh1bWIpIHtcbiAgICAgICAgc2xpZGUud2lkdGggPSBzbGlkZS5vcHRzLndpZHRoO1xuICAgICAgICBzbGlkZS5oZWlnaHQgPSBzbGlkZS5vcHRzLmhlaWdodDtcblxuICAgICAgICBnaG9zdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XG5cbiAgICAgICAgZ2hvc3Qub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAkKHRoaXMpLnJlbW92ZSgpO1xuXG4gICAgICAgICAgc2xpZGUuJGdob3N0ID0gbnVsbDtcbiAgICAgICAgfTtcblxuICAgICAgICBnaG9zdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2VsZi5hZnRlckxvYWQoc2xpZGUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHNsaWRlLiRnaG9zdCA9ICQoZ2hvc3QpXG4gICAgICAgICAgLmFkZENsYXNzKFwiZmFuY3lib3gtaW1hZ2VcIilcbiAgICAgICAgICAuYXBwZW5kVG8oc2xpZGUuJGNvbnRlbnQpXG4gICAgICAgICAgLmF0dHIoXCJzcmNcIiwgc2xpZGUudGh1bWIpO1xuICAgICAgfVxuXG4gICAgICAvLyBTdGFydCBsb2FkaW5nIGFjdHVhbCBpbWFnZVxuICAgICAgc2VsZi5zZXRCaWdJbWFnZShzbGlkZSk7XG4gICAgfSxcblxuICAgIC8vIENoZWNrIGlmIGltYWdlIGhhcyBzcmNzZXQgYW5kIGdldCB0aGUgc291cmNlXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAgICBjaGVja1NyY3NldDogZnVuY3Rpb24gKHNsaWRlKSB7XG4gICAgICB2YXIgc3Jjc2V0ID0gc2xpZGUub3B0cy5zcmNzZXQgfHwgc2xpZGUub3B0cy5pbWFnZS5zcmNzZXQsXG4gICAgICAgIGZvdW5kLFxuICAgICAgICB0ZW1wLFxuICAgICAgICBweFJhdGlvLFxuICAgICAgICB3aW5kb3dXaWR0aDtcblxuICAgICAgLy8gSWYgd2UgaGF2ZSBcInNyY3NldFwiLCB0aGVuIHdlIG5lZWQgdG8gZmluZCBmaXJzdCBtYXRjaGluZyBcInNyY1wiIHZhbHVlLlxuICAgICAgLy8gVGhpcyBpcyBuZWNlc3NhcnksIGJlY2F1c2Ugd2hlbiB5b3Ugc2V0IGFuIHNyYyBhdHRyaWJ1dGUsIHRoZSBicm93c2VyIHdpbGwgcHJlbG9hZCB0aGUgaW1hZ2VcbiAgICAgIC8vIGJlZm9yZSBhbnkgamF2YXNjcmlwdCBvciBldmVuIENTUyBpcyBhcHBsaWVkLlxuICAgICAgaWYgKHNyY3NldCkge1xuICAgICAgICBweFJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMTtcbiAgICAgICAgd2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIHB4UmF0aW87XG5cbiAgICAgICAgdGVtcCA9IHNyY3NldC5zcGxpdChcIixcIikubWFwKGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgIHZhciByZXQgPSB7fTtcblxuICAgICAgICAgIGVsLnRyaW0oKVxuICAgICAgICAgICAgLnNwbGl0KC9cXHMrLylcbiAgICAgICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uIChlbCwgaSkge1xuICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBwYXJzZUludChlbC5zdWJzdHJpbmcoMCwgZWwubGVuZ3RoIC0gMSksIDEwKTtcblxuICAgICAgICAgICAgICBpZiAoaSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAocmV0LnVybCA9IGVsKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHJldC5wb3N0Zml4ID0gZWxbZWwubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gU29ydCBieSB2YWx1ZVxuICAgICAgICB0ZW1wLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgICByZXR1cm4gYS52YWx1ZSAtIGIudmFsdWU7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIE9rLCBub3cgd2UgaGF2ZSBhbiBhcnJheSBvZiBhbGwgc3Jjc2V0IHZhbHVlc1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHRlbXAubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICB2YXIgZWwgPSB0ZW1wW2pdO1xuXG4gICAgICAgICAgaWYgKChlbC5wb3N0Zml4ID09PSBcIndcIiAmJiBlbC52YWx1ZSA+PSB3aW5kb3dXaWR0aCkgfHwgKGVsLnBvc3RmaXggPT09IFwieFwiICYmIGVsLnZhbHVlID49IHB4UmF0aW8pKSB7XG4gICAgICAgICAgICBmb3VuZCA9IGVsO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gSWYgbm90IGZvdW5kLCB0YWtlIHRoZSBsYXN0IG9uZVxuICAgICAgICBpZiAoIWZvdW5kICYmIHRlbXAubGVuZ3RoKSB7XG4gICAgICAgICAgZm91bmQgPSB0ZW1wW3RlbXAubGVuZ3RoIC0gMV07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgICBzbGlkZS5zcmMgPSBmb3VuZC51cmw7XG5cbiAgICAgICAgICAvLyBJZiB3ZSBoYXZlIGRlZmF1bHQgd2lkdGgvaGVpZ2h0IHZhbHVlcywgd2UgY2FuIGNhbGN1bGF0ZSBoZWlnaHQgZm9yIG1hdGNoaW5nIHNvdXJjZVxuICAgICAgICAgIGlmIChzbGlkZS53aWR0aCAmJiBzbGlkZS5oZWlnaHQgJiYgZm91bmQucG9zdGZpeCA9PSBcIndcIikge1xuICAgICAgICAgICAgc2xpZGUuaGVpZ2h0ID0gKHNsaWRlLndpZHRoIC8gc2xpZGUuaGVpZ2h0KSAqIGZvdW5kLnZhbHVlO1xuICAgICAgICAgICAgc2xpZGUud2lkdGggPSBmb3VuZC52YWx1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzbGlkZS5vcHRzLnNyY3NldCA9IHNyY3NldDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBDcmVhdGUgZnVsbC1zaXplIGltYWdlXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgc2V0QmlnSW1hZ2U6IGZ1bmN0aW9uIChzbGlkZSkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpLFxuICAgICAgICAkaW1nID0gJChpbWcpO1xuXG4gICAgICBzbGlkZS4kaW1hZ2UgPSAkaW1nXG4gICAgICAgIC5vbmUoXCJlcnJvclwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgc2VsZi5zZXRFcnJvcihzbGlkZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5vbmUoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB2YXIgc2l6ZXM7XG5cbiAgICAgICAgICBpZiAoIXNsaWRlLiRnaG9zdCkge1xuICAgICAgICAgICAgc2VsZi5yZXNvbHZlSW1hZ2VTbGlkZVNpemUoc2xpZGUsIHRoaXMubmF0dXJhbFdpZHRoLCB0aGlzLm5hdHVyYWxIZWlnaHQpO1xuXG4gICAgICAgICAgICBzZWxmLmFmdGVyTG9hZChzbGlkZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNlbGYuaXNDbG9zaW5nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHNsaWRlLm9wdHMuc3Jjc2V0KSB7XG4gICAgICAgICAgICBzaXplcyA9IHNsaWRlLm9wdHMuc2l6ZXM7XG5cbiAgICAgICAgICAgIGlmICghc2l6ZXMgfHwgc2l6ZXMgPT09IFwiYXV0b1wiKSB7XG4gICAgICAgICAgICAgIHNpemVzID1cbiAgICAgICAgICAgICAgICAoc2xpZGUud2lkdGggLyBzbGlkZS5oZWlnaHQgPiAxICYmICRXLndpZHRoKCkgLyAkVy5oZWlnaHQoKSA+IDEgPyBcIjEwMFwiIDogTWF0aC5yb3VuZCgoc2xpZGUud2lkdGggLyBzbGlkZS5oZWlnaHQpICogMTAwKSkgK1xuICAgICAgICAgICAgICAgIFwidndcIjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJGltZy5hdHRyKFwic2l6ZXNcIiwgc2l6ZXMpLmF0dHIoXCJzcmNzZXRcIiwgc2xpZGUub3B0cy5zcmNzZXQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIEhpZGUgdGVtcG9yYXJ5IGltYWdlIGFmdGVyIHNvbWUgZGVsYXlcbiAgICAgICAgICBpZiAoc2xpZGUuJGdob3N0KSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgaWYgKHNsaWRlLiRnaG9zdCAmJiAhc2VsZi5pc0Nsb3NpbmcpIHtcbiAgICAgICAgICAgICAgICBzbGlkZS4kZ2hvc3QuaGlkZSgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCBNYXRoLm1pbigzMDAsIE1hdGgubWF4KDEwMDAsIHNsaWRlLmhlaWdodCAvIDE2MDApKSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2VsZi5oaWRlTG9hZGluZyhzbGlkZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5hZGRDbGFzcyhcImZhbmN5Ym94LWltYWdlXCIpXG4gICAgICAgIC5hdHRyKFwic3JjXCIsIHNsaWRlLnNyYylcbiAgICAgICAgLmFwcGVuZFRvKHNsaWRlLiRjb250ZW50KTtcblxuICAgICAgaWYgKChpbWcuY29tcGxldGUgfHwgaW1nLnJlYWR5U3RhdGUgPT0gXCJjb21wbGV0ZVwiKSAmJiAkaW1nLm5hdHVyYWxXaWR0aCAmJiAkaW1nLm5hdHVyYWxIZWlnaHQpIHtcbiAgICAgICAgJGltZy50cmlnZ2VyKFwibG9hZFwiKTtcbiAgICAgIH0gZWxzZSBpZiAoaW1nLmVycm9yKSB7XG4gICAgICAgICRpbWcudHJpZ2dlcihcImVycm9yXCIpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBDb21wdXRlcyB0aGUgc2xpZGUgc2l6ZSBmcm9tIGltYWdlIHNpemUgYW5kIG1heFdpZHRoL21heEhlaWdodFxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICByZXNvbHZlSW1hZ2VTbGlkZVNpemU6IGZ1bmN0aW9uIChzbGlkZSwgaW1nV2lkdGgsIGltZ0hlaWdodCkge1xuICAgICAgdmFyIG1heFdpZHRoID0gcGFyc2VJbnQoc2xpZGUub3B0cy53aWR0aCwgMTApLFxuICAgICAgICBtYXhIZWlnaHQgPSBwYXJzZUludChzbGlkZS5vcHRzLmhlaWdodCwgMTApO1xuXG4gICAgICAvLyBTZXRzIHRoZSBkZWZhdWx0IHZhbHVlcyBmcm9tIHRoZSBpbWFnZVxuICAgICAgc2xpZGUud2lkdGggPSBpbWdXaWR0aDtcbiAgICAgIHNsaWRlLmhlaWdodCA9IGltZ0hlaWdodDtcblxuICAgICAgaWYgKG1heFdpZHRoID4gMCkge1xuICAgICAgICBzbGlkZS53aWR0aCA9IG1heFdpZHRoO1xuICAgICAgICBzbGlkZS5oZWlnaHQgPSBNYXRoLmZsb29yKChtYXhXaWR0aCAqIGltZ0hlaWdodCkgLyBpbWdXaWR0aCk7XG4gICAgICB9XG5cbiAgICAgIGlmIChtYXhIZWlnaHQgPiAwKSB7XG4gICAgICAgIHNsaWRlLndpZHRoID0gTWF0aC5mbG9vcigobWF4SGVpZ2h0ICogaW1nV2lkdGgpIC8gaW1nSGVpZ2h0KTtcbiAgICAgICAgc2xpZGUuaGVpZ2h0ID0gbWF4SGVpZ2h0O1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBDcmVhdGUgaWZyYW1lIHdyYXBwZXIsIGlmcmFtZSBhbmQgYmluZGluZ3NcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIHNldElmcmFtZTogZnVuY3Rpb24gKHNsaWRlKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIG9wdHMgPSBzbGlkZS5vcHRzLmlmcmFtZSxcbiAgICAgICAgJHNsaWRlID0gc2xpZGUuJHNsaWRlLFxuICAgICAgICAkaWZyYW1lO1xuXG4gICAgICBzbGlkZS4kY29udGVudCA9ICQoJzxkaXYgY2xhc3M9XCJmYW5jeWJveC1jb250ZW50JyArIChvcHRzLnByZWxvYWQgPyBcIiBmYW5jeWJveC1pcy1oaWRkZW5cIiA6IFwiXCIpICsgJ1wiPjwvZGl2PicpXG4gICAgICAgIC5jc3Mob3B0cy5jc3MpXG4gICAgICAgIC5hcHBlbmRUbygkc2xpZGUpO1xuXG4gICAgICAkc2xpZGUuYWRkQ2xhc3MoXCJmYW5jeWJveC1zbGlkZS0tXCIgKyBzbGlkZS5jb250ZW50VHlwZSk7XG5cbiAgICAgIHNsaWRlLiRpZnJhbWUgPSAkaWZyYW1lID0gJChvcHRzLnRwbC5yZXBsYWNlKC9cXHtybmRcXH0vZywgbmV3IERhdGUoKS5nZXRUaW1lKCkpKVxuICAgICAgICAuYXR0cihvcHRzLmF0dHIpXG4gICAgICAgIC5hcHBlbmRUbyhzbGlkZS4kY29udGVudCk7XG5cbiAgICAgIGlmIChvcHRzLnByZWxvYWQpIHtcbiAgICAgICAgc2VsZi5zaG93TG9hZGluZyhzbGlkZSk7XG5cbiAgICAgICAgLy8gVW5mb3J0dW5hdGVseSwgaXQgaXMgbm90IGFsd2F5cyBwb3NzaWJsZSB0byBkZXRlcm1pbmUgaWYgaWZyYW1lIGlzIHN1Y2Nlc3NmdWxseSBsb2FkZWRcbiAgICAgICAgLy8gKGR1ZSB0byBicm93c2VyIHNlY3VyaXR5IHBvbGljeSlcblxuICAgICAgICAkaWZyYW1lLm9uKFwibG9hZC5mYiBlcnJvci5mYlwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAgIHRoaXMuaXNSZWFkeSA9IDE7XG5cbiAgICAgICAgICBzbGlkZS4kc2xpZGUudHJpZ2dlcihcInJlZnJlc2hcIik7XG5cbiAgICAgICAgICBzZWxmLmFmdGVyTG9hZChzbGlkZSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFJlY2FsY3VsYXRlIGlmcmFtZSBjb250ZW50IHNpemVcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgICAgICRzbGlkZS5vbihcInJlZnJlc2guZmJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHZhciAkY29udGVudCA9IHNsaWRlLiRjb250ZW50LFxuICAgICAgICAgICAgZnJhbWVXaWR0aCA9IG9wdHMuY3NzLndpZHRoLFxuICAgICAgICAgICAgZnJhbWVIZWlnaHQgPSBvcHRzLmNzcy5oZWlnaHQsXG4gICAgICAgICAgICAkY29udGVudHMsXG4gICAgICAgICAgICAkYm9keTtcblxuICAgICAgICAgIGlmICgkaWZyYW1lWzBdLmlzUmVhZHkgIT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgJGNvbnRlbnRzID0gJGlmcmFtZS5jb250ZW50cygpO1xuICAgICAgICAgICAgJGJvZHkgPSAkY29udGVudHMuZmluZChcImJvZHlcIik7XG4gICAgICAgICAgfSBjYXRjaCAoaWdub3JlKSB7fVxuXG4gICAgICAgICAgLy8gQ2FsY3VsYXRlIGNvbnRlbnQgZGltZW5zaW9ucywgaWYgaXQgaXMgYWNjZXNzaWJsZVxuICAgICAgICAgIGlmICgkYm9keSAmJiAkYm9keS5sZW5ndGggJiYgJGJvZHkuY2hpbGRyZW4oKS5sZW5ndGgpIHtcbiAgICAgICAgICAgIC8vIEF2b2lkIHNjcm9sbGluZyB0byB0b3AgKGlmIG11bHRpcGxlIGluc3RhbmNlcylcbiAgICAgICAgICAgICRzbGlkZS5jc3MoXCJvdmVyZmxvd1wiLCBcInZpc2libGVcIik7XG5cbiAgICAgICAgICAgICRjb250ZW50LmNzcyh7XG4gICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgICAgICAgICAgXCJtYXgtd2lkdGhcIjogXCIxMDAlXCIsXG4gICAgICAgICAgICAgIGhlaWdodDogXCI5OTk5cHhcIlxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmIChmcmFtZVdpZHRoID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgZnJhbWVXaWR0aCA9IE1hdGguY2VpbChNYXRoLm1heCgkYm9keVswXS5jbGllbnRXaWR0aCwgJGJvZHkub3V0ZXJXaWR0aCh0cnVlKSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkY29udGVudC5jc3MoXCJ3aWR0aFwiLCBmcmFtZVdpZHRoID8gZnJhbWVXaWR0aCA6IFwiXCIpLmNzcyhcIm1heC13aWR0aFwiLCBcIlwiKTtcblxuICAgICAgICAgICAgaWYgKGZyYW1lSGVpZ2h0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgZnJhbWVIZWlnaHQgPSBNYXRoLmNlaWwoTWF0aC5tYXgoJGJvZHlbMF0uY2xpZW50SGVpZ2h0LCAkYm9keS5vdXRlckhlaWdodCh0cnVlKSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkY29udGVudC5jc3MoXCJoZWlnaHRcIiwgZnJhbWVIZWlnaHQgPyBmcmFtZUhlaWdodCA6IFwiXCIpO1xuXG4gICAgICAgICAgICAkc2xpZGUuY3NzKFwib3ZlcmZsb3dcIiwgXCJhdXRvXCIpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgICRjb250ZW50LnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtaXMtaGlkZGVuXCIpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYuYWZ0ZXJMb2FkKHNsaWRlKTtcbiAgICAgIH1cblxuICAgICAgJGlmcmFtZS5hdHRyKFwic3JjXCIsIHNsaWRlLnNyYyk7XG5cbiAgICAgIC8vIFJlbW92ZSBpZnJhbWUgaWYgY2xvc2luZyBvciBjaGFuZ2luZyBnYWxsZXJ5IGl0ZW1cbiAgICAgICRzbGlkZS5vbmUoXCJvblJlc2V0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gVGhpcyBoZWxwcyBJRSBub3QgdG8gdGhyb3cgZXJyb3JzIHdoZW4gY2xvc2luZ1xuICAgICAgICB0cnkge1xuICAgICAgICAgICQodGhpcylcbiAgICAgICAgICAgIC5maW5kKFwiaWZyYW1lXCIpXG4gICAgICAgICAgICAuaGlkZSgpXG4gICAgICAgICAgICAudW5iaW5kKClcbiAgICAgICAgICAgIC5hdHRyKFwic3JjXCIsIFwiLy9hYm91dDpibGFua1wiKTtcbiAgICAgICAgfSBjYXRjaCAoaWdub3JlKSB7fVxuXG4gICAgICAgICQodGhpcylcbiAgICAgICAgICAub2ZmKFwicmVmcmVzaC5mYlwiKVxuICAgICAgICAgIC5lbXB0eSgpO1xuXG4gICAgICAgIHNsaWRlLmlzTG9hZGVkID0gZmFsc2U7XG4gICAgICAgIHNsaWRlLmlzUmV2ZWFsZWQgPSBmYWxzZTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvLyBXcmFwIGFuZCBhcHBlbmQgY29udGVudCB0byB0aGUgc2xpZGVcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgc2V0Q29udGVudDogZnVuY3Rpb24gKHNsaWRlLCBjb250ZW50KSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIGlmIChzZWxmLmlzQ2xvc2luZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNlbGYuaGlkZUxvYWRpbmcoc2xpZGUpO1xuXG4gICAgICBpZiAoc2xpZGUuJGNvbnRlbnQpIHtcbiAgICAgICAgJC5mYW5jeWJveC5zdG9wKHNsaWRlLiRjb250ZW50KTtcbiAgICAgIH1cblxuICAgICAgc2xpZGUuJHNsaWRlLmVtcHR5KCk7XG5cbiAgICAgIC8vIElmIGNvbnRlbnQgaXMgYSBqUXVlcnkgb2JqZWN0LCB0aGVuIGl0IHdpbGwgYmUgbW92ZWQgdG8gdGhlIHNsaWRlLlxuICAgICAgLy8gVGhlIHBsYWNlaG9sZGVyIGlzIGNyZWF0ZWQgc28gd2Ugd2lsbCBrbm93IHdoZXJlIHRvIHB1dCBpdCBiYWNrLlxuICAgICAgaWYgKGlzUXVlcnkoY29udGVudCkgJiYgY29udGVudC5wYXJlbnQoKS5sZW5ndGgpIHtcbiAgICAgICAgLy8gTWFrZSBzdXJlIGNvbnRlbnQgaXMgbm90IGFscmVhZHkgbW92ZWQgdG8gZmFuY3lCb3hcbiAgICAgICAgaWYgKGNvbnRlbnQuaGFzQ2xhc3MoXCJmYW5jeWJveC1jb250ZW50XCIpIHx8IGNvbnRlbnQucGFyZW50KCkuaGFzQ2xhc3MoXCJmYW5jeWJveC1jb250ZW50XCIpKSB7XG4gICAgICAgICAgY29udGVudC5wYXJlbnRzKFwiLmZhbmN5Ym94LXNsaWRlXCIpLnRyaWdnZXIoXCJvblJlc2V0XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ3JlYXRlIHRlbXBvcmFyeSBlbGVtZW50IG1hcmtpbmcgb3JpZ2luYWwgcGxhY2Ugb2YgdGhlIGNvbnRlbnRcbiAgICAgICAgc2xpZGUuJHBsYWNlaG9sZGVyID0gJChcIjxkaXY+XCIpXG4gICAgICAgICAgLmhpZGUoKVxuICAgICAgICAgIC5pbnNlcnRBZnRlcihjb250ZW50KTtcblxuICAgICAgICAvLyBNYWtlIHN1cmUgY29udGVudCBpcyB2aXNpYmxlXG4gICAgICAgIGNvbnRlbnQuY3NzKFwiZGlzcGxheVwiLCBcImlubGluZS1ibG9ja1wiKTtcbiAgICAgIH0gZWxzZSBpZiAoIXNsaWRlLmhhc0Vycm9yKSB7XG4gICAgICAgIC8vIElmIGNvbnRlbnQgaXMganVzdCBhIHBsYWluIHRleHQsIHRyeSB0byBjb252ZXJ0IGl0IHRvIGh0bWxcbiAgICAgICAgaWYgKCQudHlwZShjb250ZW50KSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgIGNvbnRlbnQgPSAkKFwiPGRpdj5cIilcbiAgICAgICAgICAgIC5hcHBlbmQoJC50cmltKGNvbnRlbnQpKVxuICAgICAgICAgICAgLmNvbnRlbnRzKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBcImZpbHRlclwiIG9wdGlvbiBpcyBwcm92aWRlZCwgdGhlbiBmaWx0ZXIgY29udGVudFxuICAgICAgICBpZiAoc2xpZGUub3B0cy5maWx0ZXIpIHtcbiAgICAgICAgICBjb250ZW50ID0gJChcIjxkaXY+XCIpXG4gICAgICAgICAgICAuaHRtbChjb250ZW50KVxuICAgICAgICAgICAgLmZpbmQoc2xpZGUub3B0cy5maWx0ZXIpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHNsaWRlLiRzbGlkZS5vbmUoXCJvblJlc2V0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gUGF1c2UgYWxsIGh0bWw1IHZpZGVvL2F1ZGlvXG4gICAgICAgICQodGhpcylcbiAgICAgICAgICAuZmluZChcInZpZGVvLGF1ZGlvXCIpXG4gICAgICAgICAgLnRyaWdnZXIoXCJwYXVzZVwiKTtcblxuICAgICAgICAvLyBQdXQgY29udGVudCBiYWNrXG4gICAgICAgIGlmIChzbGlkZS4kcGxhY2Vob2xkZXIpIHtcbiAgICAgICAgICBzbGlkZS4kcGxhY2Vob2xkZXIuYWZ0ZXIoY29udGVudC5yZW1vdmVDbGFzcyhcImZhbmN5Ym94LWNvbnRlbnRcIikuaGlkZSgpKS5yZW1vdmUoKTtcblxuICAgICAgICAgIHNsaWRlLiRwbGFjZWhvbGRlciA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBSZW1vdmUgY3VzdG9tIGNsb3NlIGJ1dHRvblxuICAgICAgICBpZiAoc2xpZGUuJHNtYWxsQnRuKSB7XG4gICAgICAgICAgc2xpZGUuJHNtYWxsQnRuLnJlbW92ZSgpO1xuXG4gICAgICAgICAgc2xpZGUuJHNtYWxsQnRuID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFJlbW92ZSBjb250ZW50IGFuZCBtYXJrIHNsaWRlIGFzIG5vdCBsb2FkZWRcbiAgICAgICAgaWYgKCFzbGlkZS5oYXNFcnJvcikge1xuICAgICAgICAgICQodGhpcykuZW1wdHkoKTtcblxuICAgICAgICAgIHNsaWRlLmlzTG9hZGVkID0gZmFsc2U7XG4gICAgICAgICAgc2xpZGUuaXNSZXZlYWxlZCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgJChjb250ZW50KS5hcHBlbmRUbyhzbGlkZS4kc2xpZGUpO1xuXG4gICAgICBpZiAoJChjb250ZW50KS5pcyhcInZpZGVvLGF1ZGlvXCIpKSB7XG4gICAgICAgICQoY29udGVudCkuYWRkQ2xhc3MoXCJmYW5jeWJveC12aWRlb1wiKTtcblxuICAgICAgICAkKGNvbnRlbnQpLndyYXAoXCI8ZGl2PjwvZGl2PlwiKTtcblxuICAgICAgICBzbGlkZS5jb250ZW50VHlwZSA9IFwidmlkZW9cIjtcblxuICAgICAgICBzbGlkZS5vcHRzLndpZHRoID0gc2xpZGUub3B0cy53aWR0aCB8fCAkKGNvbnRlbnQpLmF0dHIoXCJ3aWR0aFwiKTtcbiAgICAgICAgc2xpZGUub3B0cy5oZWlnaHQgPSBzbGlkZS5vcHRzLmhlaWdodCB8fCAkKGNvbnRlbnQpLmF0dHIoXCJoZWlnaHRcIik7XG4gICAgICB9XG5cbiAgICAgIHNsaWRlLiRjb250ZW50ID0gc2xpZGUuJHNsaWRlXG4gICAgICAgIC5jaGlsZHJlbigpXG4gICAgICAgIC5maWx0ZXIoXCJkaXYsZm9ybSxtYWluLHZpZGVvLGF1ZGlvLGFydGljbGUsLmZhbmN5Ym94LWNvbnRlbnRcIilcbiAgICAgICAgLmZpcnN0KCk7XG5cbiAgICAgIHNsaWRlLiRjb250ZW50LnNpYmxpbmdzKCkuaGlkZSgpO1xuXG4gICAgICAvLyBSZS1jaGVjayBpZiB0aGVyZSBpcyBhIHZhbGlkIGNvbnRlbnRcbiAgICAgIC8vIChpbiBzb21lIGNhc2VzLCBhamF4IHJlc3BvbnNlIGNhbiBjb250YWluIHZhcmlvdXMgZWxlbWVudHMgb3IgcGxhaW4gdGV4dClcbiAgICAgIGlmICghc2xpZGUuJGNvbnRlbnQubGVuZ3RoKSB7XG4gICAgICAgIHNsaWRlLiRjb250ZW50ID0gc2xpZGUuJHNsaWRlXG4gICAgICAgICAgLndyYXBJbm5lcihcIjxkaXY+PC9kaXY+XCIpXG4gICAgICAgICAgLmNoaWxkcmVuKClcbiAgICAgICAgICAuZmlyc3QoKTtcbiAgICAgIH1cblxuICAgICAgc2xpZGUuJGNvbnRlbnQuYWRkQ2xhc3MoXCJmYW5jeWJveC1jb250ZW50XCIpO1xuXG4gICAgICBzbGlkZS4kc2xpZGUuYWRkQ2xhc3MoXCJmYW5jeWJveC1zbGlkZS0tXCIgKyBzbGlkZS5jb250ZW50VHlwZSk7XG5cbiAgICAgIHNlbGYuYWZ0ZXJMb2FkKHNsaWRlKTtcbiAgICB9LFxuXG4gICAgLy8gRGlzcGxheSBlcnJvciBtZXNzYWdlXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09XG5cbiAgICBzZXRFcnJvcjogZnVuY3Rpb24gKHNsaWRlKSB7XG4gICAgICBzbGlkZS5oYXNFcnJvciA9IHRydWU7XG5cbiAgICAgIHNsaWRlLiRzbGlkZVxuICAgICAgICAudHJpZ2dlcihcIm9uUmVzZXRcIilcbiAgICAgICAgLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtc2xpZGUtLVwiICsgc2xpZGUuY29udGVudFR5cGUpXG4gICAgICAgIC5hZGRDbGFzcyhcImZhbmN5Ym94LXNsaWRlLS1lcnJvclwiKTtcblxuICAgICAgc2xpZGUuY29udGVudFR5cGUgPSBcImh0bWxcIjtcblxuICAgICAgdGhpcy5zZXRDb250ZW50KHNsaWRlLCB0aGlzLnRyYW5zbGF0ZShzbGlkZSwgc2xpZGUub3B0cy5lcnJvclRwbCkpO1xuXG4gICAgICBpZiAoc2xpZGUucG9zID09PSB0aGlzLmN1cnJQb3MpIHtcbiAgICAgICAgdGhpcy5pc0FuaW1hdGluZyA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBTaG93IGxvYWRpbmcgaWNvbiBpbnNpZGUgdGhlIHNsaWRlXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgc2hvd0xvYWRpbmc6IGZ1bmN0aW9uIChzbGlkZSkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICBzbGlkZSA9IHNsaWRlIHx8IHNlbGYuY3VycmVudDtcblxuICAgICAgaWYgKHNsaWRlICYmICFzbGlkZS4kc3Bpbm5lcikge1xuICAgICAgICBzbGlkZS4kc3Bpbm5lciA9ICQoc2VsZi50cmFuc2xhdGUoc2VsZiwgc2VsZi5vcHRzLnNwaW5uZXJUcGwpKVxuICAgICAgICAgIC5hcHBlbmRUbyhzbGlkZS4kc2xpZGUpXG4gICAgICAgICAgLmhpZGUoKVxuICAgICAgICAgIC5mYWRlSW4oXCJmYXN0XCIpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBSZW1vdmUgbG9hZGluZyBpY29uIGZyb20gdGhlIHNsaWRlXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgaGlkZUxvYWRpbmc6IGZ1bmN0aW9uIChzbGlkZSkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICBzbGlkZSA9IHNsaWRlIHx8IHNlbGYuY3VycmVudDtcblxuICAgICAgaWYgKHNsaWRlICYmIHNsaWRlLiRzcGlubmVyKSB7XG4gICAgICAgIHNsaWRlLiRzcGlubmVyLnN0b3AoKS5yZW1vdmUoKTtcblxuICAgICAgICBkZWxldGUgc2xpZGUuJHNwaW5uZXI7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIEFkanVzdG1lbnRzIGFmdGVyIHNsaWRlIGNvbnRlbnQgaGFzIGJlZW4gbG9hZGVkXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIGFmdGVyTG9hZDogZnVuY3Rpb24gKHNsaWRlKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIGlmIChzZWxmLmlzQ2xvc2luZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHNsaWRlLmlzTG9hZGluZyA9IGZhbHNlO1xuICAgICAgc2xpZGUuaXNMb2FkZWQgPSB0cnVlO1xuXG4gICAgICBzZWxmLnRyaWdnZXIoXCJhZnRlckxvYWRcIiwgc2xpZGUpO1xuXG4gICAgICBzZWxmLmhpZGVMb2FkaW5nKHNsaWRlKTtcblxuICAgICAgLy8gQWRkIHNtYWxsIGNsb3NlIGJ1dHRvblxuICAgICAgaWYgKHNsaWRlLm9wdHMuc21hbGxCdG4gJiYgKCFzbGlkZS4kc21hbGxCdG4gfHwgIXNsaWRlLiRzbWFsbEJ0bi5sZW5ndGgpKSB7XG4gICAgICAgIHNsaWRlLiRzbWFsbEJ0biA9ICQoc2VsZi50cmFuc2xhdGUoc2xpZGUsIHNsaWRlLm9wdHMuYnRuVHBsLnNtYWxsQnRuKSkuYXBwZW5kVG8oc2xpZGUuJGNvbnRlbnQpO1xuICAgICAgfVxuXG4gICAgICAvLyBEaXNhYmxlIHJpZ2h0IGNsaWNrXG4gICAgICBpZiAoc2xpZGUub3B0cy5wcm90ZWN0ICYmIHNsaWRlLiRjb250ZW50ICYmICFzbGlkZS5oYXNFcnJvcikge1xuICAgICAgICBzbGlkZS4kY29udGVudC5vbihcImNvbnRleHRtZW51LmZiXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgaWYgKGUuYnV0dG9uID09IDIpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gQWRkIGZha2UgZWxlbWVudCBvbiB0b3Agb2YgdGhlIGltYWdlXG4gICAgICAgIC8vIFRoaXMgbWFrZXMgYSBiaXQgaGFyZGVyIGZvciB1c2VyIHRvIHNlbGVjdCBpbWFnZVxuICAgICAgICBpZiAoc2xpZGUudHlwZSA9PT0gXCJpbWFnZVwiKSB7XG4gICAgICAgICAgJCgnPGRpdiBjbGFzcz1cImZhbmN5Ym94LXNwYWNlYmFsbFwiPjwvZGl2PicpLmFwcGVuZFRvKHNsaWRlLiRjb250ZW50KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzZWxmLmFkanVzdENhcHRpb24oc2xpZGUpO1xuXG4gICAgICBzZWxmLmFkanVzdExheW91dChzbGlkZSk7XG5cbiAgICAgIGlmIChzbGlkZS5wb3MgPT09IHNlbGYuY3VyclBvcykge1xuICAgICAgICBzZWxmLnVwZGF0ZUN1cnNvcigpO1xuICAgICAgfVxuXG4gICAgICBzZWxmLnJldmVhbENvbnRlbnQoc2xpZGUpO1xuICAgIH0sXG5cbiAgICAvLyBQcmV2ZW50IGNhcHRpb24gb3ZlcmxhcCxcbiAgICAvLyBmaXggY3NzIGluY29uc2lzdGVuY3kgYWNyb3NzIGJyb3dzZXJzXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgYWRqdXN0Q2FwdGlvbjogZnVuY3Rpb24gKHNsaWRlKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGN1cnJlbnQgPSBzbGlkZSB8fCBzZWxmLmN1cnJlbnQsXG4gICAgICAgIGNhcHRpb24gPSBjdXJyZW50Lm9wdHMuY2FwdGlvbixcbiAgICAgICAgcHJldmVudE92ZXJsYXAgPSBjdXJyZW50Lm9wdHMucHJldmVudENhcHRpb25PdmVybGFwLFxuICAgICAgICAkY2FwdGlvbiA9IHNlbGYuJHJlZnMuY2FwdGlvbixcbiAgICAgICAgJGNsb25lLFxuICAgICAgICBjYXB0aW9uSCA9IGZhbHNlO1xuXG4gICAgICAkY2FwdGlvbi50b2dnbGVDbGFzcyhcImZhbmN5Ym94LWNhcHRpb24tLXNlcGFyYXRlXCIsIHByZXZlbnRPdmVybGFwKTtcblxuICAgICAgaWYgKHByZXZlbnRPdmVybGFwICYmIGNhcHRpb24gJiYgY2FwdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgaWYgKGN1cnJlbnQucG9zICE9PSBzZWxmLmN1cnJQb3MpIHtcbiAgICAgICAgICAkY2xvbmUgPSAkY2FwdGlvbi5jbG9uZSgpLmFwcGVuZFRvKCRjYXB0aW9uLnBhcmVudCgpKTtcblxuICAgICAgICAgICRjbG9uZVxuICAgICAgICAgICAgLmNoaWxkcmVuKClcbiAgICAgICAgICAgIC5lcSgwKVxuICAgICAgICAgICAgLmVtcHR5KClcbiAgICAgICAgICAgIC5odG1sKGNhcHRpb24pO1xuXG4gICAgICAgICAgY2FwdGlvbkggPSAkY2xvbmUub3V0ZXJIZWlnaHQodHJ1ZSk7XG5cbiAgICAgICAgICAkY2xvbmUuZW1wdHkoKS5yZW1vdmUoKTtcbiAgICAgICAgfSBlbHNlIGlmIChzZWxmLiRjYXB0aW9uKSB7XG4gICAgICAgICAgY2FwdGlvbkggPSBzZWxmLiRjYXB0aW9uLm91dGVySGVpZ2h0KHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY3VycmVudC4kc2xpZGUuY3NzKFwicGFkZGluZy1ib3R0b21cIiwgY2FwdGlvbkggfHwgXCJcIik7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIFNpbXBsZSBoYWNrIHRvIGZpeCBpbmNvbnNpc3RlbmN5IGFjcm9zcyBicm93c2VycywgZGVzY3JpYmVkIGhlcmUgKGFmZmVjdHMgRWRnZSwgdG9vKTpcbiAgICAvLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD03NDg1MThcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIGFkanVzdExheW91dDogZnVuY3Rpb24gKHNsaWRlKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGN1cnJlbnQgPSBzbGlkZSB8fCBzZWxmLmN1cnJlbnQsXG4gICAgICAgIHNjcm9sbEhlaWdodCxcbiAgICAgICAgbWFyZ2luQm90dG9tLFxuICAgICAgICBpbmxpbmVQYWRkaW5nLFxuICAgICAgICBhY3R1YWxQYWRkaW5nO1xuXG4gICAgICBpZiAoY3VycmVudC5pc0xvYWRlZCAmJiBjdXJyZW50Lm9wdHMuZGlzYWJsZUxheW91dEZpeCAhPT0gdHJ1ZSkge1xuICAgICAgICBjdXJyZW50LiRjb250ZW50LmNzcyhcIm1hcmdpbi1ib3R0b21cIiwgXCJcIik7XG5cbiAgICAgICAgLy8gSWYgd2Ugd291bGQgYWx3YXlzIHNldCBtYXJnaW4tYm90dG9tIGZvciB0aGUgY29udGVudCxcbiAgICAgICAgLy8gdGhlbiBpdCB3b3VsZCBwb3RlbnRpYWxseSBicmVhayB2ZXJ0aWNhbCBhbGlnblxuICAgICAgICBpZiAoY3VycmVudC4kY29udGVudC5vdXRlckhlaWdodCgpID4gY3VycmVudC4kc2xpZGUuaGVpZ2h0KCkgKyAwLjUpIHtcbiAgICAgICAgICBpbmxpbmVQYWRkaW5nID0gY3VycmVudC4kc2xpZGVbMF0uc3R5bGVbXCJwYWRkaW5nLWJvdHRvbVwiXTtcbiAgICAgICAgICBhY3R1YWxQYWRkaW5nID0gY3VycmVudC4kc2xpZGUuY3NzKFwicGFkZGluZy1ib3R0b21cIik7XG5cbiAgICAgICAgICBpZiAocGFyc2VGbG9hdChhY3R1YWxQYWRkaW5nKSA+IDApIHtcbiAgICAgICAgICAgIHNjcm9sbEhlaWdodCA9IGN1cnJlbnQuJHNsaWRlWzBdLnNjcm9sbEhlaWdodDtcblxuICAgICAgICAgICAgY3VycmVudC4kc2xpZGUuY3NzKFwicGFkZGluZy1ib3R0b21cIiwgMCk7XG5cbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhzY3JvbGxIZWlnaHQgLSBjdXJyZW50LiRzbGlkZVswXS5zY3JvbGxIZWlnaHQpIDwgMSkge1xuICAgICAgICAgICAgICBtYXJnaW5Cb3R0b20gPSBhY3R1YWxQYWRkaW5nO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjdXJyZW50LiRzbGlkZS5jc3MoXCJwYWRkaW5nLWJvdHRvbVwiLCBpbmxpbmVQYWRkaW5nKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjdXJyZW50LiRjb250ZW50LmNzcyhcIm1hcmdpbi1ib3R0b21cIiwgbWFyZ2luQm90dG9tKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gTWFrZSBjb250ZW50IHZpc2libGVcbiAgICAvLyBUaGlzIG1ldGhvZCBpcyBjYWxsZWQgcmlnaHQgYWZ0ZXIgY29udGVudCBoYXMgYmVlbiBsb2FkZWQgb3JcbiAgICAvLyB1c2VyIG5hdmlnYXRlcyBnYWxsZXJ5IGFuZCB0cmFuc2l0aW9uIHNob3VsZCBzdGFydFxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgcmV2ZWFsQ29udGVudDogZnVuY3Rpb24gKHNsaWRlKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgICRzbGlkZSA9IHNsaWRlLiRzbGlkZSxcbiAgICAgICAgZW5kID0gZmFsc2UsXG4gICAgICAgIHN0YXJ0ID0gZmFsc2UsXG4gICAgICAgIGlzTW92ZWQgPSBzZWxmLmlzTW92ZWQoc2xpZGUpLFxuICAgICAgICBpc1JldmVhbGVkID0gc2xpZGUuaXNSZXZlYWxlZCxcbiAgICAgICAgZWZmZWN0LFxuICAgICAgICBlZmZlY3RDbGFzc05hbWUsXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICBvcGFjaXR5O1xuXG4gICAgICBzbGlkZS5pc1JldmVhbGVkID0gdHJ1ZTtcblxuICAgICAgZWZmZWN0ID0gc2xpZGUub3B0c1tzZWxmLmZpcnN0UnVuID8gXCJhbmltYXRpb25FZmZlY3RcIiA6IFwidHJhbnNpdGlvbkVmZmVjdFwiXTtcbiAgICAgIGR1cmF0aW9uID0gc2xpZGUub3B0c1tzZWxmLmZpcnN0UnVuID8gXCJhbmltYXRpb25EdXJhdGlvblwiIDogXCJ0cmFuc2l0aW9uRHVyYXRpb25cIl07XG5cbiAgICAgIGR1cmF0aW9uID0gcGFyc2VJbnQoc2xpZGUuZm9yY2VkRHVyYXRpb24gPT09IHVuZGVmaW5lZCA/IGR1cmF0aW9uIDogc2xpZGUuZm9yY2VkRHVyYXRpb24sIDEwKTtcblxuICAgICAgaWYgKGlzTW92ZWQgfHwgc2xpZGUucG9zICE9PSBzZWxmLmN1cnJQb3MgfHwgIWR1cmF0aW9uKSB7XG4gICAgICAgIGVmZmVjdCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyBDaGVjayBpZiBjYW4gem9vbVxuICAgICAgaWYgKGVmZmVjdCA9PT0gXCJ6b29tXCIpIHtcbiAgICAgICAgaWYgKHNsaWRlLnBvcyA9PT0gc2VsZi5jdXJyUG9zICYmIGR1cmF0aW9uICYmIHNsaWRlLnR5cGUgPT09IFwiaW1hZ2VcIiAmJiAhc2xpZGUuaGFzRXJyb3IgJiYgKHN0YXJ0ID0gc2VsZi5nZXRUaHVtYlBvcyhzbGlkZSkpKSB7XG4gICAgICAgICAgZW5kID0gc2VsZi5nZXRGaXRQb3Moc2xpZGUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGVmZmVjdCA9IFwiZmFkZVwiO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFpvb20gYW5pbWF0aW9uXG4gICAgICAvLyA9PT09PT09PT09PT09PVxuICAgICAgaWYgKGVmZmVjdCA9PT0gXCJ6b29tXCIpIHtcbiAgICAgICAgc2VsZi5pc0FuaW1hdGluZyA9IHRydWU7XG5cbiAgICAgICAgZW5kLnNjYWxlWCA9IGVuZC53aWR0aCAvIHN0YXJ0LndpZHRoO1xuICAgICAgICBlbmQuc2NhbGVZID0gZW5kLmhlaWdodCAvIHN0YXJ0LmhlaWdodDtcblxuICAgICAgICAvLyBDaGVjayBpZiB3ZSBuZWVkIHRvIGFuaW1hdGUgb3BhY2l0eVxuICAgICAgICBvcGFjaXR5ID0gc2xpZGUub3B0cy56b29tT3BhY2l0eTtcblxuICAgICAgICBpZiAob3BhY2l0eSA9PSBcImF1dG9cIikge1xuICAgICAgICAgIG9wYWNpdHkgPSBNYXRoLmFicyhzbGlkZS53aWR0aCAvIHNsaWRlLmhlaWdodCAtIHN0YXJ0LndpZHRoIC8gc3RhcnQuaGVpZ2h0KSA+IDAuMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcGFjaXR5KSB7XG4gICAgICAgICAgc3RhcnQub3BhY2l0eSA9IDAuMTtcbiAgICAgICAgICBlbmQub3BhY2l0eSA9IDE7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEcmF3IGltYWdlIGF0IHN0YXJ0IHBvc2l0aW9uXG4gICAgICAgICQuZmFuY3lib3guc2V0VHJhbnNsYXRlKHNsaWRlLiRjb250ZW50LnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtaXMtaGlkZGVuXCIpLCBzdGFydCk7XG5cbiAgICAgICAgZm9yY2VSZWRyYXcoc2xpZGUuJGNvbnRlbnQpO1xuXG4gICAgICAgIC8vIFN0YXJ0IGFuaW1hdGlvblxuICAgICAgICAkLmZhbmN5Ym94LmFuaW1hdGUoc2xpZGUuJGNvbnRlbnQsIGVuZCwgZHVyYXRpb24sIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzZWxmLmlzQW5pbWF0aW5nID0gZmFsc2U7XG5cbiAgICAgICAgICBzZWxmLmNvbXBsZXRlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc2VsZi51cGRhdGVTbGlkZShzbGlkZSk7XG5cbiAgICAgIC8vIFNpbXBseSBzaG93IGNvbnRlbnQgaWYgbm8gZWZmZWN0XG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgICAgaWYgKCFlZmZlY3QpIHtcbiAgICAgICAgc2xpZGUuJGNvbnRlbnQucmVtb3ZlQ2xhc3MoXCJmYW5jeWJveC1pcy1oaWRkZW5cIik7XG5cbiAgICAgICAgaWYgKCFpc1JldmVhbGVkICYmIGlzTW92ZWQgJiYgc2xpZGUudHlwZSA9PT0gXCJpbWFnZVwiICYmICFzbGlkZS5oYXNFcnJvcikge1xuICAgICAgICAgIHNsaWRlLiRjb250ZW50LmhpZGUoKS5mYWRlSW4oXCJmYXN0XCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHNsaWRlLnBvcyA9PT0gc2VsZi5jdXJyUG9zKSB7XG4gICAgICAgICAgc2VsZi5jb21wbGV0ZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBQcmVwYXJlIGZvciBDU1MgdHJhbnNpdG9uXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09XG4gICAgICAkLmZhbmN5Ym94LnN0b3AoJHNsaWRlKTtcblxuICAgICAgLy9lZmZlY3RDbGFzc05hbWUgPSBcImZhbmN5Ym94LWFuaW1hdGVkIGZhbmN5Ym94LXNsaWRlLS1cIiArIChzbGlkZS5wb3MgPj0gc2VsZi5wcmV2UG9zID8gXCJuZXh0XCIgOiBcInByZXZpb3VzXCIpICsgXCIgZmFuY3lib3gtZngtXCIgKyBlZmZlY3Q7XG4gICAgICBlZmZlY3RDbGFzc05hbWUgPSBcImZhbmN5Ym94LXNsaWRlLS1cIiArIChzbGlkZS5wb3MgPj0gc2VsZi5wcmV2UG9zID8gXCJuZXh0XCIgOiBcInByZXZpb3VzXCIpICsgXCIgZmFuY3lib3gtYW5pbWF0ZWQgZmFuY3lib3gtZngtXCIgKyBlZmZlY3Q7XG5cbiAgICAgICRzbGlkZS5hZGRDbGFzcyhlZmZlY3RDbGFzc05hbWUpLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtc2xpZGUtLWN1cnJlbnRcIik7IC8vLmFkZENsYXNzKGVmZmVjdENsYXNzTmFtZSk7XG5cbiAgICAgIHNsaWRlLiRjb250ZW50LnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtaXMtaGlkZGVuXCIpO1xuXG4gICAgICAvLyBGb3JjZSByZWZsb3dcbiAgICAgIGZvcmNlUmVkcmF3KCRzbGlkZSk7XG5cbiAgICAgIGlmIChzbGlkZS50eXBlICE9PSBcImltYWdlXCIpIHtcbiAgICAgICAgc2xpZGUuJGNvbnRlbnQuaGlkZSgpLnNob3coMCk7XG4gICAgICB9XG5cbiAgICAgICQuZmFuY3lib3guYW5pbWF0ZShcbiAgICAgICAgJHNsaWRlLFxuICAgICAgICBcImZhbmN5Ym94LXNsaWRlLS1jdXJyZW50XCIsXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgJHNsaWRlLnJlbW92ZUNsYXNzKGVmZmVjdENsYXNzTmFtZSkuY3NzKHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogXCJcIixcbiAgICAgICAgICAgIG9wYWNpdHk6IFwiXCJcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGlmIChzbGlkZS5wb3MgPT09IHNlbGYuY3VyclBvcykge1xuICAgICAgICAgICAgc2VsZi5jb21wbGV0ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgdHJ1ZVxuICAgICAgKTtcbiAgICB9LFxuXG4gICAgLy8gQ2hlY2sgaWYgd2UgY2FuIGFuZCBoYXZlIHRvIHpvb20gZnJvbSB0aHVtYm5haWxcbiAgICAvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgZ2V0VGh1bWJQb3M6IGZ1bmN0aW9uIChzbGlkZSkge1xuICAgICAgdmFyIHJleiA9IGZhbHNlLFxuICAgICAgICAkdGh1bWIgPSBzbGlkZS4kdGh1bWIsXG4gICAgICAgIHRodW1iUG9zLFxuICAgICAgICBidHcsXG4gICAgICAgIGJydyxcbiAgICAgICAgYmJ3LFxuICAgICAgICBibHc7XG5cbiAgICAgIGlmICghJHRodW1iIHx8ICFpblZpZXdwb3J0KCR0aHVtYlswXSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuXG4gICAgICB0aHVtYlBvcyA9ICQuZmFuY3lib3guZ2V0VHJhbnNsYXRlKCR0aHVtYik7XG5cbiAgICAgIGJ0dyA9IHBhcnNlRmxvYXQoJHRodW1iLmNzcyhcImJvcmRlci10b3Atd2lkdGhcIikgfHwgMCk7XG4gICAgICBicncgPSBwYXJzZUZsb2F0KCR0aHVtYi5jc3MoXCJib3JkZXItcmlnaHQtd2lkdGhcIikgfHwgMCk7XG4gICAgICBiYncgPSBwYXJzZUZsb2F0KCR0aHVtYi5jc3MoXCJib3JkZXItYm90dG9tLXdpZHRoXCIpIHx8IDApO1xuICAgICAgYmx3ID0gcGFyc2VGbG9hdCgkdGh1bWIuY3NzKFwiYm9yZGVyLWxlZnQtd2lkdGhcIikgfHwgMCk7XG5cbiAgICAgIHJleiA9IHtcbiAgICAgICAgdG9wOiB0aHVtYlBvcy50b3AgKyBidHcsXG4gICAgICAgIGxlZnQ6IHRodW1iUG9zLmxlZnQgKyBibHcsXG4gICAgICAgIHdpZHRoOiB0aHVtYlBvcy53aWR0aCAtIGJydyAtIGJsdyxcbiAgICAgICAgaGVpZ2h0OiB0aHVtYlBvcy5oZWlnaHQgLSBidHcgLSBiYncsXG4gICAgICAgIHNjYWxlWDogMSxcbiAgICAgICAgc2NhbGVZOiAxXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gdGh1bWJQb3Mud2lkdGggPiAwICYmIHRodW1iUG9zLmhlaWdodCA+IDAgPyByZXogOiBmYWxzZTtcbiAgICB9LFxuXG4gICAgLy8gRmluYWwgYWRqdXN0bWVudHMgYWZ0ZXIgY3VycmVudCBnYWxsZXJ5IGl0ZW0gaXMgbW92ZWQgdG8gcG9zaXRpb25cbiAgICAvLyBhbmQgaXRgcyBjb250ZW50IGlzIGxvYWRlZFxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgY3VycmVudCA9IHNlbGYuY3VycmVudCxcbiAgICAgICAgc2xpZGVzID0ge30sXG4gICAgICAgICRlbDtcblxuICAgICAgaWYgKHNlbGYuaXNNb3ZlZCgpIHx8ICFjdXJyZW50LmlzTG9hZGVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKCFjdXJyZW50LmlzQ29tcGxldGUpIHtcbiAgICAgICAgY3VycmVudC5pc0NvbXBsZXRlID0gdHJ1ZTtcblxuICAgICAgICBjdXJyZW50LiRzbGlkZS5zaWJsaW5ncygpLnRyaWdnZXIoXCJvblJlc2V0XCIpO1xuXG4gICAgICAgIHNlbGYucHJlbG9hZChcImlubGluZVwiKTtcblxuICAgICAgICAvLyBUcmlnZ2VyIGFueSBDU1MgdHJhbnNpdG9uIGluc2lkZSB0aGUgc2xpZGVcbiAgICAgICAgZm9yY2VSZWRyYXcoY3VycmVudC4kc2xpZGUpO1xuXG4gICAgICAgIGN1cnJlbnQuJHNsaWRlLmFkZENsYXNzKFwiZmFuY3lib3gtc2xpZGUtLWNvbXBsZXRlXCIpO1xuXG4gICAgICAgIC8vIFJlbW92ZSB1bm5lY2Vzc2FyeSBzbGlkZXNcbiAgICAgICAgJC5lYWNoKHNlbGYuc2xpZGVzLCBmdW5jdGlvbiAoa2V5LCBzbGlkZSkge1xuICAgICAgICAgIGlmIChzbGlkZS5wb3MgPj0gc2VsZi5jdXJyUG9zIC0gMSAmJiBzbGlkZS5wb3MgPD0gc2VsZi5jdXJyUG9zICsgMSkge1xuICAgICAgICAgICAgc2xpZGVzW3NsaWRlLnBvc10gPSBzbGlkZTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHNsaWRlKSB7XG4gICAgICAgICAgICAkLmZhbmN5Ym94LnN0b3Aoc2xpZGUuJHNsaWRlKTtcblxuICAgICAgICAgICAgc2xpZGUuJHNsaWRlLm9mZigpLnJlbW92ZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgc2VsZi5zbGlkZXMgPSBzbGlkZXM7XG4gICAgICB9XG5cbiAgICAgIHNlbGYuaXNBbmltYXRpbmcgPSBmYWxzZTtcblxuICAgICAgc2VsZi51cGRhdGVDdXJzb3IoKTtcblxuICAgICAgc2VsZi50cmlnZ2VyKFwiYWZ0ZXJTaG93XCIpO1xuXG4gICAgICAvLyBBdXRvcGxheSBmaXJzdCBodG1sNSB2aWRlby9hdWRpb1xuICAgICAgaWYgKCEhY3VycmVudC5vcHRzLnZpZGVvLmF1dG9TdGFydCkge1xuICAgICAgICBjdXJyZW50LiRzbGlkZVxuICAgICAgICAgIC5maW5kKFwidmlkZW8sYXVkaW9cIilcbiAgICAgICAgICAuZmlsdGVyKFwiOnZpc2libGU6Zmlyc3RcIilcbiAgICAgICAgICAudHJpZ2dlcihcInBsYXlcIilcbiAgICAgICAgICAub25lKFwiZW5kZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKERvY3VtZW50LmV4aXRGdWxsc2NyZWVuKSB7XG4gICAgICAgICAgICAgIERvY3VtZW50LmV4aXRGdWxsc2NyZWVuKCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMud2Via2l0RXhpdEZ1bGxzY3JlZW4pIHtcbiAgICAgICAgICAgICAgdGhpcy53ZWJraXRFeGl0RnVsbHNjcmVlbigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzZWxmLm5leHQoKTtcbiAgICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gVHJ5IHRvIGZvY3VzIG9uIHRoZSBmaXJzdCBmb2N1c2FibGUgZWxlbWVudFxuICAgICAgaWYgKGN1cnJlbnQub3B0cy5hdXRvRm9jdXMgJiYgY3VycmVudC5jb250ZW50VHlwZSA9PT0gXCJodG1sXCIpIHtcbiAgICAgICAgLy8gTG9vayBmb3IgdGhlIGZpcnN0IGlucHV0IHdpdGggYXV0b2ZvY3VzIGF0dHJpYnV0ZVxuICAgICAgICAkZWwgPSBjdXJyZW50LiRjb250ZW50LmZpbmQoXCJpbnB1dFthdXRvZm9jdXNdOmVuYWJsZWQ6dmlzaWJsZTpmaXJzdFwiKTtcblxuICAgICAgICBpZiAoJGVsLmxlbmd0aCkge1xuICAgICAgICAgICRlbC50cmlnZ2VyKFwiZm9jdXNcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc2VsZi5mb2N1cyhudWxsLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBBdm9pZCBqdW1waW5nXG4gICAgICBjdXJyZW50LiRzbGlkZS5zY3JvbGxUb3AoMCkuc2Nyb2xsTGVmdCgwKTtcbiAgICB9LFxuXG4gICAgLy8gUHJlbG9hZCBuZXh0IGFuZCBwcmV2aW91cyBzbGlkZXNcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgcHJlbG9hZDogZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgcHJldixcbiAgICAgICAgbmV4dDtcblxuICAgICAgaWYgKHNlbGYuZ3JvdXAubGVuZ3RoIDwgMikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIG5leHQgPSBzZWxmLnNsaWRlc1tzZWxmLmN1cnJQb3MgKyAxXTtcbiAgICAgIHByZXYgPSBzZWxmLnNsaWRlc1tzZWxmLmN1cnJQb3MgLSAxXTtcblxuICAgICAgaWYgKHByZXYgJiYgcHJldi50eXBlID09PSB0eXBlKSB7XG4gICAgICAgIHNlbGYubG9hZFNsaWRlKHByZXYpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmV4dCAmJiBuZXh0LnR5cGUgPT09IHR5cGUpIHtcbiAgICAgICAgc2VsZi5sb2FkU2xpZGUobmV4dCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIFRyeSB0byBmaW5kIGFuZCBmb2N1cyBvbiB0aGUgZmlyc3QgZm9jdXNhYmxlIGVsZW1lbnRcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICBmb2N1czogZnVuY3Rpb24gKGUsIGZpcnN0UnVuKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGZvY3VzYWJsZVN0ciA9IFtcbiAgICAgICAgICBcImFbaHJlZl1cIixcbiAgICAgICAgICBcImFyZWFbaHJlZl1cIixcbiAgICAgICAgICAnaW5wdXQ6bm90KFtkaXNhYmxlZF0pOm5vdChbdHlwZT1cImhpZGRlblwiXSk6bm90KFthcmlhLWhpZGRlbl0pJyxcbiAgICAgICAgICBcInNlbGVjdDpub3QoW2Rpc2FibGVkXSk6bm90KFthcmlhLWhpZGRlbl0pXCIsXG4gICAgICAgICAgXCJ0ZXh0YXJlYTpub3QoW2Rpc2FibGVkXSk6bm90KFthcmlhLWhpZGRlbl0pXCIsXG4gICAgICAgICAgXCJidXR0b246bm90KFtkaXNhYmxlZF0pOm5vdChbYXJpYS1oaWRkZW5dKVwiLFxuICAgICAgICAgIFwiaWZyYW1lXCIsXG4gICAgICAgICAgXCJvYmplY3RcIixcbiAgICAgICAgICBcImVtYmVkXCIsXG4gICAgICAgICAgXCJ2aWRlb1wiLFxuICAgICAgICAgIFwiYXVkaW9cIixcbiAgICAgICAgICBcIltjb250ZW50ZWRpdGFibGVdXCIsXG4gICAgICAgICAgJ1t0YWJpbmRleF06bm90KFt0YWJpbmRleF49XCItXCJdKSdcbiAgICAgICAgXS5qb2luKFwiLFwiKSxcbiAgICAgICAgZm9jdXNhYmxlSXRlbXMsXG4gICAgICAgIGZvY3VzZWRJdGVtSW5kZXg7XG5cbiAgICAgIGlmIChzZWxmLmlzQ2xvc2luZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChlIHx8ICFzZWxmLmN1cnJlbnQgfHwgIXNlbGYuY3VycmVudC5pc0NvbXBsZXRlKSB7XG4gICAgICAgIC8vIEZvY3VzIG9uIGFueSBlbGVtZW50IGluc2lkZSBmYW5jeWJveFxuICAgICAgICBmb2N1c2FibGVJdGVtcyA9IHNlbGYuJHJlZnMuY29udGFpbmVyLmZpbmQoXCIqOnZpc2libGVcIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBGb2N1cyBpbnNpZGUgY3VycmVudCBzbGlkZVxuICAgICAgICBmb2N1c2FibGVJdGVtcyA9IHNlbGYuY3VycmVudC4kc2xpZGUuZmluZChcIio6dmlzaWJsZVwiICsgKGZpcnN0UnVuID8gXCI6bm90KC5mYW5jeWJveC1jbG9zZS1zbWFsbClcIiA6IFwiXCIpKTtcbiAgICAgIH1cblxuICAgICAgZm9jdXNhYmxlSXRlbXMgPSBmb2N1c2FibGVJdGVtcy5maWx0ZXIoZm9jdXNhYmxlU3RyKS5maWx0ZXIoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gJCh0aGlzKS5jc3MoXCJ2aXNpYmlsaXR5XCIpICE9PSBcImhpZGRlblwiICYmICEkKHRoaXMpLmhhc0NsYXNzKFwiZGlzYWJsZWRcIik7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGZvY3VzYWJsZUl0ZW1zLmxlbmd0aCkge1xuICAgICAgICBmb2N1c2VkSXRlbUluZGV4ID0gZm9jdXNhYmxlSXRlbXMuaW5kZXgoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCk7XG5cbiAgICAgICAgaWYgKGUgJiYgZS5zaGlmdEtleSkge1xuICAgICAgICAgIC8vIEJhY2sgdGFiXG4gICAgICAgICAgaWYgKGZvY3VzZWRJdGVtSW5kZXggPCAwIHx8IGZvY3VzZWRJdGVtSW5kZXggPT0gMCkge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBmb2N1c2FibGVJdGVtcy5lcShmb2N1c2FibGVJdGVtcy5sZW5ndGggLSAxKS50cmlnZ2VyKFwiZm9jdXNcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIE91dHNpZGUgb3IgRm9yd2FyZCB0YWJcbiAgICAgICAgICBpZiAoZm9jdXNlZEl0ZW1JbmRleCA8IDAgfHwgZm9jdXNlZEl0ZW1JbmRleCA9PSBmb2N1c2FibGVJdGVtcy5sZW5ndGggLSAxKSB7XG4gICAgICAgICAgICBpZiAoZSkge1xuICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvY3VzYWJsZUl0ZW1zLmVxKDApLnRyaWdnZXIoXCJmb2N1c1wiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYuJHJlZnMuY29udGFpbmVyLnRyaWdnZXIoXCJmb2N1c1wiKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gQWN0aXZhdGVzIGN1cnJlbnQgaW5zdGFuY2UgLSBicmluZ3MgY29udGFpbmVyIHRvIHRoZSBmcm9udCBhbmQgZW5hYmxlcyBrZXlib2FyZCxcbiAgICAvLyBub3RpZmllcyBvdGhlciBpbnN0YW5jZXMgYWJvdXQgZGVhY3RpdmF0aW5nXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICBhY3RpdmF0ZTogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAvLyBEZWFjdGl2YXRlIGFsbCBpbnN0YW5jZXNcbiAgICAgICQoXCIuZmFuY3lib3gtY29udGFpbmVyXCIpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgaW5zdGFuY2UgPSAkKHRoaXMpLmRhdGEoXCJGYW5jeUJveFwiKTtcblxuICAgICAgICAvLyBTa2lwIHNlbGYgYW5kIGNsb3NpbmcgaW5zdGFuY2VzXG4gICAgICAgIGlmIChpbnN0YW5jZSAmJiBpbnN0YW5jZS5pZCAhPT0gc2VsZi5pZCAmJiAhaW5zdGFuY2UuaXNDbG9zaW5nKSB7XG4gICAgICAgICAgaW5zdGFuY2UudHJpZ2dlcihcIm9uRGVhY3RpdmF0ZVwiKTtcblxuICAgICAgICAgIGluc3RhbmNlLnJlbW92ZUV2ZW50cygpO1xuXG4gICAgICAgICAgaW5zdGFuY2UuaXNWaXNpYmxlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBzZWxmLmlzVmlzaWJsZSA9IHRydWU7XG5cbiAgICAgIGlmIChzZWxmLmN1cnJlbnQgfHwgc2VsZi5pc0lkbGUpIHtcbiAgICAgICAgc2VsZi51cGRhdGUoKTtcblxuICAgICAgICBzZWxmLnVwZGF0ZUNvbnRyb2xzKCk7XG4gICAgICB9XG5cbiAgICAgIHNlbGYudHJpZ2dlcihcIm9uQWN0aXZhdGVcIik7XG5cbiAgICAgIHNlbGYuYWRkRXZlbnRzKCk7XG4gICAgfSxcblxuICAgIC8vIFN0YXJ0IGNsb3NpbmcgcHJvY2VkdXJlXG4gICAgLy8gVGhpcyB3aWxsIHN0YXJ0IFwiem9vbS1vdXRcIiBhbmltYXRpb24gaWYgbmVlZGVkIGFuZCBjbGVhbiBldmVyeXRoaW5nIHVwIGFmdGVyd2FyZHNcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIGNsb3NlOiBmdW5jdGlvbiAoZSwgZCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBjdXJyZW50ID0gc2VsZi5jdXJyZW50LFxuICAgICAgICBlZmZlY3QsXG4gICAgICAgIGR1cmF0aW9uLFxuICAgICAgICAkY29udGVudCxcbiAgICAgICAgZG9tUmVjdCxcbiAgICAgICAgb3BhY2l0eSxcbiAgICAgICAgc3RhcnQsXG4gICAgICAgIGVuZDtcblxuICAgICAgdmFyIGRvbmUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNlbGYuY2xlYW5VcChlKTtcbiAgICAgIH07XG5cbiAgICAgIGlmIChzZWxmLmlzQ2xvc2luZykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIHNlbGYuaXNDbG9zaW5nID0gdHJ1ZTtcblxuICAgICAgLy8gSWYgYmVmb3JlQ2xvc2UgY2FsbGJhY2sgcHJldmVudHMgY2xvc2luZywgbWFrZSBzdXJlIGNvbnRlbnQgaXMgY2VudGVyZWRcbiAgICAgIGlmIChzZWxmLnRyaWdnZXIoXCJiZWZvcmVDbG9zZVwiLCBlKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgc2VsZi5pc0Nsb3NpbmcgPSBmYWxzZTtcblxuICAgICAgICByZXF1ZXN0QUZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBzZWxmLnVwZGF0ZSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIC8vIFJlbW92ZSBhbGwgZXZlbnRzXG4gICAgICAvLyBJZiB0aGVyZSBhcmUgbXVsdGlwbGUgaW5zdGFuY2VzLCB0aGV5IHdpbGwgYmUgc2V0IGFnYWluIGJ5IFwiYWN0aXZhdGVcIiBtZXRob2RcbiAgICAgIHNlbGYucmVtb3ZlRXZlbnRzKCk7XG5cbiAgICAgICRjb250ZW50ID0gY3VycmVudC4kY29udGVudDtcbiAgICAgIGVmZmVjdCA9IGN1cnJlbnQub3B0cy5hbmltYXRpb25FZmZlY3Q7XG4gICAgICBkdXJhdGlvbiA9ICQuaXNOdW1lcmljKGQpID8gZCA6IGVmZmVjdCA/IGN1cnJlbnQub3B0cy5hbmltYXRpb25EdXJhdGlvbiA6IDA7XG5cbiAgICAgIGN1cnJlbnQuJHNsaWRlLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtc2xpZGUtLWNvbXBsZXRlIGZhbmN5Ym94LXNsaWRlLS1uZXh0IGZhbmN5Ym94LXNsaWRlLS1wcmV2aW91cyBmYW5jeWJveC1hbmltYXRlZFwiKTtcblxuICAgICAgaWYgKGUgIT09IHRydWUpIHtcbiAgICAgICAgJC5mYW5jeWJveC5zdG9wKGN1cnJlbnQuJHNsaWRlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGVmZmVjdCA9IGZhbHNlO1xuICAgICAgfVxuXG4gICAgICAvLyBSZW1vdmUgb3RoZXIgc2xpZGVzXG4gICAgICBjdXJyZW50LiRzbGlkZVxuICAgICAgICAuc2libGluZ3MoKVxuICAgICAgICAudHJpZ2dlcihcIm9uUmVzZXRcIilcbiAgICAgICAgLnJlbW92ZSgpO1xuXG4gICAgICAvLyBUcmlnZ2VyIGFuaW1hdGlvbnNcbiAgICAgIGlmIChkdXJhdGlvbikge1xuICAgICAgICBzZWxmLiRyZWZzLmNvbnRhaW5lclxuICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImZhbmN5Ym94LWlzLW9wZW5cIilcbiAgICAgICAgICAuYWRkQ2xhc3MoXCJmYW5jeWJveC1pcy1jbG9zaW5nXCIpXG4gICAgICAgICAgLmNzcyhcInRyYW5zaXRpb24tZHVyYXRpb25cIiwgZHVyYXRpb24gKyBcIm1zXCIpO1xuICAgICAgfVxuXG4gICAgICAvLyBDbGVhbiB1cFxuICAgICAgc2VsZi5oaWRlTG9hZGluZyhjdXJyZW50KTtcblxuICAgICAgc2VsZi5oaWRlQ29udHJvbHModHJ1ZSk7XG5cbiAgICAgIHNlbGYudXBkYXRlQ3Vyc29yKCk7XG5cbiAgICAgIC8vIENoZWNrIGlmIHBvc3NpYmxlIHRvIHpvb20tb3V0XG4gICAgICBpZiAoXG4gICAgICAgIGVmZmVjdCA9PT0gXCJ6b29tXCIgJiZcbiAgICAgICAgISgkY29udGVudCAmJiBkdXJhdGlvbiAmJiBjdXJyZW50LnR5cGUgPT09IFwiaW1hZ2VcIiAmJiAhc2VsZi5pc01vdmVkKCkgJiYgIWN1cnJlbnQuaGFzRXJyb3IgJiYgKGVuZCA9IHNlbGYuZ2V0VGh1bWJQb3MoY3VycmVudCkpKVxuICAgICAgKSB7XG4gICAgICAgIGVmZmVjdCA9IFwiZmFkZVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoZWZmZWN0ID09PSBcInpvb21cIikge1xuICAgICAgICAkLmZhbmN5Ym94LnN0b3AoJGNvbnRlbnQpO1xuXG4gICAgICAgIGRvbVJlY3QgPSAkLmZhbmN5Ym94LmdldFRyYW5zbGF0ZSgkY29udGVudCk7XG5cbiAgICAgICAgc3RhcnQgPSB7XG4gICAgICAgICAgdG9wOiBkb21SZWN0LnRvcCxcbiAgICAgICAgICBsZWZ0OiBkb21SZWN0LmxlZnQsXG4gICAgICAgICAgc2NhbGVYOiBkb21SZWN0LndpZHRoIC8gZW5kLndpZHRoLFxuICAgICAgICAgIHNjYWxlWTogZG9tUmVjdC5oZWlnaHQgLyBlbmQuaGVpZ2h0LFxuICAgICAgICAgIHdpZHRoOiBlbmQud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBlbmQuaGVpZ2h0XG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgd2UgbmVlZCB0byBhbmltYXRlIG9wYWNpdHlcbiAgICAgICAgb3BhY2l0eSA9IGN1cnJlbnQub3B0cy56b29tT3BhY2l0eTtcblxuICAgICAgICBpZiAob3BhY2l0eSA9PSBcImF1dG9cIikge1xuICAgICAgICAgIG9wYWNpdHkgPSBNYXRoLmFicyhjdXJyZW50LndpZHRoIC8gY3VycmVudC5oZWlnaHQgLSBlbmQud2lkdGggLyBlbmQuaGVpZ2h0KSA+IDAuMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcGFjaXR5KSB7XG4gICAgICAgICAgZW5kLm9wYWNpdHkgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgJC5mYW5jeWJveC5zZXRUcmFuc2xhdGUoJGNvbnRlbnQsIHN0YXJ0KTtcblxuICAgICAgICBmb3JjZVJlZHJhdygkY29udGVudCk7XG5cbiAgICAgICAgJC5mYW5jeWJveC5hbmltYXRlKCRjb250ZW50LCBlbmQsIGR1cmF0aW9uLCBkb25lKTtcblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKGVmZmVjdCAmJiBkdXJhdGlvbikge1xuICAgICAgICAkLmZhbmN5Ym94LmFuaW1hdGUoXG4gICAgICAgICAgY3VycmVudC4kc2xpZGUuYWRkQ2xhc3MoXCJmYW5jeWJveC1zbGlkZS0tcHJldmlvdXNcIikucmVtb3ZlQ2xhc3MoXCJmYW5jeWJveC1zbGlkZS0tY3VycmVudFwiKSxcbiAgICAgICAgICBcImZhbmN5Ym94LWFuaW1hdGVkIGZhbmN5Ym94LWZ4LVwiICsgZWZmZWN0LFxuICAgICAgICAgIGR1cmF0aW9uLFxuICAgICAgICAgIGRvbmVcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIHNraXAgYW5pbWF0aW9uXG4gICAgICAgIGlmIChlID09PSB0cnVlKSB7XG4gICAgICAgICAgc2V0VGltZW91dChkb25lLCBkdXJhdGlvbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9uZSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG5cbiAgICAvLyBGaW5hbCBhZGp1c3RtZW50cyBhZnRlciByZW1vdmluZyB0aGUgaW5zdGFuY2VcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIGNsZWFuVXA6IGZ1bmN0aW9uIChlKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGluc3RhbmNlLFxuICAgICAgICAkZm9jdXMgPSBzZWxmLmN1cnJlbnQub3B0cy4kb3JpZyxcbiAgICAgICAgeCxcbiAgICAgICAgeTtcblxuICAgICAgc2VsZi5jdXJyZW50LiRzbGlkZS50cmlnZ2VyKFwib25SZXNldFwiKTtcblxuICAgICAgc2VsZi4kcmVmcy5jb250YWluZXIuZW1wdHkoKS5yZW1vdmUoKTtcblxuICAgICAgc2VsZi50cmlnZ2VyKFwiYWZ0ZXJDbG9zZVwiLCBlKTtcblxuICAgICAgLy8gUGxhY2UgYmFjayBmb2N1c1xuICAgICAgaWYgKCEhc2VsZi5jdXJyZW50Lm9wdHMuYmFja0ZvY3VzKSB7XG4gICAgICAgIGlmICghJGZvY3VzIHx8ICEkZm9jdXMubGVuZ3RoIHx8ICEkZm9jdXMuaXMoXCI6dmlzaWJsZVwiKSkge1xuICAgICAgICAgICRmb2N1cyA9IHNlbGYuJHRyaWdnZXI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJGZvY3VzICYmICRmb2N1cy5sZW5ndGgpIHtcbiAgICAgICAgICB4ID0gd2luZG93LnNjcm9sbFg7XG4gICAgICAgICAgeSA9IHdpbmRvdy5zY3JvbGxZO1xuXG4gICAgICAgICAgJGZvY3VzLnRyaWdnZXIoXCJmb2N1c1wiKTtcblxuICAgICAgICAgICQoXCJodG1sLCBib2R5XCIpXG4gICAgICAgICAgICAuc2Nyb2xsVG9wKHkpXG4gICAgICAgICAgICAuc2Nyb2xsTGVmdCh4KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBzZWxmLmN1cnJlbnQgPSBudWxsO1xuXG4gICAgICAvLyBDaGVjayBpZiB0aGVyZSBhcmUgb3RoZXIgaW5zdGFuY2VzXG4gICAgICBpbnN0YW5jZSA9ICQuZmFuY3lib3guZ2V0SW5zdGFuY2UoKTtcblxuICAgICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgIGluc3RhbmNlLmFjdGl2YXRlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAkKFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcImZhbmN5Ym94LWFjdGl2ZSBjb21wZW5zYXRlLWZvci1zY3JvbGxiYXJcIik7XG5cbiAgICAgICAgJChcIiNmYW5jeWJveC1zdHlsZS1ub3Njcm9sbFwiKS5yZW1vdmUoKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gQ2FsbCBjYWxsYmFjayBhbmQgdHJpZ2dlciBhbiBldmVudFxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIHRyaWdnZXI6IGZ1bmN0aW9uIChuYW1lLCBzbGlkZSkge1xuICAgICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpLFxuICAgICAgICBzZWxmID0gdGhpcyxcbiAgICAgICAgb2JqID0gc2xpZGUgJiYgc2xpZGUub3B0cyA/IHNsaWRlIDogc2VsZi5jdXJyZW50LFxuICAgICAgICByZXo7XG5cbiAgICAgIGlmIChvYmopIHtcbiAgICAgICAgYXJncy51bnNoaWZ0KG9iaik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvYmogPSBzZWxmO1xuICAgICAgfVxuXG4gICAgICBhcmdzLnVuc2hpZnQoc2VsZik7XG5cbiAgICAgIGlmICgkLmlzRnVuY3Rpb24ob2JqLm9wdHNbbmFtZV0pKSB7XG4gICAgICAgIHJleiA9IG9iai5vcHRzW25hbWVdLmFwcGx5KG9iaiwgYXJncyk7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZXogPT09IGZhbHNlKSB7XG4gICAgICAgIHJldHVybiByZXo7XG4gICAgICB9XG5cbiAgICAgIGlmIChuYW1lID09PSBcImFmdGVyQ2xvc2VcIiB8fCAhc2VsZi4kcmVmcykge1xuICAgICAgICAkRC50cmlnZ2VyKG5hbWUgKyBcIi5mYlwiLCBhcmdzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYuJHJlZnMuY29udGFpbmVyLnRyaWdnZXIobmFtZSArIFwiLmZiXCIsIGFyZ3MpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBVcGRhdGUgaW5mb2JhciB2YWx1ZXMsIG5hdmlnYXRpb24gYnV0dG9uIHN0YXRlcyBhbmQgcmV2ZWFsIGNhcHRpb25cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIHVwZGF0ZUNvbnRyb2xzOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGN1cnJlbnQgPSBzZWxmLmN1cnJlbnQsXG4gICAgICAgIGluZGV4ID0gY3VycmVudC5pbmRleCxcbiAgICAgICAgJGNvbnRhaW5lciA9IHNlbGYuJHJlZnMuY29udGFpbmVyLFxuICAgICAgICAkY2FwdGlvbiA9IHNlbGYuJHJlZnMuY2FwdGlvbixcbiAgICAgICAgY2FwdGlvbiA9IGN1cnJlbnQub3B0cy5jYXB0aW9uO1xuXG4gICAgICAvLyBSZWNhbGN1bGF0ZSBjb250ZW50IGRpbWVuc2lvbnNcbiAgICAgIGN1cnJlbnQuJHNsaWRlLnRyaWdnZXIoXCJyZWZyZXNoXCIpO1xuXG4gICAgICAvLyBTZXQgY2FwdGlvblxuICAgICAgaWYgKGNhcHRpb24gJiYgY2FwdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgc2VsZi4kY2FwdGlvbiA9ICRjYXB0aW9uO1xuXG4gICAgICAgICRjYXB0aW9uXG4gICAgICAgICAgLmNoaWxkcmVuKClcbiAgICAgICAgICAuZXEoMClcbiAgICAgICAgICAuaHRtbChjYXB0aW9uKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNlbGYuJGNhcHRpb24gPSBudWxsO1xuICAgICAgfVxuXG4gICAgICBpZiAoIXNlbGYuaGFzSGlkZGVuQ29udHJvbHMgJiYgIXNlbGYuaXNJZGxlKSB7XG4gICAgICAgIHNlbGYuc2hvd0NvbnRyb2xzKCk7XG4gICAgICB9XG5cbiAgICAgIC8vIFVwZGF0ZSBpbmZvIGFuZCBuYXZpZ2F0aW9uIGVsZW1lbnRzXG4gICAgICAkY29udGFpbmVyLmZpbmQoXCJbZGF0YS1mYW5jeWJveC1jb3VudF1cIikuaHRtbChzZWxmLmdyb3VwLmxlbmd0aCk7XG4gICAgICAkY29udGFpbmVyLmZpbmQoXCJbZGF0YS1mYW5jeWJveC1pbmRleF1cIikuaHRtbChpbmRleCArIDEpO1xuXG4gICAgICAkY29udGFpbmVyLmZpbmQoXCJbZGF0YS1mYW5jeWJveC1wcmV2XVwiKS5wcm9wKFwiZGlzYWJsZWRcIiwgIWN1cnJlbnQub3B0cy5sb29wICYmIGluZGV4IDw9IDApO1xuICAgICAgJGNvbnRhaW5lci5maW5kKFwiW2RhdGEtZmFuY3lib3gtbmV4dF1cIikucHJvcChcImRpc2FibGVkXCIsICFjdXJyZW50Lm9wdHMubG9vcCAmJiBpbmRleCA+PSBzZWxmLmdyb3VwLmxlbmd0aCAtIDEpO1xuXG4gICAgICBpZiAoY3VycmVudC50eXBlID09PSBcImltYWdlXCIpIHtcbiAgICAgICAgLy8gUmUtZW5hYmxlIGJ1dHRvbnM7IHVwZGF0ZSBkb3dubG9hZCBidXR0b24gc291cmNlXG4gICAgICAgICRjb250YWluZXJcbiAgICAgICAgICAuZmluZChcIltkYXRhLWZhbmN5Ym94LXpvb21dXCIpXG4gICAgICAgICAgLnNob3coKVxuICAgICAgICAgIC5lbmQoKVxuICAgICAgICAgIC5maW5kKFwiW2RhdGEtZmFuY3lib3gtZG93bmxvYWRdXCIpXG4gICAgICAgICAgLmF0dHIoXCJocmVmXCIsIGN1cnJlbnQub3B0cy5pbWFnZS5zcmMgfHwgY3VycmVudC5zcmMpXG4gICAgICAgICAgLnNob3coKTtcbiAgICAgIH0gZWxzZSBpZiAoY3VycmVudC5vcHRzLnRvb2xiYXIpIHtcbiAgICAgICAgJGNvbnRhaW5lci5maW5kKFwiW2RhdGEtZmFuY3lib3gtZG93bmxvYWRdLFtkYXRhLWZhbmN5Ym94LXpvb21dXCIpLmhpZGUoKTtcbiAgICAgIH1cblxuICAgICAgLy8gTWFrZSBzdXJlIGZvY3VzIGlzIG5vdCBvbiBkaXNhYmxlZCBidXR0b24vZWxlbWVudFxuICAgICAgaWYgKCQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkuaXMoXCI6aGlkZGVuLFtkaXNhYmxlZF1cIikpIHtcbiAgICAgICAgc2VsZi4kcmVmcy5jb250YWluZXIudHJpZ2dlcihcImZvY3VzXCIpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBIaWRlIHRvb2xiYXIgYW5kIGNhcHRpb25cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIGhpZGVDb250cm9sczogZnVuY3Rpb24gKGFuZENhcHRpb24pIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgYXJyID0gW1wiaW5mb2JhclwiLCBcInRvb2xiYXJcIiwgXCJuYXZcIl07XG5cbiAgICAgIGlmIChhbmRDYXB0aW9uIHx8ICFzZWxmLmN1cnJlbnQub3B0cy5wcmV2ZW50Q2FwdGlvbk92ZXJsYXApIHtcbiAgICAgICAgYXJyLnB1c2goXCJjYXB0aW9uXCIpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLiRyZWZzLmNvbnRhaW5lci5yZW1vdmVDbGFzcyhcbiAgICAgICAgYXJyXG4gICAgICAgIC5tYXAoZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICByZXR1cm4gXCJmYW5jeWJveC1zaG93LVwiICsgaTtcbiAgICAgICAgfSlcbiAgICAgICAgLmpvaW4oXCIgXCIpXG4gICAgICApO1xuXG4gICAgICB0aGlzLmhhc0hpZGRlbkNvbnRyb2xzID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgc2hvd0NvbnRyb2xzOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIG9wdHMgPSBzZWxmLmN1cnJlbnQgPyBzZWxmLmN1cnJlbnQub3B0cyA6IHNlbGYub3B0cyxcbiAgICAgICAgJGNvbnRhaW5lciA9IHNlbGYuJHJlZnMuY29udGFpbmVyO1xuXG4gICAgICBzZWxmLmhhc0hpZGRlbkNvbnRyb2xzID0gZmFsc2U7XG4gICAgICBzZWxmLmlkbGVTZWNvbmRzQ291bnRlciA9IDA7XG5cbiAgICAgICRjb250YWluZXJcbiAgICAgICAgLnRvZ2dsZUNsYXNzKFwiZmFuY3lib3gtc2hvdy10b29sYmFyXCIsICEhKG9wdHMudG9vbGJhciAmJiBvcHRzLmJ1dHRvbnMpKVxuICAgICAgICAudG9nZ2xlQ2xhc3MoXCJmYW5jeWJveC1zaG93LWluZm9iYXJcIiwgISEob3B0cy5pbmZvYmFyICYmIHNlbGYuZ3JvdXAubGVuZ3RoID4gMSkpXG4gICAgICAgIC50b2dnbGVDbGFzcyhcImZhbmN5Ym94LXNob3ctY2FwdGlvblwiLCAhIXNlbGYuJGNhcHRpb24pXG4gICAgICAgIC50b2dnbGVDbGFzcyhcImZhbmN5Ym94LXNob3ctbmF2XCIsICEhKG9wdHMuYXJyb3dzICYmIHNlbGYuZ3JvdXAubGVuZ3RoID4gMSkpXG4gICAgICAgIC50b2dnbGVDbGFzcyhcImZhbmN5Ym94LWlzLW1vZGFsXCIsICEhb3B0cy5tb2RhbCk7XG4gICAgfSxcblxuICAgIC8vIFRvZ2dsZSB0b29sYmFyIGFuZCBjYXB0aW9uXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIHRvZ2dsZUNvbnRyb2xzOiBmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAodGhpcy5oYXNIaWRkZW5Db250cm9scykge1xuICAgICAgICB0aGlzLnNob3dDb250cm9scygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5oaWRlQ29udHJvbHMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gICQuZmFuY3lib3ggPSB7XG4gICAgdmVyc2lvbjogXCIzLjUuN1wiLFxuICAgIGRlZmF1bHRzOiBkZWZhdWx0cyxcblxuICAgIC8vIEdldCBjdXJyZW50IGluc3RhbmNlIGFuZCBleGVjdXRlIGEgY29tbWFuZC5cbiAgICAvL1xuICAgIC8vIEV4YW1wbGVzIG9mIHVzYWdlOlxuICAgIC8vXG4gICAgLy8gICAkaW5zdGFuY2UgPSAkLmZhbmN5Ym94LmdldEluc3RhbmNlKCk7XG4gICAgLy8gICAkLmZhbmN5Ym94LmdldEluc3RhbmNlKCkuanVtcFRvKCAxICk7XG4gICAgLy8gICAkLmZhbmN5Ym94LmdldEluc3RhbmNlKCAnanVtcFRvJywgMSApO1xuICAgIC8vICAgJC5mYW5jeWJveC5nZXRJbnN0YW5jZSggZnVuY3Rpb24oKSB7XG4gICAgLy8gICAgICAgY29uc29sZS5pbmZvKCB0aGlzLmN1cnJJbmRleCApO1xuICAgIC8vICAgfSk7XG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICBnZXRJbnN0YW5jZTogZnVuY3Rpb24gKGNvbW1hbmQpIHtcbiAgICAgIHZhciBpbnN0YW5jZSA9ICQoJy5mYW5jeWJveC1jb250YWluZXI6bm90KFwiLmZhbmN5Ym94LWlzLWNsb3NpbmdcIik6bGFzdCcpLmRhdGEoXCJGYW5jeUJveFwiKSxcbiAgICAgICAgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG5cbiAgICAgIGlmIChpbnN0YW5jZSBpbnN0YW5jZW9mIEZhbmN5Qm94KSB7XG4gICAgICAgIGlmICgkLnR5cGUoY29tbWFuZCkgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICBpbnN0YW5jZVtjb21tYW5kXS5hcHBseShpbnN0YW5jZSwgYXJncyk7XG4gICAgICAgIH0gZWxzZSBpZiAoJC50eXBlKGNvbW1hbmQpID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICBjb21tYW5kLmFwcGx5KGluc3RhbmNlLCBhcmdzKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0sXG5cbiAgICAvLyBDcmVhdGUgbmV3IGluc3RhbmNlXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PVxuXG4gICAgb3BlbjogZnVuY3Rpb24gKGl0ZW1zLCBvcHRzLCBpbmRleCkge1xuICAgICAgcmV0dXJuIG5ldyBGYW5jeUJveChpdGVtcywgb3B0cywgaW5kZXgpO1xuICAgIH0sXG5cbiAgICAvLyBDbG9zZSBjdXJyZW50IG9yIGFsbCBpbnN0YW5jZXNcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIGNsb3NlOiBmdW5jdGlvbiAoYWxsKSB7XG4gICAgICB2YXIgaW5zdGFuY2UgPSB0aGlzLmdldEluc3RhbmNlKCk7XG5cbiAgICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICBpbnN0YW5jZS5jbG9zZSgpO1xuXG4gICAgICAgIC8vIFRyeSB0byBmaW5kIGFuZCBjbG9zZSBuZXh0IGluc3RhbmNlXG4gICAgICAgIGlmIChhbGwgPT09IHRydWUpIHtcbiAgICAgICAgICB0aGlzLmNsb3NlKGFsbCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gQ2xvc2UgYWxsIGluc3RhbmNlcyBhbmQgdW5iaW5kIGFsbCBldmVudHNcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgZGVzdHJveTogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5jbG9zZSh0cnVlKTtcblxuICAgICAgJEQuYWRkKFwiYm9keVwiKS5vZmYoXCJjbGljay5mYi1zdGFydFwiLCBcIioqXCIpO1xuICAgIH0sXG5cbiAgICAvLyBUcnkgdG8gZGV0ZWN0IG1vYmlsZSBkZXZpY2VzXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgaXNNb2JpbGU6IC9BbmRyb2lkfHdlYk9TfGlQaG9uZXxpUGFkfGlQb2R8QmxhY2tCZXJyeXxJRU1vYmlsZXxPcGVyYSBNaW5pL2kudGVzdChuYXZpZ2F0b3IudXNlckFnZW50KSxcblxuICAgIC8vIERldGVjdCBpZiAndHJhbnNsYXRlM2QnIHN1cHBvcnQgaXMgYXZhaWxhYmxlXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAgIHVzZTNkOiAoZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlICYmXG4gICAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGRpdikgJiZcbiAgICAgICAgd2luZG93LmdldENvbXB1dGVkU3R5bGUoZGl2KS5nZXRQcm9wZXJ0eVZhbHVlKFwidHJhbnNmb3JtXCIpICYmXG4gICAgICAgICEoZG9jdW1lbnQuZG9jdW1lbnRNb2RlICYmIGRvY3VtZW50LmRvY3VtZW50TW9kZSA8IDExKVxuICAgICAgKTtcbiAgICB9KSgpLFxuXG4gICAgLy8gSGVscGVyIGZ1bmN0aW9uIHRvIGdldCBjdXJyZW50IHZpc3VhbCBzdGF0ZSBvZiBhbiBlbGVtZW50XG4gICAgLy8gcmV0dXJucyBhcnJheVsgdG9wLCBsZWZ0LCBob3Jpem9udGFsLXNjYWxlLCB2ZXJ0aWNhbC1zY2FsZSwgb3BhY2l0eSBdXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICBnZXRUcmFuc2xhdGU6IGZ1bmN0aW9uICgkZWwpIHtcbiAgICAgIHZhciBkb21SZWN0O1xuXG4gICAgICBpZiAoISRlbCB8fCAhJGVsLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG5cbiAgICAgIGRvbVJlY3QgPSAkZWxbMF0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRvcDogZG9tUmVjdC50b3AgfHwgMCxcbiAgICAgICAgbGVmdDogZG9tUmVjdC5sZWZ0IHx8IDAsXG4gICAgICAgIHdpZHRoOiBkb21SZWN0LndpZHRoLFxuICAgICAgICBoZWlnaHQ6IGRvbVJlY3QuaGVpZ2h0LFxuICAgICAgICBvcGFjaXR5OiBwYXJzZUZsb2F0KCRlbC5jc3MoXCJvcGFjaXR5XCIpKVxuICAgICAgfTtcbiAgICB9LFxuXG4gICAgLy8gU2hvcnRjdXQgZm9yIHNldHRpbmcgXCJ0cmFuc2xhdGUzZFwiIHByb3BlcnRpZXMgZm9yIGVsZW1lbnRcbiAgICAvLyBDYW4gc2V0IGJlIHVzZWQgdG8gc2V0IG9wYWNpdHksIHRvb1xuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgICBzZXRUcmFuc2xhdGU6IGZ1bmN0aW9uICgkZWwsIHByb3BzKSB7XG4gICAgICB2YXIgc3RyID0gXCJcIixcbiAgICAgICAgY3NzID0ge307XG5cbiAgICAgIGlmICghJGVsIHx8ICFwcm9wcykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy5sZWZ0ICE9PSB1bmRlZmluZWQgfHwgcHJvcHMudG9wICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc3RyID1cbiAgICAgICAgICAocHJvcHMubGVmdCA9PT0gdW5kZWZpbmVkID8gJGVsLnBvc2l0aW9uKCkubGVmdCA6IHByb3BzLmxlZnQpICtcbiAgICAgICAgICBcInB4LCBcIiArXG4gICAgICAgICAgKHByb3BzLnRvcCA9PT0gdW5kZWZpbmVkID8gJGVsLnBvc2l0aW9uKCkudG9wIDogcHJvcHMudG9wKSArXG4gICAgICAgICAgXCJweFwiO1xuXG4gICAgICAgIGlmICh0aGlzLnVzZTNkKSB7XG4gICAgICAgICAgc3RyID0gXCJ0cmFuc2xhdGUzZChcIiArIHN0ciArIFwiLCAwcHgpXCI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgc3RyID0gXCJ0cmFuc2xhdGUoXCIgKyBzdHIgKyBcIilcIjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMuc2NhbGVYICE9PSB1bmRlZmluZWQgJiYgcHJvcHMuc2NhbGVZICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgc3RyICs9IFwiIHNjYWxlKFwiICsgcHJvcHMuc2NhbGVYICsgXCIsIFwiICsgcHJvcHMuc2NhbGVZICsgXCIpXCI7XG4gICAgICB9IGVsc2UgaWYgKHByb3BzLnNjYWxlWCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHN0ciArPSBcIiBzY2FsZVgoXCIgKyBwcm9wcy5zY2FsZVggKyBcIilcIjtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0ci5sZW5ndGgpIHtcbiAgICAgICAgY3NzLnRyYW5zZm9ybSA9IHN0cjtcbiAgICAgIH1cblxuICAgICAgaWYgKHByb3BzLm9wYWNpdHkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjc3Mub3BhY2l0eSA9IHByb3BzLm9wYWNpdHk7XG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9wcy53aWR0aCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNzcy53aWR0aCA9IHByb3BzLndpZHRoO1xuICAgICAgfVxuXG4gICAgICBpZiAocHJvcHMuaGVpZ2h0ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgY3NzLmhlaWdodCA9IHByb3BzLmhlaWdodDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICRlbC5jc3MoY3NzKTtcbiAgICB9LFxuXG4gICAgLy8gU2ltcGxlIENTUyB0cmFuc2l0aW9uIGhhbmRsZXJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICAgYW5pbWF0ZTogZnVuY3Rpb24gKCRlbCwgdG8sIGR1cmF0aW9uLCBjYWxsYmFjaywgbGVhdmVBbmltYXRpb25OYW1lKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGZyb207XG5cbiAgICAgIGlmICgkLmlzRnVuY3Rpb24oZHVyYXRpb24pKSB7XG4gICAgICAgIGNhbGxiYWNrID0gZHVyYXRpb247XG4gICAgICAgIGR1cmF0aW9uID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgc2VsZi5zdG9wKCRlbCk7XG5cbiAgICAgIGZyb20gPSBzZWxmLmdldFRyYW5zbGF0ZSgkZWwpO1xuXG4gICAgICAkZWwub24odHJhbnNpdGlvbkVuZCwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgLy8gU2tpcCBldmVudHMgZnJvbSBjaGlsZCBlbGVtZW50cyBhbmQgei1pbmRleCBjaGFuZ2VcbiAgICAgICAgaWYgKGUgJiYgZS5vcmlnaW5hbEV2ZW50ICYmICghJGVsLmlzKGUub3JpZ2luYWxFdmVudC50YXJnZXQpIHx8IGUub3JpZ2luYWxFdmVudC5wcm9wZXJ0eU5hbWUgPT0gXCJ6LWluZGV4XCIpKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgc2VsZi5zdG9wKCRlbCk7XG5cbiAgICAgICAgaWYgKCQuaXNOdW1lcmljKGR1cmF0aW9uKSkge1xuICAgICAgICAgICRlbC5jc3MoXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCIsIFwiXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCQuaXNQbGFpbk9iamVjdCh0bykpIHtcbiAgICAgICAgICBpZiAodG8uc2NhbGVYICE9PSB1bmRlZmluZWQgJiYgdG8uc2NhbGVZICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHNlbGYuc2V0VHJhbnNsYXRlKCRlbCwge1xuICAgICAgICAgICAgICB0b3A6IHRvLnRvcCxcbiAgICAgICAgICAgICAgbGVmdDogdG8ubGVmdCxcbiAgICAgICAgICAgICAgd2lkdGg6IGZyb20ud2lkdGggKiB0by5zY2FsZVgsXG4gICAgICAgICAgICAgIGhlaWdodDogZnJvbS5oZWlnaHQgKiB0by5zY2FsZVksXG4gICAgICAgICAgICAgIHNjYWxlWDogMSxcbiAgICAgICAgICAgICAgc2NhbGVZOiAxXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobGVhdmVBbmltYXRpb25OYW1lICE9PSB0cnVlKSB7XG4gICAgICAgICAgJGVsLnJlbW92ZUNsYXNzKHRvKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkLmlzRnVuY3Rpb24oY2FsbGJhY2spKSB7XG4gICAgICAgICAgY2FsbGJhY2soZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICBpZiAoJC5pc051bWVyaWMoZHVyYXRpb24pKSB7XG4gICAgICAgICRlbC5jc3MoXCJ0cmFuc2l0aW9uLWR1cmF0aW9uXCIsIGR1cmF0aW9uICsgXCJtc1wiKTtcbiAgICAgIH1cblxuICAgICAgLy8gU3RhcnQgYW5pbWF0aW9uIGJ5IGNoYW5naW5nIENTUyBwcm9wZXJ0aWVzIG9yIGNsYXNzIG5hbWVcbiAgICAgIGlmICgkLmlzUGxhaW5PYmplY3QodG8pKSB7XG4gICAgICAgIGlmICh0by5zY2FsZVggIT09IHVuZGVmaW5lZCAmJiB0by5zY2FsZVkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGRlbGV0ZSB0by53aWR0aDtcbiAgICAgICAgICBkZWxldGUgdG8uaGVpZ2h0O1xuXG4gICAgICAgICAgaWYgKCRlbC5wYXJlbnQoKS5oYXNDbGFzcyhcImZhbmN5Ym94LXNsaWRlLS1pbWFnZVwiKSkge1xuICAgICAgICAgICAgJGVsLnBhcmVudCgpLmFkZENsYXNzKFwiZmFuY3lib3gtaXMtc2NhbGluZ1wiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAkLmZhbmN5Ym94LnNldFRyYW5zbGF0ZSgkZWwsIHRvKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICRlbC5hZGRDbGFzcyh0byk7XG4gICAgICB9XG5cbiAgICAgIC8vIE1ha2Ugc3VyZSB0aGF0IGB0cmFuc2l0aW9uZW5kYCBjYWxsYmFjayBnZXRzIGZpcmVkXG4gICAgICAkZWwuZGF0YShcbiAgICAgICAgXCJ0aW1lclwiLFxuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAkZWwudHJpZ2dlcih0cmFuc2l0aW9uRW5kKTtcbiAgICAgICAgfSwgZHVyYXRpb24gKyAzMylcbiAgICAgICk7XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uICgkZWwsIGNhbGxDYWxsYmFjaykge1xuICAgICAgaWYgKCRlbCAmJiAkZWwubGVuZ3RoKSB7XG4gICAgICAgIGNsZWFyVGltZW91dCgkZWwuZGF0YShcInRpbWVyXCIpKTtcblxuICAgICAgICBpZiAoY2FsbENhbGxiYWNrKSB7XG4gICAgICAgICAgJGVsLnRyaWdnZXIodHJhbnNpdGlvbkVuZCk7XG4gICAgICAgIH1cblxuICAgICAgICAkZWwub2ZmKHRyYW5zaXRpb25FbmQpLmNzcyhcInRyYW5zaXRpb24tZHVyYXRpb25cIiwgXCJcIik7XG5cbiAgICAgICAgJGVsLnBhcmVudCgpLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtaXMtc2NhbGluZ1wiKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgLy8gRGVmYXVsdCBjbGljayBoYW5kbGVyIGZvciBcImZhbmN5Ym94ZWRcIiBsaW5rc1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIGZ1bmN0aW9uIF9ydW4oZSwgb3B0cykge1xuICAgIHZhciBpdGVtcyA9IFtdLFxuICAgICAgaW5kZXggPSAwLFxuICAgICAgJHRhcmdldCxcbiAgICAgIHZhbHVlLFxuICAgICAgaW5zdGFuY2U7XG5cbiAgICAvLyBBdm9pZCBvcGVuaW5nIG11bHRpcGxlIHRpbWVzXG4gICAgaWYgKGUgJiYgZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgIG9wdHMgPSBvcHRzIHx8IHt9O1xuXG4gICAgaWYgKGUgJiYgZS5kYXRhKSB7XG4gICAgICBvcHRzID0gbWVyZ2VPcHRzKGUuZGF0YS5vcHRpb25zLCBvcHRzKTtcbiAgICB9XG5cbiAgICAkdGFyZ2V0ID0gb3B0cy4kdGFyZ2V0IHx8ICQoZS5jdXJyZW50VGFyZ2V0KS50cmlnZ2VyKFwiYmx1clwiKTtcbiAgICBpbnN0YW5jZSA9ICQuZmFuY3lib3guZ2V0SW5zdGFuY2UoKTtcblxuICAgIGlmIChpbnN0YW5jZSAmJiBpbnN0YW5jZS4kdHJpZ2dlciAmJiBpbnN0YW5jZS4kdHJpZ2dlci5pcygkdGFyZ2V0KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChvcHRzLnNlbGVjdG9yKSB7XG4gICAgICBpdGVtcyA9ICQob3B0cy5zZWxlY3Rvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEdldCBhbGwgcmVsYXRlZCBpdGVtcyBhbmQgZmluZCBpbmRleCBmb3IgY2xpY2tlZCBvbmVcbiAgICAgIHZhbHVlID0gJHRhcmdldC5hdHRyKFwiZGF0YS1mYW5jeWJveFwiKSB8fCBcIlwiO1xuXG4gICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgaXRlbXMgPSBlLmRhdGEgPyBlLmRhdGEuaXRlbXMgOiBbXTtcbiAgICAgICAgaXRlbXMgPSBpdGVtcy5sZW5ndGggPyBpdGVtcy5maWx0ZXIoJ1tkYXRhLWZhbmN5Ym94PVwiJyArIHZhbHVlICsgJ1wiXScpIDogJCgnW2RhdGEtZmFuY3lib3g9XCInICsgdmFsdWUgKyAnXCJdJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtcyA9IFskdGFyZ2V0XTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbmRleCA9ICQoaXRlbXMpLmluZGV4KCR0YXJnZXQpO1xuXG4gICAgLy8gU29tZXRpbWVzIGN1cnJlbnQgaXRlbSBjYW4gbm90IGJlIGZvdW5kXG4gICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgaW5kZXggPSAwO1xuICAgIH1cblxuICAgIGluc3RhbmNlID0gJC5mYW5jeWJveC5vcGVuKGl0ZW1zLCBvcHRzLCBpbmRleCk7XG5cbiAgICAvLyBTYXZlIGxhc3QgYWN0aXZlIGVsZW1lbnRcbiAgICBpbnN0YW5jZS4kdHJpZ2dlciA9ICR0YXJnZXQ7XG4gIH1cblxuICAvLyBDcmVhdGUgYSBqUXVlcnkgcGx1Z2luXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT1cblxuICAkLmZuLmZhbmN5Ym94ID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICB2YXIgc2VsZWN0b3I7XG5cbiAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBzZWxlY3RvciA9IG9wdGlvbnMuc2VsZWN0b3IgfHwgZmFsc2U7XG5cbiAgICBpZiAoc2VsZWN0b3IpIHtcbiAgICAgIC8vIFVzZSBib2R5IGVsZW1lbnQgaW5zdGVhZCBvZiBkb2N1bWVudCBzbyBpdCBleGVjdXRlcyBmaXJzdFxuICAgICAgJChcImJvZHlcIilcbiAgICAgICAgLm9mZihcImNsaWNrLmZiLXN0YXJ0XCIsIHNlbGVjdG9yKVxuICAgICAgICAub24oXCJjbGljay5mYi1zdGFydFwiLCBzZWxlY3Rvciwge1xuICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgICAgICAgfSwgX3J1bik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub2ZmKFwiY2xpY2suZmItc3RhcnRcIikub24oXG4gICAgICAgIFwiY2xpY2suZmItc3RhcnRcIiwge1xuICAgICAgICAgIGl0ZW1zOiB0aGlzLFxuICAgICAgICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgICAgICAgfSxcbiAgICAgICAgX3J1blxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICAvLyBTZWxmIGluaXRpYWxpemluZyBwbHVnaW4gZm9yIGFsbCBlbGVtZW50cyBoYXZpbmcgYGRhdGEtZmFuY3lib3hgIGF0dHJpYnV0ZVxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gICRELm9uKFwiY2xpY2suZmItc3RhcnRcIiwgXCJbZGF0YS1mYW5jeWJveF1cIiwgX3J1bik7XG5cbiAgLy8gRW5hYmxlIFwidHJpZ2dlciBlbGVtZW50c1wiXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT1cblxuICAkRC5vbihcImNsaWNrLmZiLXN0YXJ0XCIsIFwiW2RhdGEtZmFuY3lib3gtdHJpZ2dlcl1cIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAkKCdbZGF0YS1mYW5jeWJveD1cIicgKyAkKHRoaXMpLmF0dHIoXCJkYXRhLWZhbmN5Ym94LXRyaWdnZXJcIikgKyAnXCJdJylcbiAgICAgIC5lcSgkKHRoaXMpLmF0dHIoXCJkYXRhLWZhbmN5Ym94LWluZGV4XCIpIHx8IDApXG4gICAgICAudHJpZ2dlcihcImNsaWNrLmZiLXN0YXJ0XCIsIHtcbiAgICAgICAgJHRyaWdnZXI6ICQodGhpcylcbiAgICAgIH0pO1xuICB9KTtcblxuICAvLyBUcmFjayBmb2N1cyBldmVudCBmb3IgYmV0dGVyIGFjY2Vzc2liaWxpdHkgc3R5bGluZ1xuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAoZnVuY3Rpb24gKCkge1xuICAgIHZhciBidXR0b25TdHIgPSBcIi5mYW5jeWJveC1idXR0b25cIixcbiAgICAgIGZvY3VzU3RyID0gXCJmYW5jeWJveC1mb2N1c1wiLFxuICAgICAgJHByZXNzZWQgPSBudWxsO1xuXG4gICAgJEQub24oXCJtb3VzZWRvd24gbW91c2V1cCBmb2N1cyBibHVyXCIsIGJ1dHRvblN0ciwgZnVuY3Rpb24gKGUpIHtcbiAgICAgIHN3aXRjaCAoZS50eXBlKSB7XG4gICAgICAgIGNhc2UgXCJtb3VzZWRvd25cIjpcbiAgICAgICAgICAkcHJlc3NlZCA9ICQodGhpcyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJtb3VzZXVwXCI6XG4gICAgICAgICAgJHByZXNzZWQgPSBudWxsO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiZm9jdXNpblwiOlxuICAgICAgICAgICQoYnV0dG9uU3RyKS5yZW1vdmVDbGFzcyhmb2N1c1N0cik7XG5cbiAgICAgICAgICBpZiAoISQodGhpcykuaXMoJHByZXNzZWQpICYmICEkKHRoaXMpLmlzKFwiW2Rpc2FibGVkXVwiKSkge1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhmb2N1c1N0cik7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiZm9jdXNvdXRcIjpcbiAgICAgICAgICAkKGJ1dHRvblN0cikucmVtb3ZlQ2xhc3MoZm9jdXNTdHIpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICB9KSgpO1xufSkod2luZG93LCBkb2N1bWVudCwgalF1ZXJ5KTtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vL1xuLy8gTWVkaWFcbi8vIEFkZHMgYWRkaXRpb25hbCBtZWRpYSB0eXBlIHN1cHBvcnRcbi8vXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuKGZ1bmN0aW9uICgkKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIC8vIE9iamVjdCBjb250YWluaW5nIHByb3BlcnRpZXMgZm9yIGVhY2ggbWVkaWEgdHlwZVxuICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgeW91dHViZToge1xuICAgICAgbWF0Y2hlcjogLyh5b3V0dWJlXFwuY29tfHlvdXR1XFwuYmV8eW91dHViZVxcLW5vY29va2llXFwuY29tKVxcLyh3YXRjaFxcPyguKiYpP3Y9fHZcXC98dVxcL3xlbWJlZFxcLz8pPyh2aWRlb3Nlcmllc1xcP2xpc3Q9KC4qKXxbXFx3LV17MTF9fFxcP2xpc3RUeXBlPSguKikmbGlzdD0oLiopKSguKikvaSxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBhdXRvcGxheTogMSxcbiAgICAgICAgYXV0b2hpZGU6IDEsXG4gICAgICAgIGZzOiAxLFxuICAgICAgICByZWw6IDAsXG4gICAgICAgIGhkOiAxLFxuICAgICAgICB3bW9kZTogXCJ0cmFuc3BhcmVudFwiLFxuICAgICAgICBlbmFibGVqc2FwaTogMSxcbiAgICAgICAgaHRtbDU6IDFcbiAgICAgIH0sXG4gICAgICBwYXJhbVBsYWNlOiA4LFxuICAgICAgdHlwZTogXCJpZnJhbWVcIixcbiAgICAgIHVybDogXCJodHRwczovL3d3dy55b3V0dWJlLW5vY29va2llLmNvbS9lbWJlZC8kNFwiLFxuICAgICAgdGh1bWI6IFwiaHR0cHM6Ly9pbWcueW91dHViZS5jb20vdmkvJDQvaHFkZWZhdWx0LmpwZ1wiXG4gICAgfSxcblxuICAgIHZpbWVvOiB7XG4gICAgICBtYXRjaGVyOiAvXi4rdmltZW8uY29tXFwvKC4qXFwvKT8oW1xcZF0rKSguKik/LyxcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBhdXRvcGxheTogMSxcbiAgICAgICAgaGQ6IDEsXG4gICAgICAgIHNob3dfdGl0bGU6IDEsXG4gICAgICAgIHNob3dfYnlsaW5lOiAxLFxuICAgICAgICBzaG93X3BvcnRyYWl0OiAwLFxuICAgICAgICBmdWxsc2NyZWVuOiAxXG4gICAgICB9LFxuICAgICAgcGFyYW1QbGFjZTogMyxcbiAgICAgIHR5cGU6IFwiaWZyYW1lXCIsXG4gICAgICB1cmw6IFwiLy9wbGF5ZXIudmltZW8uY29tL3ZpZGVvLyQyXCJcbiAgICB9LFxuXG4gICAgaW5zdGFncmFtOiB7XG4gICAgICBtYXRjaGVyOiAvKGluc3RhZ3JcXC5hbXxpbnN0YWdyYW1cXC5jb20pXFwvcFxcLyhbYS16QS1aMC05X1xcLV0rKVxcLz8vaSxcbiAgICAgIHR5cGU6IFwiaW1hZ2VcIixcbiAgICAgIHVybDogXCIvLyQxL3AvJDIvbWVkaWEvP3NpemU9bFwiXG4gICAgfSxcblxuICAgIC8vIEV4YW1wbGVzOlxuICAgIC8vIGh0dHA6Ly9tYXBzLmdvb2dsZS5jb20vP2xsPTQ4Ljg1Nzk5NSwyLjI5NDI5NyZzcG49MC4wMDc2NjYsMC4wMjExMzYmdD1tJno9MTZcbiAgICAvLyBodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvQDM3Ljc4NTIwMDYsLTEyMi40MTQ2MzU1LDE0LjY1elxuICAgIC8vIGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9ANTIuMjExMTEyMywyLjkyMzc1NDIsNi42MXo/aGw9ZW5cbiAgICAvLyBodHRwczovL3d3dy5nb29nbGUuY29tL21hcHMvcGxhY2UvR29vZ2xlcGxleC9AMzcuNDIyMDA0MSwtMTIyLjA4MzM0OTQsMTd6L2RhdGE9ITRtNSEzbTQhMXMweDA6MHg2YzI5NmM2NjYxOTM2N2UwIThtMiEzZDM3LjQyMTk5OTghNGQtMTIyLjA4NDA1NzJcbiAgICBnbWFwX3BsYWNlOiB7XG4gICAgICBtYXRjaGVyOiAvKG1hcHNcXC4pP2dvb2dsZVxcLihbYS16XXsyLDN9KFxcLlthLXpdezJ9KT8pXFwvKCgobWFwc1xcLyhwbGFjZVxcLyguKilcXC8pP1xcQCguKiksKFxcZCsuP1xcZCs/KXopKXwoXFw/bGw9KSkoLiopPy9pLFxuICAgICAgdHlwZTogXCJpZnJhbWVcIixcbiAgICAgIHVybDogZnVuY3Rpb24gKHJleikge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIFwiLy9tYXBzLmdvb2dsZS5cIiArXG4gICAgICAgICAgcmV6WzJdICtcbiAgICAgICAgICBcIi8/bGw9XCIgK1xuICAgICAgICAgIChyZXpbOV0gPyByZXpbOV0gKyBcIiZ6PVwiICsgTWF0aC5mbG9vcihyZXpbMTBdKSArIChyZXpbMTJdID8gcmV6WzEyXS5yZXBsYWNlKC9eXFwvLywgXCImXCIpIDogXCJcIikgOiByZXpbMTJdICsgXCJcIikucmVwbGFjZSgvXFw/LywgXCImXCIpICtcbiAgICAgICAgICBcIiZvdXRwdXQ9XCIgK1xuICAgICAgICAgIChyZXpbMTJdICYmIHJlelsxMl0uaW5kZXhPZihcImxheWVyPWNcIikgPiAwID8gXCJzdmVtYmVkXCIgOiBcImVtYmVkXCIpXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIEV4YW1wbGVzOlxuICAgIC8vIGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9zZWFyY2gvRW1waXJlK1N0YXRlK0J1aWxkaW5nL1xuICAgIC8vIGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vbWFwcy9zZWFyY2gvP2FwaT0xJnF1ZXJ5PWNlbnR1cnlsaW5rK2ZpZWxkXG4gICAgLy8gaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9tYXBzL3NlYXJjaC8/YXBpPTEmcXVlcnk9NDcuNTk1MTUxOCwtMTIyLjMzMTYzOTNcbiAgICBnbWFwX3NlYXJjaDoge1xuICAgICAgbWF0Y2hlcjogLyhtYXBzXFwuKT9nb29nbGVcXC4oW2Etel17MiwzfShcXC5bYS16XXsyfSk/KVxcLyhtYXBzXFwvc2VhcmNoXFwvKSguKikvaSxcbiAgICAgIHR5cGU6IFwiaWZyYW1lXCIsXG4gICAgICB1cmw6IGZ1bmN0aW9uIChyZXopIHtcbiAgICAgICAgcmV0dXJuIFwiLy9tYXBzLmdvb2dsZS5cIiArIHJlelsyXSArIFwiL21hcHM/cT1cIiArIHJlels1XS5yZXBsYWNlKFwicXVlcnk9XCIsIFwicT1cIikucmVwbGFjZShcImFwaT0xXCIsIFwiXCIpICsgXCImb3V0cHV0PWVtYmVkXCI7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIC8vIEZvcm1hdHMgbWF0Y2hpbmcgdXJsIHRvIGZpbmFsIGZvcm1cbiAgdmFyIGZvcm1hdCA9IGZ1bmN0aW9uICh1cmwsIHJleiwgcGFyYW1zKSB7XG4gICAgaWYgKCF1cmwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBwYXJhbXMgPSBwYXJhbXMgfHwgXCJcIjtcblxuICAgIGlmICgkLnR5cGUocGFyYW1zKSA9PT0gXCJvYmplY3RcIikge1xuICAgICAgcGFyYW1zID0gJC5wYXJhbShwYXJhbXMsIHRydWUpO1xuICAgIH1cblxuICAgICQuZWFjaChyZXosIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgICB1cmwgPSB1cmwucmVwbGFjZShcIiRcIiArIGtleSwgdmFsdWUgfHwgXCJcIik7XG4gICAgfSk7XG5cbiAgICBpZiAocGFyYW1zLmxlbmd0aCkge1xuICAgICAgdXJsICs9ICh1cmwuaW5kZXhPZihcIj9cIikgPiAwID8gXCImXCIgOiBcIj9cIikgKyBwYXJhbXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVybDtcbiAgfTtcblxuICAkKGRvY3VtZW50KS5vbihcIm9iamVjdE5lZWRzVHlwZS5mYlwiLCBmdW5jdGlvbiAoZSwgaW5zdGFuY2UsIGl0ZW0pIHtcbiAgICB2YXIgdXJsID0gaXRlbS5zcmMgfHwgXCJcIixcbiAgICAgIHR5cGUgPSBmYWxzZSxcbiAgICAgIG1lZGlhLFxuICAgICAgdGh1bWIsXG4gICAgICByZXosXG4gICAgICBwYXJhbXMsXG4gICAgICB1cmxQYXJhbXMsXG4gICAgICBwYXJhbU9iaixcbiAgICAgIHByb3ZpZGVyO1xuXG4gICAgbWVkaWEgPSAkLmV4dGVuZCh0cnVlLCB7fSwgZGVmYXVsdHMsIGl0ZW0ub3B0cy5tZWRpYSk7XG5cbiAgICAvLyBMb29rIGZvciBhbnkgbWF0Y2hpbmcgbWVkaWEgdHlwZVxuICAgICQuZWFjaChtZWRpYSwgZnVuY3Rpb24gKHByb3ZpZGVyTmFtZSwgcHJvdmlkZXJPcHRzKSB7XG4gICAgICByZXogPSB1cmwubWF0Y2gocHJvdmlkZXJPcHRzLm1hdGNoZXIpO1xuXG4gICAgICBpZiAoIXJleikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHR5cGUgPSBwcm92aWRlck9wdHMudHlwZTtcbiAgICAgIHByb3ZpZGVyID0gcHJvdmlkZXJOYW1lO1xuICAgICAgcGFyYW1PYmogPSB7fTtcblxuICAgICAgaWYgKHByb3ZpZGVyT3B0cy5wYXJhbVBsYWNlICYmIHJleltwcm92aWRlck9wdHMucGFyYW1QbGFjZV0pIHtcbiAgICAgICAgdXJsUGFyYW1zID0gcmV6W3Byb3ZpZGVyT3B0cy5wYXJhbVBsYWNlXTtcblxuICAgICAgICBpZiAodXJsUGFyYW1zWzBdID09IFwiP1wiKSB7XG4gICAgICAgICAgdXJsUGFyYW1zID0gdXJsUGFyYW1zLnN1YnN0cmluZygxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHVybFBhcmFtcyA9IHVybFBhcmFtcy5zcGxpdChcIiZcIik7XG5cbiAgICAgICAgZm9yICh2YXIgbSA9IDA7IG0gPCB1cmxQYXJhbXMubGVuZ3RoOyArK20pIHtcbiAgICAgICAgICB2YXIgcCA9IHVybFBhcmFtc1ttXS5zcGxpdChcIj1cIiwgMik7XG5cbiAgICAgICAgICBpZiAocC5sZW5ndGggPT0gMikge1xuICAgICAgICAgICAgcGFyYW1PYmpbcFswXV0gPSBkZWNvZGVVUklDb21wb25lbnQocFsxXS5yZXBsYWNlKC9cXCsvZywgXCIgXCIpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcGFyYW1zID0gJC5leHRlbmQodHJ1ZSwge30sIHByb3ZpZGVyT3B0cy5wYXJhbXMsIGl0ZW0ub3B0c1twcm92aWRlck5hbWVdLCBwYXJhbU9iaik7XG5cbiAgICAgIHVybCA9XG4gICAgICAgICQudHlwZShwcm92aWRlck9wdHMudXJsKSA9PT0gXCJmdW5jdGlvblwiID8gcHJvdmlkZXJPcHRzLnVybC5jYWxsKHRoaXMsIHJleiwgcGFyYW1zLCBpdGVtKSA6IGZvcm1hdChwcm92aWRlck9wdHMudXJsLCByZXosIHBhcmFtcyk7XG5cbiAgICAgIHRodW1iID1cbiAgICAgICAgJC50eXBlKHByb3ZpZGVyT3B0cy50aHVtYikgPT09IFwiZnVuY3Rpb25cIiA/IHByb3ZpZGVyT3B0cy50aHVtYi5jYWxsKHRoaXMsIHJleiwgcGFyYW1zLCBpdGVtKSA6IGZvcm1hdChwcm92aWRlck9wdHMudGh1bWIsIHJleik7XG5cbiAgICAgIGlmIChwcm92aWRlck5hbWUgPT09IFwieW91dHViZVwiKSB7XG4gICAgICAgIHVybCA9IHVybC5yZXBsYWNlKC8mdD0oKFxcZCspbSk/KFxcZCspcy8sIGZ1bmN0aW9uIChtYXRjaCwgcDEsIG0sIHMpIHtcbiAgICAgICAgICByZXR1cm4gXCImc3RhcnQ9XCIgKyAoKG0gPyBwYXJzZUludChtLCAxMCkgKiA2MCA6IDApICsgcGFyc2VJbnQocywgMTApKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKHByb3ZpZGVyTmFtZSA9PT0gXCJ2aW1lb1wiKSB7XG4gICAgICAgIHVybCA9IHVybC5yZXBsYWNlKFwiJiUyM1wiLCBcIiNcIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcblxuICAgIC8vIElmIGl0IGlzIGZvdW5kLCB0aGVuIGNoYW5nZSBjb250ZW50IHR5cGUgYW5kIHVwZGF0ZSB0aGUgdXJsXG5cbiAgICBpZiAodHlwZSkge1xuICAgICAgaWYgKCFpdGVtLm9wdHMudGh1bWIgJiYgIShpdGVtLm9wdHMuJHRodW1iICYmIGl0ZW0ub3B0cy4kdGh1bWIubGVuZ3RoKSkge1xuICAgICAgICBpdGVtLm9wdHMudGh1bWIgPSB0aHVtYjtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGUgPT09IFwiaWZyYW1lXCIpIHtcbiAgICAgICAgaXRlbS5vcHRzID0gJC5leHRlbmQodHJ1ZSwgaXRlbS5vcHRzLCB7XG4gICAgICAgICAgaWZyYW1lOiB7XG4gICAgICAgICAgICBwcmVsb2FkOiBmYWxzZSxcbiAgICAgICAgICAgIGF0dHI6IHtcbiAgICAgICAgICAgICAgc2Nyb2xsaW5nOiBcIm5vXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICAkLmV4dGVuZChpdGVtLCB7XG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIHNyYzogdXJsLFxuICAgICAgICBvcmlnU3JjOiBpdGVtLnNyYyxcbiAgICAgICAgY29udGVudFNvdXJjZTogcHJvdmlkZXIsXG4gICAgICAgIGNvbnRlbnRUeXBlOiB0eXBlID09PSBcImltYWdlXCIgPyBcImltYWdlXCIgOiBwcm92aWRlciA9PSBcImdtYXBfcGxhY2VcIiB8fCBwcm92aWRlciA9PSBcImdtYXBfc2VhcmNoXCIgPyBcIm1hcFwiIDogXCJ2aWRlb1wiXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHVybCkge1xuICAgICAgaXRlbS50eXBlID0gaXRlbS5vcHRzLmRlZmF1bHRUeXBlO1xuICAgIH1cbiAgfSk7XG5cbiAgLy8gTG9hZCBZb3VUdWJlL1ZpZGVvIEFQSSBvbiByZXF1ZXN0IHRvIGRldGVjdCB3aGVuIHZpZGVvIGZpbmlzaGVkIHBsYXlpbmdcbiAgdmFyIFZpZGVvQVBJTG9hZGVyID0ge1xuICAgIHlvdXR1YmU6IHtcbiAgICAgIHNyYzogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9pZnJhbWVfYXBpXCIsXG4gICAgICBjbGFzczogXCJZVFwiLFxuICAgICAgbG9hZGluZzogZmFsc2UsXG4gICAgICBsb2FkZWQ6IGZhbHNlXG4gICAgfSxcblxuICAgIHZpbWVvOiB7XG4gICAgICBzcmM6IFwiaHR0cHM6Ly9wbGF5ZXIudmltZW8uY29tL2FwaS9wbGF5ZXIuanNcIixcbiAgICAgIGNsYXNzOiBcIlZpbWVvXCIsXG4gICAgICBsb2FkaW5nOiBmYWxzZSxcbiAgICAgIGxvYWRlZDogZmFsc2VcbiAgICB9LFxuXG4gICAgbG9hZDogZnVuY3Rpb24gKHZlbmRvcikge1xuICAgICAgdmFyIF90aGlzID0gdGhpcyxcbiAgICAgICAgc2NyaXB0O1xuXG4gICAgICBpZiAodGhpc1t2ZW5kb3JdLmxvYWRlZCkge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBfdGhpcy5kb25lKHZlbmRvcik7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzW3ZlbmRvcl0ubG9hZGluZykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXNbdmVuZG9yXS5sb2FkaW5nID0gdHJ1ZTtcblxuICAgICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgIHNjcmlwdC50eXBlID0gXCJ0ZXh0L2phdmFzY3JpcHRcIjtcbiAgICAgIHNjcmlwdC5zcmMgPSB0aGlzW3ZlbmRvcl0uc3JjO1xuXG4gICAgICBpZiAodmVuZG9yID09PSBcInlvdXR1YmVcIikge1xuICAgICAgICB3aW5kb3cub25Zb3VUdWJlSWZyYW1lQVBJUmVhZHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXNbdmVuZG9yXS5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgIF90aGlzLmRvbmUodmVuZG9yKTtcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNjcmlwdC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgX3RoaXNbdmVuZG9yXS5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgIF90aGlzLmRvbmUodmVuZG9yKTtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH0sXG4gICAgZG9uZTogZnVuY3Rpb24gKHZlbmRvcikge1xuICAgICAgdmFyIGluc3RhbmNlLCAkZWwsIHBsYXllcjtcblxuICAgICAgaWYgKHZlbmRvciA9PT0gXCJ5b3V0dWJlXCIpIHtcbiAgICAgICAgZGVsZXRlIHdpbmRvdy5vbllvdVR1YmVJZnJhbWVBUElSZWFkeTtcbiAgICAgIH1cblxuICAgICAgaW5zdGFuY2UgPSAkLmZhbmN5Ym94LmdldEluc3RhbmNlKCk7XG5cbiAgICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICAkZWwgPSBpbnN0YW5jZS5jdXJyZW50LiRjb250ZW50LmZpbmQoXCJpZnJhbWVcIik7XG5cbiAgICAgICAgaWYgKHZlbmRvciA9PT0gXCJ5b3V0dWJlXCIgJiYgWVQgIT09IHVuZGVmaW5lZCAmJiBZVCkge1xuICAgICAgICAgIHBsYXllciA9IG5ldyBZVC5QbGF5ZXIoJGVsLmF0dHIoXCJpZFwiKSwge1xuICAgICAgICAgICAgZXZlbnRzOiB7XG4gICAgICAgICAgICAgIG9uU3RhdGVDaGFuZ2U6IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGUuZGF0YSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICBpbnN0YW5jZS5uZXh0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAodmVuZG9yID09PSBcInZpbWVvXCIgJiYgVmltZW8gIT09IHVuZGVmaW5lZCAmJiBWaW1lbykge1xuICAgICAgICAgIHBsYXllciA9IG5ldyBWaW1lby5QbGF5ZXIoJGVsKTtcblxuICAgICAgICAgIHBsYXllci5vbihcImVuZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGluc3RhbmNlLm5leHQoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICAkKGRvY3VtZW50KS5vbih7XG4gICAgXCJhZnRlclNob3cuZmJcIjogZnVuY3Rpb24gKGUsIGluc3RhbmNlLCBjdXJyZW50KSB7XG4gICAgICBpZiAoaW5zdGFuY2UuZ3JvdXAubGVuZ3RoID4gMSAmJiAoY3VycmVudC5jb250ZW50U291cmNlID09PSBcInlvdXR1YmVcIiB8fCBjdXJyZW50LmNvbnRlbnRTb3VyY2UgPT09IFwidmltZW9cIikpIHtcbiAgICAgICAgVmlkZW9BUElMb2FkZXIubG9hZChjdXJyZW50LmNvbnRlbnRTb3VyY2UpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59KShqUXVlcnkpO1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vXG4vLyBHdWVzdHVyZXNcbi8vIEFkZHMgdG91Y2ggZ3Vlc3R1cmVzLCBoYW5kbGVzIGNsaWNrIGFuZCB0YXAgZXZlbnRzXG4vL1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbihmdW5jdGlvbiAod2luZG93LCBkb2N1bWVudCwgJCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgcmVxdWVzdEFGcmFtZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgIHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgIHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgIHdpbmRvdy5vUmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICAvLyBpZiBhbGwgZWxzZSBmYWlscywgdXNlIHNldFRpbWVvdXRcbiAgICAgIGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gd2luZG93LnNldFRpbWVvdXQoY2FsbGJhY2ssIDEwMDAgLyA2MCk7XG4gICAgICB9XG4gICAgKTtcbiAgfSkoKTtcblxuICB2YXIgY2FuY2VsQUZyYW1lID0gKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8XG4gICAgICB3aW5kb3cud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHxcbiAgICAgIHdpbmRvdy5tb3pDYW5jZWxBbmltYXRpb25GcmFtZSB8fFxuICAgICAgd2luZG93Lm9DYW5jZWxBbmltYXRpb25GcmFtZSB8fFxuICAgICAgZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQoaWQpO1xuICAgICAgfVxuICAgICk7XG4gIH0pKCk7XG5cbiAgdmFyIGdldFBvaW50ZXJYWSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuXG4gICAgZSA9IGUub3JpZ2luYWxFdmVudCB8fCBlIHx8IHdpbmRvdy5lO1xuICAgIGUgPSBlLnRvdWNoZXMgJiYgZS50b3VjaGVzLmxlbmd0aCA/IGUudG91Y2hlcyA6IGUuY2hhbmdlZFRvdWNoZXMgJiYgZS5jaGFuZ2VkVG91Y2hlcy5sZW5ndGggPyBlLmNoYW5nZWRUb3VjaGVzIDogW2VdO1xuXG4gICAgZm9yICh2YXIga2V5IGluIGUpIHtcbiAgICAgIGlmIChlW2tleV0ucGFnZVgpIHtcbiAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgIHg6IGVba2V5XS5wYWdlWCxcbiAgICAgICAgICB5OiBlW2tleV0ucGFnZVlcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgaWYgKGVba2V5XS5jbGllbnRYKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHtcbiAgICAgICAgICB4OiBlW2tleV0uY2xpZW50WCxcbiAgICAgICAgICB5OiBlW2tleV0uY2xpZW50WVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuXG4gIHZhciBkaXN0YW5jZSA9IGZ1bmN0aW9uIChwb2ludDIsIHBvaW50MSwgd2hhdCkge1xuICAgIGlmICghcG9pbnQxIHx8ICFwb2ludDIpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIGlmICh3aGF0ID09PSBcInhcIikge1xuICAgICAgcmV0dXJuIHBvaW50Mi54IC0gcG9pbnQxLng7XG4gICAgfSBlbHNlIGlmICh3aGF0ID09PSBcInlcIikge1xuICAgICAgcmV0dXJuIHBvaW50Mi55IC0gcG9pbnQxLnk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE1hdGguc3FydChNYXRoLnBvdyhwb2ludDIueCAtIHBvaW50MS54LCAyKSArIE1hdGgucG93KHBvaW50Mi55IC0gcG9pbnQxLnksIDIpKTtcbiAgfTtcblxuICB2YXIgaXNDbGlja2FibGUgPSBmdW5jdGlvbiAoJGVsKSB7XG4gICAgaWYgKFxuICAgICAgJGVsLmlzKCdhLGFyZWEsYnV0dG9uLFtyb2xlPVwiYnV0dG9uXCJdLGlucHV0LGxhYmVsLHNlbGVjdCxzdW1tYXJ5LHRleHRhcmVhLHZpZGVvLGF1ZGlvLGlmcmFtZScpIHx8XG4gICAgICAkLmlzRnVuY3Rpb24oJGVsLmdldCgwKS5vbmNsaWNrKSB8fFxuICAgICAgJGVsLmRhdGEoXCJzZWxlY3RhYmxlXCIpXG4gICAgKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgYXR0cmlidXRlcyBsaWtlIGRhdGEtZmFuY3lib3gtbmV4dCBvciBkYXRhLWZhbmN5Ym94LWNsb3NlXG4gICAgZm9yICh2YXIgaSA9IDAsIGF0dHMgPSAkZWxbMF0uYXR0cmlidXRlcywgbiA9IGF0dHMubGVuZ3RoOyBpIDwgbjsgaSsrKSB7XG4gICAgICBpZiAoYXR0c1tpXS5ub2RlTmFtZS5zdWJzdHIoMCwgMTQpID09PSBcImRhdGEtZmFuY3lib3gtXCIpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9O1xuXG4gIHZhciBoYXNTY3JvbGxiYXJzID0gZnVuY3Rpb24gKGVsKSB7XG4gICAgdmFyIG92ZXJmbG93WSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKVtcIm92ZXJmbG93LXlcIl0sXG4gICAgICBvdmVyZmxvd1ggPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbClbXCJvdmVyZmxvdy14XCJdLFxuICAgICAgdmVydGljYWwgPSAob3ZlcmZsb3dZID09PSBcInNjcm9sbFwiIHx8IG92ZXJmbG93WSA9PT0gXCJhdXRvXCIpICYmIGVsLnNjcm9sbEhlaWdodCA+IGVsLmNsaWVudEhlaWdodCxcbiAgICAgIGhvcml6b250YWwgPSAob3ZlcmZsb3dYID09PSBcInNjcm9sbFwiIHx8IG92ZXJmbG93WCA9PT0gXCJhdXRvXCIpICYmIGVsLnNjcm9sbFdpZHRoID4gZWwuY2xpZW50V2lkdGg7XG5cbiAgICByZXR1cm4gdmVydGljYWwgfHwgaG9yaXpvbnRhbDtcbiAgfTtcblxuICB2YXIgaXNTY3JvbGxhYmxlID0gZnVuY3Rpb24gKCRlbCkge1xuICAgIHZhciByZXogPSBmYWxzZTtcblxuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICByZXogPSBoYXNTY3JvbGxiYXJzKCRlbC5nZXQoMCkpO1xuXG4gICAgICBpZiAocmV6KSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICAkZWwgPSAkZWwucGFyZW50KCk7XG5cbiAgICAgIGlmICghJGVsLmxlbmd0aCB8fCAkZWwuaGFzQ2xhc3MoXCJmYW5jeWJveC1zdGFnZVwiKSB8fCAkZWwuaXMoXCJib2R5XCIpKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXo7XG4gIH07XG5cbiAgdmFyIEd1ZXN0dXJlcyA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHNlbGYuaW5zdGFuY2UgPSBpbnN0YW5jZTtcblxuICAgIHNlbGYuJGJnID0gaW5zdGFuY2UuJHJlZnMuYmc7XG4gICAgc2VsZi4kc3RhZ2UgPSBpbnN0YW5jZS4kcmVmcy5zdGFnZTtcbiAgICBzZWxmLiRjb250YWluZXIgPSBpbnN0YW5jZS4kcmVmcy5jb250YWluZXI7XG5cbiAgICBzZWxmLmRlc3Ryb3koKTtcblxuICAgIHNlbGYuJGNvbnRhaW5lci5vbihcInRvdWNoc3RhcnQuZmIudG91Y2ggbW91c2Vkb3duLmZiLnRvdWNoXCIsICQucHJveHkoc2VsZiwgXCJvbnRvdWNoc3RhcnRcIikpO1xuICB9O1xuXG4gIEd1ZXN0dXJlcy5wcm90b3R5cGUuZGVzdHJveSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBzZWxmLiRjb250YWluZXIub2ZmKFwiLmZiLnRvdWNoXCIpO1xuXG4gICAgJChkb2N1bWVudCkub2ZmKFwiLmZiLnRvdWNoXCIpO1xuXG4gICAgaWYgKHNlbGYucmVxdWVzdElkKSB7XG4gICAgICBjYW5jZWxBRnJhbWUoc2VsZi5yZXF1ZXN0SWQpO1xuICAgICAgc2VsZi5yZXF1ZXN0SWQgPSBudWxsO1xuICAgIH1cblxuICAgIGlmIChzZWxmLnRhcHBlZCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHNlbGYudGFwcGVkKTtcbiAgICAgIHNlbGYudGFwcGVkID0gbnVsbDtcbiAgICB9XG4gIH07XG5cbiAgR3Vlc3R1cmVzLnByb3RvdHlwZS5vbnRvdWNoc3RhcnQgPSBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICR0YXJnZXQgPSAkKGUudGFyZ2V0KSxcbiAgICAgIGluc3RhbmNlID0gc2VsZi5pbnN0YW5jZSxcbiAgICAgIGN1cnJlbnQgPSBpbnN0YW5jZS5jdXJyZW50LFxuICAgICAgJHNsaWRlID0gY3VycmVudC4kc2xpZGUsXG4gICAgICAkY29udGVudCA9IGN1cnJlbnQuJGNvbnRlbnQsXG4gICAgICBpc1RvdWNoRGV2aWNlID0gZS50eXBlID09IFwidG91Y2hzdGFydFwiO1xuXG4gICAgLy8gRG8gbm90IHJlc3BvbmQgdG8gYm90aCAodG91Y2ggYW5kIG1vdXNlKSBldmVudHNcbiAgICBpZiAoaXNUb3VjaERldmljZSkge1xuICAgICAgc2VsZi4kY29udGFpbmVyLm9mZihcIm1vdXNlZG93bi5mYi50b3VjaFwiKTtcbiAgICB9XG5cbiAgICAvLyBJZ25vcmUgcmlnaHQgY2xpY2tcbiAgICBpZiAoZS5vcmlnaW5hbEV2ZW50ICYmIGUub3JpZ2luYWxFdmVudC5idXR0b24gPT0gMikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIElnbm9yZSB0YXBpbmcgb24gbGlua3MsIGJ1dHRvbnMsIGlucHV0IGVsZW1lbnRzXG4gICAgaWYgKCEkc2xpZGUubGVuZ3RoIHx8ICEkdGFyZ2V0Lmxlbmd0aCB8fCBpc0NsaWNrYWJsZSgkdGFyZ2V0KSB8fCBpc0NsaWNrYWJsZSgkdGFyZ2V0LnBhcmVudCgpKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBJZ25vcmUgY2xpY2tzIG9uIHRoZSBzY3JvbGxiYXJcbiAgICBpZiAoISR0YXJnZXQuaXMoXCJpbWdcIikgJiYgZS5vcmlnaW5hbEV2ZW50LmNsaWVudFggPiAkdGFyZ2V0WzBdLmNsaWVudFdpZHRoICsgJHRhcmdldC5vZmZzZXQoKS5sZWZ0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSWdub3JlIGNsaWNrcyB3aGlsZSB6b29taW5nIG9yIGNsb3NpbmdcbiAgICBpZiAoIWN1cnJlbnQgfHwgaW5zdGFuY2UuaXNBbmltYXRpbmcgfHwgY3VycmVudC4kc2xpZGUuaGFzQ2xhc3MoXCJmYW5jeWJveC1hbmltYXRlZFwiKSkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHNlbGYucmVhbFBvaW50cyA9IHNlbGYuc3RhcnRQb2ludHMgPSBnZXRQb2ludGVyWFkoZSk7XG5cbiAgICBpZiAoIXNlbGYuc3RhcnRQb2ludHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQWxsb3cgb3RoZXIgc2NyaXB0cyB0byBjYXRjaCB0b3VjaCBldmVudCBpZiBcInRvdWNoXCIgaXMgc2V0IHRvIGZhbHNlXG4gICAgaWYgKGN1cnJlbnQudG91Y2gpIHtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgfVxuXG4gICAgc2VsZi5zdGFydEV2ZW50ID0gZTtcblxuICAgIHNlbGYuY2FuVGFwID0gdHJ1ZTtcbiAgICBzZWxmLiR0YXJnZXQgPSAkdGFyZ2V0O1xuICAgIHNlbGYuJGNvbnRlbnQgPSAkY29udGVudDtcbiAgICBzZWxmLm9wdHMgPSBjdXJyZW50Lm9wdHMudG91Y2g7XG5cbiAgICBzZWxmLmlzUGFubmluZyA9IGZhbHNlO1xuICAgIHNlbGYuaXNTd2lwaW5nID0gZmFsc2U7XG4gICAgc2VsZi5pc1pvb21pbmcgPSBmYWxzZTtcbiAgICBzZWxmLmlzU2Nyb2xsaW5nID0gZmFsc2U7XG4gICAgc2VsZi5jYW5QYW4gPSBpbnN0YW5jZS5jYW5QYW4oKTtcblxuICAgIHNlbGYuc3RhcnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgc2VsZi5kaXN0YW5jZVggPSBzZWxmLmRpc3RhbmNlWSA9IHNlbGYuZGlzdGFuY2UgPSAwO1xuXG4gICAgc2VsZi5jYW52YXNXaWR0aCA9IE1hdGgucm91bmQoJHNsaWRlWzBdLmNsaWVudFdpZHRoKTtcbiAgICBzZWxmLmNhbnZhc0hlaWdodCA9IE1hdGgucm91bmQoJHNsaWRlWzBdLmNsaWVudEhlaWdodCk7XG5cbiAgICBzZWxmLmNvbnRlbnRMYXN0UG9zID0gbnVsbDtcbiAgICBzZWxmLmNvbnRlbnRTdGFydFBvcyA9ICQuZmFuY3lib3guZ2V0VHJhbnNsYXRlKHNlbGYuJGNvbnRlbnQpIHx8IHtcbiAgICAgIHRvcDogMCxcbiAgICAgIGxlZnQ6IDBcbiAgICB9O1xuICAgIHNlbGYuc2xpZGVyU3RhcnRQb3MgPSAkLmZhbmN5Ym94LmdldFRyYW5zbGF0ZSgkc2xpZGUpO1xuXG4gICAgLy8gU2luY2UgcG9zaXRpb24gd2lsbCBiZSBhYnNvbHV0ZSwgYnV0IHdlIG5lZWQgdG8gbWFrZSBpdCByZWxhdGl2ZSB0byB0aGUgc3RhZ2VcbiAgICBzZWxmLnN0YWdlUG9zID0gJC5mYW5jeWJveC5nZXRUcmFuc2xhdGUoaW5zdGFuY2UuJHJlZnMuc3RhZ2UpO1xuXG4gICAgc2VsZi5zbGlkZXJTdGFydFBvcy50b3AgLT0gc2VsZi5zdGFnZVBvcy50b3A7XG4gICAgc2VsZi5zbGlkZXJTdGFydFBvcy5sZWZ0IC09IHNlbGYuc3RhZ2VQb3MubGVmdDtcblxuICAgIHNlbGYuY29udGVudFN0YXJ0UG9zLnRvcCAtPSBzZWxmLnN0YWdlUG9zLnRvcDtcbiAgICBzZWxmLmNvbnRlbnRTdGFydFBvcy5sZWZ0IC09IHNlbGYuc3RhZ2VQb3MubGVmdDtcblxuICAgICQoZG9jdW1lbnQpXG4gICAgICAub2ZmKFwiLmZiLnRvdWNoXCIpXG4gICAgICAub24oaXNUb3VjaERldmljZSA/IFwidG91Y2hlbmQuZmIudG91Y2ggdG91Y2hjYW5jZWwuZmIudG91Y2hcIiA6IFwibW91c2V1cC5mYi50b3VjaCBtb3VzZWxlYXZlLmZiLnRvdWNoXCIsICQucHJveHkoc2VsZiwgXCJvbnRvdWNoZW5kXCIpKVxuICAgICAgLm9uKGlzVG91Y2hEZXZpY2UgPyBcInRvdWNobW92ZS5mYi50b3VjaFwiIDogXCJtb3VzZW1vdmUuZmIudG91Y2hcIiwgJC5wcm94eShzZWxmLCBcIm9udG91Y2htb3ZlXCIpKTtcblxuICAgIGlmICgkLmZhbmN5Ym94LmlzTW9iaWxlKSB7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsIHNlbGYub25zY3JvbGwsIHRydWUpO1xuICAgIH1cblxuICAgIC8vIFNraXAgaWYgY2xpY2tlZCBvdXRzaWRlIHRoZSBzbGlkaW5nIGFyZWFcbiAgICBpZiAoIShzZWxmLm9wdHMgfHwgc2VsZi5jYW5QYW4pIHx8ICEoJHRhcmdldC5pcyhzZWxmLiRzdGFnZSkgfHwgc2VsZi4kc3RhZ2UuZmluZCgkdGFyZ2V0KS5sZW5ndGgpKSB7XG4gICAgICBpZiAoJHRhcmdldC5pcyhcIi5mYW5jeWJveC1pbWFnZVwiKSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIGlmICghKCQuZmFuY3lib3guaXNNb2JpbGUgJiYgJHRhcmdldC5wYXJlbnRzKFwiLmZhbmN5Ym94LWNhcHRpb25cIikubGVuZ3RoKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2VsZi5pc1Njcm9sbGFibGUgPSBpc1Njcm9sbGFibGUoJHRhcmdldCkgfHwgaXNTY3JvbGxhYmxlKCR0YXJnZXQucGFyZW50KCkpO1xuXG4gICAgLy8gQ2hlY2sgaWYgZWxlbWVudCBpcyBzY3JvbGxhYmxlIGFuZCB0cnkgdG8gcHJldmVudCBkZWZhdWx0IGJlaGF2aW9yIChzY3JvbGxpbmcpXG4gICAgaWYgKCEoJC5mYW5jeWJveC5pc01vYmlsZSAmJiBzZWxmLmlzU2Nyb2xsYWJsZSkpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG5cbiAgICAvLyBPbmUgZmluZ2VyIG9yIG1vdXNlIGNsaWNrIC0gc3dpcGUgb3IgcGFuIGFuIGltYWdlXG4gICAgaWYgKHNlbGYuc3RhcnRQb2ludHMubGVuZ3RoID09PSAxIHx8IGN1cnJlbnQuaGFzRXJyb3IpIHtcbiAgICAgIGlmIChzZWxmLmNhblBhbikge1xuICAgICAgICAkLmZhbmN5Ym94LnN0b3Aoc2VsZi4kY29udGVudCk7XG5cbiAgICAgICAgc2VsZi5pc1Bhbm5pbmcgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5pc1N3aXBpbmcgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBzZWxmLiRjb250YWluZXIuYWRkQ2xhc3MoXCJmYW5jeWJveC1pcy1ncmFiYmluZ1wiKTtcbiAgICB9XG5cbiAgICAvLyBUd28gZmluZ2VycyAtIHpvb20gaW1hZ2VcbiAgICBpZiAoc2VsZi5zdGFydFBvaW50cy5sZW5ndGggPT09IDIgJiYgY3VycmVudC50eXBlID09PSBcImltYWdlXCIgJiYgKGN1cnJlbnQuaXNMb2FkZWQgfHwgY3VycmVudC4kZ2hvc3QpKSB7XG4gICAgICBzZWxmLmNhblRhcCA9IGZhbHNlO1xuICAgICAgc2VsZi5pc1N3aXBpbmcgPSBmYWxzZTtcbiAgICAgIHNlbGYuaXNQYW5uaW5nID0gZmFsc2U7XG5cbiAgICAgIHNlbGYuaXNab29taW5nID0gdHJ1ZTtcblxuICAgICAgJC5mYW5jeWJveC5zdG9wKHNlbGYuJGNvbnRlbnQpO1xuXG4gICAgICBzZWxmLmNlbnRlclBvaW50U3RhcnRYID0gKHNlbGYuc3RhcnRQb2ludHNbMF0ueCArIHNlbGYuc3RhcnRQb2ludHNbMV0ueCkgKiAwLjUgLSAkKHdpbmRvdykuc2Nyb2xsTGVmdCgpO1xuICAgICAgc2VsZi5jZW50ZXJQb2ludFN0YXJ0WSA9IChzZWxmLnN0YXJ0UG9pbnRzWzBdLnkgKyBzZWxmLnN0YXJ0UG9pbnRzWzFdLnkpICogMC41IC0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG4gICAgICBzZWxmLnBlcmNlbnRhZ2VPZkltYWdlQXRQaW5jaFBvaW50WCA9IChzZWxmLmNlbnRlclBvaW50U3RhcnRYIC0gc2VsZi5jb250ZW50U3RhcnRQb3MubGVmdCkgLyBzZWxmLmNvbnRlbnRTdGFydFBvcy53aWR0aDtcbiAgICAgIHNlbGYucGVyY2VudGFnZU9mSW1hZ2VBdFBpbmNoUG9pbnRZID0gKHNlbGYuY2VudGVyUG9pbnRTdGFydFkgLSBzZWxmLmNvbnRlbnRTdGFydFBvcy50b3ApIC8gc2VsZi5jb250ZW50U3RhcnRQb3MuaGVpZ2h0O1xuXG4gICAgICBzZWxmLnN0YXJ0RGlzdGFuY2VCZXR3ZWVuRmluZ2VycyA9IGRpc3RhbmNlKHNlbGYuc3RhcnRQb2ludHNbMF0sIHNlbGYuc3RhcnRQb2ludHNbMV0pO1xuICAgIH1cbiAgfTtcblxuICBHdWVzdHVyZXMucHJvdG90eXBlLm9uc2Nyb2xsID0gZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICBzZWxmLmlzU2Nyb2xsaW5nID0gdHJ1ZTtcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2VsZi5vbnNjcm9sbCwgdHJ1ZSk7XG4gIH07XG5cbiAgR3Vlc3R1cmVzLnByb3RvdHlwZS5vbnRvdWNobW92ZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgLy8gTWFrZSBzdXJlIHVzZXIgaGFzIG5vdCByZWxlYXNlZCBvdmVyIGlmcmFtZSBvciBkaXNhYmxlZCBlbGVtZW50XG4gICAgaWYgKGUub3JpZ2luYWxFdmVudC5idXR0b25zICE9PSB1bmRlZmluZWQgJiYgZS5vcmlnaW5hbEV2ZW50LmJ1dHRvbnMgPT09IDApIHtcbiAgICAgIHNlbGYub250b3VjaGVuZChlKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoc2VsZi5pc1Njcm9sbGluZykge1xuICAgICAgc2VsZi5jYW5UYXAgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzZWxmLm5ld1BvaW50cyA9IGdldFBvaW50ZXJYWShlKTtcblxuICAgIGlmICghKHNlbGYub3B0cyB8fCBzZWxmLmNhblBhbikgfHwgIXNlbGYubmV3UG9pbnRzLmxlbmd0aCB8fCAhc2VsZi5uZXdQb2ludHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCEoc2VsZi5pc1N3aXBpbmcgJiYgc2VsZi5pc1N3aXBpbmcgPT09IHRydWUpKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuXG4gICAgc2VsZi5kaXN0YW5jZVggPSBkaXN0YW5jZShzZWxmLm5ld1BvaW50c1swXSwgc2VsZi5zdGFydFBvaW50c1swXSwgXCJ4XCIpO1xuICAgIHNlbGYuZGlzdGFuY2VZID0gZGlzdGFuY2Uoc2VsZi5uZXdQb2ludHNbMF0sIHNlbGYuc3RhcnRQb2ludHNbMF0sIFwieVwiKTtcblxuICAgIHNlbGYuZGlzdGFuY2UgPSBkaXN0YW5jZShzZWxmLm5ld1BvaW50c1swXSwgc2VsZi5zdGFydFBvaW50c1swXSk7XG5cbiAgICAvLyBTa2lwIGZhbHNlIG9udG91Y2htb3ZlIGV2ZW50cyAoQ2hyb21lKVxuICAgIGlmIChzZWxmLmRpc3RhbmNlID4gMCkge1xuICAgICAgaWYgKHNlbGYuaXNTd2lwaW5nKSB7XG4gICAgICAgIHNlbGYub25Td2lwZShlKTtcbiAgICAgIH0gZWxzZSBpZiAoc2VsZi5pc1Bhbm5pbmcpIHtcbiAgICAgICAgc2VsZi5vblBhbigpO1xuICAgICAgfSBlbHNlIGlmIChzZWxmLmlzWm9vbWluZykge1xuICAgICAgICBzZWxmLm9uWm9vbSgpO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBHdWVzdHVyZXMucHJvdG90eXBlLm9uU3dpcGUgPSBmdW5jdGlvbiAoZSkge1xuICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgIGluc3RhbmNlID0gc2VsZi5pbnN0YW5jZSxcbiAgICAgIHN3aXBpbmcgPSBzZWxmLmlzU3dpcGluZyxcbiAgICAgIGxlZnQgPSBzZWxmLnNsaWRlclN0YXJ0UG9zLmxlZnQgfHwgMCxcbiAgICAgIGFuZ2xlO1xuXG4gICAgLy8gSWYgZGlyZWN0aW9uIGlzIG5vdCB5ZXQgZGV0ZXJtaW5lZFxuICAgIGlmIChzd2lwaW5nID09PSB0cnVlKSB7XG4gICAgICAvLyBXZSBuZWVkIGF0IGxlYXN0IDEwcHggZGlzdGFuY2UgdG8gY29ycmVjdGx5IGNhbGN1bGF0ZSBhbiBhbmdsZVxuICAgICAgaWYgKE1hdGguYWJzKHNlbGYuZGlzdGFuY2UpID4gMTApIHtcbiAgICAgICAgc2VsZi5jYW5UYXAgPSBmYWxzZTtcblxuICAgICAgICBpZiAoaW5zdGFuY2UuZ3JvdXAubGVuZ3RoIDwgMiAmJiBzZWxmLm9wdHMudmVydGljYWwpIHtcbiAgICAgICAgICBzZWxmLmlzU3dpcGluZyA9IFwieVwiO1xuICAgICAgICB9IGVsc2UgaWYgKGluc3RhbmNlLmlzRHJhZ2dpbmcgfHwgc2VsZi5vcHRzLnZlcnRpY2FsID09PSBmYWxzZSB8fCAoc2VsZi5vcHRzLnZlcnRpY2FsID09PSBcImF1dG9cIiAmJiAkKHdpbmRvdykud2lkdGgoKSA+IDgwMCkpIHtcbiAgICAgICAgICBzZWxmLmlzU3dpcGluZyA9IFwieFwiO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFuZ2xlID0gTWF0aC5hYnMoKE1hdGguYXRhbjIoc2VsZi5kaXN0YW5jZVksIHNlbGYuZGlzdGFuY2VYKSAqIDE4MCkgLyBNYXRoLlBJKTtcblxuICAgICAgICAgIHNlbGYuaXNTd2lwaW5nID0gYW5nbGUgPiA0NSAmJiBhbmdsZSA8IDEzNSA/IFwieVwiIDogXCJ4XCI7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoc2VsZi5pc1N3aXBpbmcgPT09IFwieVwiICYmICQuZmFuY3lib3guaXNNb2JpbGUgJiYgc2VsZi5pc1Njcm9sbGFibGUpIHtcbiAgICAgICAgICBzZWxmLmlzU2Nyb2xsaW5nID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGluc3RhbmNlLmlzRHJhZ2dpbmcgPSBzZWxmLmlzU3dpcGluZztcblxuICAgICAgICAvLyBSZXNldCBwb2ludHMgdG8gYXZvaWQganVtcGluZywgYmVjYXVzZSB3ZSBkcm9wcGVkIGZpcnN0IHN3aXBlcyB0byBjYWxjdWxhdGUgdGhlIGFuZ2xlXG4gICAgICAgIHNlbGYuc3RhcnRQb2ludHMgPSBzZWxmLm5ld1BvaW50cztcblxuICAgICAgICAkLmVhY2goaW5zdGFuY2Uuc2xpZGVzLCBmdW5jdGlvbiAoaW5kZXgsIHNsaWRlKSB7XG4gICAgICAgICAgdmFyIHNsaWRlUG9zLCBzdGFnZVBvcztcblxuICAgICAgICAgICQuZmFuY3lib3guc3RvcChzbGlkZS4kc2xpZGUpO1xuXG4gICAgICAgICAgc2xpZGVQb3MgPSAkLmZhbmN5Ym94LmdldFRyYW5zbGF0ZShzbGlkZS4kc2xpZGUpO1xuICAgICAgICAgIHN0YWdlUG9zID0gJC5mYW5jeWJveC5nZXRUcmFuc2xhdGUoaW5zdGFuY2UuJHJlZnMuc3RhZ2UpO1xuXG4gICAgICAgICAgc2xpZGUuJHNsaWRlXG4gICAgICAgICAgICAuY3NzKHtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiBcIlwiLFxuICAgICAgICAgICAgICBvcGFjaXR5OiBcIlwiLFxuICAgICAgICAgICAgICBcInRyYW5zaXRpb24tZHVyYXRpb25cIjogXCJcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcyhcImZhbmN5Ym94LWFuaW1hdGVkXCIpXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoZnVuY3Rpb24gKGluZGV4LCBjbGFzc05hbWUpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChjbGFzc05hbWUubWF0Y2goLyhefFxccylmYW5jeWJveC1meC1cXFMrL2cpIHx8IFtdKS5qb2luKFwiIFwiKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKHNsaWRlLnBvcyA9PT0gaW5zdGFuY2UuY3VycmVudC5wb3MpIHtcbiAgICAgICAgICAgIHNlbGYuc2xpZGVyU3RhcnRQb3MudG9wID0gc2xpZGVQb3MudG9wIC0gc3RhZ2VQb3MudG9wO1xuICAgICAgICAgICAgc2VsZi5zbGlkZXJTdGFydFBvcy5sZWZ0ID0gc2xpZGVQb3MubGVmdCAtIHN0YWdlUG9zLmxlZnQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgJC5mYW5jeWJveC5zZXRUcmFuc2xhdGUoc2xpZGUuJHNsaWRlLCB7XG4gICAgICAgICAgICB0b3A6IHNsaWRlUG9zLnRvcCAtIHN0YWdlUG9zLnRvcCxcbiAgICAgICAgICAgIGxlZnQ6IHNsaWRlUG9zLmxlZnQgLSBzdGFnZVBvcy5sZWZ0XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8vIFN0b3Agc2xpZGVzaG93XG4gICAgICAgIGlmIChpbnN0YW5jZS5TbGlkZVNob3cgJiYgaW5zdGFuY2UuU2xpZGVTaG93LmlzQWN0aXZlKSB7XG4gICAgICAgICAgaW5zdGFuY2UuU2xpZGVTaG93LnN0b3AoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gU3RpY2t5IGVkZ2VzXG4gICAgaWYgKHN3aXBpbmcgPT0gXCJ4XCIpIHtcbiAgICAgIGlmIChcbiAgICAgICAgc2VsZi5kaXN0YW5jZVggPiAwICYmXG4gICAgICAgIChzZWxmLmluc3RhbmNlLmdyb3VwLmxlbmd0aCA8IDIgfHwgKHNlbGYuaW5zdGFuY2UuY3VycmVudC5pbmRleCA9PT0gMCAmJiAhc2VsZi5pbnN0YW5jZS5jdXJyZW50Lm9wdHMubG9vcCkpXG4gICAgICApIHtcbiAgICAgICAgbGVmdCA9IGxlZnQgKyBNYXRoLnBvdyhzZWxmLmRpc3RhbmNlWCwgMC44KTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIHNlbGYuZGlzdGFuY2VYIDwgMCAmJlxuICAgICAgICAoc2VsZi5pbnN0YW5jZS5ncm91cC5sZW5ndGggPCAyIHx8XG4gICAgICAgICAgKHNlbGYuaW5zdGFuY2UuY3VycmVudC5pbmRleCA9PT0gc2VsZi5pbnN0YW5jZS5ncm91cC5sZW5ndGggLSAxICYmICFzZWxmLmluc3RhbmNlLmN1cnJlbnQub3B0cy5sb29wKSlcbiAgICAgICkge1xuICAgICAgICBsZWZ0ID0gbGVmdCAtIE1hdGgucG93KC1zZWxmLmRpc3RhbmNlWCwgMC44KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxlZnQgPSBsZWZ0ICsgc2VsZi5kaXN0YW5jZVg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc2VsZi5zbGlkZXJMYXN0UG9zID0ge1xuICAgICAgdG9wOiBzd2lwaW5nID09IFwieFwiID8gMCA6IHNlbGYuc2xpZGVyU3RhcnRQb3MudG9wICsgc2VsZi5kaXN0YW5jZVksXG4gICAgICBsZWZ0OiBsZWZ0XG4gICAgfTtcblxuICAgIGlmIChzZWxmLnJlcXVlc3RJZCkge1xuICAgICAgY2FuY2VsQUZyYW1lKHNlbGYucmVxdWVzdElkKTtcblxuICAgICAgc2VsZi5yZXF1ZXN0SWQgPSBudWxsO1xuICAgIH1cblxuICAgIHNlbGYucmVxdWVzdElkID0gcmVxdWVzdEFGcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoc2VsZi5zbGlkZXJMYXN0UG9zKSB7XG4gICAgICAgICQuZWFjaChzZWxmLmluc3RhbmNlLnNsaWRlcywgZnVuY3Rpb24gKGluZGV4LCBzbGlkZSkge1xuICAgICAgICAgIHZhciBwb3MgPSBzbGlkZS5wb3MgLSBzZWxmLmluc3RhbmNlLmN1cnJQb3M7XG5cbiAgICAgICAgICAkLmZhbmN5Ym94LnNldFRyYW5zbGF0ZShzbGlkZS4kc2xpZGUsIHtcbiAgICAgICAgICAgIHRvcDogc2VsZi5zbGlkZXJMYXN0UG9zLnRvcCxcbiAgICAgICAgICAgIGxlZnQ6IHNlbGYuc2xpZGVyTGFzdFBvcy5sZWZ0ICsgcG9zICogc2VsZi5jYW52YXNXaWR0aCArIHBvcyAqIHNsaWRlLm9wdHMuZ3V0dGVyXG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNlbGYuJGNvbnRhaW5lci5hZGRDbGFzcyhcImZhbmN5Ym94LWlzLXNsaWRpbmdcIik7XG4gICAgICB9XG4gICAgfSk7XG4gIH07XG5cbiAgR3Vlc3R1cmVzLnByb3RvdHlwZS5vblBhbiA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAvLyBQcmV2ZW50IGFjY2lkZW50YWwgbW92ZW1lbnQgKHNvbWV0aW1lcywgd2hlbiB0YXBwaW5nIGNhc3VhbGx5LCBmaW5nZXIgY2FuIG1vdmUgYSBiaXQpXG4gICAgaWYgKGRpc3RhbmNlKHNlbGYubmV3UG9pbnRzWzBdLCBzZWxmLnJlYWxQb2ludHNbMF0pIDwgKCQuZmFuY3lib3guaXNNb2JpbGUgPyAxMCA6IDUpKSB7XG4gICAgICBzZWxmLnN0YXJ0UG9pbnRzID0gc2VsZi5uZXdQb2ludHM7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgc2VsZi5jYW5UYXAgPSBmYWxzZTtcblxuICAgIHNlbGYuY29udGVudExhc3RQb3MgPSBzZWxmLmxpbWl0TW92ZW1lbnQoKTtcblxuICAgIGlmIChzZWxmLnJlcXVlc3RJZCkge1xuICAgICAgY2FuY2VsQUZyYW1lKHNlbGYucmVxdWVzdElkKTtcbiAgICB9XG5cbiAgICBzZWxmLnJlcXVlc3RJZCA9IHJlcXVlc3RBRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgJC5mYW5jeWJveC5zZXRUcmFuc2xhdGUoc2VsZi4kY29udGVudCwgc2VsZi5jb250ZW50TGFzdFBvcyk7XG4gICAgfSk7XG4gIH07XG5cbiAgLy8gTWFrZSBwYW5uaW5nIHN0aWNreSB0byB0aGUgZWRnZXNcbiAgR3Vlc3R1cmVzLnByb3RvdHlwZS5saW1pdE1vdmVtZW50ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBjYW52YXNXaWR0aCA9IHNlbGYuY2FudmFzV2lkdGg7XG4gICAgdmFyIGNhbnZhc0hlaWdodCA9IHNlbGYuY2FudmFzSGVpZ2h0O1xuXG4gICAgdmFyIGRpc3RhbmNlWCA9IHNlbGYuZGlzdGFuY2VYO1xuICAgIHZhciBkaXN0YW5jZVkgPSBzZWxmLmRpc3RhbmNlWTtcblxuICAgIHZhciBjb250ZW50U3RhcnRQb3MgPSBzZWxmLmNvbnRlbnRTdGFydFBvcztcblxuICAgIHZhciBjdXJyZW50T2Zmc2V0WCA9IGNvbnRlbnRTdGFydFBvcy5sZWZ0O1xuICAgIHZhciBjdXJyZW50T2Zmc2V0WSA9IGNvbnRlbnRTdGFydFBvcy50b3A7XG5cbiAgICB2YXIgY3VycmVudFdpZHRoID0gY29udGVudFN0YXJ0UG9zLndpZHRoO1xuICAgIHZhciBjdXJyZW50SGVpZ2h0ID0gY29udGVudFN0YXJ0UG9zLmhlaWdodDtcblxuICAgIHZhciBtaW5UcmFuc2xhdGVYLCBtaW5UcmFuc2xhdGVZLCBtYXhUcmFuc2xhdGVYLCBtYXhUcmFuc2xhdGVZLCBuZXdPZmZzZXRYLCBuZXdPZmZzZXRZO1xuXG4gICAgaWYgKGN1cnJlbnRXaWR0aCA+IGNhbnZhc1dpZHRoKSB7XG4gICAgICBuZXdPZmZzZXRYID0gY3VycmVudE9mZnNldFggKyBkaXN0YW5jZVg7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5ld09mZnNldFggPSBjdXJyZW50T2Zmc2V0WDtcbiAgICB9XG5cbiAgICBuZXdPZmZzZXRZID0gY3VycmVudE9mZnNldFkgKyBkaXN0YW5jZVk7XG5cbiAgICAvLyBTbG93IGRvd24gcHJvcG9ydGlvbmFsbHkgdG8gdHJhdmVsZWQgZGlzdGFuY2VcbiAgICBtaW5UcmFuc2xhdGVYID0gTWF0aC5tYXgoMCwgY2FudmFzV2lkdGggKiAwLjUgLSBjdXJyZW50V2lkdGggKiAwLjUpO1xuICAgIG1pblRyYW5zbGF0ZVkgPSBNYXRoLm1heCgwLCBjYW52YXNIZWlnaHQgKiAwLjUgLSBjdXJyZW50SGVpZ2h0ICogMC41KTtcblxuICAgIG1heFRyYW5zbGF0ZVggPSBNYXRoLm1pbihjYW52YXNXaWR0aCAtIGN1cnJlbnRXaWR0aCwgY2FudmFzV2lkdGggKiAwLjUgLSBjdXJyZW50V2lkdGggKiAwLjUpO1xuICAgIG1heFRyYW5zbGF0ZVkgPSBNYXRoLm1pbihjYW52YXNIZWlnaHQgLSBjdXJyZW50SGVpZ2h0LCBjYW52YXNIZWlnaHQgKiAwLjUgLSBjdXJyZW50SGVpZ2h0ICogMC41KTtcblxuICAgIC8vICAgLT5cbiAgICBpZiAoZGlzdGFuY2VYID4gMCAmJiBuZXdPZmZzZXRYID4gbWluVHJhbnNsYXRlWCkge1xuICAgICAgbmV3T2Zmc2V0WCA9IG1pblRyYW5zbGF0ZVggLSAxICsgTWF0aC5wb3coLW1pblRyYW5zbGF0ZVggKyBjdXJyZW50T2Zmc2V0WCArIGRpc3RhbmNlWCwgMC44KSB8fCAwO1xuICAgIH1cblxuICAgIC8vICAgIDwtXG4gICAgaWYgKGRpc3RhbmNlWCA8IDAgJiYgbmV3T2Zmc2V0WCA8IG1heFRyYW5zbGF0ZVgpIHtcbiAgICAgIG5ld09mZnNldFggPSBtYXhUcmFuc2xhdGVYICsgMSAtIE1hdGgucG93KG1heFRyYW5zbGF0ZVggLSBjdXJyZW50T2Zmc2V0WCAtIGRpc3RhbmNlWCwgMC44KSB8fCAwO1xuICAgIH1cblxuICAgIC8vICAgXFwvXG4gICAgaWYgKGRpc3RhbmNlWSA+IDAgJiYgbmV3T2Zmc2V0WSA+IG1pblRyYW5zbGF0ZVkpIHtcbiAgICAgIG5ld09mZnNldFkgPSBtaW5UcmFuc2xhdGVZIC0gMSArIE1hdGgucG93KC1taW5UcmFuc2xhdGVZICsgY3VycmVudE9mZnNldFkgKyBkaXN0YW5jZVksIDAuOCkgfHwgMDtcbiAgICB9XG5cbiAgICAvLyAgIC9cXFxuICAgIGlmIChkaXN0YW5jZVkgPCAwICYmIG5ld09mZnNldFkgPCBtYXhUcmFuc2xhdGVZKSB7XG4gICAgICBuZXdPZmZzZXRZID0gbWF4VHJhbnNsYXRlWSArIDEgLSBNYXRoLnBvdyhtYXhUcmFuc2xhdGVZIC0gY3VycmVudE9mZnNldFkgLSBkaXN0YW5jZVksIDAuOCkgfHwgMDtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgdG9wOiBuZXdPZmZzZXRZLFxuICAgICAgbGVmdDogbmV3T2Zmc2V0WFxuICAgIH07XG4gIH07XG5cbiAgR3Vlc3R1cmVzLnByb3RvdHlwZS5saW1pdFBvc2l0aW9uID0gZnVuY3Rpb24gKG5ld09mZnNldFgsIG5ld09mZnNldFksIG5ld1dpZHRoLCBuZXdIZWlnaHQpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgY2FudmFzV2lkdGggPSBzZWxmLmNhbnZhc1dpZHRoO1xuICAgIHZhciBjYW52YXNIZWlnaHQgPSBzZWxmLmNhbnZhc0hlaWdodDtcblxuICAgIGlmIChuZXdXaWR0aCA+IGNhbnZhc1dpZHRoKSB7XG4gICAgICBuZXdPZmZzZXRYID0gbmV3T2Zmc2V0WCA+IDAgPyAwIDogbmV3T2Zmc2V0WDtcbiAgICAgIG5ld09mZnNldFggPSBuZXdPZmZzZXRYIDwgY2FudmFzV2lkdGggLSBuZXdXaWR0aCA/IGNhbnZhc1dpZHRoIC0gbmV3V2lkdGggOiBuZXdPZmZzZXRYO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDZW50ZXIgaG9yaXpvbnRhbGx5XG4gICAgICBuZXdPZmZzZXRYID0gTWF0aC5tYXgoMCwgY2FudmFzV2lkdGggLyAyIC0gbmV3V2lkdGggLyAyKTtcbiAgICB9XG5cbiAgICBpZiAobmV3SGVpZ2h0ID4gY2FudmFzSGVpZ2h0KSB7XG4gICAgICBuZXdPZmZzZXRZID0gbmV3T2Zmc2V0WSA+IDAgPyAwIDogbmV3T2Zmc2V0WTtcbiAgICAgIG5ld09mZnNldFkgPSBuZXdPZmZzZXRZIDwgY2FudmFzSGVpZ2h0IC0gbmV3SGVpZ2h0ID8gY2FudmFzSGVpZ2h0IC0gbmV3SGVpZ2h0IDogbmV3T2Zmc2V0WTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gQ2VudGVyIHZlcnRpY2FsbHlcbiAgICAgIG5ld09mZnNldFkgPSBNYXRoLm1heCgwLCBjYW52YXNIZWlnaHQgLyAyIC0gbmV3SGVpZ2h0IC8gMik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHRvcDogbmV3T2Zmc2V0WSxcbiAgICAgIGxlZnQ6IG5ld09mZnNldFhcbiAgICB9O1xuICB9O1xuXG4gIEd1ZXN0dXJlcy5wcm90b3R5cGUub25ab29tID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIC8vIENhbGN1bGF0ZSBjdXJyZW50IGRpc3RhbmNlIGJldHdlZW4gcG9pbnRzIHRvIGdldCBwaW5jaCByYXRpbyBhbmQgbmV3IHdpZHRoIGFuZCBoZWlnaHRcbiAgICB2YXIgY29udGVudFN0YXJ0UG9zID0gc2VsZi5jb250ZW50U3RhcnRQb3M7XG5cbiAgICB2YXIgY3VycmVudFdpZHRoID0gY29udGVudFN0YXJ0UG9zLndpZHRoO1xuICAgIHZhciBjdXJyZW50SGVpZ2h0ID0gY29udGVudFN0YXJ0UG9zLmhlaWdodDtcblxuICAgIHZhciBjdXJyZW50T2Zmc2V0WCA9IGNvbnRlbnRTdGFydFBvcy5sZWZ0O1xuICAgIHZhciBjdXJyZW50T2Zmc2V0WSA9IGNvbnRlbnRTdGFydFBvcy50b3A7XG5cbiAgICB2YXIgZW5kRGlzdGFuY2VCZXR3ZWVuRmluZ2VycyA9IGRpc3RhbmNlKHNlbGYubmV3UG9pbnRzWzBdLCBzZWxmLm5ld1BvaW50c1sxXSk7XG5cbiAgICB2YXIgcGluY2hSYXRpbyA9IGVuZERpc3RhbmNlQmV0d2VlbkZpbmdlcnMgLyBzZWxmLnN0YXJ0RGlzdGFuY2VCZXR3ZWVuRmluZ2VycztcblxuICAgIHZhciBuZXdXaWR0aCA9IE1hdGguZmxvb3IoY3VycmVudFdpZHRoICogcGluY2hSYXRpbyk7XG4gICAgdmFyIG5ld0hlaWdodCA9IE1hdGguZmxvb3IoY3VycmVudEhlaWdodCAqIHBpbmNoUmF0aW8pO1xuXG4gICAgLy8gVGhpcyBpcyB0aGUgdHJhbnNsYXRpb24gZHVlIHRvIHBpbmNoLXpvb21pbmdcbiAgICB2YXIgdHJhbnNsYXRlRnJvbVpvb21pbmdYID0gKGN1cnJlbnRXaWR0aCAtIG5ld1dpZHRoKSAqIHNlbGYucGVyY2VudGFnZU9mSW1hZ2VBdFBpbmNoUG9pbnRYO1xuICAgIHZhciB0cmFuc2xhdGVGcm9tWm9vbWluZ1kgPSAoY3VycmVudEhlaWdodCAtIG5ld0hlaWdodCkgKiBzZWxmLnBlcmNlbnRhZ2VPZkltYWdlQXRQaW5jaFBvaW50WTtcblxuICAgIC8vIFBvaW50IGJldHdlZW4gdGhlIHR3byB0b3VjaGVzXG4gICAgdmFyIGNlbnRlclBvaW50RW5kWCA9IChzZWxmLm5ld1BvaW50c1swXS54ICsgc2VsZi5uZXdQb2ludHNbMV0ueCkgLyAyIC0gJCh3aW5kb3cpLnNjcm9sbExlZnQoKTtcbiAgICB2YXIgY2VudGVyUG9pbnRFbmRZID0gKHNlbGYubmV3UG9pbnRzWzBdLnkgKyBzZWxmLm5ld1BvaW50c1sxXS55KSAvIDIgLSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cbiAgICAvLyBBbmQgdGhpcyBpcyB0aGUgdHJhbnNsYXRpb24gZHVlIHRvIHRyYW5zbGF0aW9uIG9mIHRoZSBjZW50ZXJwb2ludFxuICAgIC8vIGJldHdlZW4gdGhlIHR3byBmaW5nZXJzXG4gICAgdmFyIHRyYW5zbGF0ZUZyb21UcmFuc2xhdGluZ1ggPSBjZW50ZXJQb2ludEVuZFggLSBzZWxmLmNlbnRlclBvaW50U3RhcnRYO1xuICAgIHZhciB0cmFuc2xhdGVGcm9tVHJhbnNsYXRpbmdZID0gY2VudGVyUG9pbnRFbmRZIC0gc2VsZi5jZW50ZXJQb2ludFN0YXJ0WTtcblxuICAgIC8vIFRoZSBuZXcgb2Zmc2V0IGlzIHRoZSBvbGQvY3VycmVudCBvbmUgcGx1cyB0aGUgdG90YWwgdHJhbnNsYXRpb25cbiAgICB2YXIgbmV3T2Zmc2V0WCA9IGN1cnJlbnRPZmZzZXRYICsgKHRyYW5zbGF0ZUZyb21ab29taW5nWCArIHRyYW5zbGF0ZUZyb21UcmFuc2xhdGluZ1gpO1xuICAgIHZhciBuZXdPZmZzZXRZID0gY3VycmVudE9mZnNldFkgKyAodHJhbnNsYXRlRnJvbVpvb21pbmdZICsgdHJhbnNsYXRlRnJvbVRyYW5zbGF0aW5nWSk7XG5cbiAgICB2YXIgbmV3UG9zID0ge1xuICAgICAgdG9wOiBuZXdPZmZzZXRZLFxuICAgICAgbGVmdDogbmV3T2Zmc2V0WCxcbiAgICAgIHNjYWxlWDogcGluY2hSYXRpbyxcbiAgICAgIHNjYWxlWTogcGluY2hSYXRpb1xuICAgIH07XG5cbiAgICBzZWxmLmNhblRhcCA9IGZhbHNlO1xuXG4gICAgc2VsZi5uZXdXaWR0aCA9IG5ld1dpZHRoO1xuICAgIHNlbGYubmV3SGVpZ2h0ID0gbmV3SGVpZ2h0O1xuXG4gICAgc2VsZi5jb250ZW50TGFzdFBvcyA9IG5ld1BvcztcblxuICAgIGlmIChzZWxmLnJlcXVlc3RJZCkge1xuICAgICAgY2FuY2VsQUZyYW1lKHNlbGYucmVxdWVzdElkKTtcbiAgICB9XG5cbiAgICBzZWxmLnJlcXVlc3RJZCA9IHJlcXVlc3RBRnJhbWUoZnVuY3Rpb24gKCkge1xuICAgICAgJC5mYW5jeWJveC5zZXRUcmFuc2xhdGUoc2VsZi4kY29udGVudCwgc2VsZi5jb250ZW50TGFzdFBvcyk7XG4gICAgfSk7XG4gIH07XG5cbiAgR3Vlc3R1cmVzLnByb3RvdHlwZS5vbnRvdWNoZW5kID0gZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICB2YXIgc3dpcGluZyA9IHNlbGYuaXNTd2lwaW5nO1xuICAgIHZhciBwYW5uaW5nID0gc2VsZi5pc1Bhbm5pbmc7XG4gICAgdmFyIHpvb21pbmcgPSBzZWxmLmlzWm9vbWluZztcbiAgICB2YXIgc2Nyb2xsaW5nID0gc2VsZi5pc1Njcm9sbGluZztcblxuICAgIHNlbGYuZW5kUG9pbnRzID0gZ2V0UG9pbnRlclhZKGUpO1xuICAgIHNlbGYuZE1zID0gTWF0aC5tYXgobmV3IERhdGUoKS5nZXRUaW1lKCkgLSBzZWxmLnN0YXJ0VGltZSwgMSk7XG5cbiAgICBzZWxmLiRjb250YWluZXIucmVtb3ZlQ2xhc3MoXCJmYW5jeWJveC1pcy1ncmFiYmluZ1wiKTtcblxuICAgICQoZG9jdW1lbnQpLm9mZihcIi5mYi50b3VjaFwiKTtcblxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJzY3JvbGxcIiwgc2VsZi5vbnNjcm9sbCwgdHJ1ZSk7XG5cbiAgICBpZiAoc2VsZi5yZXF1ZXN0SWQpIHtcbiAgICAgIGNhbmNlbEFGcmFtZShzZWxmLnJlcXVlc3RJZCk7XG5cbiAgICAgIHNlbGYucmVxdWVzdElkID0gbnVsbDtcbiAgICB9XG5cbiAgICBzZWxmLmlzU3dpcGluZyA9IGZhbHNlO1xuICAgIHNlbGYuaXNQYW5uaW5nID0gZmFsc2U7XG4gICAgc2VsZi5pc1pvb21pbmcgPSBmYWxzZTtcbiAgICBzZWxmLmlzU2Nyb2xsaW5nID0gZmFsc2U7XG5cbiAgICBzZWxmLmluc3RhbmNlLmlzRHJhZ2dpbmcgPSBmYWxzZTtcblxuICAgIGlmIChzZWxmLmNhblRhcCkge1xuICAgICAgcmV0dXJuIHNlbGYub25UYXAoZSk7XG4gICAgfVxuXG4gICAgc2VsZi5zcGVlZCA9IDEwMDtcblxuICAgIC8vIFNwZWVkIGluIHB4L21zXG4gICAgc2VsZi52ZWxvY2l0eVggPSAoc2VsZi5kaXN0YW5jZVggLyBzZWxmLmRNcykgKiAwLjU7XG4gICAgc2VsZi52ZWxvY2l0eVkgPSAoc2VsZi5kaXN0YW5jZVkgLyBzZWxmLmRNcykgKiAwLjU7XG5cbiAgICBpZiAocGFubmluZykge1xuICAgICAgc2VsZi5lbmRQYW5uaW5nKCk7XG4gICAgfSBlbHNlIGlmICh6b29taW5nKSB7XG4gICAgICBzZWxmLmVuZFpvb21pbmcoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2VsZi5lbmRTd2lwaW5nKHN3aXBpbmcsIHNjcm9sbGluZyk7XG4gICAgfVxuXG4gICAgcmV0dXJuO1xuICB9O1xuXG4gIEd1ZXN0dXJlcy5wcm90b3R5cGUuZW5kU3dpcGluZyA9IGZ1bmN0aW9uIChzd2lwaW5nLCBzY3JvbGxpbmcpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICByZXQgPSBmYWxzZSxcbiAgICAgIGxlbiA9IHNlbGYuaW5zdGFuY2UuZ3JvdXAubGVuZ3RoLFxuICAgICAgZGlzdGFuY2VYID0gTWF0aC5hYnMoc2VsZi5kaXN0YW5jZVgpLFxuICAgICAgY2FuQWR2YW5jZSA9IHN3aXBpbmcgPT0gXCJ4XCIgJiYgbGVuID4gMSAmJiAoKHNlbGYuZE1zID4gMTMwICYmIGRpc3RhbmNlWCA+IDEwKSB8fCBkaXN0YW5jZVggPiA1MCksXG4gICAgICBzcGVlZFggPSAzMDA7XG5cbiAgICBzZWxmLnNsaWRlckxhc3RQb3MgPSBudWxsO1xuXG4gICAgLy8gQ2xvc2UgaWYgc3dpcGVkIHZlcnRpY2FsbHkgLyBuYXZpZ2F0ZSBpZiBob3Jpem9udGFsbHlcbiAgICBpZiAoc3dpcGluZyA9PSBcInlcIiAmJiAhc2Nyb2xsaW5nICYmIE1hdGguYWJzKHNlbGYuZGlzdGFuY2VZKSA+IDUwKSB7XG4gICAgICAvLyBDb250aW51ZSB2ZXJ0aWNhbCBtb3ZlbWVudFxuICAgICAgJC5mYW5jeWJveC5hbmltYXRlKFxuICAgICAgICBzZWxmLmluc3RhbmNlLmN1cnJlbnQuJHNsaWRlLCB7XG4gICAgICAgICAgdG9wOiBzZWxmLnNsaWRlclN0YXJ0UG9zLnRvcCArIHNlbGYuZGlzdGFuY2VZICsgc2VsZi52ZWxvY2l0eVkgKiAxNTAsXG4gICAgICAgICAgb3BhY2l0eTogMFxuICAgICAgICB9LFxuICAgICAgICAyMDBcbiAgICAgICk7XG4gICAgICByZXQgPSBzZWxmLmluc3RhbmNlLmNsb3NlKHRydWUsIDI1MCk7XG4gICAgfSBlbHNlIGlmIChjYW5BZHZhbmNlICYmIHNlbGYuZGlzdGFuY2VYID4gMCkge1xuICAgICAgcmV0ID0gc2VsZi5pbnN0YW5jZS5wcmV2aW91cyhzcGVlZFgpO1xuICAgIH0gZWxzZSBpZiAoY2FuQWR2YW5jZSAmJiBzZWxmLmRpc3RhbmNlWCA8IDApIHtcbiAgICAgIHJldCA9IHNlbGYuaW5zdGFuY2UubmV4dChzcGVlZFgpO1xuICAgIH1cblxuICAgIGlmIChyZXQgPT09IGZhbHNlICYmIChzd2lwaW5nID09IFwieFwiIHx8IHN3aXBpbmcgPT0gXCJ5XCIpKSB7XG4gICAgICBzZWxmLmluc3RhbmNlLmNlbnRlclNsaWRlKDIwMCk7XG4gICAgfVxuXG4gICAgc2VsZi4kY29udGFpbmVyLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtaXMtc2xpZGluZ1wiKTtcbiAgfTtcblxuICAvLyBMaW1pdCBwYW5uaW5nIGZyb20gZWRnZXNcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09XG4gIEd1ZXN0dXJlcy5wcm90b3R5cGUuZW5kUGFubmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICBuZXdPZmZzZXRYLFxuICAgICAgbmV3T2Zmc2V0WSxcbiAgICAgIG5ld1BvcztcblxuICAgIGlmICghc2VsZi5jb250ZW50TGFzdFBvcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChzZWxmLm9wdHMubW9tZW50dW0gPT09IGZhbHNlIHx8IHNlbGYuZE1zID4gMzUwKSB7XG4gICAgICBuZXdPZmZzZXRYID0gc2VsZi5jb250ZW50TGFzdFBvcy5sZWZ0O1xuICAgICAgbmV3T2Zmc2V0WSA9IHNlbGYuY29udGVudExhc3RQb3MudG9wO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBDb250aW51ZSBtb3ZlbWVudFxuICAgICAgbmV3T2Zmc2V0WCA9IHNlbGYuY29udGVudExhc3RQb3MubGVmdCArIHNlbGYudmVsb2NpdHlYICogNTAwO1xuICAgICAgbmV3T2Zmc2V0WSA9IHNlbGYuY29udGVudExhc3RQb3MudG9wICsgc2VsZi52ZWxvY2l0eVkgKiA1MDA7XG4gICAgfVxuXG4gICAgbmV3UG9zID0gc2VsZi5saW1pdFBvc2l0aW9uKG5ld09mZnNldFgsIG5ld09mZnNldFksIHNlbGYuY29udGVudFN0YXJ0UG9zLndpZHRoLCBzZWxmLmNvbnRlbnRTdGFydFBvcy5oZWlnaHQpO1xuXG4gICAgbmV3UG9zLndpZHRoID0gc2VsZi5jb250ZW50U3RhcnRQb3Mud2lkdGg7XG4gICAgbmV3UG9zLmhlaWdodCA9IHNlbGYuY29udGVudFN0YXJ0UG9zLmhlaWdodDtcblxuICAgICQuZmFuY3lib3guYW5pbWF0ZShzZWxmLiRjb250ZW50LCBuZXdQb3MsIDM2Nik7XG4gIH07XG5cbiAgR3Vlc3R1cmVzLnByb3RvdHlwZS5lbmRab29taW5nID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgIHZhciBjdXJyZW50ID0gc2VsZi5pbnN0YW5jZS5jdXJyZW50O1xuXG4gICAgdmFyIG5ld09mZnNldFgsIG5ld09mZnNldFksIG5ld1BvcywgcmVzZXQ7XG5cbiAgICB2YXIgbmV3V2lkdGggPSBzZWxmLm5ld1dpZHRoO1xuICAgIHZhciBuZXdIZWlnaHQgPSBzZWxmLm5ld0hlaWdodDtcblxuICAgIGlmICghc2VsZi5jb250ZW50TGFzdFBvcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIG5ld09mZnNldFggPSBzZWxmLmNvbnRlbnRMYXN0UG9zLmxlZnQ7XG4gICAgbmV3T2Zmc2V0WSA9IHNlbGYuY29udGVudExhc3RQb3MudG9wO1xuXG4gICAgcmVzZXQgPSB7XG4gICAgICB0b3A6IG5ld09mZnNldFksXG4gICAgICBsZWZ0OiBuZXdPZmZzZXRYLFxuICAgICAgd2lkdGg6IG5ld1dpZHRoLFxuICAgICAgaGVpZ2h0OiBuZXdIZWlnaHQsXG4gICAgICBzY2FsZVg6IDEsXG4gICAgICBzY2FsZVk6IDFcbiAgICB9O1xuXG4gICAgLy8gUmVzZXQgc2NhbGV4L3NjYWxlWSB2YWx1ZXM7IHRoaXMgaGVscHMgZm9yIHBlcmZvbWFuY2UgYW5kIGRvZXMgbm90IGJyZWFrIGFuaW1hdGlvblxuICAgICQuZmFuY3lib3guc2V0VHJhbnNsYXRlKHNlbGYuJGNvbnRlbnQsIHJlc2V0KTtcblxuICAgIGlmIChuZXdXaWR0aCA8IHNlbGYuY2FudmFzV2lkdGggJiYgbmV3SGVpZ2h0IDwgc2VsZi5jYW52YXNIZWlnaHQpIHtcbiAgICAgIHNlbGYuaW5zdGFuY2Uuc2NhbGVUb0ZpdCgxNTApO1xuICAgIH0gZWxzZSBpZiAobmV3V2lkdGggPiBjdXJyZW50LndpZHRoIHx8IG5ld0hlaWdodCA+IGN1cnJlbnQuaGVpZ2h0KSB7XG4gICAgICBzZWxmLmluc3RhbmNlLnNjYWxlVG9BY3R1YWwoc2VsZi5jZW50ZXJQb2ludFN0YXJ0WCwgc2VsZi5jZW50ZXJQb2ludFN0YXJ0WSwgMTUwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3UG9zID0gc2VsZi5saW1pdFBvc2l0aW9uKG5ld09mZnNldFgsIG5ld09mZnNldFksIG5ld1dpZHRoLCBuZXdIZWlnaHQpO1xuXG4gICAgICAkLmZhbmN5Ym94LmFuaW1hdGUoc2VsZi4kY29udGVudCwgbmV3UG9zLCAxNTApO1xuICAgIH1cbiAgfTtcblxuICBHdWVzdHVyZXMucHJvdG90eXBlLm9uVGFwID0gZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgdmFyICR0YXJnZXQgPSAkKGUudGFyZ2V0KTtcblxuICAgIHZhciBpbnN0YW5jZSA9IHNlbGYuaW5zdGFuY2U7XG4gICAgdmFyIGN1cnJlbnQgPSBpbnN0YW5jZS5jdXJyZW50O1xuXG4gICAgdmFyIGVuZFBvaW50cyA9IChlICYmIGdldFBvaW50ZXJYWShlKSkgfHwgc2VsZi5zdGFydFBvaW50cztcblxuICAgIHZhciB0YXBYID0gZW5kUG9pbnRzWzBdID8gZW5kUG9pbnRzWzBdLnggLSAkKHdpbmRvdykuc2Nyb2xsTGVmdCgpIC0gc2VsZi5zdGFnZVBvcy5sZWZ0IDogMDtcbiAgICB2YXIgdGFwWSA9IGVuZFBvaW50c1swXSA/IGVuZFBvaW50c1swXS55IC0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpIC0gc2VsZi5zdGFnZVBvcy50b3AgOiAwO1xuXG4gICAgdmFyIHdoZXJlO1xuXG4gICAgdmFyIHByb2Nlc3MgPSBmdW5jdGlvbiAocHJlZml4KSB7XG4gICAgICB2YXIgYWN0aW9uID0gY3VycmVudC5vcHRzW3ByZWZpeF07XG5cbiAgICAgIGlmICgkLmlzRnVuY3Rpb24oYWN0aW9uKSkge1xuICAgICAgICBhY3Rpb24gPSBhY3Rpb24uYXBwbHkoaW5zdGFuY2UsIFtjdXJyZW50LCBlXSk7XG4gICAgICB9XG5cbiAgICAgIGlmICghYWN0aW9uKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICAgICAgY2FzZSBcImNsb3NlXCI6XG4gICAgICAgICAgaW5zdGFuY2UuY2xvc2Uoc2VsZi5zdGFydEV2ZW50KTtcblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJ0b2dnbGVDb250cm9sc1wiOlxuICAgICAgICAgIGluc3RhbmNlLnRvZ2dsZUNvbnRyb2xzKCk7XG5cbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlIFwibmV4dFwiOlxuICAgICAgICAgIGluc3RhbmNlLm5leHQoKTtcblxuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgXCJuZXh0T3JDbG9zZVwiOlxuICAgICAgICAgIGlmIChpbnN0YW5jZS5ncm91cC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBpbnN0YW5jZS5uZXh0KCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGluc3RhbmNlLmNsb3NlKHNlbGYuc3RhcnRFdmVudCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSBcInpvb21cIjpcbiAgICAgICAgICBpZiAoY3VycmVudC50eXBlID09IFwiaW1hZ2VcIiAmJiAoY3VycmVudC5pc0xvYWRlZCB8fCBjdXJyZW50LiRnaG9zdCkpIHtcbiAgICAgICAgICAgIGlmIChpbnN0YW5jZS5jYW5QYW4oKSkge1xuICAgICAgICAgICAgICBpbnN0YW5jZS5zY2FsZVRvRml0KCk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGluc3RhbmNlLmlzU2NhbGVkRG93bigpKSB7XG4gICAgICAgICAgICAgIGluc3RhbmNlLnNjYWxlVG9BY3R1YWwodGFwWCwgdGFwWSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGluc3RhbmNlLmdyb3VwLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgICAgaW5zdGFuY2UuY2xvc2Uoc2VsZi5zdGFydEV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgLy8gSWdub3JlIHJpZ2h0IGNsaWNrXG4gICAgaWYgKGUub3JpZ2luYWxFdmVudCAmJiBlLm9yaWdpbmFsRXZlbnQuYnV0dG9uID09IDIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBTa2lwIGlmIGNsaWNrZWQgb24gdGhlIHNjcm9sbGJhclxuICAgIGlmICghJHRhcmdldC5pcyhcImltZ1wiKSAmJiB0YXBYID4gJHRhcmdldFswXS5jbGllbnRXaWR0aCArICR0YXJnZXQub2Zmc2V0KCkubGVmdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIENoZWNrIHdoZXJlIGlzIGNsaWNrZWRcbiAgICBpZiAoJHRhcmdldC5pcyhcIi5mYW5jeWJveC1iZywuZmFuY3lib3gtaW5uZXIsLmZhbmN5Ym94LW91dGVyLC5mYW5jeWJveC1jb250YWluZXJcIikpIHtcbiAgICAgIHdoZXJlID0gXCJPdXRzaWRlXCI7XG4gICAgfSBlbHNlIGlmICgkdGFyZ2V0LmlzKFwiLmZhbmN5Ym94LXNsaWRlXCIpKSB7XG4gICAgICB3aGVyZSA9IFwiU2xpZGVcIjtcbiAgICB9IGVsc2UgaWYgKFxuICAgICAgaW5zdGFuY2UuY3VycmVudC4kY29udGVudCAmJlxuICAgICAgaW5zdGFuY2UuY3VycmVudC4kY29udGVudFxuICAgICAgLmZpbmQoJHRhcmdldClcbiAgICAgIC5hZGRCYWNrKClcbiAgICAgIC5maWx0ZXIoJHRhcmdldCkubGVuZ3RoXG4gICAgKSB7XG4gICAgICB3aGVyZSA9IFwiQ29udGVudFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgdGhpcyBpcyBhIGRvdWJsZSB0YXBcbiAgICBpZiAoc2VsZi50YXBwZWQpIHtcbiAgICAgIC8vIFN0b3AgcHJldmlvdXNseSBjcmVhdGVkIHNpbmdsZSB0YXBcbiAgICAgIGNsZWFyVGltZW91dChzZWxmLnRhcHBlZCk7XG4gICAgICBzZWxmLnRhcHBlZCA9IG51bGw7XG5cbiAgICAgIC8vIFNraXAgaWYgZGlzdGFuY2UgYmV0d2VlbiB0YXBzIGlzIHRvbyBiaWdcbiAgICAgIGlmIChNYXRoLmFicyh0YXBYIC0gc2VsZi50YXBYKSA+IDUwIHx8IE1hdGguYWJzKHRhcFkgLSBzZWxmLnRhcFkpID4gNTApIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIC8vIE9LLCBub3cgd2UgYXNzdW1lIHRoYXQgdGhpcyBpcyBhIGRvdWJsZS10YXBcbiAgICAgIHByb2Nlc3MoXCJkYmxjbGlja1wiICsgd2hlcmUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBTaW5nbGUgdGFwIHdpbGwgYmUgcHJvY2Vzc2VkIGlmIHVzZXIgaGFzIG5vdCBjbGlja2VkIHNlY29uZCB0aW1lIHdpdGhpbiAzMDBtc1xuICAgICAgLy8gb3IgdGhlcmUgaXMgbm8gbmVlZCB0byB3YWl0IGZvciBkb3VibGUtdGFwXG4gICAgICBzZWxmLnRhcFggPSB0YXBYO1xuICAgICAgc2VsZi50YXBZID0gdGFwWTtcblxuICAgICAgaWYgKGN1cnJlbnQub3B0c1tcImRibGNsaWNrXCIgKyB3aGVyZV0gJiYgY3VycmVudC5vcHRzW1wiZGJsY2xpY2tcIiArIHdoZXJlXSAhPT0gY3VycmVudC5vcHRzW1wiY2xpY2tcIiArIHdoZXJlXSkge1xuICAgICAgICBzZWxmLnRhcHBlZCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHNlbGYudGFwcGVkID0gbnVsbDtcblxuICAgICAgICAgIGlmICghaW5zdGFuY2UuaXNBbmltYXRpbmcpIHtcbiAgICAgICAgICAgIHByb2Nlc3MoXCJjbGlja1wiICsgd2hlcmUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgNTAwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHByb2Nlc3MoXCJjbGlja1wiICsgd2hlcmUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gICQoZG9jdW1lbnQpXG4gICAgLm9uKFwib25BY3RpdmF0ZS5mYlwiLCBmdW5jdGlvbiAoZSwgaW5zdGFuY2UpIHtcbiAgICAgIGlmIChpbnN0YW5jZSAmJiAhaW5zdGFuY2UuR3Vlc3R1cmVzKSB7XG4gICAgICAgIGluc3RhbmNlLkd1ZXN0dXJlcyA9IG5ldyBHdWVzdHVyZXMoaW5zdGFuY2UpO1xuICAgICAgfVxuICAgIH0pXG4gICAgLm9uKFwiYmVmb3JlQ2xvc2UuZmJcIiwgZnVuY3Rpb24gKGUsIGluc3RhbmNlKSB7XG4gICAgICBpZiAoaW5zdGFuY2UgJiYgaW5zdGFuY2UuR3Vlc3R1cmVzKSB7XG4gICAgICAgIGluc3RhbmNlLkd1ZXN0dXJlcy5kZXN0cm95KCk7XG4gICAgICB9XG4gICAgfSk7XG59KSh3aW5kb3csIGRvY3VtZW50LCBqUXVlcnkpO1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vXG4vLyBTbGlkZVNob3dcbi8vIEVuYWJsZXMgc2xpZGVzaG93IGZ1bmN0aW9uYWxpdHlcbi8vXG4vLyBFeGFtcGxlIG9mIHVzYWdlOlxuLy8gJC5mYW5jeWJveC5nZXRJbnN0YW5jZSgpLlNsaWRlU2hvdy5zdGFydCgpXG4vL1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbihmdW5jdGlvbiAoZG9jdW1lbnQsICQpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgJC5leHRlbmQodHJ1ZSwgJC5mYW5jeWJveC5kZWZhdWx0cywge1xuICAgIGJ0blRwbDoge1xuICAgICAgc2xpZGVTaG93OiAnPGJ1dHRvbiBkYXRhLWZhbmN5Ym94LXBsYXkgY2xhc3M9XCJmYW5jeWJveC1idXR0b24gZmFuY3lib3gtYnV0dG9uLS1wbGF5XCIgdGl0bGU9XCJ7e1BMQVlfU1RBUlR9fVwiPicgK1xuICAgICAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNNi41IDUuNHYxMy4ybDExLTYuNnpcIi8+PC9zdmc+JyArXG4gICAgICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk04LjMzIDUuNzVoMi4ydjEyLjVoLTIuMlY1Ljc1em01LjE1IDBoMi4ydjEyLjVoLTIuMlY1Ljc1elwiLz48L3N2Zz4nICtcbiAgICAgICAgXCI8L2J1dHRvbj5cIlxuICAgIH0sXG4gICAgc2xpZGVTaG93OiB7XG4gICAgICBhdXRvU3RhcnQ6IGZhbHNlLFxuICAgICAgc3BlZWQ6IDMwMDAsXG4gICAgICBwcm9ncmVzczogdHJ1ZVxuICAgIH1cbiAgfSk7XG5cbiAgdmFyIFNsaWRlU2hvdyA9IGZ1bmN0aW9uIChpbnN0YW5jZSkge1xuICAgIHRoaXMuaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICB0aGlzLmluaXQoKTtcbiAgfTtcblxuICAkLmV4dGVuZChTbGlkZVNob3cucHJvdG90eXBlLCB7XG4gICAgdGltZXI6IG51bGwsXG4gICAgaXNBY3RpdmU6IGZhbHNlLFxuICAgICRidXR0b246IG51bGwsXG5cbiAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGluc3RhbmNlID0gc2VsZi5pbnN0YW5jZSxcbiAgICAgICAgb3B0cyA9IGluc3RhbmNlLmdyb3VwW2luc3RhbmNlLmN1cnJJbmRleF0ub3B0cy5zbGlkZVNob3c7XG5cbiAgICAgIHNlbGYuJGJ1dHRvbiA9IGluc3RhbmNlLiRyZWZzLnRvb2xiYXIuZmluZChcIltkYXRhLWZhbmN5Ym94LXBsYXldXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBzZWxmLnRvZ2dsZSgpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmIChpbnN0YW5jZS5ncm91cC5sZW5ndGggPCAyIHx8ICFvcHRzKSB7XG4gICAgICAgIHNlbGYuJGJ1dHRvbi5oaWRlKCk7XG4gICAgICB9IGVsc2UgaWYgKG9wdHMucHJvZ3Jlc3MpIHtcbiAgICAgICAgc2VsZi4kcHJvZ3Jlc3MgPSAkKCc8ZGl2IGNsYXNzPVwiZmFuY3lib3gtcHJvZ3Jlc3NcIj48L2Rpdj4nKS5hcHBlbmRUbyhpbnN0YW5jZS4kcmVmcy5pbm5lcik7XG4gICAgICB9XG4gICAgfSxcblxuICAgIHNldDogZnVuY3Rpb24gKGZvcmNlKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGluc3RhbmNlID0gc2VsZi5pbnN0YW5jZSxcbiAgICAgICAgY3VycmVudCA9IGluc3RhbmNlLmN1cnJlbnQ7XG5cbiAgICAgIC8vIENoZWNrIGlmIHJlYWNoZWQgbGFzdCBlbGVtZW50XG4gICAgICBpZiAoY3VycmVudCAmJiAoZm9yY2UgPT09IHRydWUgfHwgY3VycmVudC5vcHRzLmxvb3AgfHwgaW5zdGFuY2UuY3VyckluZGV4IDwgaW5zdGFuY2UuZ3JvdXAubGVuZ3RoIC0gMSkpIHtcbiAgICAgICAgaWYgKHNlbGYuaXNBY3RpdmUgJiYgY3VycmVudC5jb250ZW50VHlwZSAhPT0gXCJ2aWRlb1wiKSB7XG4gICAgICAgICAgaWYgKHNlbGYuJHByb2dyZXNzKSB7XG4gICAgICAgICAgICAkLmZhbmN5Ym94LmFuaW1hdGUoc2VsZi4kcHJvZ3Jlc3Muc2hvdygpLCB7XG4gICAgICAgICAgICAgIHNjYWxlWDogMVxuICAgICAgICAgICAgfSwgY3VycmVudC5vcHRzLnNsaWRlU2hvdy5zcGVlZCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgc2VsZi50aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYgKCFpbnN0YW5jZS5jdXJyZW50Lm9wdHMubG9vcCAmJiBpbnN0YW5jZS5jdXJyZW50LmluZGV4ID09IGluc3RhbmNlLmdyb3VwLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgICAgaW5zdGFuY2UuanVtcFRvKDApO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaW5zdGFuY2UubmV4dCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sIGN1cnJlbnQub3B0cy5zbGlkZVNob3cuc3BlZWQpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzZWxmLnN0b3AoKTtcbiAgICAgICAgaW5zdGFuY2UuaWRsZVNlY29uZHNDb3VudGVyID0gMDtcbiAgICAgICAgaW5zdGFuY2Uuc2hvd0NvbnRyb2xzKCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGNsZWFyOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIGNsZWFyVGltZW91dChzZWxmLnRpbWVyKTtcblxuICAgICAgc2VsZi50aW1lciA9IG51bGw7XG5cbiAgICAgIGlmIChzZWxmLiRwcm9ncmVzcykge1xuICAgICAgICBzZWxmLiRwcm9ncmVzcy5yZW1vdmVBdHRyKFwic3R5bGVcIikuaGlkZSgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdGFydDogZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICBjdXJyZW50ID0gc2VsZi5pbnN0YW5jZS5jdXJyZW50O1xuXG4gICAgICBpZiAoY3VycmVudCkge1xuICAgICAgICBzZWxmLiRidXR0b25cbiAgICAgICAgICAuYXR0cihcInRpdGxlXCIsIChjdXJyZW50Lm9wdHMuaTE4bltjdXJyZW50Lm9wdHMubGFuZ10gfHwgY3VycmVudC5vcHRzLmkxOG4uZW4pLlBMQVlfU1RPUClcbiAgICAgICAgICAucmVtb3ZlQ2xhc3MoXCJmYW5jeWJveC1idXR0b24tLXBsYXlcIilcbiAgICAgICAgICAuYWRkQ2xhc3MoXCJmYW5jeWJveC1idXR0b24tLXBhdXNlXCIpO1xuXG4gICAgICAgIHNlbGYuaXNBY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgIGlmIChjdXJyZW50LmlzQ29tcGxldGUpIHtcbiAgICAgICAgICBzZWxmLnNldCh0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYuaW5zdGFuY2UudHJpZ2dlcihcIm9uU2xpZGVTaG93Q2hhbmdlXCIsIHRydWUpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGN1cnJlbnQgPSBzZWxmLmluc3RhbmNlLmN1cnJlbnQ7XG5cbiAgICAgIHNlbGYuY2xlYXIoKTtcblxuICAgICAgc2VsZi4kYnV0dG9uXG4gICAgICAgIC5hdHRyKFwidGl0bGVcIiwgKGN1cnJlbnQub3B0cy5pMThuW2N1cnJlbnQub3B0cy5sYW5nXSB8fCBjdXJyZW50Lm9wdHMuaTE4bi5lbikuUExBWV9TVEFSVClcbiAgICAgICAgLnJlbW92ZUNsYXNzKFwiZmFuY3lib3gtYnV0dG9uLS1wYXVzZVwiKVxuICAgICAgICAuYWRkQ2xhc3MoXCJmYW5jeWJveC1idXR0b24tLXBsYXlcIik7XG5cbiAgICAgIHNlbGYuaXNBY3RpdmUgPSBmYWxzZTtcblxuICAgICAgc2VsZi5pbnN0YW5jZS50cmlnZ2VyKFwib25TbGlkZVNob3dDaGFuZ2VcIiwgZmFsc2UpO1xuXG4gICAgICBpZiAoc2VsZi4kcHJvZ3Jlc3MpIHtcbiAgICAgICAgc2VsZi4kcHJvZ3Jlc3MucmVtb3ZlQXR0cihcInN0eWxlXCIpLmhpZGUoKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgdG9nZ2xlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG5cbiAgICAgIGlmIChzZWxmLmlzQWN0aXZlKSB7XG4gICAgICAgIHNlbGYuc3RvcCgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi5zdGFydCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgJChkb2N1bWVudCkub24oe1xuICAgIFwib25Jbml0LmZiXCI6IGZ1bmN0aW9uIChlLCBpbnN0YW5jZSkge1xuICAgICAgaWYgKGluc3RhbmNlICYmICFpbnN0YW5jZS5TbGlkZVNob3cpIHtcbiAgICAgICAgaW5zdGFuY2UuU2xpZGVTaG93ID0gbmV3IFNsaWRlU2hvdyhpbnN0YW5jZSk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiYmVmb3JlU2hvdy5mYlwiOiBmdW5jdGlvbiAoZSwgaW5zdGFuY2UsIGN1cnJlbnQsIGZpcnN0UnVuKSB7XG4gICAgICB2YXIgU2xpZGVTaG93ID0gaW5zdGFuY2UgJiYgaW5zdGFuY2UuU2xpZGVTaG93O1xuXG4gICAgICBpZiAoZmlyc3RSdW4pIHtcbiAgICAgICAgaWYgKFNsaWRlU2hvdyAmJiBjdXJyZW50Lm9wdHMuc2xpZGVTaG93LmF1dG9TdGFydCkge1xuICAgICAgICAgIFNsaWRlU2hvdy5zdGFydCgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKFNsaWRlU2hvdyAmJiBTbGlkZVNob3cuaXNBY3RpdmUpIHtcbiAgICAgICAgU2xpZGVTaG93LmNsZWFyKCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiYWZ0ZXJTaG93LmZiXCI6IGZ1bmN0aW9uIChlLCBpbnN0YW5jZSwgY3VycmVudCkge1xuICAgICAgdmFyIFNsaWRlU2hvdyA9IGluc3RhbmNlICYmIGluc3RhbmNlLlNsaWRlU2hvdztcblxuICAgICAgaWYgKFNsaWRlU2hvdyAmJiBTbGlkZVNob3cuaXNBY3RpdmUpIHtcbiAgICAgICAgU2xpZGVTaG93LnNldCgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImFmdGVyS2V5ZG93bi5mYlwiOiBmdW5jdGlvbiAoZSwgaW5zdGFuY2UsIGN1cnJlbnQsIGtleXByZXNzLCBrZXljb2RlKSB7XG4gICAgICB2YXIgU2xpZGVTaG93ID0gaW5zdGFuY2UgJiYgaW5zdGFuY2UuU2xpZGVTaG93O1xuXG4gICAgICAvLyBcIlBcIiBvciBTcGFjZWJhclxuICAgICAgaWYgKFNsaWRlU2hvdyAmJiBjdXJyZW50Lm9wdHMuc2xpZGVTaG93ICYmIChrZXljb2RlID09PSA4MCB8fCBrZXljb2RlID09PSAzMikgJiYgISQoZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkuaXMoXCJidXR0b24sYSxpbnB1dFwiKSkge1xuICAgICAgICBrZXlwcmVzcy5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIFNsaWRlU2hvdy50b2dnbGUoKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJiZWZvcmVDbG9zZS5mYiBvbkRlYWN0aXZhdGUuZmJcIjogZnVuY3Rpb24gKGUsIGluc3RhbmNlKSB7XG4gICAgICB2YXIgU2xpZGVTaG93ID0gaW5zdGFuY2UgJiYgaW5zdGFuY2UuU2xpZGVTaG93O1xuXG4gICAgICBpZiAoU2xpZGVTaG93KSB7XG4gICAgICAgIFNsaWRlU2hvdy5zdG9wKCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICAvLyBQYWdlIFZpc2liaWxpdHkgQVBJIHRvIHBhdXNlIHNsaWRlc2hvdyB3aGVuIHdpbmRvdyBpcyBub3QgYWN0aXZlXG4gICQoZG9jdW1lbnQpLm9uKFwidmlzaWJpbGl0eWNoYW5nZVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGluc3RhbmNlID0gJC5mYW5jeWJveC5nZXRJbnN0YW5jZSgpLFxuICAgICAgU2xpZGVTaG93ID0gaW5zdGFuY2UgJiYgaW5zdGFuY2UuU2xpZGVTaG93O1xuXG4gICAgaWYgKFNsaWRlU2hvdyAmJiBTbGlkZVNob3cuaXNBY3RpdmUpIHtcbiAgICAgIGlmIChkb2N1bWVudC5oaWRkZW4pIHtcbiAgICAgICAgU2xpZGVTaG93LmNsZWFyKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBTbGlkZVNob3cuc2V0KCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn0pKGRvY3VtZW50LCBqUXVlcnkpO1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbi8vXG4vLyBGdWxsU2NyZWVuXG4vLyBBZGRzIGZ1bGxzY3JlZW4gZnVuY3Rpb25hbGl0eVxuLy9cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4oZnVuY3Rpb24gKGRvY3VtZW50LCAkKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIC8vIENvbGxlY3Rpb24gb2YgbWV0aG9kcyBzdXBwb3J0ZWQgYnkgdXNlciBicm93c2VyXG4gIHZhciBmbiA9IChmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGZuTWFwID0gW1xuICAgICAgW1wicmVxdWVzdEZ1bGxzY3JlZW5cIiwgXCJleGl0RnVsbHNjcmVlblwiLCBcImZ1bGxzY3JlZW5FbGVtZW50XCIsIFwiZnVsbHNjcmVlbkVuYWJsZWRcIiwgXCJmdWxsc2NyZWVuY2hhbmdlXCIsIFwiZnVsbHNjcmVlbmVycm9yXCJdLFxuICAgICAgLy8gbmV3IFdlYktpdFxuICAgICAgW1xuICAgICAgICBcIndlYmtpdFJlcXVlc3RGdWxsc2NyZWVuXCIsXG4gICAgICAgIFwid2Via2l0RXhpdEZ1bGxzY3JlZW5cIixcbiAgICAgICAgXCJ3ZWJraXRGdWxsc2NyZWVuRWxlbWVudFwiLFxuICAgICAgICBcIndlYmtpdEZ1bGxzY3JlZW5FbmFibGVkXCIsXG4gICAgICAgIFwid2Via2l0ZnVsbHNjcmVlbmNoYW5nZVwiLFxuICAgICAgICBcIndlYmtpdGZ1bGxzY3JlZW5lcnJvclwiXG4gICAgICBdLFxuICAgICAgLy8gb2xkIFdlYktpdCAoU2FmYXJpIDUuMSlcbiAgICAgIFtcbiAgICAgICAgXCJ3ZWJraXRSZXF1ZXN0RnVsbFNjcmVlblwiLFxuICAgICAgICBcIndlYmtpdENhbmNlbEZ1bGxTY3JlZW5cIixcbiAgICAgICAgXCJ3ZWJraXRDdXJyZW50RnVsbFNjcmVlbkVsZW1lbnRcIixcbiAgICAgICAgXCJ3ZWJraXRDYW5jZWxGdWxsU2NyZWVuXCIsXG4gICAgICAgIFwid2Via2l0ZnVsbHNjcmVlbmNoYW5nZVwiLFxuICAgICAgICBcIndlYmtpdGZ1bGxzY3JlZW5lcnJvclwiXG4gICAgICBdLFxuICAgICAgW1xuICAgICAgICBcIm1velJlcXVlc3RGdWxsU2NyZWVuXCIsXG4gICAgICAgIFwibW96Q2FuY2VsRnVsbFNjcmVlblwiLFxuICAgICAgICBcIm1vekZ1bGxTY3JlZW5FbGVtZW50XCIsXG4gICAgICAgIFwibW96RnVsbFNjcmVlbkVuYWJsZWRcIixcbiAgICAgICAgXCJtb3pmdWxsc2NyZWVuY2hhbmdlXCIsXG4gICAgICAgIFwibW96ZnVsbHNjcmVlbmVycm9yXCJcbiAgICAgIF0sXG4gICAgICBbXCJtc1JlcXVlc3RGdWxsc2NyZWVuXCIsIFwibXNFeGl0RnVsbHNjcmVlblwiLCBcIm1zRnVsbHNjcmVlbkVsZW1lbnRcIiwgXCJtc0Z1bGxzY3JlZW5FbmFibGVkXCIsIFwiTVNGdWxsc2NyZWVuQ2hhbmdlXCIsIFwiTVNGdWxsc2NyZWVuRXJyb3JcIl1cbiAgICBdO1xuXG4gICAgdmFyIHJldCA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBmbk1hcC5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHZhbCA9IGZuTWFwW2ldO1xuXG4gICAgICBpZiAodmFsICYmIHZhbFsxXSBpbiBkb2N1bWVudCkge1xuICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbC5sZW5ndGg7IGorKykge1xuICAgICAgICAgIHJldFtmbk1hcFswXVtqXV0gPSB2YWxbal07XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfSkoKTtcblxuICBpZiAoZm4pIHtcbiAgICB2YXIgRnVsbFNjcmVlbiA9IHtcbiAgICAgIHJlcXVlc3Q6IGZ1bmN0aW9uIChlbGVtKSB7XG4gICAgICAgIGVsZW0gPSBlbGVtIHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICAgICAgICBlbGVtW2ZuLnJlcXVlc3RGdWxsc2NyZWVuXShlbGVtLkFMTE9XX0tFWUJPQVJEX0lOUFVUKTtcbiAgICAgIH0sXG4gICAgICBleGl0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGRvY3VtZW50W2ZuLmV4aXRGdWxsc2NyZWVuXSgpO1xuICAgICAgfSxcbiAgICAgIHRvZ2dsZTogZnVuY3Rpb24gKGVsZW0pIHtcbiAgICAgICAgZWxlbSA9IGVsZW0gfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4gICAgICAgIGlmICh0aGlzLmlzRnVsbHNjcmVlbigpKSB7XG4gICAgICAgICAgdGhpcy5leGl0KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5yZXF1ZXN0KGVsZW0pO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgaXNGdWxsc2NyZWVuOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBCb29sZWFuKGRvY3VtZW50W2ZuLmZ1bGxzY3JlZW5FbGVtZW50XSk7XG4gICAgICB9LFxuICAgICAgZW5hYmxlZDogZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gQm9vbGVhbihkb2N1bWVudFtmbi5mdWxsc2NyZWVuRW5hYmxlZF0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICAkLmV4dGVuZCh0cnVlLCAkLmZhbmN5Ym94LmRlZmF1bHRzLCB7XG4gICAgICBidG5UcGw6IHtcbiAgICAgICAgZnVsbFNjcmVlbjogJzxidXR0b24gZGF0YS1mYW5jeWJveC1mdWxsc2NyZWVuIGNsYXNzPVwiZmFuY3lib3gtYnV0dG9uIGZhbmN5Ym94LWJ1dHRvbi0tZnNlbnRlclwiIHRpdGxlPVwie3tGVUxMX1NDUkVFTn19XCI+JyArXG4gICAgICAgICAgJzxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHZpZXdCb3g9XCIwIDAgMjQgMjRcIj48cGF0aCBkPVwiTTcgMTRINXY1aDV2LTJIN3YtM3ptLTItNGgyVjdoM1Y1SDV2NXptMTIgN2gtM3YyaDV2LTVoLTJ2M3pNMTQgNXYyaDN2M2gyVjVoLTV6XCIvPjwvc3ZnPicgK1xuICAgICAgICAgICc8c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB2aWV3Qm94PVwiMCAwIDI0IDI0XCI+PHBhdGggZD1cIk01IDE2aDN2M2gydi01SDV6bTMtOEg1djJoNVY1SDh6bTYgMTFoMnYtM2gzdi0yaC01em0yLTExVjVoLTJ2NWg1Vjh6XCIvPjwvc3ZnPicgK1xuICAgICAgICAgIFwiPC9idXR0b24+XCJcbiAgICAgIH0sXG4gICAgICBmdWxsU2NyZWVuOiB7XG4gICAgICAgIGF1dG9TdGFydDogZmFsc2VcbiAgICAgIH1cbiAgICB9KTtcblxuICAgICQoZG9jdW1lbnQpLm9uKGZuLmZ1bGxzY3JlZW5jaGFuZ2UsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBpc0Z1bGxzY3JlZW4gPSBGdWxsU2NyZWVuLmlzRnVsbHNjcmVlbigpLFxuICAgICAgICBpbnN0YW5jZSA9ICQuZmFuY3lib3guZ2V0SW5zdGFuY2UoKTtcblxuICAgICAgaWYgKGluc3RhbmNlKSB7XG4gICAgICAgIC8vIElmIGltYWdlIGlzIHpvb21pbmcsIHRoZW4gZm9yY2UgdG8gc3RvcCBhbmQgcmVwb3NpdGlvbiBwcm9wZXJseVxuICAgICAgICBpZiAoaW5zdGFuY2UuY3VycmVudCAmJiBpbnN0YW5jZS5jdXJyZW50LnR5cGUgPT09IFwiaW1hZ2VcIiAmJiBpbnN0YW5jZS5pc0FuaW1hdGluZykge1xuICAgICAgICAgIGluc3RhbmNlLmlzQW5pbWF0aW5nID0gZmFsc2U7XG5cbiAgICAgICAgICBpbnN0YW5jZS51cGRhdGUodHJ1ZSwgdHJ1ZSwgMCk7XG5cbiAgICAgICAgICBpZiAoIWluc3RhbmNlLmlzQ29tcGxldGUpIHtcbiAgICAgICAgICAgIGluc3RhbmNlLmNvbXBsZXRlKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaW5zdGFuY2UudHJpZ2dlcihcIm9uRnVsbHNjcmVlbkNoYW5nZVwiLCBpc0Z1bGxzY3JlZW4pO1xuXG4gICAgICAgIGluc3RhbmNlLiRyZWZzLmNvbnRhaW5lci50b2dnbGVDbGFzcyhcImZhbmN5Ym94LWlzLWZ1bGxzY3JlZW5cIiwgaXNGdWxsc2NyZWVuKTtcblxuICAgICAgICBpbnN0YW5jZS4kcmVmcy50b29sYmFyXG4gICAgICAgICAgLmZpbmQoXCJbZGF0YS1mYW5jeWJveC1mdWxsc2NyZWVuXVwiKVxuICAgICAgICAgIC50b2dnbGVDbGFzcyhcImZhbmN5Ym94LWJ1dHRvbi0tZnNlbnRlclwiLCAhaXNGdWxsc2NyZWVuKVxuICAgICAgICAgIC50b2dnbGVDbGFzcyhcImZhbmN5Ym94LWJ1dHRvbi0tZnNleGl0XCIsIGlzRnVsbHNjcmVlbik7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAkKGRvY3VtZW50KS5vbih7XG4gICAgXCJvbkluaXQuZmJcIjogZnVuY3Rpb24gKGUsIGluc3RhbmNlKSB7XG4gICAgICB2YXIgJGNvbnRhaW5lcjtcblxuICAgICAgaWYgKCFmbikge1xuICAgICAgICBpbnN0YW5jZS4kcmVmcy50b29sYmFyLmZpbmQoXCJbZGF0YS1mYW5jeWJveC1mdWxsc2NyZWVuXVwiKS5yZW1vdmUoKTtcblxuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGlmIChpbnN0YW5jZSAmJiBpbnN0YW5jZS5ncm91cFtpbnN0YW5jZS5jdXJySW5kZXhdLm9wdHMuZnVsbFNjcmVlbikge1xuICAgICAgICAkY29udGFpbmVyID0gaW5zdGFuY2UuJHJlZnMuY29udGFpbmVyO1xuXG4gICAgICAgICRjb250YWluZXIub24oXCJjbGljay5mYi1mdWxsc2NyZWVuXCIsIFwiW2RhdGEtZmFuY3lib3gtZnVsbHNjcmVlbl1cIiwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgIEZ1bGxTY3JlZW4udG9nZ2xlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChpbnN0YW5jZS5vcHRzLmZ1bGxTY3JlZW4gJiYgaW5zdGFuY2Uub3B0cy5mdWxsU2NyZWVuLmF1dG9TdGFydCA9PT0gdHJ1ZSkge1xuICAgICAgICAgIEZ1bGxTY3JlZW4ucmVxdWVzdCgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRXhwb3NlIEFQSVxuICAgICAgICBpbnN0YW5jZS5GdWxsU2NyZWVuID0gRnVsbFNjcmVlbjtcbiAgICAgIH0gZWxzZSBpZiAoaW5zdGFuY2UpIHtcbiAgICAgICAgaW5zdGFuY2UuJHJlZnMudG9vbGJhci5maW5kKFwiW2RhdGEtZmFuY3lib3gtZnVsbHNjcmVlbl1cIikuaGlkZSgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImFmdGVyS2V5ZG93bi5mYlwiOiBmdW5jdGlvbiAoZSwgaW5zdGFuY2UsIGN1cnJlbnQsIGtleXByZXNzLCBrZXljb2RlKSB7XG4gICAgICAvLyBcIkZcIlxuICAgICAgaWYgKGluc3RhbmNlICYmIGluc3RhbmNlLkZ1bGxTY3JlZW4gJiYga2V5Y29kZSA9PT0gNzApIHtcbiAgICAgICAga2V5cHJlc3MucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpbnN0YW5jZS5GdWxsU2NyZWVuLnRvZ2dsZSgpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImJlZm9yZUNsb3NlLmZiXCI6IGZ1bmN0aW9uIChlLCBpbnN0YW5jZSkge1xuICAgICAgaWYgKGluc3RhbmNlICYmIGluc3RhbmNlLkZ1bGxTY3JlZW4gJiYgaW5zdGFuY2UuJHJlZnMuY29udGFpbmVyLmhhc0NsYXNzKFwiZmFuY3lib3gtaXMtZnVsbHNjcmVlblwiKSkge1xuICAgICAgICBGdWxsU2NyZWVuLmV4aXQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xufSkoZG9jdW1lbnQsIGpRdWVyeSk7XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy9cbi8vIFRodW1ic1xuLy8gRGlzcGxheXMgdGh1bWJuYWlscyBpbiBhIGdyaWRcbi8vXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuKGZ1bmN0aW9uIChkb2N1bWVudCwgJCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgQ0xBU1MgPSBcImZhbmN5Ym94LXRodW1ic1wiLFxuICAgIENMQVNTX0FDVElWRSA9IENMQVNTICsgXCItYWN0aXZlXCI7XG5cbiAgLy8gTWFrZSBzdXJlIHRoZXJlIGFyZSBkZWZhdWx0IHZhbHVlc1xuICAkLmZhbmN5Ym94LmRlZmF1bHRzID0gJC5leHRlbmQoXG4gICAgdHJ1ZSwge1xuICAgICAgYnRuVHBsOiB7XG4gICAgICAgIHRodW1iczogJzxidXR0b24gZGF0YS1mYW5jeWJveC10aHVtYnMgY2xhc3M9XCJmYW5jeWJveC1idXR0b24gZmFuY3lib3gtYnV0dG9uLS10aHVtYnNcIiB0aXRsZT1cInt7VEhVTUJTfX1cIj4nICtcbiAgICAgICAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMTQuNTkgMTQuNTloMy43NnYzLjc2aC0zLjc2di0zLjc2em0tNC40NyAwaDMuNzZ2My43NmgtMy43NnYtMy43NnptLTQuNDcgMGgzLjc2djMuNzZINS42NXYtMy43NnptOC45NC00LjQ3aDMuNzZ2My43NmgtMy43NnYtMy43NnptLTQuNDcgMGgzLjc2djMuNzZoLTMuNzZ2LTMuNzZ6bS00LjQ3IDBoMy43NnYzLjc2SDUuNjV2LTMuNzZ6bTguOTQtNC40N2gzLjc2djMuNzZoLTMuNzZWNS42NXptLTQuNDcgMGgzLjc2djMuNzZoLTMuNzZWNS42NXptLTQuNDcgMGgzLjc2djMuNzZINS42NVY1LjY1elwiLz48L3N2Zz4nICtcbiAgICAgICAgICBcIjwvYnV0dG9uPlwiXG4gICAgICB9LFxuICAgICAgdGh1bWJzOiB7XG4gICAgICAgIGF1dG9TdGFydDogZmFsc2UsIC8vIERpc3BsYXkgdGh1bWJuYWlscyBvbiBvcGVuaW5nXG4gICAgICAgIGhpZGVPbkNsb3NlOiB0cnVlLCAvLyBIaWRlIHRodW1ibmFpbCBncmlkIHdoZW4gY2xvc2luZyBhbmltYXRpb24gc3RhcnRzXG4gICAgICAgIHBhcmVudEVsOiBcIi5mYW5jeWJveC1jb250YWluZXJcIiwgLy8gQ29udGFpbmVyIGlzIGluamVjdGVkIGludG8gdGhpcyBlbGVtZW50XG4gICAgICAgIGF4aXM6IFwieVwiIC8vIFZlcnRpY2FsICh5KSBvciBob3Jpem9udGFsICh4KSBzY3JvbGxpbmdcbiAgICAgIH1cbiAgICB9LFxuICAgICQuZmFuY3lib3guZGVmYXVsdHNcbiAgKTtcblxuICB2YXIgRmFuY3lUaHVtYnMgPSBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICB0aGlzLmluaXQoaW5zdGFuY2UpO1xuICB9O1xuXG4gICQuZXh0ZW5kKEZhbmN5VGh1bWJzLnByb3RvdHlwZSwge1xuICAgICRidXR0b246IG51bGwsXG4gICAgJGdyaWQ6IG51bGwsXG4gICAgJGxpc3Q6IG51bGwsXG4gICAgaXNWaXNpYmxlOiBmYWxzZSxcbiAgICBpc0FjdGl2ZTogZmFsc2UsXG5cbiAgICBpbml0OiBmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgIHZhciBzZWxmID0gdGhpcyxcbiAgICAgICAgZ3JvdXAgPSBpbnN0YW5jZS5ncm91cCxcbiAgICAgICAgZW5hYmxlZCA9IDA7XG5cbiAgICAgIHNlbGYuaW5zdGFuY2UgPSBpbnN0YW5jZTtcbiAgICAgIHNlbGYub3B0cyA9IGdyb3VwW2luc3RhbmNlLmN1cnJJbmRleF0ub3B0cy50aHVtYnM7XG5cbiAgICAgIGluc3RhbmNlLlRodW1icyA9IHNlbGY7XG5cbiAgICAgIHNlbGYuJGJ1dHRvbiA9IGluc3RhbmNlLiRyZWZzLnRvb2xiYXIuZmluZChcIltkYXRhLWZhbmN5Ym94LXRodW1ic11cIik7XG5cbiAgICAgIC8vIEVuYWJsZSB0aHVtYnMgaWYgYXQgbGVhc3QgdHdvIGdyb3VwIGl0ZW1zIGhhdmUgdGh1bWJuYWlsc1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGdyb3VwLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGlmIChncm91cFtpXS50aHVtYikge1xuICAgICAgICAgIGVuYWJsZWQrKztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbmFibGVkID4gMSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChlbmFibGVkID4gMSAmJiAhIXNlbGYub3B0cykge1xuICAgICAgICBzZWxmLiRidXR0b24ucmVtb3ZlQXR0cihcInN0eWxlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHNlbGYudG9nZ2xlKCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHNlbGYuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2VsZi4kYnV0dG9uLmhpZGUoKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgY3JlYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgc2VsZiA9IHRoaXMsXG4gICAgICAgIGluc3RhbmNlID0gc2VsZi5pbnN0YW5jZSxcbiAgICAgICAgcGFyZW50RWwgPSBzZWxmLm9wdHMucGFyZW50RWwsXG4gICAgICAgIGxpc3QgPSBbXSxcbiAgICAgICAgc3JjO1xuXG4gICAgICBpZiAoIXNlbGYuJGdyaWQpIHtcbiAgICAgICAgLy8gQ3JlYXRlIG1haW4gZWxlbWVudFxuICAgICAgICBzZWxmLiRncmlkID0gJCgnPGRpdiBjbGFzcz1cIicgKyBDTEFTUyArIFwiIFwiICsgQ0xBU1MgKyBcIi1cIiArIHNlbGYub3B0cy5heGlzICsgJ1wiPjwvZGl2PicpLmFwcGVuZFRvKFxuICAgICAgICAgIGluc3RhbmNlLiRyZWZzLmNvbnRhaW5lclxuICAgICAgICAgIC5maW5kKHBhcmVudEVsKVxuICAgICAgICAgIC5hZGRCYWNrKClcbiAgICAgICAgICAuZmlsdGVyKHBhcmVudEVsKVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIEFkZCBcImNsaWNrXCIgZXZlbnQgdGhhdCBwZXJmb3JtcyBnYWxsZXJ5IG5hdmlnYXRpb25cbiAgICAgICAgc2VsZi4kZ3JpZC5vbihcImNsaWNrXCIsIFwiYVwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaW5zdGFuY2UuanVtcFRvKCQodGhpcykuYXR0cihcImRhdGEtaW5kZXhcIikpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gQnVpbGQgdGhlIGxpc3RcbiAgICAgIGlmICghc2VsZi4kbGlzdCkge1xuICAgICAgICBzZWxmLiRsaXN0ID0gJCgnPGRpdiBjbGFzcz1cIicgKyBDTEFTUyArICdfX2xpc3RcIj4nKS5hcHBlbmRUbyhzZWxmLiRncmlkKTtcbiAgICAgIH1cblxuICAgICAgJC5lYWNoKGluc3RhbmNlLmdyb3VwLCBmdW5jdGlvbiAoaSwgaXRlbSkge1xuICAgICAgICBzcmMgPSBpdGVtLnRodW1iO1xuXG4gICAgICAgIGlmICghc3JjICYmIGl0ZW0udHlwZSA9PT0gXCJpbWFnZVwiKSB7XG4gICAgICAgICAgc3JjID0gaXRlbS5zcmM7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goXG4gICAgICAgICAgJzxhIGhyZWY9XCJqYXZhc2NyaXB0OjtcIiB0YWJpbmRleD1cIjBcIiBkYXRhLWluZGV4PVwiJyArXG4gICAgICAgICAgaSArXG4gICAgICAgICAgJ1wiJyArXG4gICAgICAgICAgKHNyYyAmJiBzcmMubGVuZ3RoID8gJyBzdHlsZT1cImJhY2tncm91bmQtaW1hZ2U6dXJsKCcgKyBzcmMgKyAnKVwiJyA6ICdjbGFzcz1cImZhbmN5Ym94LXRodW1icy1taXNzaW5nXCInKSArXG4gICAgICAgICAgXCI+PC9hPlwiXG4gICAgICAgICk7XG4gICAgICB9KTtcblxuICAgICAgc2VsZi4kbGlzdFswXS5pbm5lckhUTUwgPSBsaXN0LmpvaW4oXCJcIik7XG5cbiAgICAgIGlmIChzZWxmLm9wdHMuYXhpcyA9PT0gXCJ4XCIpIHtcbiAgICAgICAgLy8gU2V0IGZpeGVkIHdpZHRoIGZvciBsaXN0IGVsZW1lbnQgdG8gZW5hYmxlIGhvcml6b250YWwgc2Nyb2xsaW5nXG4gICAgICAgIHNlbGYuJGxpc3Qud2lkdGgoXG4gICAgICAgICAgcGFyc2VJbnQoc2VsZi4kZ3JpZC5jc3MoXCJwYWRkaW5nLXJpZ2h0XCIpLCAxMCkgK1xuICAgICAgICAgIGluc3RhbmNlLmdyb3VwLmxlbmd0aCAqXG4gICAgICAgICAgc2VsZi4kbGlzdFxuICAgICAgICAgIC5jaGlsZHJlbigpXG4gICAgICAgICAgLmVxKDApXG4gICAgICAgICAgLm91dGVyV2lkdGgodHJ1ZSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZm9jdXM6IGZ1bmN0aW9uIChkdXJhdGlvbikge1xuICAgICAgdmFyIHNlbGYgPSB0aGlzLFxuICAgICAgICAkbGlzdCA9IHNlbGYuJGxpc3QsXG4gICAgICAgICRncmlkID0gc2VsZi4kZ3JpZCxcbiAgICAgICAgdGh1bWIsXG4gICAgICAgIHRodW1iUG9zO1xuXG4gICAgICBpZiAoIXNlbGYuaW5zdGFuY2UuY3VycmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRodW1iID0gJGxpc3RcbiAgICAgICAgLmNoaWxkcmVuKClcbiAgICAgICAgLnJlbW92ZUNsYXNzKENMQVNTX0FDVElWRSlcbiAgICAgICAgLmZpbHRlcignW2RhdGEtaW5kZXg9XCInICsgc2VsZi5pbnN0YW5jZS5jdXJyZW50LmluZGV4ICsgJ1wiXScpXG4gICAgICAgIC5hZGRDbGFzcyhDTEFTU19BQ1RJVkUpO1xuXG4gICAgICB0aHVtYlBvcyA9IHRodW1iLnBvc2l0aW9uKCk7XG5cbiAgICAgIC8vIENoZWNrIGlmIG5lZWQgdG8gc2Nyb2xsIHRvIG1ha2UgY3VycmVudCB0aHVtYiB2aXNpYmxlXG4gICAgICBpZiAoc2VsZi5vcHRzLmF4aXMgPT09IFwieVwiICYmICh0aHVtYlBvcy50b3AgPCAwIHx8IHRodW1iUG9zLnRvcCA+ICRsaXN0LmhlaWdodCgpIC0gdGh1bWIub3V0ZXJIZWlnaHQoKSkpIHtcbiAgICAgICAgJGxpc3Quc3RvcCgpLmFuaW1hdGUoe1xuICAgICAgICAgICAgc2Nyb2xsVG9wOiAkbGlzdC5zY3JvbGxUb3AoKSArIHRodW1iUG9zLnRvcFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZHVyYXRpb25cbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIHNlbGYub3B0cy5heGlzID09PSBcInhcIiAmJlxuICAgICAgICAodGh1bWJQb3MubGVmdCA8ICRncmlkLnNjcm9sbExlZnQoKSB8fCB0aHVtYlBvcy5sZWZ0ID4gJGdyaWQuc2Nyb2xsTGVmdCgpICsgKCRncmlkLndpZHRoKCkgLSB0aHVtYi5vdXRlcldpZHRoKCkpKVxuICAgICAgKSB7XG4gICAgICAgICRsaXN0XG4gICAgICAgICAgLnBhcmVudCgpXG4gICAgICAgICAgLnN0b3AoKVxuICAgICAgICAgIC5hbmltYXRlKHtcbiAgICAgICAgICAgICAgc2Nyb2xsTGVmdDogdGh1bWJQb3MubGVmdFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGR1cmF0aW9uXG4gICAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICB0aGF0Lmluc3RhbmNlLiRyZWZzLmNvbnRhaW5lci50b2dnbGVDbGFzcyhcImZhbmN5Ym94LXNob3ctdGh1bWJzXCIsIHRoaXMuaXNWaXNpYmxlKTtcblxuICAgICAgaWYgKHRoYXQuaXNWaXNpYmxlKSB7XG4gICAgICAgIGlmICghdGhhdC4kZ3JpZCkge1xuICAgICAgICAgIHRoYXQuY3JlYXRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGF0Lmluc3RhbmNlLnRyaWdnZXIoXCJvblRodW1ic1Nob3dcIik7XG5cbiAgICAgICAgdGhhdC5mb2N1cygwKTtcbiAgICAgIH0gZWxzZSBpZiAodGhhdC4kZ3JpZCkge1xuICAgICAgICB0aGF0Lmluc3RhbmNlLnRyaWdnZXIoXCJvblRodW1ic0hpZGVcIik7XG4gICAgICB9XG5cbiAgICAgIC8vIFVwZGF0ZSBjb250ZW50IHBvc2l0aW9uXG4gICAgICB0aGF0Lmluc3RhbmNlLnVwZGF0ZSgpO1xuICAgIH0sXG5cbiAgICBoaWRlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLmlzVmlzaWJsZSA9IGZhbHNlO1xuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9LFxuXG4gICAgc2hvdzogZnVuY3Rpb24gKCkge1xuICAgICAgdGhpcy5pc1Zpc2libGUgPSB0cnVlO1xuICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9LFxuXG4gICAgdG9nZ2xlOiBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGlzLmlzVmlzaWJsZSA9ICF0aGlzLmlzVmlzaWJsZTtcbiAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuICB9KTtcblxuICAkKGRvY3VtZW50KS5vbih7XG4gICAgXCJvbkluaXQuZmJcIjogZnVuY3Rpb24gKGUsIGluc3RhbmNlKSB7XG4gICAgICB2YXIgVGh1bWJzO1xuXG4gICAgICBpZiAoaW5zdGFuY2UgJiYgIWluc3RhbmNlLlRodW1icykge1xuICAgICAgICBUaHVtYnMgPSBuZXcgRmFuY3lUaHVtYnMoaW5zdGFuY2UpO1xuXG4gICAgICAgIGlmIChUaHVtYnMuaXNBY3RpdmUgJiYgVGh1bWJzLm9wdHMuYXV0b1N0YXJ0ID09PSB0cnVlKSB7XG4gICAgICAgICAgVGh1bWJzLnNob3coKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImJlZm9yZVNob3cuZmJcIjogZnVuY3Rpb24gKGUsIGluc3RhbmNlLCBpdGVtLCBmaXJzdFJ1bikge1xuICAgICAgdmFyIFRodW1icyA9IGluc3RhbmNlICYmIGluc3RhbmNlLlRodW1icztcblxuICAgICAgaWYgKFRodW1icyAmJiBUaHVtYnMuaXNWaXNpYmxlKSB7XG4gICAgICAgIFRodW1icy5mb2N1cyhmaXJzdFJ1biA/IDAgOiAyNTApO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImFmdGVyS2V5ZG93bi5mYlwiOiBmdW5jdGlvbiAoZSwgaW5zdGFuY2UsIGN1cnJlbnQsIGtleXByZXNzLCBrZXljb2RlKSB7XG4gICAgICB2YXIgVGh1bWJzID0gaW5zdGFuY2UgJiYgaW5zdGFuY2UuVGh1bWJzO1xuXG4gICAgICAvLyBcIkdcIlxuICAgICAgaWYgKFRodW1icyAmJiBUaHVtYnMuaXNBY3RpdmUgJiYga2V5Y29kZSA9PT0gNzEpIHtcbiAgICAgICAga2V5cHJlc3MucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBUaHVtYnMudG9nZ2xlKCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiYmVmb3JlQ2xvc2UuZmJcIjogZnVuY3Rpb24gKGUsIGluc3RhbmNlKSB7XG4gICAgICB2YXIgVGh1bWJzID0gaW5zdGFuY2UgJiYgaW5zdGFuY2UuVGh1bWJzO1xuXG4gICAgICBpZiAoVGh1bWJzICYmIFRodW1icy5pc1Zpc2libGUgJiYgVGh1bWJzLm9wdHMuaGlkZU9uQ2xvc2UgIT09IGZhbHNlKSB7XG4gICAgICAgIFRodW1icy4kZ3JpZC5oaWRlKCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn0pKGRvY3VtZW50LCBqUXVlcnkpO1xuLy8vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy9cbi8vIFNoYXJlXG4vLyBEaXNwbGF5cyBzaW1wbGUgZm9ybSBmb3Igc2hhcmluZyBjdXJyZW50IHVybFxuLy9cbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4oZnVuY3Rpb24gKGRvY3VtZW50LCAkKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gICQuZXh0ZW5kKHRydWUsICQuZmFuY3lib3guZGVmYXVsdHMsIHtcbiAgICBidG5UcGw6IHtcbiAgICAgIHNoYXJlOiAnPGJ1dHRvbiBkYXRhLWZhbmN5Ym94LXNoYXJlIGNsYXNzPVwiZmFuY3lib3gtYnV0dG9uIGZhbmN5Ym94LWJ1dHRvbi0tc2hhcmVcIiB0aXRsZT1cInt7U0hBUkV9fVwiPicgK1xuICAgICAgICAnPHN2ZyB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgdmlld0JveD1cIjAgMCAyNCAyNFwiPjxwYXRoIGQ9XCJNMi41NSAxOWMxLjQtOC40IDkuMS05LjggMTEuOS05LjhWNWw3IDctNyA2LjN2LTMuNWMtMi44IDAtMTAuNSAyLjEtMTEuOSA0LjJ6XCIvPjwvc3ZnPicgK1xuICAgICAgICBcIjwvYnV0dG9uPlwiXG4gICAgfSxcbiAgICBzaGFyZToge1xuICAgICAgdXJsOiBmdW5jdGlvbiAoaW5zdGFuY2UsIGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAoIWluc3RhbmNlLmN1cnJlbnRIYXNoICYmICEoaXRlbS50eXBlID09PSBcImlubGluZVwiIHx8IGl0ZW0udHlwZSA9PT0gXCJodG1sXCIpID8gaXRlbS5vcmlnU3JjIHx8IGl0ZW0uc3JjIDogZmFsc2UpIHx8IHdpbmRvdy5sb2NhdGlvblxuICAgICAgICApO1xuICAgICAgfSxcbiAgICAgIHRwbDogJzxkaXYgY2xhc3M9XCJmYW5jeWJveC1zaGFyZVwiPicgK1xuICAgICAgICBcIjxoMT57e1NIQVJFfX08L2gxPlwiICtcbiAgICAgICAgXCI8cD5cIiArXG4gICAgICAgICc8YSBjbGFzcz1cImZhbmN5Ym94LXNoYXJlX19idXR0b24gZmFuY3lib3gtc2hhcmVfX2J1dHRvbi0tZmJcIiBocmVmPVwiaHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3NoYXJlci9zaGFyZXIucGhwP3U9e3t1cmx9fVwiPicgK1xuICAgICAgICAnPHN2ZyB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIm0yODcgNDU2di0yOTljMC0yMSA2LTM1IDM1LTM1aDM4di02M2MtNy0xLTI5LTMtNTUtMy01NCAwLTkxIDMzLTkxIDk0djMwNm0xNDMtMjU0aC0yMDV2NzJoMTk2XCIgLz48L3N2Zz4nICtcbiAgICAgICAgXCI8c3Bhbj5GYWNlYm9vazwvc3Bhbj5cIiArXG4gICAgICAgIFwiPC9hPlwiICtcbiAgICAgICAgJzxhIGNsYXNzPVwiZmFuY3lib3gtc2hhcmVfX2J1dHRvbiBmYW5jeWJveC1zaGFyZV9fYnV0dG9uLS10d1wiIGhyZWY9XCJodHRwczovL3R3aXR0ZXIuY29tL2ludGVudC90d2VldD91cmw9e3t1cmx9fSZ0ZXh0PXt7ZGVzY3J9fVwiPicgK1xuICAgICAgICAnPHN2ZyB2aWV3Qm94PVwiMCAwIDUxMiA1MTJcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCI+PHBhdGggZD1cIm00NTYgMTMzYy0xNCA3LTMxIDExLTQ3IDEzIDE3LTEwIDMwLTI3IDM3LTQ2LTE1IDEwLTM0IDE2LTUyIDIwLTYxLTYyLTE1Ny03LTE0MSA3NS02OC0zLTEyOS0zNS0xNjktODUtMjIgMzctMTEgODYgMjYgMTA5LTEzIDAtMjYtNC0zNy05IDAgMzkgMjggNzIgNjUgODAtMTIgMy0yNSA0LTM3IDIgMTAgMzMgNDEgNTcgNzcgNTctNDIgMzAtNzcgMzgtMTIyIDM0IDE3MCAxMTEgMzc4LTMyIDM1OS0yMDggMTYtMTEgMzAtMjUgNDEtNDJ6XCIgLz48L3N2Zz4nICtcbiAgICAgICAgXCI8c3Bhbj5Ud2l0dGVyPC9zcGFuPlwiICtcbiAgICAgICAgXCI8L2E+XCIgK1xuICAgICAgICAnPGEgY2xhc3M9XCJmYW5jeWJveC1zaGFyZV9fYnV0dG9uIGZhbmN5Ym94LXNoYXJlX19idXR0b24tLXB0XCIgaHJlZj1cImh0dHBzOi8vd3d3LnBpbnRlcmVzdC5jb20vcGluL2NyZWF0ZS9idXR0b24vP3VybD17e3VybH19JmRlc2NyaXB0aW9uPXt7ZGVzY3J9fSZtZWRpYT17e21lZGlhfX1cIj4nICtcbiAgICAgICAgJzxzdmcgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiPjxwYXRoIGQ9XCJtMjY1IDU2Yy0xMDkgMC0xNjQgNzgtMTY0IDE0NCAwIDM5IDE1IDc0IDQ3IDg3IDUgMiAxMCAwIDEyLTVsNC0xOWMyLTYgMS04LTMtMTMtOS0xMS0xNS0yNS0xNS00NSAwLTU4IDQzLTExMCAxMTMtMTEwIDYyIDAgOTYgMzggOTYgODggMCA2Ny0zMCAxMjItNzMgMTIyLTI0IDAtNDItMTktMzYtNDQgNi0yOSAyMC02MCAyMC04MSAwLTE5LTEwLTM1LTMxLTM1LTI1IDAtNDQgMjYtNDQgNjAgMCAyMSA3IDM2IDcgMzZsLTMwIDEyNWMtOCAzNy0xIDgzIDAgODcgMCAzIDQgNCA1IDIgMi0zIDMyLTM5IDQyLTc1bDE2LTY0YzggMTYgMzEgMjkgNTYgMjkgNzQgMCAxMjQtNjcgMTI0LTE1NyAwLTY5LTU4LTEzMi0xNDYtMTMyelwiIGZpbGw9XCIjZmZmXCIvPjwvc3ZnPicgK1xuICAgICAgICBcIjxzcGFuPlBpbnRlcmVzdDwvc3Bhbj5cIiArXG4gICAgICAgIFwiPC9hPlwiICtcbiAgICAgICAgXCI8L3A+XCIgK1xuICAgICAgICAnPHA+PGlucHV0IGNsYXNzPVwiZmFuY3lib3gtc2hhcmVfX2lucHV0XCIgdHlwZT1cInRleHRcIiB2YWx1ZT1cInt7dXJsX3Jhd319XCIgb25jbGljaz1cInNlbGVjdCgpXCIgLz48L3A+JyArXG4gICAgICAgIFwiPC9kaXY+XCJcbiAgICB9XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGVzY2FwZUh0bWwoc3RyaW5nKSB7XG4gICAgdmFyIGVudGl0eU1hcCA9IHtcbiAgICAgIFwiJlwiOiBcIiZhbXA7XCIsXG4gICAgICBcIjxcIjogXCImbHQ7XCIsXG4gICAgICBcIj5cIjogXCImZ3Q7XCIsXG4gICAgICAnXCInOiBcIiZxdW90O1wiLFxuICAgICAgXCInXCI6IFwiJiMzOTtcIixcbiAgICAgIFwiL1wiOiBcIiYjeDJGO1wiLFxuICAgICAgXCJgXCI6IFwiJiN4NjA7XCIsXG4gICAgICBcIj1cIjogXCImI3gzRDtcIlxuICAgIH07XG5cbiAgICByZXR1cm4gU3RyaW5nKHN0cmluZykucmVwbGFjZSgvWyY8PlwiJ2A9XFwvXS9nLCBmdW5jdGlvbiAocykge1xuICAgICAgcmV0dXJuIGVudGl0eU1hcFtzXTtcbiAgICB9KTtcbiAgfVxuXG4gICQoZG9jdW1lbnQpLm9uKFwiY2xpY2tcIiwgXCJbZGF0YS1mYW5jeWJveC1zaGFyZV1cIiwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBpbnN0YW5jZSA9ICQuZmFuY3lib3guZ2V0SW5zdGFuY2UoKSxcbiAgICAgIGN1cnJlbnQgPSBpbnN0YW5jZS5jdXJyZW50IHx8IG51bGwsXG4gICAgICB1cmwsXG4gICAgICB0cGw7XG5cbiAgICBpZiAoIWN1cnJlbnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoJC50eXBlKGN1cnJlbnQub3B0cy5zaGFyZS51cmwpID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHVybCA9IGN1cnJlbnQub3B0cy5zaGFyZS51cmwuYXBwbHkoY3VycmVudCwgW2luc3RhbmNlLCBjdXJyZW50XSk7XG4gICAgfVxuXG4gICAgdHBsID0gY3VycmVudC5vcHRzLnNoYXJlLnRwbFxuICAgICAgLnJlcGxhY2UoL1xce1xce21lZGlhXFx9XFx9L2csIGN1cnJlbnQudHlwZSA9PT0gXCJpbWFnZVwiID8gZW5jb2RlVVJJQ29tcG9uZW50KGN1cnJlbnQuc3JjKSA6IFwiXCIpXG4gICAgICAucmVwbGFjZSgvXFx7XFx7dXJsXFx9XFx9L2csIGVuY29kZVVSSUNvbXBvbmVudCh1cmwpKVxuICAgICAgLnJlcGxhY2UoL1xce1xce3VybF9yYXdcXH1cXH0vZywgZXNjYXBlSHRtbCh1cmwpKVxuICAgICAgLnJlcGxhY2UoL1xce1xce2Rlc2NyXFx9XFx9L2csIGluc3RhbmNlLiRjYXB0aW9uID8gZW5jb2RlVVJJQ29tcG9uZW50KGluc3RhbmNlLiRjYXB0aW9uLnRleHQoKSkgOiBcIlwiKTtcblxuICAgICQuZmFuY3lib3gub3Blbih7XG4gICAgICBzcmM6IGluc3RhbmNlLnRyYW5zbGF0ZShpbnN0YW5jZSwgdHBsKSxcbiAgICAgIHR5cGU6IFwiaHRtbFwiLFxuICAgICAgb3B0czoge1xuICAgICAgICB0b3VjaDogZmFsc2UsXG4gICAgICAgIGFuaW1hdGlvbkVmZmVjdDogZmFsc2UsXG4gICAgICAgIGFmdGVyTG9hZDogZnVuY3Rpb24gKHNoYXJlSW5zdGFuY2UsIHNoYXJlQ3VycmVudCkge1xuICAgICAgICAgIC8vIENsb3NlIHNlbGYgaWYgcGFyZW50IGluc3RhbmNlIGlzIGNsb3NpbmdcbiAgICAgICAgICBpbnN0YW5jZS4kcmVmcy5jb250YWluZXIub25lKFwiYmVmb3JlQ2xvc2UuZmJcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgc2hhcmVJbnN0YW5jZS5jbG9zZShudWxsLCAwKTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIC8vIE9wZW5pbmcgbGlua3MgaW4gYSBwb3B1cCB3aW5kb3dcbiAgICAgICAgICBzaGFyZUN1cnJlbnQuJGNvbnRlbnQuZmluZChcIi5mYW5jeWJveC1zaGFyZV9fYnV0dG9uXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKHRoaXMuaHJlZiwgXCJTaGFyZVwiLCBcIndpZHRoPTU1MCwgaGVpZ2h0PTQ1MFwiKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgbW9iaWxlOiB7XG4gICAgICAgICAgYXV0b0ZvY3VzOiBmYWxzZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xufSkoZG9jdW1lbnQsIGpRdWVyeSk7XG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy9cbi8vIEhhc2hcbi8vIEVuYWJsZXMgbGlua2luZyB0byBlYWNoIG1vZGFsXG4vL1xuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbihmdW5jdGlvbiAod2luZG93LCBkb2N1bWVudCwgJCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICAvLyBTaW1wbGUgJC5lc2NhcGVTZWxlY3RvciBwb2x5ZmlsbCAoZm9yIGpRdWVyeSBwcmlvciB2MylcbiAgaWYgKCEkLmVzY2FwZVNlbGVjdG9yKSB7XG4gICAgJC5lc2NhcGVTZWxlY3RvciA9IGZ1bmN0aW9uIChzZWwpIHtcbiAgICAgIHZhciByY3NzZXNjYXBlID0gLyhbXFwwLVxceDFmXFx4N2ZdfF4tP1xcZCl8Xi0kfFteXFx4ODAtXFx1RkZGRlxcdy1dL2c7XG4gICAgICB2YXIgZmNzc2VzY2FwZSA9IGZ1bmN0aW9uIChjaCwgYXNDb2RlUG9pbnQpIHtcbiAgICAgICAgaWYgKGFzQ29kZVBvaW50KSB7XG4gICAgICAgICAgLy8gVSswMDAwIE5VTEwgYmVjb21lcyBVK0ZGRkQgUkVQTEFDRU1FTlQgQ0hBUkFDVEVSXG4gICAgICAgICAgaWYgKGNoID09PSBcIlxcMFwiKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcXHVGRkZEXCI7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gQ29udHJvbCBjaGFyYWN0ZXJzIGFuZCAoZGVwZW5kZW50IHVwb24gcG9zaXRpb24pIG51bWJlcnMgZ2V0IGVzY2FwZWQgYXMgY29kZSBwb2ludHNcbiAgICAgICAgICByZXR1cm4gY2guc2xpY2UoMCwgLTEpICsgXCJcXFxcXCIgKyBjaC5jaGFyQ29kZUF0KGNoLmxlbmd0aCAtIDEpLnRvU3RyaW5nKDE2KSArIFwiIFwiO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gT3RoZXIgcG90ZW50aWFsbHktc3BlY2lhbCBBU0NJSSBjaGFyYWN0ZXJzIGdldCBiYWNrc2xhc2gtZXNjYXBlZFxuICAgICAgICByZXR1cm4gXCJcXFxcXCIgKyBjaDtcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiAoc2VsICsgXCJcIikucmVwbGFjZShyY3NzZXNjYXBlLCBmY3NzZXNjYXBlKTtcbiAgICB9O1xuICB9XG5cbiAgLy8gR2V0IGluZm8gYWJvdXQgZ2FsbGVyeSBuYW1lIGFuZCBjdXJyZW50IGluZGV4IGZyb20gdXJsXG4gIGZ1bmN0aW9uIHBhcnNlVXJsKCkge1xuICAgIHZhciBoYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2guc3Vic3RyKDEpLFxuICAgICAgcmV6ID0gaGFzaC5zcGxpdChcIi1cIiksXG4gICAgICBpbmRleCA9IHJlei5sZW5ndGggPiAxICYmIC9eXFwrP1xcZCskLy50ZXN0KHJleltyZXoubGVuZ3RoIC0gMV0pID8gcGFyc2VJbnQocmV6LnBvcCgtMSksIDEwKSB8fCAxIDogMSxcbiAgICAgIGdhbGxlcnkgPSByZXouam9pbihcIi1cIik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgaGFzaDogaGFzaCxcbiAgICAgIC8qIEluZGV4IGlzIHN0YXJ0aW5nIGZyb20gMSAqL1xuICAgICAgaW5kZXg6IGluZGV4IDwgMSA/IDEgOiBpbmRleCxcbiAgICAgIGdhbGxlcnk6IGdhbGxlcnlcbiAgICB9O1xuICB9XG5cbiAgLy8gVHJpZ2dlciBjbGljayBldm50IG9uIGxpbmtzIHRvIG9wZW4gbmV3IGZhbmN5Qm94IGluc3RhbmNlXG4gIGZ1bmN0aW9uIHRyaWdnZXJGcm9tVXJsKHVybCkge1xuICAgIGlmICh1cmwuZ2FsbGVyeSAhPT0gXCJcIikge1xuICAgICAgLy8gSWYgd2UgY2FuIGZpbmQgZWxlbWVudCBtYXRjaGluZyAnZGF0YS1mYW5jeWJveCcgYXRyaWJ1dGUsXG4gICAgICAvLyB0aGVuIHRyaWdnZXJpbmcgY2xpY2sgZXZlbnQgc2hvdWxkIHN0YXJ0IGZhbmN5Qm94XG4gICAgICAkKFwiW2RhdGEtZmFuY3lib3g9J1wiICsgJC5lc2NhcGVTZWxlY3Rvcih1cmwuZ2FsbGVyeSkgKyBcIiddXCIpXG4gICAgICAgIC5lcSh1cmwuaW5kZXggLSAxKVxuICAgICAgICAuZm9jdXMoKVxuICAgICAgICAudHJpZ2dlcihcImNsaWNrLmZiLXN0YXJ0XCIpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEdldCBnYWxsZXJ5IG5hbWUgZnJvbSBjdXJyZW50IGluc3RhbmNlXG4gIGZ1bmN0aW9uIGdldEdhbGxlcnlJRChpbnN0YW5jZSkge1xuICAgIHZhciBvcHRzLCByZXQ7XG5cbiAgICBpZiAoIWluc3RhbmNlKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgb3B0cyA9IGluc3RhbmNlLmN1cnJlbnQgPyBpbnN0YW5jZS5jdXJyZW50Lm9wdHMgOiBpbnN0YW5jZS5vcHRzO1xuICAgIHJldCA9IG9wdHMuaGFzaCB8fCAob3B0cy4kb3JpZyA/IG9wdHMuJG9yaWcuZGF0YShcImZhbmN5Ym94XCIpIHx8IG9wdHMuJG9yaWcuZGF0YShcImZhbmN5Ym94LXRyaWdnZXJcIikgOiBcIlwiKTtcblxuICAgIHJldHVybiByZXQgPT09IFwiXCIgPyBmYWxzZSA6IHJldDtcbiAgfVxuXG4gIC8vIFN0YXJ0IHdoZW4gRE9NIGJlY29tZXMgcmVhZHlcbiAgJChmdW5jdGlvbiAoKSB7XG4gICAgLy8gQ2hlY2sgaWYgdXNlciBoYXMgZGlzYWJsZWQgdGhpcyBtb2R1bGVcbiAgICBpZiAoJC5mYW5jeWJveC5kZWZhdWx0cy5oYXNoID09PSBmYWxzZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFVwZGF0ZSBoYXNoIHdoZW4gb3BlbmluZy9jbG9zaW5nIGZhbmN5Qm94XG4gICAgJChkb2N1bWVudCkub24oe1xuICAgICAgXCJvbkluaXQuZmJcIjogZnVuY3Rpb24gKGUsIGluc3RhbmNlKSB7XG4gICAgICAgIHZhciB1cmwsIGdhbGxlcnk7XG5cbiAgICAgICAgaWYgKGluc3RhbmNlLmdyb3VwW2luc3RhbmNlLmN1cnJJbmRleF0ub3B0cy5oYXNoID09PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHVybCA9IHBhcnNlVXJsKCk7XG4gICAgICAgIGdhbGxlcnkgPSBnZXRHYWxsZXJ5SUQoaW5zdGFuY2UpO1xuXG4gICAgICAgIC8vIE1ha2Ugc3VyZSBnYWxsZXJ5IHN0YXJ0IGluZGV4IG1hdGNoZXMgaW5kZXggZnJvbSBoYXNoXG4gICAgICAgIGlmIChnYWxsZXJ5ICYmIHVybC5nYWxsZXJ5ICYmIGdhbGxlcnkgPT0gdXJsLmdhbGxlcnkpIHtcbiAgICAgICAgICBpbnN0YW5jZS5jdXJySW5kZXggPSB1cmwuaW5kZXggLSAxO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBcImJlZm9yZVNob3cuZmJcIjogZnVuY3Rpb24gKGUsIGluc3RhbmNlLCBjdXJyZW50LCBmaXJzdFJ1bikge1xuICAgICAgICB2YXIgZ2FsbGVyeTtcblxuICAgICAgICBpZiAoIWN1cnJlbnQgfHwgY3VycmVudC5vcHRzLmhhc2ggPT09IGZhbHNlKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgbmVlZCB0byB1cGRhdGUgd2luZG93IGhhc2hcbiAgICAgICAgZ2FsbGVyeSA9IGdldEdhbGxlcnlJRChpbnN0YW5jZSk7XG5cbiAgICAgICAgaWYgKCFnYWxsZXJ5KSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gVmFyaWFibGUgY29udGFpbmluZyBsYXN0IGhhc2ggdmFsdWUgc2V0IGJ5IGZhbmN5Qm94XG4gICAgICAgIC8vIEl0IHdpbGwgYmUgdXNlZCB0byBkZXRlcm1pbmUgaWYgZmFuY3lCb3ggbmVlZHMgdG8gY2xvc2UgYWZ0ZXIgaGFzaCBjaGFuZ2UgaXMgZGV0ZWN0ZWRcbiAgICAgICAgaW5zdGFuY2UuY3VycmVudEhhc2ggPSBnYWxsZXJ5ICsgKGluc3RhbmNlLmdyb3VwLmxlbmd0aCA+IDEgPyBcIi1cIiArIChjdXJyZW50LmluZGV4ICsgMSkgOiBcIlwiKTtcblxuICAgICAgICAvLyBJZiBjdXJyZW50IGhhc2ggaXMgdGhlIHNhbWUgKHRoaXMgaW5zdGFuY2UgbW9zdCBsaWtlbHkgaXMgb3BlbmVkIGJ5IGhhc2hjaGFuZ2UpLCB0aGVuIGRvIG5vdGhpbmdcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoID09PSBcIiNcIiArIGluc3RhbmNlLmN1cnJlbnRIYXNoKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGZpcnN0UnVuICYmICFpbnN0YW5jZS5vcmlnSGFzaCkge1xuICAgICAgICAgIGluc3RhbmNlLm9yaWdIYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2g7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoaW5zdGFuY2UuaGFzaFRpbWVyKSB7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KGluc3RhbmNlLmhhc2hUaW1lcik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBVcGRhdGUgaGFzaFxuICAgICAgICBpbnN0YW5jZS5oYXNoVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAoXCJyZXBsYWNlU3RhdGVcIiBpbiB3aW5kb3cuaGlzdG9yeSkge1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnlbZmlyc3RSdW4gPyBcInB1c2hTdGF0ZVwiIDogXCJyZXBsYWNlU3RhdGVcIl0oe30sXG4gICAgICAgICAgICAgIGRvY3VtZW50LnRpdGxlLFxuICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUgKyB3aW5kb3cubG9jYXRpb24uc2VhcmNoICsgXCIjXCIgKyBpbnN0YW5jZS5jdXJyZW50SGFzaFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgaWYgKGZpcnN0UnVuKSB7XG4gICAgICAgICAgICAgIGluc3RhbmNlLmhhc0NyZWF0ZWRIaXN0b3J5ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSBpbnN0YW5jZS5jdXJyZW50SGFzaDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpbnN0YW5jZS5oYXNoVGltZXIgPSBudWxsO1xuICAgICAgICB9LCAzMDApO1xuICAgICAgfSxcblxuICAgICAgXCJiZWZvcmVDbG9zZS5mYlwiOiBmdW5jdGlvbiAoZSwgaW5zdGFuY2UsIGN1cnJlbnQpIHtcbiAgICAgICAgaWYgKCFjdXJyZW50IHx8IGN1cnJlbnQub3B0cy5oYXNoID09PSBmYWxzZSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNsZWFyVGltZW91dChpbnN0YW5jZS5oYXNoVGltZXIpO1xuXG4gICAgICAgIC8vIEdvdG8gcHJldmlvdXMgaGlzdG9yeSBlbnRyeVxuICAgICAgICBpZiAoaW5zdGFuY2UuY3VycmVudEhhc2ggJiYgaW5zdGFuY2UuaGFzQ3JlYXRlZEhpc3RvcnkpIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5iYWNrKCk7XG4gICAgICAgIH0gZWxzZSBpZiAoaW5zdGFuY2UuY3VycmVudEhhc2gpIHtcbiAgICAgICAgICBpZiAoXCJyZXBsYWNlU3RhdGVcIiBpbiB3aW5kb3cuaGlzdG9yeSkge1xuICAgICAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKHt9LCBkb2N1bWVudC50aXRsZSwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCArIChpbnN0YW5jZS5vcmlnSGFzaCB8fCBcIlwiKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gaW5zdGFuY2Uub3JpZ0hhc2g7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaW5zdGFuY2UuY3VycmVudEhhc2ggPSBudWxsO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gQ2hlY2sgaWYgbmVlZCB0byBzdGFydC9jbG9zZSBhZnRlciB1cmwgaGFzIGNoYW5nZWRcbiAgICAkKHdpbmRvdykub24oXCJoYXNoY2hhbmdlLmZiXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB1cmwgPSBwYXJzZVVybCgpLFxuICAgICAgICBmYiA9IG51bGw7XG5cbiAgICAgIC8vIEZpbmQgbGFzdCBmYW5jeUJveCBpbnN0YW5jZSB0aGF0IGhhcyBcImhhc2hcIlxuICAgICAgJC5lYWNoKFxuICAgICAgICAkKFwiLmZhbmN5Ym94LWNvbnRhaW5lclwiKVxuICAgICAgICAuZ2V0KClcbiAgICAgICAgLnJldmVyc2UoKSxcbiAgICAgICAgZnVuY3Rpb24gKGluZGV4LCB2YWx1ZSkge1xuICAgICAgICAgIHZhciB0bXAgPSAkKHZhbHVlKS5kYXRhKFwiRmFuY3lCb3hcIik7XG5cbiAgICAgICAgICBpZiAodG1wICYmIHRtcC5jdXJyZW50SGFzaCkge1xuICAgICAgICAgICAgZmIgPSB0bXA7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICBpZiAoZmIpIHtcbiAgICAgICAgLy8gTm93LCBjb21wYXJlIGhhc2ggdmFsdWVzXG4gICAgICAgIGlmIChmYi5jdXJyZW50SGFzaCAhPT0gdXJsLmdhbGxlcnkgKyBcIi1cIiArIHVybC5pbmRleCAmJiAhKHVybC5pbmRleCA9PT0gMSAmJiBmYi5jdXJyZW50SGFzaCA9PSB1cmwuZ2FsbGVyeSkpIHtcbiAgICAgICAgICBmYi5jdXJyZW50SGFzaCA9IG51bGw7XG5cbiAgICAgICAgICBmYi5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHVybC5nYWxsZXJ5ICE9PSBcIlwiKSB7XG4gICAgICAgIHRyaWdnZXJGcm9tVXJsKHVybCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBDaGVjayBjdXJyZW50IGhhc2ggYW5kIHRyaWdnZXIgY2xpY2sgZXZlbnQgb24gbWF0Y2hpbmcgZWxlbWVudCB0byBzdGFydCBmYW5jeUJveCwgaWYgbmVlZGVkXG4gICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAoISQuZmFuY3lib3guZ2V0SW5zdGFuY2UoKSkge1xuICAgICAgICB0cmlnZ2VyRnJvbVVybChwYXJzZVVybCgpKTtcbiAgICAgIH1cbiAgICB9LCA1MCk7XG4gIH0pO1xufSkod2luZG93LCBkb2N1bWVudCwgalF1ZXJ5KTtcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4vL1xuLy8gV2hlZWxcbi8vIEJhc2ljIG1vdXNlIHdlaGVlbCBzdXBwb3J0IGZvciBnYWxsZXJ5IG5hdmlnYXRpb25cbi8vXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuKGZ1bmN0aW9uIChkb2N1bWVudCwgJCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgcHJldlRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAkKGRvY3VtZW50KS5vbih7XG4gICAgXCJvbkluaXQuZmJcIjogZnVuY3Rpb24gKGUsIGluc3RhbmNlLCBjdXJyZW50KSB7XG4gICAgICBpbnN0YW5jZS4kcmVmcy5zdGFnZS5vbihcIm1vdXNld2hlZWwgRE9NTW91c2VTY3JvbGwgd2hlZWwgTW96TW91c2VQaXhlbFNjcm9sbFwiLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgY3VycmVudCA9IGluc3RhbmNlLmN1cnJlbnQsXG4gICAgICAgICAgY3VyclRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcblxuICAgICAgICBpZiAoaW5zdGFuY2UuZ3JvdXAubGVuZ3RoIDwgMiB8fCBjdXJyZW50Lm9wdHMud2hlZWwgPT09IGZhbHNlIHx8IChjdXJyZW50Lm9wdHMud2hlZWwgPT09IFwiYXV0b1wiICYmIGN1cnJlbnQudHlwZSAhPT0gXCJpbWFnZVwiKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgICBpZiAoY3VycmVudC4kc2xpZGUuaGFzQ2xhc3MoXCJmYW5jeWJveC1hbmltYXRlZFwiKSkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGUgPSBlLm9yaWdpbmFsRXZlbnQgfHwgZTtcblxuICAgICAgICBpZiAoY3VyclRpbWUgLSBwcmV2VGltZSA8IDI1MCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHByZXZUaW1lID0gY3VyclRpbWU7XG5cbiAgICAgICAgaW5zdGFuY2VbKC1lLmRlbHRhWSB8fCAtZS5kZWx0YVggfHwgZS53aGVlbERlbHRhIHx8IC1lLmRldGFpbCkgPCAwID8gXCJuZXh0XCIgOiBcInByZXZpb3VzXCJdKCk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufSkoZG9jdW1lbnQsIGpRdWVyeSk7XG4iLCJpbXBvcnQgbm9kIGZyb20gJy4uL2NvbW1vbi9ub2QnO1xuaW1wb3J0IHsgQ29sbGFwc2libGVFdmVudHMgfSBmcm9tICcuLi9jb21tb24vY29sbGFwc2libGUnO1xuaW1wb3J0IGZvcm1zIGZyb20gJy4uL2NvbW1vbi9tb2RlbHMvZm9ybXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyB7XG4gICAgY29uc3RydWN0b3IoJHJldmlld0Zvcm0pIHtcbiAgICAgICAgdGhpcy52YWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiAkcmV2aWV3Rm9ybS5maW5kKCdpbnB1dFt0eXBlPVwic3VibWl0XCJdJyksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuJHJldmlld3NDb250ZW50ID0gJCgnI3Byb2R1Y3QtcmV2aWV3cycpO1xuICAgICAgICB0aGlzLiRjb2xsYXBzaWJsZSA9ICQoJ1tkYXRhLWNvbGxhcHNpYmxlXScsIHRoaXMuJHJldmlld3NDb250ZW50KTtcblxuICAgICAgICB0aGlzLmluaXRMaW5rQmluZCgpO1xuICAgICAgICB0aGlzLmluamVjdFBhZ2luYXRpb25MaW5rKCk7XG4gICAgICAgIHRoaXMuY29sbGFwc2VSZXZpZXdzKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogT24gaW5pdGlhbCBwYWdlIGxvYWQsIHRoZSB1c2VyIGNsaWNrcyBvbiBcIigxMiBSZXZpZXdzKVwiIGxpbmtcbiAgICAgKiBUaGUgYnJvd3NlciBqdW1wcyB0byB0aGUgcmV2aWV3IHBhZ2UgYW5kIHNob3VsZCBleHBhbmQgdGhlIHJldmlld3Mgc2VjdGlvblxuICAgICAqL1xuICAgIGluaXRMaW5rQmluZCgpIHtcbiAgICAgICAgY29uc3QgJGNvbnRlbnQgPSAkKCcjcHJvZHVjdFJldmlld3MtY29udGVudCcsIHRoaXMuJHJldmlld3NDb250ZW50KTtcblxuICAgICAgICAkKCcucHJvZHVjdFZpZXctcmV2aWV3TGluaycpLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICQoJy5wcm9kdWN0Vmlldy1yZXZpZXdUYWJMaW5rJykudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgIGlmICghJGNvbnRlbnQuaGFzQ2xhc3MoJ2lzLW9wZW4nKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuJGNvbGxhcHNpYmxlLnRyaWdnZXIoQ29sbGFwc2libGVFdmVudHMuY2xpY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjb2xsYXBzZVJldmlld3MoKSB7XG4gICAgICAgIC8vIFdlJ3JlIGluIHBhZ2luYXRpbmcgc3RhdGUsIGRvIG5vdCBjb2xsYXBzZVxuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2ggJiYgd2luZG93LmxvY2F0aW9uLmhhc2guaW5kZXhPZignI3Byb2R1Y3QtcmV2aWV3cycpID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmb3JjZSBjb2xsYXBzZSBvbiBwYWdlIGxvYWRcbiAgICAgICAgdGhpcy4kY29sbGFwc2libGUudHJpZ2dlcihDb2xsYXBzaWJsZUV2ZW50cy5jbGljayk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogSW5qZWN0IElEIGludG8gdGhlIHBhZ2luYXRpb24gbGlua1xuICAgICAqL1xuICAgIGluamVjdFBhZ2luYXRpb25MaW5rKCkge1xuICAgICAgICBjb25zdCAkbmV4dExpbmsgPSAkKCcucGFnaW5hdGlvbi1pdGVtLS1uZXh0IC5wYWdpbmF0aW9uLWxpbmsnLCB0aGlzLiRyZXZpZXdzQ29udGVudCk7XG4gICAgICAgIGNvbnN0ICRwcmV2TGluayA9ICQoJy5wYWdpbmF0aW9uLWl0ZW0tLXByZXZpb3VzIC5wYWdpbmF0aW9uLWxpbmsnLCB0aGlzLiRyZXZpZXdzQ29udGVudCk7XG5cbiAgICAgICAgaWYgKCRuZXh0TGluay5sZW5ndGgpIHtcbiAgICAgICAgICAgICRuZXh0TGluay5hdHRyKCdocmVmJywgYCR7JG5leHRMaW5rLmF0dHIoJ2hyZWYnKX0gI3Byb2R1Y3QtcmV2aWV3c2ApO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRwcmV2TGluay5sZW5ndGgpIHtcbiAgICAgICAgICAgICRwcmV2TGluay5hdHRyKCdocmVmJywgYCR7JHByZXZMaW5rLmF0dHIoJ2hyZWYnKX0gI3Byb2R1Y3QtcmV2aWV3c2ApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJWYWxpZGF0aW9uKGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy52YWxpZGF0b3IuYWRkKFt7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ1tuYW1lPVwicmV2cmF0aW5nXCJdJyxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQucmV2aWV3UmF0aW5nLFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ1tuYW1lPVwicmV2dGl0bGVcIl0nLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5yZXZpZXdTdWJqZWN0LFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ1tuYW1lPVwicmV2dGV4dFwiXScsXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LnJldmlld0NvbW1lbnQsXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiAnLndyaXRlUmV2aWV3LWZvcm0gW25hbWU9XCJlbWFpbFwiXScsXG4gICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmb3Jtcy5lbWFpbCh2YWwpO1xuICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQucmV2aWV3RW1haWwsXG4gICAgICAgIH1dKTtcblxuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0b3I7XG4gICAgfVxuXG4gICAgdmFsaWRhdGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcbiAgICB9XG59XG4iLCJleHBvcnQgY2xhc3MgVmlkZW9HYWxsZXJ5IHtcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudCkge1xuICAgICAgICB0aGlzLiRwbGF5ZXIgPSAkZWxlbWVudC5maW5kKCdbZGF0YS12aWRlby1wbGF5ZXJdJyk7XG4gICAgICAgIHRoaXMuJHZpZGVvcyA9ICRlbGVtZW50LmZpbmQoJ1tkYXRhLXZpZGVvLWl0ZW1dJyk7XG4gICAgICAgIHRoaXMuY3VycmVudFZpZGVvID0ge307XG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIHNlbGVjdE5ld1ZpZGVvKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0ICR0YXJnZXQgPSAkKGUuY3VycmVudFRhcmdldCk7XG5cbiAgICAgICAgdGhpcy5jdXJyZW50VmlkZW8gPSB7XG4gICAgICAgICAgICBpZDogJHRhcmdldC5kYXRhKCd2aWRlb0lkJyksXG4gICAgICAgICAgICAkc2VsZWN0ZWRUaHVtYjogJHRhcmdldCxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLnNldE1haW5WaWRlbygpO1xuICAgICAgICB0aGlzLnNldEFjdGl2ZVRodW1iKCk7XG4gICAgfVxuXG4gICAgc2V0TWFpblZpZGVvKCkge1xuICAgICAgICB0aGlzLiRwbGF5ZXIuYXR0cignc3JjJywgYC8vd3d3LnlvdXR1YmUuY29tL2VtYmVkLyR7dGhpcy5jdXJyZW50VmlkZW8uaWR9YCk7XG4gICAgfVxuXG4gICAgc2V0QWN0aXZlVGh1bWIoKSB7XG4gICAgICAgIHRoaXMuJHZpZGVvcy5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgICAgIHRoaXMuY3VycmVudFZpZGVvLiRzZWxlY3RlZFRodW1iLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLiR2aWRlb3Mub24oJ2NsaWNrJywgdGhpcy5zZWxlY3ROZXdWaWRlby5iaW5kKHRoaXMpKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHZpZGVvR2FsbGVyeSgpIHtcbiAgICBjb25zdCBwbHVnaW5LZXkgPSAndmlkZW8tZ2FsbGVyeSc7XG4gICAgY29uc3QgJHZpZGVvR2FsbGVyeSA9ICQoYFtkYXRhLSR7cGx1Z2luS2V5fV1gKTtcblxuICAgICR2aWRlb0dhbGxlcnkuZWFjaCgoaW5kZXgsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgY29uc3QgJGVsID0gJChlbGVtZW50KTtcbiAgICAgICAgY29uc3QgaXNJbml0aWFsaXplZCA9ICRlbC5kYXRhKHBsdWdpbktleSkgaW5zdGFuY2VvZiBWaWRlb0dhbGxlcnk7XG5cbiAgICAgICAgaWYgKGlzSW5pdGlhbGl6ZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgICRlbC5kYXRhKHBsdWdpbktleSwgbmV3IFZpZGVvR2FsbGVyeSgkZWwpKTtcbiAgICB9KTtcbn1cbiIsImNsYXNzIFlzd1N0aWNreVByb2R1Y3Qge1xuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcbiAgICAgICAgdGhpcy5jb250ZXh0ID0gY29udGV4dDtcbiAgICAgICAgdGhpcy5wcm9kdWN0VmlldyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0LXZpZXcnKTtcbiAgICAgICAgdGhpcy5mb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2l0ZS1mb290ZXInKTtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGlja3ktcHJvZHVjdC10ZW1wbGF0ZScpO1xuICAgICAgICB0aGlzLnN0aWNreVByb2R1Y3QgPSBudWxsO1xuICAgICAgICB0aGlzLnByb2R1Y3QgPSB7XG4gICAgICAgICAgICBidG5JbmM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LW9wdGlvbnMgW2RhdGEtYWN0aW9uPVwiaW5jXCJdJyksXG4gICAgICAgICAgICBidG5EZWM6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LW9wdGlvbnMgW2RhdGEtYWN0aW9uPVwiZGVjXCJdJyksXG4gICAgICAgICAgICBpbnB1dDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F0eVtdJyksXG4gICAgICAgICAgICBhY3Rpb246IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtLWFjdGlvbi1hZGRUb0NhcnQnKSxcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zdGlja3lQcm9kdWN0SW5wdXRzID0ge1xuICAgICAgICAgICAgYnRuSW5jOiBudWxsLFxuICAgICAgICAgICAgYnRuRGVjOiBudWxsLFxuICAgICAgICAgICAgaW5wdXQ6IG51bGwsXG4gICAgICAgICAgICBhY3Rpb246IG51bGwsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfVxuXG4gICAgaW5pdCgpIHtcbiAgICAgICAgbGV0IGZsYWcgPSBmYWxzZTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGZsYWcpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuaW5zZXJ0VGVtcGxhdGUoKTtcbiAgICAgICAgICAgIHRoaXMuZ2V0U3RpY2t5UHJvZHVjdCgpO1xuICAgICAgICAgICAgdGhpcy5zZXRPYnNlcnZlcnMoKTtcbiAgICAgICAgICAgIHRoaXMuc2V0RXZlbnRzKHRoaXMucHJvZHVjdCwgdGhpcy5zdGlja3lQcm9kdWN0SW5wdXRzKTtcbiAgICAgICAgICAgIHRoaXMuc2V0RXZlbnRzKHRoaXMuc3RpY2t5UHJvZHVjdElucHV0cywgdGhpcy5wcm9kdWN0LCAnc3RpY2t5Jyk7XG4gICAgICAgICAgICBmbGFnID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5zZXJ0VGVtcGxhdGUoKSB7XG4gICAgICAgIGNvbnN0IGNsb25lID0gdGhpcy50ZW1wbGF0ZS5jb250ZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjbG9uZSk7XG4gICAgfVxuXG4gICAgZ2V0U3RpY2t5UHJvZHVjdCgpIHtcbiAgICAgICAgdGhpcy5zdGlja3lQcm9kdWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0aWNreS1wcm9kdWN0Jyk7XG4gICAgICAgIHRoaXMuc3RpY2t5UHJvZHVjdElucHV0cy5idG5JbmMgPSB0aGlzLnN0aWNreVByb2R1Y3QucXVlcnlTZWxlY3RvcignW2RhdGEtYWN0aW9uPVwiaW5jXCJdJyk7XG4gICAgICAgIHRoaXMuc3RpY2t5UHJvZHVjdElucHV0cy5idG5EZWMgPSB0aGlzLnN0aWNreVByb2R1Y3QucXVlcnlTZWxlY3RvcignW2RhdGEtYWN0aW9uPVwiZGVjXCJdJyk7XG4gICAgICAgIHRoaXMuc3RpY2t5UHJvZHVjdElucHV0cy5pbnB1dCA9IHRoaXMuc3RpY2t5UHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcjc3R5Y2t5LXByb2R1Y3QtcXVhbnRpdHknKTtcbiAgICAgICAgdGhpcy5zdGlja3lQcm9kdWN0SW5wdXRzLmFjdGlvbiA9IHRoaXMuc3RpY2t5UHJvZHVjdC5xdWVyeVNlbGVjdG9yKCcuZm9ybS1hY3Rpb24gaW5wdXQnKTtcbiAgICB9XG5cbiAgICBvYnNlckZ1bmMoZW50cnksIGl0ZW0sIGRhdGFOYW1lLCBkYXRhTmFtZXMgPSBbXSkge1xuICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaXMtYWN0aXZlJyk7XG4gICAgICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZShgZGF0YS0ke2RhdGFOYW1lfWAsIHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IGlzRGF0YSA9IGRhdGFOYW1lcy5tYXAoKGRhdGEpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBpdGVtLmRhdGFzZXRbZGF0YV0gIT09ICdmYWxzZSc7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChpc0RhdGEuaW5jbHVkZXMoZmFsc2UpKSB7XG4gICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2lzLWFjdGl2ZScpO1xuICAgICAgICB9XG5cbiAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoYGRhdGEtJHtkYXRhTmFtZX1gLCBmYWxzZSk7XG4gICAgfVxuXG4gICAgc2V0T2JzZXJ2ZXJzKCkge1xuICAgICAgICBjb25zdCBwcm9kdWN0Vmlld09ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzKSA9PiB7XG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB0aGlzLm9ic2VyRnVuYyhlbnRyeSwgdGhpcy5zdGlja3lQcm9kdWN0LCAnb2JzZXJ2ZXItYWRkLXRvLWNhcnQnLCBbJ29ic2VydmVyQWRkVG9DYXJ0JywgJ29ic2VydmVyRm9vdGVyJ10pKTtcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgdGhyZXNob2xkOiBbMCwgMC41MCwgMV0sXG4gICAgICAgICAgICByb290TWFyZ2luOiAnLTQyMHB4IDBweCAtMjAwcHggMHB4J1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBmb290ZXJPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4gdGhpcy5vYnNlckZ1bmMoZW50cnksIHRoaXMuc3RpY2t5UHJvZHVjdCwgJ29ic2VydmVyLWZvb3RlcicsIFsnb2JzZXJ2ZXJGb290ZXInLCAnb2JzZXJ2ZXJBZGRUb0NhcnQnXSkpO1xuICAgICAgICB9LCB7IHRocmVzaG9sZDogWzAuMzAsIDFdIH0pO1xuXG4gICAgICAgIHByb2R1Y3RWaWV3T2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLnByb2R1Y3RWaWV3KTtcbiAgICAgICAgZm9vdGVyT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmZvb3Rlcik7XG4gICAgfVxuXG4gICAgc2V0RXZlbnRzKG9iaiwgdGFyZ2V0LCB0eXBlID0gJ25vcm1hbCcpIHtcbiAgICAgICAgb2JqLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgIHRhcmdldC5pbnB1dC52YWx1ZSA9IG9iai5pbnB1dC52YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgb2JqLmlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKCkgPT4ge1xuICAgICAgICAgICAgdGFyZ2V0LmlucHV0LnZhbHVlID0gb2JqLmlucHV0LnZhbHVlO1xuICAgICAgICB9KTtcblxuICAgICAgICBvYmouYnRuSW5jLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGUgIT09ICdzdGlja3knKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0LmlucHV0LnZhbHVlID0gTnVtYmVyKG9iai5pbnB1dC52YWx1ZSkgKyAxO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRhcmdldC5idG5JbmMuY2xpY2soKTtcbiAgICAgICAgICAgIG9iai5pbnB1dC52YWx1ZSA9IHRhcmdldC5pbnB1dC52YWx1ZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgb2JqLmJ0bkRlYy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlICE9PSAnc3RpY2t5Jykge1xuICAgICAgICAgICAgICAgIHRhcmdldC5pbnB1dC52YWx1ZSA9IE51bWJlcihvYmouaW5wdXQudmFsdWUpIC0gMSA+IDAgPyBOdW1iZXIob2JqLmlucHV0LnZhbHVlKSAtIDEgOiAxO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRhcmdldC5idG5EZWMuY2xpY2soKTtcbiAgICAgICAgICAgIG9iai5pbnB1dCAudmFsdWUgPSB0YXJnZXQuaW5wdXQudmFsdWUgPz8gMTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHR5cGUgIT09ICdzdGlja3knKSByZXR1cm47XG5cbiAgICAgICAgb2JqLmFjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIHRhcmdldC5hY3Rpb24uY2xpY2soKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBZc3dTdGlja3lQcm9kdWN0RmFjdG9yeShjb250ZXh0KSB7XG4gICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBZc3dTdGlja3lQcm9kdWN0KSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBZc3dTdGlja3lQcm9kdWN0KGNvbnRleHQpO1xuICAgIH1cbn1cbiIsImltcG9ydCBZc3dTdGlja3lQcm9kdWN0RmFjdG9yeSBmcm9tICcuLy4uL2NvbXBvbmVudHMvc3RpY2t5LXByb2R1Y3QnO1xuXG4vKipcbiAqIEFkZCBwcm9kdWN0IGZ1bmN0aW9uYWxpdGllcyB0byB0aGlzIGNsYXNzIGFzIG1ldGhvZHMuXG4gKlxuICogQHNpbmNlIDEuMC4wXG4gKiBAYXV0aG9yIFlvdXJTdG9yZVdpemFyZHNcbiAqL1xuY2xhc3MgWXN3UHJvZHVjdCB7XG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgICAgICB0aGlzLmluaXQoKTtcbiAgICB9XG5cbiAgICBpbml0KCkge1xuICAgICAgICBZc3dTdGlja3lQcm9kdWN0RmFjdG9yeSgpO1xuICAgICAgICB0aGlzLm1vdmVQcm9kdWN0RGF0YSgpO1xuICAgICAgICB0aGlzLmFjb3JkZW9uKCk7XG4gICAgfVxuXG4gICAgbW92ZVByb2R1Y3REYXRhKCkge1xuICAgICAgICBjb25zdCBwcm9kdWN0VmlldyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0LXZpZXcnKTtcbiAgICAgICAgY29uc3QgcHJvZHVjdERhdGEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1kYXRhJyk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3REYXRhRGVza3RvcCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0LWRhdGEtZGVza3RvcCcpO1xuXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAod2luZG93LmlubmVyV2lkdGggPCA4MDEpIHtcbiAgICAgICAgICAgICAgICBwcm9kdWN0Vmlldy5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyZW5kJywgcHJvZHVjdERhdGEpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcHJvZHVjdERhdGFEZXNrdG9wLmFwcGVuZENoaWxkKHByb2R1Y3REYXRhKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYgKHdpbmRvdy5pbm5lcldpZHRoIDwgODAxKSB7XG4gICAgICAgICAgICBwcm9kdWN0Vmlldy5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2FmdGVyZW5kJywgcHJvZHVjdERhdGEpO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBwcm9kdWN0RGF0YURlc2t0b3AuYXBwZW5kQ2hpbGQocHJvZHVjdERhdGEpO1xuICAgIH1cblxuICAgIGFjb3JkZW9uKCkge1xuICAgICAgICBjb25zdCBhY2NvcmRpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnlzdy1jLWFjY29yZGlvbicpO1xuXG4gICAgICAgIGlmICghYWNjb3JkaW9ucy5sZW5ndGgpIHJldHVybjtcblxuICAgICAgICBhY2NvcmRpb25zLmZvckVhY2goKGFjY29yZGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWNjb3JkaW9uVGl0bGUgPSBhY2NvcmRpb24ucXVlcnlTZWxlY3RvcignLnlzdy1jLWFjY29yZGlvbl9fdGl0bGUnKTtcblxuICAgICAgICAgICAgYWNjb3JkaW9uVGl0bGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGFjY29yZGlvbi5jbGFzc0xpc3QuY29udGFpbnMoJ3lzdy1jLWFjY29yZGlvbi0tYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICAgICAgYWNjb3JkaW9uLmNsYXNzTGlzdC5yZW1vdmUoJ3lzdy1jLWFjY29yZGlvbi0tYWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGFjY29yZGlvblRpdGxlLmNsYXNzTGlzdC50b2dnbGUoJ3lzdy1jLWFjY29yZGlvbl9fdGl0bGUtLWFjdGl2ZScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gWXN3UHJvZHVjdEZhY3RvcnkoY29udGV4dCkge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgWXN3UHJvZHVjdCkge1xuICAgICAgICB0aGlzLmNvbnRleHQgPSBjb250ZXh0O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXcgWXN3UHJvZHVjdChjb250ZXh0KTtcbiAgICB9XG59XG4iLCIvKipcbiAqIEEgZmFzdGVyIGFsdGVybmF0aXZlIHRvIGBGdW5jdGlvbiNhcHBseWAsIHRoaXMgZnVuY3Rpb24gaW52b2tlcyBgZnVuY2BcbiAqIHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nIG9mIGB0aGlzQXJnYCBhbmQgdGhlIGFyZ3VtZW50cyBvZiBgYXJnc2AuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGludm9rZS5cbiAqIEBwYXJhbSB7Kn0gdGhpc0FyZyBUaGUgYHRoaXNgIGJpbmRpbmcgb2YgYGZ1bmNgLlxuICogQHBhcmFtIHtBcnJheX0gYXJncyBUaGUgYXJndW1lbnRzIHRvIGludm9rZSBgZnVuY2Agd2l0aC5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIHRoZSByZXN1bHQgb2YgYGZ1bmNgLlxuICovXG5mdW5jdGlvbiBhcHBseShmdW5jLCB0aGlzQXJnLCBhcmdzKSB7XG4gIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZyk7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuYy5jYWxsKHRoaXNBcmcsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmMuY2FsbCh0aGlzQXJnLCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jLmNhbGwodGhpc0FyZywgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gIH1cbiAgcmV0dXJuIGZ1bmMuYXBwbHkodGhpc0FyZywgYXJncyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXBwbHk7XG4iLCJ2YXIgaWRlbnRpdHkgPSByZXF1aXJlKCcuL2lkZW50aXR5JyksXG4gICAgb3ZlclJlc3QgPSByZXF1aXJlKCcuL19vdmVyUmVzdCcpLFxuICAgIHNldFRvU3RyaW5nID0gcmVxdWlyZSgnLi9fc2V0VG9TdHJpbmcnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5yZXN0YCB3aGljaCBkb2Vzbid0IHZhbGlkYXRlIG9yIGNvZXJjZSBhcmd1bWVudHMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGFwcGx5IGEgcmVzdCBwYXJhbWV0ZXIgdG8uXG4gKiBAcGFyYW0ge251bWJlcn0gW3N0YXJ0PWZ1bmMubGVuZ3RoLTFdIFRoZSBzdGFydCBwb3NpdGlvbiBvZiB0aGUgcmVzdCBwYXJhbWV0ZXIuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gYmFzZVJlc3QoZnVuYywgc3RhcnQpIHtcbiAgcmV0dXJuIHNldFRvU3RyaW5nKG92ZXJSZXN0KGZ1bmMsIHN0YXJ0LCBpZGVudGl0eSksIGZ1bmMgKyAnJyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZVJlc3Q7XG4iLCJ2YXIgYmFzZVJlc3QgPSByZXF1aXJlKCcuL19iYXNlUmVzdCcpLFxuICAgIGlzSXRlcmF0ZWVDYWxsID0gcmVxdWlyZSgnLi9faXNJdGVyYXRlZUNhbGwnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gbGlrZSBgXy5hc3NpZ25gLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBhc3NpZ25lciBUaGUgZnVuY3Rpb24gdG8gYXNzaWduIHZhbHVlcy5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IGFzc2lnbmVyIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVBc3NpZ25lcihhc3NpZ25lcikge1xuICByZXR1cm4gYmFzZVJlc3QoZnVuY3Rpb24ob2JqZWN0LCBzb3VyY2VzKSB7XG4gICAgdmFyIGluZGV4ID0gLTEsXG4gICAgICAgIGxlbmd0aCA9IHNvdXJjZXMubGVuZ3RoLFxuICAgICAgICBjdXN0b21pemVyID0gbGVuZ3RoID4gMSA/IHNvdXJjZXNbbGVuZ3RoIC0gMV0gOiB1bmRlZmluZWQsXG4gICAgICAgIGd1YXJkID0gbGVuZ3RoID4gMiA/IHNvdXJjZXNbMl0gOiB1bmRlZmluZWQ7XG5cbiAgICBjdXN0b21pemVyID0gKGFzc2lnbmVyLmxlbmd0aCA+IDMgJiYgdHlwZW9mIGN1c3RvbWl6ZXIgPT0gJ2Z1bmN0aW9uJylcbiAgICAgID8gKGxlbmd0aC0tLCBjdXN0b21pemVyKVxuICAgICAgOiB1bmRlZmluZWQ7XG5cbiAgICBpZiAoZ3VhcmQgJiYgaXNJdGVyYXRlZUNhbGwoc291cmNlc1swXSwgc291cmNlc1sxXSwgZ3VhcmQpKSB7XG4gICAgICBjdXN0b21pemVyID0gbGVuZ3RoIDwgMyA/IHVuZGVmaW5lZCA6IGN1c3RvbWl6ZXI7XG4gICAgICBsZW5ndGggPSAxO1xuICAgIH1cbiAgICBvYmplY3QgPSBPYmplY3Qob2JqZWN0KTtcbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgdmFyIHNvdXJjZSA9IHNvdXJjZXNbaW5kZXhdO1xuICAgICAgaWYgKHNvdXJjZSkge1xuICAgICAgICBhc3NpZ25lcihvYmplY3QsIHNvdXJjZSwgaW5kZXgsIGN1c3RvbWl6ZXIpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqZWN0O1xuICB9KTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVBc3NpZ25lcjtcbiIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge2Jvb2xlYW59IFJldHVybnMgYGZhbHNlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogXy50aW1lcygyLCBfLnN0dWJGYWxzZSk7XG4gKiAvLyA9PiBbZmFsc2UsIGZhbHNlXVxuICovXG5mdW5jdGlvbiBzdHViRmFsc2UoKSB7XG4gIHJldHVybiBmYWxzZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViRmFsc2U7XG4iLCJ2YXIgYXBwbHkgPSByZXF1aXJlKCcuL19hcHBseScpO1xuXG4vKiBCdWlsdC1pbiBtZXRob2QgcmVmZXJlbmNlcyBmb3IgdGhvc2Ugd2l0aCB0aGUgc2FtZSBuYW1lIGFzIG90aGVyIGBsb2Rhc2hgIG1ldGhvZHMuICovXG52YXIgbmF0aXZlTWF4ID0gTWF0aC5tYXg7XG5cbi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBiYXNlUmVzdGAgd2hpY2ggdHJhbnNmb3JtcyB0aGUgcmVzdCBhcnJheS5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gYXBwbHkgYSByZXN0IHBhcmFtZXRlciB0by5cbiAqIEBwYXJhbSB7bnVtYmVyfSBbc3RhcnQ9ZnVuYy5sZW5ndGgtMV0gVGhlIHN0YXJ0IHBvc2l0aW9uIG9mIHRoZSByZXN0IHBhcmFtZXRlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHRyYW5zZm9ybSBUaGUgcmVzdCBhcnJheSB0cmFuc2Zvcm0uXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gb3ZlclJlc3QoZnVuYywgc3RhcnQsIHRyYW5zZm9ybSkge1xuICBzdGFydCA9IG5hdGl2ZU1heChzdGFydCA9PT0gdW5kZWZpbmVkID8gKGZ1bmMubGVuZ3RoIC0gMSkgOiBzdGFydCwgMCk7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cyxcbiAgICAgICAgaW5kZXggPSAtMSxcbiAgICAgICAgbGVuZ3RoID0gbmF0aXZlTWF4KGFyZ3MubGVuZ3RoIC0gc3RhcnQsIDApLFxuICAgICAgICBhcnJheSA9IEFycmF5KGxlbmd0aCk7XG5cbiAgICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgICAgYXJyYXlbaW5kZXhdID0gYXJnc1tzdGFydCArIGluZGV4XTtcbiAgICB9XG4gICAgaW5kZXggPSAtMTtcbiAgICB2YXIgb3RoZXJBcmdzID0gQXJyYXkoc3RhcnQgKyAxKTtcbiAgICB3aGlsZSAoKytpbmRleCA8IHN0YXJ0KSB7XG4gICAgICBvdGhlckFyZ3NbaW5kZXhdID0gYXJnc1tpbmRleF07XG4gICAgfVxuICAgIG90aGVyQXJnc1tzdGFydF0gPSB0cmFuc2Zvcm0oYXJyYXkpO1xuICAgIHJldHVybiBhcHBseShmdW5jLCB0aGlzLCBvdGhlckFyZ3MpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IG92ZXJSZXN0O1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIHRoZSBmaXJzdCBhcmd1bWVudCBpdCByZWNlaXZlcy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAc2luY2UgMC4xLjBcbiAqIEBtZW1iZXJPZiBfXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHBhcmFtIHsqfSB2YWx1ZSBBbnkgdmFsdWUuXG4gKiBAcmV0dXJucyB7Kn0gUmV0dXJucyBgdmFsdWVgLlxuICogQGV4YW1wbGVcbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAnYSc6IDEgfTtcbiAqXG4gKiBjb25zb2xlLmxvZyhfLmlkZW50aXR5KG9iamVjdCkgPT09IG9iamVjdCk7XG4gKiAvLyA9PiB0cnVlXG4gKi9cbmZ1bmN0aW9uIGlkZW50aXR5KHZhbHVlKSB7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpZGVudGl0eTtcbiIsInZhciBjb3B5T2JqZWN0ID0gcmVxdWlyZSgnLi9fY29weU9iamVjdCcpLFxuICAgIGNyZWF0ZUFzc2lnbmVyID0gcmVxdWlyZSgnLi9fY3JlYXRlQXNzaWduZXInKSxcbiAgICBrZXlzSW4gPSByZXF1aXJlKCcuL2tleXNJbicpO1xuXG4vKipcbiAqIFRoaXMgbWV0aG9kIGlzIGxpa2UgYF8uYXNzaWduYCBleGNlcHQgdGhhdCBpdCBpdGVyYXRlcyBvdmVyIG93biBhbmRcbiAqIGluaGVyaXRlZCBzb3VyY2UgcHJvcGVydGllcy5cbiAqXG4gKiAqKk5vdGU6KiogVGhpcyBtZXRob2QgbXV0YXRlcyBgb2JqZWN0YC5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDQuMC4wXG4gKiBAYWxpYXMgZXh0ZW5kXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0IFRoZSBkZXN0aW5hdGlvbiBvYmplY3QuXG4gKiBAcGFyYW0gey4uLk9iamVjdH0gW3NvdXJjZXNdIFRoZSBzb3VyY2Ugb2JqZWN0cy5cbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgYG9iamVjdGAuXG4gKiBAc2VlIF8uYXNzaWduXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIEZvbygpIHtcbiAqICAgdGhpcy5hID0gMTtcbiAqIH1cbiAqXG4gKiBmdW5jdGlvbiBCYXIoKSB7XG4gKiAgIHRoaXMuYyA9IDM7XG4gKiB9XG4gKlxuICogRm9vLnByb3RvdHlwZS5iID0gMjtcbiAqIEJhci5wcm90b3R5cGUuZCA9IDQ7XG4gKlxuICogXy5hc3NpZ25Jbih7ICdhJzogMCB9LCBuZXcgRm9vLCBuZXcgQmFyKTtcbiAqIC8vID0+IHsgJ2EnOiAxLCAnYic6IDIsICdjJzogMywgJ2QnOiA0IH1cbiAqL1xudmFyIGFzc2lnbkluID0gY3JlYXRlQXNzaWduZXIoZnVuY3Rpb24ob2JqZWN0LCBzb3VyY2UpIHtcbiAgY29weU9iamVjdChzb3VyY2UsIGtleXNJbihzb3VyY2UpLCBvYmplY3QpO1xufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gYXNzaWduSW47XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vYXNzaWduSW4nKTtcbiIsIi8qKlxuICogVGhpcyBtZXRob2QgcmV0dXJucyB0aGUgZmlyc3QgYXJndW1lbnQgaXQgcmVjZWl2ZXMuXG4gKlxuICogQHN0YXRpY1xuICogQHNpbmNlIDAuMS4wXG4gKiBAbWVtYmVyT2YgX1xuICogQGNhdGVnb3J5IFV0aWxcbiAqIEBwYXJhbSB7Kn0gdmFsdWUgQW55IHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgYHZhbHVlYC5cbiAqIEBleGFtcGxlXG4gKlxuICogdmFyIG9iamVjdCA9IHsgJ2EnOiAxIH07XG4gKlxuICogY29uc29sZS5sb2coXy5pZGVudGl0eShvYmplY3QpID09PSBvYmplY3QpO1xuICogLy8gPT4gdHJ1ZVxuICovXG5mdW5jdGlvbiBpZGVudGl0eSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaWRlbnRpdHk7XG4iXSwic291cmNlUm9vdCI6IiJ9