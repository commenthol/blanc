/**
 * @module lib/myclass
 *
 * @copyright 2015 commenthol
 * @license MIT
 */

'use strict';

/**
 * A simple class which contains an internal array
 * @constructor
 * @param {Object} [options] - options
 * @return {MyClass}
 */
function MyClass(options) {
	/** @member {Object} */
	this.options = options || {};
	/** @member {Array} */
	this.array = options.array || [ 1, 2 ];
	return this;
}

/**
 * length of internal array
 * @return {Number} - length of array
 */
MyClass.prototype.length = function() {
	return this.array.length;
};

/**
 * push item to internal array
 * @param {Any} item
 * @return {Any} - item
 */
MyClass.prototype.push = function(item) {
	this.array.push(item);
	return item;
};

MyClass.prototype.last = function() {
	return this.array[this.length() - 1];
};

MyClass.prototype.mul = function(factor) {
	factor = factor || 1;
	return this.push(this.last() * factor);
};

MyClass.prototype.add = function(sum) {
	sum = sum || 1;
	return this.push(this.last() + sum);
};

module.exports = MyClass;
