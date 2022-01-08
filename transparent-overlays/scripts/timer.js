let timer;
// NOTE: Will need to change this method of selection (in the longer term), this is just a proof of concept:
let timeElem = document.querySelector(".bubble > div.container > h1");

// Start and end in seconds
function countdown(start, end) {
    timer = setInterval(() => {
        if (start >= end) {
            adjustDisplay(start);
            start--;
        } else stopTimer();
    }, 1000)
}

function stopTimer() {
    clearInterval(timer);
            timeElem.style.width = 'auto';
}

function adjustDisplay(time) {
    let mins = intDiv(time, 60),
        secs = time % 60;
    
    timeElem.textContent = `${mins}:${zeroPad(secs)}`;
}

function intDiv(num, den) {
    return (num - (num % den)) / den;
}

function zeroPad(num) {
    if (num < 10) {
        return `0${num}`;
    } else {
        return `${num}`;
    }
}

document.addEventListener('keydown', (e) => {
    if (e.key == 'Enter') {
        e.preventDefault();
        let time = timeElem.textContent.split(/:/).map(el => parseInt(el, 10));
        timeElem.style.width = `${timeElem.getBoundingClientRect().width}px`;
        countdown(time[0]*60+time[1], 0);
    }
    if (e.key == 'Escape') stopTimer();
})