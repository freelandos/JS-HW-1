const counter = document.getElementById("clicker__counter");
const img = document.getElementById("cookie");
const speed = document.getElementById("clicker__speed");
let increase = true;
let start = 0;
let end = 0;

img.onclick = () => {
    counter.textContent = Number(counter.textContent) + 1;

    if (increase) {
        start = new Date();
        img.width += 20;
    } else {
        end = new Date();
        img.width -= 20;
    }

    increase = !increase;
    speed.textContent = (1000 / Math.abs(end - start)).toFixed(2);
}
