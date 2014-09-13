var IdCompute = require('../lib/IdCompute');
var should = require('should');

var idCompute = new IdCompute();

describe('ID compute', function () {

    describe('#run()', function () {
        it('should return ture if the ID correct', function (done) {
            var ID = 'B120863158';
            idCompute.run(ID, function (result) {
                result.should.be.equal('true');
                done();
            });
        });

        it('should return false if the ID correct', function (done) {
            var ID = 'B123456789';
            idCompute.run(ID, function (result) {
                result.should.be.equal('false');
                done();
            });
        });

    });
});
