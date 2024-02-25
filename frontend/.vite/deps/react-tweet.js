import {
  require_interopRequireDefault
} from "./chunk-O3MDKYV7.js";
import {
  clsx_default,
  init_clsx,
  require_jsx_runtime
} from "./chunk-CHPRA35H.js";
import {
  require_react
} from "./chunk-XRMR5KPY.js";
import {
  __commonJS,
  __toESM
} from "./chunk-WGAPYIUP.js";

// node_modules/@babel/runtime/helpers/typeof.js
var require_typeof = __commonJS({
  "node_modules/@babel/runtime/helpers/typeof.js"(exports, module) {
    function _typeof(o) {
      "@babel/helpers - typeof";
      return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o2) {
        return typeof o2;
      } : function(o2) {
        return o2 && "function" == typeof Symbol && o2.constructor === Symbol && o2 !== Symbol.prototype ? "symbol" : typeof o2;
      }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
    }
    module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
  }
});

// node_modules/date-fns/_lib/requiredArgs/index.js
var require_requiredArgs = __commonJS({
  "node_modules/date-fns/_lib/requiredArgs/index.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = requiredArgs;
    function requiredArgs(required, args) {
      if (args.length < required) {
        throw new TypeError(required + " argument" + (required > 1 ? "s" : "") + " required, but only " + args.length + " present");
      }
    }
    module.exports = exports.default;
  }
});

// node_modules/date-fns/isDate/index.js
var require_isDate = __commonJS({
  "node_modules/date-fns/isDate/index.js"(exports, module) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isDate;
    var _typeof2 = _interopRequireDefault(require_typeof());
    var _index = _interopRequireDefault(require_requiredArgs());
    function isDate(value) {
      (0, _index.default)(1, arguments);
      return value instanceof Date || (0, _typeof2.default)(value) === "object" && Object.prototype.toString.call(value) === "[object Date]";
    }
    module.exports = exports.default;
  }
});

// node_modules/date-fns/toDate/index.js
var require_toDate = __commonJS({
  "node_modules/date-fns/toDate/index.js"(exports, module) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = toDate;
    var _typeof2 = _interopRequireDefault(require_typeof());
    var _index = _interopRequireDefault(require_requiredArgs());
    function toDate(argument) {
      (0, _index.default)(1, arguments);
      var argStr = Object.prototype.toString.call(argument);
      if (argument instanceof Date || (0, _typeof2.default)(argument) === "object" && argStr === "[object Date]") {
        return new Date(argument.getTime());
      } else if (typeof argument === "number" || argStr === "[object Number]") {
        return new Date(argument);
      } else {
        if ((typeof argument === "string" || argStr === "[object String]") && typeof console !== "undefined") {
          console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
          console.warn(new Error().stack);
        }
        return /* @__PURE__ */ new Date(NaN);
      }
    }
    module.exports = exports.default;
  }
});

// node_modules/date-fns/isValid/index.js
var require_isValid = __commonJS({
  "node_modules/date-fns/isValid/index.js"(exports, module) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = isValid;
    var _index = _interopRequireDefault(require_isDate());
    var _index2 = _interopRequireDefault(require_toDate());
    var _index3 = _interopRequireDefault(require_requiredArgs());
    function isValid(dirtyDate) {
      (0, _index3.default)(1, arguments);
      if (!(0, _index.default)(dirtyDate) && typeof dirtyDate !== "number") {
        return false;
      }
      var date = (0, _index2.default)(dirtyDate);
      return !isNaN(Number(date));
    }
    module.exports = exports.default;
  }
});

// node_modules/date-fns/_lib/toInteger/index.js
var require_toInteger = __commonJS({
  "node_modules/date-fns/_lib/toInteger/index.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = toInteger;
    function toInteger(dirtyNumber) {
      if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
        return NaN;
      }
      var number = Number(dirtyNumber);
      if (isNaN(number)) {
        return number;
      }
      return number < 0 ? Math.ceil(number) : Math.floor(number);
    }
    module.exports = exports.default;
  }
});

// node_modules/date-fns/addMilliseconds/index.js
var require_addMilliseconds = __commonJS({
  "node_modules/date-fns/addMilliseconds/index.js"(exports, module) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = addMilliseconds;
    var _index = _interopRequireDefault(require_toInteger());
    var _index2 = _interopRequireDefault(require_toDate());
    var _index3 = _interopRequireDefault(require_requiredArgs());
    function addMilliseconds(dirtyDate, dirtyAmount) {
      (0, _index3.default)(2, arguments);
      var timestamp = (0, _index2.default)(dirtyDate).getTime();
      var amount = (0, _index.default)(dirtyAmount);
      return new Date(timestamp + amount);
    }
    module.exports = exports.default;
  }
});

// node_modules/date-fns/subMilliseconds/index.js
var require_subMilliseconds = __commonJS({
  "node_modules/date-fns/subMilliseconds/index.js"(exports, module) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = subMilliseconds;
    var _index = _interopRequireDefault(require_addMilliseconds());
    var _index2 = _interopRequireDefault(require_requiredArgs());
    var _index3 = _interopRequireDefault(require_toInteger());
    function subMilliseconds(dirtyDate, dirtyAmount) {
      (0, _index2.default)(2, arguments);
      var amount = (0, _index3.default)(dirtyAmount);
      return (0, _index.default)(dirtyDate, -amount);
    }
    module.exports = exports.default;
  }
});

// node_modules/date-fns/_lib/getUTCDayOfYear/index.js
var require_getUTCDayOfYear = __commonJS({
  "node_modules/date-fns/_lib/getUTCDayOfYear/index.js"(exports, module) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = getUTCDayOfYear;
    var _index = _interopRequireDefault(require_toDate());
    var _index2 = _interopRequireDefault(require_requiredArgs());
    var MILLISECONDS_IN_DAY = 864e5;
    function getUTCDayOfYear(dirtyDate) {
      (0, _index2.default)(1, arguments);
      var date = (0, _index.default)(dirtyDate);
      var timestamp = date.getTime();
      date.setUTCMonth(0, 1);
      date.setUTCHours(0, 0, 0, 0);
      var startOfYearTimestamp = date.getTime();
      var difference = timestamp - startOfYearTimestamp;
      return Math.floor(difference / MILLISECONDS_IN_DAY) + 1;
    }
    module.exports = exports.default;
  }
});

// node_modules/date-fns/_lib/startOfUTCISOWeek/index.js
var require_startOfUTCISOWeek = __commonJS({
  "node_modules/date-fns/_lib/startOfUTCISOWeek/index.js"(exports, module) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = startOfUTCISOWeek;
    var _index = _interopRequireDefault(require_toDate());
    var _index2 = _interopRequireDefault(require_requiredArgs());
    function startOfUTCISOWeek(dirtyDate) {
      (0, _index2.default)(1, arguments);
      var weekStartsOn = 1;
      var date = (0, _index.default)(dirtyDate);
      var day = date.getUTCDay();
      var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
      date.setUTCDate(date.getUTCDate() - diff);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
    module.exports = exports.default;
  }
});

// node_modules/date-fns/_lib/getUTCISOWeekYear/index.js
var require_getUTCISOWeekYear = __commonJS({
  "node_modules/date-fns/_lib/getUTCISOWeekYear/index.js"(exports, module) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = getUTCISOWeekYear;
    var _index = _interopRequireDefault(require_toDate());
    var _index2 = _interopRequireDefault(require_requiredArgs());
    var _index3 = _interopRequireDefault(require_startOfUTCISOWeek());
    function getUTCISOWeekYear(dirtyDate) {
      (0, _index2.default)(1, arguments);
      var date = (0, _index.default)(dirtyDate);
      var year = date.getUTCFullYear();
      var fourthOfJanuaryOfNextYear = /* @__PURE__ */ new Date(0);
      fourthOfJanuaryOfNextYear.setUTCFullYear(year + 1, 0, 4);
      fourthOfJanuaryOfNextYear.setUTCHours(0, 0, 0, 0);
      var startOfNextYear = (0, _index3.default)(fourthOfJanuaryOfNextYear);
      var fourthOfJanuaryOfThisYear = /* @__PURE__ */ new Date(0);
      fourthOfJanuaryOfThisYear.setUTCFullYear(year, 0, 4);
      fourthOfJanuaryOfThisYear.setUTCHours(0, 0, 0, 0);
      var startOfThisYear = (0, _index3.default)(fourthOfJanuaryOfThisYear);
      if (date.getTime() >= startOfNextYear.getTime()) {
        return year + 1;
      } else if (date.getTime() >= startOfThisYear.getTime()) {
        return year;
      } else {
        return year - 1;
      }
    }
    module.exports = exports.default;
  }
});

// node_modules/date-fns/_lib/startOfUTCISOWeekYear/index.js
var require_startOfUTCISOWeekYear = __commonJS({
  "node_modules/date-fns/_lib/startOfUTCISOWeekYear/index.js"(exports, module) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = startOfUTCISOWeekYear;
    var _index = _interopRequireDefault(require_getUTCISOWeekYear());
    var _index2 = _interopRequireDefault(require_startOfUTCISOWeek());
    var _index3 = _interopRequireDefault(require_requiredArgs());
    function startOfUTCISOWeekYear(dirtyDate) {
      (0, _index3.default)(1, arguments);
      var year = (0, _index.default)(dirtyDate);
      var fourthOfJanuary = /* @__PURE__ */ new Date(0);
      fourthOfJanuary.setUTCFullYear(year, 0, 4);
      fourthOfJanuary.setUTCHours(0, 0, 0, 0);
      var date = (0, _index2.default)(fourthOfJanuary);
      return date;
    }
    module.exports = exports.default;
  }
});

// node_modules/date-fns/_lib/getUTCISOWeek/index.js
var require_getUTCISOWeek = __commonJS({
  "node_modules/date-fns/_lib/getUTCISOWeek/index.js"(exports, module) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = getUTCISOWeek;
    var _index = _interopRequireDefault(require_toDate());
    var _index2 = _interopRequireDefault(require_startOfUTCISOWeek());
    var _index3 = _interopRequireDefault(require_startOfUTCISOWeekYear());
    var _index4 = _interopRequireDefault(require_requiredArgs());
    var MILLISECONDS_IN_WEEK = 6048e5;
    function getUTCISOWeek(dirtyDate) {
      (0, _index4.default)(1, arguments);
      var date = (0, _index.default)(dirtyDate);
      var diff = (0, _index2.default)(date).getTime() - (0, _index3.default)(date).getTime();
      return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
    }
    module.exports = exports.default;
  }
});

// node_modules/date-fns/_lib/defaultOptions/index.js
var require_defaultOptions = __commonJS({
  "node_modules/date-fns/_lib/defaultOptions/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.getDefaultOptions = getDefaultOptions;
    exports.setDefaultOptions = setDefaultOptions;
    var defaultOptions = {};
    function getDefaultOptions() {
      return defaultOptions;
    }
    function setDefaultOptions(newOptions) {
      defaultOptions = newOptions;
    }
  }
});

// node_modules/date-fns/_lib/startOfUTCWeek/index.js
var require_startOfUTCWeek = __commonJS({
  "node_modules/date-fns/_lib/startOfUTCWeek/index.js"(exports, module) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = startOfUTCWeek;
    var _index = _interopRequireDefault(require_toDate());
    var _index2 = _interopRequireDefault(require_requiredArgs());
    var _index3 = _interopRequireDefault(require_toInteger());
    var _index4 = require_defaultOptions();
    function startOfUTCWeek(dirtyDate, options) {
      var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
      (0, _index2.default)(1, arguments);
      var defaultOptions = (0, _index4.getDefaultOptions)();
      var weekStartsOn = (0, _index3.default)((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);
      if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
        throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
      }
      var date = (0, _index.default)(dirtyDate);
      var day = date.getUTCDay();
      var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
      date.setUTCDate(date.getUTCDate() - diff);
      date.setUTCHours(0, 0, 0, 0);
      return date;
    }
    module.exports = exports.default;
  }
});

// node_modules/date-fns/_lib/getUTCWeekYear/index.js
var require_getUTCWeekYear = __commonJS({
  "node_modules/date-fns/_lib/getUTCWeekYear/index.js"(exports, module) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = getUTCWeekYear;
    var _index = _interopRequireDefault(require_toDate());
    var _index2 = _interopRequireDefault(require_requiredArgs());
    var _index3 = _interopRequireDefault(require_startOfUTCWeek());
    var _index4 = _interopRequireDefault(require_toInteger());
    var _index5 = require_defaultOptions();
    function getUTCWeekYear(dirtyDate, options) {
      var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
      (0, _index2.default)(1, arguments);
      var date = (0, _index.default)(dirtyDate);
      var year = date.getUTCFullYear();
      var defaultOptions = (0, _index5.getDefaultOptions)();
      var firstWeekContainsDate = (0, _index4.default)((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
      if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
        throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
      }
      var firstWeekOfNextYear = /* @__PURE__ */ new Date(0);
      firstWeekOfNextYear.setUTCFullYear(year + 1, 0, firstWeekContainsDate);
      firstWeekOfNextYear.setUTCHours(0, 0, 0, 0);
      var startOfNextYear = (0, _index3.default)(firstWeekOfNextYear, options);
      var firstWeekOfThisYear = /* @__PURE__ */ new Date(0);
      firstWeekOfThisYear.setUTCFullYear(year, 0, firstWeekContainsDate);
      firstWeekOfThisYear.setUTCHours(0, 0, 0, 0);
      var startOfThisYear = (0, _index3.default)(firstWeekOfThisYear, options);
      if (date.getTime() >= startOfNextYear.getTime()) {
        return year + 1;
      } else if (date.getTime() >= startOfThisYear.getTime()) {
        return year;
      } else {
        return year - 1;
      }
    }
    module.exports = exports.default;
  }
});

// node_modules/date-fns/_lib/startOfUTCWeekYear/index.js
var require_startOfUTCWeekYear = __commonJS({
  "node_modules/date-fns/_lib/startOfUTCWeekYear/index.js"(exports, module) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = startOfUTCWeekYear;
    var _index = _interopRequireDefault(require_getUTCWeekYear());
    var _index2 = _interopRequireDefault(require_requiredArgs());
    var _index3 = _interopRequireDefault(require_startOfUTCWeek());
    var _index4 = _interopRequireDefault(require_toInteger());
    var _index5 = require_defaultOptions();
    function startOfUTCWeekYear(dirtyDate, options) {
      var _ref, _ref2, _ref3, _options$firstWeekCon, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
      (0, _index2.default)(1, arguments);
      var defaultOptions = (0, _index5.getDefaultOptions)();
      var firstWeekContainsDate = (0, _index4.default)((_ref = (_ref2 = (_ref3 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref !== void 0 ? _ref : 1);
      var year = (0, _index.default)(dirtyDate, options);
      var firstWeek = /* @__PURE__ */ new Date(0);
      firstWeek.setUTCFullYear(year, 0, firstWeekContainsDate);
      firstWeek.setUTCHours(0, 0, 0, 0);
      var date = (0, _index3.default)(firstWeek, options);
      return date;
    }
    module.exports = exports.default;
  }
});

// node_modules/date-fns/_lib/getUTCWeek/index.js
var require_getUTCWeek = __commonJS({
  "node_modules/date-fns/_lib/getUTCWeek/index.js"(exports, module) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = getUTCWeek;
    var _index = _interopRequireDefault(require_toDate());
    var _index2 = _interopRequireDefault(require_startOfUTCWeek());
    var _index3 = _interopRequireDefault(require_startOfUTCWeekYear());
    var _index4 = _interopRequireDefault(require_requiredArgs());
    var MILLISECONDS_IN_WEEK = 6048e5;
    function getUTCWeek(dirtyDate, options) {
      (0, _index4.default)(1, arguments);
      var date = (0, _index.default)(dirtyDate);
      var diff = (0, _index2.default)(date, options).getTime() - (0, _index3.default)(date, options).getTime();
      return Math.round(diff / MILLISECONDS_IN_WEEK) + 1;
    }
    module.exports = exports.default;
  }
});

// node_modules/date-fns/_lib/addLeadingZeros/index.js
var require_addLeadingZeros = __commonJS({
  "node_modules/date-fns/_lib/addLeadingZeros/index.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = addLeadingZeros;
    function addLeadingZeros(number, targetLength) {
      var sign = number < 0 ? "-" : "";
      var output = Math.abs(number).toString();
      while (output.length < targetLength) {
        output = "0" + output;
      }
      return sign + output;
    }
    module.exports = exports.default;
  }
});

// node_modules/date-fns/_lib/format/lightFormatters/index.js
var require_lightFormatters = __commonJS({
  "node_modules/date-fns/_lib/format/lightFormatters/index.js"(exports, module) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _index = _interopRequireDefault(require_addLeadingZeros());
    var formatters = {
      // Year
      y: function y(date, token) {
        var signedYear = date.getUTCFullYear();
        var year = signedYear > 0 ? signedYear : 1 - signedYear;
        return (0, _index.default)(token === "yy" ? year % 100 : year, token.length);
      },
      // Month
      M: function M(date, token) {
        var month = date.getUTCMonth();
        return token === "M" ? String(month + 1) : (0, _index.default)(month + 1, 2);
      },
      // Day of the month
      d: function d(date, token) {
        return (0, _index.default)(date.getUTCDate(), token.length);
      },
      // AM or PM
      a: function a(date, token) {
        var dayPeriodEnumValue = date.getUTCHours() / 12 >= 1 ? "pm" : "am";
        switch (token) {
          case "a":
          case "aa":
            return dayPeriodEnumValue.toUpperCase();
          case "aaa":
            return dayPeriodEnumValue;
          case "aaaaa":
            return dayPeriodEnumValue[0];
          case "aaaa":
          default:
            return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
        }
      },
      // Hour [1-12]
      h: function h(date, token) {
        return (0, _index.default)(date.getUTCHours() % 12 || 12, token.length);
      },
      // Hour [0-23]
      H: function H(date, token) {
        return (0, _index.default)(date.getUTCHours(), token.length);
      },
      // Minute
      m: function m(date, token) {
        return (0, _index.default)(date.getUTCMinutes(), token.length);
      },
      // Second
      s: function s20(date, token) {
        return (0, _index.default)(date.getUTCSeconds(), token.length);
      },
      // Fraction of second
      S: function S(date, token) {
        var numberOfDigits = token.length;
        var milliseconds = date.getUTCMilliseconds();
        var fractionalSeconds = Math.floor(milliseconds * Math.pow(10, numberOfDigits - 3));
        return (0, _index.default)(fractionalSeconds, token.length);
      }
    };
    var _default = formatters;
    exports.default = _default;
    module.exports = exports.default;
  }
});

