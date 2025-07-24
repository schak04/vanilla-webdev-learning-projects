const ageInput = document.getElementById("ageInput");
const submitButton = document.getElementById("submitBtn");
const response = document.getElementById("response");
let age;

submitButton.onclick = function() {
    age = ageInput.value;
    age = Number(age);
    if (!age) {
        response.textContent = `No input received. Enter your age.`;
    }
    else if (age >= 100) {
        response.textContent = `You are TOO OLD to enter this site`;
    }
    else if (age == 0) {
        response.textContent = `You can't enter. You're literally a newborn.`;
    }
    else if (age >= 18) {
        response.textContent = `You are old enough to enter this site. Welcome :)`;
    }
    else if (age < 0) {
        response.textContent = `How can your age be negative?`;
    }
    else {
        response.textContent = `You're a minor. Entry DENIED.`;
    }
}