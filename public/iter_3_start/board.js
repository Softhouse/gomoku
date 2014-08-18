define([],function() {
  return {
    create: function(){
      var board = [];
      var dimension = 19;

      // Create the board
      (function(){
        var col, row, column, row;
        for(col = 0; col < dimension; col++){
          board.push([]);
          column = board[col];
          for(row = 0; row < dimension; row++){
            column.push(undefined);
          }
        }

      })();

      var horizontalWinnerAtPosition = function(col, row){
        var result, following_col;

        if(col > (dimension - 5)){
          // no winner can appear
          return undefined;
        }

        result = board[col][row];

        // compare the result at the column we are at with the four following, horizontally
        for(following_col = col + 1; following_col < col + 5; following_col++){
          if(board[following_col][row] !== result){
            result = undefined;
            break;
          }
        }

        return result;
      };

      var verticalWinnerAtPosition = function(col, row){
        var result, following_row;
        if(row > (dimension - 5)){
          return undefined;
        }

        result = board[col][row];

        // compare the result at the column we are at with the four following, vertically
        for(following_row = row + 1; following_row < row + 5; following_row++){
          if(board[col][following_row] !== result){
            result = undefined;
            break;
          }
        }

        return result;
      };

      var southEastWinnerAtPosition = function(col, row){
        var result;

        if(row > (dimension - 5) || col > dimension - 5){
          return undefined;
        }

        result = board[col][row];

        for(var counter = 0; counter < 4; counter++){
          if(board[(col + 1 + counter)][(row + 1 + counter)] !== result){
            result = undefined;
            break;
          }
        }

        return result;
      };

      var northEastWinnerAtPosition = function(col, row){
        var result;

        if(row < 4 || col > dimension - 5){
          return undefined;
        }

        result = board[col][row];

        for(var counter = 0; counter < 4; counter++){
          if(board[(col + 1 + counter)][(row - 1 - counter)] !== result){
            result = undefined;
            break;
          }
        }

        return result;
      };

      return {
        placePiece: function(col, row, color){
          board[col][row] = color;
        },
        winner: function(){
          var winner, row, col;

          for(row = 0; row < dimension; row++){
            for(col = 0; col < dimension; col++){

              winner = horizontalWinnerAtPosition(col, row) ||
                        verticalWinnerAtPosition(col,row) ||
                        southEastWinnerAtPosition(col,row) ||
                        northEastWinnerAtPosition(col,row);

              if(winner !== undefined){
                break;
              }
            }
            // stop if we have a result
            if(winner !== undefined){
              break;
            }
          }

          return winner;
        },
        print: function(){
          // Utility method to print the board in case of failure
          var col, row, row_output;
          for(row = 0; row < dimension; row++){
            row_output = "";
            for(col = 0; col < dimension; col++){
              row_output = row_output + " " + (board[col][row] !== undefined ? board[col][row][0] : "_");
            }
            console.log(row_output);
          }
        }
      };
    }
  };
});
