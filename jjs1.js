function check(flag) {
    var list_checkbox = document.getElementsByTagName("input"), i = 0;
    for (i = 0; i < list_checkbox.length; i = i + 1) { list_checkbox[i].checked = flag; }
}
