function displayChildBoxes(head_check_box) {
    var i = 0; 
    if (head_check_box.checked === true) { 
        document.getElementById(head_check_box.name).style.display = "block";
        head_check_box.scrollIntoView(true); 
    } 
    else { 
        document.getElementById(head_check_box.name).style.display = "none"; 
        var checkbox_list = document.getElementsByClassName(head_check_box.name);
        for (i = 0; i < checkbox_list.length; i = i + 1) { checkbox_list[i].checked = false; }
        }
}
