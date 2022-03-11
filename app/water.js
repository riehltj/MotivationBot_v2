const element = document.getElementById('wave-height');
const style = getComputedStyle(element)
startingTop = parseInt(style.top);

divSelect = document.querySelector('.bottles-drank')

let clicks = 0;
document.querySelector('.drink').addEventListener('click', function () {
    clicks = clicks + 1;

    newTop = startingTop - ((startingTop - 120) / 16 * clicks);

    if (newTop > 120) {
        clicks = 0;
        newTop = startingTop


        node = document.createElement('img')
        node = new Image(25, 50)

        node.src = "./img/water.svg"

        divSelect.appendChild(node)
    }
    // console.log(newTop)
    element.style.top = `${newTop}px`;

})