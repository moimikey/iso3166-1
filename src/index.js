var ISOCodes = require('./read-data')

module.exports = (function() {
  var state = ''

  var to2 = function() {
    if (state.length !== 3) return state;
    return ISOCodes.filter(function(row) {
      return row.alpha3 === state
    })[0].alpha2
  }

  var to3 = function() {
    if (state.length !== 2) return state;
    return ISOCodes.filter(function(row) {
      return row.alpha2 === state
    })[0].alpha3
  }

  var from = function(code) {
    state = code
    return this
  }

  var fromLocale = function(locale) {
    if (typeof locale !== 'string') return state;
    state = locale.split('-').pop().toUpperCase()
    return this
  }

  var list = function() {
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
