# iso3166-1 [![Build Status][travis-image]][travis-url]
[![Version][npm-version-image]][npm-version-url] [![License][npm-license-image]][npm-license-url] [![Downloads][npm-downloads-image]][npm-downloads-url] [![Deps][npm-deps-image]][npm-deps-url] [![DevDeps][npm-devdeps-image]][npm-devdeps-url]

The smallest, fastest, node module for ISO 3166-1 alpha 2/3 helper lookup/parser. Browserify/Webpack friendly.

## it's totally small!
```
$ browserify iso3166-1.js | wc -c | numfmt --to=iec --suffix=B --format="%3f"
81KB
$ browserify iso3166-1.js | uglifyjs | wc -c | numfmt --to=iec --suffix=B --format="%3f"
63KB
$ browserify iso3166-1.js | uglifyjs - --screw-ie8 --compress --mangle | yuicompressor --type js -o iso3166-1.js && cat iso3166-1.js | wc -c | numfmt --to=iec --suffix=B --format="%3f"
51KB
```
## with over 240 countries and completely update to date with ISO standards!
```
> var countries = require('./countries.json')
> Object.keys(countries).length
250
>
...
```

## example usage
```
var iso3166 = require('iso3166-1')
iso3166.from('USA').to3()         // USA
iso3166.from('USA').to2()         // US
iso3166.from('US').to3()          // USA
iso3166.from('US').to2()          // US
iso3166.fromLocale('en-US').to3() // USA
iso3166.fromLocale('en-US').to2() // US
```

```
var iso3166 = require('iso3166-1')
iso3166.to2('USA') // US
iso3166.to3('US')  // USA
```

```
var iso3166 = require('iso3166-1')
var locale2 = require('locale2')
iso3166.fromLocale(locale2).to3() // USA
iso3166.fromLocale(locale2).to2() // US
```

```
import iso3166 from 'iso3166-1';
iso3166.is2('US')  // true
iso3166.is3('USA') // true
iso3166.is2('XX')  // false
iso3166.is3('XXX') // false
```

[npm-version-url]: https://www.npmjs.com/package/iso3166-1
[npm-version-image]: https://img.shields.io/npm/v/iso3166-1.svg
[npm-license-url]: https://github.com/moimikey/iso3166-1/blob/master/LICENSE
[npm-license-image]: https://img.shields.io/npm/l/iso3166-1.svg
[npm-downloads-url]: https://www.npmjs.com/package/iso3166-1
[npm-downloads-image]: https://img.shields.io/npm/dm/iso3166-1.svg
[npm-deps-url]: https://david-dm.org/moimikey/iso3166-1
[npm-deps-image]: https://img.shields.io/david/moimikey/iso3166-1.svg
[npm-devdeps-url]: https://david-dm.org/moimikey/iso3166-1
[npm-devdeps-image]: https://img.shields.io/david/dev/moimikey/iso3166-1.svg
[travis-url]: https://travis-ci.org/moimikey/iso3166-1
[travis-image]: https://travis-ci.org/moimikey/iso3166-1.svg?branch=master
