let actualNumber = document.getElementById('number');
let buttons = document.getElementsByClassName('btn');
let score = document.getElementById('myScore');
let myScore=0;
let lastNumber;

function randomNumber(){
	return Math.floor(Math.random()*10);
}

for(let i = 0; i<buttons.length; i++){
	buttons[i].addEventListener("click", ()=>{
		game(buttons[i].id);
	});
}

let number = randomNumber();
actualNumber.innerHTML = number;
score.innerHTML = myScore;

function game(choice){
	lastNumber = number;
	number = randomNumber();
	console.log(number);
	console.log(lastNumber);
	if(number>lastNumber&&choice==='high'){
		console.log('Win');
		actualNumber.innerHTML = number;
		myScore++;
		score.innerHTML = myScore;
	}else if(number<lastNumber&&choice==='high'){
		console.log('Lose');
		actualNumber.innerHTML = number;
	}else if(number<lastNumber&&choice==='low'){
		console.log('Win');
		actualNumber.innerHTML = number;
		myScore++;
		score.innerHTML = myScore;
	}else if(number>lastNumber&&choice==='low'){
		console.log('Lose');
		actualNumber.innerHTML = number;
	}else{
		console.log('Draw');
		actualNumber.innerHTML = number;
	}	
}

