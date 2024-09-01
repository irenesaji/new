function edit_row(row_id) {
    var EID = document.getElementById(`EID_row${row_id}`).innerHTML;
    var NAME = document.getElementById(`NAME_row${row_id}`).innerHTML;
    var DEPT = document.getElementById(`DEPT_row${row_id}`).innerHTML;
    var SALARY = document.getElementById(`SALARY_row${row_id}`).innerHTML;

    document.getElementById(`EID_row${row_id}`).innerHTML = `<input type="text" id="edit_EID${row_id}" value="${EID}">`;
    document.getElementById(`NAME_row${row_id}`).innerHTML = `<input type="text" id="edit_NAME${row_id}" value="${NAME}">`;
    document.getElementById(`DEPT_row${row_id}`).innerHTML = `<input type="text" id="edit_DEPT${row_id}" value="${DEPT}">`;
    document.getElementById(`SALARY_row${row_id}`).innerHTML = `<input type="text" id="edit_SALARY${row_id}" value="${SALARY}">`;

    document.getElementById(`edit_button${row_id}`).style.display = "none";
    document.getElementById(`delete_button${row_id}`).style.display = "none";
    document.getElementById(`Save_button${row_id}`).style.display = "inline-block";
}

function save_row(row_id) {
    var EID_val = document.getElementById(`edit_EID${row_id}`).value;
    var NAME_val = document.getElementById(`edit_NAME${row_id}`).value;
    var DEPT_val = document.getElementById(`edit_DEPT${row_id}`).value;
    var SALARY_val = document.getElementById(`edit_SALARY${row_id}`).value;

    document.getElementById(`EID_row${row_id}`).innerHTML = EID_val;
    document.getElementById(`NAME_row${row_id}`).innerHTML = NAME_val;
    document.getElementById(`DEPT_row${row_id}`).innerHTML = DEPT_val;
    document.getElementById(`SALARY_row${row_id}`).innerHTML = SALARY_val;

    document.getElementById(`edit_button${row_id}`).style.display = "inline-block";
    document.getElementById(`delete_button${row_id}`).style.display = "inline-block";
    document.getElementById(`Save_button${row_id}`).style.display = "none";
}

function delete_row(row_id) {
    document.getElementById(`row${row_id}`).style.display = "none";
}

function add_row() {
    var new_EID = document.getElementById("new_EID").value;
    var new_NAME = document.getElementById("new_NAME").value;
    var new_DEPT = document.getElementById("new_DEPT").value;
    var new_SALARY = document.getElementById("new_SALARY").value;

    var table = document.getElementById("data_table");
    var row_count = table.rows.length;

    var row = table.insertRow(row_count - 1); 

    row.id = `row${row_count}`;
    row.innerHTML = `
        <td id="EID_row${row_count}">${new_EID}</td>
        <td id="NAME_row${row_count}">${new_NAME}</td>
        <td id="DEPT_row${row_count}">${new_DEPT}</td>
        <td id="SALARY_row${row_count}">${new_SALARY}</td>
        <td>
            <input type="button" id="edit_button${row_count}" value="edit" class="edit" onclick="edit_row('${row_count}')">
            <input type="button" id="delete_button${row_count}" value="delete" class="delete" onclick="delete_row('${row_count}')">
            <input type="button" id="Save_button${row_count}" value="save" class="save" style="display:none;" onclick="save_row('${row_count}')">
        </td>
    `;
    document.getElementById("new_EID").value = "";
    document.getElementById("new_NAME").value = "";
    document.getElementById("new_DEPT").value = "";
    document.getElementById("new_SALARY").value = "";
}
