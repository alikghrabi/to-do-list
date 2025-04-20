function insertTask() {
    const input = document.getElementById("taskEntry");
    const text = input.value.trim();
    if (text === "") return;
  
    const taskLi = document.createElement("li");
  
    taskLi.innerHTML = `
      <span onclick="toggleStatus(this)">${text}</span>
      <span class="task-action" onclick="deleteTask(this)">✖</span>
    `;
  
    document.getElementById("taskArea").appendChild(taskLi);
    input.value = "";
  }
  
  function toggleStatus(span) {
    span.parentElement.classList.toggle("checked");
  }
  
  function deleteTask(span) {
    span.parentElement.remove();
  }
  
  function applyFilter(type) {
    const allTasks = document.querySelectorAll("#taskArea li");
  
    allTasks.forEach(task => {
      switch (type) {
        case "showAll":
          task.style.display = "flex";
          break;
        case "doneOnly":
          task.style.display = task.classList.contains("checked") ? "flex" : "none";
          break;
        case "todoOnly":
          task.style.display = !task.classList.contains("checked") ? "flex" : "none";
          break;
      }
    });
  }
  