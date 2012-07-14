function validateForm() {
    var validate_flag = true;
    var pat = /[ \t]+/g;

    for (var i = 1; i <= 4; i = i + 1) { field_value = document.getElementById("field" + i).value.replace(pat, '');
        if (field_value.length === 0) { alert(document.getElementById("field" + i).name + " can't be left Blank"); validate_flag = false; }
    }
    
    field_value = document.getElementById("field5").value.replace(pat, '');
    if (document.getElementById("field5").value.length < 50) { alert("About Me should have a min. word limit of 50 characters."); validate_flag = false; }

    if (document.getElementById("field6").checked === false) { alert("Please select Receive Notification Checkbox"); validate_flag = false; }

    if (validate_flag === false) { return false; }

}
