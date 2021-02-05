const addTaskBtn = document.getElementById("add-task-btn");
const deskTaskInput = document.getElementById("description-task");
const todosWrapper = document.querySelector(`.todos-wrapper`);

let tasks;
!localStorage.tasks
  ? (tasks = [])
  : (tasks = JSON.parse(localStorage.getItem("tasks")));

let todoItemsElems = [];

function Task(descripton) {
  this.descripton = descripton;
  this.completed = false;
}

const createTemplae = (task, index) => {
  return `
    <div class="todo-item ${task.completed ? "checked" : ""}">
         <div class="description">${task.descripton}</div>
        <div class="buttons">
             <input onclick='compliteTasks(${index})' class="btn-complete" type="checkbox" ${ task.completed ? "checked" : "" } />
             <button  onclick='deleteTasks(${index})' class="btn-delete">Delete</button>
        </div>
  </div>
    `;
};

const fileterTasks = () => {
    const activeTasks = tasks.length && tasks.filter(item => item.completed == false);
    const completedTasks =
      tasks.length && tasks.filter((item) => item.completed == true);
      tasks = [...activeTasks,...completedTasks];
}


const fillHtmlList = () => {
  todosWrapper.innerHTML = "";
  if (tasks.length > 0) {
      fileterTasks();
    tasks.forEach((item, index) => {
      todosWrapper.innerHTML += createTemplae(item, index);
    });
    todoItemsElems = document.querySelectorAll(".todo-item");
  }
};

fillHtmlList();

const updateLocal = () => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const compliteTasks = (index) => {
  tasks[index].completed = !tasks[index].completed;
  if (tasks[index].completed) {
    todoItemsElems[index].classList.add(`checked`);
  } else {
    todoItemsElems[index].classList.remove(`checked`);
  }
  updateLocal();
  fillHtmlList();
};

addTaskBtn.addEventListener(`click`, () => {
  tasks.push(new Task(deskTaskInput.value));
  updateLocal();
  fillHtmlList();
  deskTaskInput.value = ""; //delete input
});

const deleteTasks = index => {
    todoItemsElems[index].classList.add('delition');
    setTimeout(()=> {
        tasks.splice(index, 1);
        updateLocal();
        fillHtmlList();

    }, 500)
} 