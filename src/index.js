var read   = require('fs').readFileSync
var gunzip = require('zlib-browserify').gunzipSync
var join   = require('path').join

var countries = read(join(__dirname, '../data', '/countries.json.gz'))
var ISOCodes  = JSON.parse(gunzip(countries).toString())

module.exports = (function iso3166() {
  var state = ''

  /**
   * [to2 description]
   * @return {[type]} [description]
   */
  var to2 = function to2() {
    if (state.length !== 3) return state;
    return ISOCodes.filter(function(row) {
      return row.alpha3 === state
    })[0].alpha2
  }

  /**
   * [to3 description]
   * @return {[type]} [description]
   */
  var to3 = function to3() {
    if (state.length !== 2) return state;
    return ISOCodes.filter(function(row) {
      return row.alpha2 === state
    })[0].alpha3
  }

  /**
   * [from description]
   * @param  {[type]} code [description]
   * @return {[type]}      [description]
   */
  var from = function from(code) {
    if (typeof code !== 'string') return state;
    state = code.toUpperCase()
    return this
  }

  /**
   * [fromLocale description]
   * @param  {[type]} locale [description]
   * @return {[type]}        [description]
   */
  var fromLocale = function fromLocale(locale) {
    if (typeof locale !== 'string') return state;
    state = locale.split('-').pop().toUpperCase()
    return this
  }

  /**
   * [list description]
   * @return {[type]} [description]
   */
  var list = function list() {
    return ISOCodes
  }

  return {
    to2:        to2,
    to3:        to3,
    from:       from,
    fromLocale: fromLocale,
    list:       list
  }
})()
