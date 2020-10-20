let timer;
let sec = 0;
let min = 0;
let hour = 0;
let comenzo = false;

document.getElementById('start').addEventListener("click", ()=>{
	if(comenzo == false){
		timer = setInterval(start, 1000);
		comenzo = true;
	}
});

document.getElementById('stop').addEventListener("click", ()=>{
	clearInterval(timer);
	comenzo = false;
});

document.getElementById('reset').addEventListener("click", resetTime);

function start(){
	sec++;
	if(sec == 60){
		sec = 0;
		min += 1;
	}
	if(min == 60){
		min = 0;
		hour += 1;
	}
	displayTime();
}

function resetTime(){
	sec = 0;
	min = 0;
	hour = 0;
	console.log('reset');
	displayTime();
}

function displayTime(){
	let secsView = document.getElementById('secs');
	let minsView = document.getElementById('mins');
	let hoursView = document.getElementById('hours');
	if(secsView.innerHTML < 9){
		secsView.innerHTML = '0'+sec;
	}else{
		secsView.innerHTML = sec;
	}
	if(minsView.innerHTML < 10){
		minsView.innerHTML = '0'+min;
	}else{
		minsView.innerHTML = min;
	}
	if(hoursView.innerHTML < 10){
		hoursView.innerHTML = '0'+hour;
	}else{
		hoursView.innerHTML = hour;
	}
}