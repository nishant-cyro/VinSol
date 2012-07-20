
$(document).ready( function() {


    console.log('4.1 Create An Input Hint');

    $input_search = $('input[name="q"]');
    $input_search.attr('value','hint');
    $input_search.addClass('hint');

    console.log('hint class is added');

    console.log('label is removed', $input_search.prev('label[for="q"]').detach());

    $input_search.blur(function() {
        console.log('hint is removed');
        $(this).attr('value','');
        $(this).removeClass('hint')
    });

    $input_search.focus(function() {
        console.log('hint is added');
        $(this).attr('value','hint');
        $(this).addClass('hint')
    });


});
