var startPoint;
var difference = 0;
var timerId;
var stops = 0;
var splits = 0;

function startTimer() {
    startPoint = window.performance.now() - difference;
    timerId = setInterval(showTime, 4);
    start.classList.add('hidden');
    stopButton.classList.remove('hidden');
}

function resetTimer() {
    clearInterval(timerId);
    timerId = null;
    startPoint = null;
    hours.innerHTML = '00';
    minutes.innerHTML = '00';
    seconds.innerHTML = '00';
    milliseconds.innerHTML = '000';
    start.classList.remove('hidden');
    stopButton.classList.add('hidden');
    stops = 0;
    splits = 0;
    difference = 0;
    results.innerHTML = '';
}

function stopTimer() {
    clearInterval(timerId);
    timerId = null;
    stopButton.classList.add('hidden');
    start.classList.remove('hidden');
    showResult(++stops, 'Stop');
}

function splitTimer() {
    if (timerId) {
        showResult(++splits, 'Split');
    }
}

function showTime() {
    difference = Math.round(window.performance.now() - startPoint);

    if (difference >= 1000) {
        difference -= 1000;
        startPoint += 1000;
        seconds.innerHTML = minDigits(+seconds.innerHTML + 1, 2);
    }
    milliseconds.innerHTML = minDigits(difference, 3);

    if (+seconds.innerHTML == 60) {
        seconds.innerHTML = '00';
        minutes.innerHTML = minDigits(+minutes.innerHTML + 1, 2);
    }

    if (+minutes.innerHTML == 60) {
        minutes.innerHTML = '00';
        hours.innerHTML = minDigits(+hours.innerHTML + 1, 2);
    }
}

function minDigits(number, numDigits) {
    if (String(number).length < numDigits) {
        return new Array(numDigits - String(number).length + 1).join('0') + number;
    } else {
        return number;
    }
}

function showResult(number, name) {
    var result = document.createElement('label');
    result.className = 'result';
    result.textContent = number + ' ' + name + ': ' + hours.innerHTML + ':' + minutes.innerHTML + ':' +
            seconds.innerHTML + '.' + milliseconds.innerHTML;
    results.appendChild(result);
}

start.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
split.addEventListener('click', splitTimer);
reset.addEventListener('click', resetTimer);