// node_modules/date-fns/_lib/format/formatters/index.js
var require_formatters = __commonJS({
  "node_modules/date-fns/_lib/format/formatters/index.js"(exports, module) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _index = _interopRequireDefault(require_getUTCDayOfYear());
    var _index2 = _interopRequireDefault(require_getUTCISOWeek());
    var _index3 = _interopRequireDefault(require_getUTCISOWeekYear());
    var _index4 = _interopRequireDefault(require_getUTCWeek());
    var _index5 = _interopRequireDefault(require_getUTCWeekYear());
    var _index6 = _interopRequireDefault(require_addLeadingZeros());
    var _index7 = _interopRequireDefault(require_lightFormatters());
    var dayPeriodEnum = {
      am: "am",
      pm: "pm",
      midnight: "midnight",
      noon: "noon",
      morning: "morning",
      afternoon: "afternoon",
      evening: "evening",
      night: "night"
    };
    var formatters = {
      // Era
      G: function G(date, token, localize) {
        var era = date.getUTCFullYear() > 0 ? 1 : 0;
        switch (token) {
          case "G":
          case "GG":
          case "GGG":
            return localize.era(era, {
              width: "abbreviated"
            });
          case "GGGGG":
            return localize.era(era, {
              width: "narrow"
            });
          case "GGGG":
          default:
            return localize.era(era, {
              width: "wide"
            });
        }
      },
      // Year
      y: function y(date, token, localize) {
        if (token === "yo") {
          var signedYear = date.getUTCFullYear();
          var year = signedYear > 0 ? signedYear : 1 - signedYear;
          return localize.ordinalNumber(year, {
            unit: "year"
          });
        }
        return _index7.default.y(date, token);
      },
      // Local week-numbering year
      Y: function Y(date, token, localize, options) {
        var signedWeekYear = (0, _index5.default)(date, options);
        var weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;
        if (token === "YY") {
          var twoDigitYear = weekYear % 100;
          return (0, _index6.default)(twoDigitYear, 2);
        }
        if (token === "Yo") {
          return localize.ordinalNumber(weekYear, {
            unit: "year"
          });
        }
        return (0, _index6.default)(weekYear, token.length);
      },
      // ISO week-numbering year
      R: function R(date, token) {
        var isoWeekYear = (0, _index3.default)(date);
        return (0, _index6.default)(isoWeekYear, token.length);
      },
      // Extended year. This is a single number designating the year of this calendar system.
      // The main difference between `y` and `u` localizers are B.C. years:
      // | Year | `y` | `u` |
      // |------|-----|-----|
      // | AC 1 |   1 |   1 |
      // | BC 1 |   1 |   0 |
      // | BC 2 |   2 |  -1 |
      // Also `yy` always returns the last two digits of a year,
      // while `uu` pads single digit years to 2 characters and returns other years unchanged.
      u: function u(date, token) {
        var year = date.getUTCFullYear();
        return (0, _index6.default)(year, token.length);
      },
      // Quarter
      Q: function Q(date, token, localize) {
        var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
        switch (token) {
          case "Q":
            return String(quarter);
          case "QQ":
            return (0, _index6.default)(quarter, 2);
          case "Qo":
            return localize.ordinalNumber(quarter, {
              unit: "quarter"
            });
          case "QQQ":
            return localize.quarter(quarter, {
              width: "abbreviated",
              context: "formatting"
            });
          case "QQQQQ":
            return localize.quarter(quarter, {
              width: "narrow",
              context: "formatting"
            });
          case "QQQQ":
          default:
            return localize.quarter(quarter, {
              width: "wide",
              context: "formatting"
            });
        }
      },
      // Stand-alone quarter
      q: function q(date, token, localize) {
        var quarter = Math.ceil((date.getUTCMonth() + 1) / 3);
        switch (token) {
          case "q":
            return String(quarter);
          case "qq":
            return (0, _index6.default)(quarter, 2);
          case "qo":
            return localize.ordinalNumber(quarter, {
              unit: "quarter"
            });
          case "qqq":
            return localize.quarter(quarter, {
              width: "abbreviated",
              context: "standalone"
            });
          case "qqqqq":
            return localize.quarter(quarter, {
              width: "narrow",
              context: "standalone"
            });
          case "qqqq":
          default:
            return localize.quarter(quarter, {
              width: "wide",
              context: "standalone"
            });
        }
      },
      // Month
      M: function M(date, token, localize) {
        var month = date.getUTCMonth();
        switch (token) {
          case "M":
          case "MM":
            return _index7.default.M(date, token);
          case "Mo":
            return localize.ordinalNumber(month + 1, {
              unit: "month"
            });
          case "MMM":
            return localize.month(month, {
              width: "abbreviated",
              context: "formatting"
            });
          case "MMMMM":
            return localize.month(month, {
              width: "narrow",
              context: "formatting"
            });
          case "MMMM":
          default:
            return localize.month(month, {
              width: "wide",
              context: "formatting"
            });
        }
      },
      // Stand-alone month
      L: function L(date, token, localize) {
        var month = date.getUTCMonth();
        switch (token) {
          case "L":
            return String(month + 1);
          case "LL":
            return (0, _index6.default)(month + 1, 2);
          case "Lo":
            return localize.ordinalNumber(month + 1, {
              unit: "month"
            });
          case "LLL":
            return localize.month(month, {
              width: "abbreviated",
              context: "standalone"
            });
          case "LLLLL":
            return localize.month(month, {
              width: "narrow",
              context: "standalone"
            });
          case "LLLL":
          default:
            return localize.month(month, {
              width: "wide",
              context: "standalone"
            });
        }
      },
      // Local week of year
      w: function w(date, token, localize, options) {
        var week = (0, _index4.default)(date, options);
        if (token === "wo") {
          return localize.ordinalNumber(week, {
            unit: "week"
          });
        }
        return (0, _index6.default)(week, token.length);
      },
      // ISO week of year
      I: function I(date, token, localize) {
        var isoWeek = (0, _index2.default)(date);
        if (token === "Io") {
          return localize.ordinalNumber(isoWeek, {
            unit: "week"
          });
        }
        return (0, _index6.default)(isoWeek, token.length);
      },
      // Day of the month
      d: function d(date, token, localize) {
        if (token === "do") {
          return localize.ordinalNumber(date.getUTCDate(), {
            unit: "date"
          });
        }
        return _index7.default.d(date, token);
      },
      // Day of year
      D: function D(date, token, localize) {
        var dayOfYear = (0, _index.default)(date);
        if (token === "Do") {
          return localize.ordinalNumber(dayOfYear, {
            unit: "dayOfYear"
          });
        }
        return (0, _index6.default)(dayOfYear, token.length);
      },
      // Day of week
      E: function E(date, token, localize) {
        var dayOfWeek = date.getUTCDay();
        switch (token) {
          case "E":
          case "EE":
          case "EEE":
            return localize.day(dayOfWeek, {
              width: "abbreviated",
              context: "formatting"
            });
          case "EEEEE":
            return localize.day(dayOfWeek, {
              width: "narrow",
              context: "formatting"
            });
          case "EEEEEE":
            return localize.day(dayOfWeek, {
              width: "short",
              context: "formatting"
            });
          case "EEEE":
          default:
            return localize.day(dayOfWeek, {
              width: "wide",
              context: "formatting"
            });
        }
      },
      // Local day of week
      e: function e(date, token, localize, options) {
        var dayOfWeek = date.getUTCDay();
        var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
        switch (token) {
          case "e":
            return String(localDayOfWeek);
          case "ee":
            return (0, _index6.default)(localDayOfWeek, 2);
          case "eo":
            return localize.ordinalNumber(localDayOfWeek, {
              unit: "day"
            });
          case "eee":
            return localize.day(dayOfWeek, {
              width: "abbreviated",
              context: "formatting"
            });
          case "eeeee":
            return localize.day(dayOfWeek, {
              width: "narrow",
              context: "formatting"
            });
          case "eeeeee":
            return localize.day(dayOfWeek, {
              width: "short",
              context: "formatting"
            });
          case "eeee":
          default:
            return localize.day(dayOfWeek, {
              width: "wide",
              context: "formatting"
            });
        }
      },
      // Stand-alone local day of week
      c: function c(date, token, localize, options) {
        var dayOfWeek = date.getUTCDay();
        var localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
        switch (token) {
          case "c":
            return String(localDayOfWeek);
          case "cc":
            return (0, _index6.default)(localDayOfWeek, token.length);
          case "co":
            return localize.ordinalNumber(localDayOfWeek, {
              unit: "day"
            });
          case "ccc":
            return localize.day(dayOfWeek, {
              width: "abbreviated",
              context: "standalone"
            });
          case "ccccc":
            return localize.day(dayOfWeek, {
              width: "narrow",
              context: "standalone"
            });
          case "cccccc":
            return localize.day(dayOfWeek, {
              width: "short",
              context: "standalone"
            });
          case "cccc":
          default:
            return localize.day(dayOfWeek, {
              width: "wide",
              context: "standalone"
            });
        }
      },
      // ISO day of week
      i: function i(date, token, localize) {
        var dayOfWeek = date.getUTCDay();
        var isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
        switch (token) {
          case "i":
            return String(isoDayOfWeek);
          case "ii":
            return (0, _index6.default)(isoDayOfWeek, token.length);
          case "io":
            return localize.ordinalNumber(isoDayOfWeek, {
              unit: "day"
            });
          case "iii":
            return localize.day(dayOfWeek, {
              width: "abbreviated",
              context: "formatting"
            });
          case "iiiii":
            return localize.day(dayOfWeek, {
              width: "narrow",
              context: "formatting"
            });
          case "iiiiii":
            return localize.day(dayOfWeek, {
              width: "short",
              context: "formatting"
            });
          case "iiii":
          default:
            return localize.day(dayOfWeek, {
              width: "wide",
              context: "formatting"
            });
        }
      },
      // AM or PM
      a: function a(date, token, localize) {
        var hours = date.getUTCHours();
        var dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
        switch (token) {
          case "a":
          case "aa":
            return localize.dayPeriod(dayPeriodEnumValue, {
              width: "abbreviated",
              context: "formatting"
            });
          case "aaa":
            return localize.dayPeriod(dayPeriodEnumValue, {
              width: "abbreviated",
              context: "formatting"
            }).toLowerCase();
          case "aaaaa":
            return localize.dayPeriod(dayPeriodEnumValue, {
              width: "narrow",
              context: "formatting"
            });
          case "aaaa":
          default:
            return localize.dayPeriod(dayPeriodEnumValue, {
              width: "wide",
              context: "formatting"
            });
        }
      },
      // AM, PM, midnight, noon
      b: function b(date, token, localize) {
        var hours = date.getUTCHours();
        var dayPeriodEnumValue;
        if (hours === 12) {
          dayPeriodEnumValue = dayPeriodEnum.noon;
        } else if (hours === 0) {
          dayPeriodEnumValue = dayPeriodEnum.midnight;
        } else {
          dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
        }
        switch (token) {
          case "b":
          case "bb":
            return localize.dayPeriod(dayPeriodEnumValue, {
              width: "abbreviated",
              context: "formatting"
            });
          case "bbb":
            return localize.dayPeriod(dayPeriodEnumValue, {
              width: "abbreviated",
              context: "formatting"
            }).toLowerCase();
          case "bbbbb":
            return localize.dayPeriod(dayPeriodEnumValue, {
              width: "narrow",
              context: "formatting"
            });
          case "bbbb":
          default:
            return localize.dayPeriod(dayPeriodEnumValue, {
              width: "wide",
              context: "formatting"
            });
        }
      },
      // in the morning, in the afternoon, in the evening, at night
      B: function B(date, token, localize) {
        var hours = date.getUTCHours();
        var dayPeriodEnumValue;
        if (hours >= 17) {
          dayPeriodEnumValue = dayPeriodEnum.evening;
        } else if (hours >= 12) {
          dayPeriodEnumValue = dayPeriodEnum.afternoon;
        } else if (hours >= 4) {
          dayPeriodEnumValue = dayPeriodEnum.morning;
        } else {
          dayPeriodEnumValue = dayPeriodEnum.night;
        }
        switch (token) {
          case "B":
          case "BB":
          case "BBB":
            return localize.dayPeriod(dayPeriodEnumValue, {
              width: "abbreviated",
              context: "formatting"
            });
          case "BBBBB":
            return localize.dayPeriod(dayPeriodEnumValue, {
              width: "narrow",
              context: "formatting"
            });
          case "BBBB":
          default:
            return localize.dayPeriod(dayPeriodEnumValue, {
              width: "wide",
              context: "formatting"
            });
        }
      },
      // Hour [1-12]
      h: function h(date, token, localize) {
        if (token === "ho") {
          var hours = date.getUTCHours() % 12;
          if (hours === 0)
            hours = 12;
          return localize.ordinalNumber(hours, {
            unit: "hour"
          });
        }
        return _index7.default.h(date, token);
      },
      // Hour [0-23]
      H: function H(date, token, localize) {
        if (token === "Ho") {
          return localize.ordinalNumber(date.getUTCHours(), {
            unit: "hour"
          });
        }
        return _index7.default.H(date, token);
      },
      // Hour [0-11]
      K: function K(date, token, localize) {
        var hours = date.getUTCHours() % 12;
        if (token === "Ko") {
          return localize.ordinalNumber(hours, {
            unit: "hour"
          });
        }
        return (0, _index6.default)(hours, token.length);
      },
      // Hour [1-24]
      k: function k(date, token, localize) {
        var hours = date.getUTCHours();
        if (hours === 0)
          hours = 24;
        if (token === "ko") {
          return localize.ordinalNumber(hours, {
            unit: "hour"
          });
        }
        return (0, _index6.default)(hours, token.length);
      },
      // Minute
      m: function m(date, token, localize) {
        if (token === "mo") {
          return localize.ordinalNumber(date.getUTCMinutes(), {
            unit: "minute"
          });
        }
        return _index7.default.m(date, token);
      },
      // Second
      s: function s20(date, token, localize) {
        if (token === "so") {
          return localize.ordinalNumber(date.getUTCSeconds(), {
            unit: "second"
          });
        }
        return _index7.default.s(date, token);
      },
      // Fraction of second
      S: function S(date, token) {
        return _index7.default.S(date, token);
      },
      // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
      X: function X(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timezoneOffset = originalDate.getTimezoneOffset();
        if (timezoneOffset === 0) {
          return "Z";
        }
        switch (token) {
          case "X":
            return formatTimezoneWithOptionalMinutes(timezoneOffset);
          case "XXXX":
          case "XX":
            return formatTimezone(timezoneOffset);
          case "XXXXX":
          case "XXX":
          default:
            return formatTimezone(timezoneOffset, ":");
        }
      },
      // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
      x: function x(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timezoneOffset = originalDate.getTimezoneOffset();
        switch (token) {
          case "x":
            return formatTimezoneWithOptionalMinutes(timezoneOffset);
          case "xxxx":
          case "xx":
            return formatTimezone(timezoneOffset);
          case "xxxxx":
          case "xxx":
          default:
            return formatTimezone(timezoneOffset, ":");
        }
      },
      // Timezone (GMT)
      O: function O(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timezoneOffset = originalDate.getTimezoneOffset();
        switch (token) {
          case "O":
          case "OO":
          case "OOO":
            return "GMT" + formatTimezoneShort(timezoneOffset, ":");
          case "OOOO":
          default:
            return "GMT" + formatTimezone(timezoneOffset, ":");
        }
      },
      // Timezone (specific non-location)
      z: function z(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timezoneOffset = originalDate.getTimezoneOffset();
        switch (token) {
          case "z":
          case "zz":
          case "zzz":
            return "GMT" + formatTimezoneShort(timezoneOffset, ":");
          case "zzzz":
          default:
            return "GMT" + formatTimezone(timezoneOffset, ":");
        }
      },
      // Seconds timestamp
      t: function t(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timestamp = Math.floor(originalDate.getTime() / 1e3);
        return (0, _index6.default)(timestamp, token.length);
      },
      // Milliseconds timestamp
      T: function T(date, token, _localize, options) {
        var originalDate = options._originalDate || date;
        var timestamp = originalDate.getTime();
        return (0, _index6.default)(timestamp, token.length);
      }
    };
    function formatTimezoneShort(offset, dirtyDelimiter) {
      var sign = offset > 0 ? "-" : "+";
      var absOffset = Math.abs(offset);
      var hours = Math.floor(absOffset / 60);
      var minutes = absOffset % 60;
      if (minutes === 0) {
        return sign + String(hours);
      }
      var delimiter = dirtyDelimiter || "";
      return sign + String(hours) + delimiter + (0, _index6.default)(minutes, 2);
    }
    function formatTimezoneWithOptionalMinutes(offset, dirtyDelimiter) {
      if (offset % 60 === 0) {
        var sign = offset > 0 ? "-" : "+";
        return sign + (0, _index6.default)(Math.abs(offset) / 60, 2);
      }
      return formatTimezone(offset, dirtyDelimiter);
    }
    function formatTimezone(offset, dirtyDelimiter) {
      var delimiter = dirtyDelimiter || "";
      var sign = offset > 0 ? "-" : "+";
      var absOffset = Math.abs(offset);
      var hours = (0, _index6.default)(Math.floor(absOffset / 60), 2);
      var minutes = (0, _index6.default)(absOffset % 60, 2);
      return sign + hours + delimiter + minutes;
    }
    var _default = formatters;
    exports.default = _default;
    module.exports = exports.default;
  }
});

