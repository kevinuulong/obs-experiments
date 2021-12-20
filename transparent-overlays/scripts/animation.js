document.querySelector('.container').addEventListener('animationend', () => {
    document.querySelector('.container').classList.toggle('animating');
})

document.querySelector('.sub').addEventListener('animationend', () => {
    document.querySelector('.sub').classList.toggle('animating');
})

document.addEventListener('keydown', () => {
    document.querySelector('.container').classList.add('exit');
    document.querySelector('.sub').classList.add('exit');
})