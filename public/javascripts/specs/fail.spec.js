define(['test-util/expect'], function(expect) {
  describe('fails', function() {
    it('fails', function() {
      expect(3).to.equal(2);
    });
  });
});
