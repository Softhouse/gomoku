define([],function() {
  return {
    create: function(boardUI){
      return {
        start: function(){
          boardUI.drawBoard();
        }
      };
    }
  };
});
