const  todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');

todoForm.addEventListener('submit', formHandler);

function formHandler(event) {
    event.preventDefault();

    //variable with input's value
    const taskText = todoInput.value;

    //creating element
    const newTask = document.createElement('li');

    newTask.innerText = taskText;
    todoList.append(newTask);

    //deletebtn 
    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('role', 'button');
    deleteBtn.innerText = 'Delete';
    deleteBtn.style['margin-left'] = '15px';
    newTask.append(deleteBtn);

    //delete task
    deleteBtn.addEventListener('click', function(){
        this.closest('li').remove();
    });


    //clearing input 
    todoInput.value = '';

    //focusing input
    todoInput.focus();
}