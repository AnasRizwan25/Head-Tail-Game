let btn = document.querySelectorAll('.js-game-button');
let dice = document.querySelector('.js-dice-button');
let p1 = document.querySelector('.p1');
let p2 = document.querySelector('.p2');
let player = document.querySelector('.playerWinner');

let player1Count = 0;
let player2Count = 0;

player.innerText = 'Player Wins';


function randamChoice() {
  return Math.random() < 0.5 ? 'head' : 'tail';
}

function Decision(value) {
  const player1 = value;
  const player2 = player1 === 'head' ? 'tail' : 'head';
  const randamValue = randamChoice();

  let playerWin;

  if (player1 === randamValue) {
    playerWin = 'Player 1 Win';
  } else {
    playerWin = 'Player 2 Win';
  }
  player.innerText = playerWin;

  dice.classList.remove('dice');


  // Update the dice click listener each time a decision is made
  dice.onclick = () => {
    Dice(playerWin);
  }
}

function Dice(playerWin) {
  let random1 = Math.floor(Math.random() * 3);
  let random2 = Math.floor(Math.random() * 3);
  console.log(random1, random2);


  // Check for doubles
  if (random1 === 6 && random2 === 6) {
    console.log(random1, random2);

    // Increment the win count based on the winner
    if (playerWin === 'Player 1 Win') {
      player1Count++;
      p1.innerText = `Player 1 Win Count: ${player1Count}`;
    } else {
      player2Count++;
      p2.innerText = `Player 2 Win Count: ${player2Count}`;
    }
    console.log(`${playerWin}, win`);
  } else {
    dice.classList.add('dice');
    player.innerText = '';
  }
}
