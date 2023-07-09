// design add button to add different types of todos
const addTodo = document.getElementById("add-todo");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");

addBtn.addEventListener("click", addMyTodo);

let todoList = [];

function addMyTodo() {
  let inputValue = addTodo.value.trim();

  if (inputValue.length === 0) {
    alert("Alert! Write some work...");
    return;
  }

  todoList.push(inputValue);

  const li = document.createElement("li");
  const mainDiv = document.createElement("div");
  // const textDiv= document.createElement("div");
  const remove = document.createElement("button");
  const edit = document.createElement("button");
  const done = document.createElement("button");

  //css
  mainDiv.style.padding = "20px";
  mainDiv.style.color="white"

  mainDiv.textContent = inputValue;
  remove.textContent = "Remove";
  edit.textContent = "Edit";
  done.textContent = "Done";

  //logic to edit
  edit.addEventListener("click", () => {
    mainDiv.contentEditable = true;
    mainDiv.style.backgroundColor = "#6269d2";
  });

  

  // remove logi

  // logic to complete editing
  done.addEventListener("click", () => {
    mainDiv.contentEditable = false;
    mainDiv.style.backgroundColor = "";
  });

  remove.addEventListener("click", () => {
    const index = todoList.indexOf(inputValue);
    if (index > -1) {
      todoList.splice(index, 1);
      li.remove();
    }
  });

  li.appendChild(mainDiv);

  li.appendChild(remove);
  li.appendChild(edit);
  li.appendChild(done);
  list.appendChild(li);

  addTodo.value = "";
}
