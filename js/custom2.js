
getItem();

$('#todoForm').on('submit',function(e){
	e.preventDefault();
	getData();
});


let todoArr = [];

function getData(){

	let todoName = $('#todoName').val();
	let startDate = $('#startDate').val();
	let endDate = $('#endDate').val();
	let comments = $('#comments').val();

	const todoObj = {
			todoName: todoName,
			startDate: startDate,
			endDate: endDate,
			comments: comments,
			createdDate: new Date().toLocaleDateString(),
			createdTime: new Date().toLocaleTimeString()
		}

	saveStorage(todoObj);

	// closing form modal automatically
	$('.modal .modal-header .close').trigger("click");
	
	// reseting form data
	$('#todoForm')[0].reset();
}





function display(todoObj, index){

	let todoItem = '<div class="card todo-list-container mb-3" id="item"><div class="todo-title mb-2">'+todoObj.todoName+'</div><div class="todo-comment">'+todoObj.comments+'</div><div class="d-flex justify-content-between align-items-center"><div class="time-section"><span class="start-date"><span class="start-icon"><i class="far fa-clock"></i></span><span class="start-time ml-1">'+todoObj.startDate+'</span></span><span class="end-date ml-3"><span class="end-icon"><i class="fas fa-hourglass-end"></i></span><span class="end-time ml-1">'+todoObj.endDate+'</span></span></div><div class="action-section mt-1"><span class="remove mr-3" id="remove" onclick="deleteItem('+index+')"><span class=" mr-1"><i class="fas fa-trash-alt"></i></span><span>Remove</span></span><span class="completed" id="completed"><span class=" mr-1"><i class="fas fa-check-square"></i></span><span>Done</span></span></div></div></div>';

	$('#itemBody').prepend(todoItem);
}

function getItem(){

	var todoArr = JSON.parse(localStorage.getItem('data'));
		
	todoArr.forEach((item, index) => {
		display(item, index);
	})

}


function saveStorage(todoObj){
	// localStorage
	if (localStorage.getItem('data') == null) {
		localStorage.setItem('data', '[]');
	}else{
		// old data to localStorage
		var old_data = JSON.parse(localStorage.getItem('data'));
		old_data.push(todoObj);

		localStorage.setItem('data', JSON.stringify(old_data));

		getItem();

	}
}


function deleteItem(index){
	var old_data = JSON.parse(localStorage.getItem('data'));
	old_data.splice(index, 1);
	localStorage.setItem('data', JSON.stringify(old_data));
	getItem();
}