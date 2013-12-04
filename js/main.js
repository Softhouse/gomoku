define(['presenter', 'domReady!'], function(presenter){
  var canvas = document.getElementById('board'),
  prs = presenter.create(canvas);

  prs.drawBoard();
  prs.drawPiece(2,2);
  prs.drawPiece(7,3, true);
  prs.whenClicked(console.log.bind(console));
});
