let options = document.getElementsByClassName('option');
let winState = {rock:"scissor",paper:"rock",scissor:"paper"};

for(let i = 0; i < options.length; i++){
	options[i].addEventListener("click", () => {
		options[i].classList.add("selected");
		disableOptions();
		game(options[i]);
		setTimeout(()=>{location.reload()},2000);
	});
}

function disableOptions(){
	for (let i = 0; i < options.length; i++) {
		if (!options[i].classList.contains("selected")) {
			options[i].classList.add("disable");
		}
	}
}

function game(option){
	let result = document.getElementById('result');
	let ai = document.getElementById('ai');
	let options = ['rock','paper','scissor'];
	let choice = option.id;
	let aiSelect = aiChoice();
	if(choice == options[aiSelect]){
		console.log('Draw');
		showChoice(options[aiSelect]);
		option.classList.add("draw");
		ai.classList.add("draw");
		result.innerHTML = "Draw!";
	}else if(options[aiSelect]===winState[choice]){
		console.log("Player Won");
		showChoice(options[aiSelect]);
		option.classList.add("won");
		ai.classList.add("lose");
		result.innerHTML = "You Won!";
	}else{
		console.log("Player Lose");
		showChoice(options[aiSelect]);
		option.classList.add("lose");
		ai.classList.add("won");
		result.innerHTML = "You Lose!";
	}

}

function aiChoice(){
	let aiSelected = Math.floor(Math.random() * 3);
	return aiSelected;
}

function showChoice(a){
	let aiShow = document.getElementById('ai');
	aiShow.classList.add("option");
	aiShow.classList.add(a);
}