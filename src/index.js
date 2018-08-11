const read = require('fs').readFileSync
const countries = read('data/countries.json')
const ISOCodes = JSON.parse(countries)

module.exports = (function iso3166 () {
  let state = ''

  /**
   * Convert an ISO 3166-1 alpha-3 code to alpha-2
   *
   * @param  {String} alpha3 USA
   * @return {String}
   */
  const to2 = function to2 (alpha3) {
    if (alpha3 && alpha3.length > 1) state = alpha3
    if (state.length !== 3) return state
    return ISOCodes.filter(function (row) {
      return row.alpha3 === state
    })[0].alpha2
  }

  /**
   * Convert an ISO 3166-1 alpha-2 code to alpha-3
   *
   * @param  {String} alpha2 US
   * @return {String}
   */
  const to3 = function to3 (alpha2) {
    if (alpha2 && alpha2.length > 1) state = alpha2
    if (state.length !== 2) return state
    return ISOCodes.filter(function (row) {
      return row.alpha2 === state
    })[0].alpha3
  }

  /**
   * Prepare an ISO 3166-1 alpha-2 or alpha-3 code
   * for conversion.
   *
   * @param  {String} code USA
   * @return {Function}
   */
  const from = function from (code) {
    if (typeof code !== 'string') return state
    state = code.toUpperCase()
    return this
  }

  /**
   * Prepare an ISO 3166-1 alpha-2 and ISO 639-1 pair
   * for conversion.
   *
   * @param  {String} locale en-US
   * @return {Function}
   */
  const fromLocale = function fromLocale (locale) {
    if (typeof locale !== 'string') return state
    state = locale.split('-').pop().toUpperCase()
    return this
  }

  /**
   * Return an Object containing key/val pair of
   * ISO 3166-1 alpha-2 and alpha-3 codes.
   *
   * @return {Object}
   */
  const list = function list () {
    return ISOCodes
  }

  /**
   * Return true if input is a known ISO 3166-1 alpha-2
   * code, false otherwise.
   *
   * @param  {String} alpha2
   * @return {Boolean}
  */
  const is2 = function is2 (alpha2) {
    return ISOCodes.some(function (row) {
      return row.alpha2 === alpha2
    })
  }

  /**
   * Return true if input is a known ISO 3166-1 alpha-3
   * code, false otherwise.
   *
   * @param  {String} alpha3
   * @return {Boolean}
  */
  const is3 = function is3 (alpha3) {
    return ISOCodes.some(function (row) {
      return row.alpha3 === alpha3
    })
  }

  return {
    from,
    fromLocale,
    is2,
    is3,
    list,
    to2,
    to3
  }
})()
