jest.autoMockOff().mock('fs')

describe('iso3166-1', function() {
  var iso3166;

  beforeEach(function() {
    iso3166 = require('..')
  })

  it('should be available', function() {
    return expect(iso3166).toBe
  })

  it('converts an ISO3166-1 alpha-2 code to alpha-3', function() {
    return expect(iso3166.from('US').to3()).toBe('USA')
  })
})
