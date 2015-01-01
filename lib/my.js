/**
 * @module lib/my
 * @copyright 2015 commenthol
 * @license MIT
 */

'use strict';

/** module.exports */
var M = {};

/**
 * a synchronous function
 * @memberof module:lib/my
 * @return {String}
 */
M.sync = function () {
	return 'sync';
};

/**
 * An asynchronous function
 * @memberof module:lib/my
 * @param {Function} callback - Type: `function({Error}, {String})`
 * @param {Number} [msecs] - milliseconds it takes to call `callback`
 */
M.async = function (callback, msecs) {
	setTimeout(function(){
		callback && callback(null, 'async');
	}, msecs || 10);
};

module.exports = M;