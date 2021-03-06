# blanc

> A node module boilerplate

[![NPM version](https://badge.fury.io/js/blanc.svg)](https://www.npmjs.com/package/blanc/)
[![Build Status](https://secure.travis-ci.org/commenthol/blanc.svg?branch=master)](https://travis-ci.org/commenthol/blanc)

This is a boilerplate for a node module using:

* [mocha][] tests,
* [nyc][] for code coverage,
* [eslint][] using [standard][] syntax for code linting and
* [jsdoc][] for documentation.
* [babel][] for transpilation
* [rollup][] for bundling

The files contain examples to show the usage of the different tools in your code.


## Table of Contents

<!-- !toc (minlevel=2 omit="Table of Contents") -->

* [Description](#description)
  * [Example ...](#example-)
* [Contribution and License Agreement](#contribution-and-license-agreement)
* [License](#license)
* [References](#references)

<!-- toc! -->

## Description

Run the different tools from `npm`

* `npm test`         - Run tests
* `npm run coverage` - Run istanbul code coverage (shows code coverage; open `coverage/lcov-report/index.html` after run)
* `npm run lint`     - Linting the source
* `npm run doc`      - Generate documentation from source (open `doc/index.html` after run)


### Example ...


## Contribution and License Agreement

If you contribute code to this project, you are implicitly allowing your
code to be distributed under the MIT license. You are also implicitly
verifying that all code is your original work or correctly attributed
with the source of its origin and licence.

## License

Copyright (c) 2016- commenthol (MIT License)

See [LICENSE][] for more info.

## References

<!-- !ref -->

* [babel][babel]
* [eslint][eslint]
* [eslint-config-standard][eslint-config-standard]
* [eslint-plugin-standard][eslint-plugin-standard]
* [jsdox][jsdox]
* [LICENSE][LICENSE]
* [mocha][mocha]
* [nyc][nyc]
* [standard][standard]

<!-- ref! -->

[LICENSE]: ./LICENSE
[mocha]: http://mochajs.org/
[eslint]: http://eslint.org
[eslint-plugin-standard]: https://github.com/xjamundx/eslint-plugin-standard
[eslint-config-standard]: https://github.com/feross/eslint-config-standard
[standard]: http://standardjs.com
[jsdox]: http://jsdox.org/
[nyc]: https://istanbul.js.org/
[babel]: https://babeljs.io/
