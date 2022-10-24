import $ from "jquery";

$(function() {



    /* Menu nav toggle */
    $("#nav-toggle").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
        $("#nav").toggleClass("active");
    });

    $('document').on('click', function(event) {
        const nav = $("#nav")
        
        if (nav.hasClass('active')) {
            nav.removeClass('active')
        }

    })

});


