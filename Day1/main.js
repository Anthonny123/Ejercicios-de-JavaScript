document.getElementById('formTask').addEventListener('submit', createTasks);

function createTasks(e){
	let titleTasks = document.getElementById('title').value;
	let description = document.getElementById('description').value;
	if(titleTasks === '' || description === ''){
		alert('Necesita rellenar el formulario');
		e.preventDefault();
		return
	}
	let task ={
		titleTasks,
		description
	};
	if(localStorage.getItem('tasksApp')==null){
		let tasks = [];
		tasks.push(task);
		localStorage.setItem('tasksApp',JSON.stringify(tasks));
	} else {
		let tasks = JSON.parse(localStorage.getItem('tasksApp'));
		tasks.push(task);
		localStorage.setItem('tasksApp', JSON.stringify(tasks));
	}
	showTasks();
	document.getElementById('formTask').reset();
	e.preventDefault();
}

function showTasks(){
	let tasksView = document.getElementById('tasks');
	let tasks = JSON.parse(localStorage.getItem('tasksApp'));
	tasksView.innerHTML = ''
	for(let i = 0; i<tasks.length; i++){
		let title = tasks[i].titleTasks;
		let description = tasks[i].description;
		tasksView.innerHTML += `
		<div class = "card mb-3">
			<div class = "card-body">
				<p>${title}-${description}</p>
				<a class="btn btn-danger" onclick="deleteTasks('${title}')">Delete</a>
			</div>
		</div>
		`;
	}
}

function deleteTasks(title){
	let tasks = JSON.parse(localStorage.getItem('tasksApp'));
	for(let i = 0; i<tasks.length;i++){
		if(title == tasks[i].titleTasks){
			tasks.splice(i,1);
		}
	}
	localStorage.setItem('tasksApp', JSON.stringify(tasks));
	showTasks();
}

showTasks();
