define(['test-util/expect', 'game'], function(expect, game) {
  describe('game', function() {

    var gameInstance;
    var boardUI;
    var statusUI;
    var clickCallback;
    var winner;
    beforeEach(function(){
      clickCallback = undefined;
      winner = undefined;

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
      board = {
        winner: function(){ return winner; },
        placePiece: sinon.spy()
      }
      gameInstance = game.create(boardUI, statusUI, board);
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
        it('the board should have placed the piece', function(){
          expect(board.placePiece).to.have.been.calledWith(1, 1, 'black');
        });
      });

      describe('winning', function(){

        describe('when noone has won', function(){
          beforeEach(function(){
            clickCallback(1, 1);
          });

          it('the status UI should not be updated with winner', function(){
            expect(statusUI.winnerIs).to.not.have.been.called;
          });
        });

        describe('when winning', function(){
          beforeEach(function(){
            winner = 'black';
            clickCallback(1, 1);
          });

          it('the status UI should be updated with winner', function(){
            expect(statusUI.winnerIs).to.have.been.calledWith(winner);
          });
        });

      });
    });
  });
});
