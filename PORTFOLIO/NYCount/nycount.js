const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

const newYearTime = new Date("Jan 1, 2024 00:00:00").getTime()

updateCountdown()

function updateCountdown(){
    const now = new Date().getTime();
    const gap = newYearTime - now;
    
    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;
    
    const d = Math.floor(gap/days);
    const h = Math.floor((gap % days) / hours);
    const m = Math.floor((gap % hours) / minutes);
    const s = Math.floor((gap % minutes) / seconds);

    daysEl.innerText = d;
    hoursEl.innerText = h;
    minutesEl.innerText = m;
    secondsEl.innerText = s;
    setTimeout(updateCountdown, 1000);
}