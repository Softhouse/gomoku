define(function() {

  function create(graphics, canvas) {
    var ctxt = canvas.getContext('2d');

    function drawBoard() {
      var x, y;

      for(x=15; x<304; x+=16) {
        graphics.drawLine(x, 0, x, 303);
        graphics.drawLine(0, x, 303, x);
      };

    }

    function drawPiece(col, row, filled) {
      var x = col * 16 + 7;
      var y = row * 16 + 7;
      var radius = 6;

      ctxt.beginPath();
      ctxt.arc(x, y, radius, 0, 2 * Math.PI);

      if(filled) {
        ctxt.fill();
      }
      ctxt.stroke();
    }

    return {
      drawBoard: drawBoard,
      drawPiece: drawPiece
    };
  }
  
  return {
    create: create
  };
});
