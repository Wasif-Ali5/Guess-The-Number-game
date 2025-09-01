let randomNumber = parseInt(Math.random()* 100 + 1);
const userInput = document.querySelector("#user-input");
const btn = document.querySelector("#btn");
const prev = document.querySelector("#prev-num");
const remaining = document.querySelector("#rem-att");
const lowOrHigh = document.querySelector(".lowOrHigh");
const start = document.querySelector(".resultParas");

let prevNum = [];
let numOfAttempts = 1;
let play = true;

const p = document.createElement('p');

if(play){
    btn.addEventListener("click",function(e){
         e.preventDefault();
         let guess = parseInt(userInput.value);
         console.log(guess);
         validGuess(guess);
    })
}

function validGuess(guess){
      if(isNaN(guess)){
        alert(`please enter a valid number.`);
        userInput.value='';
      }
      else if(guess<1){
          alert(`please enter value greater than 1.`);
          userInput.value='';
      }
      else if(guess>100){
          alert(`please enter value less than 100.`);
          userInput.value='';
      }
      else{
        prevNum.push(guess);
        if(numOfAttempts===11){
            displayGuess(guess);
            displayMessage(`you Lose.Random number was ${randomNumber}`);
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess); 
        }
      }
}

function checkGuess(guess){
      if(guess === randomNumber){
          displayMessage(`You Win! Guess the Right Number`);
          endGame();
      }
      else if(guess < randomNumber){
        displayMessage(`Number is Too Low.`);
      }
      else if(guess > randomNumber){
        displayMessage(`Number is Too High.`);
      }
}
  
function displayGuess(guess){
  userInput.value='';
  numOfAttempts++;
  prev.innerHTML+=`${guess},  `;
  remaining.innerHTML= `${11-numOfAttempts}`;
}

function displayMessage(msg){
  lowOrHigh.innerHTML=`${msg}`;
  lowOrHigh.style.marginLeft= '8rem' ;
  lowOrHigh.style.marginTop='1.5rem';
  if(msg === 'You Win! Guess the Right Number'){
    lowOrHigh.style.color='green';
  }
  lowOrHigh.style.color='red';
}

function endGame(){
     userInput.value='';
     userInput.setAttribute('disabled','');
     p.classList.add('button');
     p.innerHTML=`<h3 id="newBtn">Start New Game</h3>`;
     start.appendChild(p);
     p.style.marginLeft= '9.5rem' ;
     p.style.marginTop='0.5rem';
     play=false;
     newGame();
}

function newGame(){
     const newBtn=document.querySelector("#newBtn");
     newBtn.addEventListener("click",function(e){
       randomNumber = parseInt(Math.random()* 100 + 1 );
       userInput.value='';
       userInput.removeAttribute('disabled');
       prevNum=[];
       numOfAttempts=1;
       prev.innerHTML='';
       remaining.innerHTML=`${11-numOfAttempts}`;
       start.removeChild(p);
       lowOrHigh.innerHTML='';
       play=true;
     })
}