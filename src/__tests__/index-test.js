jest.autoMockOff()

describe('iso3166-1', function() {
  var iso3166

  beforeEach(function() {
    iso3166 = require('..')
  })

  it('has a `from` method', function() {
    return expect(typeof iso3166.from).toBe('function')
  })

  it('has a `fromLocale` method', function() {
    return expect(typeof iso3166.fromLocale).toBe('function')
  })

  it('has a `to2` method', function() {
    return expect(typeof iso3166.to2).toBe('function')
  })

  it('has a `to3` method', function() {
    return expect(typeof iso3166.to3).toBe('function')
  })

  it('converts an ISO3166-1 alpha-2 code to alpha-3', function() {
    return expect(iso3166.from('US').to3()).toBe('USA')
  })

  it('maintains an ISO3166-1 alpha-2 code to alpha-2', function() {
    return expect(iso3166.from('US').to2()).toBe('US')
  })

  it('converts an ISO3166-1 alpha-3 code to alpha-2', function() {
    return expect(iso3166.from('USA').to2()).toBe('US')
  })

  it('maintains an ISO3166-1 alpha-3 code to alpha-3', function() {
    return expect(iso3166.from('USA').to3()).toBe('USA')
  })

  it('converts a locale to ISO3166-1 alpha-2', function() {
    return expect(iso3166.fromLocale('en-US').to2()).toBe('US')
  })

  it('converts a locale to ISO3166-1 alpha-3', function() {
    return expect(iso3166.fromLocale('en-US').to3()).toBe('USA')
  })
})
