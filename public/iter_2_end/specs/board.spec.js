define(['test-util/expect', 'board'], function(expect, board) {
  describe('board', function() {

    var boardInstance;
    beforeEach(function(){
      boardInstance = board.create();
    });

    it('exists', function(){
      expect(board).to.not.be.undefined;
    });
    it('has a create function', function(){
      expect(board.create).to.exist;
    });

    describe('recently created', function(){
      it('exists', function(){
        expect(boardInstance).to.not.be.undefined;
      });

      it('has no winner', function(){
        expect(boardInstance.winner()).to.be.undefined;
      });
    });

    describe('horizontal', function(){

      describe('5 horizontal beads, four black and one white in the end', function(){
        beforeEach(function(){
          var col;
          for(col = 0; col < 4; col++){
            boardInstance.placePiece(col, 0, 'black');
          }
          boardInstance.placePiece(4, 0, 'white');
        });

        it('no winner', function(){
          expect(boardInstance.winner()).to.be.undefined;
        });
      });

      describe('5 horizontal blacks, starting at 0,0', function(){
        beforeEach(function(){
          var col;
          for(col = 0; col < 5; col++){
            boardInstance.placePiece(col, 0, 'black');
          }
        });

        it('winner is black', function(){
          expect(boardInstance.winner()).to.equal('black');
        });
      });

      describe('5 horizontal whites, starting at 5,0', function(){
        beforeEach(function(){
          var col;
          for(col = 5; col < 10; col++){
            boardInstance.placePiece(col, 0, 'white');
          }
        });

        it('winner is white', function(){
          expect(boardInstance.winner()).to.equal('white');
        });
      });
      describe('5 horizontal whites, starting at 5,5', function(){
        beforeEach(function(){
          var col;
          for(col = 5; col < 10; col++){
            boardInstance.placePiece(col, 5, 'white');
          }
        });

        it('winner is white', function(){
          expect(boardInstance.winner()).to.equal('white');
        });
      });
      describe('5 horizontal blacks, ending at 18,5', function(){
        beforeEach(function(){
          var col;
          for(col = 14; col < 19; col++){
            boardInstance.placePiece(col, 5, 'black');
          }
        });

        it('winner is black', function(){
          expect(boardInstance.winner()).to.equal('black');
        });
      });

    });

    describe('vertical', function(){
      describe('5 vertical beads, four black and one white in the end', function(){
        beforeEach(function(){
          var row;
          for(row = 0; row < 4; row++){
            boardInstance.placePiece(0, row, 'black');
          }
          boardInstance.placePiece(0, 4, 'white');
        });

        it('no winner', function(){
          expect(boardInstance.winner()).to.be.undefined;
        });
      });

      describe('5 vertical whites, starting at 0,0', function(){
        beforeEach(function(){
          var row;
          for(row = 0; row < 5; row++){
            boardInstance.placePiece(0, row, 'white');
          }
        });
        it('winner is white', function(){
          expect(boardInstance.winner()).to.equal('white');
        });

      });

      describe('5 vertical whites, bottom-left corner', function(){
        beforeEach(function(){
          var row;
          for(row = 14; row < 19; row++){
            boardInstance.placePiece(0, row, 'white');
          }
        });
        it('winner is white', function(){
          expect(boardInstance.winner()).to.equal('white');
        });
      });

      describe('5 vertical whites, bottom-right corner', function(){
        beforeEach(function(){
          var row;
          for(row = 14; row < 19; row++){
            boardInstance.placePiece(18, row, 'white');
          }
        });
        it('winner is white', function(){
          expect(boardInstance.winner()).to.equal('white');
        });
      });

      describe('5 vertical whites, top-right corner', function(){
        beforeEach(function(){
          var row;
          for(row = 0; row < 5; row++){
            boardInstance.placePiece(18, row, 'white');
          }
        });
        it('winner is white', function(){
          expect(boardInstance.winner()).to.equal('white');
        });
      });

    });

    describe('South-East', function(){
      describe('5 SE whites, top-left corner', function(){
        beforeEach(function(){
          for(var counter = 0; counter < 5; counter++){
            boardInstance.placePiece(counter, counter, 'white');
          }
        });
        it('winner is white', function(){
          expect(boardInstance.winner()).to.equal('white');
        });
      });

      describe('5 SE whites, top-right corner', function(){
        beforeEach(function(){
          for(var counter = 0; counter < 5; counter++){
            boardInstance.placePiece(counter+14, counter, 'white');
          }
        });
        it('winner is white', function(){
          expect(boardInstance.winner()).to.equal('white');
        });
      });

      describe('5 SE whites, bottom-left corner', function(){
        beforeEach(function(){
          for(var counter = 0; counter < 5; counter++){
            boardInstance.placePiece(counter, counter+14, 'white');
          }
        });
        it('winner is white', function(){
          expect(boardInstance.winner()).to.equal('white');
        });
      });

      describe('5 SE whites, bottom-right corner', function(){
        beforeEach(function(){
          for(var counter = 0; counter < 5; counter++){
            boardInstance.placePiece(counter+14, counter+14, 'white');
          }
        });
        it('winner is white', function(){
          expect(boardInstance.winner()).to.equal('white');
        });
      });

      describe('4 SE whites, top-right corner', function(){
        beforeEach(function(){
          for(var counter = 0; counter < 4; counter++){
            boardInstance.placePiece(counter+15, counter, 'white');
          }
        });
        it('no winner', function(){
          expect(boardInstance.winner()).to.be.undefined;
        });
      });

    });

    describe('North-East', function(){

      describe('5 NE whites, top-left corner', function(){
        beforeEach(function(){
          boardInstance.placePiece(0, 4, 'white');
          boardInstance.placePiece(1, 3, 'white');
          boardInstance.placePiece(2, 2, 'white');
          boardInstance.placePiece(3, 1, 'white');
          boardInstance.placePiece(4, 0, 'white');
        });
        it('winner is white', function(){
          expect(boardInstance.winner()).to.equal('white');
        });
      });

      describe('5 NE whites, top-right corner', function(){
        beforeEach(function(){
          boardInstance.placePiece(14, 4, 'white');
          boardInstance.placePiece(15, 3, 'white');
          boardInstance.placePiece(16, 2, 'white');
          boardInstance.placePiece(17, 1, 'white');
          boardInstance.placePiece(18, 0, 'white');
        });
        it('winner is white', function(){
          expect(boardInstance.winner()).to.equal('white');
        });
      });

      describe('5 NE whites, bottom-right corner', function(){
        beforeEach(function(){
          boardInstance.placePiece(14, 18, 'white');
          boardInstance.placePiece(15, 17, 'white');
          boardInstance.placePiece(16, 16, 'white');
          boardInstance.placePiece(17, 15, 'white');
          boardInstance.placePiece(18, 14, 'white');
        });
        it('winner is white', function(){
          expect(boardInstance.winner()).to.equal('white');
        });
      });

      describe('5 NE whites, bottom-left corner', function(){
        beforeEach(function(){
          boardInstance.placePiece(0, 18, 'white');
          boardInstance.placePiece(1, 17, 'white');
          boardInstance.placePiece(2, 16, 'white');
          boardInstance.placePiece(3, 15, 'white');
          boardInstance.placePiece(4, 14, 'white');
        });
        it('winner is white', function(){
          expect(boardInstance.winner()).to.equal('white');
        });
      });

    });


  });
});
