const timer = document.getElementById("timer");
let timeLeft = Number(timer.textContent);

function countdownTimer() {
    if (timeLeft < 0) {
        clearInterval(timerId);
        alert("Вы победили в конкурсе!");
        window.location = "https://www.journ.msu.ru/ppp_reg/doc/zayavlenie.doc";
    } else {
        const hours = Math.floor(timeLeft / 60 / 60).toString().padStart(2, "0");
        const minutes = Math.floor((timeLeft / 60) % 60).toString().padStart(2, "0");
        const seconds = Math.floor(timeLeft % 60).toString().padStart(2, "0");
        timer.textContent = `${hours}:${minutes}:${seconds}`;
        timeLeft--;
    }
}

countdownTimer();
const timerId = setInterval(countdownTimer, 1000);
