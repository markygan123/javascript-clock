const twentyFour = () => {
    let date = new Date();

    clearInterval(runClock);
    time.innerHTML = date.toLocaleTimeString('en-US', { hour12: false });

    runClock = setInterval(twentyFour, 1000);
}

const twelveHour = () => {
    let date = new Date();

    clearInterval(runClock);
    time.innerHTML = date.toLocaleTimeString();

    runClock = setInterval(twelveHour, 1000);
}


const main = () => {
    let date = new Date();
    
    let twelveHourEl = document.querySelector(".twelve-hour");
    let twentyFourHourEl = document.querySelector(".twenty-four-hour");
    time.innerHTML = date.toLocaleTimeString();
    
    twelveHourEl.addEventListener("click", function () {
        twentyFourHourEl.classList.remove("active");
        twelveHourEl.classList.add("active");
        twelveHour();
    });
    twentyFourHourEl.addEventListener("click", function () {
        twelveHourEl.classList.remove("active");
        twentyFourHourEl.classList.add("active");
        twentyFour();
    });
}


const currentDay = () => {
    let day = new Date().getDay();
    let sunday = document.getElementById("sunday");
    let monday = document.getElementById("monday");
    let tuesday = document.getElementById("tuesday");
    let wednesday = document.getElementById("wednesday");
    let thursday = document.getElementById("thursday");
    let friday = document.getElementById("friday");
    let saturday = document.getElementById("saturday");

    switch (day) {
        case 0:
            sunday.classList.toggle("currentDay");
            break;
        case 1:
            monday.classList.toggle("currentDay");
            break;
        case 2:
            tuesday.classList.toggle("currentDay");
            break;
        case 3:
            wednesday.classList.toggle("currentDay");
            break;
        case 4:
            thursday.classList.toggle("currentDay");
            break;
        case 5:
            friday.classList.toggle("currentDay");
            break;
        case 6:
            saturday.classList.toggle("currentDay");
            break;
    
        default:
            break;
    }

    document.querySelector(".twelve-hour").classList.toggle("active");
}

let runClock = setInterval(main, 1000);
currentDay();


