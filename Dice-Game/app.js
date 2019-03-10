/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he/she wishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var playerScores, roundScore, activePlayer, gamePlaying, sixCount, goalScore;

init();



function init(){
    // Setup
    playerScores = [0,0];
    roundScore = 0;
    sixCount = 0;
    activePlayer = 0;
    gamePlaying = true;
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
}

document.querySelector('.goal-input').addEventListener('input', function(){
    goalScore = document.getElementById("goal-input").value;
    document.getElementById('goal').textContent = goalScore;
});

document.querySelector('.btn-roll').addEventListener('click', roll);
function roll(){

    if(gamePlaying){

        // Get random number for dice roll
        diceValue = Math.floor(Math.random() * 6) + 1;

        // Display result
        var diceDOM = document.querySelector('.dice');
        diceDOM.style.display = 'block';
        diceDOM.src = 'dice-' + diceValue + '.png';

        //Update round score if dice value is not 1

        if (diceValue !== 1){

            // If we see a 6 add to count
            if (diceValue === 6){
                sixCount += 1;
                
            }
            // if two 6's seen clear all scores and go to next player
            if (sixCount >= 2){
                roundScore = 0;
                playerScores[activePlayer] = 0;
                document.querySelector('#score-' + activePlayer).textContent = playerScores[activePlayer];
                nextPlayer();
            }
            roundScore += diceValue;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }
    
        else{
            // Change to next player
            nextPlayer();

            //document.querySelector('.player-0-panel').classList.remove('active');
            //document.querySelector('.player-1-panel').classList.add('active');
        }

    }
    

}

function nextPlayer(){
    
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScore = 0;
        sixCount = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

        document.querySelector('.player-0-panel').classList.toggle('active');
        document.querySelector('.player-1-panel').classList.toggle('active');
}

document.querySelector('.btn-new').addEventListener('click', init);

document.querySelector('.btn-hold').addEventListener('click', hold);

function hold(){
    if(gamePlaying){

        // Add current score to global score
        playerScores[activePlayer] += roundScore;
        
        // Update UI
        document.querySelector('#score-' + activePlayer).textContent = playerScores[activePlayer];
        
        // Check for winner 
        if(playerScores[activePlayer] >= goalScore){
            document.querySelector('#name-' + activePlayer).textContent = 'WINNER!!!';
            document.querySelector('.dice').style.display = 'none';
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        }
            

        else{
            nextPlayer();
        }
    }     
}




//document.querySelector('#current-' + activeplayer).textContent = diceValue;
//document.querySelector('#current-' + activeplayer).innerHTML = '<em>' + diceValue + '</em>';

