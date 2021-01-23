const todoList = JSON.parse(localStorage.getItem("todo")) || [];
const ulTodos = document.querySelector(".todos")
const todoForm = document.querySelector(".add-todo-form")

function addTodo(e) {
    e.preventDefault();
    console.log("add todo")
    let todo = document.querySelector("input[name=add-todo]")
    let todoObj = {
        value: todo.value,
        done: false
    }
    todoList.push(todoObj);
    localStorage.setItem("todo", JSON.stringify(todoList));
    todo.value = "";
    populateList();
}

function populateList() {
    todoList.forEach((item) => {
        let li = document.createElement("li");
        let label = document.createElement("label");
        let checkbox = document.createElement("input");
        label.innerText = item.value;
        checkbox.setAttribute("type", "checkbox");
        li.setAttribute("data-done", item.done)
        label.append(checkbox);
        li.append(label);
        ulTodos.append(li);
    });
}

todoForm.addEventListener("submit", (e) => addTodo(e))
ulTodos.addEventListener("click", function(e){
    let li = e.target;
   let done = li.getAttribute("data-done");
   li.setAttribute("data-done", !done);
})