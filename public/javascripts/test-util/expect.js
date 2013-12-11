define(['test-util/chai', 'test-util/sinon-chai'], function(chai, sinonChai) {
  chai.use(sinonChai);
  return chai.expect;
});
