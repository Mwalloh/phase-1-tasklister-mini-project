document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const formInput = document.getElementById("create-task-form");
  formInput.addEventListener("submit", (event) => {
    event.preventDefault();

    const taskInput = event.target["new-task-description"].value;
    const task = {
      description: taskInput,
    };

   buildToDo(task);
  });

  function buildToDo(task) {
    const li = document.createElement("li");
    li.textContent = task.description;

    const taskList = document.getElementById("tasks");
    taskList.appendChild(li);
   }; 
});