// node_modules/date-fns/_lib/format/longFormatters/index.js
var require_longFormatters = __commonJS({
  "node_modules/date-fns/_lib/format/longFormatters/index.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var dateLongFormatter = function dateLongFormatter2(pattern, formatLong) {
      switch (pattern) {
        case "P":
          return formatLong.date({
            width: "short"
          });
        case "PP":
          return formatLong.date({
            width: "medium"
          });
        case "PPP":
          return formatLong.date({
            width: "long"
          });
        case "PPPP":
        default:
          return formatLong.date({
            width: "full"
          });
      }
    };
    var timeLongFormatter = function timeLongFormatter2(pattern, formatLong) {
      switch (pattern) {
        case "p":
          return formatLong.time({
            width: "short"
          });
        case "pp":
          return formatLong.time({
            width: "medium"
          });
        case "ppp":
          return formatLong.time({
            width: "long"
          });
        case "pppp":
        default:
          return formatLong.time({
            width: "full"
          });
      }
    };
    var dateTimeLongFormatter = function dateTimeLongFormatter2(pattern, formatLong) {
      var matchResult = pattern.match(/(P+)(p+)?/) || [];
      var datePattern = matchResult[1];
      var timePattern = matchResult[2];
      if (!timePattern) {
        return dateLongFormatter(pattern, formatLong);
      }
      var dateTimeFormat;
      switch (datePattern) {
        case "P":
          dateTimeFormat = formatLong.dateTime({
            width: "short"
          });
          break;
        case "PP":
          dateTimeFormat = formatLong.dateTime({
            width: "medium"
          });
          break;
        case "PPP":
          dateTimeFormat = formatLong.dateTime({
            width: "long"
          });
          break;
        case "PPPP":
        default:
          dateTimeFormat = formatLong.dateTime({
            width: "full"
          });
          break;
      }
      return dateTimeFormat.replace("{{date}}", dateLongFormatter(datePattern, formatLong)).replace("{{time}}", timeLongFormatter(timePattern, formatLong));
    };
    var longFormatters = {
      p: timeLongFormatter,
      P: dateTimeLongFormatter
    };
    var _default = longFormatters;
    exports.default = _default;
    module.exports = exports.default;
  }
});

// node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds/index.js
var require_getTimezoneOffsetInMilliseconds = __commonJS({
  "node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds/index.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = getTimezoneOffsetInMilliseconds;
    function getTimezoneOffsetInMilliseconds(date) {
      var utcDate = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()));
      utcDate.setUTCFullYear(date.getFullYear());
      return date.getTime() - utcDate.getTime();
    }
    module.exports = exports.default;
  }
});

// node_modules/date-fns/_lib/protectedTokens/index.js
var require_protectedTokens = __commonJS({
  "node_modules/date-fns/_lib/protectedTokens/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.isProtectedDayOfYearToken = isProtectedDayOfYearToken;
    exports.isProtectedWeekYearToken = isProtectedWeekYearToken;
    exports.throwProtectedError = throwProtectedError;
    var protectedDayOfYearTokens = ["D", "DD"];
    var protectedWeekYearTokens = ["YY", "YYYY"];
    function isProtectedDayOfYearToken(token) {
      return protectedDayOfYearTokens.indexOf(token) !== -1;
    }
    function isProtectedWeekYearToken(token) {
      return protectedWeekYearTokens.indexOf(token) !== -1;
    }
    function throwProtectedError(token, format2, input) {
      if (token === "YYYY") {
        throw new RangeError("Use `yyyy` instead of `YYYY` (in `".concat(format2, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
      } else if (token === "YY") {
        throw new RangeError("Use `yy` instead of `YY` (in `".concat(format2, "`) for formatting years to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
      } else if (token === "D") {
        throw new RangeError("Use `d` instead of `D` (in `".concat(format2, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
      } else if (token === "DD") {
        throw new RangeError("Use `dd` instead of `DD` (in `".concat(format2, "`) for formatting days of the month to the input `").concat(input, "`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md"));
      }
    }
  }
});

// node_modules/date-fns/locale/en-US/_lib/formatDistance/index.js
var require_formatDistance = __commonJS({
  "node_modules/date-fns/locale/en-US/_lib/formatDistance/index.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var formatDistanceLocale = {
      lessThanXSeconds: {
        one: "less than a second",
        other: "less than {{count}} seconds"
      },
      xSeconds: {
        one: "1 second",
        other: "{{count}} seconds"
      },
      halfAMinute: "half a minute",
      lessThanXMinutes: {
        one: "less than a minute",
        other: "less than {{count}} minutes"
      },
      xMinutes: {
        one: "1 minute",
        other: "{{count}} minutes"
      },
      aboutXHours: {
        one: "about 1 hour",
        other: "about {{count}} hours"
      },
      xHours: {
        one: "1 hour",
        other: "{{count}} hours"
      },
      xDays: {
        one: "1 day",
        other: "{{count}} days"
      },
      aboutXWeeks: {
        one: "about 1 week",
        other: "about {{count}} weeks"
      },
      xWeeks: {
        one: "1 week",
        other: "{{count}} weeks"
      },
      aboutXMonths: {
        one: "about 1 month",
        other: "about {{count}} months"
      },
      xMonths: {
        one: "1 month",
        other: "{{count}} months"
      },
      aboutXYears: {
        one: "about 1 year",
        other: "about {{count}} years"
      },
      xYears: {
        one: "1 year",
        other: "{{count}} years"
      },
      overXYears: {
        one: "over 1 year",
        other: "over {{count}} years"
      },
      almostXYears: {
        one: "almost 1 year",
        other: "almost {{count}} years"
      }
    };
    var formatDistance = function formatDistance2(token, count, options) {
      var result;
      var tokenValue = formatDistanceLocale[token];
      if (typeof tokenValue === "string") {
        result = tokenValue;
      } else if (count === 1) {
        result = tokenValue.one;
      } else {
        result = tokenValue.other.replace("{{count}}", count.toString());
      }
      if (options !== null && options !== void 0 && options.addSuffix) {
        if (options.comparison && options.comparison > 0) {
          return "in " + result;
        } else {
          return result + " ago";
        }
      }
      return result;
    };
    var _default = formatDistance;
    exports.default = _default;
    module.exports = exports.default;
  }
});

// node_modules/date-fns/locale/_lib/buildFormatLongFn/index.js
var require_buildFormatLongFn = __commonJS({
  "node_modules/date-fns/locale/_lib/buildFormatLongFn/index.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = buildFormatLongFn;
    function buildFormatLongFn(args) {
      return function() {
        var options = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
        var width = options.width ? String(options.width) : args.defaultWidth;
        var format2 = args.formats[width] || args.formats[args.defaultWidth];
        return format2;
      };
    }
    module.exports = exports.default;
  }
});

// node_modules/date-fns/locale/en-US/_lib/formatLong/index.js
var require_formatLong = __commonJS({
  "node_modules/date-fns/locale/en-US/_lib/formatLong/index.js"(exports, module) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _index = _interopRequireDefault(require_buildFormatLongFn());
    var dateFormats = {
      full: "EEEE, MMMM do, y",
      long: "MMMM do, y",
      medium: "MMM d, y",
      short: "MM/dd/yyyy"
    };
    var timeFormats = {
      full: "h:mm:ss a zzzz",
      long: "h:mm:ss a z",
      medium: "h:mm:ss a",
      short: "h:mm a"
    };
    var dateTimeFormats = {
      full: "{{date}} 'at' {{time}}",
      long: "{{date}} 'at' {{time}}",
      medium: "{{date}}, {{time}}",
      short: "{{date}}, {{time}}"
    };
    var formatLong = {
      date: (0, _index.default)({
        formats: dateFormats,
        defaultWidth: "full"
      }),
      time: (0, _index.default)({
        formats: timeFormats,
        defaultWidth: "full"
      }),
      dateTime: (0, _index.default)({
        formats: dateTimeFormats,
        defaultWidth: "full"
      })
    };
    var _default = formatLong;
    exports.default = _default;
    module.exports = exports.default;
  }
});

// node_modules/date-fns/locale/en-US/_lib/formatRelative/index.js
var require_formatRelative = __commonJS({
  "node_modules/date-fns/locale/en-US/_lib/formatRelative/index.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var formatRelativeLocale = {
      lastWeek: "'last' eeee 'at' p",
      yesterday: "'yesterday at' p",
      today: "'today at' p",
      tomorrow: "'tomorrow at' p",
      nextWeek: "eeee 'at' p",
      other: "P"
    };
    var formatRelative = function formatRelative2(token, _date, _baseDate, _options) {
      return formatRelativeLocale[token];
    };
    var _default = formatRelative;
    exports.default = _default;
    module.exports = exports.default;
  }
});

// node_modules/date-fns/locale/_lib/buildLocalizeFn/index.js
var require_buildLocalizeFn = __commonJS({
  "node_modules/date-fns/locale/_lib/buildLocalizeFn/index.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = buildLocalizeFn;
    function buildLocalizeFn(args) {
      return function(dirtyIndex, options) {
        var context = options !== null && options !== void 0 && options.context ? String(options.context) : "standalone";
        var valuesArray;
        if (context === "formatting" && args.formattingValues) {
          var defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
          var width = options !== null && options !== void 0 && options.width ? String(options.width) : defaultWidth;
          valuesArray = args.formattingValues[width] || args.formattingValues[defaultWidth];
        } else {
          var _defaultWidth = args.defaultWidth;
          var _width = options !== null && options !== void 0 && options.width ? String(options.width) : args.defaultWidth;
          valuesArray = args.values[_width] || args.values[_defaultWidth];
        }
        var index = args.argumentCallback ? args.argumentCallback(dirtyIndex) : dirtyIndex;
        return valuesArray[index];
      };
    }
    module.exports = exports.default;
  }
});

// node_modules/date-fns/locale/en-US/_lib/localize/index.js
var require_localize = __commonJS({
  "node_modules/date-fns/locale/en-US/_lib/localize/index.js"(exports, module) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _index = _interopRequireDefault(require_buildLocalizeFn());
    var eraValues = {
      narrow: ["B", "A"],
      abbreviated: ["BC", "AD"],
      wide: ["Before Christ", "Anno Domini"]
    };
    var quarterValues = {
      narrow: ["1", "2", "3", "4"],
      abbreviated: ["Q1", "Q2", "Q3", "Q4"],
      wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
    };
    var monthValues = {
      narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
      abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
      wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    };
    var dayValues = {
      narrow: ["S", "M", "T", "W", "T", "F", "S"],
      short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    };
    var dayPeriodValues = {
      narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
      },
      abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
      },
      wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "morning",
        afternoon: "afternoon",
        evening: "evening",
        night: "night"
      }
    };
    var formattingDayPeriodValues = {
      narrow: {
        am: "a",
        pm: "p",
        midnight: "mi",
        noon: "n",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
      },
      abbreviated: {
        am: "AM",
        pm: "PM",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
      },
      wide: {
        am: "a.m.",
        pm: "p.m.",
        midnight: "midnight",
        noon: "noon",
        morning: "in the morning",
        afternoon: "in the afternoon",
        evening: "in the evening",
        night: "at night"
      }
    };
    var ordinalNumber = function ordinalNumber2(dirtyNumber, _options) {
      var number = Number(dirtyNumber);
      var rem100 = number % 100;
      if (rem100 > 20 || rem100 < 10) {
        switch (rem100 % 10) {
          case 1:
            return number + "st";
          case 2:
            return number + "nd";
          case 3:
            return number + "rd";
        }
      }
      return number + "th";
    };
    var localize = {
      ordinalNumber,
      era: (0, _index.default)({
        values: eraValues,
        defaultWidth: "wide"
      }),
      quarter: (0, _index.default)({
        values: quarterValues,
        defaultWidth: "wide",
        argumentCallback: function argumentCallback(quarter) {
          return quarter - 1;
        }
      }),
      month: (0, _index.default)({
        values: monthValues,
        defaultWidth: "wide"
      }),
      day: (0, _index.default)({
        values: dayValues,
        defaultWidth: "wide"
      }),
      dayPeriod: (0, _index.default)({
        values: dayPeriodValues,
        defaultWidth: "wide",
        formattingValues: formattingDayPeriodValues,
        defaultFormattingWidth: "wide"
      })
    };
    var _default = localize;
    exports.default = _default;
    module.exports = exports.default;
  }
});

// node_modules/date-fns/locale/_lib/buildMatchFn/index.js
var require_buildMatchFn = __commonJS({
  "node_modules/date-fns/locale/_lib/buildMatchFn/index.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = buildMatchFn;
    function buildMatchFn(args) {
      return function(string) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var width = options.width;
        var matchPattern = width && args.matchPatterns[width] || args.matchPatterns[args.defaultMatchWidth];
        var matchResult = string.match(matchPattern);
        if (!matchResult) {
          return null;
        }
        var matchedString = matchResult[0];
        var parsePatterns = width && args.parsePatterns[width] || args.parsePatterns[args.defaultParseWidth];
        var key = Array.isArray(parsePatterns) ? findIndex(parsePatterns, function(pattern) {
          return pattern.test(matchedString);
        }) : findKey(parsePatterns, function(pattern) {
          return pattern.test(matchedString);
        });
        var value;
        value = args.valueCallback ? args.valueCallback(key) : key;
        value = options.valueCallback ? options.valueCallback(value) : value;
        var rest = string.slice(matchedString.length);
        return {
          value,
          rest
        };
      };
    }
    function findKey(object, predicate) {
      for (var key in object) {
        if (object.hasOwnProperty(key) && predicate(object[key])) {
          return key;
        }
      }
      return void 0;
    }
    function findIndex(array, predicate) {
      for (var key = 0; key < array.length; key++) {
        if (predicate(array[key])) {
          return key;
        }
      }
      return void 0;
    }
    module.exports = exports.default;
  }
});

// node_modules/date-fns/locale/_lib/buildMatchPatternFn/index.js
var require_buildMatchPatternFn = __commonJS({
  "node_modules/date-fns/locale/_lib/buildMatchPatternFn/index.js"(exports, module) {
    "use strict";
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = buildMatchPatternFn;
    function buildMatchPatternFn(args) {
      return function(string) {
        var options = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        var matchResult = string.match(args.matchPattern);
        if (!matchResult)
          return null;
        var matchedString = matchResult[0];
        var parseResult = string.match(args.parsePattern);
        if (!parseResult)
          return null;
        var value = args.valueCallback ? args.valueCallback(parseResult[0]) : parseResult[0];
        value = options.valueCallback ? options.valueCallback(value) : value;
        var rest = string.slice(matchedString.length);
        return {
          value,
          rest
        };
      };
    }
    module.exports = exports.default;
  }
});

// node_modules/date-fns/locale/en-US/_lib/match/index.js
var require_match = __commonJS({
  "node_modules/date-fns/locale/en-US/_lib/match/index.js"(exports, module) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _index = _interopRequireDefault(require_buildMatchFn());
    var _index2 = _interopRequireDefault(require_buildMatchPatternFn());
    var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
    var parseOrdinalNumberPattern = /\d+/i;
    var matchEraPatterns = {
      narrow: /^(b|a)/i,
      abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
      wide: /^(before christ|before common era|anno domini|common era)/i
    };
    var parseEraPatterns = {
      any: [/^b/i, /^(a|c)/i]
    };
    var matchQuarterPatterns = {
      narrow: /^[1234]/i,
      abbreviated: /^q[1234]/i,
      wide: /^[1234](th|st|nd|rd)? quarter/i
    };
    var parseQuarterPatterns = {
      any: [/1/i, /2/i, /3/i, /4/i]
    };
    var matchMonthPatterns = {
      narrow: /^[jfmasond]/i,
      abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
      wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
    };
    var parseMonthPatterns = {
      narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
      any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
    };
    var matchDayPatterns = {
      narrow: /^[smtwf]/i,
      short: /^(su|mo|tu|we|th|fr|sa)/i,
      abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
      wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
    };
    var parseDayPatterns = {
      narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
      any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
    };
    var matchDayPeriodPatterns = {
      narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
      any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
    };
    var parseDayPeriodPatterns = {
      any: {
        am: /^a/i,
        pm: /^p/i,
        midnight: /^mi/i,
        noon: /^no/i,
        morning: /morning/i,
        afternoon: /afternoon/i,
        evening: /evening/i,
        night: /night/i
      }
    };
    var match = {
      ordinalNumber: (0, _index2.default)({
        matchPattern: matchOrdinalNumberPattern,
        parsePattern: parseOrdinalNumberPattern,
        valueCallback: function valueCallback(value) {
          return parseInt(value, 10);
        }
      }),
      era: (0, _index.default)({
        matchPatterns: matchEraPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseEraPatterns,
        defaultParseWidth: "any"
      }),
      quarter: (0, _index.default)({
        matchPatterns: matchQuarterPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseQuarterPatterns,
        defaultParseWidth: "any",
        valueCallback: function valueCallback(index) {
          return index + 1;
        }
      }),
      month: (0, _index.default)({
        matchPatterns: matchMonthPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseMonthPatterns,
        defaultParseWidth: "any"
      }),
      day: (0, _index.default)({
        matchPatterns: matchDayPatterns,
        defaultMatchWidth: "wide",
        parsePatterns: parseDayPatterns,
        defaultParseWidth: "any"
      }),
      dayPeriod: (0, _index.default)({
        matchPatterns: matchDayPeriodPatterns,
        defaultMatchWidth: "any",
        parsePatterns: parseDayPeriodPatterns,
        defaultParseWidth: "any"
      })
    };
    var _default = match;
    exports.default = _default;
    module.exports = exports.default;
  }
});

