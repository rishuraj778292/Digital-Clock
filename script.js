let hourSec = document.querySelector(".hour");
let minSec = document.querySelector(".min");
let secSec = document.querySelector(".sec");

let analog_hour = document.querySelector(".hour_hand");
let analog_min = document.querySelector(".min_hand");
let analog_sec = document.querySelector(".second_hand");




let setTime = ()=>{
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();

    let hour_deg = (hour % 12) * 30 + min / 2;
    let min_deg = min * 6 + sec / 10;
    let sec_deg = sec * 6;

    
    hourSec.innerHTML = (hour<10)?'0'+hour:hour;
    minSec.innerHTML = (min<10)?'0'+min:min;
    secSec.innerHTML = (sec<10)?'0'+sec:sec;

    analog_hour.style.transform=`rotate(${hour_deg}deg)`;
    analog_min.style.transform=`rotate(${min_deg}deg)`;
    analog_sec.style.transform=`rotate(${sec_deg}deg)`;
    
}


setInterval(()=>{
    setTime();
},1000)
setTime()