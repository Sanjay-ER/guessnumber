'use strict';
//Random Number Generation and Varibles Declaration

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score=20;
let highscore=0;

//creating function to avoid repeated usage of document.querySlector for message Display

const displayMessage=function(message){
    document.querySelector('.message').textContent=message;
};

//creating function to avoid repeated usage of document.querySlector for Unknowm Number Display

const displayNumber = function(number){
    document.querySelector('.number').textContent=number;
}

//Performing click event in check Button

document.querySelector('.check').addEventListener('click',function(){
    const guess=Number(document.querySelector('.guess').value);

//If no number is given

    if(!guess){
        displayMessage('No Number❌');
    }

//If Number is correct

    else if(guess ===secretNumber){
        displayMessage('Correct Number🎉🎊');
        displayNumber(secretNumber);
        document.querySelector('body').style.backgroundColor='green';
        document.querySelector('.number').style.width='30rem';
        document.querySelector('h1').textContent='Congratulations !!';

//condition for highScore

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
          }
    }

//if number is not correct    

    else if(guess !== secretNumber){
        if(score > 1){
            //using ternery oprator for shorten code
            displayMessage(guess > secretNumber ? 'Number is Too High!!':'Number is Too Low!!'); 
            score--;
            document.querySelector('.score').textContent = score;
        }
        else{
            displayMessage('You Lost');
            document.querySelector('.score').textContent=0;
            displayNumber(secretNumber);
            document.querySelector('body').style.backgroundColor='red';
            document.querySelector('h1').textContent='The Correct Number is';
            
        }

    }
});

//Reset The Game when clicked reset

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = score;
    displayNumber('?')
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = 'black';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('h1').textContent='Guess My Number!';
  });

