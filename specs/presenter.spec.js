define(['test-util/chai'], function(chai) {
  var expect = chai.expect;

  describe('first tests', function() {
    it('fails', function() {
      expect(1).to.equal(2);
    });
  });
});
