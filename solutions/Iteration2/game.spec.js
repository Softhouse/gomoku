/*jshint -W030 */

describe('Game', function() {
	var boardUI, statusUI, board, clickCallback, game, winner;

	beforeEach(function(){
		boardUI = {
			drawBoard: sinon.spy(), 
			drawPiece: sinon.spy(), 
			addClickHandler: function(callback){
				clickCallback = callback;
			}
		};
		statusUI = {
			nextPlayer: sinon.spy(),
			winnerIs: sinon.spy()
		};
		board = {
			placePiece: sinon.spy(),
			winner: function(){
				return winner;
			}
		};
		game = new Game(boardUI, statusUI, board);
		game.start();
	});

	describe('is started', function(){
	   	it('should draw an empty board', function() {
			expect(boardUI.drawBoard).to.have.been.called;
		});

		it('black should always start', function(){
			expect(statusUI.nextPlayer).to.have.been.calledWith('black');
		});
	});

	describe('Black clicks', function(){
		beforeEach(function(){
			clickCallback();
		});

		it('a piece is drawn', function(){
			expect(boardUI.drawPiece).to.have.been.called;
		});

		it('a piece is added the board instance', function(){
			expect(board.placePiece).to.have.been.called;
		});

		it('and the next time its whites turn',function(){
			expect(statusUI.nextPlayer).to.have.been.calledWith('white');
		});

		it('and the next time its blacks turn', function(){
			clickCallback();
			var call3 = statusUI.nextPlayer.getCall(2);
			expect(call3.args[0]).to.equal('black');
		});
	});

	describe('Is not yet won', function(){
		beforeEach(function(){
			clickCallback();
		});

		it('No winner should be presented', function(){
			expect(statusUI.winnerIs).to.not.have.been.called;
		});
	});

	describe('Is won', function(){
		beforeEach(function(){
			winner = 'black';
			clickCallback();
		});

		it('The winner should be presented', function(){
			expect(statusUI.winnerIs).to.have.been.calledWith('black');
		});

		it('Next player should not be declared', function(){
			expect(statusUI.nextPlayer).to.not.have.been.calledWith('white');
		});
	});
});