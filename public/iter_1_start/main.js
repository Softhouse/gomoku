define(['boardUI', 'statusUI', 'game', 'external/domReady!'], function(boardUI, statusUI, game){
  var bui = boardUI.create(),
      sui = statusUI.create(document.getElementById('next-player'),
                            document.getElementById('winner'));


  var game = game.create(bui, sui);
  game.start();

  // sui.nextPlayer('black');

  // bui.drawBoard();
  // bui.drawPiece(0,0, 'w');
  // bui.drawPiece(0,17, 'w');
  // bui.drawPiece(17, 0, 'b');
  // bui.drawPiece(17, 17, 'B');
  // bui.whenClicked(function (col, row) {
  //   bui.drawPiece(col, row, 'w');
  //   sui.winnerIs('black');
  // });
});
