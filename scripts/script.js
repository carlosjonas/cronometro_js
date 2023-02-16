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
pauseBtn.addEventListener("click", pauseTimer);
resumeBtn.addEventListener("click", resumeTimer);
resetBtn.addEventListener("click", resetTimer);

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

			minutesEl.textContent = formatTime(minutes);
			secondsEl.textContent = formatTime(seconds);
			milisecondsEl.textContent = formatMiliseconds(miliseconds);
		}
	}, 10);

	startBtn.style.display = "none";
	pauseBtn.style.display = "block";
}

//Função que pausa o timer
function pauseTimer(){
	isPaused = true;
	pauseBtn.style.display = "none";
	resumeBtn.style.display = "block";
}

//Função que resume o timer
function resumeTimer(){
	isPaused = false;
	pauseBtn.style.display = "block";
	resumeBtn.style.display = "none";
}

//Função que reseta o timer
function resetTimer(){
	clearInterval(interval);
	minutes = 0;
	seconds = 0;
	miliseconds = 0;

	minutesEl.textContent = "00";
	secondsEl.textContent = "00";
	milisecondsEl.textContent = "000";

	startBtn.style.display = "block";
	pauseBtn.style.display = "none";
	resumeBtn.style.display = "none";
}

//Função que adiciona um zero na frente dos números de um dígito
function formatTime(time){
	return time < 10 ? `0${time}` : time;
}

//Função que formata os milisegundos
function formatMiliseconds(time){
	return time < 100 ? `${time}`.padStart(3,"0") : time;
}