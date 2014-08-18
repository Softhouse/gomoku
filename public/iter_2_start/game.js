define([],function() {
  return {
    create: function(boardUI, statusUI, board){
      var nextPlayer;
      return {
        start: function(){
          nextPlayer = 'black';
          boardUI.drawBoard();
          statusUI.nextPlayer(nextPlayer);

          boardUI.whenClicked(function(col, row){
            boardUI.drawPiece(col, row, nextPlayer[0]);
            board.placePiece(col, row, nextPlayer);

            var winner = board.winner();
            if(winner !== undefined){
              statusUI.winnerIs(winner);
            } else {
              nextPlayer = (nextPlayer === 'black' ? 'white' : 'black');
              statusUI.nextPlayer(nextPlayer);
            }
          });
        }
      };
    }
  };
});
