const todoForm = document.querySelector(".js-toDoform"),
    toDoInput = todoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let todos = [];

function deleteToDo(event) {
    const btn = event.target;
    const li = btn.parentNode;
  //  console.log(`btn = ${btn} , li = ${li}`);
    toDoList.removeChild(li);
    
    const cleanToDos = todos.filter(function(todo) {
        //console.log(`todo.id = ${todo.id} , li.id = ${li.id}`);
        return todo.id != parseInt(li.id);
    });
    todos = cleanToDos;
    saveTodos();
}

function saveTodos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(todos));
}

function printDodo(text) {
    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = todos.length + 1;

    delBtn.innerHTML = "❌";
    //delBtn.addEventListener("click", deleteToDo);

    span.innerText = text;
    li.appendChild(span);
    li.appendChild(delBtn);
    li.id = newId;

    toDoList.appendChild(li);

    const toDoObj = {
        text: text,
        id: newId
    };

    todos.push(toDoObj);
    saveTodos();
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    printDodo(currentValue);
    toDoInput.value = "";
}

function loadTodos() {
    const loadedTodos = localStorage.getItem(TODOS_LS);
    if(loadedTodos !== null) {
        const parsedToDos = JSON.parse(loadedTodos);
        parsedToDos.forEach(function(todo) {
            printDodo(todo.text);
            console.log(todo.text);
        });
    } 
}

function init(){
    loadTodos();
    todoForm.addEventListener("submit", handleSubmit);
};

init();