
var products = [
               {"title":"Apple Macbook Pro", "category":"Computers", "info":"The Intel Core 2 duo powering Macbook Pro is basically two processor built into single chip.", "price":"2299.99", "image":"http://dl.dropbox.com/u/88337953/images1.jpeg" },
               {"title":"Sony VAIO", "category":"Computers", "info":"The Intel Core 2 duo powering Macbook Pro is basically two processor built into single chip.", "price":"2699.99", "image":"http://dl.dropbox.com/u/88337953/images2.jpeg" },
               {"title":"Canon Digital Rebel XT", "category":"Camera", "info":"The Intel Core 2 duo powering Macbook Pro is basically two processor built into single chip.", "price":"550", "image":"http://dl.dropbox.com/u/88337953/images3.jpeg" }
               ];

function createProductCart()
{
for(var i=0; i<products.length; i=i+1) {
var new_product = document.getElementById('product_table').insertCell(document.getElementById('product_table').length);
var title_cell = new_product.insertCell(0);
var quantity_cell = new_product.insertCell(1);
var add_button_cell = new_product.insertCell(2);

var title = document.createElement('p');
title.id = "title" + i;
//title.class = 'title';
}
}

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
    var table = document.getElementById("table2");
    var flag = false;
    for (var i = 0; i < table.rows.length; i = i + 1) {
        if(table.rows[i].id === "rsec2"+button.id) {flag = true;} }
    if(flag === true) {
        var quantity2 = document.getElementById("quantitysec2" + button.id);
        var quantity1 = document.getElementById("quantity" + button.id);
        var rowsec2 = document.getElementById("rsec2" + button.id);
        document.getElementById("total").value = document.getElementById("total").value - rowsec2.cells[3].innerHTML;
        quantity2.value = eval(a.value + "+" + b.value);
        quantity2.cells[3].innerHTML = quantity1.value * rowsec2.cells[1].innerHTML;
        document.getElementById("total").value = eval((document.getElementById("total").value) + "+" + (rowsec2.cells[3].innerHTML));
    } else {
        var quantity = document.getElementById("quantity" + button.id);
        var title = document.getElementById("title" + button.id);
        var price = document.getElementById("price" + button.id);
        var img = document.getElementById("img" + button.id);
        var item_to_add = table.insertRow(table.rows.length);
        var title2 = item_to_add.insertCell(0);
        var unit_price2 = item_to_add.insertCell(1);
        var quantity2 = item_to_add.insertCell(2);
        var amount2 = item_to_add.insertCell(3);
        var remove2 = item_to_add.insertCell(4);
        item_to_add.id = "rsec2" + button.id;                 
        title2.innerHTML = title.innerHTML; 

        var img2 = document.createElement('img');     
        img2.src = img.src;
        img2.height = '50';
        img2.width = '50';
        title2.appendChild(img2);
        unit_price2.innerHTML = price.innerHTML;
        unit_price2.id = "pricesec2" + button.id; 
        var quan2 = document.createElement("input");
        quan2.type = 'text';
        quan2.id = 'quantitysec2' + button.id;
        quan2.size = '3';
        quan2.value = quantity.value;
        quan2.setAttribute('onchange', 'updateCart(this)');        
        quantity2.appendChild(quan2);
        amount2.innerHTML = price.innerHTML * quantity.value;
        amount2.id = "subsec2" + button.id;
        amount2.innerHTML = new Number(amount2.innerHTML).toFixed(2);
        var remove = document.createElement('input');
        remove.type = 'button';
        remove.id = button.id;
        remove.value = 'Remove';
        remove.setAttribute('onclick','removeCart(this)');        
        remove2.appendChild(remove);
        document.getElementById("total").value = eval((document.getElementById("total").value) + "+" + (amount2.innerHTML));
        document.getElementById("carts2").innerHTML = "My Carts(" + eval(table.rows.length + "- 1") +")";
    }
}

