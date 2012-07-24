$(document).ready( function() {

$special_form = $('#specials').find('form');
$special_form.after($('<div class="target"><h4></h4><p></p><img src="" /></div>'));
$special_div = $special_form.next('div.target');

$special_select = $special_form.find('select');

$special_select.one('change', function() {

$.getJSON('data/specials.json',function(result) {
selected_days = result;
changeSpecial($special_select.val());
});

$special_form.find(':submit').parent('li').remove();

$special_select.bind('change', function() {
changeSpecial($special_select.val());
});   
});

function changeSpecial(selected_day)
{
var day_properties = selected_days[selected_day];
$special_div.find('h4').html(day_properties.title);
$special_div.find('p').html(day_properties.text);
$special_div.find('img').attr('src', day_properties.image);

$special_div.css("background-color",day_properties.color);
}
});
