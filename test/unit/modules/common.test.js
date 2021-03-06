var requireModule = require('requirefrom')('lib/modules'),
    expect = require('chai').expect,
    common = requireModule('common');

describe('Option sanitization', function() {

  describe('disableHtml5Mode', function() {
    it('should default to true', function() {
      expect(common.sanitizeOptions({}).disableHtml5Mode).to.eql(true);
    });

    it('should default to false when internal server is enabled', function() {
      expect(common.sanitizeOptions({server: true}).disableHtml5Mode).to.eql(false);
    });

    it('should respect set value', function() {
      expect(common.sanitizeOptions({disableHtml5Mode: true}).disableHtml5Mode).to.eql(true);
      expect(common.sanitizeOptions({disableHtml5Mode: false}).disableHtml5Mode).to.eql(false);
      expect(common.sanitizeOptions({disableHtml5Mode: true, server: true}).disableHtml5Mode).to.eql(true);
      expect(common.sanitizeOptions({disableHtml5Mode: false, server: true}).disableHtml5Mode).to.eql(false);
    });
  });
});
