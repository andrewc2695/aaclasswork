const todoList = [];
const ulTodos = document.querySelector(".todos")
const todoForm = document.querySelector(".add-todo-form")

function addTodo(element) {
    element.preventDefault();
    let todo = document.querySelector("input[name=add-todo]")
    let todoObj = {
        value: todo.value,
        done: false
    }
    todoList.push(todoObj);
    todo.value = "";
}

function populateList() {
    
}