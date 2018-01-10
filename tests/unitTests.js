var superagent = require('superagent')
var expect = require('expect.js')
var countryCodeConverter = require('../index.js')

describe('Unit Test Cases', function() {

    it('ISO2toISO3 - Taiwan', function(done) {
        var val = countryCodeConverter.ISO2toISO3('TW');
        expect(val).to.eql('TWN');
        done()
    })

    it('ISO2toISO3 - Afghanistan', function(done) {
        var val = countryCodeConverter.ISO2toISO3('AF');
        expect(val).to.eql('AFG');
        done()
    })

    it('ISO2toName - Albania', function(done) {
        var val = countryCodeConverter.ISO2toName('AL');
        expect(val).to.eql('ALBANIA');
        done()
    })

    it('ISO2toName - Algeria', function(done) {
        var val = countryCodeConverter.ISO2toName('DZ');
        expect(val).to.eql('ALGERIA');
        done()
    })

    it('ISO2toNum - American Samoa', function(done) {
        var val = countryCodeConverter.ISO2toNum('AS');
        expect(val).to.eql('016');
        done()
    })

    it('ISO2toNum - Andorra', function(done) {
        var val = countryCodeConverter.ISO2toNum('AD');
        expect(val).to.eql('020');
        done()
    })

    it('ISO3toISO2 - Angola', function(done) {
        var val = countryCodeConverter.ISO3toISO2('AGO');
        expect(val).to.eql('AO');
        done()
    })

    it('ISO3toISO2 - Anguilla', function(done) {
        var val = countryCodeConverter.ISO3toISO2('AIA');
        expect(val).to.eql('AI');
        done()
    })

    it('ISO3toName - Antarctica', function(done) {
        var val = countryCodeConverter.ISO3toName('ATA');
        expect(val).to.eql('ANTARCTICA');
        done()
    })

    it('ISO3toName - ANTIGUA AND BARBUDA ', function(done) {
        var val = countryCodeConverter.ISO3toName('ATG');
        expect(val).to.eql('ANTIGUA AND BARBUDA');
        done()
    })

    it('ISO3toNum - Argentina', function(done) {
        var val = countryCodeConverter.ISO3toNum('ARG');
        expect(val).to.eql('032');
        done()
    })

    it('ISO3toNum - Armenia', function(done) {
        var val = countryCodeConverter.ISO3toNum('ARM');
        expect(val).to.eql('051');
        done()
    })

    it('ISONumtoISO2 - Aruba', function(done) {
        var val = countryCodeConverter.ISONumtoISO2('533');
        expect(val).to.eql('AW');
        done()
    })

    it('ISONumtoISO2 - Australia', function(done) {
        var val = countryCodeConverter.ISONumtoISO2('036');
        expect(val).to.eql('AU');
        done()
    })

    it('ISONumtoISO3 - Austria', function(done) {
        var val = countryCodeConverter.ISONumtoISO3('040');
        expect(val).to.eql('AUT');
        done()
    })

    it('ISONumtoISO3 - Azerbaijan', function(done) {
        var val = countryCodeConverter.ISONumtoISO3('031');
        expect(val).to.eql('AZE');
        done()
    })

    it('ISONumtoName - Bahamas', function(done) {
        var val = countryCodeConverter.ISONumtoName('044');
        expect(val).to.eql('BAHAMAS');
        done()
    })

    it('ISONumtoName - Bahrain', function(done) {
        var val = countryCodeConverter.ISONumtoName('048');
        expect(val).to.eql('BAHRAIN');
        done()
    })

    it('ISONumtoName - Bahrain - Negative test', function(done) {
        var val = countryCodeConverter.ISONumtoName('BAHRAIN');
        expect(val).to.eql('Provide a country code to convert to Name');
        done()
    })

    it('ISONametoISO2 - Bangladesh', function(done) {
        var val = countryCodeConverter.ISONametoISO2('BANGLADESH');
        expect(val).to.eql('BD');
        done()
    })

    it('ISONametoISO2 - Barbados', function(done) {
        var val = countryCodeConverter.ISONametoISO2('BARBADOS');
        expect(val).to.eql('BB');
        done()
    })

    it('ISONametoISO3 - Belarus', function(done) {
        var val = countryCodeConverter.ISONametoISO3('BELARUS');
        expect(val).to.eql('BLR');
        done()
    })

    it('ISONametoISO3 - Belgium', function(done) {
        var val = countryCodeConverter.ISONametoISO3('BELGIUM');
        expect(val).to.eql('BEL');
        done()
    })

    it('ISONametoNum - Belize', function(done) {
        var val = countryCodeConverter.ISONametoNum('BELIZE');
        expect(val).to.eql('084');
        done()
    })

    it('ISONametoNum - Benin', function(done) {
        var val = countryCodeConverter.ISONametoNum('BENIN');
        expect(val).to.eql('204');
        done()
    })

})