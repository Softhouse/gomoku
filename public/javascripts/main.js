define(['boardUI', 'statusUI', 'external/domReady!'], function(boardUI, statusUI){
  var canvas = document.getElementById('board'),
      bui = boardUI.create(canvas),
      sui = statusUI.create(document.getElementById('next-player-container'),
                            document.getElementById('winner-container'));


  sui.nextPlayer('black');

  bui.drawBoard();
  bui.drawPiece(8,2);
  bui.drawPiece(7,3, true);
  bui.whenClicked(function (col, row) {
    bui.drawPiece(col, row);
    sui.winnerIs('black');
  });
});
