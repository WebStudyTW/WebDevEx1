var ComputeUtil = require('../lib/ComputeUtil');
var should   = require('should');

var computeUtil = new ComputeUtil();

describe('Util Function', function () {










    describe('#multiply()', function () {
        it('should multiply two numbers', function () {
            var num1 = Math.floor(Math.random() * 100);
            var num2 = Math.floor(Math.random() * 100);
            computeUtil.multiply(num1, num2).should.be.equal(num1 * num2);
        });

    describe('#add()', function () {
        it('should add two numbers', function () {
            var num1 = Math.floor(Math.random() * 100);
            var num2 = Math.floor(Math.random() * 100);
            computeUtil.add(num1, num2).should.be.equal(num1 + num2);
        });

        it('show be a number', function () {
            var num1 = Math.floor(Math.random() * 100);
            var num2 = Math.floor(Math.random() * 100);
            computeUtil.multiply(num1, num2).should.be.a.Number;
            computeUtil.add(num1, num2).should.be.a.Number;
        });
    });
});
