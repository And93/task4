const path = require('path');
const chai =  require('chai');
const expect = chai.expect;
const readData = require(path.resolve('lib/readData'));

describe('ReadData', () => {

    it('should read data from properties file', async () => {
        const data = await readData('./lib/data/test.properties');
        expect(JSON.stringify(data)).to.be.equal(JSON.stringify({a:1,b:2}));
    });

    it('should read data from csv file', async () => {
        const data = await readData('./lib/data/test.csv');
        expect(JSON.stringify(data)).to.be.equal(JSON.stringify([['id', 'user', 'pass']]));
    });

    it('should read data from json file', () => {
        const data = readData('./lib/data/test.json');
        expect(JSON.stringify(data)).to.be.equal(JSON.stringify({name: 'mytests', version: '1.0.0', description: 'unit tests'}));
    });

    it('should read data from yml file', () => {
        const data = readData('./lib/data/test.yml');
        expect(data).to.be.equal('<?xml version="1.0" encoding="UTF-8"?> <yml_start date="2018 00:00"> <offers data="Simple example"> </offers> </yml_start>');
    });
});
