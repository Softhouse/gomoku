define(['presenter', 'graphics', 'domReady!'], function(presenter, graphics){
  var canvas = document.getElementById('board'),
  gfx = graphics.create(canvas.getContext('2d')),
  prs = presenter.create(gfx);

  prs.drawBoard();
});
