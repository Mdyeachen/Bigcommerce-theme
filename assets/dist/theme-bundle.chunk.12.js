(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[12],{

/***/ "./assets/js/theme/account.js":
/*!************************************!*\
  !*** ./assets/js/theme/account.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Account; });
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/find */ "./node_modules/lodash/find.js");
/* harmony import */ var lodash_find__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_find__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/reduce */ "./node_modules/lodash/reduce.js");
/* harmony import */ var lodash_reduce__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_reduce__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _wishlist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wishlist */ "./assets/js/theme/wishlist.js");
/* harmony import */ var _common_form_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/form-validation */ "./assets/js/theme/common/form-validation.js");
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/utils/form-utils */ "./assets/js/theme/common/utils/form-utils.js");
/* harmony import */ var _common_payment_method__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./common/payment-method */ "./assets/js/theme/common/payment-method.js");
/* harmony import */ var _global_sweet_alert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");


function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }








var Account = /*#__PURE__*/function (_PageManager) {
  function Account(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.$state = $('[data-field-type="State"]');
    _this.$body = $('body');
    return _this;
  }
  _inheritsLoose(Account, _PageManager);
  var _proto = Account.prototype;
  _proto.onReady = function onReady() {
    var $editAccountForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('form[data-edit-account-form]');
    var $addressForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('form[data-address-form]');
    var $inboxForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('form[data-inbox-form]');
    var $accountReturnForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('[data-account-return-form]');
    var $paymentMethodForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('form[data-payment-method-form]');
    var $reorderForm = Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('[data-account-reorder-form]');
    var $invoiceButton = $('[data-print-invoice]');

    // Injected via template
    this.passwordRequirements = this.context.passwordRequirements;

    // Instantiates wish list JS
    _wishlist__WEBPACK_IMPORTED_MODULE_4__["default"].load(this.context);
    if ($editAccountForm.length) {
      this.registerEditAccountValidation($editAccountForm);
      if (this.$state.is('input')) {
        Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["insertStateHiddenField"])(this.$state);
      }
    }
    if ($invoiceButton.length) {
      $invoiceButton.on('click', function () {
        var left = window.screen.availWidth / 2 - 450;
        var top = window.screen.availHeight / 2 - 320;
        var url = $invoiceButton.data('printInvoice');
        window.open(url, 'orderInvoice', "width=900,height=650,left=" + left + ",top=" + top + ",scrollbars=1");
      });
    }
    if ($addressForm.length) {
      this.initAddressFormValidation($addressForm);
      if (this.$state.is('input')) {
        Object(_common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["insertStateHiddenField"])(this.$state);
      }
    }
    if ($inboxForm.length) {
      this.registerInboxValidation($inboxForm);
    }
    if ($accountReturnForm.length) {
      this.initAccountReturnFormValidation($accountReturnForm);
    }
    if ($paymentMethodForm.length) {
      this.initPaymentMethodFormValidation($paymentMethodForm);
    }
    if ($reorderForm.length) {
      this.initReorderForm($reorderForm);
    }
    this.bindDeleteAddress();
    this.bindDeletePaymentMethod();
  }

  /**
   * Binds a submit hook to ensure the customer receives a confirmation dialog before deleting an address
   */;
  _proto.bindDeleteAddress = function bindDeleteAddress() {
    $('[data-delete-address]').on('submit', function (event) {
      var message = $(event.currentTarget).data('deleteAddress');
      if (!window.confirm(message)) {
        event.preventDefault();
      }
    });
  };
  _proto.bindDeletePaymentMethod = function bindDeletePaymentMethod() {
    $('[data-delete-payment-method]').on('submit', function (event) {
      var message = $(event.currentTarget).data('deletePaymentMethod');
      if (!window.confirm(message)) {
        event.preventDefault();
      }
    });
  };
  _proto.initReorderForm = function initReorderForm($reorderForm) {
    var _this2 = this;
    $reorderForm.on('submit', function (event) {
      var $productReorderCheckboxes = $('.account-listItem .form-checkbox:checked');
      var submitForm = false;
      $reorderForm.find('[name^="reorderitem"]').remove();
      $productReorderCheckboxes.each(function (index, productCheckbox) {
        var productId = $(productCheckbox).val();
        var $input = $('<input>', {
          type: 'hidden',
          name: "reorderitem[" + productId + "]",
          value: '1'
        });
        submitForm = true;
        $reorderForm.append($input);
      });
      if (!submitForm) {
        event.preventDefault();
        _global_sweet_alert__WEBPACK_IMPORTED_MODULE_9__["default"].fire({
          text: _this2.context.selectItem,
          icon: 'error'
        });
      }
    });
  };
  _proto.initAddressFormValidation = function initAddressFormValidation($addressForm) {
    var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_5__["default"])($addressForm);
    var stateSelector = 'form[data-address-form] [data-field-type="State"]';
    var $stateElement = $(stateSelector);
    var addressValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: 'form[data-address-form] input[type="submit"]'
    });
    addressValidator.add(validationModel);
    if ($stateElement) {
      var $last;

      // Requests the states for a country with AJAX
      Object(_common_state_country__WEBPACK_IMPORTED_MODULE_6__["default"])($stateElement, this.context, function (err, field) {
        if (err) {
          throw new Error(err);
        }
        var $field = $(field);
        if (addressValidator.getStatus($stateElement) !== 'undefined') {
          addressValidator.remove($stateElement);
        }
        if ($last) {
          addressValidator.remove($last);
        }
        if ($field.is('select')) {
          $last = field;
          _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].setStateCountryValidation(addressValidator, field);
        } else {
          _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].cleanUpStateValidation(field);
        }
      });
    }
    $addressForm.on('submit', function (event) {
      addressValidator.performCheck();
      if (addressValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
  };
  _proto.initAccountReturnFormValidation = function initAccountReturnFormValidation($accountReturnForm) {
    var errorMessage = $accountReturnForm.data('accountReturnFormError');
    $accountReturnForm.on('submit', function (event) {
      var formSubmit = false;

      // Iterate until we find a non-zero value in the dropdown for quantity
      $('[name^="return_qty"]', $accountReturnForm).each(function (i, ele) {
        if (parseInt($(ele).val(), 10) !== 0) {
          formSubmit = true;

          // Exit out of loop if we found at least one return
          return true;
        }
      });
      if (formSubmit) {
        return true;
      }
      _global_sweet_alert__WEBPACK_IMPORTED_MODULE_9__["default"].fire({
        text: errorMessage,
        icon: 'error'
      });
      return event.preventDefault();
    });
  };
  _proto.initPaymentMethodFormValidation = function initPaymentMethodFormValidation($paymentMethodForm) {
    var _this3 = this;
    // Inject validations into form fields before validation runs
    $paymentMethodForm.find('#first_name.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.firstNameLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#last_name.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.lastNameLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#company.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.companyLabel + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#phone.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.phoneLabel + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#address1.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.address1Label + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#address2.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.address2Label + "\", \"required\": false, \"maxlength\": 0 }");
    $paymentMethodForm.find('#city.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.cityLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#country.form-field').attr('data-validation', "{ \"type\": \"singleselect\", \"label\": \"" + this.context.countryLabel + "\", \"required\": true, prefix: \"" + this.context.chooseCountryLabel + "\" }");
    $paymentMethodForm.find('#state.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.stateLabel + "\", \"required\": true, \"maxlength\": 0 }");
    $paymentMethodForm.find('#postal_code.form-field').attr('data-validation', "{ \"type\": \"singleline\", \"label\": \"" + this.context.postalCodeLabel + "\", \"required\": true, \"maxlength\": 0 }");
    var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_5__["default"])($paymentMethodForm);
    var paymentMethodSelector = 'form[data-payment-method-form]';
    var paymentMethodValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: paymentMethodSelector + " input[type=\"submit\"]"
    });
    var $stateElement = $(paymentMethodSelector + " [data-field-type=\"State\"]");
    var $last;
    // Requests the states for a country with AJAX
    Object(_common_state_country__WEBPACK_IMPORTED_MODULE_6__["default"])($stateElement, this.context, function (err, field) {
      if (err) {
        throw new Error(err);
      }
      var $field = $(field);
      if (paymentMethodValidator.getStatus($stateElement) !== 'undefined') {
        paymentMethodValidator.remove($stateElement);
      }
      if ($last) {
        paymentMethodValidator.remove($last);
      }
      if ($field.is('select')) {
        $last = field;
        _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].setStateCountryValidation(paymentMethodValidator, field);
      } else {
        _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].cleanUpStateValidation(field);
      }
    });

    // Use credit card number input listener to highlight credit card type
    var cardType;
    $(paymentMethodSelector + " input[name=\"credit_card_number\"]").on('keyup', function (_ref) {
      var target = _ref.target;
      cardType = Object(_common_payment_method__WEBPACK_IMPORTED_MODULE_8__["creditCardType"])(target.value);
      if (cardType) {
        $(paymentMethodSelector + " img[alt=\"" + cardType + "\"]").siblings().css('opacity', '.2');
      } else {
        $(paymentMethodSelector + " img").css('opacity', '1');
      }
    });

    // Set of credit card validation
    _common_payment_method__WEBPACK_IMPORTED_MODULE_8__["Validators"].setCreditCardNumberValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"credit_card_number\"]", this.context.creditCardNumber);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_8__["Validators"].setExpirationValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"expiration\"]", this.context.expiration);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_8__["Validators"].setNameOnCardValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"name_on_card\"]", this.context.nameOnCard);
    _common_payment_method__WEBPACK_IMPORTED_MODULE_8__["Validators"].setCvvValidation(paymentMethodValidator, paymentMethodSelector + " input[name=\"cvv\"]", this.context.cvv, function () {
      return cardType;
    });

    // Set of credit card format
    _common_payment_method__WEBPACK_IMPORTED_MODULE_8__["Formatters"].setCreditCardNumberFormat(paymentMethodSelector + " input[name=\"credit_card_number\"]");
    _common_payment_method__WEBPACK_IMPORTED_MODULE_8__["Formatters"].setExpirationFormat(paymentMethodSelector + " input[name=\"expiration\"]");

    // Billing address validation
    paymentMethodValidator.add(validationModel);
    $paymentMethodForm.on('submit', function (event) {
      event.preventDefault();
      // Perform final form validation
      paymentMethodValidator.performCheck();
      if (paymentMethodValidator.areAll('valid')) {
        // Serialize form data and reduce it to object
        var data = lodash_reduce__WEBPACK_IMPORTED_MODULE_1___default()($paymentMethodForm.serializeArray(), function (obj, item) {
          var refObj = obj;
          refObj[item.name] = item.value;
          return refObj;
        }, {});

        // Assign country and state code
        var country = lodash_find__WEBPACK_IMPORTED_MODULE_0___default()(_this3.context.countries, function (_ref2) {
          var value = _ref2.value;
          return value === data.country;
        });
        var state = country && lodash_find__WEBPACK_IMPORTED_MODULE_0___default()(country.states, function (_ref3) {
          var value = _ref3.value;
          return value === data.state;
        });
        data.country_code = country ? country.code : data.country;
        data.state_or_province_code = state ? state.code : data.state;

        // Default Instrument
        data.default_instrument = !!data.default_instrument;

        // Store credit card
        Object(_common_payment_method__WEBPACK_IMPORTED_MODULE_8__["storeInstrument"])(_this3.context, data, function () {
          window.location.href = _this3.context.paymentMethodsUrl;
        }, function () {
          _global_sweet_alert__WEBPACK_IMPORTED_MODULE_9__["default"].fire({
            text: _this3.context.generic_error,
            icon: 'error'
          });
        });
      }
    });
  };
  _proto.registerEditAccountValidation = function registerEditAccountValidation($editAccountForm) {
    var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_5__["default"])($editAccountForm);
    var formEditSelector = 'form[data-edit-account-form]';
    var editValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: '${formEditSelector} input[type="submit"]'
    });
    var emailSelector = formEditSelector + " [data-field-type=\"EmailAddress\"]";
    var $emailElement = $(emailSelector);
    var passwordSelector = formEditSelector + " [data-field-type=\"Password\"]";
    var $passwordElement = $(passwordSelector);
    var password2Selector = formEditSelector + " [data-field-type=\"ConfirmPassword\"]";
    var $password2Element = $(password2Selector);
    var currentPasswordSelector = formEditSelector + " [data-field-type=\"CurrentPassword\"]";
    var $currentPassword = $(currentPasswordSelector);

    // This only handles the custom fields, standard fields are added below
    editValidator.add(validationModel);
    if ($emailElement) {
      editValidator.remove(emailSelector);
      _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].setEmailValidation(editValidator, emailSelector);
    }
    if ($passwordElement && $password2Element) {
      editValidator.remove(passwordSelector);
      editValidator.remove(password2Selector);
      _common_utils_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].setPasswordValidation(editValidator, passwordSelector, password2Selector, this.passwordRequirements, true);
    }
    if ($currentPassword) {
      editValidator.add({
        selector: currentPasswordSelector,
        validate: function validate(cb, val) {
          var result = true;
          if (val === '' && $passwordElement.val() !== '') {
            result = false;
          }
          cb(result);
        },
        errorMessage: this.context.currentPassword
      });
    }
    editValidator.add([{
      selector: formEditSelector + " input[name='account_firstname']",
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.firstName
    }, {
      selector: formEditSelector + " input[name='account_lastname']",
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.lastName
    }]);
    $editAccountForm.on('submit', function (event) {
      editValidator.performCheck();
      if (editValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
  };
  _proto.registerInboxValidation = function registerInboxValidation($inboxForm) {
    var inboxValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_3__["default"])({
      submit: 'form[data-inbox-form] input[type="submit"]'
    });
    inboxValidator.add([{
      selector: 'form[data-inbox-form] select[name="message_order_id"]',
      validate: function validate(cb, val) {
        var result = Number(val) !== 0;
        cb(result);
      },
      errorMessage: this.context.enterOrderNum
    }, {
      selector: 'form[data-inbox-form] input[name="message_subject"]',
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.enterSubject
    }, {
      selector: 'form[data-inbox-form] textarea[name="message_content"]',
      validate: function validate(cb, val) {
        var result = val.length;
        cb(result);
      },
      errorMessage: this.context.enterMessage
    }]);
    $inboxForm.on('submit', function (event) {
      inboxValidator.performCheck();
      if (inboxValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
  };
  return Account;
}(_page_manager__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/payment-method.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/common/payment-method.js ***!
  \**************************************************/
/*! exports provided: creditCardType, storeInstrument, Formatters, Validators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "creditCardType", function() { return creditCardType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeInstrument", function() { return storeInstrument; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Formatters", function() { return Formatters; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Validators", function() { return Validators; });
/* harmony import */ var creditcards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! creditcards */ "./node_modules/creditcards/index.js");
/* harmony import */ var creditcards__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(creditcards__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Omit null or empty string properties of object
 * @param {Object} object
 * @returns {Object}
 */
var omitNullString = function omitNullString(obj) {
  var refObj = obj;
  $.each(refObj, function (key, value) {
    if (value === null || value === '') {
      delete refObj[key];
    }
  });
  return refObj;
};

/**
 * Get credit card type from credit card number
 * @param {string} value
 */
var creditCardType = function creditCardType(value) {
  return creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.card.type(creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.card.parse(value), true);
};

/**
 * Wrapper for ajax request to store a new instrument in bigpay
 * @param {object} Representing the data needed for the header
 * @param {object} Representing the data needed for the body
 * @param {function} done Function to execute on a successful response
 * @param {function} fail Function to execute on a unsuccessful response
 */
var storeInstrument = function storeInstrument(_ref, _ref2, done, fail) {
  var paymentsUrl = _ref.paymentsUrl,
    shopperId = _ref.shopperId,
    storeHash = _ref.storeHash,
    vaultToken = _ref.vaultToken;
  var provider_id = _ref2.provider_id,
    currency_code = _ref2.currency_code,
    credit_card_number = _ref2.credit_card_number,
    expiration = _ref2.expiration,
    name_on_card = _ref2.name_on_card,
    cvv = _ref2.cvv,
    default_instrument = _ref2.default_instrument,
    address1 = _ref2.address1,
    address2 = _ref2.address2,
    city = _ref2.city,
    postal_code = _ref2.postal_code,
    state_or_province_code = _ref2.state_or_province_code,
    country_code = _ref2.country_code,
    company = _ref2.company,
    first_name = _ref2.first_name,
    last_name = _ref2.last_name,
    email = _ref2.email,
    phone = _ref2.phone;
  var expiry = expiration.split('/');
  $.ajax({
    url: paymentsUrl + "/stores/" + storeHash + "/customers/" + shopperId + "/stored_instruments",
    dataType: 'json',
    method: 'POST',
    cache: false,
    headers: {
      Authorization: vaultToken,
      Accept: 'application/vnd.bc.v1+json',
      'Content-Type': 'application/vnd.bc.v1+json'
    },
    data: JSON.stringify({
      instrument: {
        type: 'card',
        cardholder_name: name_on_card,
        number: creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.card.parse(credit_card_number),
        expiry_month: creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.expiration.month.parse(expiry[0]),
        expiry_year: creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.expiration.year.parse(expiry[1], true),
        verification_value: cvv
      },
      billing_address: omitNullString({
        address1: address1,
        address2: address2,
        city: city,
        postal_code: postal_code,
        state_or_province_code: state_or_province_code,
        country_code: country_code,
        company: company,
        first_name: first_name,
        last_name: last_name,
        email: email,
        phone: phone
      }),
      provider_id: provider_id,
      default_instrument: default_instrument,
      currency_code: currency_code
    })
  }).done(done).fail(fail);
};
var Formatters = {
  /**
   * Sets up a format for credit card number
   * @param field
   */
  setCreditCardNumberFormat: function setCreditCardNumberFormat(field) {
    if (field) {
      $(field).on('keyup', function (_ref3) {
        var target = _ref3.target;
        var refTarget = target;
        refTarget.value = creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.card.format(creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.card.parse(target.value));
      });
    }
  },
  /**
   * Sets up a format for expiration date
   * @param field
   */
  setExpirationFormat: function setExpirationFormat(field) {
    if (field) {
      $(field).on('keyup', function (_ref4) {
        var target = _ref4.target,
          which = _ref4.which;
        var refTarget = target;
        if (which === 8 && /.*(\/)$/.test(target.value)) {
          refTarget.value = target.value.slice(0, -1);
        } else if (target.value.length > 4) {
          refTarget.value = target.value.slice(0, 5);
        } else if (which !== 8) {
          refTarget.value = target.value.replace(/^([1-9]\/|[2-9])$/g, '0$1/').replace(/^(0[1-9]|1[0-2])$/g, '$1/').replace(/^([0-1])([3-9])$/g, '0$1/$2').replace(/^(0[1-9]|1[0-2])([0-9]{2})$/g, '$1/$2').replace(/^([0]+)\/|[0]+$/g, '0').replace(/[^\d\/]|^[\/]*$/g, '').replace(/\/\//g, '/');
        }
      });
    }
  }
};
var Validators = {
  /**
   * Sets up a validation for credit card number
   * @param validator
   * @param field
   * @param errorMessage
   */
  setCreditCardNumberValidation: function setCreditCardNumberValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = val.length && creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.card.isValid(creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.card.parse(val));
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },
  /**
   * Sets up a validation for expiration date
   * @param validator
   * @param field
   * @param errorMessage
   */
  setExpirationValidation: function setExpirationValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var expiry = val.split('/');
          var result = val.length && /^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(val);
          result = result && !creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.expiration.isPast(creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.expiration.month.parse(expiry[0]), creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.expiration.year.parse(expiry[1], true));
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },
  /**
   * Sets up a validation for name on card
   * @param validator
   * @param field
   * @param errorMessage
   */
  setNameOnCardValidation: function setNameOnCardValidation(validator, field, errorMessage) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = !!val.length;
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  },
  /**
   * Sets up a validation for cvv
   * @param validator
   * @param field
   * @param errorMessage
   * @param {any} cardType The credit card number type
   */
  setCvvValidation: function setCvvValidation(validator, field, errorMessage, cardType) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var type = typeof cardType === 'function' ? cardType() : cardType;
          var result = val.length && creditcards__WEBPACK_IMPORTED_MODULE_0___default.a.cvc.isValid(val, type);
          cb(result);
        },
        errorMessage: errorMessage
      });
    }
  }
};
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvYWNjb3VudC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL3BheW1lbnQtbWV0aG9kLmpzIl0sIm5hbWVzIjpbIkFjY291bnQiLCJfUGFnZU1hbmFnZXIiLCJjb250ZXh0IiwiX3RoaXMiLCJjYWxsIiwiJHN0YXRlIiwiJCIsIiRib2R5IiwiX2luaGVyaXRzTG9vc2UiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJvblJlYWR5IiwiJGVkaXRBY2NvdW50Rm9ybSIsImNsYXNzaWZ5Rm9ybSIsIiRhZGRyZXNzRm9ybSIsIiRpbmJveEZvcm0iLCIkYWNjb3VudFJldHVybkZvcm0iLCIkcGF5bWVudE1ldGhvZEZvcm0iLCIkcmVvcmRlckZvcm0iLCIkaW52b2ljZUJ1dHRvbiIsInBhc3N3b3JkUmVxdWlyZW1lbnRzIiwiV2lzaGxpc3QiLCJsb2FkIiwibGVuZ3RoIiwicmVnaXN0ZXJFZGl0QWNjb3VudFZhbGlkYXRpb24iLCJpcyIsImluc2VydFN0YXRlSGlkZGVuRmllbGQiLCJvbiIsImxlZnQiLCJ3aW5kb3ciLCJzY3JlZW4iLCJhdmFpbFdpZHRoIiwidG9wIiwiYXZhaWxIZWlnaHQiLCJ1cmwiLCJkYXRhIiwib3BlbiIsImluaXRBZGRyZXNzRm9ybVZhbGlkYXRpb24iLCJyZWdpc3RlckluYm94VmFsaWRhdGlvbiIsImluaXRBY2NvdW50UmV0dXJuRm9ybVZhbGlkYXRpb24iLCJpbml0UGF5bWVudE1ldGhvZEZvcm1WYWxpZGF0aW9uIiwiaW5pdFJlb3JkZXJGb3JtIiwiYmluZERlbGV0ZUFkZHJlc3MiLCJiaW5kRGVsZXRlUGF5bWVudE1ldGhvZCIsImV2ZW50IiwibWVzc2FnZSIsImN1cnJlbnRUYXJnZXQiLCJjb25maXJtIiwicHJldmVudERlZmF1bHQiLCJfdGhpczIiLCIkcHJvZHVjdFJlb3JkZXJDaGVja2JveGVzIiwic3VibWl0Rm9ybSIsImZpbmQiLCJyZW1vdmUiLCJlYWNoIiwiaW5kZXgiLCJwcm9kdWN0Q2hlY2tib3giLCJwcm9kdWN0SWQiLCJ2YWwiLCIkaW5wdXQiLCJ0eXBlIiwibmFtZSIsInZhbHVlIiwiYXBwZW5kIiwic3dhbCIsImZpcmUiLCJ0ZXh0Iiwic2VsZWN0SXRlbSIsImljb24iLCJ2YWxpZGF0aW9uTW9kZWwiLCJ2YWxpZGF0aW9uIiwic3RhdGVTZWxlY3RvciIsIiRzdGF0ZUVsZW1lbnQiLCJhZGRyZXNzVmFsaWRhdG9yIiwibm9kIiwic3VibWl0IiwiYWRkIiwiJGxhc3QiLCJzdGF0ZUNvdW50cnkiLCJlcnIiLCJmaWVsZCIsIkVycm9yIiwiJGZpZWxkIiwiZ2V0U3RhdHVzIiwiVmFsaWRhdG9ycyIsInNldFN0YXRlQ291bnRyeVZhbGlkYXRpb24iLCJjbGVhblVwU3RhdGVWYWxpZGF0aW9uIiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwiZXJyb3JNZXNzYWdlIiwiZm9ybVN1Ym1pdCIsImkiLCJlbGUiLCJwYXJzZUludCIsIl90aGlzMyIsImF0dHIiLCJmaXJzdE5hbWVMYWJlbCIsImxhc3ROYW1lTGFiZWwiLCJjb21wYW55TGFiZWwiLCJwaG9uZUxhYmVsIiwiYWRkcmVzczFMYWJlbCIsImFkZHJlc3MyTGFiZWwiLCJjaXR5TGFiZWwiLCJjb3VudHJ5TGFiZWwiLCJjaG9vc2VDb3VudHJ5TGFiZWwiLCJzdGF0ZUxhYmVsIiwicG9zdGFsQ29kZUxhYmVsIiwicGF5bWVudE1ldGhvZFNlbGVjdG9yIiwicGF5bWVudE1ldGhvZFZhbGlkYXRvciIsImNhcmRUeXBlIiwiX3JlZiIsInRhcmdldCIsImNyZWRpdENhcmRUeXBlIiwic2libGluZ3MiLCJjc3MiLCJDQ1ZhbGlkYXRvcnMiLCJzZXRDcmVkaXRDYXJkTnVtYmVyVmFsaWRhdGlvbiIsImNyZWRpdENhcmROdW1iZXIiLCJzZXRFeHBpcmF0aW9uVmFsaWRhdGlvbiIsImV4cGlyYXRpb24iLCJzZXROYW1lT25DYXJkVmFsaWRhdGlvbiIsIm5hbWVPbkNhcmQiLCJzZXRDdnZWYWxpZGF0aW9uIiwiY3Z2IiwiQ0NGb3JtYXR0ZXJzIiwic2V0Q3JlZGl0Q2FyZE51bWJlckZvcm1hdCIsInNldEV4cGlyYXRpb25Gb3JtYXQiLCJfcmVkdWNlIiwic2VyaWFsaXplQXJyYXkiLCJvYmoiLCJpdGVtIiwicmVmT2JqIiwiY291bnRyeSIsIl9maW5kIiwiY291bnRyaWVzIiwiX3JlZjIiLCJzdGF0ZSIsInN0YXRlcyIsIl9yZWYzIiwiY291bnRyeV9jb2RlIiwiY29kZSIsInN0YXRlX29yX3Byb3ZpbmNlX2NvZGUiLCJkZWZhdWx0X2luc3RydW1lbnQiLCJzdG9yZUluc3RydW1lbnQiLCJsb2NhdGlvbiIsImhyZWYiLCJwYXltZW50TWV0aG9kc1VybCIsImdlbmVyaWNfZXJyb3IiLCJmb3JtRWRpdFNlbGVjdG9yIiwiZWRpdFZhbGlkYXRvciIsImVtYWlsU2VsZWN0b3IiLCIkZW1haWxFbGVtZW50IiwicGFzc3dvcmRTZWxlY3RvciIsIiRwYXNzd29yZEVsZW1lbnQiLCJwYXNzd29yZDJTZWxlY3RvciIsIiRwYXNzd29yZDJFbGVtZW50IiwiY3VycmVudFBhc3N3b3JkU2VsZWN0b3IiLCIkY3VycmVudFBhc3N3b3JkIiwic2V0RW1haWxWYWxpZGF0aW9uIiwic2V0UGFzc3dvcmRWYWxpZGF0aW9uIiwic2VsZWN0b3IiLCJ2YWxpZGF0ZSIsImNiIiwicmVzdWx0IiwiY3VycmVudFBhc3N3b3JkIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJpbmJveFZhbGlkYXRvciIsIk51bWJlciIsImVudGVyT3JkZXJOdW0iLCJlbnRlclN1YmplY3QiLCJlbnRlck1lc3NhZ2UiLCJQYWdlTWFuYWdlciIsIm9taXROdWxsU3RyaW5nIiwia2V5IiwiY3JlZGl0Y2FyZHMiLCJjYXJkIiwicGFyc2UiLCJkb25lIiwiZmFpbCIsInBheW1lbnRzVXJsIiwic2hvcHBlcklkIiwic3RvcmVIYXNoIiwidmF1bHRUb2tlbiIsInByb3ZpZGVyX2lkIiwiY3VycmVuY3lfY29kZSIsImNyZWRpdF9jYXJkX251bWJlciIsIm5hbWVfb25fY2FyZCIsImFkZHJlc3MxIiwiYWRkcmVzczIiLCJjaXR5IiwicG9zdGFsX2NvZGUiLCJjb21wYW55IiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsImVtYWlsIiwicGhvbmUiLCJleHBpcnkiLCJzcGxpdCIsImFqYXgiLCJkYXRhVHlwZSIsIm1ldGhvZCIsImNhY2hlIiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJBY2NlcHQiLCJKU09OIiwic3RyaW5naWZ5IiwiaW5zdHJ1bWVudCIsImNhcmRob2xkZXJfbmFtZSIsIm51bWJlciIsImV4cGlyeV9tb250aCIsIm1vbnRoIiwiZXhwaXJ5X3llYXIiLCJ5ZWFyIiwidmVyaWZpY2F0aW9uX3ZhbHVlIiwiYmlsbGluZ19hZGRyZXNzIiwiRm9ybWF0dGVycyIsInJlZlRhcmdldCIsImZvcm1hdCIsIl9yZWY0Iiwid2hpY2giLCJ0ZXN0Iiwic2xpY2UiLCJyZXBsYWNlIiwidmFsaWRhdG9yIiwiaXNWYWxpZCIsImlzUGFzdCIsImN2YyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUVWO0FBQ0c7QUFDZ0I7QUFDQTtBQUMyQztBQUNxQztBQUMxRjtBQUFBLElBRW5CQSxPQUFPLDBCQUFBQyxZQUFBO0VBQ3hCLFNBQUFELFFBQVlFLE9BQU8sRUFBRTtJQUFBLElBQUFDLEtBQUE7SUFDakJBLEtBQUEsR0FBQUYsWUFBQSxDQUFBRyxJQUFBLE9BQU1GLE9BQU8sQ0FBQztJQUVkQyxLQUFBLENBQUtFLE1BQU0sR0FBR0MsQ0FBQyxDQUFDLDJCQUEyQixDQUFDO0lBQzVDSCxLQUFBLENBQUtJLEtBQUssR0FBR0QsQ0FBQyxDQUFDLE1BQU0sQ0FBQztJQUFDLE9BQUFILEtBQUE7RUFDM0I7RUFBQ0ssY0FBQSxDQUFBUixPQUFBLEVBQUFDLFlBQUE7RUFBQSxJQUFBUSxNQUFBLEdBQUFULE9BQUEsQ0FBQVUsU0FBQTtFQUFBRCxNQUFBLENBRURFLE9BQU8sR0FBUCxTQUFBQSxPQUFPQSxDQUFBLEVBQUc7SUFDTixJQUFNQyxnQkFBZ0IsR0FBR0MsNkVBQVksQ0FBQyw4QkFBOEIsQ0FBQztJQUNyRSxJQUFNQyxZQUFZLEdBQUdELDZFQUFZLENBQUMseUJBQXlCLENBQUM7SUFDNUQsSUFBTUUsVUFBVSxHQUFHRiw2RUFBWSxDQUFDLHVCQUF1QixDQUFDO0lBQ3hELElBQU1HLGtCQUFrQixHQUFHSCw2RUFBWSxDQUFDLDRCQUE0QixDQUFDO0lBQ3JFLElBQU1JLGtCQUFrQixHQUFHSiw2RUFBWSxDQUFDLGdDQUFnQyxDQUFDO0lBQ3pFLElBQU1LLFlBQVksR0FBR0wsNkVBQVksQ0FBQyw2QkFBNkIsQ0FBQztJQUNoRSxJQUFNTSxjQUFjLEdBQUdiLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQzs7SUFFaEQ7SUFDQSxJQUFJLENBQUNjLG9CQUFvQixHQUFHLElBQUksQ0FBQ2xCLE9BQU8sQ0FBQ2tCLG9CQUFvQjs7SUFFN0Q7SUFDQUMsaURBQVEsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQ3BCLE9BQU8sQ0FBQztJQUUzQixJQUFJVSxnQkFBZ0IsQ0FBQ1csTUFBTSxFQUFFO01BQ3pCLElBQUksQ0FBQ0MsNkJBQTZCLENBQUNaLGdCQUFnQixDQUFDO01BQ3BELElBQUksSUFBSSxDQUFDUCxNQUFNLENBQUNvQixFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDekJDLHVGQUFzQixDQUFDLElBQUksQ0FBQ3JCLE1BQU0sQ0FBQztNQUN2QztJQUNKO0lBRUEsSUFBSWMsY0FBYyxDQUFDSSxNQUFNLEVBQUU7TUFDdkJKLGNBQWMsQ0FBQ1EsRUFBRSxDQUFDLE9BQU8sRUFBRSxZQUFNO1FBQzdCLElBQU1DLElBQUksR0FBR0MsTUFBTSxDQUFDQyxNQUFNLENBQUNDLFVBQVUsR0FBRyxDQUFDLEdBQUcsR0FBRztRQUMvQyxJQUFNQyxHQUFHLEdBQUdILE1BQU0sQ0FBQ0MsTUFBTSxDQUFDRyxXQUFXLEdBQUcsQ0FBQyxHQUFHLEdBQUc7UUFDL0MsSUFBTUMsR0FBRyxHQUFHZixjQUFjLENBQUNnQixJQUFJLENBQUMsY0FBYyxDQUFDO1FBRS9DTixNQUFNLENBQUNPLElBQUksQ0FBQ0YsR0FBRyxFQUFFLGNBQWMsaUNBQStCTixJQUFJLGFBQVFJLEdBQUcsa0JBQWUsQ0FBQztNQUNqRyxDQUFDLENBQUM7SUFDTjtJQUVBLElBQUlsQixZQUFZLENBQUNTLE1BQU0sRUFBRTtNQUNyQixJQUFJLENBQUNjLHlCQUF5QixDQUFDdkIsWUFBWSxDQUFDO01BRTVDLElBQUksSUFBSSxDQUFDVCxNQUFNLENBQUNvQixFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDekJDLHVGQUFzQixDQUFDLElBQUksQ0FBQ3JCLE1BQU0sQ0FBQztNQUN2QztJQUNKO0lBRUEsSUFBSVUsVUFBVSxDQUFDUSxNQUFNLEVBQUU7TUFDbkIsSUFBSSxDQUFDZSx1QkFBdUIsQ0FBQ3ZCLFVBQVUsQ0FBQztJQUM1QztJQUVBLElBQUlDLGtCQUFrQixDQUFDTyxNQUFNLEVBQUU7TUFDM0IsSUFBSSxDQUFDZ0IsK0JBQStCLENBQUN2QixrQkFBa0IsQ0FBQztJQUM1RDtJQUVBLElBQUlDLGtCQUFrQixDQUFDTSxNQUFNLEVBQUU7TUFDM0IsSUFBSSxDQUFDaUIsK0JBQStCLENBQUN2QixrQkFBa0IsQ0FBQztJQUM1RDtJQUVBLElBQUlDLFlBQVksQ0FBQ0ssTUFBTSxFQUFFO01BQ3JCLElBQUksQ0FBQ2tCLGVBQWUsQ0FBQ3ZCLFlBQVksQ0FBQztJQUN0QztJQUVBLElBQUksQ0FBQ3dCLGlCQUFpQixDQUFDLENBQUM7SUFDeEIsSUFBSSxDQUFDQyx1QkFBdUIsQ0FBQyxDQUFDO0VBQ2xDOztFQUVBO0FBQ0o7QUFDQSxLQUZJO0VBQUFsQyxNQUFBLENBR0FpQyxpQkFBaUIsR0FBakIsU0FBQUEsaUJBQWlCQSxDQUFBLEVBQUc7SUFDaEJwQyxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQ3FCLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBQWlCLEtBQUssRUFBSTtNQUM3QyxJQUFNQyxPQUFPLEdBQUd2QyxDQUFDLENBQUNzQyxLQUFLLENBQUNFLGFBQWEsQ0FBQyxDQUFDWCxJQUFJLENBQUMsZUFBZSxDQUFDO01BRTVELElBQUksQ0FBQ04sTUFBTSxDQUFDa0IsT0FBTyxDQUFDRixPQUFPLENBQUMsRUFBRTtRQUMxQkQsS0FBSyxDQUFDSSxjQUFjLENBQUMsQ0FBQztNQUMxQjtJQUNKLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQXZDLE1BQUEsQ0FFRGtDLHVCQUF1QixHQUF2QixTQUFBQSx1QkFBdUJBLENBQUEsRUFBRztJQUN0QnJDLENBQUMsQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDcUIsRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFBaUIsS0FBSyxFQUFJO01BQ3BELElBQU1DLE9BQU8sR0FBR3ZDLENBQUMsQ0FBQ3NDLEtBQUssQ0FBQ0UsYUFBYSxDQUFDLENBQUNYLElBQUksQ0FBQyxxQkFBcUIsQ0FBQztNQUVsRSxJQUFJLENBQUNOLE1BQU0sQ0FBQ2tCLE9BQU8sQ0FBQ0YsT0FBTyxDQUFDLEVBQUU7UUFDMUJELEtBQUssQ0FBQ0ksY0FBYyxDQUFDLENBQUM7TUFDMUI7SUFDSixDQUFDLENBQUM7RUFDTixDQUFDO0VBQUF2QyxNQUFBLENBRURnQyxlQUFlLEdBQWYsU0FBQUEsZUFBZUEsQ0FBQ3ZCLFlBQVksRUFBRTtJQUFBLElBQUErQixNQUFBO0lBQzFCL0IsWUFBWSxDQUFDUyxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUFpQixLQUFLLEVBQUk7TUFDL0IsSUFBTU0seUJBQXlCLEdBQUc1QyxDQUFDLENBQUMsMENBQTBDLENBQUM7TUFDL0UsSUFBSTZDLFVBQVUsR0FBRyxLQUFLO01BRXRCakMsWUFBWSxDQUFDa0MsSUFBSSxDQUFDLHVCQUF1QixDQUFDLENBQUNDLE1BQU0sQ0FBQyxDQUFDO01BRW5ESCx5QkFBeUIsQ0FBQ0ksSUFBSSxDQUFDLFVBQUNDLEtBQUssRUFBRUMsZUFBZSxFQUFLO1FBQ3ZELElBQU1DLFNBQVMsR0FBR25ELENBQUMsQ0FBQ2tELGVBQWUsQ0FBQyxDQUFDRSxHQUFHLENBQUMsQ0FBQztRQUMxQyxJQUFNQyxNQUFNLEdBQUdyRCxDQUFDLENBQUMsU0FBUyxFQUFFO1VBQ3hCc0QsSUFBSSxFQUFFLFFBQVE7VUFDZEMsSUFBSSxtQkFBaUJKLFNBQVMsTUFBRztVQUNqQ0ssS0FBSyxFQUFFO1FBQ1gsQ0FBQyxDQUFDO1FBRUZYLFVBQVUsR0FBRyxJQUFJO1FBRWpCakMsWUFBWSxDQUFDNkMsTUFBTSxDQUFDSixNQUFNLENBQUM7TUFDL0IsQ0FBQyxDQUFDO01BRUYsSUFBSSxDQUFDUixVQUFVLEVBQUU7UUFDYlAsS0FBSyxDQUFDSSxjQUFjLENBQUMsQ0FBQztRQUN0QmdCLDJEQUFJLENBQUNDLElBQUksQ0FBQztVQUNOQyxJQUFJLEVBQUVqQixNQUFJLENBQUMvQyxPQUFPLENBQUNpRSxVQUFVO1VBQzdCQyxJQUFJLEVBQUU7UUFDVixDQUFDLENBQUM7TUFDTjtJQUNKLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQTNELE1BQUEsQ0FFRDRCLHlCQUF5QixHQUF6QixTQUFBQSx5QkFBeUJBLENBQUN2QixZQUFZLEVBQUU7SUFDcEMsSUFBTXVELGVBQWUsR0FBR0MsdUVBQVUsQ0FBQ3hELFlBQVksQ0FBQztJQUNoRCxJQUFNeUQsYUFBYSxHQUFHLG1EQUFtRDtJQUN6RSxJQUFNQyxhQUFhLEdBQUdsRSxDQUFDLENBQUNpRSxhQUFhLENBQUM7SUFDdEMsSUFBTUUsZ0JBQWdCLEdBQUdDLDJEQUFHLENBQUM7TUFDekJDLE1BQU0sRUFBRTtJQUNaLENBQUMsQ0FBQztJQUVGRixnQkFBZ0IsQ0FBQ0csR0FBRyxDQUFDUCxlQUFlLENBQUM7SUFFckMsSUFBSUcsYUFBYSxFQUFFO01BQ2YsSUFBSUssS0FBSzs7TUFFVDtNQUNBQyxxRUFBWSxDQUFDTixhQUFhLEVBQUUsSUFBSSxDQUFDdEUsT0FBTyxFQUFFLFVBQUM2RSxHQUFHLEVBQUVDLEtBQUssRUFBSztRQUN0RCxJQUFJRCxHQUFHLEVBQUU7VUFDTCxNQUFNLElBQUlFLEtBQUssQ0FBQ0YsR0FBRyxDQUFDO1FBQ3hCO1FBRUEsSUFBTUcsTUFBTSxHQUFHNUUsQ0FBQyxDQUFDMEUsS0FBSyxDQUFDO1FBRXZCLElBQUlQLGdCQUFnQixDQUFDVSxTQUFTLENBQUNYLGFBQWEsQ0FBQyxLQUFLLFdBQVcsRUFBRTtVQUMzREMsZ0JBQWdCLENBQUNwQixNQUFNLENBQUNtQixhQUFhLENBQUM7UUFDMUM7UUFFQSxJQUFJSyxLQUFLLEVBQUU7VUFDUEosZ0JBQWdCLENBQUNwQixNQUFNLENBQUN3QixLQUFLLENBQUM7UUFDbEM7UUFFQSxJQUFJSyxNQUFNLENBQUN6RCxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUU7VUFDckJvRCxLQUFLLEdBQUdHLEtBQUs7VUFDYkksbUVBQVUsQ0FBQ0MseUJBQXlCLENBQUNaLGdCQUFnQixFQUFFTyxLQUFLLENBQUM7UUFDakUsQ0FBQyxNQUFNO1VBQ0hJLG1FQUFVLENBQUNFLHNCQUFzQixDQUFDTixLQUFLLENBQUM7UUFDNUM7TUFDSixDQUFDLENBQUM7SUFDTjtJQUVBbEUsWUFBWSxDQUFDYSxFQUFFLENBQUMsUUFBUSxFQUFFLFVBQUFpQixLQUFLLEVBQUk7TUFDL0I2QixnQkFBZ0IsQ0FBQ2MsWUFBWSxDQUFDLENBQUM7TUFFL0IsSUFBSWQsZ0JBQWdCLENBQUNlLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUNsQztNQUNKO01BRUE1QyxLQUFLLENBQUNJLGNBQWMsQ0FBQyxDQUFDO0lBQzFCLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQXZDLE1BQUEsQ0FFRDhCLCtCQUErQixHQUEvQixTQUFBQSwrQkFBK0JBLENBQUN2QixrQkFBa0IsRUFBRTtJQUNoRCxJQUFNeUUsWUFBWSxHQUFHekUsa0JBQWtCLENBQUNtQixJQUFJLENBQUMsd0JBQXdCLENBQUM7SUFFdEVuQixrQkFBa0IsQ0FBQ1csRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFBaUIsS0FBSyxFQUFJO01BQ3JDLElBQUk4QyxVQUFVLEdBQUcsS0FBSzs7TUFFdEI7TUFDQXBGLENBQUMsQ0FBQyxzQkFBc0IsRUFBRVUsa0JBQWtCLENBQUMsQ0FBQ3NDLElBQUksQ0FBQyxVQUFDcUMsQ0FBQyxFQUFFQyxHQUFHLEVBQUs7UUFDM0QsSUFBSUMsUUFBUSxDQUFDdkYsQ0FBQyxDQUFDc0YsR0FBRyxDQUFDLENBQUNsQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRTtVQUNsQ2dDLFVBQVUsR0FBRyxJQUFJOztVQUVqQjtVQUNBLE9BQU8sSUFBSTtRQUNmO01BQ0osQ0FBQyxDQUFDO01BRUYsSUFBSUEsVUFBVSxFQUFFO1FBQ1osT0FBTyxJQUFJO01BQ2Y7TUFFQTFCLDJEQUFJLENBQUNDLElBQUksQ0FBQztRQUNOQyxJQUFJLEVBQUV1QixZQUFZO1FBQ2xCckIsSUFBSSxFQUFFO01BQ1YsQ0FBQyxDQUFDO01BRUYsT0FBT3hCLEtBQUssQ0FBQ0ksY0FBYyxDQUFDLENBQUM7SUFDakMsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBdkMsTUFBQSxDQUVEK0IsK0JBQStCLEdBQS9CLFNBQUFBLCtCQUErQkEsQ0FBQ3ZCLGtCQUFrQixFQUFFO0lBQUEsSUFBQTZFLE1BQUE7SUFDaEQ7SUFDQTdFLGtCQUFrQixDQUFDbUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUMyQyxJQUFJLENBQUMsaUJBQWlCLGdEQUF1QyxJQUFJLENBQUM3RixPQUFPLENBQUM4RixjQUFjLCtDQUF1QyxDQUFDO0lBQ2xML0Usa0JBQWtCLENBQUNtQyxJQUFJLENBQUMsdUJBQXVCLENBQUMsQ0FBQzJDLElBQUksQ0FBQyxpQkFBaUIsZ0RBQXVDLElBQUksQ0FBQzdGLE9BQU8sQ0FBQytGLGFBQWEsK0NBQXVDLENBQUM7SUFDaExoRixrQkFBa0IsQ0FBQ21DLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDMkMsSUFBSSxDQUFDLGlCQUFpQixnREFBdUMsSUFBSSxDQUFDN0YsT0FBTyxDQUFDZ0csWUFBWSxnREFBd0MsQ0FBQztJQUM5S2pGLGtCQUFrQixDQUFDbUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMyQyxJQUFJLENBQUMsaUJBQWlCLGdEQUF1QyxJQUFJLENBQUM3RixPQUFPLENBQUNpRyxVQUFVLGdEQUF3QyxDQUFDO0lBQzFLbEYsa0JBQWtCLENBQUNtQyxJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQzJDLElBQUksQ0FBQyxpQkFBaUIsZ0RBQXVDLElBQUksQ0FBQzdGLE9BQU8sQ0FBQ2tHLGFBQWEsK0NBQXVDLENBQUM7SUFDL0tuRixrQkFBa0IsQ0FBQ21DLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDMkMsSUFBSSxDQUFDLGlCQUFpQixnREFBdUMsSUFBSSxDQUFDN0YsT0FBTyxDQUFDbUcsYUFBYSxnREFBd0MsQ0FBQztJQUNoTHBGLGtCQUFrQixDQUFDbUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMyQyxJQUFJLENBQUMsaUJBQWlCLGdEQUF1QyxJQUFJLENBQUM3RixPQUFPLENBQUNvRyxTQUFTLCtDQUF1QyxDQUFDO0lBQ3ZLckYsa0JBQWtCLENBQUNtQyxJQUFJLENBQUMscUJBQXFCLENBQUMsQ0FBQzJDLElBQUksQ0FBQyxpQkFBaUIsa0RBQXlDLElBQUksQ0FBQzdGLE9BQU8sQ0FBQ3FHLFlBQVksMENBQWlDLElBQUksQ0FBQ3JHLE9BQU8sQ0FBQ3NHLGtCQUFrQixTQUFLLENBQUM7SUFDN012RixrQkFBa0IsQ0FBQ21DLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDMkMsSUFBSSxDQUFDLGlCQUFpQixnREFBdUMsSUFBSSxDQUFDN0YsT0FBTyxDQUFDdUcsVUFBVSwrQ0FBdUMsQ0FBQztJQUN6S3hGLGtCQUFrQixDQUFDbUMsSUFBSSxDQUFDLHlCQUF5QixDQUFDLENBQUMyQyxJQUFJLENBQUMsaUJBQWlCLGdEQUF1QyxJQUFJLENBQUM3RixPQUFPLENBQUN3RyxlQUFlLCtDQUF1QyxDQUFDO0lBRXBMLElBQU1yQyxlQUFlLEdBQUdDLHVFQUFVLENBQUNyRCxrQkFBa0IsQ0FBQztJQUN0RCxJQUFNMEYscUJBQXFCLEdBQUcsZ0NBQWdDO0lBQzlELElBQU1DLHNCQUFzQixHQUFHbEMsMkRBQUcsQ0FBQztNQUFFQyxNQUFNLEVBQUtnQyxxQkFBcUI7SUFBd0IsQ0FBQyxDQUFDO0lBQy9GLElBQU1uQyxhQUFhLEdBQUdsRSxDQUFDLENBQUlxRyxxQkFBcUIsaUNBQTRCLENBQUM7SUFFN0UsSUFBSTlCLEtBQUs7SUFDVDtJQUNBQyxxRUFBWSxDQUFDTixhQUFhLEVBQUUsSUFBSSxDQUFDdEUsT0FBTyxFQUFFLFVBQUM2RSxHQUFHLEVBQUVDLEtBQUssRUFBSztNQUN0RCxJQUFJRCxHQUFHLEVBQUU7UUFDTCxNQUFNLElBQUlFLEtBQUssQ0FBQ0YsR0FBRyxDQUFDO01BQ3hCO01BRUEsSUFBTUcsTUFBTSxHQUFHNUUsQ0FBQyxDQUFDMEUsS0FBSyxDQUFDO01BRXZCLElBQUk0QixzQkFBc0IsQ0FBQ3pCLFNBQVMsQ0FBQ1gsYUFBYSxDQUFDLEtBQUssV0FBVyxFQUFFO1FBQ2pFb0Msc0JBQXNCLENBQUN2RCxNQUFNLENBQUNtQixhQUFhLENBQUM7TUFDaEQ7TUFFQSxJQUFJSyxLQUFLLEVBQUU7UUFDUCtCLHNCQUFzQixDQUFDdkQsTUFBTSxDQUFDd0IsS0FBSyxDQUFDO01BQ3hDO01BRUEsSUFBSUssTUFBTSxDQUFDekQsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1FBQ3JCb0QsS0FBSyxHQUFHRyxLQUFLO1FBQ2JJLG1FQUFVLENBQUNDLHlCQUF5QixDQUFDdUIsc0JBQXNCLEVBQUU1QixLQUFLLENBQUM7TUFDdkUsQ0FBQyxNQUFNO1FBQ0hJLG1FQUFVLENBQUNFLHNCQUFzQixDQUFDTixLQUFLLENBQUM7TUFDNUM7SUFDSixDQUFDLENBQUM7O0lBRUY7SUFDQSxJQUFJNkIsUUFBUTtJQUNadkcsQ0FBQyxDQUFJcUcscUJBQXFCLHdDQUFtQyxDQUFDLENBQUNoRixFQUFFLENBQUMsT0FBTyxFQUFFLFVBQUFtRixJQUFBLEVBQWdCO01BQUEsSUFBYkMsTUFBTSxHQUFBRCxJQUFBLENBQU5DLE1BQU07TUFDaEZGLFFBQVEsR0FBR0csNkVBQWMsQ0FBQ0QsTUFBTSxDQUFDakQsS0FBSyxDQUFDO01BQ3ZDLElBQUkrQyxRQUFRLEVBQUU7UUFDVnZHLENBQUMsQ0FBSXFHLHFCQUFxQixtQkFBYUUsUUFBUSxRQUFJLENBQUMsQ0FBQ0ksUUFBUSxDQUFDLENBQUMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUM7TUFDeEYsQ0FBQyxNQUFNO1FBQ0g1RyxDQUFDLENBQUlxRyxxQkFBcUIsU0FBTSxDQUFDLENBQUNPLEdBQUcsQ0FBQyxTQUFTLEVBQUUsR0FBRyxDQUFDO01BQ3pEO0lBQ0osQ0FBQyxDQUFDOztJQUVGO0lBQ0FDLGlFQUFZLENBQUNDLDZCQUE2QixDQUFDUixzQkFBc0IsRUFBS0QscUJBQXFCLDBDQUFxQyxJQUFJLENBQUN6RyxPQUFPLENBQUNtSCxnQkFBZ0IsQ0FBQztJQUM5SkYsaUVBQVksQ0FBQ0csdUJBQXVCLENBQUNWLHNCQUFzQixFQUFLRCxxQkFBcUIsa0NBQTZCLElBQUksQ0FBQ3pHLE9BQU8sQ0FBQ3FILFVBQVUsQ0FBQztJQUMxSUosaUVBQVksQ0FBQ0ssdUJBQXVCLENBQUNaLHNCQUFzQixFQUFLRCxxQkFBcUIsb0NBQStCLElBQUksQ0FBQ3pHLE9BQU8sQ0FBQ3VILFVBQVUsQ0FBQztJQUM1SU4saUVBQVksQ0FBQ08sZ0JBQWdCLENBQUNkLHNCQUFzQixFQUFLRCxxQkFBcUIsMkJBQXNCLElBQUksQ0FBQ3pHLE9BQU8sQ0FBQ3lILEdBQUcsRUFBRTtNQUFBLE9BQU1kLFFBQVE7SUFBQSxFQUFDOztJQUVySTtJQUNBZSxpRUFBWSxDQUFDQyx5QkFBeUIsQ0FBSWxCLHFCQUFxQix3Q0FBbUMsQ0FBQztJQUNuR2lCLGlFQUFZLENBQUNFLG1CQUFtQixDQUFJbkIscUJBQXFCLGdDQUEyQixDQUFDOztJQUVyRjtJQUNBQyxzQkFBc0IsQ0FBQ2hDLEdBQUcsQ0FBQ1AsZUFBZSxDQUFDO0lBRTNDcEQsa0JBQWtCLENBQUNVLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBQWlCLEtBQUssRUFBSTtNQUNyQ0EsS0FBSyxDQUFDSSxjQUFjLENBQUMsQ0FBQztNQUN0QjtNQUNBNEQsc0JBQXNCLENBQUNyQixZQUFZLENBQUMsQ0FBQztNQUNyQyxJQUFJcUIsc0JBQXNCLENBQUNwQixNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDeEM7UUFDQSxJQUFNckQsSUFBSSxHQUFHNEYsb0RBQUEsQ0FBUzlHLGtCQUFrQixDQUFDK0csY0FBYyxDQUFDLENBQUMsRUFBRSxVQUFDQyxHQUFHLEVBQUVDLElBQUksRUFBSztVQUN0RSxJQUFNQyxNQUFNLEdBQUdGLEdBQUc7VUFDbEJFLE1BQU0sQ0FBQ0QsSUFBSSxDQUFDckUsSUFBSSxDQUFDLEdBQUdxRSxJQUFJLENBQUNwRSxLQUFLO1VBQzlCLE9BQU9xRSxNQUFNO1FBQ2pCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzs7UUFFTjtRQUNBLElBQU1DLE9BQU8sR0FBR0Msa0RBQUEsQ0FBT3ZDLE1BQUksQ0FBQzVGLE9BQU8sQ0FBQ29JLFNBQVMsRUFBRSxVQUFBQyxLQUFBO1VBQUEsSUFBR3pFLEtBQUssR0FBQXlFLEtBQUEsQ0FBTHpFLEtBQUs7VUFBQSxPQUFPQSxLQUFLLEtBQUszQixJQUFJLENBQUNpRyxPQUFPO1FBQUEsRUFBQztRQUNyRixJQUFNSSxLQUFLLEdBQUdKLE9BQU8sSUFBSUMsa0RBQUEsQ0FBT0QsT0FBTyxDQUFDSyxNQUFNLEVBQUUsVUFBQUMsS0FBQTtVQUFBLElBQUc1RSxLQUFLLEdBQUE0RSxLQUFBLENBQUw1RSxLQUFLO1VBQUEsT0FBT0EsS0FBSyxLQUFLM0IsSUFBSSxDQUFDcUcsS0FBSztRQUFBLEVBQUM7UUFDcEZyRyxJQUFJLENBQUN3RyxZQUFZLEdBQUdQLE9BQU8sR0FBR0EsT0FBTyxDQUFDUSxJQUFJLEdBQUd6RyxJQUFJLENBQUNpRyxPQUFPO1FBQ3pEakcsSUFBSSxDQUFDMEcsc0JBQXNCLEdBQUdMLEtBQUssR0FBR0EsS0FBSyxDQUFDSSxJQUFJLEdBQUd6RyxJQUFJLENBQUNxRyxLQUFLOztRQUU3RDtRQUNBckcsSUFBSSxDQUFDMkcsa0JBQWtCLEdBQUcsQ0FBQyxDQUFDM0csSUFBSSxDQUFDMkcsa0JBQWtCOztRQUVuRDtRQUNBQyw4RUFBZSxDQUFDakQsTUFBSSxDQUFDNUYsT0FBTyxFQUFFaUMsSUFBSSxFQUFFLFlBQU07VUFDdENOLE1BQU0sQ0FBQ21ILFFBQVEsQ0FBQ0MsSUFBSSxHQUFHbkQsTUFBSSxDQUFDNUYsT0FBTyxDQUFDZ0osaUJBQWlCO1FBQ3pELENBQUMsRUFBRSxZQUFNO1VBQ0xsRiwyREFBSSxDQUFDQyxJQUFJLENBQUM7WUFDTkMsSUFBSSxFQUFFNEIsTUFBSSxDQUFDNUYsT0FBTyxDQUFDaUosYUFBYTtZQUNoQy9FLElBQUksRUFBRTtVQUNWLENBQUMsQ0FBQztRQUNOLENBQUMsQ0FBQztNQUNOO0lBQ0osQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBM0QsTUFBQSxDQUVEZSw2QkFBNkIsR0FBN0IsU0FBQUEsNkJBQTZCQSxDQUFDWixnQkFBZ0IsRUFBRTtJQUM1QyxJQUFNeUQsZUFBZSxHQUFHQyx1RUFBVSxDQUFDMUQsZ0JBQWdCLENBQUM7SUFDcEQsSUFBTXdJLGdCQUFnQixHQUFHLDhCQUE4QjtJQUN2RCxJQUFNQyxhQUFhLEdBQUczRSwyREFBRyxDQUFDO01BQ3RCQyxNQUFNLEVBQUU7SUFDWixDQUFDLENBQUM7SUFDRixJQUFNMkUsYUFBYSxHQUFNRixnQkFBZ0Isd0NBQW1DO0lBQzVFLElBQU1HLGFBQWEsR0FBR2pKLENBQUMsQ0FBQ2dKLGFBQWEsQ0FBQztJQUN0QyxJQUFNRSxnQkFBZ0IsR0FBTUosZ0JBQWdCLG9DQUErQjtJQUMzRSxJQUFNSyxnQkFBZ0IsR0FBR25KLENBQUMsQ0FBQ2tKLGdCQUFnQixDQUFDO0lBQzVDLElBQU1FLGlCQUFpQixHQUFNTixnQkFBZ0IsMkNBQXNDO0lBQ25GLElBQU1PLGlCQUFpQixHQUFHckosQ0FBQyxDQUFDb0osaUJBQWlCLENBQUM7SUFDOUMsSUFBTUUsdUJBQXVCLEdBQU1SLGdCQUFnQiwyQ0FBc0M7SUFDekYsSUFBTVMsZ0JBQWdCLEdBQUd2SixDQUFDLENBQUNzSix1QkFBdUIsQ0FBQzs7SUFFbkQ7SUFDQVAsYUFBYSxDQUFDekUsR0FBRyxDQUFDUCxlQUFlLENBQUM7SUFFbEMsSUFBSWtGLGFBQWEsRUFBRTtNQUNmRixhQUFhLENBQUNoRyxNQUFNLENBQUNpRyxhQUFhLENBQUM7TUFDbkNsRSxtRUFBVSxDQUFDMEUsa0JBQWtCLENBQUNULGFBQWEsRUFBRUMsYUFBYSxDQUFDO0lBQy9EO0lBRUEsSUFBSUcsZ0JBQWdCLElBQUlFLGlCQUFpQixFQUFFO01BQ3ZDTixhQUFhLENBQUNoRyxNQUFNLENBQUNtRyxnQkFBZ0IsQ0FBQztNQUN0Q0gsYUFBYSxDQUFDaEcsTUFBTSxDQUFDcUcsaUJBQWlCLENBQUM7TUFDdkN0RSxtRUFBVSxDQUFDMkUscUJBQXFCLENBQzVCVixhQUFhLEVBQ2JHLGdCQUFnQixFQUNoQkUsaUJBQWlCLEVBQ2pCLElBQUksQ0FBQ3RJLG9CQUFvQixFQUN6QixJQUNKLENBQUM7SUFDTDtJQUVBLElBQUl5SSxnQkFBZ0IsRUFBRTtNQUNsQlIsYUFBYSxDQUFDekUsR0FBRyxDQUFDO1FBQ2RvRixRQUFRLEVBQUVKLHVCQUF1QjtRQUNqQ0ssUUFBUSxFQUFFLFNBQVZBLFFBQVFBLENBQUdDLEVBQUUsRUFBRXhHLEdBQUcsRUFBSztVQUNuQixJQUFJeUcsTUFBTSxHQUFHLElBQUk7VUFFakIsSUFBSXpHLEdBQUcsS0FBSyxFQUFFLElBQUkrRixnQkFBZ0IsQ0FBQy9GLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxFQUFFO1lBQzdDeUcsTUFBTSxHQUFHLEtBQUs7VUFDbEI7VUFFQUQsRUFBRSxDQUFDQyxNQUFNLENBQUM7UUFDZCxDQUFDO1FBQ0QxRSxZQUFZLEVBQUUsSUFBSSxDQUFDdkYsT0FBTyxDQUFDa0s7TUFDL0IsQ0FBQyxDQUFDO0lBQ047SUFFQWYsYUFBYSxDQUFDekUsR0FBRyxDQUFDLENBQ2Q7TUFDSW9GLFFBQVEsRUFBS1osZ0JBQWdCLHFDQUFrQztNQUMvRGEsUUFBUSxFQUFFLFNBQVZBLFFBQVFBLENBQUdDLEVBQUUsRUFBRXhHLEdBQUcsRUFBSztRQUNuQixJQUFNeUcsTUFBTSxHQUFHekcsR0FBRyxDQUFDbkMsTUFBTTtRQUV6QjJJLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDO01BQ2QsQ0FBQztNQUNEMUUsWUFBWSxFQUFFLElBQUksQ0FBQ3ZGLE9BQU8sQ0FBQ21LO0lBQy9CLENBQUMsRUFDRDtNQUNJTCxRQUFRLEVBQUtaLGdCQUFnQixvQ0FBaUM7TUFDOURhLFFBQVEsRUFBRSxTQUFWQSxRQUFRQSxDQUFHQyxFQUFFLEVBQUV4RyxHQUFHLEVBQUs7UUFDbkIsSUFBTXlHLE1BQU0sR0FBR3pHLEdBQUcsQ0FBQ25DLE1BQU07UUFFekIySSxFQUFFLENBQUNDLE1BQU0sQ0FBQztNQUNkLENBQUM7TUFDRDFFLFlBQVksRUFBRSxJQUFJLENBQUN2RixPQUFPLENBQUNvSztJQUMvQixDQUFDLENBQ0osQ0FBQztJQUVGMUosZ0JBQWdCLENBQUNlLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBQWlCLEtBQUssRUFBSTtNQUNuQ3lHLGFBQWEsQ0FBQzlELFlBQVksQ0FBQyxDQUFDO01BRTVCLElBQUk4RCxhQUFhLENBQUM3RCxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDL0I7TUFDSjtNQUVBNUMsS0FBSyxDQUFDSSxjQUFjLENBQUMsQ0FBQztJQUMxQixDQUFDLENBQUM7RUFDTixDQUFDO0VBQUF2QyxNQUFBLENBRUQ2Qix1QkFBdUIsR0FBdkIsU0FBQUEsdUJBQXVCQSxDQUFDdkIsVUFBVSxFQUFFO0lBQ2hDLElBQU13SixjQUFjLEdBQUc3RiwyREFBRyxDQUFDO01BQ3ZCQyxNQUFNLEVBQUU7SUFDWixDQUFDLENBQUM7SUFFRjRGLGNBQWMsQ0FBQzNGLEdBQUcsQ0FBQyxDQUNmO01BQ0lvRixRQUFRLEVBQUUsdURBQXVEO01BQ2pFQyxRQUFRLEVBQUUsU0FBVkEsUUFBUUEsQ0FBR0MsRUFBRSxFQUFFeEcsR0FBRyxFQUFLO1FBQ25CLElBQU15RyxNQUFNLEdBQUdLLE1BQU0sQ0FBQzlHLEdBQUcsQ0FBQyxLQUFLLENBQUM7UUFFaEN3RyxFQUFFLENBQUNDLE1BQU0sQ0FBQztNQUNkLENBQUM7TUFDRDFFLFlBQVksRUFBRSxJQUFJLENBQUN2RixPQUFPLENBQUN1SztJQUMvQixDQUFDLEVBQ0Q7TUFDSVQsUUFBUSxFQUFFLHFEQUFxRDtNQUMvREMsUUFBUSxFQUFFLFNBQVZBLFFBQVFBLENBQUdDLEVBQUUsRUFBRXhHLEdBQUcsRUFBSztRQUNuQixJQUFNeUcsTUFBTSxHQUFHekcsR0FBRyxDQUFDbkMsTUFBTTtRQUV6QjJJLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDO01BQ2QsQ0FBQztNQUNEMUUsWUFBWSxFQUFFLElBQUksQ0FBQ3ZGLE9BQU8sQ0FBQ3dLO0lBQy9CLENBQUMsRUFDRDtNQUNJVixRQUFRLEVBQUUsd0RBQXdEO01BQ2xFQyxRQUFRLEVBQUUsU0FBVkEsUUFBUUEsQ0FBR0MsRUFBRSxFQUFFeEcsR0FBRyxFQUFLO1FBQ25CLElBQU15RyxNQUFNLEdBQUd6RyxHQUFHLENBQUNuQyxNQUFNO1FBRXpCMkksRUFBRSxDQUFDQyxNQUFNLENBQUM7TUFDZCxDQUFDO01BQ0QxRSxZQUFZLEVBQUUsSUFBSSxDQUFDdkYsT0FBTyxDQUFDeUs7SUFDL0IsQ0FBQyxDQUNKLENBQUM7SUFFRjVKLFVBQVUsQ0FBQ1ksRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFBaUIsS0FBSyxFQUFJO01BQzdCMkgsY0FBYyxDQUFDaEYsWUFBWSxDQUFDLENBQUM7TUFFN0IsSUFBSWdGLGNBQWMsQ0FBQy9FLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRTtRQUNoQztNQUNKO01BRUE1QyxLQUFLLENBQUNJLGNBQWMsQ0FBQyxDQUFDO0lBQzFCLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQSxPQUFBaEQsT0FBQTtBQUFBLEVBM2FnQzRLLHFEQUFXOzs7Ozs7Ozs7Ozs7OztBQ1ZoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFzQzs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQU1DLGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBRzVDLEdBQUcsRUFBSTtFQUMxQixJQUFNRSxNQUFNLEdBQUdGLEdBQUc7RUFFbEIzSCxDQUFDLENBQUNnRCxJQUFJLENBQUM2RSxNQUFNLEVBQUUsVUFBQzJDLEdBQUcsRUFBRWhILEtBQUssRUFBSztJQUMzQixJQUFJQSxLQUFLLEtBQUssSUFBSSxJQUFJQSxLQUFLLEtBQUssRUFBRSxFQUFFO01BQ2hDLE9BQU9xRSxNQUFNLENBQUMyQyxHQUFHLENBQUM7SUFDdEI7RUFDSixDQUFDLENBQUM7RUFFRixPQUFPM0MsTUFBTTtBQUNqQixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ08sSUFBTW5CLGNBQWMsR0FBRyxTQUFqQkEsY0FBY0EsQ0FBR2xELEtBQUs7RUFBQSxPQUFJaUgsa0RBQVcsQ0FBQ0MsSUFBSSxDQUFDcEgsSUFBSSxDQUFDbUgsa0RBQVcsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUNuSCxLQUFLLENBQUMsRUFBRSxJQUFJLENBQUM7QUFBQTs7QUFFakc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNaUYsZUFBZSxHQUFHLFNBQWxCQSxlQUFlQSxDQUFBakMsSUFBQSxFQUFBeUIsS0FBQSxFQWdDekIyQyxJQUFJLEVBQUVDLElBQUksRUFBSztFQUFBLElBOUJkQyxXQUFXLEdBQUF0RSxJQUFBLENBQVhzRSxXQUFXO0lBQ1hDLFNBQVMsR0FBQXZFLElBQUEsQ0FBVHVFLFNBQVM7SUFDVEMsU0FBUyxHQUFBeEUsSUFBQSxDQUFUd0UsU0FBUztJQUNUQyxVQUFVLEdBQUF6RSxJQUFBLENBQVZ5RSxVQUFVO0VBQUEsSUFJVkMsV0FBVyxHQUFBakQsS0FBQSxDQUFYaUQsV0FBVztJQUNYQyxhQUFhLEdBQUFsRCxLQUFBLENBQWJrRCxhQUFhO0lBR2JDLGtCQUFrQixHQUFBbkQsS0FBQSxDQUFsQm1ELGtCQUFrQjtJQUNsQm5FLFVBQVUsR0FBQWdCLEtBQUEsQ0FBVmhCLFVBQVU7SUFDVm9FLFlBQVksR0FBQXBELEtBQUEsQ0FBWm9ELFlBQVk7SUFDWmhFLEdBQUcsR0FBQVksS0FBQSxDQUFIWixHQUFHO0lBQ0htQixrQkFBa0IsR0FBQVAsS0FBQSxDQUFsQk8sa0JBQWtCO0lBR2xCOEMsUUFBUSxHQUFBckQsS0FBQSxDQUFScUQsUUFBUTtJQUNSQyxRQUFRLEdBQUF0RCxLQUFBLENBQVJzRCxRQUFRO0lBQ1JDLElBQUksR0FBQXZELEtBQUEsQ0FBSnVELElBQUk7SUFDSkMsV0FBVyxHQUFBeEQsS0FBQSxDQUFYd0QsV0FBVztJQUNYbEQsc0JBQXNCLEdBQUFOLEtBQUEsQ0FBdEJNLHNCQUFzQjtJQUN0QkYsWUFBWSxHQUFBSixLQUFBLENBQVpJLFlBQVk7SUFDWnFELE9BQU8sR0FBQXpELEtBQUEsQ0FBUHlELE9BQU87SUFDUEMsVUFBVSxHQUFBMUQsS0FBQSxDQUFWMEQsVUFBVTtJQUNWQyxTQUFTLEdBQUEzRCxLQUFBLENBQVQyRCxTQUFTO0lBQ1RDLEtBQUssR0FBQTVELEtBQUEsQ0FBTDRELEtBQUs7SUFDTEMsS0FBSyxHQUFBN0QsS0FBQSxDQUFMNkQsS0FBSztFQUdMLElBQU1DLE1BQU0sR0FBRzlFLFVBQVUsQ0FBQytFLEtBQUssQ0FBQyxHQUFHLENBQUM7RUFFcENoTSxDQUFDLENBQUNpTSxJQUFJLENBQUM7SUFDSHJLLEdBQUcsRUFBS2tKLFdBQVcsZ0JBQVdFLFNBQVMsbUJBQWNELFNBQVMsd0JBQXFCO0lBQ25GbUIsUUFBUSxFQUFFLE1BQU07SUFDaEJDLE1BQU0sRUFBRSxNQUFNO0lBQ2RDLEtBQUssRUFBRSxLQUFLO0lBQ1pDLE9BQU8sRUFBRTtNQUNMQyxhQUFhLEVBQUVyQixVQUFVO01BQ3pCc0IsTUFBTSxFQUFFLDRCQUE0QjtNQUNwQyxjQUFjLEVBQUU7SUFDcEIsQ0FBQztJQUNEMUssSUFBSSxFQUFFMkssSUFBSSxDQUFDQyxTQUFTLENBQUM7TUFDakJDLFVBQVUsRUFBRTtRQUNScEosSUFBSSxFQUFFLE1BQU07UUFDWnFKLGVBQWUsRUFBRXRCLFlBQVk7UUFDN0J1QixNQUFNLEVBQUVuQyxrREFBVyxDQUFDQyxJQUFJLENBQUNDLEtBQUssQ0FBQ1Msa0JBQWtCLENBQUM7UUFDbER5QixZQUFZLEVBQUVwQyxrREFBVyxDQUFDeEQsVUFBVSxDQUFDNkYsS0FBSyxDQUFDbkMsS0FBSyxDQUFDb0IsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNEZ0IsV0FBVyxFQUFFdEMsa0RBQVcsQ0FBQ3hELFVBQVUsQ0FBQytGLElBQUksQ0FBQ3JDLEtBQUssQ0FBQ29CLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7UUFDL0RrQixrQkFBa0IsRUFBRTVGO01BQ3hCLENBQUM7TUFDRDZGLGVBQWUsRUFBRTNDLGNBQWMsQ0FBQztRQUM1QmUsUUFBUSxFQUFSQSxRQUFRO1FBQ1JDLFFBQVEsRUFBUkEsUUFBUTtRQUNSQyxJQUFJLEVBQUpBLElBQUk7UUFDSkMsV0FBVyxFQUFYQSxXQUFXO1FBQ1hsRCxzQkFBc0IsRUFBdEJBLHNCQUFzQjtRQUN0QkYsWUFBWSxFQUFaQSxZQUFZO1FBQ1pxRCxPQUFPLEVBQVBBLE9BQU87UUFDUEMsVUFBVSxFQUFWQSxVQUFVO1FBQ1ZDLFNBQVMsRUFBVEEsU0FBUztRQUNUQyxLQUFLLEVBQUxBLEtBQUs7UUFDTEMsS0FBSyxFQUFMQTtNQUNKLENBQUMsQ0FBQztNQUNGWixXQUFXLEVBQVhBLFdBQVc7TUFDWDFDLGtCQUFrQixFQUFsQkEsa0JBQWtCO01BQ2xCMkMsYUFBYSxFQUFiQTtJQUNKLENBQUM7RUFDTCxDQUFDLENBQUMsQ0FDR1AsSUFBSSxDQUFDQSxJQUFJLENBQUMsQ0FDVkMsSUFBSSxDQUFDQSxJQUFJLENBQUM7QUFDbkIsQ0FBQztBQUVNLElBQU1zQyxVQUFVLEdBQUc7RUFDdEI7QUFDSjtBQUNBO0FBQ0E7RUFDSTVGLHlCQUF5QixFQUFFLFNBQTNCQSx5QkFBeUJBLENBQUU3QyxLQUFLLEVBQUk7SUFDaEMsSUFBSUEsS0FBSyxFQUFFO01BQ1AxRSxDQUFDLENBQUMwRSxLQUFLLENBQUMsQ0FBQ3JELEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQStHLEtBQUEsRUFBZ0I7UUFBQSxJQUFiM0IsTUFBTSxHQUFBMkIsS0FBQSxDQUFOM0IsTUFBTTtRQUMxQixJQUFNMkcsU0FBUyxHQUFHM0csTUFBTTtRQUN4QjJHLFNBQVMsQ0FBQzVKLEtBQUssR0FBR2lILGtEQUFXLENBQUNDLElBQUksQ0FBQzJDLE1BQU0sQ0FBQzVDLGtEQUFXLENBQUNDLElBQUksQ0FBQ0MsS0FBSyxDQUFDbEUsTUFBTSxDQUFDakQsS0FBSyxDQUFDLENBQUM7TUFDbkYsQ0FBQyxDQUFDO0lBQ047RUFDSixDQUFDO0VBRUQ7QUFDSjtBQUNBO0FBQ0E7RUFDSWdFLG1CQUFtQixFQUFFLFNBQXJCQSxtQkFBbUJBLENBQUU5QyxLQUFLLEVBQUk7SUFDMUIsSUFBSUEsS0FBSyxFQUFFO01BQ1AxRSxDQUFDLENBQUMwRSxLQUFLLENBQUMsQ0FBQ3JELEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQWlNLEtBQUEsRUFBdUI7UUFBQSxJQUFwQjdHLE1BQU0sR0FBQTZHLEtBQUEsQ0FBTjdHLE1BQU07VUFBRThHLEtBQUssR0FBQUQsS0FBQSxDQUFMQyxLQUFLO1FBQ2pDLElBQU1ILFNBQVMsR0FBRzNHLE1BQU07UUFDeEIsSUFBSThHLEtBQUssS0FBSyxDQUFDLElBQUksU0FBUyxDQUFDQyxJQUFJLENBQUMvRyxNQUFNLENBQUNqRCxLQUFLLENBQUMsRUFBRTtVQUM3QzRKLFNBQVMsQ0FBQzVKLEtBQUssR0FBR2lELE1BQU0sQ0FBQ2pELEtBQUssQ0FBQ2lLLEtBQUssQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0MsQ0FBQyxNQUFNLElBQUloSCxNQUFNLENBQUNqRCxLQUFLLENBQUN2QyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1VBQ2hDbU0sU0FBUyxDQUFDNUosS0FBSyxHQUFHaUQsTUFBTSxDQUFDakQsS0FBSyxDQUFDaUssS0FBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDOUMsQ0FBQyxNQUFNLElBQUlGLEtBQUssS0FBSyxDQUFDLEVBQUU7VUFDcEJILFNBQVMsQ0FBQzVKLEtBQUssR0FBR2lELE1BQU0sQ0FBQ2pELEtBQUssQ0FDekJrSyxPQUFPLENBQUMsb0JBQW9CLEVBQUUsTUFBTSxDQUFDLENBQ3JDQSxPQUFPLENBQUMsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLENBQ3BDQSxPQUFPLENBQUMsbUJBQW1CLEVBQUUsUUFBUSxDQUFDLENBQ3RDQSxPQUFPLENBQUMsOEJBQThCLEVBQUUsT0FBTyxDQUFDLENBQ2hEQSxPQUFPLENBQUMsa0JBQWtCLEVBQUUsR0FBRyxDQUFDLENBQ2hDQSxPQUFPLENBQUMsa0JBQWtCLEVBQUUsRUFBRSxDQUFDLENBQy9CQSxPQUFPLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQztRQUM5QjtNQUNKLENBQUMsQ0FBQztJQUNOO0VBQ0o7QUFDSixDQUFDO0FBRU0sSUFBTTVJLFVBQVUsR0FBRztFQUN0QjtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFDSWdDLDZCQUE2QixFQUFFLFNBQS9CQSw2QkFBNkJBLENBQUc2RyxTQUFTLEVBQUVqSixLQUFLLEVBQUVTLFlBQVksRUFBSztJQUMvRCxJQUFJVCxLQUFLLEVBQUU7TUFDUGlKLFNBQVMsQ0FBQ3JKLEdBQUcsQ0FBQztRQUNWb0YsUUFBUSxFQUFFaEYsS0FBSztRQUNmaUYsUUFBUSxFQUFFLFNBQVZBLFFBQVFBLENBQUdDLEVBQUUsRUFBRXhHLEdBQUcsRUFBSztVQUNuQixJQUFNeUcsTUFBTSxHQUFHekcsR0FBRyxDQUFDbkMsTUFBTSxJQUFJd0osa0RBQVcsQ0FBQ0MsSUFBSSxDQUFDa0QsT0FBTyxDQUFDbkQsa0RBQVcsQ0FBQ0MsSUFBSSxDQUFDQyxLQUFLLENBQUN2SCxHQUFHLENBQUMsQ0FBQztVQUVsRndHLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDO1FBQ2QsQ0FBQztRQUNEMUUsWUFBWSxFQUFaQTtNQUNKLENBQUMsQ0FBQztJQUNOO0VBQ0osQ0FBQztFQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNJNkIsdUJBQXVCLEVBQUUsU0FBekJBLHVCQUF1QkEsQ0FBRzJHLFNBQVMsRUFBRWpKLEtBQUssRUFBRVMsWUFBWSxFQUFLO0lBQ3pELElBQUlULEtBQUssRUFBRTtNQUNQaUosU0FBUyxDQUFDckosR0FBRyxDQUFDO1FBQ1ZvRixRQUFRLEVBQUVoRixLQUFLO1FBQ2ZpRixRQUFRLEVBQUUsU0FBVkEsUUFBUUEsQ0FBR0MsRUFBRSxFQUFFeEcsR0FBRyxFQUFLO1VBQ25CLElBQU0ySSxNQUFNLEdBQUczSSxHQUFHLENBQUM0SSxLQUFLLENBQUMsR0FBRyxDQUFDO1VBQzdCLElBQUluQyxNQUFNLEdBQUd6RyxHQUFHLENBQUNuQyxNQUFNLElBQUksK0JBQStCLENBQUN1TSxJQUFJLENBQUNwSyxHQUFHLENBQUM7VUFDcEV5RyxNQUFNLEdBQUdBLE1BQU0sSUFBSSxDQUFDWSxrREFBVyxDQUFDeEQsVUFBVSxDQUFDNEcsTUFBTSxDQUFDcEQsa0RBQVcsQ0FBQ3hELFVBQVUsQ0FBQzZGLEtBQUssQ0FBQ25DLEtBQUssQ0FBQ29CLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFdEIsa0RBQVcsQ0FBQ3hELFVBQVUsQ0FBQytGLElBQUksQ0FBQ3JDLEtBQUssQ0FBQ29CLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztVQUVwSm5DLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDO1FBQ2QsQ0FBQztRQUNEMUUsWUFBWSxFQUFaQTtNQUNKLENBQUMsQ0FBQztJQUNOO0VBQ0osQ0FBQztFQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUNJK0IsdUJBQXVCLEVBQUUsU0FBekJBLHVCQUF1QkEsQ0FBR3lHLFNBQVMsRUFBRWpKLEtBQUssRUFBRVMsWUFBWSxFQUFLO0lBQ3pELElBQUlULEtBQUssRUFBRTtNQUNQaUosU0FBUyxDQUFDckosR0FBRyxDQUFDO1FBQ1ZvRixRQUFRLEVBQUVoRixLQUFLO1FBQ2ZpRixRQUFRLEVBQUUsU0FBVkEsUUFBUUEsQ0FBR0MsRUFBRSxFQUFFeEcsR0FBRyxFQUFLO1VBQ25CLElBQU15RyxNQUFNLEdBQUcsQ0FBQyxDQUFDekcsR0FBRyxDQUFDbkMsTUFBTTtVQUUzQjJJLEVBQUUsQ0FBQ0MsTUFBTSxDQUFDO1FBQ2QsQ0FBQztRQUNEMUUsWUFBWSxFQUFaQTtNQUNKLENBQUMsQ0FBQztJQUNOO0VBQ0osQ0FBQztFQUVEO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBQ0lpQyxnQkFBZ0IsRUFBRSxTQUFsQkEsZ0JBQWdCQSxDQUFHdUcsU0FBUyxFQUFFakosS0FBSyxFQUFFUyxZQUFZLEVBQUVvQixRQUFRLEVBQUs7SUFDNUQsSUFBSTdCLEtBQUssRUFBRTtNQUNQaUosU0FBUyxDQUFDckosR0FBRyxDQUFDO1FBQ1ZvRixRQUFRLEVBQUVoRixLQUFLO1FBQ2ZpRixRQUFRLEVBQUUsU0FBVkEsUUFBUUEsQ0FBR0MsRUFBRSxFQUFFeEcsR0FBRyxFQUFLO1VBQ25CLElBQU1FLElBQUksR0FBRyxPQUFPaUQsUUFBUSxLQUFLLFVBQVUsR0FBR0EsUUFBUSxDQUFDLENBQUMsR0FBR0EsUUFBUTtVQUNuRSxJQUFNc0QsTUFBTSxHQUFHekcsR0FBRyxDQUFDbkMsTUFBTSxJQUFJd0osa0RBQVcsQ0FBQ3FELEdBQUcsQ0FBQ0YsT0FBTyxDQUFDeEssR0FBRyxFQUFFRSxJQUFJLENBQUM7VUFFL0RzRyxFQUFFLENBQUNDLE1BQU0sQ0FBQztRQUNkLENBQUM7UUFDRDFFLFlBQVksRUFBWkE7TUFDSixDQUFDLENBQUM7SUFDTjtFQUNKO0FBQ0osQ0FBQyxDIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay4xMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xuaW1wb3J0IG5vZCBmcm9tICcuL2NvbW1vbi9ub2QnO1xuaW1wb3J0IFdpc2hsaXN0IGZyb20gJy4vd2lzaGxpc3QnO1xuaW1wb3J0IHZhbGlkYXRpb24gZnJvbSAnLi9jb21tb24vZm9ybS12YWxpZGF0aW9uJztcbmltcG9ydCBzdGF0ZUNvdW50cnkgZnJvbSAnLi9jb21tb24vc3RhdGUtY291bnRyeSc7XG5pbXBvcnQgeyBjbGFzc2lmeUZvcm0sIFZhbGlkYXRvcnMsIGluc2VydFN0YXRlSGlkZGVuRmllbGQgfSBmcm9tICcuL2NvbW1vbi91dGlscy9mb3JtLXV0aWxzJztcbmltcG9ydCB7IGNyZWRpdENhcmRUeXBlLCBzdG9yZUluc3RydW1lbnQsIFZhbGlkYXRvcnMgYXMgQ0NWYWxpZGF0b3JzLCBGb3JtYXR0ZXJzIGFzIENDRm9ybWF0dGVycyB9IGZyb20gJy4vY29tbW9uL3BheW1lbnQtbWV0aG9kJztcbmltcG9ydCBzd2FsIGZyb20gJy4vZ2xvYmFsL3N3ZWV0LWFsZXJ0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWNjb3VudCBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuXG4gICAgICAgIHRoaXMuJHN0YXRlID0gJCgnW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdJyk7XG4gICAgICAgIHRoaXMuJGJvZHkgPSAkKCdib2R5Jyk7XG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgY29uc3QgJGVkaXRBY2NvdW50Rm9ybSA9IGNsYXNzaWZ5Rm9ybSgnZm9ybVtkYXRhLWVkaXQtYWNjb3VudC1mb3JtXScpO1xuICAgICAgICBjb25zdCAkYWRkcmVzc0Zvcm0gPSBjbGFzc2lmeUZvcm0oJ2Zvcm1bZGF0YS1hZGRyZXNzLWZvcm1dJyk7XG4gICAgICAgIGNvbnN0ICRpbmJveEZvcm0gPSBjbGFzc2lmeUZvcm0oJ2Zvcm1bZGF0YS1pbmJveC1mb3JtXScpO1xuICAgICAgICBjb25zdCAkYWNjb3VudFJldHVybkZvcm0gPSBjbGFzc2lmeUZvcm0oJ1tkYXRhLWFjY291bnQtcmV0dXJuLWZvcm1dJyk7XG4gICAgICAgIGNvbnN0ICRwYXltZW50TWV0aG9kRm9ybSA9IGNsYXNzaWZ5Rm9ybSgnZm9ybVtkYXRhLXBheW1lbnQtbWV0aG9kLWZvcm1dJyk7XG4gICAgICAgIGNvbnN0ICRyZW9yZGVyRm9ybSA9IGNsYXNzaWZ5Rm9ybSgnW2RhdGEtYWNjb3VudC1yZW9yZGVyLWZvcm1dJyk7XG4gICAgICAgIGNvbnN0ICRpbnZvaWNlQnV0dG9uID0gJCgnW2RhdGEtcHJpbnQtaW52b2ljZV0nKTtcblxuICAgICAgICAvLyBJbmplY3RlZCB2aWEgdGVtcGxhdGVcbiAgICAgICAgdGhpcy5wYXNzd29yZFJlcXVpcmVtZW50cyA9IHRoaXMuY29udGV4dC5wYXNzd29yZFJlcXVpcmVtZW50cztcblxuICAgICAgICAvLyBJbnN0YW50aWF0ZXMgd2lzaCBsaXN0IEpTXG4gICAgICAgIFdpc2hsaXN0LmxvYWQodGhpcy5jb250ZXh0KTtcblxuICAgICAgICBpZiAoJGVkaXRBY2NvdW50Rm9ybS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJFZGl0QWNjb3VudFZhbGlkYXRpb24oJGVkaXRBY2NvdW50Rm9ybSk7XG4gICAgICAgICAgICBpZiAodGhpcy4kc3RhdGUuaXMoJ2lucHV0JykpIHtcbiAgICAgICAgICAgICAgICBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkKHRoaXMuJHN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkaW52b2ljZUJ1dHRvbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICRpbnZvaWNlQnV0dG9uLm9uKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBsZWZ0ID0gd2luZG93LnNjcmVlbi5hdmFpbFdpZHRoIC8gMiAtIDQ1MDtcbiAgICAgICAgICAgICAgICBjb25zdCB0b3AgPSB3aW5kb3cuc2NyZWVuLmF2YWlsSGVpZ2h0IC8gMiAtIDMyMDtcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSAkaW52b2ljZUJ1dHRvbi5kYXRhKCdwcmludEludm9pY2UnKTtcblxuICAgICAgICAgICAgICAgIHdpbmRvdy5vcGVuKHVybCwgJ29yZGVySW52b2ljZScsIGB3aWR0aD05MDAsaGVpZ2h0PTY1MCxsZWZ0PSR7bGVmdH0sdG9wPSR7dG9wfSxzY3JvbGxiYXJzPTFgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCRhZGRyZXNzRm9ybS5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdEFkZHJlc3NGb3JtVmFsaWRhdGlvbigkYWRkcmVzc0Zvcm0pO1xuXG4gICAgICAgICAgICBpZiAodGhpcy4kc3RhdGUuaXMoJ2lucHV0JykpIHtcbiAgICAgICAgICAgICAgICBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkKHRoaXMuJHN0YXRlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkaW5ib3hGb3JtLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckluYm94VmFsaWRhdGlvbigkaW5ib3hGb3JtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkYWNjb3VudFJldHVybkZvcm0ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRBY2NvdW50UmV0dXJuRm9ybVZhbGlkYXRpb24oJGFjY291bnRSZXR1cm5Gb3JtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkcGF5bWVudE1ldGhvZEZvcm0ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRQYXltZW50TWV0aG9kRm9ybVZhbGlkYXRpb24oJHBheW1lbnRNZXRob2RGb3JtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkcmVvcmRlckZvcm0ubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmluaXRSZW9yZGVyRm9ybSgkcmVvcmRlckZvcm0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5iaW5kRGVsZXRlQWRkcmVzcygpO1xuICAgICAgICB0aGlzLmJpbmREZWxldGVQYXltZW50TWV0aG9kKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQmluZHMgYSBzdWJtaXQgaG9vayB0byBlbnN1cmUgdGhlIGN1c3RvbWVyIHJlY2VpdmVzIGEgY29uZmlybWF0aW9uIGRpYWxvZyBiZWZvcmUgZGVsZXRpbmcgYW4gYWRkcmVzc1xuICAgICAqL1xuICAgIGJpbmREZWxldGVBZGRyZXNzKCkge1xuICAgICAgICAkKCdbZGF0YS1kZWxldGUtYWRkcmVzc10nKS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnZGVsZXRlQWRkcmVzcycpO1xuXG4gICAgICAgICAgICBpZiAoIXdpbmRvdy5jb25maXJtKG1lc3NhZ2UpKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYmluZERlbGV0ZVBheW1lbnRNZXRob2QoKSB7XG4gICAgICAgICQoJ1tkYXRhLWRlbGV0ZS1wYXltZW50LW1ldGhvZF0nKS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnZGVsZXRlUGF5bWVudE1ldGhvZCcpO1xuXG4gICAgICAgICAgICBpZiAoIXdpbmRvdy5jb25maXJtKG1lc3NhZ2UpKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5pdFJlb3JkZXJGb3JtKCRyZW9yZGVyRm9ybSkge1xuICAgICAgICAkcmVvcmRlckZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRwcm9kdWN0UmVvcmRlckNoZWNrYm94ZXMgPSAkKCcuYWNjb3VudC1saXN0SXRlbSAuZm9ybS1jaGVja2JveDpjaGVja2VkJyk7XG4gICAgICAgICAgICBsZXQgc3VibWl0Rm9ybSA9IGZhbHNlO1xuXG4gICAgICAgICAgICAkcmVvcmRlckZvcm0uZmluZCgnW25hbWVePVwicmVvcmRlcml0ZW1cIl0nKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgJHByb2R1Y3RSZW9yZGVyQ2hlY2tib3hlcy5lYWNoKChpbmRleCwgcHJvZHVjdENoZWNrYm94KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZHVjdElkID0gJChwcm9kdWN0Q2hlY2tib3gpLnZhbCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0ICRpbnB1dCA9ICQoJzxpbnB1dD4nLCB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdoaWRkZW4nLFxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBgcmVvcmRlcml0ZW1bJHtwcm9kdWN0SWR9XWAsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnMScsXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBzdWJtaXRGb3JtID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICRyZW9yZGVyRm9ybS5hcHBlbmQoJGlucHV0KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoIXN1Ym1pdEZvcm0pIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIHN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMuY29udGV4dC5zZWxlY3RJdGVtLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0QWRkcmVzc0Zvcm1WYWxpZGF0aW9uKCRhZGRyZXNzRm9ybSkge1xuICAgICAgICBjb25zdCB2YWxpZGF0aW9uTW9kZWwgPSB2YWxpZGF0aW9uKCRhZGRyZXNzRm9ybSk7XG4gICAgICAgIGNvbnN0IHN0YXRlU2VsZWN0b3IgPSAnZm9ybVtkYXRhLWFkZHJlc3MtZm9ybV0gW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdJztcbiAgICAgICAgY29uc3QgJHN0YXRlRWxlbWVudCA9ICQoc3RhdGVTZWxlY3Rvcik7XG4gICAgICAgIGNvbnN0IGFkZHJlc3NWYWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiAnZm9ybVtkYXRhLWFkZHJlc3MtZm9ybV0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGFkZHJlc3NWYWxpZGF0b3IuYWRkKHZhbGlkYXRpb25Nb2RlbCk7XG5cbiAgICAgICAgaWYgKCRzdGF0ZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGxldCAkbGFzdDtcblxuICAgICAgICAgICAgLy8gUmVxdWVzdHMgdGhlIHN0YXRlcyBmb3IgYSBjb3VudHJ5IHdpdGggQUpBWFxuICAgICAgICAgICAgc3RhdGVDb3VudHJ5KCRzdGF0ZUVsZW1lbnQsIHRoaXMuY29udGV4dCwgKGVyciwgZmllbGQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGNvbnN0ICRmaWVsZCA9ICQoZmllbGQpO1xuXG4gICAgICAgICAgICAgICAgaWYgKGFkZHJlc3NWYWxpZGF0b3IuZ2V0U3RhdHVzKCRzdGF0ZUVsZW1lbnQpICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBhZGRyZXNzVmFsaWRhdG9yLnJlbW92ZSgkc3RhdGVFbGVtZW50KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoJGxhc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgYWRkcmVzc1ZhbGlkYXRvci5yZW1vdmUoJGxhc3QpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICgkZmllbGQuaXMoJ3NlbGVjdCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICRsYXN0ID0gZmllbGQ7XG4gICAgICAgICAgICAgICAgICAgIFZhbGlkYXRvcnMuc2V0U3RhdGVDb3VudHJ5VmFsaWRhdGlvbihhZGRyZXNzVmFsaWRhdG9yLCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5jbGVhblVwU3RhdGVWYWxpZGF0aW9uKGZpZWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgICRhZGRyZXNzRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgYWRkcmVzc1ZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcblxuICAgICAgICAgICAgaWYgKGFkZHJlc3NWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpbml0QWNjb3VudFJldHVybkZvcm1WYWxpZGF0aW9uKCRhY2NvdW50UmV0dXJuRm9ybSkge1xuICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSAkYWNjb3VudFJldHVybkZvcm0uZGF0YSgnYWNjb3VudFJldHVybkZvcm1FcnJvcicpO1xuXG4gICAgICAgICRhY2NvdW50UmV0dXJuRm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgbGV0IGZvcm1TdWJtaXQgPSBmYWxzZTtcblxuICAgICAgICAgICAgLy8gSXRlcmF0ZSB1bnRpbCB3ZSBmaW5kIGEgbm9uLXplcm8gdmFsdWUgaW4gdGhlIGRyb3Bkb3duIGZvciBxdWFudGl0eVxuICAgICAgICAgICAgJCgnW25hbWVePVwicmV0dXJuX3F0eVwiXScsICRhY2NvdW50UmV0dXJuRm9ybSkuZWFjaCgoaSwgZWxlKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KCQoZWxlKS52YWwoKSwgMTApICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1TdWJtaXQgPSB0cnVlO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIEV4aXQgb3V0IG9mIGxvb3AgaWYgd2UgZm91bmQgYXQgbGVhc3Qgb25lIHJldHVyblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKGZvcm1TdWJtaXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICByZXR1cm4gZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaW5pdFBheW1lbnRNZXRob2RGb3JtVmFsaWRhdGlvbigkcGF5bWVudE1ldGhvZEZvcm0pIHtcbiAgICAgICAgLy8gSW5qZWN0IHZhbGlkYXRpb25zIGludG8gZm9ybSBmaWVsZHMgYmVmb3JlIHZhbGlkYXRpb24gcnVuc1xuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI2ZpcnN0X25hbWUuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZWxpbmVcIiwgXCJsYWJlbFwiOiBcIiR7dGhpcy5jb250ZXh0LmZpcnN0TmFtZUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI2xhc3RfbmFtZS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQubGFzdE5hbWVMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNjb21wYW55LmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5jb21wYW55TGFiZWx9XCIsIFwicmVxdWlyZWRcIjogZmFsc2UsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI3Bob25lLmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5waG9uZUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IGZhbHNlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNhZGRyZXNzMS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuYWRkcmVzczFMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiB0cnVlLCBcIm1heGxlbmd0aFwiOiAwIH1gKTtcbiAgICAgICAgJHBheW1lbnRNZXRob2RGb3JtLmZpbmQoJyNhZGRyZXNzMi5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuYWRkcmVzczJMYWJlbH1cIiwgXCJyZXF1aXJlZFwiOiBmYWxzZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XG4gICAgICAgICRwYXltZW50TWV0aG9kRm9ybS5maW5kKCcjY2l0eS5mb3JtLWZpZWxkJykuYXR0cignZGF0YS12YWxpZGF0aW9uJywgYHsgXCJ0eXBlXCI6IFwic2luZ2xlbGluZVwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuY2l0eUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI2NvdW50cnkuZm9ybS1maWVsZCcpLmF0dHIoJ2RhdGEtdmFsaWRhdGlvbicsIGB7IFwidHlwZVwiOiBcInNpbmdsZXNlbGVjdFwiLCBcImxhYmVsXCI6IFwiJHt0aGlzLmNvbnRleHQuY291bnRyeUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIHByZWZpeDogXCIke3RoaXMuY29udGV4dC5jaG9vc2VDb3VudHJ5TGFiZWx9XCIgfWApO1xuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI3N0YXRlLmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5zdGF0ZUxhYmVsfVwiLCBcInJlcXVpcmVkXCI6IHRydWUsIFwibWF4bGVuZ3RoXCI6IDAgfWApO1xuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0uZmluZCgnI3Bvc3RhbF9jb2RlLmZvcm0tZmllbGQnKS5hdHRyKCdkYXRhLXZhbGlkYXRpb24nLCBgeyBcInR5cGVcIjogXCJzaW5nbGVsaW5lXCIsIFwibGFiZWxcIjogXCIke3RoaXMuY29udGV4dC5wb3N0YWxDb2RlTGFiZWx9XCIsIFwicmVxdWlyZWRcIjogdHJ1ZSwgXCJtYXhsZW5ndGhcIjogMCB9YCk7XG5cbiAgICAgICAgY29uc3QgdmFsaWRhdGlvbk1vZGVsID0gdmFsaWRhdGlvbigkcGF5bWVudE1ldGhvZEZvcm0pO1xuICAgICAgICBjb25zdCBwYXltZW50TWV0aG9kU2VsZWN0b3IgPSAnZm9ybVtkYXRhLXBheW1lbnQtbWV0aG9kLWZvcm1dJztcbiAgICAgICAgY29uc3QgcGF5bWVudE1ldGhvZFZhbGlkYXRvciA9IG5vZCh7IHN1Ym1pdDogYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFt0eXBlPVwic3VibWl0XCJdYCB9KTtcbiAgICAgICAgY29uc3QgJHN0YXRlRWxlbWVudCA9ICQoYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBbZGF0YS1maWVsZC10eXBlPVwiU3RhdGVcIl1gKTtcblxuICAgICAgICBsZXQgJGxhc3Q7XG4gICAgICAgIC8vIFJlcXVlc3RzIHRoZSBzdGF0ZXMgZm9yIGEgY291bnRyeSB3aXRoIEFKQVhcbiAgICAgICAgc3RhdGVDb3VudHJ5KCRzdGF0ZUVsZW1lbnQsIHRoaXMuY29udGV4dCwgKGVyciwgZmllbGQpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgJGZpZWxkID0gJChmaWVsZCk7XG5cbiAgICAgICAgICAgIGlmIChwYXltZW50TWV0aG9kVmFsaWRhdG9yLmdldFN0YXR1cygkc3RhdGVFbGVtZW50KSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBwYXltZW50TWV0aG9kVmFsaWRhdG9yLnJlbW92ZSgkc3RhdGVFbGVtZW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCRsYXN0KSB7XG4gICAgICAgICAgICAgICAgcGF5bWVudE1ldGhvZFZhbGlkYXRvci5yZW1vdmUoJGxhc3QpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoJGZpZWxkLmlzKCdzZWxlY3QnKSkge1xuICAgICAgICAgICAgICAgICRsYXN0ID0gZmllbGQ7XG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5zZXRTdGF0ZUNvdW50cnlWYWxpZGF0aW9uKHBheW1lbnRNZXRob2RWYWxpZGF0b3IsIGZpZWxkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5jbGVhblVwU3RhdGVWYWxpZGF0aW9uKGZpZWxkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gVXNlIGNyZWRpdCBjYXJkIG51bWJlciBpbnB1dCBsaXN0ZW5lciB0byBoaWdobGlnaHQgY3JlZGl0IGNhcmQgdHlwZVxuICAgICAgICBsZXQgY2FyZFR5cGU7XG4gICAgICAgICQoYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbnB1dFtuYW1lPVwiY3JlZGl0X2NhcmRfbnVtYmVyXCJdYCkub24oJ2tleXVwJywgKHsgdGFyZ2V0IH0pID0+IHtcbiAgICAgICAgICAgIGNhcmRUeXBlID0gY3JlZGl0Q2FyZFR5cGUodGFyZ2V0LnZhbHVlKTtcbiAgICAgICAgICAgIGlmIChjYXJkVHlwZSkge1xuICAgICAgICAgICAgICAgICQoYCR7cGF5bWVudE1ldGhvZFNlbGVjdG9yfSBpbWdbYWx0PVwiJHtjYXJkVHlwZX1cIl1gKS5zaWJsaW5ncygpLmNzcygnb3BhY2l0eScsICcuMicpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkKGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW1nYCkuY3NzKCdvcGFjaXR5JywgJzEnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gU2V0IG9mIGNyZWRpdCBjYXJkIHZhbGlkYXRpb25cbiAgICAgICAgQ0NWYWxpZGF0b3JzLnNldENyZWRpdENhcmROdW1iZXJWYWxpZGF0aW9uKHBheW1lbnRNZXRob2RWYWxpZGF0b3IsIGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cImNyZWRpdF9jYXJkX251bWJlclwiXWAsIHRoaXMuY29udGV4dC5jcmVkaXRDYXJkTnVtYmVyKTtcbiAgICAgICAgQ0NWYWxpZGF0b3JzLnNldEV4cGlyYXRpb25WYWxpZGF0aW9uKHBheW1lbnRNZXRob2RWYWxpZGF0b3IsIGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cImV4cGlyYXRpb25cIl1gLCB0aGlzLmNvbnRleHQuZXhwaXJhdGlvbik7XG4gICAgICAgIENDVmFsaWRhdG9ycy5zZXROYW1lT25DYXJkVmFsaWRhdGlvbihwYXltZW50TWV0aG9kVmFsaWRhdG9yLCBgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGlucHV0W25hbWU9XCJuYW1lX29uX2NhcmRcIl1gLCB0aGlzLmNvbnRleHQubmFtZU9uQ2FyZCk7XG4gICAgICAgIENDVmFsaWRhdG9ycy5zZXRDdnZWYWxpZGF0aW9uKHBheW1lbnRNZXRob2RWYWxpZGF0b3IsIGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cImN2dlwiXWAsIHRoaXMuY29udGV4dC5jdnYsICgpID0+IGNhcmRUeXBlKTtcblxuICAgICAgICAvLyBTZXQgb2YgY3JlZGl0IGNhcmQgZm9ybWF0XG4gICAgICAgIENDRm9ybWF0dGVycy5zZXRDcmVkaXRDYXJkTnVtYmVyRm9ybWF0KGAke3BheW1lbnRNZXRob2RTZWxlY3Rvcn0gaW5wdXRbbmFtZT1cImNyZWRpdF9jYXJkX251bWJlclwiXWApO1xuICAgICAgICBDQ0Zvcm1hdHRlcnMuc2V0RXhwaXJhdGlvbkZvcm1hdChgJHtwYXltZW50TWV0aG9kU2VsZWN0b3J9IGlucHV0W25hbWU9XCJleHBpcmF0aW9uXCJdYCk7XG5cbiAgICAgICAgLy8gQmlsbGluZyBhZGRyZXNzIHZhbGlkYXRpb25cbiAgICAgICAgcGF5bWVudE1ldGhvZFZhbGlkYXRvci5hZGQodmFsaWRhdGlvbk1vZGVsKTtcblxuICAgICAgICAkcGF5bWVudE1ldGhvZEZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAvLyBQZXJmb3JtIGZpbmFsIGZvcm0gdmFsaWRhdGlvblxuICAgICAgICAgICAgcGF5bWVudE1ldGhvZFZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcbiAgICAgICAgICAgIGlmIChwYXltZW50TWV0aG9kVmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xuICAgICAgICAgICAgICAgIC8vIFNlcmlhbGl6ZSBmb3JtIGRhdGEgYW5kIHJlZHVjZSBpdCB0byBvYmplY3RcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gXy5yZWR1Y2UoJHBheW1lbnRNZXRob2RGb3JtLnNlcmlhbGl6ZUFycmF5KCksIChvYmosIGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVmT2JqID0gb2JqO1xuICAgICAgICAgICAgICAgICAgICByZWZPYmpbaXRlbS5uYW1lXSA9IGl0ZW0udmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWZPYmo7XG4gICAgICAgICAgICAgICAgfSwge30pO1xuXG4gICAgICAgICAgICAgICAgLy8gQXNzaWduIGNvdW50cnkgYW5kIHN0YXRlIGNvZGVcbiAgICAgICAgICAgICAgICBjb25zdCBjb3VudHJ5ID0gXy5maW5kKHRoaXMuY29udGV4dC5jb3VudHJpZXMsICh7IHZhbHVlIH0pID0+IHZhbHVlID09PSBkYXRhLmNvdW50cnkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHN0YXRlID0gY291bnRyeSAmJiBfLmZpbmQoY291bnRyeS5zdGF0ZXMsICh7IHZhbHVlIH0pID0+IHZhbHVlID09PSBkYXRhLnN0YXRlKTtcbiAgICAgICAgICAgICAgICBkYXRhLmNvdW50cnlfY29kZSA9IGNvdW50cnkgPyBjb3VudHJ5LmNvZGUgOiBkYXRhLmNvdW50cnk7XG4gICAgICAgICAgICAgICAgZGF0YS5zdGF0ZV9vcl9wcm92aW5jZV9jb2RlID0gc3RhdGUgPyBzdGF0ZS5jb2RlIDogZGF0YS5zdGF0ZTtcblxuICAgICAgICAgICAgICAgIC8vIERlZmF1bHQgSW5zdHJ1bWVudFxuICAgICAgICAgICAgICAgIGRhdGEuZGVmYXVsdF9pbnN0cnVtZW50ID0gISFkYXRhLmRlZmF1bHRfaW5zdHJ1bWVudDtcblxuICAgICAgICAgICAgICAgIC8vIFN0b3JlIGNyZWRpdCBjYXJkXG4gICAgICAgICAgICAgICAgc3RvcmVJbnN0cnVtZW50KHRoaXMuY29udGV4dCwgZGF0YSwgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMuY29udGV4dC5wYXltZW50TWV0aG9kc1VybDtcbiAgICAgICAgICAgICAgICB9LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0aGlzLmNvbnRleHQuZ2VuZXJpY19lcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWdpc3RlckVkaXRBY2NvdW50VmFsaWRhdGlvbigkZWRpdEFjY291bnRGb3JtKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25Nb2RlbCA9IHZhbGlkYXRpb24oJGVkaXRBY2NvdW50Rm9ybSk7XG4gICAgICAgIGNvbnN0IGZvcm1FZGl0U2VsZWN0b3IgPSAnZm9ybVtkYXRhLWVkaXQtYWNjb3VudC1mb3JtXSc7XG4gICAgICAgIGNvbnN0IGVkaXRWYWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiAnJHtmb3JtRWRpdFNlbGVjdG9yfSBpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGVtYWlsU2VsZWN0b3IgPSBgJHtmb3JtRWRpdFNlbGVjdG9yfSBbZGF0YS1maWVsZC10eXBlPVwiRW1haWxBZGRyZXNzXCJdYDtcbiAgICAgICAgY29uc3QgJGVtYWlsRWxlbWVudCA9ICQoZW1haWxTZWxlY3Rvcik7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkU2VsZWN0b3IgPSBgJHtmb3JtRWRpdFNlbGVjdG9yfSBbZGF0YS1maWVsZC10eXBlPVwiUGFzc3dvcmRcIl1gO1xuICAgICAgICBjb25zdCAkcGFzc3dvcmRFbGVtZW50ID0gJChwYXNzd29yZFNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgcGFzc3dvcmQyU2VsZWN0b3IgPSBgJHtmb3JtRWRpdFNlbGVjdG9yfSBbZGF0YS1maWVsZC10eXBlPVwiQ29uZmlybVBhc3N3b3JkXCJdYDtcbiAgICAgICAgY29uc3QgJHBhc3N3b3JkMkVsZW1lbnQgPSAkKHBhc3N3b3JkMlNlbGVjdG9yKTtcbiAgICAgICAgY29uc3QgY3VycmVudFBhc3N3b3JkU2VsZWN0b3IgPSBgJHtmb3JtRWRpdFNlbGVjdG9yfSBbZGF0YS1maWVsZC10eXBlPVwiQ3VycmVudFBhc3N3b3JkXCJdYDtcbiAgICAgICAgY29uc3QgJGN1cnJlbnRQYXNzd29yZCA9ICQoY3VycmVudFBhc3N3b3JkU2VsZWN0b3IpO1xuXG4gICAgICAgIC8vIFRoaXMgb25seSBoYW5kbGVzIHRoZSBjdXN0b20gZmllbGRzLCBzdGFuZGFyZCBmaWVsZHMgYXJlIGFkZGVkIGJlbG93XG4gICAgICAgIGVkaXRWYWxpZGF0b3IuYWRkKHZhbGlkYXRpb25Nb2RlbCk7XG5cbiAgICAgICAgaWYgKCRlbWFpbEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGVkaXRWYWxpZGF0b3IucmVtb3ZlKGVtYWlsU2VsZWN0b3IpO1xuICAgICAgICAgICAgVmFsaWRhdG9ycy5zZXRFbWFpbFZhbGlkYXRpb24oZWRpdFZhbGlkYXRvciwgZW1haWxTZWxlY3Rvcik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoJHBhc3N3b3JkRWxlbWVudCAmJiAkcGFzc3dvcmQyRWxlbWVudCkge1xuICAgICAgICAgICAgZWRpdFZhbGlkYXRvci5yZW1vdmUocGFzc3dvcmRTZWxlY3Rvcik7XG4gICAgICAgICAgICBlZGl0VmFsaWRhdG9yLnJlbW92ZShwYXNzd29yZDJTZWxlY3Rvcik7XG4gICAgICAgICAgICBWYWxpZGF0b3JzLnNldFBhc3N3b3JkVmFsaWRhdGlvbihcbiAgICAgICAgICAgICAgICBlZGl0VmFsaWRhdG9yLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQyU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgdGhpcy5wYXNzd29yZFJlcXVpcmVtZW50cyxcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkY3VycmVudFBhc3N3b3JkKSB7XG4gICAgICAgICAgICBlZGl0VmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGN1cnJlbnRQYXNzd29yZFNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsID09PSAnJyAmJiAkcGFzc3dvcmRFbGVtZW50LnZhbCgpICE9PSAnJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuY3VycmVudFBhc3N3b3JkLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBlZGl0VmFsaWRhdG9yLmFkZChbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGAke2Zvcm1FZGl0U2VsZWN0b3J9IGlucHV0W25hbWU9J2FjY291bnRfZmlyc3RuYW1lJ11gLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5maXJzdE5hbWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBgJHtmb3JtRWRpdFNlbGVjdG9yfSBpbnB1dFtuYW1lPSdhY2NvdW50X2xhc3RuYW1lJ11gLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5sYXN0TmFtZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuXG4gICAgICAgICRlZGl0QWNjb3VudEZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGVkaXRWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG5cbiAgICAgICAgICAgIGlmIChlZGl0VmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJJbmJveFZhbGlkYXRpb24oJGluYm94Rm9ybSkge1xuICAgICAgICBjb25zdCBpbmJveFZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6ICdmb3JtW2RhdGEtaW5ib3gtZm9ybV0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGluYm94VmFsaWRhdG9yLmFkZChbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICdmb3JtW2RhdGEtaW5ib3gtZm9ybV0gc2VsZWN0W25hbWU9XCJtZXNzYWdlX29yZGVyX2lkXCJdJyxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gTnVtYmVyKHZhbCkgIT09IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LmVudGVyT3JkZXJOdW0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZm9ybVtkYXRhLWluYm94LWZvcm1dIGlucHV0W25hbWU9XCJtZXNzYWdlX3N1YmplY3RcIl0nLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5lbnRlclN1YmplY3QsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiAnZm9ybVtkYXRhLWluYm94LWZvcm1dIHRleHRhcmVhW25hbWU9XCJtZXNzYWdlX2NvbnRlbnRcIl0nLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5lbnRlck1lc3NhZ2UsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdKTtcblxuICAgICAgICAkaW5ib3hGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBpbmJveFZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcblxuICAgICAgICAgICAgaWYgKGluYm94VmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IGNyZWRpdGNhcmRzIGZyb20gJ2NyZWRpdGNhcmRzJztcblxuLyoqXG4gKiBPbWl0IG51bGwgb3IgZW1wdHkgc3RyaW5nIHByb3BlcnRpZXMgb2Ygb2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqZWN0XG4gKiBAcmV0dXJucyB7T2JqZWN0fVxuICovXG5jb25zdCBvbWl0TnVsbFN0cmluZyA9IG9iaiA9PiB7XG4gICAgY29uc3QgcmVmT2JqID0gb2JqO1xuXG4gICAgJC5lYWNoKHJlZk9iaiwgKGtleSwgdmFsdWUpID0+IHtcbiAgICAgICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSAnJykge1xuICAgICAgICAgICAgZGVsZXRlIHJlZk9ialtrZXldO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gcmVmT2JqO1xufTtcblxuLyoqXG4gKiBHZXQgY3JlZGl0IGNhcmQgdHlwZSBmcm9tIGNyZWRpdCBjYXJkIG51bWJlclxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKi9cbmV4cG9ydCBjb25zdCBjcmVkaXRDYXJkVHlwZSA9IHZhbHVlID0+IGNyZWRpdGNhcmRzLmNhcmQudHlwZShjcmVkaXRjYXJkcy5jYXJkLnBhcnNlKHZhbHVlKSwgdHJ1ZSk7XG5cbi8qKlxuICogV3JhcHBlciBmb3IgYWpheCByZXF1ZXN0IHRvIHN0b3JlIGEgbmV3IGluc3RydW1lbnQgaW4gYmlncGF5XG4gKiBAcGFyYW0ge29iamVjdH0gUmVwcmVzZW50aW5nIHRoZSBkYXRhIG5lZWRlZCBmb3IgdGhlIGhlYWRlclxuICogQHBhcmFtIHtvYmplY3R9IFJlcHJlc2VudGluZyB0aGUgZGF0YSBuZWVkZWQgZm9yIHRoZSBib2R5XG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBkb25lIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgb24gYSBzdWNjZXNzZnVsIHJlc3BvbnNlXG4gKiBAcGFyYW0ge2Z1bmN0aW9ufSBmYWlsIEZ1bmN0aW9uIHRvIGV4ZWN1dGUgb24gYSB1bnN1Y2Nlc3NmdWwgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IGNvbnN0IHN0b3JlSW5zdHJ1bWVudCA9ICh7XG4gICAgLy8gSG9zdG5hbWUsIElkcyAmIFRva2VuXG4gICAgcGF5bWVudHNVcmwsXG4gICAgc2hvcHBlcklkLFxuICAgIHN0b3JlSGFzaCxcbiAgICB2YXVsdFRva2VuLFxufSwge1xuICAgIC8qIGVzbGludC1kaXNhYmxlICovXG4gICAgLy8gUHJvdmlkZXIgSW5mb1xuICAgIHByb3ZpZGVyX2lkLFxuICAgIGN1cnJlbmN5X2NvZGUsXG5cbiAgICAvLyBJbnN0cnVtZW50IERldGFpbHNcbiAgICBjcmVkaXRfY2FyZF9udW1iZXIsXG4gICAgZXhwaXJhdGlvbixcbiAgICBuYW1lX29uX2NhcmQsXG4gICAgY3Z2LFxuICAgIGRlZmF1bHRfaW5zdHJ1bWVudCxcblxuICAgIC8vIEJpbGxpbmcgQWRkcmVzc1xuICAgIGFkZHJlc3MxLFxuICAgIGFkZHJlc3MyLFxuICAgIGNpdHksXG4gICAgcG9zdGFsX2NvZGUsXG4gICAgc3RhdGVfb3JfcHJvdmluY2VfY29kZSxcbiAgICBjb3VudHJ5X2NvZGUsXG4gICAgY29tcGFueSxcbiAgICBmaXJzdF9uYW1lLFxuICAgIGxhc3RfbmFtZSxcbiAgICBlbWFpbCxcbiAgICBwaG9uZSxcbiAgICAvKiBlc2xpbnQtZW5hYmxlICovXG59LCBkb25lLCBmYWlsKSA9PiB7XG4gICAgY29uc3QgZXhwaXJ5ID0gZXhwaXJhdGlvbi5zcGxpdCgnLycpO1xuXG4gICAgJC5hamF4KHtcbiAgICAgICAgdXJsOiBgJHtwYXltZW50c1VybH0vc3RvcmVzLyR7c3RvcmVIYXNofS9jdXN0b21lcnMvJHtzaG9wcGVySWR9L3N0b3JlZF9pbnN0cnVtZW50c2AsXG4gICAgICAgIGRhdGFUeXBlOiAnanNvbicsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBjYWNoZTogZmFsc2UsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IHZhdWx0VG9rZW4sXG4gICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi92bmQuYmMudjEranNvbicsXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3ZuZC5iYy52MStqc29uJyxcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgaW5zdHJ1bWVudDoge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdjYXJkJyxcbiAgICAgICAgICAgICAgICBjYXJkaG9sZGVyX25hbWU6IG5hbWVfb25fY2FyZCxcbiAgICAgICAgICAgICAgICBudW1iZXI6IGNyZWRpdGNhcmRzLmNhcmQucGFyc2UoY3JlZGl0X2NhcmRfbnVtYmVyKSxcbiAgICAgICAgICAgICAgICBleHBpcnlfbW9udGg6IGNyZWRpdGNhcmRzLmV4cGlyYXRpb24ubW9udGgucGFyc2UoZXhwaXJ5WzBdKSxcbiAgICAgICAgICAgICAgICBleHBpcnlfeWVhcjogY3JlZGl0Y2FyZHMuZXhwaXJhdGlvbi55ZWFyLnBhcnNlKGV4cGlyeVsxXSwgdHJ1ZSksXG4gICAgICAgICAgICAgICAgdmVyaWZpY2F0aW9uX3ZhbHVlOiBjdnYsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYmlsbGluZ19hZGRyZXNzOiBvbWl0TnVsbFN0cmluZyh7XG4gICAgICAgICAgICAgICAgYWRkcmVzczEsXG4gICAgICAgICAgICAgICAgYWRkcmVzczIsXG4gICAgICAgICAgICAgICAgY2l0eSxcbiAgICAgICAgICAgICAgICBwb3N0YWxfY29kZSxcbiAgICAgICAgICAgICAgICBzdGF0ZV9vcl9wcm92aW5jZV9jb2RlLFxuICAgICAgICAgICAgICAgIGNvdW50cnlfY29kZSxcbiAgICAgICAgICAgICAgICBjb21wYW55LFxuICAgICAgICAgICAgICAgIGZpcnN0X25hbWUsXG4gICAgICAgICAgICAgICAgbGFzdF9uYW1lLFxuICAgICAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgICAgIHBob25lLFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBwcm92aWRlcl9pZCxcbiAgICAgICAgICAgIGRlZmF1bHRfaW5zdHJ1bWVudCxcbiAgICAgICAgICAgIGN1cnJlbmN5X2NvZGUsXG4gICAgICAgIH0pLFxuICAgIH0pXG4gICAgICAgIC5kb25lKGRvbmUpXG4gICAgICAgIC5mYWlsKGZhaWwpO1xufTtcblxuZXhwb3J0IGNvbnN0IEZvcm1hdHRlcnMgPSB7XG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhIGZvcm1hdCBmb3IgY3JlZGl0IGNhcmQgbnVtYmVyXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICovXG4gICAgc2V0Q3JlZGl0Q2FyZE51bWJlckZvcm1hdDogZmllbGQgPT4ge1xuICAgICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgICAgICQoZmllbGQpLm9uKCdrZXl1cCcsICh7IHRhcmdldCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVmVGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICAgICAgICAgIHJlZlRhcmdldC52YWx1ZSA9IGNyZWRpdGNhcmRzLmNhcmQuZm9ybWF0KGNyZWRpdGNhcmRzLmNhcmQucGFyc2UodGFyZ2V0LnZhbHVlKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIGEgZm9ybWF0IGZvciBleHBpcmF0aW9uIGRhdGVcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKi9cbiAgICBzZXRFeHBpcmF0aW9uRm9ybWF0OiBmaWVsZCA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgJChmaWVsZCkub24oJ2tleXVwJywgKHsgdGFyZ2V0LCB3aGljaCB9KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVmVGFyZ2V0ID0gdGFyZ2V0O1xuICAgICAgICAgICAgICAgIGlmICh3aGljaCA9PT0gOCAmJiAvLiooXFwvKSQvLnRlc3QodGFyZ2V0LnZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICByZWZUYXJnZXQudmFsdWUgPSB0YXJnZXQudmFsdWUuc2xpY2UoMCwgLTEpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LnZhbHVlLmxlbmd0aCA+IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVmVGFyZ2V0LnZhbHVlID0gdGFyZ2V0LnZhbHVlLnNsaWNlKDAsIDUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAod2hpY2ggIT09IDgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVmVGFyZ2V0LnZhbHVlID0gdGFyZ2V0LnZhbHVlXG4gICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXihbMS05XVxcL3xbMi05XSkkL2csICcwJDEvJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eKDBbMS05XXwxWzAtMl0pJC9nLCAnJDEvJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9eKFswLTFdKShbMy05XSkkL2csICcwJDEvJDInKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL14oMFsxLTldfDFbMC0yXSkoWzAtOV17Mn0pJC9nLCAnJDEvJDInKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL14oWzBdKylcXC98WzBdKyQvZywgJzAnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1teXFxkXFwvXXxeW1xcL10qJC9nLCAnJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXC9cXC8vZywgJy8nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG59O1xuXG5leHBvcnQgY29uc3QgVmFsaWRhdG9ycyA9IHtcbiAgICAvKipcbiAgICAgKiBTZXRzIHVwIGEgdmFsaWRhdGlvbiBmb3IgY3JlZGl0IGNhcmQgbnVtYmVyXG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxuICAgICAqIEBwYXJhbSBmaWVsZFxuICAgICAqIEBwYXJhbSBlcnJvck1lc3NhZ2VcbiAgICAgKi9cbiAgICBzZXRDcmVkaXRDYXJkTnVtYmVyVmFsaWRhdGlvbjogKHZhbGlkYXRvciwgZmllbGQsIGVycm9yTWVzc2FnZSkgPT4ge1xuICAgICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBmaWVsZCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aCAmJiBjcmVkaXRjYXJkcy5jYXJkLmlzVmFsaWQoY3JlZGl0Y2FyZHMuY2FyZC5wYXJzZSh2YWwpKTtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhIHZhbGlkYXRpb24gZm9yIGV4cGlyYXRpb24gZGF0ZVxuICAgICAqIEBwYXJhbSB2YWxpZGF0b3JcbiAgICAgKiBAcGFyYW0gZmllbGRcbiAgICAgKiBAcGFyYW0gZXJyb3JNZXNzYWdlXG4gICAgICovXG4gICAgc2V0RXhwaXJhdGlvblZhbGlkYXRpb246ICh2YWxpZGF0b3IsIGZpZWxkLCBlcnJvck1lc3NhZ2UpID0+IHtcbiAgICAgICAgaWYgKGZpZWxkKSB7XG4gICAgICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogZmllbGQsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4cGlyeSA9IHZhbC5zcGxpdCgnLycpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0ID0gdmFsLmxlbmd0aCAmJiAvXigwWzEtOV18MVswLTJdKVxcLyhbMC05XXsyfSkkLy50ZXN0KHZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdCAmJiAhY3JlZGl0Y2FyZHMuZXhwaXJhdGlvbi5pc1Bhc3QoY3JlZGl0Y2FyZHMuZXhwaXJhdGlvbi5tb250aC5wYXJzZShleHBpcnlbMF0pLCBjcmVkaXRjYXJkcy5leHBpcmF0aW9uLnllYXIucGFyc2UoZXhwaXJ5WzFdLCB0cnVlKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgdXAgYSB2YWxpZGF0aW9uIGZvciBuYW1lIG9uIGNhcmRcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICogQHBhcmFtIGVycm9yTWVzc2FnZVxuICAgICAqL1xuICAgIHNldE5hbWVPbkNhcmRWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBmaWVsZCwgZXJyb3JNZXNzYWdlKSA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSAhIXZhbC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZSxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgdXAgYSB2YWxpZGF0aW9uIGZvciBjdnZcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICogQHBhcmFtIGVycm9yTWVzc2FnZVxuICAgICAqIEBwYXJhbSB7YW55fSBjYXJkVHlwZSBUaGUgY3JlZGl0IGNhcmQgbnVtYmVyIHR5cGVcbiAgICAgKi9cbiAgICBzZXRDdnZWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBmaWVsZCwgZXJyb3JNZXNzYWdlLCBjYXJkVHlwZSkgPT4ge1xuICAgICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBmaWVsZCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdHlwZSA9IHR5cGVvZiBjYXJkVHlwZSA9PT0gJ2Z1bmN0aW9uJyA/IGNhcmRUeXBlKCkgOiBjYXJkVHlwZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdmFsLmxlbmd0aCAmJiBjcmVkaXRjYXJkcy5jdmMuaXNWYWxpZCh2YWwsIHR5cGUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2UsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==