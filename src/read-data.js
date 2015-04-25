var fs   = require('fs')
var zlib = require('zlib')
var path = require('path')

module.exports = (function() {
  var out = fs.readFileSync(path.join(__dirname, '../', 'data/countries.json.gz'))
  return JSON.parse(zlib.gunzipSync(out).toString())
})()
