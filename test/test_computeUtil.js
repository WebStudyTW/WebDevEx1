var ComputeUtil = require('../lib/ComputeUtil');
var should   = require('should');

var computeUtil = new ComputeUtil();

describe('Util Function', function () {

    describe('#stringSplit()', function () {
        it('should stringSplit two numbers', function () {
            var string = 'R123';
            computeUtil.stringSplit(string).should.be.eql({
                '0': 'R', '1': '1', '2': '2', '3': '3'
            });
        });

        it('show be a number', function () {
            var string = 'R123';
            computeUtil.stringSplit(string).should.be.a.Array;
        });
    });
});
