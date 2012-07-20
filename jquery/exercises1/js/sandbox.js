$(document).ready( function() {

    console.log('1. Searching');

    var $div_module = $('div.module');
    console.log('1.1 All the div elements of module class: ', $div_module);

    var $third_child_1 = $('ul#myList li').eq(2);
    console.log('1.2 Third term using eq: ', $third_child_1);

    var $third_child_2 = $('ul#myList li');
    console.log('1.2 Third term using array: ', $($third_child_2[2]));

    var $third_child_3 = $('ul#myList li:nth-child(2)');
    console.log('1.2 Third term using nth-child:', $third_child_3);
    console.log('I think this method is best from the above methods because in second method the whole array is made, which requies more space and in the first method eq is used which only matches pattern, doesn\'t limit itself to the children of that tags.');

    $('input[type="text"]').each(function(index, search_name) {
        var $search_label = $(search_name).prev('label[for=' + $(search_name).attr('name') +']', 'search');
        console.log('1.3 Label using attribute selector: ', $search_label) });

    var $hidden_element = $(':hidden').length;
    console.log('1.4 Number of Hidden pages are: ', $hidden_element);
    
    var $image_alt = $('img[alt]').length;
    console.log('1.5 Number of Images tag with alt attribute are: ', $image_alt);

    var $odd_table_rows = $('table tr:odd');
    console.log('1.6 All the odd rows of table are: ', $odd_table_rows);
 
});
