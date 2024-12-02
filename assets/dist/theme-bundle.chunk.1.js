(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./assets/js/theme/common/collapsible.js":
/*!***********************************************!*\
  !*** ./assets/js/theme/common/collapsible.js ***!
  \***********************************************/
/*! exports provided: CollapsibleEvents, Collapsible, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CollapsibleEvents", function() { return CollapsibleEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Collapsible", function() { return Collapsible; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return collapsibleFactory; });
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/extend */ "./node_modules/lodash/extend.js");
/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _media_query_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./media-query-list */ "./assets/js/theme/common/media-query-list.js");

function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var PLUGIN_KEY = 'collapsible';
var CollapsibleEvents = {
  open: 'open.collapsible',
  close: 'close.collapsible',
  toggle: 'toggle.collapsible',
  click: 'click.collapsible'
};
var CollapsibleState = {
  closed: 'closed',
  open: 'open'
};
function prependHash(id) {
  if (id && id.indexOf('#') === 0) {
    return id;
  }
  return "#" + id;
}
function optionsFromData($element) {
  return {
    disabledBreakpoint: $element.data(PLUGIN_KEY + "DisabledBreakpoint"),
    disabledState: $element.data(PLUGIN_KEY + "DisabledState"),
    enabledState: $element.data(PLUGIN_KEY + "EnabledState"),
    openClassName: $element.data(PLUGIN_KEY + "OpenClassName")
  };
}

/**
 * Collapse/Expand toggle
 */
var Collapsible = /*#__PURE__*/function () {
  /**
   * @param {jQuery} $toggle - Trigger button
   * @param {jQuery} $target - Content to collapse / expand
   * @param {Object} [options] - Configurable options
   * @param {Object} [options.$context]
   * @param {Object} [options.disabledBreakpoint]
   * @param {Object} [options.disabledState]
   * @param {Object} [options.enabledState]
   * @param {Object} [options.openClassName]
   * @example
   *
   * <button id="#more">Collapse</button>
   * <div id="content">...</div>
   *
   * new Collapsible($('#more'), $('#content'));
   */
  function Collapsible($toggle, $target, _temp) {
    var _ref = _temp === void 0 ? {} : _temp,
      disabledBreakpoint = _ref.disabledBreakpoint,
      disabledState = _ref.disabledState,
      enabledState = _ref.enabledState,
      _ref$openClassName = _ref.openClassName,
      openClassName = _ref$openClassName === void 0 ? 'is-open' : _ref$openClassName;
    this.$toggle = $toggle;
    this.$target = $target;
    this.targetId = $target.attr('id');
    this.openClassName = openClassName;
    this.disabledState = disabledState;
    this.enabledState = enabledState;
    if (disabledBreakpoint) {
      this.disabledMediaQueryList = Object(_media_query_list__WEBPACK_IMPORTED_MODULE_1__["default"])(disabledBreakpoint);
    }
    if (this.disabledMediaQueryList) {
      this.disabled = this.disabledMediaQueryList.matches;
    } else {
      this.disabled = false;
    }

    // Auto-bind
    this.onClicked = this.onClicked.bind(this);
    this.onDisabledMediaQueryListMatch = this.onDisabledMediaQueryListMatch.bind(this);

    // Assign DOM attributes
    this.$target.attr('aria-hidden', this.isCollapsed);
    this.$toggle.attr('aria-label', $toggle.text().trim()).attr('aria-controls', $target.attr('id')).attr('aria-expanded', this.isOpen);

    // Listen
    this.bindEvents();
  }
  var _proto = Collapsible.prototype;
  _proto.open = function open(_temp2) {
    var _ref2 = _temp2 === void 0 ? {} : _temp2,
      _ref2$notify = _ref2.notify,
      notify = _ref2$notify === void 0 ? true : _ref2$notify;
    this.$toggle.addClass(this.openClassName).attr('aria-expanded', true);
    this.$target.addClass(this.openClassName).attr('aria-hidden', false);
    if (notify) {
      this.$toggle.trigger(CollapsibleEvents.open, [this]);
      this.$toggle.trigger(CollapsibleEvents.toggle, [this]);
    }
  };
  _proto.close = function close(_temp3) {
    var _ref3 = _temp3 === void 0 ? {} : _temp3,
      _ref3$notify = _ref3.notify,
      notify = _ref3$notify === void 0 ? true : _ref3$notify;
    this.$toggle.removeClass(this.openClassName).attr('aria-expanded', false);
    this.$target.removeClass(this.openClassName).attr('aria-hidden', true);
    if (notify) {
      this.$toggle.trigger(CollapsibleEvents.close, [this]);
      this.$toggle.trigger(CollapsibleEvents.toggle, [this]);
    }
  };
  _proto.toggle = function toggle() {
    if (this.isCollapsed) {
      this.open();
    } else {
      this.close();
    }
  };
  _proto.toggleByState = function toggleByState(state) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }
    switch (state) {
      case CollapsibleState.open:
        return this.open.apply(this, args);
      case CollapsibleState.closed:
        return this.close.apply(this, args);
      default:
        return undefined;
    }
  };
  _proto.hasCollapsible = function hasCollapsible(collapsibleInstance) {
    return $.contains(this.$target.get(0), collapsibleInstance.$target.get(0));
  };
  _proto.bindEvents = function bindEvents() {
    this.$toggle.on(CollapsibleEvents.click, this.onClicked);
    if (this.disabledMediaQueryList && this.disabledMediaQueryList.addListener) {
      this.disabledMediaQueryList.addListener(this.onDisabledMediaQueryListMatch);
    }
  };
  _proto.unbindEvents = function unbindEvents() {
    this.$toggle.off(CollapsibleEvents.click, this.onClicked);
    if (this.disabledMediaQueryList && this.disabledMediaQueryList.removeListener) {
      this.disabledMediaQueryList.removeListener(this.onDisabledMediaQueryListMatch);
    }
  };
  _proto.onClicked = function onClicked(event) {
    if (this.disabled) {
      return;
    }
    event.preventDefault();
    this.toggle();
  };
  _proto.onDisabledMediaQueryListMatch = function onDisabledMediaQueryListMatch(media) {
    this.disabled = media.matches;
  };
  return _createClass(Collapsible, [{
    key: "isCollapsed",
    get: function get() {
      return !this.$target.hasClass(this.openClassName) || this.$target.is(':hidden');
    }
  }, {
    key: "isOpen",
    get: function get() {
      return !this.isCollapsed;
    }
  }, {
    key: "disabled",
    get: function get() {
      return this._disabled;
    },
    set: function set(disabled) {
      this._disabled = disabled;
      if (disabled) {
        this.toggleByState(this.disabledState);
      } else {
        this.toggleByState(this.enabledState);
      }
    }
  }]);
}();

/**
 * Convenience method for constructing Collapsible instance
 *
 * @param {string} [selector]
 * @param {Object} [options]
 * @param {Object} [options.$context]
 * @param {Object} [options.disabledBreakpoint]
 * @param {Object} [options.disabledState]
 * @param {Object} [options.enabledState]
 * @param {Object} [options.openClassName]
 * @return {Array} array of Collapsible instances
 *
 * @example
 * <a href="#content" data-collapsible>Collapse</a>
 * <div id="content">...</div>
 *
 * collapsibleFactory();
 */
