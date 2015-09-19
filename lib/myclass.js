/**
 * This file demonstrates how to use istanbul coverage tool
 *
 * @module lib/myclass
 *
 * @copyright 2015 commenthol
 * @license MIT
 */

'use strict'

/**
 * A simple class which contains an internal array
 * @constructor
 * @param {Object} [options] - options
 * @return {MyClass}
 */
function MyClass (options) {
  /* istanbul ignore next */ // ignore next statement (or block)
  /** @member {Object} */
  this.options = options || {}
  /** @member {Array} */
  this.array = options.array || [ 1, 2 ]
  return this
}

/**
 * length of internal array
 * @return {Number} - length of array
 */
MyClass.prototype.length = function () {
  return this.array.length
}

/**
 * push item to internal array
 * @param {Number} item
 * @return {Number} - item
 */
MyClass.prototype.push = function (item) {
  /* istanbul ignore else */  // tell istanbul that there is no need for a default `else`
  if (item) {
    this.array.push(item)
  }
  return item
}

/**
 * get the last item from the array
 * @return {Number} last item
 */
MyClass.prototype.last = function () {
  return this.array[this.length() - 1]
}

/**
 * multiply the last item on the array with `factor` and push it on the stack
 * @param {Number} [factor] - factor to multiply with. Default is 1
 * @return {Number} result of operation
 */
MyClass.prototype.mul = function (factor) {
  factor = factor || 1
  /* istanbul ignore if */  // ignore the following if block
  if (factor === 1) {
    factor = factor
  }
  return this.push(this.last() * factor)
}

/**
 * add `sum` to the last item on the array and push it on the stack
 * @param {Number} [sum] - sum to add with. Default is 1
 * @return {Number} result of operation
 */
MyClass.prototype.add = function (sum) {
  sum = sum || 1
  // this code never executes
  if (0) {
    sum += 0
  }
  if (1) return this.push(this.last() + sum)
  // this code is never reached
  sum *= 12 - sum
  return sum
}

MyClass.prototype.untested = function () {
  // this function has no test case
  return 1
}

module.exports = MyClass
