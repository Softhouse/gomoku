define(function() {

  function create (canvasContext) {

    function drawLine (x1, y1, x2, y2) {
      canvasContext.lineWidth = 1;
      canvasContext.beginPath();
      canvasContext.moveTo(x1, y1);
      canvasContext.lineTo(x2, y2);
      canvasContext.stroke();
    }
    
    return {
      drawLine: drawLine
    };
  }

  return {
    create: create
  };
  
});
