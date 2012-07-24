
$(document).ready(function(){
    var count = 1;
    divs_stack = $('div#heading');
    $("input#add-stack").live("click", function() {
        $new_div = $('<div></div>');
        $new_div.append($('<p>' + count + '</p>'));
        $new_div.css({"background-color" : "pink","height" : "50px", "margin" : "20px", "font-color" : "black", "font-size" : "20px", "text-align" : "center", "padding" : "0", "padding" : "10px" });
        $new_div.click( function() {
            if(Number(($(this).children('p')[0]).innerHTML) === count-1) {
                count = count - 1;
                $(this).remove();
            }
            else
                $(this).css({"border" : "2px solid black", "padding" : "8px"});
        });

        divs_stack.append($new_div);
    count = count + 1;
    });
});
