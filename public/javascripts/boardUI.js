define(function() {

  function create() {
    var canvas = document.getElementById('board');
    var ctxt = canvas.getContext('2d');
    var clickCallbacks = [];

    function drawBoard() {
      var x;

      // Clear the canvas
      // Store the current transformation matrix
      ctxt.save();

      // Use the identity matrix while clearing the canvas
      ctxt.setTransform(1, 0, 0, 1, 0, 0);
      ctxt.clearRect(0, 0, canvas.width, canvas.height);

      // Restore the transform
      ctxt.restore();

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
      var x = col * 16 + 16;
      var y = row * 16 + 16;
      var radius = 8;

      var blackfill = ctxt.createRadialGradient(x - radius/2,y - radius/2, 2,x - radius/2, y - radius/2 , radius);
      blackfill.addColorStop(0, '#676767');
      blackfill.addColorStop(1, '#000000');

      var whitefill = ctxt.createRadialGradient(x - radius/2,y - radius/2, 2,x - radius/2, y - radius/2 , radius);
      whitefill.addColorStop(0, '#ffffff');
      whitefill.addColorStop(1, '#dddddd');

      ctxt.save();

      ctxt.beginPath();
      ctxt.arc(x, y, radius, 0, 2 * Math.PI);

      ctxt.fillStyle = filled ? blackfill : whitefill;

      // ctxt.setShadow(1, 1, 2, '#000' );

      ctxt.shadowOffsetX = 1;
      ctxt.shadowOffsetY = 1;
      ctxt.shadowColor = "#000";
      ctxt.shadowBlur = 2;
      ctxt.fill();

      ctxt.restore();
    }

    function whenClicked(callback) {
      clickCallbacks.push(callback);
    }

    canvas.addEventListener('click', function(evt) {
      var x, y;

      if(evt.x != undefined && evt.y != undefined) {
        x = evt.x;
        y = evt.y;
      }
      else {  // Firefox method to get the position
        x = evt.clientX + document.body.scrollLeft +
          document.documentElement.scrollLeft;
        y = evt.clientY + document.body.scrollTop +
          document.documentElement.scrollTop;
      }

      var rect = canvas.getBoundingClientRect();
      x -= rect.left;
      y -= rect.top;

      clickCallbacks.forEach(function(cb) {
        var col = Math.floor((x+8)/16) - 1;
        var row = Math.floor((y+8)/16) - 1;
        if(col >= 0 && col <= 17 && row >= 0 && row <= 17) {
          cb(col, row);
        }
      });
      
    });


    return {
      drawBoard: drawBoard,
      drawPiece: drawPiece,
      whenClicked: whenClicked
    };
  }
  
  return {
    create: create
  };
});
