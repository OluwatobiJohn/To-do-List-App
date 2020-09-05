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
    //DOM load event
    document.addEventListener('DOMContentLoaded', getTasks);
    //Add task event
    form.addEventListener('submit', addTask);
    //remove task event
    taskList.addEventListener('click', removeTask);
    //clear tasks event
    clearBtn.addEventListener('click', clearTask)
    //filter task event
    filter.addEventListener('keyup', filterTask)
}

// Get tasks from LS
function getTasks() {
    let tasks;
    
    if(localStorage.getItem('tasks') === null){
tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    } 
    tasks.forEach(function(task) {
        //Create li element
const li = document.createElement('li');
//add class
li.className = 'collection-item'
//create text node
li.appendChild(document.createTextNode(task));
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
    })
}
    

//ADD TASK

function addTask(e) {
    if(taskInput.value === '') {
        alert('Add a task');
        
    }else{



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
}


//STORE IN LOCAL STORAGE
storeTaskInLocalStorage(taskInput.value);

//clear input
taskInput.value = '';

    e.preventDefault();

}

//STORE TASK
function storeTaskInLocalStorage(task) {
    let tasks;
    
    if(localStorage.getItem('tasks') === null){
tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
}



//REMOVE TASK
function removeTask(e) {
    if(e.target.parentElement.classList.contains
        ('delete-item')) {
            if(confirm('Are you sure')) {
            e.target.parentElement.parentElement.remove();

            //remove from ls
            removeTaskFromLocalStorage(e.target.parentElement.parentElement)
        }
      }
}

//Remove from LS
function removeTaskFromLocalStorage(taskItem){
    let tasks;
    
    if(localStorage.getItem('tasks') === null){
tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.forEach(function(task, index){
        if(taskItem.textContent === task){
            tasks.splice(index, 1);
        }
    })

    localStorage.setItem('tasks', JSON.stringify(tasks))
}

//CLEAR TASK
function clearTask() {
    taskList.innerHTML = '';

    //clear tasks from local strorage
    clearTasksFromLocalStorage()
}

//Clear Tasks From Local Storage
function clearTasksFromLocalStorage(){
    localStorage.clear();
}

//FILTER OR SEARCH TASK
function filterTask(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll('.collection-item').forEach
    (function(task) {
        const item = task.textContent;
        if(item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }

    });

}












