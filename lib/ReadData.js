const fileDataManager = require('./FileDataManager');

module.exports = function (file) {
    return fileDataManager.byExtension(file);
};