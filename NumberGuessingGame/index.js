/*
Notes:
  Got stuck on: while-loop logic to make sure the program isn't terminated before I want it to.
  Fix: a boolean var to check the 'running' state of the loop.
*/

const min = 1;
const max = 100;
const answer = Math.floor(Math.random() * (max-min+1) + min);

let attempts = 0;
let guess;
let running = true; // to check the running state

while (running) {
    guess = window.prompt(`Choose a number between ${min}-${max}`); guess = Number(guess);
    if (isNaN(guess) || guess<min || guess>max) window.alert("Please enter a valid number");
    else {
        attempts++;
        if (guess<answer) window.alert("Too LOW. Try again.");
        else if (guess>answer) window.alert("Too HIGH. Try again.");
        else if (guess==answer) {
            window.alert(`You guessed it RIGHT! Congrats.\nThe answer is ${answer}.\nIt took you ${attempts} attempts.\n`);
            running = false;
        }
    }
}