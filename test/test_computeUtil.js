var ComputeUtil = require('../lib/ComputeUtil');
var should   = require('should');

var computeUtil = new ComputeUtil();

describe('Util Function', function () {

    describe('#minus()', function () {
        it('should minus two numbers', function () {
            var num1 = Math.floor(Math.random() * 100);
            var num2 = Math.floor(Math.random() * 100);
            computeUtil.minus(num1, num2).should.be.equal(num1 - num2);
        });

        it('show be a number', function () {
            var num1 = Math.floor(Math.random() * 100);
            var num2 = Math.floor(Math.random() * 100);
            computeUtil.minus(num1, num2).should.be.a.Number;
        });
    });
});
