function StatusUI(nextPlayerElement, winnerElement){
  // private  
  var _nextPlayerElement = nextPlayerElement;
  var _winnerElement = winnerElement;

  // privileged
  this.nextPlayer = function(player){
    _nextPlayerElement.textContent = 'Next: ' + player;
  };

  this.winnerIs = function(winner){
    _winnerElement.textContent = 'Winner is: ' + winner;
  };

  this.clear = function(){
    _nextPlayerElement.textContent = '';
    _winnerElement.textContent = '';  
  };
}