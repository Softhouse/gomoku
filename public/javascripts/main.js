define(['boardUI', 'statusUI', 'external/domReady!'], function(boardUI, statusUI){
  var bui = boardUI.create(),
      sui = statusUI.create(document.getElementById('next-player'),
                            document.getElementById('winner'));


  sui.nextPlayer('black');

  bui.drawBoard();
  bui.drawPiece(0,0, 'w');
  bui.drawPiece(0,17, 'w');
  bui.drawPiece(17, 0, 'b');
  bui.drawPiece(17, 17, 'B');
  bui.whenClicked(function (col, row) {
    bui.drawPiece(col, row, 'w');
    sui.winnerIs('black');
  });
});
