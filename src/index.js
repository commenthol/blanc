/**
 * @copyright 2015 commenthol
 * @license MIT
 */

import { sync, async } from './my'
import MyClass from './myclass'
import { fileURLToPath } from 'url'

const M = {
  sync,
  async,
  MyClass
}
export default M

/* @see https://github.com/gotwarlost/istanbul/blob/master/ignoring-code-for-coverage.md */
/* c8 ignore if */
if (process.argv[1] === fileURLToPath(import.meta.url)) {
  console.log(M)
}
