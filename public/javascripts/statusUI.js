define(function() {

  function create(nextPlayerElement, winnerElement) {

    function nextPlayer(player) {
      nextPlayerElement.textContent = 'Next: ' + player;
    }

    function winnerIs(winner) {
      winnerElement.textContent = 'Winner is: ' + winner;
    }

    return {
      nextPlayer: nextPlayer,
      winnerIs: winnerIs
    };
  }

  return {
    create: create
  };
  
});
