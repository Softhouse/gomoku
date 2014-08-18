define(['test-util/expect', 'game'], function(expect, game) {
  describe('game', function() {
    it('exists', function(){
      expect(game).to.not.be.undefined;
    });
    it('has a create function', function(){
      expect(game.create).to.exist;
    });

    describe('start', function(){
      var gameInstance;
      var boardUI;
      beforeEach(function(){
        boardUI = {
          drawBoard: sinon.spy()
        };
        gameInstance = game.create(boardUI);
      });
      it('draws empty board', function(){
        gameInstance.start();

        expect(boardUI.drawBoard).to.have.been.called;
      });
    });
  });
});
