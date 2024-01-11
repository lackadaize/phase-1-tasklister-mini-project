document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("create-task-form");
  document.getElementById('create-task-form').addEventListener('submit', (e) => {
    e.preventDefault();
    let date = document.getElementById("new-task-date").value
    let task = document.getElementById("new-task-description").value
    let priority = document.getElementById("new-task-priority").value
    populateList( date + ": " + task + " " + priority + "   ");
    form.reset();
    console.log( date + ": " + task + priority);
  });
});

function populateList(task) {
  let li = document.createElement('li');
  let btn = document.createElement('button');
  btn.addEventListener('click', buttonDelete);
  li.textContent = task;
  btn.textContent = "x";
  li.appendChild(btn);
  document.querySelector("#tasks").appendChild(li);
}

function buttonDelete(e) {
  e.target.parentNode.remove();
}