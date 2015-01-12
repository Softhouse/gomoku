var main = function(){
  var boardui = new BoardUI();
  var statusui = new StatusUI(document.getElementById('next-player'), document.getElementById('winner'));
  var board = new Board();

  var game = new Game(boardui, statusui, board);
  game.start();
}();