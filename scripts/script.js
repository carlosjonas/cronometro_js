// Definindo as constantes de ids do html
const minutesEl = document.querySelector("#minutes");
const secondsEl = document.querySelector("#seconds");
const milisecondsEl = document.querySelector("#miliseconds");
const startBtn = document.querySelector("#startBtn");
const pauseBtn = document.querySelector("#pauseBtn");
const resumeBtn = document.querySelector("#resumeBtn");
const resetBtn = document.querySelector("#resetBtn");

let interval;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;
let isPaused = false;

startBtn.addEventListener("click", startTimer);

function startTimer(){

	// Intervalo que determina a mudança do tempo, executa a cada 10 milisegundos
	interval = setInterval(() => {
		if(!isPaused){
			miliseconds += 10

			if (miliseconds === 1000) {
				seconds ++;
				miliseconds = 0;
			}

			if (seconds === 60) {
				minutes ++;
				seconds = 0;
			}

			minutesEl.textContent = minutes;
			secondsEl.textContent = seconds;
			milisecondsEl.textContent = miliseconds;
		}
	}, 10);
}