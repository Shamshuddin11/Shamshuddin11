// Java Script For Todo List
	
	const todoForm = document.querySelector('.todo-form');

// select the input box
	const todoInput = document.querySelector('.todo-input');
	
// select the <ul> with class="todo-items"
	const todoItemsList = document.querySelector('.todo-items');

	let todos = [ ];
	
	todoForm.addEventListener('submit', function(event) {
  // prevent the page from reloading when submitting the form
  event.preventDefault();
  addTodo(todoInput.value); // call addTodo function with input box current value
});

// function to add todo
function addTodo(item) {
  // if item is not empty
  if (item !== '') {
    // make a todo object, which has id, name, and completed properties
    const todo = {
      id: Math.floor(Math.random()*10)+1,
      name: item,
      completed: false
    };
console.log("todo " , todo);
    // then add it to todos array
    todos.push(todo);
    displayTodos(todos); // then renders them between <ul>

    // finally clear the input box value
    todoInput.value = '';
  }
}

function displayTodos(todos) {
  // clear everything inside <ul> with class=todo-items
  todoItemsList.innerHTML = '';

  // run through each item inside todos
  todos.forEach(function(item) {
    // check if the item is completed
    const checked = item.completed ? 'checked': null;

    // make a <li> element and fill it
    // <li> </li>
    const li = document.createElement('li');
    // <li class="item"> </li>
    li.setAttribute('class', 'item');
    // <li class="item" data-key="20200708"> </li>
    li.setAttribute('data-key', item.id);
    /* <li class="item" data-key="20200708"> 
          <input type="checkbox" class="checkbox">
          Go to Gym
          <button class="delete-button">X</button>
        </li> */
		   // if item is completed, then add a class to <li> called 'checked', which will add line-through style
    if (item.completed === true) {
      li.classList.add('checked');
    }

    li.innerHTML = `
	<i class="fasfa-shield-check"></i>
	${item.name}
      <button class="delete-button">Delete</button>
    `;
    // finally add the <li> to the <ul>
    todoItemsList.append(li);
  });

}

function addToLocalStorage(todos) {
  // conver the array to string then store it.
  localStorage.setItem('todos', JSON.stringify(todos));
  // render them to screen
  displayTodos(todos);
}

function getFromLocalStorage() {
  const reference = localStorage.getItem('todos');
  // if reference exists
  if (reference) {
    // converts back to array and store it in todos array
    todos = JSON.parse(reference);
    displayTodos(todos);
  }
}

// initially get everything from localStorage
getFromLocalStorage();

todoItemsList.addEventListener('click', function(event) {
  // check if the event is on checkbox
  if (event.target.type === 'checkbox') {
    // toggle the state
    toggle(event.target.parentElement.getAttribute('data-key'));
  }

  // check if that is a delete-button
  if (event.target.classList.contains('delete-button')) {
    // get id from data-key attribute's value of parent <li> where the delete-button is present
    deleteTodo(event.target.parentElement.getAttribute('data-key'));
  }
});

function toggle(id) {
	//Implement arrow function
  todos.forEach((item) => {
    // use == not ===, because here types are different. One is number and other is string
    if (item.id == id) {
      // toggle the value
      item.completed = !item.completed;
    }
  });

  addToLocalStorage(todos);
}

// deletes a todo from todos array, then updates localstorage and renders updated list to screen
function deleteTodo(id) {
  // filters out the <li> with the id and updates the todos array
  //use splice instead of filter
  //todos = todos.filter(function(item) {
    // use != not !==, because here types are different. One is number and other is string
  //  return item.id != id;
 //});	
 var data ;
 todos.forEach( (item) =>{
	 console.log("given id" ,id);
	 console.log("arrays id " ,item.id);
		if (item.id == id){
			data = item;
			console.log("item" ,data);
		}
});
  var index = todos.indexOf(data);
 
 
  removed = todos.splice(index , 1) ;
  console.log("index" ,index);
  console.log("id" ,id);
console.log("removedarray" , removed);
console.log("todos array" , todos);
  // update the localStorage
  addToLocalStorage(todos);
}