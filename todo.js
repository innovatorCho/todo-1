const todoForm = document.querySelector(".js-toDoform"),
    toDoInput = todoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

function printDodo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    delBtn.innerHTML = "❌";
    const span = document.createElement("span");
    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    toDoList.appendChild(li);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    printDodo(currentValue);
    toDoInput.value = "";
}

function loadTodos() {
    const toDos = localStorage.getItem(TODOS_LS);
    if(toDos === null) {

    } else {

    }
}

function init(){
    loadTodos();
    todoForm.addEventListener("submit", handleSubmit);
};

init();