function collapsibleFactory(selector, overrideOptions) {
  if (selector === void 0) {
    selector = "[data-" + PLUGIN_KEY + "]";
  }
  if (overrideOptions === void 0) {
    overrideOptions = {};
  }
  var $collapsibles = $(selector, overrideOptions.$context);
  return $collapsibles.map(function (index, element) {
    var $toggle = $(element);
    var instanceKey = PLUGIN_KEY + "Instance";
    var cachedCollapsible = $toggle.data(instanceKey);
    if (cachedCollapsible instanceof Collapsible) {
      return cachedCollapsible;
    }
    var targetId = prependHash($toggle.data(PLUGIN_KEY) || $toggle.data(PLUGIN_KEY + "Target") || $toggle.attr('href'));
    var options = lodash_extend__WEBPACK_IMPORTED_MODULE_0___default()(optionsFromData($toggle), overrideOptions);
    var collapsible = new Collapsible($toggle, $(targetId, overrideOptions.$context), options);
    $toggle.data(instanceKey, collapsible);
    return collapsible;
  }).toArray();
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/media-query-list.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/common/media-query-list.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return mediaQueryListFactory; });
/*
 * Remember to update /assets/scss/settings/global/screensizes/screensizes.scss
 * if you decide to change breakpoint values
 */
var breakpointSizes = {
  large: 1261,
  medium: 801,
  small: 551
};

/**
 * Create MediaQueryList using breakpoint name
 * @param {string} breakpointName
 * @return {MediaQueryList|null}
 */
function mediaQueryListFactory(breakpointName) {
  if (!breakpointName || !window.matchMedia) {
    return null;
  }
  var breakpoint = breakpointSizes[breakpointName];
  var mediaQuery = "(min-width: " + breakpoint + "px)";
  var mediaQueryList = window.matchMedia(mediaQuery);
  return mediaQueryList;
}

/***/ }),

/***/ "./assets/js/theme/common/models/forms.js":
/*!************************************************!*\
  !*** ./assets/js/theme/common/models/forms.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var forms = {
  email: function email(value) {
    var re = /^.+@.+\..+/;
    return re.test(value);
  },
  /**
   * Validates a password field
   * @param value
   * @returns {boolean}
   */
  password: function password(value) {
    return this.notEmpty(value);
  },
  /**
   * validates if a field is empty
   * @param value
   * @returns {boolean}
   *
   */
  notEmpty: function notEmpty(value) {
    return value.length > 0;
  }
};
/* harmony default export */ __webpack_exports__["default"] = (forms);

/***/ }),

/***/ "./assets/js/theme/common/utils/form-utils.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/common/utils/form-utils.js ***!
  \****************************************************/
/*! exports provided: classifyForm, Validators, insertStateHiddenField */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "classifyForm", function() { return classifyForm; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "insertStateHiddenField", function() { return insertStateHiddenField; });
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/capitalize */ "./node_modules/lodash/capitalize.js");
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_capitalize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/camelCase */ "./node_modules/lodash/camelCase.js");
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_camelCase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/includes */ "./node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _models_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/forms */ "./assets/js/theme/common/models/forms.js");





var inputTagNames = ['input', 'select', 'textarea'];

/**
 * Apply class name to an input element on its type
 * @param {object} input
 * @param {string} formFieldClass
 * @return {object} Element itself
 */
function classifyInput(input, formFieldClass) {
  var $input = $(input);
  var $formField = $input.parent("." + formFieldClass);
  var tagName = $input.prop('tagName').toLowerCase();
  var className = formFieldClass + "--" + tagName;
  var specificClassName;

  // Input can be text/checkbox/radio etc...
  if (tagName === 'input') {
    var inputType = $input.prop('type');
    if (lodash_includes__WEBPACK_IMPORTED_MODULE_2___default()(['radio', 'checkbox', 'submit'], inputType)) {
      // ie: .form-field--checkbox, .form-field--radio
      className = formFieldClass + "--" + lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default()(inputType);
    } else {
      // ie: .form-field--input .form-field--inputText
      specificClassName = "" + className + lodash_capitalize__WEBPACK_IMPORTED_MODULE_0___default()(inputType);
    }
  }

  // Apply class modifier
  return $formField.addClass(className).addClass(specificClassName);
}

/**
 * Apply class name to each input element in a form based on its type
 * @example
 * // Before
 * <form id="form">
 *     <div class="form-field">
 *         <input type="text">
 *     </div>
 *     <div class="form-field">
 *         <select>...</select>
 *     </div>
 * </form>
 *
 * classifyForm('#form', { formFieldClass: 'form-field' });
 *
 * // After
 * <div class="form-field form-field--input form-field--inputText">...</div>
 * <div class="form-field form-field--select">...</div>
 *
 * @param {string|object} formSelector - selector or element
 * @param {object} options
 * @return {jQuery} Element itself
 */
function classifyForm(formSelector, options) {
  if (options === void 0) {
    options = {};
  }
  var $form = $(formSelector);
  var $inputs = $form.find(inputTagNames.join(', '));

  // Obtain options
  var _options = options,
    _options$formFieldCla = _options.formFieldClass,
    formFieldClass = _options$formFieldCla === void 0 ? 'form-field' : _options$formFieldCla;

  // Classify each input in a form
  $inputs.each(function (__, input) {
    classifyInput(input, formFieldClass);
  });
  return $form;
}

/**
 * Get id from given field
 * @param {object} $field JQuery field object
 * @return {string}
 */
function getFieldId($field) {
  var fieldId = $field.prop('name').match(/(\[.*\])/);
  if (fieldId && fieldId.length !== 0) {
    return fieldId[0];
  }
  return '';
}

/**
 * Insert hidden field after State/Province field
 * @param {object} $stateField JQuery field object
 */