// node_modules/date-fns/locale/en-US/index.js
var require_en_US = __commonJS({
  "node_modules/date-fns/locale/en-US/index.js"(exports, module) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _index = _interopRequireDefault(require_formatDistance());
    var _index2 = _interopRequireDefault(require_formatLong());
    var _index3 = _interopRequireDefault(require_formatRelative());
    var _index4 = _interopRequireDefault(require_localize());
    var _index5 = _interopRequireDefault(require_match());
    var locale = {
      code: "en-US",
      formatDistance: _index.default,
      formatLong: _index2.default,
      formatRelative: _index3.default,
      localize: _index4.default,
      match: _index5.default,
      options: {
        weekStartsOn: 0,
        firstWeekContainsDate: 1
      }
    };
    var _default = locale;
    exports.default = _default;
    module.exports = exports.default;
  }
});

// node_modules/date-fns/_lib/defaultLocale/index.js
var require_defaultLocale = __commonJS({
  "node_modules/date-fns/_lib/defaultLocale/index.js"(exports, module) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var _index = _interopRequireDefault(require_en_US());
    var _default = _index.default;
    exports.default = _default;
    module.exports = exports.default;
  }
});

// node_modules/date-fns/format/index.js
var require_format = __commonJS({
  "node_modules/date-fns/format/index.js"(exports, module) {
    "use strict";
    var _interopRequireDefault = require_interopRequireDefault().default;
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = format2;
    var _index = _interopRequireDefault(require_isValid());
    var _index2 = _interopRequireDefault(require_subMilliseconds());
    var _index3 = _interopRequireDefault(require_toDate());
    var _index4 = _interopRequireDefault(require_formatters());
    var _index5 = _interopRequireDefault(require_longFormatters());
    var _index6 = _interopRequireDefault(require_getTimezoneOffsetInMilliseconds());
    var _index7 = require_protectedTokens();
    var _index8 = _interopRequireDefault(require_toInteger());
    var _index9 = _interopRequireDefault(require_requiredArgs());
    var _index10 = require_defaultOptions();
    var _index11 = _interopRequireDefault(require_defaultLocale());
    var formattingTokensRegExp = /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;
    var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
    var escapedStringRegExp = /^'([^]*?)'?$/;
    var doubleQuoteRegExp = /''/g;
    var unescapedLatinCharacterRegExp = /[a-zA-Z]/;
    function format2(dirtyDate, dirtyFormatStr, options) {
      var _ref, _options$locale, _ref2, _ref3, _ref4, _options$firstWeekCon, _options$locale2, _options$locale2$opti, _defaultOptions$local, _defaultOptions$local2, _ref5, _ref6, _ref7, _options$weekStartsOn, _options$locale3, _options$locale3$opti, _defaultOptions$local3, _defaultOptions$local4;
      (0, _index9.default)(2, arguments);
      var formatStr = String(dirtyFormatStr);
      var defaultOptions = (0, _index10.getDefaultOptions)();
      var locale = (_ref = (_options$locale = options === null || options === void 0 ? void 0 : options.locale) !== null && _options$locale !== void 0 ? _options$locale : defaultOptions.locale) !== null && _ref !== void 0 ? _ref : _index11.default;
      var firstWeekContainsDate = (0, _index8.default)((_ref2 = (_ref3 = (_ref4 = (_options$firstWeekCon = options === null || options === void 0 ? void 0 : options.firstWeekContainsDate) !== null && _options$firstWeekCon !== void 0 ? _options$firstWeekCon : options === null || options === void 0 ? void 0 : (_options$locale2 = options.locale) === null || _options$locale2 === void 0 ? void 0 : (_options$locale2$opti = _options$locale2.options) === null || _options$locale2$opti === void 0 ? void 0 : _options$locale2$opti.firstWeekContainsDate) !== null && _ref4 !== void 0 ? _ref4 : defaultOptions.firstWeekContainsDate) !== null && _ref3 !== void 0 ? _ref3 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.firstWeekContainsDate) !== null && _ref2 !== void 0 ? _ref2 : 1);
      if (!(firstWeekContainsDate >= 1 && firstWeekContainsDate <= 7)) {
        throw new RangeError("firstWeekContainsDate must be between 1 and 7 inclusively");
      }
      var weekStartsOn = (0, _index8.default)((_ref5 = (_ref6 = (_ref7 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale3 = options.locale) === null || _options$locale3 === void 0 ? void 0 : (_options$locale3$opti = _options$locale3.options) === null || _options$locale3$opti === void 0 ? void 0 : _options$locale3$opti.weekStartsOn) !== null && _ref7 !== void 0 ? _ref7 : defaultOptions.weekStartsOn) !== null && _ref6 !== void 0 ? _ref6 : (_defaultOptions$local3 = defaultOptions.locale) === null || _defaultOptions$local3 === void 0 ? void 0 : (_defaultOptions$local4 = _defaultOptions$local3.options) === null || _defaultOptions$local4 === void 0 ? void 0 : _defaultOptions$local4.weekStartsOn) !== null && _ref5 !== void 0 ? _ref5 : 0);
      if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
        throw new RangeError("weekStartsOn must be between 0 and 6 inclusively");
      }
      if (!locale.localize) {
        throw new RangeError("locale must contain localize property");
      }
      if (!locale.formatLong) {
        throw new RangeError("locale must contain formatLong property");
      }
      var originalDate = (0, _index3.default)(dirtyDate);
      if (!(0, _index.default)(originalDate)) {
        throw new RangeError("Invalid time value");
      }
      var timezoneOffset = (0, _index6.default)(originalDate);
      var utcDate = (0, _index2.default)(originalDate, timezoneOffset);
      var formatterOptions = {
        firstWeekContainsDate,
        weekStartsOn,
        locale,
        _originalDate: originalDate
      };
      var result = formatStr.match(longFormattingTokensRegExp).map(function(substring) {
        var firstCharacter = substring[0];
        if (firstCharacter === "p" || firstCharacter === "P") {
          var longFormatter = _index5.default[firstCharacter];
          return longFormatter(substring, locale.formatLong);
        }
        return substring;
      }).join("").match(formattingTokensRegExp).map(function(substring) {
        if (substring === "''") {
          return "'";
        }
        var firstCharacter = substring[0];
        if (firstCharacter === "'") {
          return cleanEscapedString(substring);
        }
        var formatter = _index4.default[firstCharacter];
        if (formatter) {
          if (!(options !== null && options !== void 0 && options.useAdditionalWeekYearTokens) && (0, _index7.isProtectedWeekYearToken)(substring)) {
            (0, _index7.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
          }
          if (!(options !== null && options !== void 0 && options.useAdditionalDayOfYearTokens) && (0, _index7.isProtectedDayOfYearToken)(substring)) {
            (0, _index7.throwProtectedError)(substring, dirtyFormatStr, String(dirtyDate));
          }
          return formatter(utcDate, substring, locale.localize, formatterOptions);
        }
        if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
          throw new RangeError("Format string contains an unescaped latin alphabet character `" + firstCharacter + "`");
        }
        return substring;
      }).join("");
      return result;
    }
    function cleanEscapedString(input) {
      var matched = input.match(escapedStringRegExp);
      if (!matched) {
        return input;
      }
      return matched[1].replace(doubleQuoteRegExp, "'");
    }
    module.exports = exports.default;
  }
});

// node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js
var require_use_sync_external_store_shim_development = __commonJS({
  "node_modules/use-sync-external-store/cjs/use-sync-external-store-shim.development.js"(exports) {
    "use strict";
    if (true) {
      (function() {
        "use strict";
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
        }
        var React2 = require_react();
        var ReactSharedInternals = React2.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
        function error(format2) {
          {
            {
              for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                args[_key2 - 1] = arguments[_key2];
              }
              printWarning("error", format2, args);
            }
          }
        }
        function printWarning(level, format2, args) {
          {
            var ReactDebugCurrentFrame = ReactSharedInternals.ReactDebugCurrentFrame;
            var stack = ReactDebugCurrentFrame.getStackAddendum();
            if (stack !== "") {
              format2 += "%s";
              args = args.concat([stack]);
            }
            var argsWithFormat = args.map(function(item) {
              return String(item);
            });
            argsWithFormat.unshift("Warning: " + format2);
            Function.prototype.apply.call(console[level], console, argsWithFormat);
          }
        }
        function is(x, y) {
          return x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y;
        }
        var objectIs = typeof Object.is === "function" ? Object.is : is;
        var useState4 = React2.useState, useEffect4 = React2.useEffect, useLayoutEffect2 = React2.useLayoutEffect, useDebugValue2 = React2.useDebugValue;
        var didWarnOld18Alpha = false;
        var didWarnUncachedGetSnapshot = false;
        function useSyncExternalStore2(subscribe, getSnapshot, getServerSnapshot) {
          {
            if (!didWarnOld18Alpha) {
              if (React2.startTransition !== void 0) {
                didWarnOld18Alpha = true;
                error("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release.");
              }
            }
          }
          var value = getSnapshot();
          {
            if (!didWarnUncachedGetSnapshot) {
              var cachedValue = getSnapshot();
              if (!objectIs(value, cachedValue)) {
                error("The result of getSnapshot should be cached to avoid an infinite loop");
                didWarnUncachedGetSnapshot = true;
              }
            }
          }
          var _useState = useState4({
            inst: {
              value,
              getSnapshot
            }
          }), inst = _useState[0].inst, forceUpdate = _useState[1];
          useLayoutEffect2(function() {
            inst.value = value;
            inst.getSnapshot = getSnapshot;
            if (checkIfSnapshotChanged(inst)) {
              forceUpdate({
                inst
              });
            }
          }, [subscribe, value, getSnapshot]);
          useEffect4(function() {
            if (checkIfSnapshotChanged(inst)) {
              forceUpdate({
                inst
              });
            }
            var handleStoreChange = function() {
              if (checkIfSnapshotChanged(inst)) {
                forceUpdate({
                  inst
                });
              }
            };
            return subscribe(handleStoreChange);
          }, [subscribe]);
          useDebugValue2(value);
          return value;
        }
        function checkIfSnapshotChanged(inst) {
          var latestGetSnapshot = inst.getSnapshot;
          var prevValue = inst.value;
          try {
            var nextValue = latestGetSnapshot();
            return !objectIs(prevValue, nextValue);
          } catch (error2) {
            return true;
          }
        }
        function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
          return getSnapshot();
        }
        var canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
        var isServerEnvironment = !canUseDOM;
        var shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore2;
        var useSyncExternalStore$2 = React2.useSyncExternalStore !== void 0 ? React2.useSyncExternalStore : shim;
        exports.useSyncExternalStore = useSyncExternalStore$2;
        if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== "undefined" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop === "function") {
          __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
        }
      })();
    }
  }
});

// node_modules/use-sync-external-store/shim/index.js
var require_shim = __commonJS({
  "node_modules/use-sync-external-store/shim/index.js"(exports, module) {
    "use strict";
    if (false) {
      module.exports = null;
    } else {
      module.exports = require_use_sync_external_store_shim_development();
    }
  }
});

// node_modules/react-tweet/dist/twitter-theme/icons/verified.js
var import_jsx_runtime = __toESM(require_jsx_runtime(), 1);
import s from "/Users/thesohamghadge/INERITANCE01/frontend/frontend/node_modules/react-tweet/dist/twitter-theme/icons/icons.module.css";
var Verified = () => (0, import_jsx_runtime.jsx)("svg", {
  viewBox: "0 0 24 24",
  "aria-label": "Verified account",
  role: "img",
  className: s.verified,
  children: (0, import_jsx_runtime.jsx)("g", {
    children: (0, import_jsx_runtime.jsx)("path", {
      d: "M22.25 12c0-1.43-.88-2.67-2.19-3.34.46-1.39.2-2.9-.81-3.91s-2.52-1.27-3.91-.81c-.66-1.31-1.91-2.19-3.34-2.19s-2.67.88-3.33 2.19c-1.4-.46-2.91-.2-3.92.81s-1.26 2.52-.8 3.91c-1.31.67-2.2 1.91-2.2 3.34s.89 2.67 2.2 3.34c-.46 1.39-.21 2.9.8 3.91s2.52 1.26 3.91.81c.67 1.31 1.91 2.19 3.34 2.19s2.68-.88 3.34-2.19c1.39.45 2.9.2 3.91-.81s1.27-2.52.81-3.91c1.31-.67 2.19-1.91 2.19-3.34zm-11.71 4.2L6.8 12.46l1.41-1.42 2.26 2.26 4.8-5.23 1.47 1.36-6.2 6.77z"
    })
  })
});

// node_modules/react-tweet/dist/twitter-theme/icons/verified-business.js
var import_jsx_runtime2 = __toESM(require_jsx_runtime(), 1);
import s2 from "/Users/thesohamghadge/INERITANCE01/frontend/frontend/node_modules/react-tweet/dist/twitter-theme/icons/icons.module.css";
var VerifiedBusiness = () => (0, import_jsx_runtime2.jsx)("svg", {
  viewBox: "0 0 22 22",
  "aria-label": "Verified account",
  role: "img",
  className: s2.verified,
  children: (0, import_jsx_runtime2.jsxs)("g", {
    children: [
      (0, import_jsx_runtime2.jsxs)("linearGradient", {
        gradientUnits: "userSpaceOnUse",
        id: "0-a",
        x1: "4.411",
        x2: "18.083",
        y1: "2.495",
        y2: "21.508",
        children: [
          (0, import_jsx_runtime2.jsx)("stop", {
            offset: "0",
            stopColor: "#f4e72a"
          }),
          (0, import_jsx_runtime2.jsx)("stop", {
            offset: ".539",
            stopColor: "#cd8105"
          }),
          (0, import_jsx_runtime2.jsx)("stop", {
            offset: ".68",
            stopColor: "#cb7b00"
          }),
          (0, import_jsx_runtime2.jsx)("stop", {
            offset: "1",
            stopColor: "#f4ec26"
          }),
          (0, import_jsx_runtime2.jsx)("stop", {
            offset: "1",
            stopColor: "#f4e72a"
          })
        ]
      }),
      (0, import_jsx_runtime2.jsxs)("linearGradient", {
        gradientUnits: "userSpaceOnUse",
        id: "0-b",
        x1: "5.355",
        x2: "16.361",
        y1: "3.395",
        y2: "19.133",
        children: [
          (0, import_jsx_runtime2.jsx)("stop", {
            offset: "0",
            stopColor: "#f9e87f"
          }),
          (0, import_jsx_runtime2.jsx)("stop", {
            offset: ".406",
            stopColor: "#e2b719"
          }),
          (0, import_jsx_runtime2.jsx)("stop", {
            offset: ".989",
            stopColor: "#e2b719"
          })
        ]
      }),
      (0, import_jsx_runtime2.jsxs)("g", {
        clipRule: "evenodd",
        fillRule: "evenodd",
        children: [
          (0, import_jsx_runtime2.jsx)("path", {
            d: "M13.324 3.848L11 1.6 8.676 3.848l-3.201-.453-.559 3.184L2.06 8.095 3.48 11l-1.42 2.904 2.856 1.516.559 3.184 3.201-.452L11 20.4l2.324-2.248 3.201.452.559-3.184 2.856-1.516L18.52 11l1.42-2.905-2.856-1.516-.559-3.184zm-7.09 7.575l3.428 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z",
            fill: "url(#0-a)"
          }),
          (0, import_jsx_runtime2.jsx)("path", {
            d: "M13.101 4.533L11 2.5 8.899 4.533l-2.895-.41-.505 2.88-2.583 1.37L4.2 11l-1.284 2.627 2.583 1.37.505 2.88 2.895-.41L11 19.5l2.101-2.033 2.895.41.505-2.88 2.583-1.37L17.8 11l1.284-2.627-2.583-1.37-.505-2.88zm-6.868 6.89l3.429 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z",
            fill: "url(#0-b)"
          }),
          (0, import_jsx_runtime2.jsx)("path", {
            d: "M6.233 11.423l3.429 3.428 5.65-6.17.038-.033-.005 1.398-5.683 6.206-3.429-3.429-.003-1.405.005.003z",
            fill: "#d18800"
          })
        ]
      })
    ]
  })
});

// node_modules/react-tweet/dist/twitter-theme/icons/verified-government.js
var import_jsx_runtime3 = __toESM(require_jsx_runtime(), 1);
import s3 from "/Users/thesohamghadge/INERITANCE01/frontend/frontend/node_modules/react-tweet/dist/twitter-theme/icons/icons.module.css";
var VerifiedGovernment = () => (0, import_jsx_runtime3.jsx)("svg", {
  viewBox: "0 0 22 22",
  "aria-label": "Verified account",
  role: "img",
  className: s3.verified,
  children: (0, import_jsx_runtime3.jsx)("g", {
    children: (0, import_jsx_runtime3.jsx)("path", {
      clipRule: "evenodd",
      d: "M12.05 2.056c-.568-.608-1.532-.608-2.1 0l-1.393 1.49c-.284.303-.685.47-1.1.455L5.42 3.932c-.832-.028-1.514.654-1.486 1.486l.069 2.039c.014.415-.152.816-.456 1.1l-1.49 1.392c-.608.568-.608 1.533 0 2.101l1.49 1.393c.304.284.47.684.456 1.1l-.07 2.038c-.027.832.655 1.514 1.487 1.486l2.038-.069c.415-.014.816.152 1.1.455l1.392 1.49c.569.609 1.533.609 2.102 0l1.393-1.49c.283-.303.684-.47 1.099-.455l2.038.069c.832.028 1.515-.654 1.486-1.486L18 14.542c-.015-.415.152-.815.455-1.099l1.49-1.393c.608-.568.608-1.533 0-2.101l-1.49-1.393c-.303-.283-.47-.684-.455-1.1l.068-2.038c.029-.832-.654-1.514-1.486-1.486l-2.038.07c-.415.013-.816-.153-1.1-.456zm-5.817 9.367l3.429 3.428 5.683-6.206-1.347-1.247-4.4 4.795-2.072-2.072z",
      fillRule: "evenodd"
    })
  })
});

