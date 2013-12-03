define(['lodash', 'test-util/expect', 'js/presenter'], 
       function(_, expect, presenterModule) {

  describe('Gameboard presenter', function() {
    var presenter,
        graphics;

    beforeEach(function() {
      graphics = {
        drawLine: sinon.spy()
      };

      presenter = presenterModule.create(graphics);
    });

    it('draws a grid', function() {
      presenter.drawBoard();
      var linePositions = _.range(15, 303, 16);

      // vertical lines
      linePositions.forEach(function(pos) {
        expect(graphics.drawLine).to.have.been.calledWith(0, pos, 303, pos);
      });

      // horizontal lines
      linePositions.forEach(function(pos) {
        expect(graphics.drawLine).to.have.been.calledWith(pos, 0, pos, 303);
      });
    });
  });
});
