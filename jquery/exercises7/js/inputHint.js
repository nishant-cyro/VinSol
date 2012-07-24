
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


    console.log('4.2 Add tabbed Navigation');

    $('div.module').hide();

    $new_list = $('<ul></ul>').attr('id', 'newList');
    
    $('div.module').first().before($new_list);

    $('div.module').each(function(index, module) {
        $new_list.append($('<li></li>').attr('innerHTML', $(module).children("h2").attr('innerHTML')))
    });


    $new_list.children('li').click(function() {
        $this_module = $('h2:contains('+  $(this).attr('innerHTML') + ')').parent('div.module');
        $this_module.css('display', 'block');
        $this_module.siblings('div.module').css('display', 'none');

        $(this).addClass('current');
        $(this).siblings('li').removeClass('current')
    });

    $('div.module').first().css('display', 'block');
    $('ul#newList li').first().addClass('current');