// node_modules/react-tweet/dist/twitter-theme/embedded-tweet.js
var import_jsx_runtime23 = __toESM(require_jsx_runtime(), 1);

// node_modules/react-tweet/dist/twitter-theme/tweet-container.js
var import_jsx_runtime4 = __toESM(require_jsx_runtime(), 1);
init_clsx();
import s4 from "/Users/thesohamghadge/INERITANCE01/frontend/frontend/node_modules/react-tweet/dist/twitter-theme/tweet-container.module.css";
import "/Users/thesohamghadge/INERITANCE01/frontend/frontend/node_modules/react-tweet/dist/twitter-theme/theme.css";
var TweetContainer = ({ className, children }) => (0, import_jsx_runtime4.jsx)("div", {
  className: clsx_default("react-tweet-theme", s4.root, className),
  children: (0, import_jsx_runtime4.jsx)("article", {
    className: s4.article,
    children
  })
});

// node_modules/react-tweet/dist/twitter-theme/tweet-header.js
var import_jsx_runtime7 = __toESM(require_jsx_runtime(), 1);
init_clsx();

// node_modules/react-tweet/dist/twitter-theme/avatar-img.js
var import_jsx_runtime5 = __toESM(require_jsx_runtime(), 1);
var AvatarImg = (props) => (0, import_jsx_runtime5.jsx)("img", {
  ...props
});

// node_modules/react-tweet/dist/twitter-theme/tweet-header.js
import s6 from "/Users/thesohamghadge/INERITANCE01/frontend/frontend/node_modules/react-tweet/dist/twitter-theme/tweet-header.module.css";

// node_modules/react-tweet/dist/twitter-theme/verified-badge.js
var import_jsx_runtime6 = __toESM(require_jsx_runtime(), 1);
init_clsx();
import s5 from "/Users/thesohamghadge/INERITANCE01/frontend/frontend/node_modules/react-tweet/dist/twitter-theme/verified-badge.module.css";
var VerifiedBadge = ({ user, className }) => {
  const verified = user.verified || user.is_blue_verified || user.verified_type;
  let icon = (0, import_jsx_runtime6.jsx)(Verified, {});
  let iconClassName = s5.verifiedBlue;
  if (verified) {
    if (!user.is_blue_verified) {
      iconClassName = s5.verifiedOld;
    }
    switch (user.verified_type) {
      case "Government":
        icon = (0, import_jsx_runtime6.jsx)(VerifiedGovernment, {});
        iconClassName = s5.verifiedGovernment;
        break;
      case "Business":
        icon = (0, import_jsx_runtime6.jsx)(VerifiedBusiness, {});
        iconClassName = null;
        break;
    }
  }
  return verified ? (0, import_jsx_runtime6.jsx)("div", {
    className: clsx_default(className, iconClassName),
    children: icon
  }) : null;
};

// node_modules/react-tweet/dist/twitter-theme/tweet-header.js
var TweetHeader = ({ tweet, components }) => {
  var _components_AvatarImg;
  const Img = (_components_AvatarImg = components == null ? void 0 : components.AvatarImg) != null ? _components_AvatarImg : AvatarImg;
  const { user } = tweet;
  return (0, import_jsx_runtime7.jsxs)("div", {
    className: s6.header,
    children: [
      (0, import_jsx_runtime7.jsxs)("a", {
        href: tweet.url,
        className: s6.avatar,
        target: "_blank",
        rel: "noopener noreferrer",
        children: [
          (0, import_jsx_runtime7.jsx)("div", {
            className: clsx_default(s6.avatarOverflow, user.profile_image_shape === "Square" && s6.avatarSquare),
            children: (0, import_jsx_runtime7.jsx)(Img, {
              src: user.profile_image_url_https,
              alt: user.name,
              width: 48,
              height: 48
            })
          }),
          (0, import_jsx_runtime7.jsx)("div", {
            className: s6.avatarOverflow,
            children: (0, import_jsx_runtime7.jsx)("div", {
              className: s6.avatarShadow
            })
          })
        ]
      }),
      (0, import_jsx_runtime7.jsxs)("div", {
        className: s6.author,
        children: [
          (0, import_jsx_runtime7.jsxs)("a", {
            href: tweet.url,
            className: s6.authorLink,
            target: "_blank",
            rel: "noopener noreferrer",
            children: [
              (0, import_jsx_runtime7.jsx)("div", {
                className: s6.authorLinkText,
                children: (0, import_jsx_runtime7.jsx)("span", {
                  title: user.name,
                  children: user.name
                })
              }),
              (0, import_jsx_runtime7.jsx)(VerifiedBadge, {
                user,
                className: s6.authorVerified
              })
            ]
          }),
          (0, import_jsx_runtime7.jsxs)("div", {
            className: s6.authorMeta,
            children: [
              (0, import_jsx_runtime7.jsx)("a", {
                href: tweet.url,
                className: s6.username,
                target: "_blank",
                rel: "noopener noreferrer",
                children: (0, import_jsx_runtime7.jsxs)("span", {
                  title: `@${user.screen_name}`,
                  children: [
                    "@",
                    user.screen_name
                  ]
                })
              }),
              (0, import_jsx_runtime7.jsxs)("div", {
                className: s6.authorFollow,
                children: [
                  (0, import_jsx_runtime7.jsx)("span", {
                    className: s6.separator,
                    children: "·"
                  }),
                  (0, import_jsx_runtime7.jsx)("a", {
                    href: user.follow_url,
                    className: s6.follow,
                    target: "_blank",
                    rel: "noopener noreferrer",
                    children: "Follow"
                  })
                ]
              })
            ]
          })
        ]
      }),
      (0, import_jsx_runtime7.jsx)("a", {
        href: tweet.url,
        className: s6.brand,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": "View on Twitter",
        children: (0, import_jsx_runtime7.jsx)("svg", {
          viewBox: "0 0 24 24",
          "aria-hidden": "true",
          className: s6.twitterIcon,
          children: (0, import_jsx_runtime7.jsx)("g", {
            children: (0, import_jsx_runtime7.jsx)("path", {
              d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
            })
          })
        })
      })
    ]
  });
};

// node_modules/react-tweet/dist/twitter-theme/tweet-in-reply-to.js
var import_jsx_runtime8 = __toESM(require_jsx_runtime(), 1);
import s7 from "/Users/thesohamghadge/INERITANCE01/frontend/frontend/node_modules/react-tweet/dist/twitter-theme/tweet-in-reply-to.module.css";
var TweetInReplyTo = ({ tweet }) => (0, import_jsx_runtime8.jsxs)("a", {
  href: tweet.in_reply_to_url,
  className: s7.root,
  target: "_blank",
  rel: "noopener noreferrer",
  children: [
    "Replying to @",
    tweet.in_reply_to_screen_name
  ]
});

// node_modules/react-tweet/dist/twitter-theme/tweet-body.js
var import_jsx_runtime10 = __toESM(require_jsx_runtime(), 1);

// node_modules/react-tweet/dist/twitter-theme/tweet-link.js
var import_jsx_runtime9 = __toESM(require_jsx_runtime(), 1);
import s8 from "/Users/thesohamghadge/INERITANCE01/frontend/frontend/node_modules/react-tweet/dist/twitter-theme/tweet-link.module.css";
var TweetLink = ({ href, children }) => (0, import_jsx_runtime9.jsx)("a", {
  href,
  className: s8.root,
  target: "_blank",
  rel: "noopener noreferrer",
  children
});

// node_modules/react-tweet/dist/twitter-theme/tweet-body.js
import s9 from "/Users/thesohamghadge/INERITANCE01/frontend/frontend/node_modules/react-tweet/dist/twitter-theme/tweet-body.module.css";
var TweetBody = ({ tweet }) => (0, import_jsx_runtime10.jsx)("p", {
  className: s9.root,
  children: tweet.entities.map((item, i) => {
    switch (item.type) {
      case "hashtag":
      case "mention":
      case "url":
      case "symbol":
        return (0, import_jsx_runtime10.jsx)(TweetLink, {
          href: item.href,
          children: item.text
        }, i);
      case "media":
        return;
      default:
        return (0, import_jsx_runtime10.jsx)("span", {
          dangerouslySetInnerHTML: {
            __html: item.text
          }
        }, i);
    }
  })
});

// node_modules/react-tweet/dist/twitter-theme/tweet-media.js
var import_jsx_runtime13 = __toESM(require_jsx_runtime(), 1);
var import_react2 = __toESM(require_react(), 1);
init_clsx();

// node_modules/react-tweet/dist/utils.js
var getTweetUrl = (tweet) => `https://twitter.com/${tweet.user.screen_name}/status/${tweet.id_str}`;
var getUserUrl = (usernameOrTweet) => `https://twitter.com/${typeof usernameOrTweet === "string" ? usernameOrTweet : usernameOrTweet.user.screen_name}`;
var getLikeUrl = (tweet) => `https://twitter.com/intent/like?tweet_id=${tweet.id_str}`;
var getReplyUrl = (tweet) => `https://twitter.com/intent/tweet?in_reply_to=${tweet.id_str}`;
var getFollowUrl = (tweet) => `https://twitter.com/intent/follow?screen_name=${tweet.user.screen_name}`;
var getHashtagUrl = (hashtag) => `https://twitter.com/hashtag/${hashtag.text}`;
var getSymbolUrl = (symbol) => `https://twitter.com/search?q=%24${symbol.text}`;
var getInReplyToUrl = (tweet) => `https://twitter.com/${tweet.in_reply_to_screen_name}/status/${tweet.in_reply_to_status_id_str}`;
var getMediaUrl = (media, size) => {
  const url = new URL(media.media_url_https);
  const extension = url.pathname.split(".").pop();
  if (!extension)
    return media.media_url_https;
  url.pathname = url.pathname.replace(`.${extension}`, "");
  url.searchParams.set("format", extension);
  url.searchParams.set("name", size);
  return url.toString();
};
var getMp4Videos = (media) => {
  const { variants } = media.video_info;
  const sortedMp4Videos = variants.filter((vid) => vid.content_type === "video/mp4").sort((a, b) => {
    var _b_bitrate, _a_bitrate;
    return ((_b_bitrate = b.bitrate) != null ? _b_bitrate : 0) - ((_a_bitrate = a.bitrate) != null ? _a_bitrate : 0);
  });
  return sortedMp4Videos;
};
var getMp4Video = (media) => {
  const mp4Videos = getMp4Videos(media);
  return mp4Videos.length > 1 ? mp4Videos[1] : mp4Videos[0];
};
var formatNumber = (n) => {
  if (n > 999999)
    return `${(n / 1e6).toFixed(1)}M`;
  if (n > 999)
    return `${(n / 1e3).toFixed(1)}K`;
  return n.toString();
};
function getEntities(tweet) {
  const textMap = Array.from(tweet.text);
  const result = [
    {
      indices: tweet.display_text_range,
      type: "text"
    }
  ];
  addEntities(result, "hashtag", tweet.entities.hashtags);
  addEntities(result, "mention", tweet.entities.user_mentions);
  addEntities(result, "url", tweet.entities.urls);
  addEntities(result, "symbol", tweet.entities.symbols);
  if (tweet.entities.media) {
    addEntities(result, "media", tweet.entities.media);
  }
  fixRange(tweet, result);
  return result.map((entity) => {
    const text = textMap.slice(entity.indices[0], entity.indices[1]).join("");
    switch (entity.type) {
      case "hashtag":
        return Object.assign(entity, {
          href: getHashtagUrl(entity),
          text
        });
      case "mention":
        return Object.assign(entity, {
          href: getUserUrl(entity.screen_name),
          text
        });
      case "url":
      case "media":
        return Object.assign(entity, {
          href: entity.expanded_url,
          text: entity.display_url
        });
      case "symbol":
        return Object.assign(entity, {
          href: getSymbolUrl(entity),
          text
        });
      default:
        return Object.assign(entity, {
          text
        });
    }
  });
}
function addEntities(result, type, entities) {
  for (const entity of entities) {
    for (const [i, item] of result.entries()) {
      if (item.indices[0] > entity.indices[0] || item.indices[1] < entity.indices[1]) {
        continue;
      }
      const items = [
        {
          ...entity,
          type
        }
      ];
      if (item.indices[0] < entity.indices[0]) {
        items.unshift({
          indices: [
            item.indices[0],
            entity.indices[0]
          ],
          type: "text"
        });
      }
      if (item.indices[1] > entity.indices[1]) {
        items.push({
          indices: [
            entity.indices[1],
            item.indices[1]
          ],
          type: "text"
        });
      }
      result.splice(i, 1, ...items);
      break;
    }
  }
}
function fixRange(tweet, entities) {
  if (tweet.entities.media && tweet.entities.media[0].indices[0] < tweet.display_text_range[1]) {
    tweet.display_text_range[1] = tweet.entities.media[0].indices[0];
  }
  const lastEntity = entities.at(-1);
  if (lastEntity && lastEntity.indices[1] > tweet.display_text_range[1]) {
    lastEntity.indices[1] = tweet.display_text_range[1];
  }
}
var enrichTweet = (tweet) => ({
  ...tweet,
  url: getTweetUrl(tweet),
  user: {
    ...tweet.user,
    url: getUserUrl(tweet),
    follow_url: getFollowUrl(tweet)
  },
  like_url: getLikeUrl(tweet),
  reply_url: getReplyUrl(tweet),
  in_reply_to_url: tweet.in_reply_to_screen_name ? getInReplyToUrl(tweet) : void 0,
  entities: getEntities(tweet),
  quoted_tweet: tweet.quoted_tweet ? {
    ...tweet.quoted_tweet,
    url: getTweetUrl(tweet.quoted_tweet),
    entities: getEntities(tweet.quoted_tweet)
  } : void 0
});

// node_modules/react-tweet/dist/twitter-theme/tweet-media-video.js
var import_jsx_runtime11 = __toESM(require_jsx_runtime(), 1);
var import_react = __toESM(require_react(), 1);
init_clsx();
import mediaStyles from "/Users/thesohamghadge/INERITANCE01/frontend/frontend/node_modules/react-tweet/dist/twitter-theme/tweet-media.module.css";
import s10 from "/Users/thesohamghadge/INERITANCE01/frontend/frontend/node_modules/react-tweet/dist/twitter-theme/tweet-media-video.module.css";
var TweetMediaVideo = ({ tweet, media }) => {
  const [playButton, setPlayButton] = (0, import_react.useState)(true);
  const [isPlaying, setIsPlaying] = (0, import_react.useState)(false);
  const [ended, setEnded] = (0, import_react.useState)(false);
  const mp4Video = getMp4Video(media);
  let timeout = 0;
  return (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, {
    children: [
      (0, import_jsx_runtime11.jsx)("video", {
        className: mediaStyles.image,
        poster: getMediaUrl(media, "small"),
        controls: !playButton,
        muted: true,
        preload: "metadata",
        tabIndex: playButton ? -1 : 0,
        onPlay: () => {
          if (timeout)
            window.clearTimeout(timeout);
          if (!isPlaying)
            setIsPlaying(true);
          if (ended)
            setEnded(false);
        },
        onPause: () => {
          if (timeout)
            window.clearTimeout(timeout);
          timeout = window.setTimeout(() => {
            if (isPlaying)
              setIsPlaying(false);
            timeout = 0;
          }, 100);
        },
        onEnded: () => {
          setEnded(true);
        },
        children: (0, import_jsx_runtime11.jsx)("source", {
          src: mp4Video.url,
          type: mp4Video.content_type
        })
      }),
      playButton && (0, import_jsx_runtime11.jsx)("button", {
        type: "button",
        className: s10.videoButton,
        "aria-label": "View video on Twitter",
        onClick: (e) => {
          const video = e.currentTarget.previousSibling;
          e.preventDefault();
          setPlayButton(false);
          setIsPlaying(true);
          video.play();
          video.focus();
        },
        children: (0, import_jsx_runtime11.jsx)("svg", {
          viewBox: "0 0 24 24",
          className: s10.videoButtonIcon,
          "aria-hidden": "true",
          children: (0, import_jsx_runtime11.jsx)("g", {
            children: (0, import_jsx_runtime11.jsx)("path", {
              d: "M21 12L4 2v20l17-10z"
            })
          })
        })
      }),
      !isPlaying && !ended && (0, import_jsx_runtime11.jsx)("div", {
        className: s10.watchOnTwitter,
        children: (0, import_jsx_runtime11.jsx)("a", {
          href: tweet.url,
          className: s10.anchor,
          target: "_blank",
          rel: "noopener noreferrer",
          children: playButton ? "Watch on Twitter" : "Continue watching on Twitter"
        })
      }),
      ended && (0, import_jsx_runtime11.jsx)("a", {
        href: tweet.url,
        className: clsx_default(s10.anchor, s10.viewReplies),
        target: "_blank",
        rel: "noopener noreferrer",
        children: "View replies"
      })
    ]
  });
};

