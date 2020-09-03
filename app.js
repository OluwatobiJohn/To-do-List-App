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



//clear input
taskInput.value = '';

    e.preventDefault();
}

