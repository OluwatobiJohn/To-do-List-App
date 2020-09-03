//Define UI Vars
const form = document.querySelector('#task-form');
const taskList =document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();


//Fuction for Add Task Button(submit)
function loadEventListeners() {
    //Add task event
    form.addEventListener('submit', addTask);
}


//Add Task
function addTask(e) {
    if(taskInput.value === '') {
        alert('Add a task');
    }


    //List item with delete button
//Create li element
const li = document.createElement('li');
//add class
li.className = 'collection-item'
//create text node
li.appendChild(document.createTextNode(taskInput.value));
//create new link element
const link = document.createElement('a');
//add class
link.className = 'delete-item secondary-content';
//add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';
//append the link to li
li.appendChild(link);


//Append li to ul
taskList.appendChild(li);

//clear input
taskInput.value = '';

    e.preventDefault();
}

