
$(document).ready(function() {

    $shown_p = $('div#blog ul').find('p').first();
    $('div#blog ul').find('h3').click(function() {
        $shown_p.slideUp();
        $shown_p = $(this).next('p');
        $shown_p.slideDown();
    });
});

