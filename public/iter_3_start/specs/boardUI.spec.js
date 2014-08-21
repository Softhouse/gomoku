define(['test-util/expect', 'boardUI'], function(expect, boardUI) {
  describe('boardUI', function() {
    var boardUIInstance;
    beforeEach(function(){
      boardUIInstance = boardUI.create();
    });

    describe('drawBoard', function(){
      it('exists', function(){
        expect(boardUIInstance.drawBoard).not.to.be.undefined;
      });
    });
  });
});
