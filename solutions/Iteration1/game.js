function Game(boardUI, statusUI){
	var _boardUI = boardUI;
	var _statusUI = statusUI;
	var _nextPlayer = 'black';

	this.start = function(){
		_boardUI.drawBoard();
		_statusUI.nextPlayer(_nextPlayer);

		_boardUI.addClickHandler(function(col, row){
			_boardUI.drawPiece(col, row, _nextPlayer);
			_nextPlayer = (_nextPlayer === 'black' ? 'white' : 'black');
			_statusUI.nextPlayer(_nextPlayer);
		});
	};
}