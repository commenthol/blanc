"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * This file demonstrates how to use istanbul coverage tool
 *
 * @module lib/myclass
 *
 * @copyright 2015 commenthol
 * @license MIT
 */

/**
 * A simple class which contains an internal array
 * @constructor
 * @param {Object} [options] - options
 * @return {MyClass}
 */
var MyClass = function () {
  function MyClass(options) {
    _classCallCheck(this, MyClass);

    /* istanbul ignore next */ // ignore next statement (or block)
    /** @member {Object} */
    this.options = options || {};
    /** @member {Array} */
    this.array = options.array || [1, 2];
  }

  /**
  * length of internal array
  * @return {Number} - length of array
  */


  _createClass(MyClass, [{
    key: "length",
    value: function length() {
      return this.array.length;
    }

    /**
    * push item to internal array
    * @param {Number} item
    * @return {Number} - item
    */

  }, {
    key: "push",
    value: function push(item) {
      /* istanbul ignore else */ // tell istanbul that there is no need for a default `else`
      if (item) {
        this.array.push(item);
      }
      return item;
    }

    /**
    * get the last item from the array
    * @return {Number} last item
    */

  }, {
    key: "last",
    value: function last() {
      return this.array[this.length() - 1];
    }

    /**
    * multiply the last item on the array with `factor` and push it on the stack
    * @param {Number} [factor] - factor to multiply with. Default is 1
    * @return {Number} result of operation
    */

  }, {
    key: "mul",
    value: function mul(factor) {
      factor = factor || 1;
      /* istanbul ignore if */ // ignore the following if block
      if (factor === 1) {
        factor = factor; // eslint-disable-line
      }
      return this.push(this.last() * factor);
    }

    /**
    * add `sum` to the last item on the array and push it on the stack
    * @param {Number} [sum] - sum to add with. Default is 1
    * @return {Number} result of operation
    */

  }, {
    key: "add",
    value: function add(sum) {
      sum = sum || 1;
      // this code never executes
      if (0) {
        // eslint-disable-line
        sum += 0;
      }
      if (1) return this.push(this.last() + sum); // eslint-disable-line
      // this code is never reached
      sum *= 12 - sum;
      return sum;
    }
  }, {
    key: "untested",
    value: function untested() {
      // this function has no test case
      return 1;
    }
  }]);

  return MyClass;
}();

exports.default = MyClass;