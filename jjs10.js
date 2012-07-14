function checkNumeric() {
    var is_number = document.getElementById("number").value, numExp = /^[+-]?[0-9]+[.]?[0-9]*$/;

    if (numExp.test(is_number) === true) { document.getElementById("result").value = "true"; } else { document.getElementById("result").value = "false"; return false; }
}

