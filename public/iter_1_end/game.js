define([],function() {
  return {
    create: function(boardUI, statusUI){
      var nextPlayer;
      return {
        start: function(){
          nextPlayer = 'black';
          boardUI.drawBoard();
          statusUI.nextPlayer(nextPlayer);

          boardUI.whenClicked(function(col, row){
            boardUI.drawPiece(col, row, nextPlayer[0]);
            nextPlayer = (nextPlayer === 'black' ? 'white' : 'black');
            statusUI.nextPlayer(nextPlayer);
          });
        }
      };
    }
  };
});
