function onFormSubmit() {
    var formData = readFormData();
        insertNewRecord(formData);
}

function readFormData() {
var formData = {};
formData["firstName"] = document.getElementById("firstName").value;
formData["lastName"] = document.getElementById("lastName").value;
formData["address"] = document.getElementById("address").value;
formData["state"] = document.getElementById("state").value;
formData["country"] = document.getElementById("country").value;
formData["pincode"] = document.getElementById("pincode").value;
formData["gender"] = document.getElementById("gender").value;
return formData;
}

function insertNewRecord(data) {
var table = document.getElementById("studentList").getElementsByTagName('tbody')[0];
var newRow = table.insertRow(table.length);
cell1 = newRow.insertCell(0);
cell1.innerHTML = data.firstName;
cell2 = newRow.insertCell(1);
cell2.innerHTML = data.lastName;
cell3 = newRow.insertCell(2);
cell3.innerHTML = data.address;
cell4 = newRow.insertCell(3);
cell4.innerHTML = data.state;
cell5 = newRow.insertCell(4);
cell5.innerHTML = data.country;
cell6 = newRow.insertCell(5);
cell6.innerHTML = data.pincode;
cell7 = newRow.insertCell(6);
cell7.innerHTML = data.gender;
}