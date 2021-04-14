let todoArr = [];


$(document).ready(function(){
	var count = 0;
	$( "#todoForm" ).submit(function(e) {
		e.preventDefault();

		let todoName = $('#todoName').val();
		let startDate = $('#startDate').val();
		let endDate = $('#endDate').val();
		let comments = $('#comments').val();

		// console.log(todoName);
		// console.log(startDate);
		// console.log(endDate);
		// console.log(comments);
		



		count++;
		let todoItem = '<div class="card todo-list-container mb-3" id="item'+count+'"><div class="todo-title mb-2">'+todoName+'</div><div class="todo-comment">'+comments+'</div><div class="d-flex justify-content-between align-items-center"><div class="time-section"><span class="start-date"><span class="start-icon"><i class="far fa-clock"></i></span><span class="start-time ml-1">'+startDate+'</span></span><span class="end-date ml-3"><span class="end-icon"><i class="fas fa-hourglass-end"></i></span><span class="end-time ml-1">'+endDate+'</span></span></div><div class="action-section mt-1"><span class="remove mr-3" id="remove"><span class=" mr-1"><i class="fas fa-trash-alt"></i></span><span>Remove</span></span><span class="completed" id="completed"><span class=" mr-1"><i class="fas fa-check-square"></i></span><span>Done</span></span></div></div></div>';

		$('#itemBody').prepend(todoItem);

		// closing form modal automatically
		$('.modal .modal-header .close').trigger("click");
		
		// reseting form data
		$('#todoForm')[0].reset();

		
		// making object
		const todoObj = {
			todoName: todoName,
			startDate: startDate,
			endDate: endDate,
			comments: comments,
			createdDate: new Date().toLocaleDateString(),
			createdTime: new Date().toLocaleTimeString()
		}

		// pushing into array
		// todoArr.push(todoObj);
		console.log(todoObj);

		

		// localStorage
		if (localStorage.getItem('data') == null) {
			localStorage.setItem('data', '[]');
		}

		// old data to localStorage
		var old_data = JSON.parse(localStorage.getItem('data'));
		old_data.push(todoObj);

		localStorage.setItem('data', JSON.stringify(old_data));
		
		
		// on click to complete
		$('#completed').click(function(){
			// todo-title
			// $(this).parents(".todo-title").before('<strike>');
			// $(this).parents(".todo-title").after('</strike>');
			$(this).parents(".card.todo-list-container").css('background-color', 'red');
			// $(this).parents(".todo-title").after('</strike>');
		});

		// on click to remove
		$('#remove').click(function(){
			$(this).parents(".card.todo-list-container").remove();
		});
	});

	

});

