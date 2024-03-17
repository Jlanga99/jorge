document.addEventListener("DOMContentLoaded", function() {
    const inputBox = document.getElementById("input-box");
    const addButton = document.getElementById("add-task-btn");
    const listContainer = document.getElementById("list-container");

    addButton.addEventListener("click", addTask);
    listContainer.addEventListener("click", handleTaskClick);

    function addTask() {
        const taskText = inputBox.value.trim();
        if (taskText === '') {
            alert("You must write something.");
            return;
        }

        const li = document.createElement("li");
        li.textContent = taskText;

        const deleteButton = document.createElement("span");
        deleteButton.textContent = "×";
        deleteButton.classList.add("delete-btn");

        li.appendChild(deleteButton);
        listContainer.appendChild(li);

        inputBox.value = "";
        saveTasks();
    }

    function handleTaskClick(event) {
        if (event.target.tagName === "LI") {
            event.target.classList.toggle("checked");
        } else if (event.target.classList.contains("delete-btn")) {
            event.target.parentNode.remove();
        }
        saveTasks();
    }

    function saveTasks() {
        localStorage.setItem("tasks", listContainer.innerHTML);
    }

    function loadTasks() {
        listContainer.innerHTML = localStorage.getItem("tasks");
    }

    loadTasks();
});
