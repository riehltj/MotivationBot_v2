function hourlyCalc(salary) {
    hourly = salary / 52 / 40;
    hourly = Math.round(hourly * 100) / 100
    return hourly;
}

function startTime() {
    let start = startT;
    start = start.split(":");
    let end = new Date();
    hoursPassed = parseInt(end.getHours()) - parseInt(start[0]);
    minutesPassed = parseInt(end.getMinutes()) - parseInt(start[1]);
    earnedToday = (((hoursPassed * hourly) + (minutesPassed * hourly / 60)) * 100) / 100;
    cashEarnedToday = earnedToday.toFixed(2)
    //console.log(cashEarnedToday)
    document.querySelector('.made-js').innerHTML = `$${cashEarnedToday}`;
}

function clickedGo() {
    salary = document.getElementById('salary').value
    startT = document.getElementById('time').value
    hourlyCalc(salary);
    startTime(startT);
}
setInterval(function () {
    clickedGo();
}, 1000);

// /clickedGo();
//