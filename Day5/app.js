let list = document.getElementById('mainList');
let button = document.getElementById('inputButton');
let listItem = [];
button.addEventListener('click', ()=>{
	new Item();
});

class Item{
	constructor(){
		let itemName = document.getElementById('itemName');
		this.name = itemName.value;
		this.create();
		this.show();
		itemName.value = '';
		this.delete();
		this.update();

	}
	create(){
		let newItem=`<div class="item" id="shopList">
				<div id="task" class="tasks">${this.name}</div>
				<div class="botones">
					<button class="update" id="${this.name+'up'}">Update</button>
					<button class="delete" id="${this.name+'del'}">Delete</button>
				</div>
			</div>`;
		listItem.push(newItem);
	}
	show(){
		list.innerHTML='';
		for (let i = 0; i < listItem.length; i++) {
			list.innerHTML += listItem[i];
		}
	}
	delete(){
		let items = document.getElementsByClassName('delete');
		for (let i = 0; i < items.length; i++) {
			let thing = document.getElementById(items[i].id);
			thing.addEventListener('click', ()=>{
				console.log(i);
				listItem.splice(i,1);
				this.show();
				this.delete();
				this.delete();
			});
		}
	}
	update(){
		let items = document.getElementsByClassName('update');
		for (let i = 0; i < items.length; i++) {
			let thing = document.getElementById(items[i].id);
			thing.addEventListener('click', ()=>{
				list.innerHTML += `<div class = "app">
										<input type="text" class="barUpdate" id='itemUpdate'>
										<button class="barButtonUpdate" id='inputButtonUpdate'>Update</button>
									</div>`;
				let updateButton = document.getElementById('inputButtonUpdate');
				updateButton.addEventListener('click',()=>{
					let itemUpdate = document.getElementById('itemUpdate').value;
					this.name = itemUpdate;
					let updateItem = `<div class="item" id="shopList">
										<div id="task" class="tasks">${this.name}</div>
										<div class="botones">
											<button class="update" id="${this.name+'up'}">Update</button>
											<button class="delete" id="${this.name+'del'}">Delete</button>
										</div>
									</div>`;
					listItem.splice(i,1,updateItem);
					this.show();
					this.update();
					this.delete();
				});
				//this.update();
			});
		}
	}
}
