const button = document.getElementById("button");
const l1 = document.getElementById("l1");
const l2 = document.getElementById("l2");
const l3 = document.getElementById("l3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

button.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    l1.textContent = randomNum1;
    l2.textContent = randomNum2;
    l3.textContent = randomNum3;
}