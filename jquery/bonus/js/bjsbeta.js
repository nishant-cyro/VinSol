$(document).ready(function() {
    var product_json;
    var getting_urls = new Array(3);
    getting_urls[0] = new String("");
    getting_urls[1] = new String("");
    getting_urls[2] = new String("");

    var products = {
        "0" : [
        ],

        "1" : [
        ],

        "2" : [
            { "name" : "All Products", "value" : "0" },
            { "name" : "Available Produts", "value" : "0" }
        ] 
    }

    $.getJSON('js/product.json', function(result) {
        product_json = result;
        making_products();
        makingGUI();
    });


    function makingGUI() {
        $list = $('<ul></ul>');
        $('div#category').append($list);
        $brand_list = $('<ul></ul>');
        $list.append($('<li>Brands</li>')).append($brand_list);
        for(var i = 0; i < products['0'].length; i = i + 1) {
            $brand_list.append($('<li><input type = "checkbox" class = "0" id = "' + products['0'][i].name + '"/>' + products['0'][i].name + '</li>'));
        }

        $color_list = $('<ul></ul>');
        $list.append($('<li>Colors</li>')).append($color_list);
        for(var i = 0; i < products['1'].length; i = i + 1) {
            $color_list.append($('<li><input type = "checkbox" class = "1" id = "' + products['1'][i].name + '"/>' + products['1'][i].name + '</li>'));
        }

        $available_list = $('<ul></ul>');
        $list.append($('<li>Available</li>')).append($available_list);
        for(var i = 0; i < products['2'].length; i = i + 1) {
            $available_list.append($('<li><input type = "radio" class = "2" name = "avail" id = "' + products['2'][i].name + '"/>' + products['2'][i].name + '</li>'));
        }
        
        
        $('input[type="radio"]').first()[0].checked = 'checked';
        updating_getting_urls_radio($('input[type="radio"]').first());

    }

    $('input[type="checkbox"]').live('click', function() {
        updating_getting_urls($(this));
    });

    function updating_getting_urls(checkbox) {
        if(checkbox.is(':checked')) {
            if(getting_urls[checkbox.attr('class')] == "") {
                getting_urls[checkbox.attr('class')] = checkbox.attr('id');
            }
            else {
                getting_urls[checkbox.attr('class')] = getting_urls[checkbox.attr('class')] + "|" + checkbox.attr('id');
            }
        }
        else {
            getting_urls[checkbox.attr('class')] = getting_urls[checkbox.attr('class')].replace("|" + checkbox.attr('id'), "");
            getting_urls[checkbox.attr('class')] = getting_urls[checkbox.attr('class')].replace(checkbox.attr('id'), "");
        }
        finding_url();
    }

    $('input[type="radio"]').live('click', function() {
        updating_getting_urls_radio($(this));
    });

    function updating_getting_urls_radio(radio) {
        if(radio.attr('id') == "All Products") {
            getting_urls[2] = "0|1";
         }
         else {
             getting_urls[2] = "0";
         }
         finding_url();
    }


    function finding_url() {
        var expr = '';
        var urls = [
                   ];
        for(var i = 0; i < getting_urls.length; i = i + 1) {
            if(getting_urls[i].length == 0 || getting_urls[i] == null) {
                expr = expr + "(.*)";
            }
            else {
                expr = expr + "("+ getting_urls[i]+")";
            }
        }
       expr = new RegExp("(.*)z" + expr);
       for(var i = 0; i < product_json.length; i = i + 1) {
           var one_product = product_json[i].url + "z" + product_json[i].brand + product_json[i].color + product_json[i].sold_out;
           if(expr.test(one_product)) {
               urls.push(RegExp.$1);
           }
       }
       print_urls(urls);
    }

    function print_urls(urls) {
        $('div#images').children('img').remove();
        for(var i = 0; i < urls.length; i = i + 1) {
            $('div#images').append($('<img src = "images/' + urls[i] + '"/>'));
        }
    }

    function making_products() {
        var brands = product_json[0].brand;
        products['0'].push({ "name" : product_json[0].brand, "value" : "0" });
        var colors = product_json[0].color;
        products['1'].push({ "name" : product_json[0].color , "value" : "0" });
        var patt;

        for(var i=1; i<product_json.length; i = i + 1) {
            patt = new RegExp(brands);
            if(patt.test(product_json[i].brand) == false) {
                products['0'].push({ "name" : product_json[i].brand, "value" : "0" });
                brands = brands + "|" + product_json[i].brand;
            }
        patt = new RegExp(colors);
            if(patt.test(product_json[i].color) == false) {
                products['1'].push({ "name" : product_json[i].color , "value" : "0" });
                colors = colors + "|" + product_json[i].color;
            }
        }
    }
    
});
