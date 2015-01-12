/*jshint -W030 */

describe('Game', function() {
	var boardUI, statusUI, clickCallback, game;

	beforeEach(function(){
		boardUI = {
			drawBoard: sinon.spy(), 
			drawPiece: sinon.spy(), 
			addClickHandler: function(callback){
				clickCallback = callback;
			}
		};
		statusUI = {
			nextPlayer: sinon.spy()
		};

		game = new Game(boardUI, statusUI);
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

		it('and the next time its whites turn',function(){
			expect(statusUI.nextPlayer).to.have.been.calledWith('white');
		});

		it('and the next time its blacks turn', function(){
			clickCallback();
			var call3 = statusUI.nextPlayer.getCall(2);
			expect(call3.args[0]).to.equal('black');
		});
	});
});

