const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");
let temperature;

function convert() {
    temperature = textBox.value; temperature = Number(temperature).toFixed(1);
    if (toFahrenheit.checked) {
        let celcTemp = temperature;
        temperature = (temperature*(9/5))+32;
        result.textContent = `${celcTemp}°C = ${temperature}°F`; //degrees symbol on Windows: Alt+0176 (numlock on -> numeric keypad, not the number row above alphabets)
    }
    else if (toCelsius.checked) {
        let fahrTemp = temperature;
        temperature = (temperature - 32)*(5/9);
        result.textContent = `${fahrTemp}°F = ${temperature}°C`;
    }
    else {
        result.textContent = "Select a unit first";
    }
}
