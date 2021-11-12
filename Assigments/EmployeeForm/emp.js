window.onload = getFromLocalStorage;
var selectedRow = null
let info = [];
let id = 1000;
let tempid="";
function onFormSubmit() {
	document.getElementById("employeeList").classList.remove("hide");
    if (validate()) {
        var formData = readFormData();
		addToLocaleStorage(formData);
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
		resetForm() ;
    }
}

function readFormData() {
    var formData = {};
	if(selectedRow == null)
	{
		formData["id"] = id++;
	}
	else
	{
		formData["id"] = tempid;
	}
    formData["fullName"] = document.getElementById("fullName").value;
    formData["mailid"] = document.getElementById("mailid").value;
    formData["dob"] = document.getElementById("dob").value;
    formData["city"] = document.getElementById("city").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.id;
	cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.fullName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.mailid;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.dob;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.city;
    cell6= newRow.insertCell(5);
    cell6.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("mailid").value = "";
    document.getElementById("dob").value = "";
    document.getElementById("city").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
	tempid = selectedRow.cells[0].innerHTML;
    document.getElementById("fullName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("mailid").value = selectedRow.cells[2].innerHTML;
    document.getElementById("dob").value = selectedRow.cells[3].innerHTML;
    document.getElementById("city").value = selectedRow.cells[4].innerHTML;
}
function updateRecord(formData) {
	selectedRow.cells[0].innerHTML = formData.id;
    selectedRow.cells[1].innerHTML = formData.fullName;
    selectedRow.cells[2].innerHTML = formData.mailid;
    selectedRow.cells[3].innerHTML = formData.dob;
    selectedRow.cells[4].innerHTML = formData.city;
}

function onDelete(td) {
	var deletData ={ };
	var found = false;
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
		for(var i =0 ; i< info.length ; i++)
		{
			if(info[i].id == row.cells[0].innerHTML)
			{
				found = true;
			}
		}
		if(found == false)
		{
			deletData["id"] =row.cells[0].innerHTML;
			deletData["fullName"] =row.cells[1].innerHTML;
			deletData["mailid"] =row.cells[2].innerHTML;
			deletData["city"] =row.cells[3].innerHTML;
			info.push(deletData);
			addToLocaleStorage(info);
		}
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("fullName").value == "") {
        isValid = false;
        document.getElementById("fullNameValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("fullNameValidationError").classList.contains("hide"))
            document.getElementById("fullNameValidationError").classList.add("hide");
    }
    return isValid;
}

function addToLocaleStorage(data)
{
	info.push(data);
	localStorage.setItem("form", JSON.stringify(info));
}

function getFromLocalStorage( )
{
	const res = localStorage.getItem("form");
	if(res)
	{
		info = JSON.parse(res);
	}
	console.log(info);
	reEnterAllRecord(info);
}



function reEnterAllRecord(data) {
	let table = document.getElementById("employeeList");
	let found = false;
	console.log(table.rows.length);

	if(table.rows.length == 1)
	{
		for(let i = 0 ; i < data.length ; i++)
		{
			let newRow = table.insertRow(table.length);
			cell1 = newRow.insertCell(0);
			cell1.innerHTML = data[i].id;
			cell2 = newRow.insertCell(1);
			cell2.innerHTML = data[i].fullName;
			cell3 = newRow.insertCell(2);
			cell3.innerHTML = data[i].mailid;
			cell4 = newRow.insertCell(3);
			cell4.innerHTML = data[i].dob;
			cell5 = newRow.insertCell(4);
			cell5.innerHTML = data[i].city;
			cell6= newRow.insertCell(5);
			cell6.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
		}
	}
	else
	{
		let len = data.length ;
	
		
		for(let i = 0 ; i < data.length ; i++)
	{
		found = false;
		for(let j = 1 ; j < table.rows.length ; j++)
		{
		
			if(data[i].id == table.rows[j].cells[0] .innerHTML)
			{
				console.log("at line 160");
				found = true;
				break;
			}
		}
		console.log(found);
		if(found == false)
		{
			console.log("at line 167");
		 var newRow = table.insertRow(table.length);
		cell1 = newRow.insertCell(0);
		cell1.innerHTML = data[i].id;
		cell2 = newRow.insertCell(1);
		cell2.innerHTML = data[i].fullName;
		cell3 = newRow.insertCell(2);
		cell3.innerHTML = data[i].mailid;
		cell4 = newRow.insertCell(3);
		cell4.innerHTML = data[i].dob;
		cell5 = newRow.insertCell(4);
		cell5.innerHTML = data[i].city;
		cell6= newRow.insertCell(5);
		cell6.innerHTML = `<a onClick="onEdit(this)">Edit</a>
                       <a onClick="onDelete(this)">Delete</a>`;
		}
	}
  }
	
}


