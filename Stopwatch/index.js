const stopwatch = document.getElementById("stopwatch");
let timer = null;
let initTime = 0;
let passedTime = 0;
let isRunning = false;

function start() {
    if (!isRunning) {
        initTime = Date.now() - passedTime;
        id = setInterval(update, 10);
        isRunning = true;
    }
}

function stop() {
    if (isRunning) {
        clearInterval(id);
        isRunning = false;
    }
}

function reset() {
    stop();
    stopwatch.textContent = "00:00:00:00";
}

function update() {
    const currentTime = Date.now();
    passedTime = currentTime - initTime;
    console.log(passedTime);
    let hours = Math.floor(passedTime / (1000 * 60 * 60));
    let minutes = Math.floor(passedTime / (1000 * 60) % 60);
    let seconds = Math.floor(passedTime / 1000 % 60);
    let milliseconds = Math.floor(passedTime % 1000 / 10);

    hours = hours.toString().padStart(2, "0");
    minutes = minutes.toString().padStart(2, "0");
    seconds = seconds.toString().padStart(2, "0");
    milliseconds = milliseconds.toString().padStart(2, "0");

    stopwatch.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
}