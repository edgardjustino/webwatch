const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const second = document.querySelector('#second');
const bgwatch = document.querySelector('.watch');

const watch = setInterval(function time(){
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (sec < 10) sec = '0' + sec;

    if ( hr >= 0 && hr < 12){
        document.body.style.background = 'linear-gradient(120deg, #ffe53bd8, #ff2525da)';
    } else if ( hr >=12 && hr < 18){
        document.body.style.background = 'linear-gradient(120deg, #3b9affd8, #135eafd8)';
    } else {
        document.body.style.background = 'linear-gradient(120deg, #0d2a48, #010911)';
        // bgwatch.innerHTML = `background: #0d294867`;
    }

    hour.textContent = hr;
    minute.textContent = min;
    second.textContent = sec;

    
})


