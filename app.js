// app.js
import { auth, provider, db, signInWithPopup, signOut, collection, addDoc, getDocs, deleteDoc, doc, updateDoc } from './firebase.js';

const loginButton = document.getElementById("login-button");
const logoutButton = document.getElementById("logout-button");
const taskContainer = document.getElementById("task-container");
const authContainer = document.getElementById("auth-container");
const taskInput = document.getElementById("task-input");
const addTaskButton = document.getElementById("add-task-button");
const taskList = document.getElementById("task-list");

let currentUser = null;

// Login with Google
loginButton.addEventListener("click", async () => {
  const result = await signInWithPopup(auth, provider);
  currentUser = result.user;
  authContainer.style.display = "none";
  taskContainer.style.display = "block";
  logoutButton.style.display = "block";
  loadTasks();
});

// Logout
logoutButton.addEventListener("click", () => {
  signOut(auth);
  currentUser = null;
  authContainer.style.display = "block";
  taskContainer.style.display = "none";
  logoutButton.style.display = "none";
});

// Add Task
addTaskButton.addEventListener("click", async () => {
  const taskText = taskInput.value;
  if (taskText) {
    await addDoc(collection(db, "tasks"), {
      text: taskText,
      completed: false,
      userId: currentUser.uid
    });
    taskInput.value = '';
    loadTasks();
  }
});

// Load tasks
async function loadTasks() {
  const querySnapshot = await getDocs(collection(db, "tasks"));
  taskList.innerHTML = '';
  querySnapshot.forEach(doc => {
    const task = doc.data();
    const li = document.createElement("li");
    li.textContent = task.text;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", async () => {
      await deleteDoc(doc(db, "tasks", doc.id));
      loadTasks();
    });
    li.appendChild(deleteButton);
    taskList.appendChild(li);
  });
}
