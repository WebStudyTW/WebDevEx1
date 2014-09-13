var ComputeUtil = require('./ComputeUtil');

var computeUtil = new ComputeUtil();

var app = exports = module.exports = IdCompute;

function IdCompute () {

};

IdCompute.prototype.run = function(data, getResult) {

    if (data.match(/[a-zA-Z]{1}[0-9]{9}/)) {
        var ans = 0;
        var ID = computeUtil.mapID(data[0]);

        var ID1 = parseInt(ID/10);
        var ID2 = ID%10 * 9;

        ans = ID1 + ID2;
        for (var i = 0 ; i < data.length - 2; i++) {
            var num = parseInt(data[i + 1]) * (8 - i);
            ans += num;
        }

        ans += parseInt(data[data.length - 1]);

        getResult(ans % 10 == 0 ? 'true' : 'false');
    }
    else {
        getResult('false');
    }

};

