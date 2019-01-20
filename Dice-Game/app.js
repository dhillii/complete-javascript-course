/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he/she wishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var playerscores, roundScore, activeplayer;

playerScores = [0,0];
roundScore = 0;
activeplayer = 0;


document.querySelector('.dice').style.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';



document.querySelector('.btn-roll').addEventListener('click', roll);

function roll(){
    // Get random number for dice roll
    diceValue =  Math.floor(Math.random() * 6) + 1;

    // Display result
    var diceDOM = document.querySelector('.dice');
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + diceValue + '.png';

    //Update round score if dice value is not 1

}




//document.querySelector('#current-' + activeplayer).textContent = diceValue;
//document.querySelector('#current-' + activeplayer).innerHTML = '<em>' + diceValue + '</em>';