// node_modules/react-tweet/dist/twitter-theme/media-img.js
var import_jsx_runtime12 = __toESM(require_jsx_runtime(), 1);
var MediaImg = (props) => (0, import_jsx_runtime12.jsx)("img", {
  ...props
});

// node_modules/react-tweet/dist/twitter-theme/tweet-media.js
import s11 from "/Users/thesohamghadge/INERITANCE01/frontend/frontend/node_modules/react-tweet/dist/twitter-theme/tweet-media.module.css";
var getSkeletonStyle = (media, itemCount) => {
  let paddingBottom = 56.25;
  if (itemCount === 1)
    paddingBottom = 100 / media.original_info.width * media.original_info.height;
  if (itemCount === 2)
    paddingBottom = paddingBottom * 2;
  return {
    width: media.type === "photo" ? void 0 : "unset",
    paddingBottom: `${paddingBottom}%`
  };
};
var TweetMedia = ({ tweet, components, quoted }) => {
  var _tweet_mediaDetails, _tweet_mediaDetails1;
  var _tweet_mediaDetails_length;
  const length = (_tweet_mediaDetails_length = (_tweet_mediaDetails = tweet.mediaDetails) == null ? void 0 : _tweet_mediaDetails.length) != null ? _tweet_mediaDetails_length : 0;
  var _components_MediaImg;
  const Img = (_components_MediaImg = components == null ? void 0 : components.MediaImg) != null ? _components_MediaImg : MediaImg;
  return (0, import_jsx_runtime13.jsx)("div", {
    className: clsx_default(s11.root, !quoted && s11.rounded),
    children: (0, import_jsx_runtime13.jsx)("div", {
      className: clsx_default(s11.mediaWrapper, length > 1 && s11.grid2Columns, length === 3 && s11.grid3, length > 4 && s11.grid2x2),
      children: (_tweet_mediaDetails1 = tweet.mediaDetails) == null ? void 0 : _tweet_mediaDetails1.map((media) => (0, import_jsx_runtime13.jsx)(import_react2.Fragment, {
        children: media.type === "photo" ? (0, import_jsx_runtime13.jsxs)("a", {
          href: tweet.url,
          className: clsx_default(s11.mediaContainer, s11.mediaLink),
          target: "_blank",
          rel: "noopener noreferrer",
          children: [
            (0, import_jsx_runtime13.jsx)("div", {
              className: s11.skeleton,
              style: getSkeletonStyle(media, length)
            }),
            (0, import_jsx_runtime13.jsx)(Img, {
              src: getMediaUrl(media, "small"),
              alt: media.ext_alt_text || "Image",
              className: s11.image,
              draggable: true
            })
          ]
        }, media.media_url_https) : (0, import_jsx_runtime13.jsxs)("div", {
          className: s11.mediaContainer,
          children: [
            (0, import_jsx_runtime13.jsx)("div", {
              className: s11.skeleton,
              style: getSkeletonStyle(media, length)
            }),
            (0, import_jsx_runtime13.jsx)(TweetMediaVideo, {
              tweet,
              media
            })
          ]
        }, media.media_url_https)
      }, media.media_url_https))
    })
  });
};

// node_modules/react-tweet/dist/twitter-theme/tweet-info.js
var import_jsx_runtime15 = __toESM(require_jsx_runtime(), 1);

// node_modules/react-tweet/dist/twitter-theme/tweet-info-created-at.js
var import_jsx_runtime14 = __toESM(require_jsx_runtime(), 1);
var import_format = __toESM(require_format(), 1);

// node_modules/react-tweet/dist/hooks.js
var import_react5 = __toESM(require_react(), 1);

// node_modules/swr/core/dist/index.mjs
var import_react4 = __toESM(require_react(), 1);
var import_shim = __toESM(require_shim(), 1);

// node_modules/swr/_internal/dist/index.mjs
var import_react3 = __toESM(require_react(), 1);
var noop = () => {
};
var UNDEFINED = (
  /*#__NOINLINE__*/
  noop()
);
var OBJECT = Object;
var isUndefined = (v) => v === UNDEFINED;
var isFunction = (v) => typeof v == "function";
var mergeObjects = (a, b) => ({
  ...a,
  ...b
});
var isPromiseLike = (x) => isFunction(x.then);
var table = /* @__PURE__ */ new WeakMap();
var counter = 0;
var stableHash = (arg) => {
  const type = typeof arg;
  const constructor = arg && arg.constructor;
  const isDate = constructor == Date;
  let result;
  let index;
  if (OBJECT(arg) === arg && !isDate && constructor != RegExp) {
    result = table.get(arg);
    if (result)
      return result;
    result = ++counter + "~";
    table.set(arg, result);
    if (constructor == Array) {
      result = "@";
      for (index = 0; index < arg.length; index++) {
        result += stableHash(arg[index]) + ",";
      }
      table.set(arg, result);
    }
    if (constructor == OBJECT) {
      result = "#";
      const keys = OBJECT.keys(arg).sort();
      while (!isUndefined(index = keys.pop())) {
        if (!isUndefined(arg[index])) {
          result += index + ":" + stableHash(arg[index]) + ",";
        }
      }
      table.set(arg, result);
    }
  } else {
    result = isDate ? arg.toJSON() : type == "symbol" ? arg.toString() : type == "string" ? JSON.stringify(arg) : "" + arg;
  }
  return result;
};
var SWRGlobalState = /* @__PURE__ */ new WeakMap();
var EMPTY_CACHE = {};
var INITIAL_CACHE = {};
var STR_UNDEFINED = "undefined";
var isWindowDefined = typeof window != STR_UNDEFINED;
var isDocumentDefined = typeof document != STR_UNDEFINED;
var hasRequestAnimationFrame = () => isWindowDefined && typeof window["requestAnimationFrame"] != STR_UNDEFINED;
var createCacheHelper = (cache2, key) => {
  const state = SWRGlobalState.get(cache2);
  return [
    // Getter
    () => !isUndefined(key) && cache2.get(key) || EMPTY_CACHE,
    // Setter
    (info) => {
      if (!isUndefined(key)) {
        const prev = cache2.get(key);
        if (!(key in INITIAL_CACHE)) {
          INITIAL_CACHE[key] = prev;
        }
        state[5](key, mergeObjects(prev, info), prev || EMPTY_CACHE);
      }
    },
    // Subscriber
    state[6],
    // Get server cache snapshot
    () => {
      if (!isUndefined(key)) {
        if (key in INITIAL_CACHE)
          return INITIAL_CACHE[key];
      }
      return !isUndefined(key) && cache2.get(key) || EMPTY_CACHE;
    }
  ];
};
var online = true;
var isOnline = () => online;
var [onWindowEvent, offWindowEvent] = isWindowDefined && window.addEventListener ? [
  window.addEventListener.bind(window),
  window.removeEventListener.bind(window)
] : [
  noop,
  noop
];
var isVisible = () => {
  const visibilityState = isDocumentDefined && document.visibilityState;
  return isUndefined(visibilityState) || visibilityState !== "hidden";
};
var initFocus = (callback) => {
  if (isDocumentDefined) {
    document.addEventListener("visibilitychange", callback);
  }
  onWindowEvent("focus", callback);
  return () => {
    if (isDocumentDefined) {
      document.removeEventListener("visibilitychange", callback);
    }
    offWindowEvent("focus", callback);
  };
};
var initReconnect = (callback) => {
  const onOnline = () => {
    online = true;
    callback();
  };
  const onOffline = () => {
    online = false;
  };
  onWindowEvent("online", onOnline);
  onWindowEvent("offline", onOffline);
  return () => {
    offWindowEvent("online", onOnline);
    offWindowEvent("offline", onOffline);
  };
};
var preset = {
  isOnline,
  isVisible
};
var defaultConfigOptions = {
  initFocus,
  initReconnect
};
var IS_REACT_LEGACY = !import_react3.default.useId;
var IS_SERVER = !isWindowDefined || "Deno" in window;
var rAF = (f) => hasRequestAnimationFrame() ? window["requestAnimationFrame"](f) : setTimeout(f, 1);
var useIsomorphicLayoutEffect = IS_SERVER ? import_react3.useEffect : import_react3.useLayoutEffect;
var navigatorConnection = typeof navigator !== "undefined" && navigator.connection;
var slowConnection = !IS_SERVER && navigatorConnection && ([
  "slow-2g",
  "2g"
].includes(navigatorConnection.effectiveType) || navigatorConnection.saveData);
var serialize = (key) => {
  if (isFunction(key)) {
    try {
      key = key();
    } catch (err) {
      key = "";
    }
  }
  const args = key;
  key = typeof key == "string" ? key : (Array.isArray(key) ? key.length : key) ? stableHash(key) : "";
  return [
    key,
    args
  ];
};
var __timestamp = 0;
var getTimestamp = () => ++__timestamp;
var FOCUS_EVENT = 0;
var RECONNECT_EVENT = 1;
var MUTATE_EVENT = 2;
var ERROR_REVALIDATE_EVENT = 3;
var events = {
  __proto__: null,
  ERROR_REVALIDATE_EVENT,
  FOCUS_EVENT,
  MUTATE_EVENT,
  RECONNECT_EVENT
};
async function internalMutate(...args) {
  const [cache2, _key, _data, _opts] = args;
  const options = mergeObjects({
    populateCache: true,
    throwOnError: true
  }, typeof _opts === "boolean" ? {
    revalidate: _opts
  } : _opts || {});
  let populateCache = options.populateCache;
  const rollbackOnErrorOption = options.rollbackOnError;
  let optimisticData = options.optimisticData;
  const revalidate = options.revalidate !== false;
  const rollbackOnError = (error) => {
    return typeof rollbackOnErrorOption === "function" ? rollbackOnErrorOption(error) : rollbackOnErrorOption !== false;
  };
  const throwOnError = options.throwOnError;
  if (isFunction(_key)) {
    const keyFilter = _key;
    const matchedKeys = [];
    const it = cache2.keys();
    for (const key of it) {
      if (
        // Skip the special useSWRInfinite and useSWRSubscription keys.
        !/^\$(inf|sub)\$/.test(key) && keyFilter(cache2.get(key)._k)
      ) {
        matchedKeys.push(key);
      }
    }
    return Promise.all(matchedKeys.map(mutateByKey));
  }
  return mutateByKey(_key);
  async function mutateByKey(_k) {
    const [key] = serialize(_k);
    if (!key)
      return;
    const [get, set] = createCacheHelper(cache2, key);
    const [EVENT_REVALIDATORS, MUTATION, FETCH, PRELOAD] = SWRGlobalState.get(cache2);
    const startRevalidate = () => {
      const revalidators = EVENT_REVALIDATORS[key];
      if (revalidate) {
        delete FETCH[key];
        delete PRELOAD[key];
        if (revalidators && revalidators[0]) {
          return revalidators[0](MUTATE_EVENT).then(() => get().data);
        }
      }
      return get().data;
    };
    if (args.length < 3) {
      return startRevalidate();
    }
    let data = _data;
    let error;
    const beforeMutationTs = getTimestamp();
    MUTATION[key] = [
      beforeMutationTs,
      0
    ];
    const hasOptimisticData = !isUndefined(optimisticData);
    const state = get();
    const displayedData = state.data;
    const currentData = state._c;
    const committedData = isUndefined(currentData) ? displayedData : currentData;
    if (hasOptimisticData) {
      optimisticData = isFunction(optimisticData) ? optimisticData(committedData, displayedData) : optimisticData;
      set({
        data: optimisticData,
        _c: committedData
      });
    }
    if (isFunction(data)) {
      try {
        data = data(committedData);
      } catch (err) {
        error = err;
      }
    }
    if (data && isPromiseLike(data)) {
      data = await data.catch((err) => {
        error = err;
      });
      if (beforeMutationTs !== MUTATION[key][0]) {
        if (error)
          throw error;
        return data;
      } else if (error && hasOptimisticData && rollbackOnError(error)) {
        populateCache = true;
        set({
          data: committedData,
          _c: UNDEFINED
        });
      }
    }
    if (populateCache) {
      if (!error) {
        if (isFunction(populateCache)) {
          const populateCachedData = populateCache(data, committedData);
          set({
            data: populateCachedData,
            error: UNDEFINED,
            _c: UNDEFINED
          });
        } else {
          set({
            data,
            error: UNDEFINED,
            _c: UNDEFINED
          });
        }
      }
    }
    MUTATION[key][1] = getTimestamp();
    Promise.resolve(startRevalidate()).then(() => {
      set({
        _c: UNDEFINED
      });
    });
    if (error) {
      if (throwOnError)
        throw error;
      return;
    }
    return data;
  }
}
var revalidateAllKeys = (revalidators, type) => {
  for (const key in revalidators) {
    if (revalidators[key][0])
      revalidators[key][0](type);
  }
};
var initCache = (provider, options) => {
  if (!SWRGlobalState.has(provider)) {
    const opts = mergeObjects(defaultConfigOptions, options);
    const EVENT_REVALIDATORS = {};
    const mutate2 = internalMutate.bind(UNDEFINED, provider);
    let unmount = noop;
    const subscriptions = {};
    const subscribe = (key, callback) => {
      const subs = subscriptions[key] || [];
      subscriptions[key] = subs;
      subs.push(callback);
      return () => subs.splice(subs.indexOf(callback), 1);
    };
    const setter = (key, value, prev) => {
      provider.set(key, value);
      const subs = subscriptions[key];
      if (subs) {
        for (const fn of subs) {
          fn(value, prev);
        }
      }
    };
    const initProvider = () => {
      if (!SWRGlobalState.has(provider)) {
        SWRGlobalState.set(provider, [
          EVENT_REVALIDATORS,
          {},
          {},
          {},
          mutate2,
          setter,
          subscribe
        ]);
        if (!IS_SERVER) {
          const releaseFocus = opts.initFocus(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, FOCUS_EVENT)));
          const releaseReconnect = opts.initReconnect(setTimeout.bind(UNDEFINED, revalidateAllKeys.bind(UNDEFINED, EVENT_REVALIDATORS, RECONNECT_EVENT)));
          unmount = () => {
            releaseFocus && releaseFocus();
            releaseReconnect && releaseReconnect();
            SWRGlobalState.delete(provider);
          };
        }
      }
    };
    initProvider();
    return [
      provider,
      mutate2,
      initProvider,
      unmount
    ];
  }
  return [
    provider,
    SWRGlobalState.get(provider)[4]
  ];
};
var onErrorRetry = (_, __, config, revalidate, opts) => {
  const maxRetryCount = config.errorRetryCount;
  const currentRetryCount = opts.retryCount;
  const timeout = ~~((Math.random() + 0.5) * (1 << (currentRetryCount < 8 ? currentRetryCount : 8))) * config.errorRetryInterval;
  if (!isUndefined(maxRetryCount) && currentRetryCount > maxRetryCount) {
    return;
  }
  setTimeout(revalidate, timeout, opts);
};
var compare = (currentData, newData) => stableHash(currentData) == stableHash(newData);
var [cache, mutate] = initCache(/* @__PURE__ */ new Map());
var defaultConfig = mergeObjects(
  {
    // events
    onLoadingSlow: noop,
    onSuccess: noop,
    onError: noop,
    onErrorRetry,
    onDiscarded: noop,
    // switches
    revalidateOnFocus: true,
    revalidateOnReconnect: true,
    revalidateIfStale: true,
    shouldRetryOnError: true,
    // timeouts
    errorRetryInterval: slowConnection ? 1e4 : 5e3,
    focusThrottleInterval: 5 * 1e3,
    dedupingInterval: 2 * 1e3,
    loadingTimeout: slowConnection ? 5e3 : 3e3,
    // providers
    compare,
    isPaused: () => false,
    cache,
    mutate,
    fallback: {}
  },
  // use web preset by default
  preset
);
var mergeConfigs = (a, b) => {
  const v = mergeObjects(a, b);
  if (b) {
    const { use: u1, fallback: f1 } = a;
    const { use: u2, fallback: f2 } = b;
    if (u1 && u2) {
      v.use = u1.concat(u2);
    }
    if (f1 && f2) {
      v.fallback = mergeObjects(f1, f2);
    }
  }
  return v;
};
var SWRConfigContext = (0, import_react3.createContext)({});
var SWRConfig = (props) => {
  const { value } = props;
  const parentConfig = (0, import_react3.useContext)(SWRConfigContext);
  const isFunctionalConfig = isFunction(value);
  const config = (0, import_react3.useMemo)(() => isFunctionalConfig ? value(parentConfig) : value, [
    isFunctionalConfig,
    parentConfig,
    value
  ]);
  const extendedConfig = (0, import_react3.useMemo)(() => isFunctionalConfig ? config : mergeConfigs(parentConfig, config), [
    isFunctionalConfig,
    parentConfig,
    config
  ]);
  const provider = config && config.provider;
  const cacheContextRef = (0, import_react3.useRef)(UNDEFINED);
  if (provider && !cacheContextRef.current) {
    cacheContextRef.current = initCache(provider(extendedConfig.cache || cache), config);
  }
  const cacheContext = cacheContextRef.current;
  if (cacheContext) {
    extendedConfig.cache = cacheContext[0];
    extendedConfig.mutate = cacheContext[1];
  }
  useIsomorphicLayoutEffect(() => {
    if (cacheContext) {
      cacheContext[2] && cacheContext[2]();
      return cacheContext[3];
    }
  }, []);
  return (0, import_react3.createElement)(SWRConfigContext.Provider, mergeObjects(props, {
    value: extendedConfig
  }));
};
var INFINITE_PREFIX = "$inf$";
var enableDevtools = isWindowDefined && window.__SWR_DEVTOOLS_USE__;
var use = enableDevtools ? window.__SWR_DEVTOOLS_USE__ : [];
var setupDevTools = () => {
  if (enableDevtools) {
    window.__SWR_DEVTOOLS_REACT__ = import_react3.default;
  }
};
var normalize = (args) => {
  return isFunction(args[1]) ? [
    args[0],
    args[1],
    args[2] || {}
  ] : [
    args[0],
    null,
    (args[1] === null ? args[2] : args[1]) || {}
  ];
};
var useSWRConfig = () => {
  return mergeObjects(defaultConfig, (0, import_react3.useContext)(SWRConfigContext));
};
var middleware = (useSWRNext) => (key_, fetcher_, config) => {
  const fetcher2 = fetcher_ && ((...args) => {
    const [key] = serialize(key_);
    const [, , , PRELOAD] = SWRGlobalState.get(cache);
    if (key.startsWith(INFINITE_PREFIX)) {
      return fetcher_(...args);
    }
    const req = PRELOAD[key];
    if (isUndefined(req))
      return fetcher_(...args);
    delete PRELOAD[key];
    return req;
  });
  return useSWRNext(key_, fetcher2, config);
};
var BUILT_IN_MIDDLEWARE = use.concat(middleware);
var withArgs = (hook) => {
  return function useSWRArgs(...args) {
    const fallbackConfig = useSWRConfig();
    const [key, fn, _config] = normalize(args);
    const config = mergeConfigs(fallbackConfig, _config);
    let next = hook;
    const { use: use3 } = config;
    const middleware2 = (use3 || []).concat(BUILT_IN_MIDDLEWARE);
    for (let i = middleware2.length; i--; ) {
      next = middleware2[i](next);
    }
    return next(key, fn || config.fetcher || null, config);
  };
};
var subscribeCallback = (key, callbacks, callback) => {
  const keyedRevalidators = callbacks[key] || (callbacks[key] = []);
  keyedRevalidators.push(callback);
  return () => {
    const index = keyedRevalidators.indexOf(callback);
    if (index >= 0) {
      keyedRevalidators[index] = keyedRevalidators[keyedRevalidators.length - 1];
      keyedRevalidators.pop();
    }
  };
};
setupDevTools();

