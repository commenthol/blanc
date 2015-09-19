/**
 * @copyright 2015 commenthol
 * @license MIT
 */

'use strict'

var M = require('./lib/my')
M.MyClass = require('./lib/myclass')

module.exports = M

/* @see https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md */
/* istanbul ignore if */
if (module === require.main) {
  console.log(M)
}
