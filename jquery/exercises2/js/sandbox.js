    
$(document).ready( function() {

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
    $next_submit = $select_specials.parent('li').parent('ul').find('input[type="submit"]');
    console.log('2.4 Submit button next to Select', $next_submit);

    var $first_list_item_slideshow = $('#slideshow li:first');
    $first_list_item_slideshow.addClass('current');
    $sibbling_first_list_item = $first_list_item_slideshow.siblings().addClass('disabled');
    console.log('2.5 Current class is added to first list them', $first_list_item_slideshow);
    console.log('2.5 Disabled class is added to its sibblings', $sibbling_first_list_item);


});
