define(function() {

  function create(canvas) {
    var ctxt = canvas.getContext('2d');

    function drawBoard() {
      var x;

      for(x=0; x<=304; x+=16) {
        // Horizontal lines
        ctxt.lineWidth = 1;
        ctxt.beginPath();
        ctxt.moveTo(x, 0);
        ctxt.lineTo(x, 304);
        ctxt.stroke();

        // Vertical lines
        ctxt.beginPath();
        ctxt.moveTo(0, x);
        ctxt.lineTo(304, x);
        ctxt.stroke();
      };

    }

    function drawPiece(col, row, filled) {
      var x = col * 16 + 8;
      var y = row * 16 + 8;
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
