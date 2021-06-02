var d = new Date();
hr = d.getHours();

target = document.querySelector('.time-of-day')
console.log(target.textContent)
//checking hours to see what time of day it is
if (hr >= 5 & hr < 12) {
    //morning
    target.textContent = "Morning"
} else if (hr >= 12 & hr < 17) {
    //afternoon
    console.log("Afternoooooon")
    target.textContent = "Afternoon"
} else if (hr >= 17 & hr < 21) {
    //evening
    target.textContent = "Evening"
} else if (hr >= 21 & hr < 5) {
    //night
    target.textContent = "Night"
}


console.log(hr)