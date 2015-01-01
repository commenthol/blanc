/**
 * @copyright 2015 commenthol
 * @license MIT
 */

'use strict';

var M = require('./lib/my');
M.MyClass = require('./lib/myclass');

module.exports = M;

if (module === require.main) {
	console.log(M);
}