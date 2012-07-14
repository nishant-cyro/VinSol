var count = 0;
function check1(check_box) { if (check_box.checked === true) { count = count + 1; } else { count = count - 1; }
    if (document.getElementById("never").checked  === true) { document.getElementById("never").checked = false; }
    if (count === 4) { check_box.checked = false; count = count - 1; var str = finding(); alert("Only 3 days can be selected. You have already selected " + str); }
    }

function finding() {
    var checked_list = new Array(), check_box_list = document.getElementsByTagName("input"), i = 0;
    for (i = 0; i < check_box_list.length - 1; i = i + 1) {
        if (check_box_list[i].checked === true) { checked_list[checked_list.length] = check_box_list[i].name; }
    }
    return checked_list[0] + ", " + checked_list[1] + " and " + checked_list[2];
}

function none() {
    var i = 0, check_box_list;
    if (document.getElementById("never").checked === true) { count = 0;
        check_box_list = document.getElementsByTagName("input");
        for (i = 0; i < check_box_list.length - 1; i = i + 1) { check_box_list[i].checked = false; }
        }
}

