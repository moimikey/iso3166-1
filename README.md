# iso3166-1
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
