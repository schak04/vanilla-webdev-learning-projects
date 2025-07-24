// let username = window.prompt("What's your username?");
// console.log(username);
/* value is for form elements (like <input>)
   textContent is for regular HTML elements (like <div>) */
let username;
document.getElementById("submitBtn").onclick = function() {
    username = document.getElementById("usnm").value;
    // console.log(username);
    document.getElementById("h1").textContent = `Hello, ${username}!`;
}