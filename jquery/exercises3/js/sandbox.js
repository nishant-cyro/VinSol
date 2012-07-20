
$(document).ready( function() {

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

});
