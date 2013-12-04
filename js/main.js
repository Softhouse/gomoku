define(['presenter', 'graphics', 'domReady!'], function(presenter, graphics){
  var canvas = document.getElementById('board'),
  gfx = graphics.create(canvas.getContext('2d')),
  prs = presenter.create(gfx, canvas);

  prs.drawBoard();
  prs.drawPiece(2,2);
  prs.drawPiece(7,3, true);
});
