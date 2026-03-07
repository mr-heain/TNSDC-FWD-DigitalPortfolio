var regForm = document.getElementById("regForm");
var pTable = document.getElementById("pTable");
var statusMsg = document.getElementById("statusMsg");

regForm.onsubmit = function(e) {
    e.preventDefault();


    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var phone = document.getElementById("phone");
    var dob = document.getElementById("dob");
    var event = document.getElementById("event");
    var college = document.getElementById("college");
    var confirm = document.getElementById("confirm");
    var idProof = document.getElementById('idProof');
    var gender = document.querySelector('input[name="g"]:checked');
    var mode = document.querySelector('input[name="m"]:checked');

    var ok = true;

    if (name.value == "") { name.className = "redBorder"; ok = false; } 
    else { name.className = "greenBorder"; }

    if (email.value == "" || email.value.indexOf("@") == -1) {
        email.className = "redBorder"; ok = false;
    } else { email.className = "greenBorder"; }

    if (phone.value.length != 10) {
        phone.className = "redBorder"; ok = false;
    } else { phone.className = "greenBorder"; }

    if (dob.value == "") { dob.className = "redBorder"; ok = false; } 
    else { dob.className = "greenBorder"; }

    if (event.value == "") { event.className = "redBorder"; ok = false; } 
    else { event.className = "greenBorder"; }

    if (college.value == "") { college.className = "redBorder"; ok = false; } 
    else { college.className = "greenBorder"; }

    if (idProof.files.length === 0) { idProof.className = "redBorder"; ok = false; } 
    else { name.className = "greenBorder"; }


    if (!gender || !mode || !confirm.checked) {
        alert("Check all fields and the checkbox!");
        ok = false;
    }

    else if(idProof.files.length === 0){
        alert("Please upload the id proof");
        ok = false;
    }

    if (ok == true) {
        var row = pTable.insertRow(-1);
        row.insertCell(0).innerHTML = name.value;
        row.insertCell(1).innerHTML = email.value;
        row.insertCell(2).innerHTML = phone.value;
        row.insertCell(3).innerHTML = event.value;
        row.insertCell(4).innerHTML = mode.value;

        statusMsg.innerHTML = "Registration Successful!";
        statusMsg.style.color = "green";

        regForm.reset();
        var allInputs = [name, email, phone, dob, event, college, idProof];
        for (var i = 0; i < allInputs.length; i++) {
            allInputs[i].className = "";
        setTimeout(function() {
            statusMsg.innerHTML = "";
        }, 3000);
        
    }
}
}