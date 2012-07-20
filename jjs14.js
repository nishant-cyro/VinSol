
var checkout;

var products = [
               {"id":"1", "title":"Apple Macbook Pro", "category":"Computers", "info":"The Intel Core 2 duo powering Macbook Pro is basically two processor built into single chip.", "price":"2299.99", "image":"http://dl.dropbox.com/u/88337953/images1.jpeg", "quantity":"0" },
               {"id":"1", "title":"Sony VAIO", "category":"Computers", "info":"The Intel Core 2 duo powering Macbook Pro is basically two processor built into single chip.", "price":"2699.99", "image":"http://dl.dropbox.com/u/88337953/images2.jpeg", "quantity":"0" },
               {"id":"1", "title":"Canon Digital Rebel XT", "category":"Camera", "info":"The Intel Core 2 duo powering Macbook Pro is basically two processor built into single chip.", "price":"550", "image":"http://dl.dropbox.com/u/88337953/images.jpeg", "quantity":"0" }
               ];

var carts = [
             ];

var count = 0;

function createProductCart() {
    for(var i = 0; i < products.length; i = i + 1) {
        var new_product = document.getElementById('product_table').insertRow(document.getElementById('product_table').rows.length);
        var title_cell = new_product.insertCell(0);
        var quantity_cell = new_product.insertCell(1);
        var add_button_cell = new_product.insertCell(2);

        var title = document.createElement('p');
        title.id = "title" + i;
        title.setAttribute('class', 'title');
        title.innerHTML = products[i].title;

        var info = document.createElement('p');
        info.setAttribute('class', 'about');
        info.innerHTML = products[i].info;

        var category = document.createElement('p');
        category.setAttribute('class', 'category');
        category.innerHTML = 'Category:' + products[i].category;

        var image = document.createElement('img');
        image.id = "img" + i;
        image.src = products[i].image;

        var price = document.createElement('p');
        price.setAttribute('class', 'price');
        price.innerHTML = 'Price:';

        var unit_price = document.createElement('span');
        unit_price.id = "price" + i;
        unit_price.innerHTML = products[i].price;
        price.appendChild(unit_price);

        title_cell.appendChild(image);
        title_cell.appendChild(title);
        title_cell.appendChild(info);
        title_cell.appendChild(category);
        title_cell.appendChild(price);

        var quantity = document.createElement('input');
        type = 'text';
        quantity.id = 'quantity' + i;
        quantity.size = '3';
        quantity_cell.innerHTML = 'Quantity:';
        quantity_cell.appendChild(quantity);

        var add_button = document.createElement('input');
        add_button.type = 'button';
        add_button.id = '' + i;
        add_button.value = 'Add Cart';
        add_button.setAttribute('onclick', 'addCart(this)');
        add_button_cell.appendChild(add_button);
    }
    checkout = document.getElementById('total');
}


function createMyCart(id) {
    var new_cart = document.getElementById('cart_table').insertRow(document.getElementById('cart_table').rows.length);
    var product_cell = new_cart.insertCell(0);
    var price_cell = new_cart.insertCell(1);
    var quantity_cell = new_cart.insertCell(2);
    var subtotal_cell = new_cart.insertCell(3);
    var remove_button_cell = new_cart.insertCell(4);


    var image = document.createElement('img');
    image.src = carts[id].image;
    image.height = '50';
    image.width = '50';

    var title = document.createElement('p');
    title.id = "title2" + id;
    title.setAttribute('class', 'title');
    title.innerHTML = carts[id].title;
    
    product_cell.appendChild(image);
    product_cell.appendChild(title);     

    var price = document.createElement('p');
    price.id = "pricesec2" + id;
    price.innerHTML = carts[id].price;
    price_cell.appendChild(price);


    var quantity = document.createElement('input');
    quantity.type = 'text';
    quantity.id = 'quantitysec2' + id;
    quantity.name = '' + id;
    quantity.size = '3';
    quantity.setAttribute('onchange', 'updateCart(this)');
    quantity.value = carts[id].quantity;
    quantity_cell.appendChild(quantity);

    var amount = document.createElement('p');
    amount.innerHTML = (carts[id].quantity * carts[id].price).toFixed(2);
    subtotal_cell.appendChild(amount);


    var remove_button = document.createElement('input');
    remove_button.type = 'button';
    remove_button.id = '' + id;
    remove_button.value = 'Remove';
    remove_button.setAttribute('onclick', 'removeCart(this)');
    remove_button_cell.appendChild(remove_button);

    checkout.value = eval(checkout.value + "+" + amount.innerHTML).toFixed(2);
    count = count + 1;
    document.getElementById('cart-tab').innerHTML = 'MyCarts(' + count + ')';
}


function updateMyCart(added) {
    document.getElementById('quantitysec2'+(added-1)).value = carts[added-1].quantity;
    document.getElementById('cart_table').rows[added].cells[3].innerHTML = carts[added-1].amount;
}


function addCart(button) {
    var added = -1;
    products[button.id].quantity = document.getElementById('quantity' + button.id).value;
    for (var i=0; i<carts.length; i++) {
        if(carts[i].id === button.id) {
            added = i;
        }
    } 
    if(added === -1) {
        newCart(button);
    } 
    else {
        existingCart(added, button);
    }
}


function existingCart(added, button) {
    checkout.value = (checkout.value - carts[added].amount).toFixed(2);
    carts[added].quantity = eval(carts[added].quantity + '+' + products[button.id].quantity);
    carts[added].amount = (carts[added].quantity * carts[added].price).toFixed(2);
    checkout.value = eval(checkout.value + "+" + carts[added].amount).toFixed(2);
    updateMyCart(added+1);
}


function newCart(button) {
    var i = button.id;
    carts.push({"id":button.id, "title":products[i].title, "price":products[i].price, "quantity":products[i].quantity, "amount":products[i].quantity * products[i].price, "image":products[i].image});
    createMyCart(carts.length-1);
}


function appear(to_appear, to_dissappear) {
    document.getElementById(to_appear +"_table").style.display = "block";
    document.getElementById(to_appear + "-tab").style.backgroundColor = "gray";
    document.getElementById(to_dissappear +"_table").style.display = "none";
    document.getElementById(to_dissappear +"-tab").style.backgroundColor = "silver";
    document.getElementById("mytable").style.display = document.getElementById("product_table").style.display;
}

function updateCart(quantity) {
    var added = -1;
    for(var i=0; i<carts.length; i=i+1) {
        if(quantity.name === carts[i].id)
            added = i;
    }

    if(added !== -1) {
        checkout.value = (checkout.value - carts[added].amount).toFixed(2);
        carts[added].quantity = document.getElementById('quantitysec2'+added).value;
        carts[added].amount = (carts[added].quantity * carts[added].price).toFixed(2);
        checkout.value = eval(checkout.value + "+" + carts[added].amount).toFixed(2);
        updateMyCart(added+1);
    }
}

function removeCart(button) {
    var added = -1;
    products[button.id].quantity = document.getElementById('quantity' + button.id).value;
    for (var i=0; i<carts.length; i++) {
        if(carts[i].id === button.id) {
            added = i;
        }
    }
    if(added !== -1) {
        checkout.value = (checkout.value - carts[added].amount).toFixed(2);
        carts.splice(added,1);
        document.getElementById('cart_table').deleteRow(added+1);
        count = count - 1;
        document.getElementById('cart-tab').innerHTML = 'MyCarts(' + count + ')';
    }
}
