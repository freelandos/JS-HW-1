let dead = document.getElementById("dead");
let lost = document.getElementById("lost");

function restartGame(message) {
    alert(message);
    dead.textContent = 0;
    lost.textContent = 0;
}

getHole = (index) => document.getElementById(`hole${index}`)

for (holeIndex = 1; holeIndex < 10; holeIndex++) {
    const hole = getHole(holeIndex);

    hole.onclick = () => {
        if (hole.classList.contains("hole_has-mole")) {
            dead.textContent = Number(dead.textContent) + 1;
            if (dead.textContent == 10) {
                restartGame("Победа!");
            }
        } else {
            lost.textContent = Number(lost.textContent) + 1;
            if (lost.textContent == 5) {
                restartGame("Вы проиграли!");
            }
        }
    }
}
