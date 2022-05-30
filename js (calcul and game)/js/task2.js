

let attempts = 3;
let totalWin = 0;
let currentAttempt = 100;
let secondPlay = false;
let one = 1;
let two = 2;
let three = 3;
let eight = 8;
let twelve = 12;
let twentyFive = 25;
let fifteen = 50;
let hundred = 100;
let twohundred = 200;

let showMessage = confirm('Do you want to play a game?')
if (!showMessage) {
   alert('You did not become a billionaire, but can.')
} else{
  begin();
}

function begin(){
  casino()
}

function casino(){
  while (attempts > 0) {
    let random = getRandom(eight);
    let askUser =
      prompt(
        'Choose a roulette pocket number from 0 to 8' + '\r' +
        'Attemts left:' + ' ' + attempts + '\r' +
        'Total prize: ' + totalWin + '\r' +
        'possible prize on current attempt:' + currentAttempt
        , 0)
    switch (attempts) {
      case three: 
        !secondPlay ? currentAttempt -= fifteen : currentAttempt -= hundred;
        if (random === askUser) {
          !secondPlay ? totalWin += hundred : totalWin += twohundred;
        } else if (!askUser) {             
          attempts = 0;
        }
        break;
      case two: 
        !secondPlay ? currentAttempt -= twentyFive : currentAttempt -= fifteen;
        if (random === askUser) {
          !secondPlay ? totalWin += fifteen : totalWin += hundred;
        } else if (!askUser) {             
          attempts = 0;
        }
        break;
      case 1: 
        currentAttempt = 0;
        if (random === askUser) {
          !secondPlay ? totalWin += twentyFive : totalWin += fifteen;
        } else if (!askUser) {             
          attempts = 0;
        }
        break;
        default: 1;
    }    
    attempts--;

      if (attempts === 0 && totalWin === 0) {
      alert('Thank you for your participation. Your prize is: ' + totalWin);
          if (confirm('Do you want to continue?')) {
            attempts = three;
            totalWin = 0;
            currentAttempt = twohundred;
            random = getRandom(twelve);
            secondPlay = true;
            casino();
          } else {
            alert('Thank you for your participation.Your prize is: ' + totalWin)
          }
    } else if (attempts === 0) {
        alert('Congratulation, you won!   Your prize is: ' + totalWin + '$');
        if (confirm('Do you want to continue?')) {
          attempts = three;
          currentAttempt = twohundred;
          random = getRandom(twelve);
          secondPlay = true;
          casino();
        } else {
          alert('Thank you for your participation.Your prize is: ' + totalWin)
        }
      }
  }
}

function getRandom(a) {
  return Math.round(Math.random() * a).toString()
}