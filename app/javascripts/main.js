var main = function(){
  var boardui = new BoardUI();
  var statusui = new StatusUI(document.getElementById('next-player'), document.getElementById('winner'));

  statusui.nextPlayer('black');

  boardui.drawBoard();
  boardui.drawPiece(0,0, 'w');
  boardui.drawPiece(0,17, 'w');
  boardui.drawPiece(17, 0, 'b');
  boardui.drawPiece(17, 17, 'B');
  boardui.addClickHandler(function (col, row) {
    boardui.drawPiece(col, row, 'w');
    statusui.winnerIs('black');
  });
}();
