const path = require('path');
const properties = require('properties');
const csv = require('node-csv').createParser();
const yaml = require('js-yaml');
const fs = require('fs');
const xlsx = require('xlsx');

class FileDataManager {

    byExtension(fileName) {
        const loadFile = {
            '.json': this.loadJsonFile,
            '.csv': this.loadCsvFile,
            '.yml': this.loadYmlFile,
            '.xlsx': this.loadXlsxFile,
            '.properties': this.loadPropertiesFile
        };
        const ext = path.extname(fileName);
        return loadFile[ext](fileName);
    };

    loadPropertiesFile(fileName) {
        return new Promise((resolve, reject) => {
            properties.parse(fileName, {path: true}, (error, data) => {
                return error ? reject(error) : resolve(data); 
           })
       })
    };

    loadCsvFile(fileName) {
        return new Promise((resolve, reject) => {
            csv.parseFile(fileName, function(error, data) {
                return error ? reject(error) : resolve(data);
            });
        })
    };

    loadJsonFile(fileName) {
        return require(path.resolve(fileName));
    };

    loadYmlFile(fileName) {
        try {
            return yaml.safeLoad(fs.readFileSync(fileName, 'utf8'));
        } catch (error) {
            throw new Error(error);
        }
    };

    loadXlsxFile(fileName) {
        try {
            return xlsx.readFile(fileName);
        } catch (error) {
            throw new Error(error);
        }
    };
}

module.exports = new FileDataManager();
