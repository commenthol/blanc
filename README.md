# blanc

> A node module boilerplate

[![NPM version](https://badge.fury.io/js/blanc.svg)](https://www.npmjs.com/package/blanc/)
[![Build Status](https://github.com/commenthol/blanc/workflows/CI/badge.svg?branch=master&event=push)](https://github.com/commenthol/blanc/actions/workflows/ci.yml?query=branch%3Amain)

This is a boilerplate for a node module using:

* [mocha][] tests,
* [c8][] for code coverage,
* [eslint][] using [standard][] syntax for code linting and
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
* `npm run coverage` - Run c8 code coverage (shows code coverage; open `coverage/index.html` after run)
* `npm run lint`     - Linting the source
* `npm run types`    - Generate typescript types 


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
* [c8][c8]
* [eslint][eslint]
* [LICENSE][LICENSE]
* [mocha][mocha]
* [rollup][rollup]
* [standard][standard]

<!-- ref! -->

[LICENSE]: ./LICENSE
[mocha]: http://mochajs.org/
[eslint]: http://eslint.org
[standard]: http://standardjs.com
[c8]: https://github.com/bcoe/c8
[babel]: https://babeljs.io/
[rollup]: https://rollupjs.org
