function Board(){
	var board = [];
	var dimension = 19;

	// Create the board
	(function(){
		for(var y=0; y<dimension; y++){
			board.push([]);
			var row = board[y];
			for(var x=0; x<dimension; x++){
				row.push(undefined);
			}
		}
	})();

	/* **************************************************  */

	function horizontalWinnerAt(x,y){
		var result = board[x][y];

		if(x > (dimension-5)){
			return undefined;
		}

		if(board[x+1][y] === result &&
			board[x+2][y] === result &&
			board[x+3][y] === result &&
			board[x+4][y] === result){
			return result;
		}

		return undefined;
	}

	function verticalWinnerAt(x,y){
		var result = board[x][y];

		if(y > (dimension-5)){
			return undefined;
		}

		if(board[x][y+1] === result &&
			board[x][y+2] === result &&
			board[x][y+3] === result &&
			board[x][y+4] === result) {
			return result;
		}

		return undefined;
	}

	function diagonalWinnerSEAt(x,y){
		var result = board[x][y];

		if(x > (dimension-5) || y > (dimension-5)){
			return undefined;
		}

		if(board[x+1][y+1] === result &&
			board[x+2][y+2] === result &&
			board[x+3][y+3] === result &&
			board[x+4][y+4] === result) {
			return result;
		}

		return undefined;
	}

	function diagonalWinnerNEAt(x,y){
		var result = board[x][y];

		if(x > (dimension-5) || y < 4){
			return undefined;
		}

		if(board[x+1][y-1] === result &&
			board[x+2][y-2] === result &&
			board[x+3][y-3] === result &&
			board[x+4][y-4] === result) {
			return result;
		}

		return undefined;
	}

	/* **************************************************  */

	this.placePiece = function(x,y,color){
		board[x][y] = color[0];
	};

	this.winner = function(){
		var winner;

		for(var x=0; x<dimension; x++){
			for(var y=0; y<dimension; y++){
				winner = horizontalWinnerAt(x,y) || verticalWinnerAt(x,y) || diagonalWinnerSEAt(x,y) || diagonalWinnerNEAt(x,y);

				if(winner === 'b'){
					return 'Black';
				}
				if(winner === 'w'){
					return 'White';
				}
			}
		}
		return winner;
	};

	/* For debugging purposes */

    this.print = function(){
      var col, row, row_output;
      for(row = 0; row < dimension; row++){
        row_output = "";
        for(col = 0; col < dimension; col++){
          row_output = row_output + " " + (board[col][row] !== undefined ? board[col][row][0] : "_");
        }
        console.log(row_output);
      }
    }

	/* **************************************************  */
}