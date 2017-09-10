'use strict';

$(function() {
    var hover_frame = $('.hover-frame');
    var img_hover = $('.img-hover');
    var hover_content = $('.hover-content'); 

    hover_frame.hide();

    img_hover.mouseenter(function() {
        $(this).next().show();
    });

    hover_frame.mouseleave(function() {
        $(this).fadeOut('slow');
    })
});