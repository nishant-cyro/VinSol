var url = prompt("URL:", "http://www.google.com");
url = url.replace(/[ \t]+/g,'');
if (url.length === 0) { alert("Please Enter a valid URL"); } else { window.open(url, '', 'width=400, height=450, menubar=0, scrollbars=0, titlebar=0, toolbar=0'); }
