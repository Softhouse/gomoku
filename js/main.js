define(['boardUI', 'external/domReady!'], function(boardUI){
  var canvas = document.getElementById('board'),
  bui = boardUI.create(canvas);

  bui.drawBoard();
  bui.drawPiece(2,2);
  bui.drawPiece(7,3, true);
  bui.whenClicked(console.log.bind(console));
});
