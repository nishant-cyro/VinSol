$(document).ready(function(){

var product_json;

var products = {

"0" : [
{ "name" : "BRAND A", "value" : "0" },
{ "name" : "BRAND B", "value" : "0" },
{ "name" : "BRAND C", "value" : "0" },
{ "name" : "BRAND D", "value" : "0" }
],

"1" : [
{ "name" : "Yellow", "value" : "0" },
{ "name" : "Blue", "value" : "0" },
{ "name" : "Green", "value" : "0" },
{ "name" : "Red", "value" : "0" }
],

"2" : [
{ "name" : "All Products", "value" : "0" },
{ "name" : "Available Produts", "value" : "0" }
]
}

var urls = [
           ];

$.getJSON('js/product.json', function(result) {
product_json = result;
console.log(product_json[0].join());
var patt = /.* /g;
console.log(patt.exec(product_json));
});


/*
var brands_flag = true;
var colors_flag = true;

$list = $('<ul></ul>');
$('div#category').append($list);
$brand_list = $('<ul></ul>');
$list.append($('<li>Brands</li>')).append($brand_list);
for(var i = 0; i < products['brands'].length; i = i + 1)
{
$brand_list.append($('<li><input type = "checkbox" class = "0" name = "' + i + '"/>' + products['brands'][i].name + '</li>'));
}

$color_list = $('<ul></ul>');
$list.append($('<li>Colors</li>')).append($color_list);
for(var i = 0; i < products['colors'].length; i = i + 1)
{
$color_list.append($('<li><input type = "checkbox" class = "1" name = "' + i + '"/>' + products['colors'][i].name + '</li>'));
}

$available_list = $('<ul></ul>');
$list.append($('<li>Available</li>')).append($available_list);
for(var i = 0; i < products['availability'].length; i = i + 1)
{
$available_list.append($('<li><input type = "checkbox" class = "2" name = "' + i + '"/>' + products['availability'][i].name + '</li>'));
}

$.getJSON('js/product.json', function(result) {
product_json = result;
});


$('input[type="checkbox"]').click(function() {
});
*/
function checked1(checkbox)
{
var checked = new Array(3);
checked[checkbox.attr()]
for(var i = 0; i < product_json.length; i = i + 1)
{
if(product_json[i][checkbox.attr('class')] == produts[checkbox.attr('class')][Number(checkbox.attr('name'))].name)
{

if()
}
}
}

});
