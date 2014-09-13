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
        it('show be a number', function () {
            var num1 = Math.floor(Math.random() * 100);
            var num2 = Math.floor(Math.random() * 100);
            computeUtil.multiply(num1, num2).should.be.a.Number;
        });
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
            computeUtil.add(num1, num2).should.be.a.Number;
        });
    });

    describe('#divide()', function () {
        it('should divide two numbers', function () {
            var num1 = Math.floor(Math.random() * 100);
            var num2 = Math.floor(Math.random() * 100);
            computeUtil.divide(num1, num2).should.be.equal(num1 / num2);
        });

        it('show be a number', function () {
            var num1 = Math.floor(Math.random() * 100);
            var num2 = Math.floor(Math.random() * 100);
            computeUtil.divide(num1, num2).should.be.a.Number;

        });

    });

    var mapArray = {'A': 10, 'B': 11, 'C': 12, 'D': 13, 'E': 14,
                    'F': 15, 'G': 16, 'H': 17, 'I': 34, 'J': 18,
                    'K': 19, 'M': 21, 'N': 22, 'O': 35, 'P': 23,
                    'Q': 24, 'T': 27, 'U': 28, 'V': 29, 'W': 32,
                    'X': 30, 'Z': 33, 'L': 20, 'R': 25, 'S': 26, 'Y': 31};
    describe('#mapID()', function () {
        it('should mapID two numbers', function () {
            var chr = 'B';
            computeUtil.mapID(chr).should.be.equal(mapArray[chr]);
        });

        it('show be a number', function () {
            var chr = 'I';
            computeUtil.mapID(chr).should.be.a.Number;
        });
    });
});
