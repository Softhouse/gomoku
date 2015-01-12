function Game(boardUI, statusUI, board){
	var _boardUI = boardUI;
	var _statusUI = statusUI;
	var _nextPlayer = 'black';
	var _board = board;

	this.start = function(){
		_boardUI.drawBoard();
		_statusUI.nextPlayer(_nextPlayer);

		_boardUI.addClickHandler(function(x, y){
			_boardUI.drawPiece(x, y, _nextPlayer);
			_board.placePiece(x, y, _nextPlayer);

			var winner = board.winner();
			if(winner !== undefined){
				_statusUI.winnerIs(winner);
			} else {
				_nextPlayer = (_nextPlayer === 'black' ? 'white' : 'black');
				_statusUI.nextPlayer(_nextPlayer);
			}
		});
	};
}