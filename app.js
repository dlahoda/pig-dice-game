
var scores, roundScore, activePlayer, gamePlaying;

init();

document.querySelector('#roll-btn').addEventListener('click', function(e) {
  e.preventDefault();
  if (gamePlaying) {
    var dice = Math.floor(Math.random() * 6) + 1;
    var diceDOM = document.querySelector('.dice');

    diceDOM.style.display = 'block';
    diceDOM.src = 'images/dice-' + dice + '.png';

    if (dice !== 1) {
      // Add score
      roundScore += dice;
      document.querySelector('#score-' + activePlayer).textContent = roundScore;
    } else {
      changePlayer();
    }
  }
});

document.querySelector('#hold-btn').addEventListener('click', function(e) {
  e.preventDefault();
  if (gamePlaying) {
    // Add current score to total
    scores[activePlayer] += roundScore;

    // Update UI
    document.querySelector('#total-' + activePlayer).textContent = scores[activePlayer];

    // Check winner
    if (scores[activePlayer] >= 20) {
      document.querySelector('#player-name-' + activePlayer).textContent = 'WINNER!';
      document.querySelector('.dice').style.display = 'none';
      
      document.querySelector('#player-' + activePlayer).classList.add('winner');
      document.querySelector('#player-' + activePlayer).classList.remove('active');
      gamePlaying = false;
    } else {
      // Change player
      changePlayer();
    }
  }
}); 

document.querySelector('#new-game-btn').addEventListener('click', init);

function init() {
  // Reset data
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;

  document.querySelector('.dice').style.display = 'none';

  document.getElementById('total-0').textContent = '0';
  document.getElementById('total-1').textContent = '0';
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('player-name-0').textContent = 'Player 1';
  document.getElementById('player-name-1').textContent = 'Player 2';
  document.getElementById('player-0').classList.remove('winner');
  document.getElementById('player-0').classList.remove('winner');
  document.getElementById('player-0').classList.remove('active');
  document.getElementById('player-1').classList.remove('active');
  document.getElementById('player-0').classList.add('active');
}


function changePlayer() {
  // Change player
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;

  document.getElementById('score-0').textContent = 0;
  document.getElementById('score-1').textContent = 0;

  document.getElementById('player-0').classList.toggle('active');
  document.getElementById('player-1').classList.toggle('active');

  document.querySelector('.dice').style.display = 'none';
}




