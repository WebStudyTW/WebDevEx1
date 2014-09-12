var computeUtil = require('./ComputeUtil');

var app = exports = module.exports = IdCompute;

function IdCompute () {

};

IdCompute.prototype.run = function(data, getResult) {

    getResult(data);
};

