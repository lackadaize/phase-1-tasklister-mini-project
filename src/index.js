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

// A delete function that will remove tasks from your list
// A priority value selected from a dropdownLinks to an external site. that is used to determine the color of the text in the list (e.g. red for high priority, yellow for medium, green for low)
// As an additional challenge, implement a sorting functionality that displays the tasks in ascending or descending order based on priority
// Ability to edit tasks
// Something of your choice! The main objective is to add a feature that allows the user's input to affect the DOM

// As a user, I should be able to type a task into the input field.
// As a user, I should be able to click some form of a submit button.

// document.addEventListener("DOMContentLoaded", (event) => {
//   event.preventDefault();
//   console.log("test");
//   document.getElementById('create-task-form').addEventListener ("submit", (event) => {
//     event.preventDefault();
//     console.log("submitevent");
//   });
// });