const todoList = JSON.parse(localStorage.getItem("todo")) || [];
const ulTodos = document.querySelector(".todos")
const todoForm = document.querySelector(".add-todo-form")

function addTodo(e) {
    e.preventDefault();
    console.log("add todo")
    let todo = document.querySelector("input[name=add-todo]")
    let todoObj = {
        value: todo.value,
        done: false,
        id: todoList.length
    }
    todoList.push(todoObj);
    localStorage.setItem("todo", JSON.stringify(todoList));
    todo.value = "";
    populateList();
}

function populateList() {
    if (ulTodos.children.length > 1) ulTodos.innerHTML = '';
    todoList.forEach((item) => {
        let li = document.createElement("li");
        let label = document.createElement("label");
        let checkbox = document.createElement("input");
        label.innerText = item.value;
        checkbox.setAttribute("type", "checkbox");
        checkbox.setAttribute("data-done", item.done)
        checkbox.setAttribute("data-id", item.id)
        // console.log(checkbox.getAttribute("data-done") === "true")
        if(checkbox.getAttribute("data-done") === "true") {
            console.log("checked checkbox")
            checkbox.checked = true;
            // item.done = !item.done;
        }
        label.append(checkbox);
        li.append(label);
        ulTodos.append(li);
    });
}

todoForm.addEventListener("submit", (e) => addTodo(e))
ulTodos.addEventListener("click", function(e) {
    if (e.target.type != "checkbox") return;
    let checkbox = e.target;
    let done = !checkbox.getAttribute("data-done");
    checkbox.setAttribute("data-done", `${!done}`);
    let id = checkbox.getAttribute("data-id")
    for(let item of todoList) {
        if(item.id === parseInt(id)) {
            item.done = !item.done;
            localStorage.setItem("todo", JSON.stringify(todoList));
            return
        }
    }
})

populateList()