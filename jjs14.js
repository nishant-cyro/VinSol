
function appear(to_appear, to_dissappear) {
    document.getElementById("table" + to_appear).style.display = "block";
    document.getElementById("carts" + to_appear).style.backgroundColor = "gray";
    document.getElementById("table" + to_dissappear).style.display = "none";
    document.getElementById("carts" + to_dissappear).style.backgroundColor = "silver";
    document.getElementById("mytable").style.display = document.getElementById("table1").style.display;
}

function updateCart(quantity)
{
    var id = quantity.id.replace("quantitysec2",'');
    var price = document.getElementById("pricesec2" + id); 
    var sub = document.getElementById("subsec2" + id);
    var total = document.getElementById("total");

    total.value = total.value - sub.innerHTML; 
    sub.innerHTML = price.innerHTML * quantity.value;
    sub.innerHTML = new Number(sub.innerHTML).toFixed(2);
    total.value = eval(total.value + "+" + sub.innerHTML);
}

function removeCart(button) {
    var sub = document.getElementById("subsec2" + button.id);

    document.getElementById("total").value = eval(document.getElementById("total").value - sub.innerHTML);
    var element = document.getElementById("rsec2" + button.id);
    document.getElementById("carts2").innerHTML = "My Carts(" + eval(element.parentNode.rows.length+ "- 2") +")";
    element.parentNode.removeChild(element);
    
}

function addCart(button) {
    var t = document.getElementById("table2");
    var flag = false;
    for (var i = 0; i < t.rows.length; i = i + 1) {
        if(t.rows[i].id === "rsec2"+button.id) {flag = true;} }
    if(flag === true) {
        var a = document.getElementById("quantitysec2" + button.id);
        var b = document.getElementById("quantity" + button.id);
        var c = document.getElementById("rsec2" + button.id);
        document.getElementById("total").value = document.getElementById("total").value - c.cells[3].innerHTML;
        a.value = eval(a.value + "+" + b.value);
        c.cells[3].innerHTML = a.value * c.cells[1].innerHTML;
        document.getElementById("total").value = eval((document.getElementById("total").value) + "+" + (c.cells[3].innerHTML));
    } else {
        var a = document.getElementById("quantity" + button.id);
        var b = document.getElementById("title" + button.id);
        var c = document.getElementById("price" + button.id);
        var d = document.getElementById("img" + button.id);
        var r = t.insertRow(t.rows.length);
        var cell1 = r.insertCell(0);
        var cell2 = r.insertCell(1);
        var cell3 = r.insertCell(2);
        var cell4 = r.insertCell(3);
        var cell5 = r.insertCell(4);
        r.id = "rsec2" + button.id;
        cell1.innerHTML = b.innerHTML + '<img src = "' + d.src + '" height="50" weight="50" />';
        cell2.innerHTML = c.innerHTML;
        cell2.id = "pricesec2" + button.id; 
        cell3.innerHTML = '<input type = "text" id="quantitysec2' + button.id + '" size="3" value="' + a.value + '" onchange = "updateCart(this)" />';
        cell4.innerHTML = c.innerHTML * a.value;
        cell4.id = "subsec2" + button.id;
        cell4.innerHTML = new Number(cell4.innerHTML).toFixed(2);
        cell5.innerHTML = '<input type="button" id="' + button.id + '" value="Remove" onclick="removeCart(this)"/>';
        document.getElementById("total").value = eval((document.getElementById("total").value) + "+" + (cell4.innerHTML));
        document.getElementById("carts2").innerHTML = "My Carts(" + eval(t.rows.length + "- 1") +")";
    }
}

