var scores, roundScore, activePlayer, gamePlaying;

init();

var lastDice;

document.querySelector('.btn-roll').addEventListener('click', function(){
    if(gamePlaying){
        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;

        document.getElementById('dice1').style.display ='block';
        document.getElementById('dice2').style.display ='block';
        document.getElementById('dice1').src = 'dice-'+ dice1 + '.png';
        document.getElementById('dice2').src = 'dice-'+ dice2 + '.png';

        if(dice1 !== 1 || dice2 !== 1){
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            
        }else{
            nextPlayer();
        }
    
        // if( dice === 6 && lastDice === 6){
        //     scores[activePlayer] = 0;
        //     document.getElementById('score-' + activePlayer).textContent ='0';
        //     nextPlayer();
        // }else if (dice !== 1){
        //     roundScore += dice;
        //     document.querySelector('#current-' + activePlayer).textContent = roundScore;
        // }else{
        //     nextPlayer();
        // }

        //lastDice = dice;

    }

});

document.querySelector('.btn-hold').addEventListener('click',function(){
    if(gamePlaying){
        scores[activePlayer] += roundScore;

        document.querySelector('#score-'+ activePlayer).textContent = scores[activePlayer];

        var input = document.querySelector('.score-win').value;

        var winningScore;

        if( input ){

            winningScore = input;

        }else{
            winningScore = 100;
        }
    
        if(scores[activePlayer] >= winningScore){
            document.querySelector('#name-' + activePlayer).textContent = 'winner';
    
            //document.querySelector('.dice').style.display = 'none';

            hideDice();
    
            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
            gamePlaying = false;
        }else{
            nextPlayer();
        }

    }


    
});

function nextPlayer(){
    if(activePlayer === 0){
        activePlayer = 1;
    }else{
        activePlayer = 0;
    }

    roundScore = 0;

    document.getElementById('current-0').textContent ='0';
    document.getElementById('current-1').textContent ='0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    //document.querySelector('.dice').style.display = 'none';
    hideDice();

}

function hideDice(){
    document.querySelector('#dice1').style.display = 'none';
    document.querySelector('#dice2').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
    scores =[0,0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;

    //document.querySelector('.dice').style.display = 'none';
    hideDice();
    
    document.getElementById('score-0').textContent= '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('#name-0').textContent ='Player 1';
    document.querySelector('#name-1').textContent ='Player 2';

    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}

