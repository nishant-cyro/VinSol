

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


    console.log('2. Traversing');

    console.log('2.1 Alt attribute of image tags');
    $('img').each(function(index, images) {
        console.log($(images).attr('alt')) });
   
    console.log('2.2 Form tag of Search label');
    $('input[type="text"]').each(function(index, search_name) {
         var $search_label = $(search_name).prev('label[for=' + $(search_name).attr('name') +']', 'search');
         $search_label.parent('form').addClass('parent_form');
         console.log($search_label.parent('form')) });


    var $list_items_removed_current = $('#myList li.current').removeClass('current');
    var $list_items_added_current = $list_items_removed_current.next('li').addClass('current');
    console.log('2.3 Current class is added to', $list_items_added_current);
   
    var $select_specials = $('#specials select');
    $next_submit = $select_specials.parent('li').next('li').children('input[type="submit"]');
    console.log('2.4 Submit button next to Select', $next_submit);

    var $first_list_item_slideshow = $('#slideshow li:first');
    $first_list_item_slideshow.addClass('current');
    $sibbling_first_list_item = $first_list_item_slideshow.siblings().addClass('disabled');
    console.log('2.5 Current class is added to first list them', $first_list_item_slideshow);
    console.log('2.5 Disabled class is added to its sibblings', $sibbling_first_list_item);


    console.log('3. Manipulating');
    for(var i=0; i<5; i=i+1) {
         $('ul#myList').append($('<li> </li>'));
    }
    console.log('3.1 Five new list items appended to myList', $('ul#myList'));

    $('ul#myList li:odd').remove();
    console.log('3.2 List after the removal of odd rows', $('ul#myList'));

    $div_module_last = $('div.module').last();
    $div_module_last.append($('<h2> </h2>'));
    $div_module_last.append($('<p> </p>'));
    console.log('3.3 h2 and p are added to last div.module', $div_module_last);
   
    $select = $('select');
    $new_option = $('<option value = "wednessday">Wednessday</option>');
    $new_option.appendTo($select);
    console.log('3.4 New option is added to the Select: ', $select);

    var new_div_module = $('<div class="module"> </div>');
    $('div.module').last().after(new_div_module);
    $('img').first().clone().appendTo(new_div_module);
    console.log('3.5 Image is cloned to a newly appended div.module', new_div_module);

