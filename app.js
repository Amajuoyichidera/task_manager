document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("new-task");
    const addTaskBtn = document.getElementById("add-task");
    const taskList = document.getElementById("task-list");

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText === "") {
            alert("Please enter a task");
            return;
        }

        const taskItem = document.createElement("li");
        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;

        const completeBtn = document.createElement("button");
        completeBtn.textContent = "Complete";
        completeBtn.addEventListener("click", function () {
            taskItem.classList.toggle("complete");
        });

        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.addEventListener("click", function () {
            const newTaskText = prompt("Edit task:", taskSpan.textContent);
            if (newTaskText && newTaskText.trim() !== "") {
                taskSpan.textContent = newTaskText.trim();
            }
        });

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.addEventListener("click", function () {
            taskList.removeChild(taskItem);
        });

        taskItem.appendChild(taskSpan);
        taskItem.appendChild(completeBtn);
        taskItem.appendChild(editBtn);
        taskItem.appendChild(deleteBtn);

        taskList.appendChild(taskItem);

        taskInput.value = "";
    }

    addTaskBtn.addEventListener("click", addTask);

    // Function to filter tasks
    function filterTasks(status) {
        const tasks = taskList.getElementsByTagName("li");
        for (const task of tasks) {
            switch (status) {
                case "all":
                    task.style.display = "flex";
                    break;
                case "completed":
                    task.style.display = task.classList.contains("complete") ? "flex" : "none";
                    break;
                case "incomplete":
                    task.style.display = !task.classList.contains("complete") ? "flex" : "none";
                    break;
            }
        }
    }

    document.getElementById("filter-all").addEventListener("click", function () {
        filterTasks("all");
    });

    document.getElementById("filter-complete").addEventListener("click", function () {
        filterTasks("completed");
    });

    document.getElementById("filter-incomplete").addEventListener("click", function () {
        filterTasks("incomplete");
    });
});
