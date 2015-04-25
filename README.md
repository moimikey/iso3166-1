# iso3166-1
The smallest, fastest, node module for ISO 3166-1 alpha 2/3 helper lookup/parser. Browserify/Webpack friendly.

# example usage
```
var ISO3166 = require('iso3166-1');
ISO3166.from('USA').to3()         // USA
ISO3166.from('USA').to2()         // US
ISO3166.from('US').to3()          // USA
ISO3166.from('US').to2()          // US
ISO3166.fromLocale('en-US').to3() // USA
ISO3166.fromLocale('en-US').to2() // US
```
