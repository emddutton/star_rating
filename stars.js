/**
 * Created by emddutton on 10/30/2014.
 */
$(document).ready(function(){


    $('.star').on('mouseenter', function(){
        $(this).prevAll().addBack().addClass('highlight');
    });

    $('.star').on('mouseleave', function(){
        $(this).prevAll().addBack().removeClass('highlight');
    });
    $('#box').on('click', ".star", function(){
        var stars = $(".star").prevAll().addBack();
        $(this).prevAll().addBack().addClass('highlight');
        stars.off('mouseleave');
    });


});