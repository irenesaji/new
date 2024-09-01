// Function to edit a row
function edit_row(row_id) {
    // Get current values from table cells
    var DID = document.getElementById(`DID_row${row_id}`).textContent;
    var NAME = document.getElementById(`NAME_row${row_id}`).textContent;
    var DEPT = document.getElementById(`DEPT_row${row_id}`).textContent;

    // Replace table cell contents with input fields
    document.getElementById(`DID_row${row_id}`).innerHTML = `<input type="text" id="edit_DID${row_id}" value="${DID}">`;
    document.getElementById(`NAME_row${row_id}`).innerHTML = `<input type="text" id="edit_NAME${row_id}" value="${NAME}">`;
    document.getElementById(`DEPT_row${row_id}`).innerHTML = `<input type="text" id="edit_DEPT${row_id}" value="${DEPT}">`;

    // Hide edit and delete buttons, show save button
    document.getElementById(`edit_button${row_id}`).style.display = "none";
    document.getElementById(`delete_button${row_id}`).style.display = "none";
    document.getElementById(`Save_button${row_id}`).style.display = "inline-block";
}

// Function to save changes after editing a row
function save_row(row_id) {
    // Get edited values from input fields
    var DID_val = document.getElementById(`edit_DID${row_id}`).value;
    var NAME_val = document.getElementById(`edit_NAME${row_id}`).value;
    var DEPT_val = document.getElementById(`edit_DEPT${row_id}`).value;

    // Update table cell contents with new values
    document.getElementById(`DID_row${row_id}`).textContent = DID_val;
    document.getElementById(`NAME_row${row_id}`).textContent = NAME_val;
    document.getElementById(`DEPT_row${row_id}`).textContent = DEPT_val;

    // Show edit and delete buttons, hide save button
    document.getElementById(`edit_button${row_id}`).style.display = "inline-block";
    document.getElementById(`delete_button${row_id}`).style.display = "inline-block";
    document.getElementById(`Save_button${row_id}`).style.display = "none";
}

// Function to delete a row
function delete_row(row_id) {
    document.getElementById(`row${row_id}`).style.display = "none";
}

// Function to add a new row
function add_row() {
    // Get values from input fields
    var new_DID = document.getElementById("new_DID").value;
    var new_NAME = document.getElementById("new_NAME").value;
    var new_DEPT = document.getElementById("new_DEPT").value;

    // Reference to the table
    var table = document.getElementById("data_table");

    // Get the number of rows in the table (excluding the last row used for adding new entries)
    var row_count = table.rows.length - 1;

    // Insert a new row at the end of the table
    var row = table.insertRow(row_count);

    // Set the ID for the new row
    row.id = `row${row_count}`;

    // Populate the new row with data and buttons
    row.innerHTML = `
        <td id="DID_row${row_count}">${new_DID}</td>
        <td id="NAME_row${row_count}">${new_NAME}</td>
        <td id="DEPT_row${row_count}">${new_DEPT}</td>
        <td>
            <input type="button" id="edit_button${row_count}" value="edit" class="edit" onclick="edit_row('${row_count}')">
            <input type="button" id="delete_button${row_count}" value="delete" class="delete" onclick="delete_row('${row_count}')">
            <input type="button" id="Save_button${row_count}" value="save" class="save" style="display:none;" onclick="save_row('${row_count}')">
        </td>
    `;

    // Clear input fields after adding row
    document.getElementById("new_DID").value = "";
    document.getElementById("new_NAME").value = "";
    document.getElementById("new_DEPT").value = "";
}
