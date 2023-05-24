const hour = document.getElementById("hour");
const minute =document.getElementById("minutes");
const seconds = document.getElementById("seconds");


const clock = setInterval(
    function time(){

        // Get time function in Javascript
        const dateNow = new Date();
        let hr = dateNow.getHours();
        let min = dateNow.getMinutes();
        let sec = dateNow.getSeconds();


        // Adding leading Zeroes if required
        hr = hr.toString().padStart(2, "0");
        min = min.toString().padStart(2, "0");
        sec = sec.toString().padStart(2, "0");

        const timeString = `${hr}:${min}:${sec}`;
        hour.textContent = hr;
        minute.textContent = min;
        seconds.textContent = sec;
    }, 1000
);