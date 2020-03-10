/**
 * @copyright 2015 commenthol
 * @license MIT
 */

import { sync, async } from './my'
import MyClass from './myclass'

const M = {
  sync,
  async,
  MyClass
}
export default M

/* @see https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md */
/* istanbul ignore if */
if (module === require.main) {
  console.log(M)
}
