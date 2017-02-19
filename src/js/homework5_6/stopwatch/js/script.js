var startPoint = null;
var difference = null;
var timerId;

function startTimer() {
    startPoint = window.performance.now();
    timerId = setInterval(showResult, 1);
    start.classList.add('hidden');
    pause.classList.remove('hidden');
}

function clearTimer() {
    clearInterval(timerId);
    timerId = null;
    startPoint = null;
    hours.innerHTML = "00";
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";
    milliseconds.innerHTML = 0;
    start.classList.remove('hidden');
    pause.classList.add('hidden');
    cont.classList.add('hidden');
}

function pauseTimer() {
    clearInterval(timerId);
    timerId = null;
    pause.classList.add('hidden');
    cont.classList.remove('hidden');
}

function continueTimer() {
    startPoint = window.performance.now() - difference;
    timerId = setInterval(showResult, 4);
    pause.classList.remove('hidden');
    cont.classList.add('hidden');
}

function showResult() {
    difference = window.performance.now() - startPoint;
    difference = Math.round(difference);

    if (difference > 1000) {
        difference -= 1000;
        startPoint += 1000;
        seconds.innerHTML = format2digits(+seconds.innerHTML + 1);
    }
    milliseconds.innerHTML = difference;

    if (+seconds.innerHTML == 60) {
        seconds.innerHTML = "00";
        minutes.innerHTML = format2digits(+minutes.innerHTML + 1);
    }

    if (+minutes.innerHTML == 60) {
        minutes.innerHTML = "00";
        hours.innerHTML = format2digits(+hours.innerHTML + 1);
    }
}

function format2digits(number) {
    return String(number).length == 1 ? "0" + number : number;
}

start.addEventListener("click", startTimer);
pause.addEventListener("click", pauseTimer);
cont.addEventListener("click", continueTimer);
clear.addEventListener("click", clearTimer);


