define(['boardUI', 'statusUI', 'external/domReady!'], function(boardUI, statusUI){
  var bui = boardUI.create(),
      sui = statusUI.create(document.getElementById('next-player'),
                            document.getElementById('winner'));


  sui.nextPlayer('black');

  bui.drawBoard();
  bui.drawPiece(0,0);
  bui.drawPiece(0,17);
  bui.drawPiece(17, 0, true);
  bui.drawPiece(17, 17, true);
  bui.whenClicked(function (col, row) {
    bui.drawPiece(col, row);
    sui.winnerIs('black');
  });
});
