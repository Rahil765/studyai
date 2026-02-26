let timer;
let timeLeft = 1500; // 25 minutes

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value;

  if (taskText === "") return;

  const li = document.createElement("li");
  li.innerHTML = `${taskText} <button onclick="this.parentElement.remove()">❌</button>`;

  document.getElementById("taskList").appendChild(li);
  input.value = "";
}

function startTimer() {
  if (timer) return;

  timer = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timer);
      timer = null;
      alert("Time's up!");
      return;
    }

    timeLeft--;
    updateTime();
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  timer = null;
  timeLeft = 1500;
  updateTime();
}

function updateTime() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  document.getElementById("time").textContent =
    `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}

updateTime();let timer;
let timeLeft = 1500;

const taskList = document.getElementById("taskList");
const taskInput = document.getElementById("taskInput");

// Load tasks when page opens
window.onload = function () {
  loadTasks();
  updateTime();
};

function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") return;

  const task = {
    text: taskText,
    completed: false
  };

  saveTask(task);
  renderTask(task);
  taskInput.value = "";
}

function renderTask(task) {
  const li = document.createElement("li");

  li.innerHTML = `
    <span onclick="toggleComplete(this)" style="cursor:pointer; ${task.completed ? 'text-decoration: line-through;' : ''}">
      ${task.text}
    </span>
    <button onclick="deleteTask(this)">❌</button>
  `;

  taskList.appendChild(li);
}

function saveTask(task) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach(task => renderTask(task));
}

function deleteTask(button) {
  const li = button.parentElement;
  const text = li.querySelector("span").textContent;

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter(task => task.text !== text);

  localStorage.setItem("tasks", JSON.stringify(tasks));
  li.remove();
}

function toggleComplete(span) {
  span.style.textDecoration =
    span.style.textDecoration === "line-through" ? "none" : "line-through";
}

// Pomodoro Timer
function startTimer() {
  if (timer) return;

  timer = setInterval(() => {
    if (timeLeft <= 0) {
      clearInterval(timer);
      timer = null;
      alert("Time's up!");
      return;
    }

    timeLeft--;
    updateTime();
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  timer = null;
  timeLeft = 1500;
  updateTime();
}

function updateTime() {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  document.getElementById("time").textContent =
    `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
}

function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}function updateStats() {
  let completed = document.querySelectorAll("span[style*='line-through']").length;
  document.getElementById("completedToday").textContent = completed;

  let streak = localStorage.getItem("streak") || 0;
  if (completed > 0) {
    streak = parseInt(streak) + 1;
    localStorage.setItem("streak", streak);
  }

  document.getElementById("streak").textContent = localStorage.getItem("streak") || 0;
}

document.addEventListener("click", () => {
  setTimeout(updateStats, 100);
});