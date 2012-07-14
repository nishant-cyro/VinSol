function addAndRemove(to_remove, to_add) {    
var select1 = document.getElementById(to_remove), select2 = document.getElementById(to_add), index = select1.selectedIndex;
    while(index != -1) {
        select2.add(select1.options[index], select2.options[null]);
        index = select1.selectedIndex;
    }
}

