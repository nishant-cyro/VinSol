function fetchDomain()
{
    var url = document.getElementById("url_field").value;
    var pat = /[ \t]+/g;
    url = url.replace(pat,'');


    if (url === null || url.length === 0) {
        alert("No URL is entered");
        return false;
    }

    pat = /(([a-zA-Z0-9][a-zA-Z0-9\-]{1,61}[a-zA-Z0-9][.])*)(([a-zA-Z0-9][a-zA-Z0-9\-]{1,61}[a-zA-Z0-9][.]?)([.][a-zA-Z0-9]{2,4})([.][a-zA-Z0-9]{2})?)/ ;

    pat.exec(url);


    if (RegExp.$3 !== null && RegExp.$3.length !== 0) {
        alert("Domain: " + RegExp.$3);

        if (RegExp.$1 !== null && RegExp.$1.length !== 0) {
            alert("Sub - Domain: " + RegExp.$1.substr(0,RegExp.$1.length - 1));
        }
    }

    else {
        alert("No Domain is found");
    }

    return false;
}

