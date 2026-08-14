'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let playing = true;
console.log(secretNumber);

//check button logic start
document.querySelector('.check').addEventListener('click', function () {

  const guess = Number(document.querySelector('.guess').value);
  const msg = document.querySelector('.message');
  const scoreRef = document.querySelector(".score");
  const answer = document.querySelector('.number');
  const highscore = document.querySelector(".highscore");
  let currentHighscore = Number(highscore.textContent);
  const guessCheck = document.querySelector('.guess').value;
 
  if(playing === false)return;

  if(guessCheck == ""){
    msg.textContent = "the input box is empty"
  }
  else if(guess < 1 || guess > 20){
    msg.textContent = "The entered number is out of valid range."
  }
  else if(guess > secretNumber){
    msg.textContent = "Number is too high";
    score--;
    scoreRef.textContent = String(score);    
  }
  else if(guess < secretNumber){
    msg.textContent = "Number is too low";
    score--;
    scoreRef.textContent = String(score);  
  }
  else if(guess === secretNumber){
    answer.textContent = String(secretNumber);
    msg.textContent = "You win";
    if(score > currentHighscore){             //highscore logic
      highscore.textContent = String(score);
    }
    document.querySelector("body").style.backgroundColor = "green";
    playing = false;

    
  }
 
  if(score === 0){
    msg.textContent = "you lose"
    answer.textContent = String(secretNumber);
    playing = false;
    document.querySelector("body").style.backgroundColor = "red";
  }
  
});
//check button logic end


//again button logic start

document.querySelector(".btn.again").addEventListener("click", function (){
  score = 20;
  const scoreRef = document.querySelector(".score");
  const msg = document.querySelector(".message");
  const answer = document.querySelector('.number');
  const inputField = document.querySelector('.guess');
  scoreRef.textContent = String(score);
  msg.textContent = "Start guessing...";
  answer.textContent = "?";
  inputField.value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(secretNumber);
  playing = true;
})

//again button logic end
