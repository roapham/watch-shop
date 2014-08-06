//$(document).ready(function() {
//    $('.dropdown-menu a[data-toggle="tab"]').click(function(e) {
//        e.stopPropagation();
//        $(this).tab('show');
//    });
//    $('.navbar .dropdown').hover(function() {
//        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(150);
//    }, function() {
//        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(105)
//    });
//});


//
//$(document).ready(function() {
//    var s = $("#sticker");
//    var pos = s.position();                    
//    $(window).scroll(function() {
//        var windowpos = $(window).scrollTop();
//        s.html("Distance from top:" + pos.top + "<br />Scroll position: " + windowpos);
//        if (windowpos >= pos.top) {
//            s.addClass("stick");
//        } else {
//            s.removeClass("stick"); 
//        }
//    });
//});