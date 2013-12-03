define(['test-util/expect'], function(expect) {

  describe('first tests', function() {
    it('fails', function() {
      expect(1).to.equal(2);
    });

    it('works with sinon', function() {
      var stub = sinon.stub();
      expect(stub).to.have.been.called;
    });
  });
});
