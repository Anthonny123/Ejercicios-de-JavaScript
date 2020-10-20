window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
let buttonStart = document.getElementById('start');
const transcript_elements = document.getElementById('transcript');
const recognition = new SpeechRecognition();

let p = document.createElement('p');
transcript_elements.appendChild(p);

recognition.addEventListener("result", (e) => {
	console.log(e);
	console.log('work');

});
buttonStart.addEventListener("click", () => recognition.stop());
recognition.start();