function insertStateHiddenField($stateField) {
  var fieldId = getFieldId($stateField);
  var stateFieldAttrs = {
    type: 'hidden',
    name: "FormFieldIsText" + fieldId,
    value: '1'
  };
  $stateField.after($('<input />', stateFieldAttrs));
}
var Validators = {
  /**
   * Sets up a new validation when the form is dirty
   * @param validator
   * @param field
   */
  setEmailValidation: function setEmailValidation(validator, field) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = _models_forms__WEBPACK_IMPORTED_MODULE_4__["default"].email(val);
          cb(result);
        },
        errorMessage: 'You must enter a valid email.'
      });
    }
  },
  /**
   * Validate password fields
   * @param validator
   * @param passwordSelector
   * @param password2Selector
   * @param requirements
   * @param isOptional
   */
  setPasswordValidation: function setPasswordValidation(validator, passwordSelector, password2Selector, requirements, isOptional) {
    var $password = $(passwordSelector);
    var passwordValidations = [{
      selector: passwordSelector,
      validate: function validate(cb, val) {
        var result = val.length;
        if (isOptional) {
          return cb(true);
        }
        cb(result);
      },
      errorMessage: 'You must enter a password.'
    }, {
      selector: passwordSelector,
      validate: function validate(cb, val) {
        var result = val.match(new RegExp(requirements.alpha)) && val.match(new RegExp(requirements.numeric)) && val.length >= requirements.minlength;

        // If optional and nothing entered, it is valid
        if (isOptional && val.length === 0) {
          return cb(true);
        }
        cb(result);
      },
      errorMessage: requirements.error
    }, {
      selector: password2Selector,
      validate: function validate(cb, val) {
        var result = val.length;
        if (isOptional) {
          return cb(true);
        }
        cb(result);
      },
      errorMessage: 'You must enter a password.'
    }, {
      selector: password2Selector,
      validate: function validate(cb, val) {
        var result = val === $password.val();
        cb(result);
      },
      errorMessage: 'Your passwords do not match.'
    }];
    validator.add(passwordValidations);
  },
  /**
   * Validate password fields
   * @param {Nod} validator
   * @param {Object} selectors
   * @param {string} selectors.errorSelector
   * @param {string} selectors.fieldsetSelector
   * @param {string} selectors.formSelector
   * @param {string} selectors.maxPriceSelector
   * @param {string} selectors.minPriceSelector
   */
  setMinMaxPriceValidation: function setMinMaxPriceValidation(validator, selectors) {
    var errorSelector = selectors.errorSelector,
      fieldsetSelector = selectors.fieldsetSelector,
      formSelector = selectors.formSelector,
      maxPriceSelector = selectors.maxPriceSelector,
      minPriceSelector = selectors.minPriceSelector;
    validator.configure({
      form: formSelector,
      preventSubmit: true,
      successClass: '_' // KLUDGE: Don't apply success class
    });
    validator.add({
      errorMessage: 'Min price must be less than max. price.',
      selector: minPriceSelector,
      validate: "min-max:" + minPriceSelector + ":" + maxPriceSelector
    });
    validator.add({
      errorMessage: 'Min price must be less than max. price.',
      selector: maxPriceSelector,
      validate: "min-max:" + minPriceSelector + ":" + maxPriceSelector
    });
    validator.add({
      errorMessage: 'Max. price is required.',
      selector: maxPriceSelector,
      validate: 'presence'
    });
    validator.add({
      errorMessage: 'Min. price is required.',
      selector: minPriceSelector,
      validate: 'presence'
    });
    validator.add({
      errorMessage: 'Input must be greater than 0.',
      selector: [minPriceSelector, maxPriceSelector],
      validate: 'min-number:0'
    });
    validator.setMessageOptions({
      selector: [minPriceSelector, maxPriceSelector],
      parent: fieldsetSelector,
      errorSpan: errorSelector
    });
  },
  /**
   * Sets up a new validation when the form is dirty
   * @param validator
   * @param field
   */
  setStateCountryValidation: function setStateCountryValidation(validator, field) {
    if (field) {
      validator.add({
        selector: field,
        validate: 'presence',
        errorMessage: 'The \'State/Province\' field cannot be blank.'
      });
    }
  },
  /**
   * Removes classes from dirty form if previously checked
   * @param field
   */
  cleanUpStateValidation: function cleanUpStateValidation(field) {
    var $fieldClassElement = $("[data-type=\"" + field.data('fieldType') + "\"]");
    Object.keys(_nod__WEBPACK_IMPORTED_MODULE_3__["default"].classes).forEach(function (value) {
      if ($fieldClassElement.hasClass(_nod__WEBPACK_IMPORTED_MODULE_3__["default"].classes[value])) {
        $fieldClassElement.removeClass(_nod__WEBPACK_IMPORTED_MODULE_3__["default"].classes[value]);
      }
    });
  }
};

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2NvbGxhcHNpYmxlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vbWVkaWEtcXVlcnktbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL21vZGVscy9mb3Jtcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3V0aWxzL2Zvcm0tdXRpbHMuanMiXSwibmFtZXMiOlsiUExVR0lOX0tFWSIsIkNvbGxhcHNpYmxlRXZlbnRzIiwib3BlbiIsImNsb3NlIiwidG9nZ2xlIiwiY2xpY2siLCJDb2xsYXBzaWJsZVN0YXRlIiwiY2xvc2VkIiwicHJlcGVuZEhhc2giLCJpZCIsImluZGV4T2YiLCJvcHRpb25zRnJvbURhdGEiLCIkZWxlbWVudCIsImRpc2FibGVkQnJlYWtwb2ludCIsImRhdGEiLCJkaXNhYmxlZFN0YXRlIiwiZW5hYmxlZFN0YXRlIiwib3BlbkNsYXNzTmFtZSIsIkNvbGxhcHNpYmxlIiwiJHRvZ2dsZSIsIiR0YXJnZXQiLCJfdGVtcCIsIl9yZWYiLCJfcmVmJG9wZW5DbGFzc05hbWUiLCJ0YXJnZXRJZCIsImF0dHIiLCJkaXNhYmxlZE1lZGlhUXVlcnlMaXN0IiwibWVkaWFRdWVyeUxpc3RGYWN0b3J5IiwiZGlzYWJsZWQiLCJtYXRjaGVzIiwib25DbGlja2VkIiwiYmluZCIsIm9uRGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdE1hdGNoIiwiaXNDb2xsYXBzZWQiLCJ0ZXh0IiwidHJpbSIsImlzT3BlbiIsImJpbmRFdmVudHMiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJfdGVtcDIiLCJfcmVmMiIsIl9yZWYyJG5vdGlmeSIsIm5vdGlmeSIsImFkZENsYXNzIiwidHJpZ2dlciIsIl90ZW1wMyIsIl9yZWYzIiwiX3JlZjMkbm90aWZ5IiwicmVtb3ZlQ2xhc3MiLCJ0b2dnbGVCeVN0YXRlIiwic3RhdGUiLCJfbGVuIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImFwcGx5IiwidW5kZWZpbmVkIiwiaGFzQ29sbGFwc2libGUiLCJjb2xsYXBzaWJsZUluc3RhbmNlIiwiJCIsImNvbnRhaW5zIiwiZ2V0Iiwib24iLCJhZGRMaXN0ZW5lciIsInVuYmluZEV2ZW50cyIsIm9mZiIsInJlbW92ZUxpc3RlbmVyIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsIm1lZGlhIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwiaGFzQ2xhc3MiLCJpcyIsIl9kaXNhYmxlZCIsInNldCIsImNvbGxhcHNpYmxlRmFjdG9yeSIsInNlbGVjdG9yIiwib3ZlcnJpZGVPcHRpb25zIiwiJGNvbGxhcHNpYmxlcyIsIiRjb250ZXh0IiwibWFwIiwiaW5kZXgiLCJlbGVtZW50IiwiaW5zdGFuY2VLZXkiLCJjYWNoZWRDb2xsYXBzaWJsZSIsIm9wdGlvbnMiLCJfZXh0ZW5kIiwiY29sbGFwc2libGUiLCJ0b0FycmF5IiwiYnJlYWtwb2ludFNpemVzIiwibGFyZ2UiLCJtZWRpdW0iLCJzbWFsbCIsImJyZWFrcG9pbnROYW1lIiwid2luZG93IiwibWF0Y2hNZWRpYSIsImJyZWFrcG9pbnQiLCJtZWRpYVF1ZXJ5IiwibWVkaWFRdWVyeUxpc3QiLCJmb3JtcyIsImVtYWlsIiwidmFsdWUiLCJyZSIsInRlc3QiLCJwYXNzd29yZCIsIm5vdEVtcHR5IiwiaW5wdXRUYWdOYW1lcyIsImNsYXNzaWZ5SW5wdXQiLCJpbnB1dCIsImZvcm1GaWVsZENsYXNzIiwiJGlucHV0IiwiJGZvcm1GaWVsZCIsInBhcmVudCIsInRhZ05hbWUiLCJwcm9wIiwidG9Mb3dlckNhc2UiLCJjbGFzc05hbWUiLCJzcGVjaWZpY0NsYXNzTmFtZSIsImlucHV0VHlwZSIsIl9pbmNsdWRlcyIsIl9jYW1lbENhc2UiLCJfY2FwaXRhbGl6ZSIsImNsYXNzaWZ5Rm9ybSIsImZvcm1TZWxlY3RvciIsIiRmb3JtIiwiJGlucHV0cyIsImZpbmQiLCJqb2luIiwiX29wdGlvbnMiLCJfb3B0aW9ucyRmb3JtRmllbGRDbGEiLCJlYWNoIiwiX18iLCJnZXRGaWVsZElkIiwiJGZpZWxkIiwiZmllbGRJZCIsIm1hdGNoIiwiaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCIsIiRzdGF0ZUZpZWxkIiwic3RhdGVGaWVsZEF0dHJzIiwidHlwZSIsIm5hbWUiLCJhZnRlciIsIlZhbGlkYXRvcnMiLCJzZXRFbWFpbFZhbGlkYXRpb24iLCJ2YWxpZGF0b3IiLCJmaWVsZCIsImFkZCIsInZhbGlkYXRlIiwiY2IiLCJ2YWwiLCJyZXN1bHQiLCJlcnJvck1lc3NhZ2UiLCJzZXRQYXNzd29yZFZhbGlkYXRpb24iLCJwYXNzd29yZFNlbGVjdG9yIiwicGFzc3dvcmQyU2VsZWN0b3IiLCJyZXF1aXJlbWVudHMiLCJpc09wdGlvbmFsIiwiJHBhc3N3b3JkIiwicGFzc3dvcmRWYWxpZGF0aW9ucyIsIlJlZ0V4cCIsImFscGhhIiwibnVtZXJpYyIsIm1pbmxlbmd0aCIsImVycm9yIiwic2V0TWluTWF4UHJpY2VWYWxpZGF0aW9uIiwic2VsZWN0b3JzIiwiZXJyb3JTZWxlY3RvciIsImZpZWxkc2V0U2VsZWN0b3IiLCJtYXhQcmljZVNlbGVjdG9yIiwibWluUHJpY2VTZWxlY3RvciIsImNvbmZpZ3VyZSIsImZvcm0iLCJwcmV2ZW50U3VibWl0Iiwic3VjY2Vzc0NsYXNzIiwic2V0TWVzc2FnZU9wdGlvbnMiLCJlcnJvclNwYW4iLCJzZXRTdGF0ZUNvdW50cnlWYWxpZGF0aW9uIiwiY2xlYW5VcFN0YXRlVmFsaWRhdGlvbiIsIiRmaWVsZENsYXNzRWxlbWVudCIsIk9iamVjdCIsImtleXMiLCJub2QiLCJjbGFzc2VzIiwiZm9yRWFjaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUN1RDtBQUV2RCxJQUFNQSxVQUFVLEdBQUcsYUFBYTtBQUV6QixJQUFNQyxpQkFBaUIsR0FBRztFQUM3QkMsSUFBSSxFQUFFLGtCQUFrQjtFQUN4QkMsS0FBSyxFQUFFLG1CQUFtQjtFQUMxQkMsTUFB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QyxRQUFLLENBQUM7SUFFMUV5SyxNQUFNLENBQUNDLElBQUksQ0FBQ0MsNENBQUcsQ0FBQ0MsT0FBTyxDQUFDLENBQUNDLE9BQU8sQ0FBQyxVQUFDbEYsS0FBSyxFQUFLO01BQ3hDLElBQUk2RSxrQkFBa0IsQ0FBQzNHLFFBQVEsQ0FBQzhHLDRDQUFHLENBQUNDLE9BQU8sQ0FBQ2pGLEtBQUssQ0FBQyxDQUFDLEVBQUU7UUFDakQ2RSxrQkFBa0IsQ0FBQ3JJLFdBQVcsQ0FBQ3dJLDRDQUFHLENBQUNDLE9BQU8sQ0FBQ2pGLEtBQUssQ0FBQyxDQUFDO01BQ3REO0lBQ0osQ0FBQyxDQUFDO0VBQ047QUFDSixDQUFDIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4xLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCBtZWRpYVF1ZXJ5TGlzdEZhY3RvcnkgZnJvbSAnLi9tZWRpYS1xdWVyeS1saXN0JztcblxuY29uc3QgUExVR0lOX0tFWSA9ICdjb2xsYXBzaWJsZSc7XG5cbmV4cG9ydCBjb25zdCBDb2xsYXBzaWJsZUV2ZW50cyA9IHtcbiAgICBvcGVuOiAnb3Blbi5jb2xsYXBzaWJsZScsXG4gICAgY2xvc2U6ICdjbG9zZS5jb2xsYXBzaWJsZScsXG4gICAgdG9nZ2xlOiAndG9nZ2xlLmNvbGxhcHNpYmxlJyxcbiAgICBjbGljazogJ2NsaWNrLmNvbGxhcHNpYmxlJyxcbn07XG5cbmNvbnN0IENvbGxhcHNpYmxlU3RhdGUgPSB7XG4gICAgY2xvc2VkOiAnY2xvc2VkJyxcbiAgICBvcGVuOiAnb3BlbicsXG59O1xuXG5mdW5jdGlvbiBwcmVwZW5kSGFzaChpZCkge1xuICAgIGlmIChpZCAmJiBpZC5pbmRleE9mKCcjJykgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGlkO1xuICAgIH1cblxuICAgIHJldHVybiBgIyR7aWR9YDtcbn1cblxuZnVuY3Rpb24gb3B0aW9uc0Zyb21EYXRhKCRlbGVtZW50KSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGlzYWJsZWRCcmVha3BvaW50OiAkZWxlbWVudC5kYXRhKGAke1BMVUdJTl9LRVl9RGlzYWJsZWRCcmVha3BvaW50YCksXG4gICAgICAgIGRpc2FibGVkU3RhdGU6ICRlbGVtZW50LmRhdGEoYCR7UExVR0lOX0tFWX1EaXNhYmxlZFN0YXRlYCksXG4gICAgICAgIGVuYWJsZWRTdGF0ZTogJGVsZW1lbnQuZGF0YShgJHtQTFVHSU5fS0VZfUVuYWJsZWRTdGF0ZWApLFxuICAgICAgICBvcGVuQ2xhc3NOYW1lOiAkZWxlbWVudC5kYXRhKGAke1BMVUdJTl9LRVl9T3BlbkNsYXNzTmFtZWApLFxuICAgIH07XG59XG5cbi8qKlxuICogQ29sbGFwc2UvRXhwYW5kIHRvZ2dsZVxuICovXG5leHBvcnQgY2xhc3MgQ29sbGFwc2libGUge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7alF1ZXJ5fSAkdG9nZ2xlIC0gVHJpZ2dlciBidXR0b25cbiAgICAgKiBAcGFyYW0ge2pRdWVyeX0gJHRhcmdldCAtIENvbnRlbnQgdG8gY29sbGFwc2UgLyBleHBhbmRcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gQ29uZmlndXJhYmxlIG9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuJGNvbnRleHRdXG4gICAgICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmRpc2FibGVkQnJlYWtwb2ludF1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuZGlzYWJsZWRTdGF0ZV1cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuZW5hYmxlZFN0YXRlXVxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9ucy5vcGVuQ2xhc3NOYW1lXVxuICAgICAqIEBleGFtcGxlXG4gICAgICpcbiAgICAgKiA8YnV0dG9uIGlkPVwiI21vcmVcIj5Db2xsYXBzZTwvYnV0dG9uPlxuICAgICAqIDxkaXYgaWQ9XCJjb250ZW50XCI+Li4uPC9kaXY+XG4gICAgICpcbiAgICAgKiBuZXcgQ29sbGFwc2libGUoJCgnI21vcmUnKSwgJCgnI2NvbnRlbnQnKSk7XG4gICAgICovXG4gICAgY29uc3RydWN0b3IoJHRvZ2dsZSwgJHRhcmdldCwge1xuICAgICAgICBkaXNhYmxlZEJyZWFrcG9pbnQsXG4gICAgICAgIGRpc2FibGVkU3RhdGUsXG4gICAgICAgIGVuYWJsZWRTdGF0ZSxcbiAgICAgICAgb3BlbkNsYXNzTmFtZSA9ICdpcy1vcGVuJyxcbiAgICB9ID0ge30pIHtcbiAgICAgICAgdGhpcy4kdG9nZ2xlID0gJHRvZ2dsZTtcbiAgICAgICAgdGhpcy4kdGFyZ2V0ID0gJHRhcmdldDtcbiAgICAgICAgdGhpcy50YXJnZXRJZCA9ICR0YXJnZXQuYXR0cignaWQnKTtcbiAgICAgICAgdGhpcy5vcGVuQ2xhc3NOYW1lID0gb3BlbkNsYXNzTmFtZTtcbiAgICAgICAgdGhpcy5kaXNhYmxlZFN0YXRlID0gZGlzYWJsZWRTdGF0ZTtcbiAgICAgICAgdGhpcy5lbmFibGVkU3RhdGUgPSBlbmFibGVkU3RhdGU7XG5cbiAgICAgICAgaWYgKGRpc2FibGVkQnJlYWtwb2ludCkge1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlZE1lZGlhUXVlcnlMaXN0ID0gbWVkaWFRdWVyeUxpc3RGYWN0b3J5KGRpc2FibGVkQnJlYWtwb2ludCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZE1lZGlhUXVlcnlMaXN0KSB7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGVkID0gdGhpcy5kaXNhYmxlZE1lZGlhUXVlcnlMaXN0Lm1hdGNoZXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBBdXRvLWJpbmRcbiAgICAgICAgdGhpcy5vbkNsaWNrZWQgPSB0aGlzLm9uQ2xpY2tlZC5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLm9uRGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdE1hdGNoID0gdGhpcy5vbkRpc2FibGVkTWVkaWFRdWVyeUxpc3RNYXRjaC5iaW5kKHRoaXMpO1xuXG4gICAgICAgIC8vIEFzc2lnbiBET00gYXR0cmlidXRlc1xuICAgICAgICB0aGlzLiR0YXJnZXQuYXR0cignYXJpYS1oaWRkZW4nLCB0aGlzLmlzQ29sbGFwc2VkKTtcbiAgICAgICAgdGhpcy4kdG9nZ2xlXG4gICAgICAgICAgICAuYXR0cignYXJpYS1sYWJlbCcsICR0b2dnbGUudGV4dCgpLnRyaW0oKSlcbiAgICAgICAgICAgIC5hdHRyKCdhcmlhLWNvbnRyb2xzJywgJHRhcmdldC5hdHRyKCdpZCcpKVxuICAgICAgICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCB0aGlzLmlzT3Blbik7XG5cbiAgICAgICAgLy8gTGlzdGVuXG4gICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgIH1cblxuICAgIGdldCBpc0NvbGxhcHNlZCgpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLiR0YXJnZXQuaGFzQ2xhc3ModGhpcy5vcGVuQ2xhc3NOYW1lKSB8fCB0aGlzLiR0YXJnZXQuaXMoJzpoaWRkZW4nKTtcbiAgICB9XG5cbiAgICBnZXQgaXNPcGVuKCkge1xuICAgICAgICByZXR1cm4gIXRoaXMuaXNDb2xsYXBzZWQ7XG4gICAgfVxuXG4gICAgc2V0IGRpc2FibGVkKGRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuX2Rpc2FibGVkID0gZGlzYWJsZWQ7XG5cbiAgICAgICAgaWYgKGRpc2FibGVkKSB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZUJ5U3RhdGUodGhpcy5kaXNhYmxlZFN0YXRlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlQnlTdGF0ZSh0aGlzLmVuYWJsZWRTdGF0ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXQgZGlzYWJsZWQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9kaXNhYmxlZDtcbiAgICB9XG5cbiAgICBvcGVuKHsgbm90aWZ5ID0gdHJ1ZSB9ID0ge30pIHtcbiAgICAgICAgdGhpcy4kdG9nZ2xlXG4gICAgICAgICAgICAuYWRkQ2xhc3ModGhpcy5vcGVuQ2xhc3NOYW1lKVxuICAgICAgICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCB0cnVlKTtcblxuICAgICAgICB0aGlzLiR0YXJnZXRcbiAgICAgICAgICAgIC5hZGRDbGFzcyh0aGlzLm9wZW5DbGFzc05hbWUpXG4gICAgICAgICAgICAuYXR0cignYXJpYS1oaWRkZW4nLCBmYWxzZSk7XG5cbiAgICAgICAgaWYgKG5vdGlmeSkge1xuICAgICAgICAgICAgdGhpcy4kdG9nZ2xlLnRyaWdnZXIoQ29sbGFwc2libGVFdmVudHMub3BlbiwgW3RoaXNdKTtcbiAgICAgICAgICAgIHRoaXMuJHRvZ2dsZS50cmlnZ2VyKENvbGxhcHNpYmxlRXZlbnRzLnRvZ2dsZSwgW3RoaXNdKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNsb3NlKHsgbm90aWZ5ID0gdHJ1ZSB9ID0ge30pIHtcbiAgICAgICAgdGhpcy4kdG9nZ2xlXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3ModGhpcy5vcGVuQ2xhc3NOYW1lKVxuICAgICAgICAgICAgLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCBmYWxzZSk7XG5cbiAgICAgICAgdGhpcy4kdGFyZ2V0XG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3ModGhpcy5vcGVuQ2xhc3NOYW1lKVxuICAgICAgICAgICAgLmF0dHIoJ2FyaWEtaGlkZGVuJywgdHJ1ZSk7XG5cbiAgICAgICAgaWYgKG5vdGlmeSkge1xuICAgICAgICAgICAgdGhpcy4kdG9nZ2xlLnRyaWdnZXIoQ29sbGFwc2libGVFdmVudHMuY2xvc2UsIFt0aGlzXSk7XG4gICAgICAgICAgICB0aGlzLiR0b2dnbGUudHJpZ2dlcihDb2xsYXBzaWJsZUV2ZW50cy50b2dnbGUsIFt0aGlzXSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b2dnbGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzQ29sbGFwc2VkKSB7XG4gICAgICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRvZ2dsZUJ5U3RhdGUoc3RhdGUsIC4uLmFyZ3MpIHtcbiAgICAgICAgc3dpdGNoIChzdGF0ZSkge1xuICAgICAgICBjYXNlIENvbGxhcHNpYmxlU3RhdGUub3BlbjpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wZW4uYXBwbHkodGhpcywgYXJncyk7XG5cbiAgICAgICAgY2FzZSBDb2xsYXBzaWJsZVN0YXRlLmNsb3NlZDpcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNsb3NlLmFwcGx5KHRoaXMsIGFyZ3MpO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgaGFzQ29sbGFwc2libGUoY29sbGFwc2libGVJbnN0YW5jZSkge1xuICAgICAgICByZXR1cm4gJC5jb250YWlucyh0aGlzLiR0YXJnZXQuZ2V0KDApLCBjb2xsYXBzaWJsZUluc3RhbmNlLiR0YXJnZXQuZ2V0KDApKTtcbiAgICB9XG5cbiAgICBiaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLiR0b2dnbGUub24oQ29sbGFwc2libGVFdmVudHMuY2xpY2ssIHRoaXMub25DbGlja2VkKTtcblxuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZE1lZGlhUXVlcnlMaXN0ICYmIHRoaXMuZGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdC5hZGRMaXN0ZW5lcikge1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlZE1lZGlhUXVlcnlMaXN0LmFkZExpc3RlbmVyKHRoaXMub25EaXNhYmxlZE1lZGlhUXVlcnlMaXN0TWF0Y2gpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdW5iaW5kRXZlbnRzKCkge1xuICAgICAgICB0aGlzLiR0b2dnbGUub2ZmKENvbGxhcHNpYmxlRXZlbnRzLmNsaWNrLCB0aGlzLm9uQ2xpY2tlZCk7XG5cbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdCAmJiB0aGlzLmRpc2FibGVkTWVkaWFRdWVyeUxpc3QucmVtb3ZlTGlzdGVuZXIpIHtcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdC5yZW1vdmVMaXN0ZW5lcih0aGlzLm9uRGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdE1hdGNoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uQ2xpY2tlZChldmVudCkge1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgIH1cblxuICAgIG9uRGlzYWJsZWRNZWRpYVF1ZXJ5TGlzdE1hdGNoKG1lZGlhKSB7XG4gICAgICAgIHRoaXMuZGlzYWJsZWQgPSBtZWRpYS5tYXRjaGVzO1xuICAgIH1cbn1cblxuLyoqXG4gKiBDb252ZW5pZW5jZSBtZXRob2QgZm9yIGNvbnN0cnVjdGluZyBDb2xsYXBzaWJsZSBpbnN0YW5jZVxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfSBbc2VsZWN0b3JdXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuJGNvbnRleHRdXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuZGlzYWJsZWRCcmVha3BvaW50XVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLmRpc2FibGVkU3RhdGVdXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnMuZW5hYmxlZFN0YXRlXVxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zLm9wZW5DbGFzc05hbWVdXG4gKiBAcmV0dXJuIHtBcnJheX0gYXJyYXkgb2YgQ29sbGFwc2libGUgaW5zdGFuY2VzXG4gKlxuICogQGV4YW1wbGVcbiAqIDxhIGhyZWY9XCIjY29udGVudFwiIGRhdGEtY29sbGFwc2libGU+Q29sbGFwc2U8L2E+XG4gKiA8ZGl2IGlkPVwiY29udGVudFwiPi4uLjwvZGl2PlxuICpcbiAqIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb2xsYXBzaWJsZUZhY3Rvcnkoc2VsZWN0b3IgPSBgW2RhdGEtJHtQTFVHSU5fS0VZfV1gLCBvdmVycmlkZU9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0ICRjb2xsYXBzaWJsZXMgPSAkKHNlbGVjdG9yLCBvdmVycmlkZU9wdGlvbnMuJGNvbnRleHQpO1xuXG4gICAgcmV0dXJuICRjb2xsYXBzaWJsZXMubWFwKChpbmRleCwgZWxlbWVudCkgPT4ge1xuICAgICAgICBjb25zdCAkdG9nZ2xlID0gJChlbGVtZW50KTtcbiAgICAgICAgY29uc3QgaW5zdGFuY2VLZXkgPSBgJHtQTFVHSU5fS0VZfUluc3RhbmNlYDtcbiAgICAgICAgY29uc3QgY2FjaGVkQ29sbGFwc2libGUgPSAkdG9nZ2xlLmRhdGEoaW5zdGFuY2VLZXkpO1xuXG4gICAgICAgIGlmIChjYWNoZWRDb2xsYXBzaWJsZSBpbnN0YW5jZW9mIENvbGxhcHNpYmxlKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ29sbGFwc2libGU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB0YXJnZXRJZCA9IHByZXBlbmRIYXNoKCR0b2dnbGUuZGF0YShQTFVHSU5fS0VZKSB8fFxuICAgICAgICAgICAgJHRvZ2dsZS5kYXRhKGAke1BMVUdJTl9LRVl9VGFyZ2V0YCkgfHxcbiAgICAgICAgICAgICR0b2dnbGUuYXR0cignaHJlZicpKTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IF8uZXh0ZW5kKG9wdGlvbnNGcm9tRGF0YSgkdG9nZ2xlKSwgb3ZlcnJpZGVPcHRpb25zKTtcbiAgICAgICAgY29uc3QgY29sbGFwc2libGUgPSBuZXcgQ29sbGFwc2libGUoJHRvZ2dsZSwgJCh0YXJnZXRJZCwgb3ZlcnJpZGVPcHRpb25zLiRjb250ZXh0KSwgb3B0aW9ucyk7XG5cbiAgICAgICAgJHRvZ2dsZS5kYXRhKGluc3RhbmNlS2V5LCBjb2xsYXBzaWJsZSk7XG5cbiAgICAgICAgcmV0dXJuIGNvbGxhcHNpYmxlO1xuICAgIH0pLnRvQXJyYXkoKTtcbn1cbiIsIi8qXG4gKiBSZW1lbWJlciB0byB1cGRhdGUgL2Fzc2V0cy9zY3NzL3NldHRpbmdzL2dsb2JhbC9zY3JlZW5zaXplcy9zY3JlZW5zaXplcy5zY3NzXG4gKiBpZiB5b3UgZGVjaWRlIHRvIGNoYW5nZSBicmVha3BvaW50IHZhbHVlc1xuICovXG5jb25zdCBicmVha3BvaW50U2l6ZXMgPSB7XG4gICAgbGFyZ2U6IDEyNjEsXG4gICAgbWVkaXVtOiA4MDEsXG4gICAgc21hbGw6IDU1MSxcbn07XG5cbi8qKlxuICogQ3JlYXRlIE1lZGlhUXVlcnlMaXN0IHVzaW5nIGJyZWFrcG9pbnQgbmFtZVxuICogQHBhcmFtIHtzdHJpbmd9IGJyZWFrcG9pbnROYW1lXG4gKiBAcmV0dXJuIHtNZWRpYVF1ZXJ5TGlzdHxudWxsfVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtZWRpYVF1ZXJ5TGlzdEZhY3RvcnkoYnJlYWtwb2ludE5hbWUpIHtcbiAgICBpZiAoIWJyZWFrcG9pbnROYW1lIHx8ICF3aW5kb3cubWF0Y2hNZWRpYSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG5cbiAgICBjb25zdCBicmVha3BvaW50ID0gYnJlYWtwb2ludFNpemVzW2JyZWFrcG9pbnROYW1lXTtcbiAgICBjb25zdCBtZWRpYVF1ZXJ5ID0gYChtaW4td2lkdGg6ICR7YnJlYWtwb2ludH1weClgO1xuICAgIGNvbnN0IG1lZGlhUXVlcnlMaXN0ID0gd2luZG93Lm1hdGNoTWVkaWEobWVkaWFRdWVyeSk7XG5cbiAgICByZXR1cm4gbWVkaWFRdWVyeUxpc3Q7XG59XG4iLCJjb25zdCBmb3JtcyA9IHtcbiAgICBlbWFpbCh2YWx1ZSkge1xuICAgICAgICBjb25zdCByZSA9IC9eLitALitcXC4uKy87XG4gICAgICAgIHJldHVybiByZS50ZXN0KHZhbHVlKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVmFsaWRhdGVzIGEgcGFzc3dvcmQgZmllbGRcbiAgICAgKiBAcGFyYW0gdmFsdWVcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBwYXNzd29yZCh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub3RFbXB0eSh2YWx1ZSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIHZhbGlkYXRlcyBpZiBhIGZpZWxkIGlzIGVtcHR5XG4gICAgICogQHBhcmFtIHZhbHVlXG4gICAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAgICpcbiAgICAgKi9cbiAgICBub3RFbXB0eSh2YWx1ZSkge1xuICAgICAgICByZXR1cm4gdmFsdWUubGVuZ3RoID4gMDtcbiAgICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZm9ybXM7XG4iLCJpbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IG5vZCBmcm9tICcuLi9ub2QnO1xuaW1wb3J0IGZvcm1zIGZyb20gJy4uL21vZGVscy9mb3Jtcyc7XG5cbmNvbnN0IGlucHV0VGFnTmFtZXMgPSBbXG4gICAgJ2lucHV0JyxcbiAgICAnc2VsZWN0JyxcbiAgICAndGV4dGFyZWEnLFxuXTtcblxuLyoqXG4gKiBBcHBseSBjbGFzcyBuYW1lIHRvIGFuIGlucHV0IGVsZW1lbnQgb24gaXRzIHR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBpbnB1dFxuICogQHBhcmFtIHtzdHJpbmd9IGZvcm1GaWVsZENsYXNzXG4gKiBAcmV0dXJuIHtvYmplY3R9IEVsZW1lbnQgaXRzZWxmXG4gKi9cbmZ1bmN0aW9uIGNsYXNzaWZ5SW5wdXQoaW5wdXQsIGZvcm1GaWVsZENsYXNzKSB7XG4gICAgY29uc3QgJGlucHV0ID0gJChpbnB1dCk7XG4gICAgY29uc3QgJGZvcm1GaWVsZCA9ICRpbnB1dC5wYXJlbnQoYC4ke2Zvcm1GaWVsZENsYXNzfWApO1xuICAgIGNvbnN0IHRhZ05hbWUgPSAkaW5wdXQucHJvcCgndGFnTmFtZScpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBsZXQgY2xhc3NOYW1lID0gYCR7Zm9ybUZpZWxkQ2xhc3N9LS0ke3RhZ05hbWV9YDtcbiAgICBsZXQgc3BlY2lmaWNDbGFzc05hbWU7XG5cbiAgICAvLyBJbnB1dCBjYW4gYmUgdGV4dC9jaGVja2JveC9yYWRpbyBldGMuLi5cbiAgICBpZiAodGFnTmFtZSA9PT0gJ2lucHV0Jykge1xuICAgICAgICBjb25zdCBpbnB1dFR5cGUgPSAkaW5wdXQucHJvcCgndHlwZScpO1xuXG4gICAgICAgIGlmIChfLmluY2x1ZGVzKFsncmFkaW8nLCAnY2hlY2tib3gnLCAnc3VibWl0J10sIGlucHV0VHlwZSkpIHtcbiAgICAgICAgICAgIC8vIGllOiAuZm9ybS1maWVsZC0tY2hlY2tib3gsIC5mb3JtLWZpZWxkLS1yYWRpb1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gYCR7Zm9ybUZpZWxkQ2xhc3N9LS0ke18uY2FtZWxDYXNlKGlucHV0VHlwZSl9YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGllOiAuZm9ybS1maWVsZC0taW5wdXQgLmZvcm0tZmllbGQtLWlucHV0VGV4dFxuICAgICAgICAgICAgc3BlY2lmaWNDbGFzc05hbWUgPSBgJHtjbGFzc05hbWV9JHtfLmNhcGl0YWxpemUoaW5wdXRUeXBlKX1gO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgY2xhc3MgbW9kaWZpZXJcbiAgICByZXR1cm4gJGZvcm1GaWVsZFxuICAgICAgICAuYWRkQ2xhc3MoY2xhc3NOYW1lKVxuICAgICAgICAuYWRkQ2xhc3Moc3BlY2lmaWNDbGFzc05hbWUpO1xufVxuXG4vKipcbiAqIEFwcGx5IGNsYXNzIG5hbWUgdG8gZWFjaCBpbnB1dCBlbGVtZW50IGluIGEgZm9ybSBiYXNlZCBvbiBpdHMgdHlwZVxuICogQGV4YW1wbGVcbiAqIC8vIEJlZm9yZVxuICogPGZvcm0gaWQ9XCJmb3JtXCI+XG4gKiAgICAgPGRpdiBjbGFzcz1cImZvcm0tZmllbGRcIj5cbiAqICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCI+XG4gKiAgICAgPC9kaXY+XG4gKiAgICAgPGRpdiBjbGFzcz1cImZvcm0tZmllbGRcIj5cbiAqICAgICAgICAgPHNlbGVjdD4uLi48L3NlbGVjdD5cbiAqICAgICA8L2Rpdj5cbiAqIDwvZm9ybT5cbiAqXG4gKiBjbGFzc2lmeUZvcm0oJyNmb3JtJywgeyBmb3JtRmllbGRDbGFzczogJ2Zvcm0tZmllbGQnIH0pO1xuICpcbiAqIC8vIEFmdGVyXG4gKiA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZCBmb3JtLWZpZWxkLS1pbnB1dCBmb3JtLWZpZWxkLS1pbnB1dFRleHRcIj4uLi48L2Rpdj5cbiAqIDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkIGZvcm0tZmllbGQtLXNlbGVjdFwiPi4uLjwvZGl2PlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gZm9ybVNlbGVjdG9yIC0gc2VsZWN0b3Igb3IgZWxlbWVudFxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge2pRdWVyeX0gRWxlbWVudCBpdHNlbGZcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsYXNzaWZ5Rm9ybShmb3JtU2VsZWN0b3IsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0ICRmb3JtID0gJChmb3JtU2VsZWN0b3IpO1xuICAgIGNvbnN0ICRpbnB1dHMgPSAkZm9ybS5maW5kKGlucHV0VGFnTmFtZXMuam9pbignLCAnKSk7XG5cbiAgICAvLyBPYnRhaW4gb3B0aW9uc1xuICAgIGNvbnN0IHsgZm9ybUZpZWxkQ2xhc3MgPSAnZm9ybS1maWVsZCcgfSA9IG9wdGlvbnM7XG5cbiAgICAvLyBDbGFzc2lmeSBlYWNoIGlucHV0IGluIGEgZm9ybVxuICAgICRpbnB1dHMuZWFjaCgoX18sIGlucHV0KSA9PiB7XG4gICAgICAgIGNsYXNzaWZ5SW5wdXQoaW5wdXQsIGZvcm1GaWVsZENsYXNzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAkZm9ybTtcbn1cblxuLyoqXG4gKiBHZXQgaWQgZnJvbSBnaXZlbiBmaWVsZFxuICogQHBhcmFtIHtvYmplY3R9ICRmaWVsZCBKUXVlcnkgZmllbGQgb2JqZWN0XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldEZpZWxkSWQoJGZpZWxkKSB7XG4gICAgY29uc3QgZmllbGRJZCA9ICRmaWVsZC5wcm9wKCduYW1lJykubWF0Y2goLyhcXFsuKlxcXSkvKTtcblxuICAgIGlmIChmaWVsZElkICYmIGZpZWxkSWQubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHJldHVybiBmaWVsZElkWzBdO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbn1cblxuLyoqXG4gKiBJbnNlcnQgaGlkZGVuIGZpZWxkIGFmdGVyIFN0YXRlL1Byb3ZpbmNlIGZpZWxkXG4gKiBAcGFyYW0ge29iamVjdH0gJHN0YXRlRmllbGQgSlF1ZXJ5IGZpZWxkIG9iamVjdFxuICovXG5mdW5jdGlvbiBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkKCRzdGF0ZUZpZWxkKSB7XG4gICAgY29uc3QgZmllbGRJZCA9IGdldEZpZWxkSWQoJHN0YXRlRmllbGQpO1xuICAgIGNvbnN0IHN0YXRlRmllbGRBdHRycyA9IHtcbiAgICAgICAgdHlwZTogJ2hpZGRlbicsXG4gICAgICAgIG5hbWU6IGBGb3JtRmllbGRJc1RleHQke2ZpZWxkSWR9YCxcbiAgICAgICAgdmFsdWU6ICcxJyxcbiAgICB9O1xuXG4gICAgJHN0YXRlRmllbGQuYWZ0ZXIoJCgnPGlucHV0IC8+Jywgc3RhdGVGaWVsZEF0dHJzKSk7XG59XG5cbmNvbnN0IFZhbGlkYXRvcnMgPSB7XG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhIG5ldyB2YWxpZGF0aW9uIHdoZW4gdGhlIGZvcm0gaXMgZGlydHlcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICovXG4gICAgc2V0RW1haWxWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBmaWVsZCkgPT4ge1xuICAgICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBmaWVsZCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZm9ybXMuZW1haWwodmFsKTtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnWW91IG11c3QgZW50ZXIgYSB2YWxpZCBlbWFpbC4nLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVmFsaWRhdGUgcGFzc3dvcmQgZmllbGRzXG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxuICAgICAqIEBwYXJhbSBwYXNzd29yZFNlbGVjdG9yXG4gICAgICogQHBhcmFtIHBhc3N3b3JkMlNlbGVjdG9yXG4gICAgICogQHBhcmFtIHJlcXVpcmVtZW50c1xuICAgICAqIEBwYXJhbSBpc09wdGlvbmFsXG4gICAgICovXG4gICAgc2V0UGFzc3dvcmRWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBwYXNzd29yZFNlbGVjdG9yLCBwYXNzd29yZDJTZWxlY3RvciwgcmVxdWlyZW1lbnRzLCBpc09wdGlvbmFsKSA9PiB7XG4gICAgICAgIGNvbnN0ICRwYXNzd29yZCA9ICQocGFzc3dvcmRTZWxlY3Rvcik7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkVmFsaWRhdGlvbnMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IHBhc3N3b3JkU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzT3B0aW9uYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdZb3UgbXVzdCBlbnRlciBhIHBhc3N3b3JkLicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBwYXNzd29yZFNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubWF0Y2gobmV3IFJlZ0V4cChyZXF1aXJlbWVudHMuYWxwaGEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgdmFsLm1hdGNoKG5ldyBSZWdFeHAocmVxdWlyZW1lbnRzLm51bWVyaWMpKVxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgdmFsLmxlbmd0aCA+PSByZXF1aXJlbWVudHMubWlubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIG9wdGlvbmFsIGFuZCBub3RoaW5nIGVudGVyZWQsIGl0IGlzIHZhbGlkXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc09wdGlvbmFsICYmIHZhbC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHJlcXVpcmVtZW50cy5lcnJvcixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IHBhc3N3b3JkMlNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc09wdGlvbmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2IodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnWW91IG11c3QgZW50ZXIgYSBwYXNzd29yZC4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogcGFzc3dvcmQyU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbCA9PT0gJHBhc3N3b3JkLnZhbCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdZb3VyIHBhc3N3b3JkcyBkbyBub3QgbWF0Y2guJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF07XG5cbiAgICAgICAgdmFsaWRhdG9yLmFkZChwYXNzd29yZFZhbGlkYXRpb25zKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVmFsaWRhdGUgcGFzc3dvcmQgZmllbGRzXG4gICAgICogQHBhcmFtIHtOb2R9IHZhbGlkYXRvclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzZWxlY3RvcnNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JzLmVycm9yU2VsZWN0b3JcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JzLmZpZWxkc2V0U2VsZWN0b3JcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JzLmZvcm1TZWxlY3RvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMubWF4UHJpY2VTZWxlY3RvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMubWluUHJpY2VTZWxlY3RvclxuICAgICAqL1xuICAgIHNldE1pbk1heFByaWNlVmFsaWRhdGlvbjogKHZhbGlkYXRvciwgc2VsZWN0b3JzKSA9PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGVycm9yU2VsZWN0b3IsXG4gICAgICAgICAgICBmaWVsZHNldFNlbGVjdG9yLFxuICAgICAgICAgICAgZm9ybVNlbGVjdG9yLFxuICAgICAgICAgICAgbWF4UHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIG1pblByaWNlU2VsZWN0b3IsXG4gICAgICAgIH0gPSBzZWxlY3RvcnM7XG5cbiAgICAgICAgdmFsaWRhdG9yLmNvbmZpZ3VyZSh7XG4gICAgICAgICAgICBmb3JtOiBmb3JtU2VsZWN0b3IsXG4gICAgICAgICAgICBwcmV2ZW50U3VibWl0OiB0cnVlLFxuICAgICAgICAgICAgc3VjY2Vzc0NsYXNzOiAnXycsIC8vIEtMVURHRTogRG9uJ3QgYXBwbHkgc3VjY2VzcyBjbGFzc1xuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ01pbiBwcmljZSBtdXN0IGJlIGxlc3MgdGhhbiBtYXguIHByaWNlLicsXG4gICAgICAgICAgICBzZWxlY3RvcjogbWluUHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIHZhbGlkYXRlOiBgbWluLW1heDoke21pblByaWNlU2VsZWN0b3J9OiR7bWF4UHJpY2VTZWxlY3Rvcn1gLFxuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ01pbiBwcmljZSBtdXN0IGJlIGxlc3MgdGhhbiBtYXguIHByaWNlLicsXG4gICAgICAgICAgICBzZWxlY3RvcjogbWF4UHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIHZhbGlkYXRlOiBgbWluLW1heDoke21pblByaWNlU2VsZWN0b3J9OiR7bWF4UHJpY2VTZWxlY3Rvcn1gLFxuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ01heC4gcHJpY2UgaXMgcmVxdWlyZWQuJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiBtYXhQcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnTWluLiBwcmljZSBpcyByZXF1aXJlZC4nLFxuICAgICAgICAgICAgc2VsZWN0b3I6IG1pblByaWNlU2VsZWN0b3IsXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdJbnB1dCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAwLicsXG4gICAgICAgICAgICBzZWxlY3RvcjogW21pblByaWNlU2VsZWN0b3IsIG1heFByaWNlU2VsZWN0b3JdLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICdtaW4tbnVtYmVyOjAnLFxuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3Iuc2V0TWVzc2FnZU9wdGlvbnMoe1xuICAgICAgICAgICAgc2VsZWN0b3I6IFttaW5QcmljZVNlbGVjdG9yLCBtYXhQcmljZVNlbGVjdG9yXSxcbiAgICAgICAgICAgIHBhcmVudDogZmllbGRzZXRTZWxlY3RvcixcbiAgICAgICAgICAgIGVycm9yU3BhbjogZXJyb3JTZWxlY3RvcixcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgdXAgYSBuZXcgdmFsaWRhdGlvbiB3aGVuIHRoZSBmb3JtIGlzIGRpcnR5XG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxuICAgICAqIEBwYXJhbSBmaWVsZFxuICAgICAqL1xuICAgIHNldFN0YXRlQ291bnRyeVZhbGlkYXRpb246ICh2YWxpZGF0b3IsIGZpZWxkKSA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1RoZSBcXCdTdGF0ZS9Qcm92aW5jZVxcJyBmaWVsZCBjYW5ub3QgYmUgYmxhbmsuJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgY2xhc3NlcyBmcm9tIGRpcnR5IGZvcm0gaWYgcHJldmlvdXNseSBjaGVja2VkXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICovXG4gICAgY2xlYW5VcFN0YXRlVmFsaWRhdGlvbjogKGZpZWxkKSA9PiB7XG4gICAgICAgIGNvbnN0ICRmaWVsZENsYXNzRWxlbWVudCA9ICQoKGBbZGF0YS10eXBlPVwiJHtmaWVsZC5kYXRhKCdmaWVsZFR5cGUnKX1cIl1gKSk7XG5cbiAgICAgICAgT2JqZWN0LmtleXMobm9kLmNsYXNzZXMpLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBpZiAoJGZpZWxkQ2xhc3NFbGVtZW50Lmhhc0NsYXNzKG5vZC5jbGFzc2VzW3ZhbHVlXSkpIHtcbiAgICAgICAgICAgICAgICAkZmllbGRDbGFzc0VsZW1lbnQucmVtb3ZlQ2xhc3Mobm9kLmNsYXNzZXNbdmFsdWVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcbn07XG5cbmV4cG9ydCB7IFZhbGlkYXRvcnMsIGluc2VydFN0YXRlSGlkZGVuRmllbGQgfTtcbiJdLCJzb3VyY2VSb290IjoiIn0=