var read   = require('fs').readFileSync
var gunzip = require('zlib').gunzipSync
var join   = require('path').join

module.exports = (function() {
  var out = read(join(__dirname, '../', 'data/countries.json.gz'))
  return JSON.parse(gunzip(out).toString())
})()
