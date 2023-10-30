const tasks = [];

const form = document.getElementById('todo-form');
const todoList = document.getElementById('todo-list');
const tasksCompletedText = document.getElementById('task-completion');

form.onsubmit = addTask;

function addTask(event) {
  event.preventDefault();

  const listItem = document.createElement('li');
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.onchange = handleChecked;

  const taskId = `task-${tasks.length + 1}`;
  checkbox.id = taskId;

  const todoInput = form.elements['todo-input'];
  const todoText = todoInput.value;
  const todoTextLabel = document.createElement('label');
  todoTextLabel.innerText = ` ${todoText}`;
  todoTextLabel.setAttribute('for', taskId);

  listItem.append(checkbox, todoTextLabel);
  todoList.appendChild(listItem);

  const taskObj = {
    id: taskId,
    text: todoText,
    date: Date.now(),
    isChecked: false,
  };

  tasks.push(taskObj);
  updateTaskCompletion();
  todoInput.value = '';
}

function handleChecked(checkboxInput) {
  const task = tasks.find((t) => t.id === checkboxInput.target.id);
  task.isChecked = checkboxInput.target.checked;
  updateTaskCompletion();
}

function updateTaskCompletion() {
  const numTasks = tasks.length;
  const numTasksCompleted = tasks.filter((t) => t.isChecked).length;
  tasksCompletedText.innerText = `${numTasksCompleted}/${numTasks} completed`;
}
