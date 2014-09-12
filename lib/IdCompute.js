var ComputeUtil = require('./ComputeUtil');

var computeUtil = new ComputeUtil();

var app = exports = module.exports = IdCompute;

function IdCompute () {

};

IdCompute.prototype.run = function(data, getResult) {

    getResult(data);
};

