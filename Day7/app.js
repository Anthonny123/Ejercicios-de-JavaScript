const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const grid = 16;
let count = 0;
let first = true;
let snake = {
	x: grid * 2,
	y: grid * 2,
	vx: grid,
	vy: 0,
	cells: [],
	maxCells:4
};
let apple ={
	x:grid,
	y:grid
};

function Update(){
	requestAnimationFrame(Update);
	if(++count<4){
		return
	}
	count = 0;
	ctx.clearRect(0,0,canvas.width,canvas.height);
	snake.cells.unshift({x:snake.x, y:snake.y});
	snake.x += snake.vx;
	snake.y += snake.vy;

	if(snake.x>=canvas.width){
		snake.x=0;
	}else if(snake.x<0){
		snake.x = canvas.width-grid;
	}

	if(snake.y>=canvas.height){
		snake.y = 0;
	}else if(snake.y<0){
		snake.y = canvas.height-grid;
	}

	if(snake.cells.length>snake.maxCells){
		snake.cells.pop();
	}

	///Draw Apple
	function getRandomInt(min,max){
		return Math.floor(Math.random() * (max - min)) + min;
	}
	ctx.fillStyle="#AF1E2D"
	ctx.fillRect(apple.x,apple.y,grid-1,grid-1);		
	

	///Draw Snake
	ctx.fillStyle="#FFCE00";
	snake.cells.forEach((cell,index)=>{
		ctx.fillRect(cell.x,cell.y,grid-1,grid-1);
		if(cell.x === apple.x&&cell.y === apple.y){
			snake.maxCells++;
			apple.x = getRandomInt(0,44)*grid;
			apple.y = getRandomInt(0,28)*grid;
		}

		for(let i = index + 1; i<snake.cells.length; i++){
			if(cell.x === snake.cells[i].x && cell.y=== snake.cells[i].y){
				window.location.reload();
			}
		}

	});

	document.addEventListener("keydown",(e)=>{
		if(e.keyCode === 40 && snake.vy ===0){
			snake.vy = grid;
			snake.vx = 0;
		}else if(e.keyCode === 38 && snake.vy ===0){
			snake.vy = -grid;
			snake.vx = 0;
		}else if(e.keyCode === 39 && snake.vx ===0){
			snake.vx = grid;
			snake.vy = 0;
		} if(e.keyCode === 37 && snake.vx ===0){
			snake.vx = -grid;
			snake.vy = 0;
		}
	});
}

requestAnimationFrame(Update);

