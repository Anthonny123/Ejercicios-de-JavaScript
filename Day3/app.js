let value = "";
let display = document.getElementById('display');
let buttons = document.getElementsByClassName('buttons');
for(let i = 0; i < buttons.length; i++){
	buttons[i].addEventListener("click", () => {
		if(buttons[i].id == "adition"){
			value += "+";
			let verify = verifySigns(value);
			if(verify==false){
				value = value.slice(0,-1);
			}else{
				display.innerHTML = value;	
			}	
		}else if(buttons[i].id == "divide"){
			value += "/";
			let verify = verifySigns(value);
			if(verify==false){
				value = value.slice(0,-1);
			}else{
				display.innerHTML = value;	
			}	
		}else if(buttons[i].id == "substract"){
			value += "-";
			let verify = verifySigns(value);
			if(verify==false){
				value = value.slice(0,-1);
			}else{
				display.innerHTML = value;	
			}	
		}else if(buttons[i].id == "multiply"){
			value += "*";
			let verify = verifySigns(value);
			if(verify==false){
				value = value.slice(0,-1);
			}else{
				display.innerHTML = value;	
			}	
		}else if(buttons[i].id == "clear"){
			value = ""
			display.innerHTML = value;
		}else if (buttons[i].id == "equal"){
			value = result(value);
			display.innerHTML = value;
		}else{
			value += buttons[i].id;
			display.innerHTML = value;
		}
	});
}

function verifySigns(element){
	for(let i = 0; i < element.length; i++){
		if(element[i]=="+"||element[i]=="-"||element[i]=="*"||element[i]=="/"){
			if(element[i]==element[i-1]||element[i-1]=="+"||element[i-1]=="-"||element[i-1]=="*"||element[i-1]=="/"){
				console.log('false');
				return false;
			}
		}
	}
}

function result(element){
	let sign = ['+','-','*','/'];
	let first = '';
	let second = '';
	let digit = '';
	let operation = '';
	let result;
	for(let i = 0; i < element.length; i++){
		for(let j = 0; j < sign.length; j++){
			if(element[i]==sign[j]){
				first = digit;
				operation = sign[j];
				digit = ""
			}
		}
		digit += element[i];
		if(i == element.length -1){
			second = digit;
			digit = "";
		}
	}
	second = second.slice(1);
	if (operation == '+') {
		result = adition(parseInt(first),parseInt(second));
		console.log(result);
	}else if(operation == '-'){
		result = rest(parseInt(first),parseInt(second));
		console.log(result);
	}else if(operation == '*'){
		result = multiply(parseInt(first),parseInt(second));
		console.log(result);
	}else if(operation == '/'){
		result = divide(parseInt(first),parseInt(second));
		console.log(result);
	}
	return result;
}

function adition(a,b){
	return a+b;
}
function rest(a,b){
	return a-b;
}
function multiply(a,b){
	return a*b;
}
function divide(a,b){
	return a/b;
}

console.log(multiply(5,4));