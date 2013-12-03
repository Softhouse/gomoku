define(function() {

  function create(graphics) {

    function drawBoard() {
      var x, y;

      for(x=15; x<304; x+=16) {
        graphics.drawLine(x, 0, x, 303);
        graphics.drawLine(0, x, 303, x);
      };

    }

    return {
      drawBoard: drawBoard
    };
  }
  
  return {
    create: create
  };
});
