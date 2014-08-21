define(['test-util/expect', 'game'], function(expect, game) {
  describe('game', function() {

    var gameInstance;
    var boardUI;
    var statusUI;
    var clickCallback;
    beforeEach(function(){
      clickCallback = undefined;

      boardUI = {
        drawBoard: sinon.spy(),
        whenClicked: function(callback){
          clickCallback = callback;
        },
        drawPiece: sinon.spy()
      };
      statusUI = {
        nextPlayer: sinon.spy(),
        winnerIs: sinon.spy()
      };
      gameInstance = game.create(boardUI, statusUI);
    });

    it('exists', function(){
      expect(game).to.not.be.undefined;
    });
    it('has a create function', function(){
      expect(game.create).to.exist;
    });

    describe('at start', function(){
      beforeEach(function(){
        gameInstance.start();
      });
      it('draws empty board', function(){
        expect(boardUI.drawBoard).to.have.been.called;
      });
      it('black starts', function(){
        expect(statusUI.nextPlayer).to.have.been.calledWith('black');
      });
      describe('positioning first piece', function(){
        beforeEach(function(){
          clickCallback(1, 1);
        });
        it('the piece should be drawn on the board', function(){
          expect(boardUI.drawPiece).to.have.been.calledWith(1, 1, 'b');
        });
        it('the next player is white', function(){
          expect(statusUI.nextPlayer).to.have.been.calledWith('white');
        });
      });
    });
  });
});
