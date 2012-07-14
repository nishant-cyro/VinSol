var fname = prompt("Enter First Name:", "Vijay");

if(fname === null) {
    alert("Canceled"); }
else {
    var lname = prompt("Enter Last Name:", "Chauhan"); 

    if(lname === null) {
        alert("Canceled"); }
    else {
        fname = '"Hello ' + fname + ' ' + lname + ' ".';
        fname = fname.replace(/[ \t]+/g,' ');
        fname = fname.replace(/[ \t]+$/,'');
        fname = fname.replace(/^[ \t]+/,'');

        alert(fname);
        document.write(fname);
    }
}
