var taskNameInput = document.getElementById("task_name");
var descriptionInput = document.getElementById("description");
var startDateInput = document.getElementById("start_date");
var endDateInput = document.getElementById("end_date");
var buttonSubmit = document.getElementById("submittask");

var form = document.querySelector("form");
var tableBody = document.querySelector("tbody");

buttonSubmit.addEventListener("click", function () {
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Create a new table row
    var newRow = document.createElement("tr");

    // Create table data cells and set their values
    var taskNameCell = document.createElement("td");
    taskNameCell.textContent = taskNameInput.value;

    var descriptionCell = document.createElement("td");
    descriptionCell.textContent = descriptionInput.value;

    var startDateCell = document.createElement("td");
    startDateCell.textContent = startDateInput.value;

    var endDateCell = document.createElement("td");
    endDateCell.textContent = endDateInput.value;

    // Append the cells to the new row
    newRow.appendChild(taskNameCell);
    newRow.appendChild(descriptionCell);
    newRow.appendChild(startDateCell);
    newRow.appendChild(endDateCell);

    // Append the new row to the table body
    tableBody.appendChild(newRow);

    // Reset the form
    form.reset();
  });
});