// node_modules/swr/core/dist/index.mjs
var use2 = import_react4.default.use || ((promise) => {
  if (promise.status === "pending") {
    throw promise;
  } else if (promise.status === "fulfilled") {
    return promise.value;
  } else if (promise.status === "rejected") {
    throw promise.reason;
  } else {
    promise.status = "pending";
    promise.then((v) => {
      promise.status = "fulfilled";
      promise.value = v;
    }, (e) => {
      promise.status = "rejected";
      promise.reason = e;
    });
    throw promise;
  }
});
var WITH_DEDUPE = {
  dedupe: true
};
var useSWRHandler = (_key, fetcher2, config) => {
  const { cache: cache2, compare: compare2, suspense, fallbackData, revalidateOnMount, revalidateIfStale, refreshInterval, refreshWhenHidden, refreshWhenOffline, keepPreviousData } = config;
  const [EVENT_REVALIDATORS, MUTATION, FETCH, PRELOAD] = SWRGlobalState.get(cache2);
  const [key, fnArg] = serialize(_key);
  const initialMountedRef = (0, import_react4.useRef)(false);
  const unmountedRef = (0, import_react4.useRef)(false);
  const keyRef = (0, import_react4.useRef)(key);
  const fetcherRef = (0, import_react4.useRef)(fetcher2);
  const configRef = (0, import_react4.useRef)(config);
  const getConfig = () => configRef.current;
  const isActive = () => getConfig().isVisible() && getConfig().isOnline();
  const [getCache, setCache, subscribeCache, getInitialCache] = createCacheHelper(cache2, key);
  const stateDependencies = (0, import_react4.useRef)({}).current;
  const fallback = isUndefined(fallbackData) ? config.fallback[key] : fallbackData;
  const isEqual = (prev, current) => {
    for (const _ in stateDependencies) {
      const t = _;
      if (t === "data") {
        if (!compare2(prev[t], current[t])) {
          if (!isUndefined(prev[t])) {
            return false;
          }
          if (!compare2(returnedData, current[t])) {
            return false;
          }
        }
      } else {
        if (current[t] !== prev[t]) {
          return false;
        }
      }
    }
    return true;
  };
  const getSnapshot = (0, import_react4.useMemo)(() => {
    const shouldStartRequest = (() => {
      if (!key)
        return false;
      if (!fetcher2)
        return false;
      if (!isUndefined(revalidateOnMount))
        return revalidateOnMount;
      if (getConfig().isPaused())
        return false;
      if (suspense)
        return false;
      if (!isUndefined(revalidateIfStale))
        return revalidateIfStale;
      return true;
    })();
    const getSelectedCache = (state) => {
      const snapshot = mergeObjects(state);
      delete snapshot._k;
      if (!shouldStartRequest) {
        return snapshot;
      }
      return {
        isValidating: true,
        isLoading: true,
        ...snapshot
      };
    };
    const cachedData2 = getCache();
    const initialData = getInitialCache();
    const clientSnapshot = getSelectedCache(cachedData2);
    const serverSnapshot = cachedData2 === initialData ? clientSnapshot : getSelectedCache(initialData);
    let memorizedSnapshot = clientSnapshot;
    return [
      () => {
        const newSnapshot = getSelectedCache(getCache());
        const compareResult = isEqual(newSnapshot, memorizedSnapshot);
        if (compareResult) {
          memorizedSnapshot.data = newSnapshot.data;
          memorizedSnapshot.isLoading = newSnapshot.isLoading;
          memorizedSnapshot.isValidating = newSnapshot.isValidating;
          memorizedSnapshot.error = newSnapshot.error;
          return memorizedSnapshot;
        } else {
          memorizedSnapshot = newSnapshot;
          return newSnapshot;
        }
      },
      () => serverSnapshot
    ];
  }, [
    cache2,
    key
  ]);
  const cached = (0, import_shim.useSyncExternalStore)((0, import_react4.useCallback)(
    (callback) => subscribeCache(key, (current, prev) => {
      if (!isEqual(prev, current))
        callback();
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      cache2,
      key
    ]
  ), getSnapshot[0], getSnapshot[1]);
  const isInitialMount = !initialMountedRef.current;
  const hasRevalidator = EVENT_REVALIDATORS[key] && EVENT_REVALIDATORS[key].length > 0;
  const cachedData = cached.data;
  const data = isUndefined(cachedData) ? fallback : cachedData;
  const error = cached.error;
  const laggyDataRef = (0, import_react4.useRef)(data);
  const returnedData = keepPreviousData ? isUndefined(cachedData) ? laggyDataRef.current : cachedData : data;
  const shouldDoInitialRevalidation = (() => {
    if (hasRevalidator && !isUndefined(error))
      return false;
    if (isInitialMount && !isUndefined(revalidateOnMount))
      return revalidateOnMount;
    if (getConfig().isPaused())
      return false;
    if (suspense)
      return isUndefined(data) ? false : revalidateIfStale;
    return isUndefined(data) || revalidateIfStale;
  })();
  const defaultValidatingState = !!(key && fetcher2 && isInitialMount && shouldDoInitialRevalidation);
  const isValidating = isUndefined(cached.isValidating) ? defaultValidatingState : cached.isValidating;
  const isLoading = isUndefined(cached.isLoading) ? defaultValidatingState : cached.isLoading;
  const revalidate = (0, import_react4.useCallback)(
    async (revalidateOpts) => {
      const currentFetcher = fetcherRef.current;
      if (!key || !currentFetcher || unmountedRef.current || getConfig().isPaused()) {
        return false;
      }
      let newData;
      let startAt;
      let loading = true;
      const opts = revalidateOpts || {};
      const shouldStartNewRequest = !FETCH[key] || !opts.dedupe;
      const callbackSafeguard = () => {
        if (IS_REACT_LEGACY) {
          return !unmountedRef.current && key === keyRef.current && initialMountedRef.current;
        }
        return key === keyRef.current;
      };
      const finalState = {
        isValidating: false,
        isLoading: false
      };
      const finishRequestAndUpdateState = () => {
        setCache(finalState);
      };
      const cleanupState = () => {
        const requestInfo = FETCH[key];
        if (requestInfo && requestInfo[1] === startAt) {
          delete FETCH[key];
        }
      };
      const initialState = {
        isValidating: true
      };
      if (isUndefined(getCache().data)) {
        initialState.isLoading = true;
      }
      try {
        if (shouldStartNewRequest) {
          setCache(initialState);
          if (config.loadingTimeout && isUndefined(getCache().data)) {
            setTimeout(() => {
              if (loading && callbackSafeguard()) {
                getConfig().onLoadingSlow(key, config);
              }
            }, config.loadingTimeout);
          }
          FETCH[key] = [
            currentFetcher(fnArg),
            getTimestamp()
          ];
        }
        [newData, startAt] = FETCH[key];
        newData = await newData;
        if (shouldStartNewRequest) {
          setTimeout(cleanupState, config.dedupingInterval);
        }
        if (!FETCH[key] || FETCH[key][1] !== startAt) {
          if (shouldStartNewRequest) {
            if (callbackSafeguard()) {
              getConfig().onDiscarded(key);
            }
          }
          return false;
        }
        finalState.error = UNDEFINED;
        const mutationInfo = MUTATION[key];
        if (!isUndefined(mutationInfo) && // case 1
        (startAt <= mutationInfo[0] || // case 2
        startAt <= mutationInfo[1] || // case 3
        mutationInfo[1] === 0)) {
          finishRequestAndUpdateState();
          if (shouldStartNewRequest) {
            if (callbackSafeguard()) {
              getConfig().onDiscarded(key);
            }
          }
          return false;
        }
        const cacheData = getCache().data;
        finalState.data = compare2(cacheData, newData) ? cacheData : newData;
        if (shouldStartNewRequest) {
          if (callbackSafeguard()) {
            getConfig().onSuccess(newData, key, config);
          }
        }
      } catch (err) {
        cleanupState();
        const currentConfig = getConfig();
        const { shouldRetryOnError } = currentConfig;
        if (!currentConfig.isPaused()) {
          finalState.error = err;
          if (shouldStartNewRequest && callbackSafeguard()) {
            currentConfig.onError(err, key, currentConfig);
            if (shouldRetryOnError === true || isFunction(shouldRetryOnError) && shouldRetryOnError(err)) {
              if (isActive()) {
                currentConfig.onErrorRetry(err, key, currentConfig, (_opts) => {
                  const revalidators = EVENT_REVALIDATORS[key];
                  if (revalidators && revalidators[0]) {
                    revalidators[0](events.ERROR_REVALIDATE_EVENT, _opts);
                  }
                }, {
                  retryCount: (opts.retryCount || 0) + 1,
                  dedupe: true
                });
              }
            }
          }
        }
      }
      loading = false;
      finishRequestAndUpdateState();
      return true;
    },
    // `setState` is immutable, and `eventsCallback`, `fnArg`, and
    // `keyValidating` are depending on `key`, so we can exclude them from
    // the deps array.
    //
    // FIXME:
    // `fn` and `config` might be changed during the lifecycle,
    // but they might be changed every render like this.
    // `useSWR('key', () => fetch('/api/'), { suspense: true })`
    // So we omit the values from the deps array
    // even though it might cause unexpected behaviors.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [
      key,
      cache2
    ]
  );
  const boundMutate = (0, import_react4.useCallback)(
    // Use callback to make sure `keyRef.current` returns latest result every time
    (...args) => {
      return internalMutate(cache2, keyRef.current, ...args);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
  useIsomorphicLayoutEffect(() => {
    fetcherRef.current = fetcher2;
    configRef.current = config;
    if (!isUndefined(cachedData)) {
      laggyDataRef.current = cachedData;
    }
  });
  useIsomorphicLayoutEffect(() => {
    if (!key)
      return;
    const softRevalidate = revalidate.bind(UNDEFINED, WITH_DEDUPE);
    let nextFocusRevalidatedAt = 0;
    const onRevalidate = (type, opts = {}) => {
      if (type == events.FOCUS_EVENT) {
        const now = Date.now();
        if (getConfig().revalidateOnFocus && now > nextFocusRevalidatedAt && isActive()) {
          nextFocusRevalidatedAt = now + getConfig().focusThrottleInterval;
          softRevalidate();
        }
      } else if (type == events.RECONNECT_EVENT) {
        if (getConfig().revalidateOnReconnect && isActive()) {
          softRevalidate();
        }
      } else if (type == events.MUTATE_EVENT) {
        return revalidate();
      } else if (type == events.ERROR_REVALIDATE_EVENT) {
        return revalidate(opts);
      }
      return;
    };
    const unsubEvents = subscribeCallback(key, EVENT_REVALIDATORS, onRevalidate);
    unmountedRef.current = false;
    keyRef.current = key;
    initialMountedRef.current = true;
    setCache({
      _k: fnArg
    });
    if (shouldDoInitialRevalidation) {
      if (isUndefined(data) || IS_SERVER) {
        softRevalidate();
      } else {
        rAF(softRevalidate);
      }
    }
    return () => {
      unmountedRef.current = true;
      unsubEvents();
    };
  }, [
    key
  ]);
  useIsomorphicLayoutEffect(() => {
    let timer;
    function next() {
      const interval = isFunction(refreshInterval) ? refreshInterval(getCache().data) : refreshInterval;
      if (interval && timer !== -1) {
        timer = setTimeout(execute, interval);
      }
    }
    function execute() {
      if (!getCache().error && (refreshWhenHidden || getConfig().isVisible()) && (refreshWhenOffline || getConfig().isOnline())) {
        revalidate(WITH_DEDUPE).then(next);
      } else {
        next();
      }
    }
    next();
    return () => {
      if (timer) {
        clearTimeout(timer);
        timer = -1;
      }
    };
  }, [
    refreshInterval,
    refreshWhenHidden,
    refreshWhenOffline,
    key
  ]);
  (0, import_react4.useDebugValue)(returnedData);
  if (suspense && isUndefined(data) && key) {
    if (!IS_REACT_LEGACY && IS_SERVER) {
      throw new Error("Fallback data is required when using suspense in SSR.");
    }
    fetcherRef.current = fetcher2;
    configRef.current = config;
    unmountedRef.current = false;
    const req = PRELOAD[key];
    if (!isUndefined(req)) {
      const promise = boundMutate(req);
      use2(promise);
    }
    if (isUndefined(error)) {
      const promise = revalidate(WITH_DEDUPE);
      if (!isUndefined(returnedData)) {
        promise.status = "fulfilled";
        promise.value = true;
      }
      use2(promise);
    } else {
      throw error;
    }
  }
  return {
    mutate: boundMutate,
    get data() {
      stateDependencies.data = true;
      return returnedData;
    },
    get error() {
      stateDependencies.error = true;
      return error;
    },
    get isValidating() {
      stateDependencies.isValidating = true;
      return isValidating;
    },
    get isLoading() {
      stateDependencies.isLoading = true;
      return isLoading;
    }
  };
};
var SWRConfig2 = OBJECT.defineProperty(SWRConfig, "defaultValue", {
  value: defaultConfig
});
var useSWR = withArgs(useSWRHandler);

// node_modules/react-tweet/dist/api/fetch-tweet.js
var TwitterApiError = class extends Error {
  constructor({ message, status, data }) {
    super(message);
    this.name = "TwitterApiError";
    this.status = status;
    this.data = data;
  }
};

// node_modules/react-tweet/dist/hooks.js
var useSWR2 = useSWR.default || useSWR;
var host = "https://react-tweet.vercel.app";
async function fetcher([url, fetchOptions]) {
  const res = await fetch(url, fetchOptions);
  const json = await res.json();
  if (res.ok)
    return json.data || null;
  throw new TwitterApiError({
    message: `Failed to fetch tweet at "${url}" with "${res.status}".`,
    data: json,
    status: res.status
  });
}
var useTweet = (id, apiUrl, fetchOptions) => {
  const { isLoading, data, error } = useSWR2(() => apiUrl || id ? [
    apiUrl || id && `${host}/api/tweet/${id}`,
    fetchOptions
  ] : null, fetcher, {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    shouldRetryOnError: false
  });
  return {
    // If data is `undefined` then it might be the first render where SWR hasn't started doing
    // any work, so we set `isLoading` to `true`.
    isLoading: Boolean(isLoading || data === void 0 && !error),
    data,
    error
  };
};
var useMounted = () => {
  const [mounted, setMounted] = (0, import_react5.useState)(false);
  (0, import_react5.useEffect)(() => setMounted(true), []);
  return mounted;
};

// node_modules/react-tweet/dist/twitter-theme/tweet-info-created-at.js
import s12 from "/Users/thesohamghadge/INERITANCE01/frontend/frontend/node_modules/react-tweet/dist/twitter-theme/tweet-info-created-at.module.css";
var TweetInfoCreatedAt = ({ tweet }) => {
  const mounted = useMounted();
  const createdAt = typeof window !== "undefined" && mounted ? new Date(tweet.created_at) : null;
  return !createdAt ? null : (0, import_jsx_runtime14.jsx)("a", {
    className: s12.root,
    href: tweet.url,
    target: "_blank",
    rel: "noopener noreferrer",
    "aria-label": (0, import_format.default)(createdAt, "h:mm a · MMM d, y"),
    children: (0, import_jsx_runtime14.jsx)("time", {
      dateTime: createdAt.toISOString(),
      children: (0, import_format.default)(createdAt, "h:mm a · MMM d, y")
    })
  });
};

// node_modules/react-tweet/dist/twitter-theme/tweet-info.js
import s13 from "/Users/thesohamghadge/INERITANCE01/frontend/frontend/node_modules/react-tweet/dist/twitter-theme/tweet-info.module.css";
var TweetInfo = ({ tweet }) => (0, import_jsx_runtime15.jsxs)("div", {
  className: s13.info,
  children: [
    (0, import_jsx_runtime15.jsx)(TweetInfoCreatedAt, {
      tweet
    }),
    (0, import_jsx_runtime15.jsx)("a", {
      className: s13.infoLink,
      href: "https://help.twitter.com/en/twitter-for-websites-ads-info-and-privacy",
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "Twitter for Websites, Ads Information and Privacy",
      children: (0, import_jsx_runtime15.jsx)("svg", {
        viewBox: "0 0 24 24",
        "aria-hidden": "true",
        className: s13.infoIcon,
        children: (0, import_jsx_runtime15.jsx)("g", {
          children: (0, import_jsx_runtime15.jsx)("path", {
            d: "M13.5 8.5c0 .83-.67 1.5-1.5 1.5s-1.5-.67-1.5-1.5S11.17 7 12 7s1.5.67 1.5 1.5zM13 17v-5h-2v5h2zm-1 5.25c5.66 0 10.25-4.59 10.25-10.25S17.66 1.75 12 1.75 1.75 6.34 1.75 12 6.34 22.25 12 22.25zM20.25 12c0 4.56-3.69 8.25-8.25 8.25S3.75 16.56 3.75 12 7.44 3.75 12 3.75s8.25 3.69 8.25 8.25z"
          })
        })
      })
    })
  ]
});

// node_modules/react-tweet/dist/twitter-theme/tweet-actions.js
var import_jsx_runtime17 = __toESM(require_jsx_runtime(), 1);

// node_modules/react-tweet/dist/twitter-theme/tweet-actions-copy.js
var import_jsx_runtime16 = __toESM(require_jsx_runtime(), 1);
var import_react6 = __toESM(require_react(), 1);
import s14 from "/Users/thesohamghadge/INERITANCE01/frontend/frontend/node_modules/react-tweet/dist/twitter-theme/tweet-actions.module.css";
var TweetActionsCopy = ({ tweet }) => {
  const [copied, setCopied] = (0, import_react6.useState)(false);
  const [copyAllText, setCopyAltText] = (0, import_react6.useState)(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(tweet.url);
    setCopied(true);
  };
  (0, import_react6.useEffect)(() => {
    if (copied) {
      const timeout = setTimeout(() => {
        setCopied(false);
        setCopyAltText(true);
      }, 6e3);
      return () => clearTimeout(timeout);
    }
  }, [
    copied
  ]);
  return (0, import_jsx_runtime16.jsxs)("button", {
    type: "button",
    className: s14.copy,
    "aria-label": "Copy link",
    onClick: handleCopy,
    children: [
      (0, import_jsx_runtime16.jsx)("div", {
        className: s14.copyIconWrapper,
        children: copied ? (0, import_jsx_runtime16.jsx)("svg", {
          viewBox: "0 0 24 24",
          className: s14.copyIcon,
          "aria-hidden": "true",
          children: (0, import_jsx_runtime16.jsx)("g", {
            children: (0, import_jsx_runtime16.jsx)("path", {
              d: "M9.64 18.952l-5.55-4.861 1.317-1.504 3.951 3.459 8.459-10.948L19.4 6.32 9.64 18.952z"
            })
          })
        }) : (0, import_jsx_runtime16.jsx)("svg", {
          viewBox: "0 0 24 24",
          className: s14.copyIcon,
          "aria-hidden": "true",
          children: (0, import_jsx_runtime16.jsx)("g", {
            children: (0, import_jsx_runtime16.jsx)("path", {
              d: "M18.36 5.64c-1.95-1.96-5.11-1.96-7.07 0L9.88 7.05 8.46 5.64l1.42-1.42c2.73-2.73 7.16-2.73 9.9 0 2.73 2.74 2.73 7.17 0 9.9l-1.42 1.42-1.41-1.42 1.41-1.41c1.96-1.96 1.96-5.12 0-7.07zm-2.12 3.53l-7.07 7.07-1.41-1.41 7.07-7.07 1.41 1.41zm-12.02.71l1.42-1.42 1.41 1.42-1.41 1.41c-1.96 1.96-1.96 5.12 0 7.07 1.95 1.96 5.11 1.96 7.07 0l1.41-1.41 1.42 1.41-1.42 1.42c-2.73 2.73-7.16 2.73-9.9 0-2.73-2.74-2.73-7.17 0-9.9z"
            })
          })
        })
      }),
      (0, import_jsx_runtime16.jsx)("span", {
        className: s14.copyText,
        children: copied ? "Copied!" : copyAllText ? "Copy link to Tweet" : "Copy link"
      })
    ]
  });
};

// node_modules/react-tweet/dist/twitter-theme/tweet-actions.js
import s15 from "/Users/thesohamghadge/INERITANCE01/frontend/frontend/node_modules/react-tweet/dist/twitter-theme/tweet-actions.module.css";
var TweetActions = ({ tweet }) => {
  const favoriteCount = formatNumber(tweet.favorite_count);
  return (0, import_jsx_runtime17.jsxs)("div", {
    className: s15.actions,
    children: [
      (0, import_jsx_runtime17.jsxs)("a", {
        className: s15.like,
        href: tweet.like_url,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": `Like. This Tweet has ${favoriteCount} likes`,
        children: [
          (0, import_jsx_runtime17.jsx)("div", {
            className: s15.likeIconWrapper,
            children: (0, import_jsx_runtime17.jsx)("svg", {
              viewBox: "0 0 24 24",
              className: s15.likeIcon,
              "aria-hidden": "true",
              children: (0, import_jsx_runtime17.jsx)("g", {
                children: (0, import_jsx_runtime17.jsx)("path", {
                  d: "M20.884 13.19c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z"
                })
              })
            })
          }),
          (0, import_jsx_runtime17.jsx)("span", {
            className: s15.likeCount,
            children: favoriteCount
          })
        ]
      }),
      (0, import_jsx_runtime17.jsxs)("a", {
        className: s15.reply,
        href: tweet.reply_url,
        target: "_blank",
        rel: "noopener noreferrer",
        "aria-label": "Reply to this Tweet on Twitter",
        children: [
          (0, import_jsx_runtime17.jsx)("div", {
            className: s15.replyIconWrapper,
            children: (0, import_jsx_runtime17.jsx)("svg", {
              viewBox: "0 0 24 24",
              className: s15.replyIcon,
              "aria-hidden": "true",
              children: (0, import_jsx_runtime17.jsx)("g", {
                children: (0, import_jsx_runtime17.jsx)("path", {
                  d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z"
                })
              })
            })
          }),
          (0, import_jsx_runtime17.jsx)("span", {
            className: s15.replyText,
            children: "Reply"
          })
        ]
      }),
      (0, import_jsx_runtime17.jsx)(TweetActionsCopy, {
        tweet
      })
    ]
  });
};

// node_modules/react-tweet/dist/twitter-theme/tweet-replies.js
var import_jsx_runtime18 = __toESM(require_jsx_runtime(), 1);
import s16 from "/Users/thesohamghadge/INERITANCE01/frontend/frontend/node_modules/react-tweet/dist/twitter-theme/tweet-replies.module.css";
var TweetReplies = ({ tweet }) => (0, import_jsx_runtime18.jsx)("div", {
  className: s16.replies,
  children: (0, import_jsx_runtime18.jsx)("a", {
    className: s16.link,
    href: tweet.url,
    target: "_blank",
    rel: "noopener noreferrer",
    children: (0, import_jsx_runtime18.jsx)("span", {
      className: s16.text,
      children: tweet.conversation_count === 0 ? "Read more on Twitter" : tweet.conversation_count === 1 ? `Read ${formatNumber(tweet.conversation_count)} reply` : `Read ${formatNumber(tweet.conversation_count)} replies`
    })
  })
});

// node_modules/react-tweet/dist/twitter-theme/quoted-tweet/quoted-tweet.js
var import_jsx_runtime22 = __toESM(require_jsx_runtime(), 1);

// node_modules/react-tweet/dist/twitter-theme/quoted-tweet/quoted-tweet-container.js
var import_jsx_runtime19 = __toESM(require_jsx_runtime(), 1);
import s17 from "/Users/thesohamghadge/INERITANCE01/frontend/frontend/node_modules/react-tweet/dist/twitter-theme/quoted-tweet/quoted-tweet-container.module.css";
var QuotedTweetContainer = ({ tweet, children }) => (0, import_jsx_runtime19.jsx)("div", {
  className: s17.root,
  onClick: (e) => {
    e.preventDefault();
    window.open(tweet.url, "_blank");
  },
  children: (0, import_jsx_runtime19.jsx)("article", {
    className: s17.article,
    children
  })
});

// node_modules/react-tweet/dist/twitter-theme/quoted-tweet/quoted-tweet-header.js
var import_jsx_runtime20 = __toESM(require_jsx_runtime(), 1);
init_clsx();
import s18 from "/Users/thesohamghadge/INERITANCE01/frontend/frontend/node_modules/react-tweet/dist/twitter-theme/quoted-tweet/quoted-tweet-header.module.css";
var QuotedTweetHeader = ({ tweet }) => {
  const { user } = tweet;
  return (0, import_jsx_runtime20.jsxs)("div", {
    className: s18.header,
    children: [
      (0, import_jsx_runtime20.jsx)("a", {
        href: tweet.url,
        className: s18.avatar,
        target: "_blank",
        rel: "noopener noreferrer",
        children: (0, import_jsx_runtime20.jsx)("div", {
          className: clsx_default(s18.avatarOverflow, user.profile_image_shape === "Square" && s18.avatarSquare),
          children: (0, import_jsx_runtime20.jsx)(AvatarImg, {
            src: user.profile_image_url_https,
            alt: user.name,
            width: 20,
            height: 20
          })
        })
      }),
      (0, import_jsx_runtime20.jsxs)("div", {
        className: s18.author,
        children: [
          (0, import_jsx_runtime20.jsx)("div", {
            className: s18.authorText,
            children: (0, import_jsx_runtime20.jsx)("span", {
              title: user.name,
              children: user.name
            })
          }),
          (0, import_jsx_runtime20.jsx)(VerifiedBadge, {
            user
          }),
          (0, import_jsx_runtime20.jsx)("div", {
            className: s18.username,
            children: (0, import_jsx_runtime20.jsxs)("span", {
              title: `@${user.screen_name}`,
              children: [
                "@",
                user.screen_name
              ]
            })
          })
        ]
      })
    ]
  });
};

// node_modules/react-tweet/dist/twitter-theme/quoted-tweet/quoted-tweet-body.js
var import_jsx_runtime21 = __toESM(require_jsx_runtime(), 1);
import s19 from "/Users/thesohamghadge/INERITANCE01/frontend/frontend/node_modules/react-tweet/dist/twitter-theme/quoted-tweet/quoted-tweet-body.module.css";
var QuotedTweetBody = ({ tweet }) => (0, import_jsx_runtime21.jsx)("p", {
  className: s19.root,
  children: tweet.entities.map((item, i) => (0, import_jsx_runtime21.jsx)("span", {
    dangerouslySetInnerHTML: {
      __html: item.text
    }
  }, i))
});

// node_modules/react-tweet/dist/twitter-theme/quoted-tweet/quoted-tweet.js
var QuotedTweet = ({ tweet }) => {
  var _tweet_mediaDetails;
  return (0, import_jsx_runtime22.jsxs)(QuotedTweetContainer, {
    tweet,
    children: [
      (0, import_jsx_runtime22.jsx)(QuotedTweetHeader, {
        tweet
      }),
      (0, import_jsx_runtime22.jsx)(QuotedTweetBody, {
        tweet
      }),
      ((_tweet_mediaDetails = tweet.mediaDetails) == null ? void 0 : _tweet_mediaDetails.length) ? (0, import_jsx_runtime22.jsx)(TweetMedia, {
        quoted: true,
        tweet
      }) : null
    ]
  });
};

// node_modules/react-tweet/dist/twitter-theme/embedded-tweet.js
var import_react7 = __toESM(require_react(), 1);
var EmbeddedTweet = ({ tweet: t, components }) => {
  var _tweet_mediaDetails;
  const tweet = (0, import_react7.useMemo)(() => enrichTweet(t), [
    t
  ]);
  return (0, import_jsx_runtime23.jsxs)(TweetContainer, {
    children: [
      (0, import_jsx_runtime23.jsx)(TweetHeader, {
        tweet,
        components
      }),
      tweet.in_reply_to_status_id_str && (0, import_jsx_runtime23.jsx)(TweetInReplyTo, {
        tweet
      }),
      (0, import_jsx_runtime23.jsx)(TweetBody, {
        tweet
      }),
      ((_tweet_mediaDetails = tweet.mediaDetails) == null ? void 0 : _tweet_mediaDetails.length) ? (0, import_jsx_runtime23.jsx)(TweetMedia, {
        tweet,
        components
      }) : null,
      tweet.quoted_tweet && (0, import_jsx_runtime23.jsx)(QuotedTweet, {
        tweet: tweet.quoted_tweet
      }),
      (0, import_jsx_runtime23.jsx)(TweetInfo, {
        tweet
      }),
      (0, import_jsx_runtime23.jsx)(TweetActions, {
        tweet
      }),
      (0, import_jsx_runtime23.jsx)(TweetReplies, {
        tweet
      })
    ]
  });
};

// node_modules/react-tweet/dist/twitter-theme/tweet-not-found.js
var import_jsx_runtime24 = __toESM(require_jsx_runtime(), 1);
import styles from "/Users/thesohamghadge/INERITANCE01/frontend/frontend/node_modules/react-tweet/dist/twitter-theme/tweet-not-found.module.css";
var TweetNotFound = (_props) => (0, import_jsx_runtime24.jsx)(TweetContainer, {
  children: (0, import_jsx_runtime24.jsxs)("div", {
    className: styles.root,
    children: [
      (0, import_jsx_runtime24.jsx)("h3", {
        children: "Tweet not found"
      }),
      (0, import_jsx_runtime24.jsx)("p", {
        children: "The embedded tweet could not be found…"
      })
    ]
  })
});

// node_modules/react-tweet/dist/twitter-theme/tweet-skeleton.js
var import_jsx_runtime26 = __toESM(require_jsx_runtime(), 1);

// node_modules/react-tweet/dist/twitter-theme/skeleton.js
var import_jsx_runtime25 = __toESM(require_jsx_runtime(), 1);
import styles2 from "/Users/thesohamghadge/INERITANCE01/frontend/frontend/node_modules/react-tweet/dist/twitter-theme/skeleton.module.css";
var Skeleton = ({ style }) => (0, import_jsx_runtime25.jsx)("span", {
  className: styles2.skeleton,
  style
});

// node_modules/react-tweet/dist/twitter-theme/tweet-skeleton.js
import styles3 from "/Users/thesohamghadge/INERITANCE01/frontend/frontend/node_modules/react-tweet/dist/twitter-theme/tweet-skeleton.module.css";
var TweetSkeleton = () => (0, import_jsx_runtime26.jsxs)(TweetContainer, {
  className: styles3.root,
  children: [
    (0, import_jsx_runtime26.jsx)(Skeleton, {
      style: {
        height: "3rem",
        marginBottom: "0.75rem"
      }
    }),
    (0, import_jsx_runtime26.jsx)(Skeleton, {
      style: {
        height: "6rem",
        margin: "0.5rem 0"
      }
    }),
    (0, import_jsx_runtime26.jsx)("div", {
      style: {
        borderTop: "var(--tweet-border)",
        margin: "0.5rem 0"
      }
    }),
    (0, import_jsx_runtime26.jsx)(Skeleton, {
      style: {
        height: "2rem"
      }
    }),
    (0, import_jsx_runtime26.jsx)(Skeleton, {
      style: {
        height: "2rem",
        borderRadius: "9999px",
        marginTop: "0.5rem"
      }
    })
  ]
});

// node_modules/react-tweet/dist/swr.js
var import_jsx_runtime27 = __toESM(require_jsx_runtime(), 1);
var Tweet = ({ id, apiUrl, fallback = (0, import_jsx_runtime27.jsx)(TweetSkeleton, {}), components, fetchOptions, onError }) => {
  const { data, error, isLoading } = useTweet(id, apiUrl, fetchOptions);
  if (isLoading)
    return fallback;
  if (error || !data) {
    const NotFound = (components == null ? void 0 : components.TweetNotFound) || TweetNotFound;
    return (0, import_jsx_runtime27.jsx)(NotFound, {
      error: onError ? onError(error) : error
    });
  }
  return (0, import_jsx_runtime27.jsx)(EmbeddedTweet, {
    tweet: data,
    components
  });
};
export {
  EmbeddedTweet,
  QuotedTweet,
  QuotedTweetBody,
  QuotedTweetContainer,
  QuotedTweetHeader,
  Tweet,
  TweetActions,
  TweetActionsCopy,
  TweetBody,
  TweetContainer,
  TweetHeader,
  TweetInReplyTo,
  TweetInfo,
  TweetInfoCreatedAt,
  TweetLink,
  TweetMedia,
  TweetMediaVideo,
  TweetNotFound,
  TweetReplies,
  TweetSkeleton,
  Verified,
  VerifiedBusiness,
  VerifiedGovernment,
  enrichTweet,
  formatNumber,
  getMediaUrl,
  getMp4Video,
  getMp4Videos,
  useMounted,
  useTweet
};
/*! Bundled license information:

use-sync-external-store/cjs/use-sync-external-store-shim.development.js:
  (**
   * @license React
   * use-sync-external-store-shim.development.js
   *
   * Copyright (c) Facebook, Inc. and its affiliates.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   *)
*/
//# sourceMappingURL=react-tweet.js.map
