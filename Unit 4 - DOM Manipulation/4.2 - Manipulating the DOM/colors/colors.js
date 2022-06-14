function randomRGB() {
    const r = Math.floor(Math.random() * 256)
    const g = Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r},${g},${b})`
}


const h1 = document.getElementsByTagName('h1')[0];

const letters = document.querySelectorAll('.hello');

//h1.style.color = randomRGB();
setInterval(function () {
    for (let letter of letters) {
        letter.style.color = randomRGB();
    }
}, 1500)
