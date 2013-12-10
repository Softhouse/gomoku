define(function() {

  function create(nextPlayerElement, winnerElement) {

    function nextPlayer(player) {
      nextPlayerElement.textContent = 'Next: ' + player;
    }

    function winnerIs(winner) {
      winnerElement.textContent = 'Winner is: ' + winner;
    }

    function clear() {
      nextPlayerElement.textContent = '';
      winnerElement.textContent = '';
    }

    return {
      nextPlayer: nextPlayer,
      winnerIs: winnerIs,
      clear: clear
    };
  }

  return {
    create: create
  };
  
});
