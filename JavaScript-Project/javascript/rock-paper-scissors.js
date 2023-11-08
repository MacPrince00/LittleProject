
let calculation = JSON.parse(localStorage.getItem('sorefin')) || {
    win: 0,
    lose: 0
  };


function displayMove () {
  let computerMove = Math.random();
  let moves ='';
  let replace = document.querySelector('.Js-Final');
  let score = document.querySelector('.userScore');
  let score2 = document.querySelector('.compScore');

   if(computerMove < 1/3) {
    moves = 'Rock';
    }
    else if(computerMove > 1/3 && computerMove < 2/3) {
      moves = 'Paper';
    }
    else{ moves = 'Scissors'}

   if (moves === 'Rock') {
    replace.innerHTML = 'Tie. Play Again!';
   }
   else if (moves === 'Paper') {
    replace.innerHTML = 'Computer Picked Paper.... <span class="action2">You Lose!</span>';
    score2.innerHTML = calculation.lose += 1;
   }
   else if (moves === 'Scissors') {
    replace.innerHTML = 'Computer Picked Scissors.... <span class="action">You Win!</span>';
    score.innerHTML = calculation.win += 1;
   }
   localStorage.setItem('sorefin', JSON.stringify(calculation));
}

function displayMove1 () {
  let computerMove = Math.random();
  let moves ='';
  let replace = document.querySelector('.Js-Final');
  let score = document.querySelector('.userScore');
  let score2 = document.querySelector('.compScore');

   if(computerMove < 1/3) {
    moves = 'Rock';
    }
    else if(computerMove > 1/3 && computerMove < 2/3) {
      moves = 'Paper';
    }
    else{ moves = 'Scissors'};

   if (moves === 'Paper') {
    replace.innerHTML = 'Tie. Play Again..';
   }
   else if (moves === 'Rock') {
    replace.innerHTML = 'Computer Picked Rock.... <span class="action">You Win!</span>';
    score.innerHTML = calculation.win += 1;
   }
   else if (moves === 'Scissors') {
    replace.innerHTML = 'Computer Picked Scissors..... <span class="action2">You Lose!</span>';
    score2.innerHTML = calculation.lose += 1;
   }
   localStorage.setItem('sorefin', JSON.stringify(calculation));
}

function displayMove2 () {
  let computerMove = Math.random();
  let moves ='';
  let replace = document.querySelector('.Js-Final');
  let score = document.querySelector('.userScore');
  let score2 = document.querySelector('.compScore');

   if(computerMove < 1/3) {
    moves = 'Rock';
    }
    else if(computerMove > 1/3 && computerMove < 2/3) {
      moves = 'Paper';
    }
    else{ moves = 'Scissors'}

   if (moves === 'Paper') {
    replace.innerHTML = 'Computer Picked Paper..... <span class="action">You Win!</span>';
    score.innerHTML = calculation.win += 1;
   }
   else if (moves === 'Rock') {
    replace.innerHTML = 'Computer Picked Rock.... <span class="action2">You Lose!</span>';
    score2.innerHTML = calculation.lose += 1;
   }
   else if (moves === 'Scissors') {
    replace.innerHTML = 'Tie. Play Again..';
   }
   localStorage.setItem('sorefin', JSON.stringify(calculation));
}
function mykeys() {
  event.key;
  if(event.key === 'r') {
    displayMove()
  }
   else if (event.key === 'p') {
    displayMove1()
   }
   else if(event.key === 's') {
    displayMove2()
   }
}
function deleteAll() {
  let score = document.querySelector('.userScore');
  let score2 = document.querySelector('.compScore');
  let replace = document.querySelector('.Js-Final');

  score.innerHTML = 0;
  score2.innerHTML = 0;
  calculation.win = 0;
  calculation.lose = 0;
  localStorage.removeItem('sorefin');

  replace.innerHTML ='Pick a move..';
}
