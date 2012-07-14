function validateForm() {
    var validate_flag = true; 
    var pat_email = /^[a-zA-Z]([a-zA-Z0-9+.\-][.]?)*@[a-zA-Z0-9]+.[a-zA-Z]{2,4}.[a-zA-Z]{0,3}$/;
    var pat_url = /^([a-zA-Z][a-zA-Z0-9]*:)(\/\/([a-zA-Z0-9]+:[a-zA-Z0-9]+@)?((www.)?([a-zA-Z0-9][a-zA-Z0-9\-]{1,61}[a-zA-Z0-9])(.[a-zA-Z0-9][a-zA-Z0-9\-]{1,61}[a-zA-Z0-9])*.[a-zA-Z]{2,4}.[a-zA-Z]{0,3})(:[0-9]{1,5})?)(\/[a-zA-Z0-9_.+\-]+)*(\?([a-zA-Z0-9][a-zA-Z0-9_.+\-]*=[a-zA-Z0-9+\-._,]+[;&]?)*)?(#[a-zA-z][a-zA-Z0-9._+\-,]*)*$/;


    if (document.getElementById("login").value.length === 0) { alert("Login Id can't be left Blank"); validate_flag = false; }

    if (document.getElementById("email").value.length === 0) { alert("Email Address can't be left Blank"); validate_flag = false; } else {
        if(pat_email.test(document.getElementById("email").value)) { alert("Yes, " + document.getElementById("email").value + " is a valid E-mail Address"); }
        else { alert("no, " + document.getElementById("email").value + " is not a valid E-mail Address"); validate_flag = false; }
            }


    if (document.getElementById("name").value.length === 0) { alert("Name can't be left Blank"); validate_flag = false; }

    if (document.getElementById("home").value.length === 0) { alert("Home Page can't be left Blank"); validate_flag = false; }
    
    else {
        if(pat_url.test(document.getElementById("home").value)) { alert("Yes, " + document.getElementById("home").value + " is a valid URL"); }
        else { alert("No, " + document.getElementById("home").value + " is not a valid URL"); validate_flag = false; }
        }


    if (document.getElementById("aboutme").value.length < 50) { alert("About Me should have a min. word limit of 50 characters."); validate_flag = false; }

    if (document.getElementById("receive").checked === false) { alert("Please select Receive Notification Checkbox"); validate_flag = false; }

    if (validate_flag === false) { return false; }
}
