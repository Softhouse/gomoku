function BoardUI(){
  var _canvas = document.getElementById('board');
  var _ctxt = board.getContext('2d');
  var _clickCallbacks = [];

  _canvas.addEventListener('click', function(evt) {
    var x, y;

    if(evt.x !== undefined && evt.y !== undefined) {
      x = evt.x;
      y = evt.y;
    }
    else {  // Firefox method to get the position
      x = evt.clientX;
      y = evt.clientY;
    }

    var rect = _canvas.getBoundingClientRect();
    x -= rect.left;
    y -= rect.top;

    _clickCallbacks.forEach(function(cb) {
      var col = Math.floor((x+8)/16) - 1;
      var row = Math.floor((y+8)/16) - 1;
      if(col >= 0 && col <= 17 && row >= 0 && row <= 17) {
        cb(col, row);
      }
    });
  });

  this.addClickHandler = function(callback) {
    _clickCallbacks.push(callback);
  };

  this.drawBoard = function() {
    var x;

    // Clear the canvas
    // Store the current transformation matrix
    _ctxt.save();

    // Use the identity matrix while clearing the canvas
    _ctxt.setTransform(1, 0, 0, 1, 0, 0);
    _ctxt.clearRect(0, 0, _canvas.width, _canvas.height);

    // Restore the transform
    _ctxt.restore();

    for(x=0; x<=304; x+=16) {
      // Horizontal lines
      _ctxt.lineWidth = 1;
      _ctxt.beginPath();
      _ctxt.moveTo(x, 0);
      _ctxt.lineTo(x, 304);
      _ctxt.stroke();

      // Vertical lines
      _ctxt.beginPath();
      _ctxt.moveTo(0, x);
      _ctxt.lineTo(304, x);
      _ctxt.stroke();
    }
  };

  this.drawPiece = function(col, row, color) {
    var x = col * 16 + 16;
    var y = row * 16 + 16;
    var radius = 7;

    var blackfill = _ctxt.createRadialGradient(x - radius/2,y - radius/2, 2,x - radius/2, y - radius/2 , radius);
    blackfill.addColorStop(0, '#676767');
    blackfill.addColorStop(1, '#000000');

    var whitefill = _ctxt.createRadialGradient(x - radius/2,y - radius/2, 2,x - radius/2, y - radius/2 , radius);
    whitefill.addColorStop(0, '#ffffff');
    whitefill.addColorStop(1, '#dddddd');

    _ctxt.save();

    _ctxt.beginPath();
    _ctxt.arc(x, y, radius, 0, 2 * Math.PI);

    _ctxt.fillStyle = (color[0] === 'b' || color[0] === 'B') ? blackfill : whitefill;

    _ctxt.shadowOffsetX = 1;
    _ctxt.shadowOffsetY = 1;
    _ctxt.shadowColor = "#000";
    _ctxt.shadowBlur = 2;

    _ctxt.fill();

    _ctxt.restore();
  };
}
