jest.autoMockOff()

describe('iso3166-1', function() {
  var iso3166

  beforeEach(function() {
    iso3166 = require('..')
  })

  it('should return an object when calling `from`', function() {
    expect(typeof iso3166.from('US')).toBe('object')
  })

  it('should return an object when calling `fromLocale`', function() {
    expect(typeof iso3166.fromLocale('en-US')).toBe('object')
  })

  it('can call a function named `to2` from `from`', function() {
    expect(typeof iso3166.from('USA').to2).toBe('function')
  })

  it('can call a function named `to3` from `from`', function() {
    expect(typeof iso3166.from('US').to3).toBe('function')
  })

  it('converts an ISO3166-1 alpha-2 code to alpha-3', function() {
    expect(iso3166.from('US').to3()).toBe('USA')
  })

  it('maintains an ISO3166-1 alpha-2 code to alpha-2', function() {
    expect(iso3166.from('US').to2()).toBe('US')
  })

  it('converts an ISO3166-1 alpha-3 code to alpha-2', function() {
    expect(iso3166.from('USA').to2()).toBe('US')
  })

  it('maintains an ISO3166-1 alpha-3 code to alpha-3', function() {
    expect(iso3166.from('USA').to3()).toBe('USA')
  })

  it('converts a locale to ISO3166-1 alpha-2', function() {
    expect(iso3166.fromLocale('en-US').to2()).toBe('US')
  })

  it('converts a locale to ISO3166-1 alpha-3', function() {
    expect(iso3166.fromLocale('en-US').to3()).toBe('USA')
  })

  it('directly converts an ISO3166-1 alpha-2 code to alpha-3', function() {
    expect(iso3166.to3('US')).toBe('USA')
  })

  it('directly converts an ISO3166-1 alpha-3 code to alpha-2', function() {
    expect(iso3166.to2('USA')).toBe('US')
  })

  it('returns a list of key/val pairs of country codes', function() {
    expect(typeof iso3166.list()).toBe('object')
  })

  it('returns true if input is a known alpha-2', function() {
    expect(iso3166.is2('US')).toBe(true)
  })

  it('returns false if input is not a known alpha-2', function() {
    expect(iso3166.is2('XX')).toBe(false)
  })

  it('returns true if input is a known alpha-3', function() {
    expect(iso3166.is3('USA')).toBe(true)
  })

  it('returns true if input is not a known alpha-3', function() {
    expect(iso3166.is3('XYZ')).toBe(false)
  })

})
