const element = document.getElementById('wave-height');
const style = getComputedStyle(element)
startingTop = parseInt(style.top);
// console.log(startingTop)

let clicks = 0;
document.querySelector('.drink').addEventListener('click', function () {
    clicks = clicks + 1;

    newTop = startingTop - ((startingTop - 120) / 16 * clicks);

    if (newTop > 120) {
        clicks = 0;
        newTop = startingTop

    }
    // console.log(newTop)
    element.style.top = `${newTop}px`;

})