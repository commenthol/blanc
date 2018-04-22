/**
 * @module lib/my
 * @copyright 2015 commenthol
 * @license MIT
 */

/**
 * a synchronous function
 * @memberof module:lib/my
 * @return {String}
 */
export function sync () {
  var sy = 'sy'
  var nc = 'nc'
  return sy + nc
}

/**
 * An asynchronous function
 * @memberof module:lib/my
 * @param {Function} callback - Type: `function({Error}, {String})`
 * @param {Number} [msecs] - milliseconds it takes to call `callback`
 */
export function async (callback, msecs) {
  setTimeout(function () {
    callback && callback(null, 'async')
  }, msecs || 10)
}
