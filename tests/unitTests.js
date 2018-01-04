var superagent = require('superagent')
var expect = require('expect.js')
var countryCodeConverter = require('../index.js')

describe('Unit Test Cases', function() {

    it('ISO2toISO3 - Taiwan', function(done) {
        var val = countryCodeConverter.ISO2toISO3('TW');
        expect(val).to.eql('TWN');
        done()
    })

    it('ISO2toISO3 - Singapore', function(done) {
        var val = countryCodeConverter.ISO2toISO3('SG');
        expect(val).to.eql('SGP');
        done()
    })

    it('ISO3toISO2 - United States', function(done) {
        var val = countryCodeConverter.ISO3toISO2('USA');
        expect(val).to.eql('US');
        done()
    })

    it('ISO3toISO2 - India', function(done) {
        var val = countryCodeConverter.ISO3toISO2('IND');
        expect(val).to.eql('IN');
        done()
    })

})