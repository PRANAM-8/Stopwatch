window.addEventListener("load", () => {
    let minutes = 0;
    let seconds = 0;
    let tens = 0;

    let appendMinutes = document.querySelector('#minutes');
    let appendSeconds = document.querySelector('#seconds');
    let appendTens = document.querySelector('#tens');

    let startBtn = document.querySelector('#start');
    let stopBtn = document.querySelector('#stop');
    let resetBtn = document.querySelector('#reset');
    let interval;

    const startTimer = () => {
        tens++;

        if (tens > 99) {
            tens = 0;
            seconds++;
        }

        if (seconds > 59) {
            seconds = 0;
            minutes++;
        }

        // Proper formatting
        appendTens.innerHTML = tens.toString().padStart(2, '0');
        appendSeconds.innerHTML = seconds.toString().padStart(2, '0');
        appendMinutes.innerHTML = minutes.toString().padStart(2, '0');
    };

    startBtn.addEventListener("click", () => {
        clearInterval(interval);
        interval = setInterval(startTimer, 10);
    });

    stopBtn.addEventListener("click", () => {
        clearInterval(interval);
    });

    resetBtn.addEventListener("click", () => {
        clearInterval(interval);
        tens = 0;
        seconds = 0;
        minutes = 0;

        appendTens.innerHTML = "00";
        appendSeconds.innerHTML = "00";
        appendMinutes.innerHTML = "00";
    });
});