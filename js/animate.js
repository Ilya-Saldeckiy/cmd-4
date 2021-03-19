$(document).ready(function(){
    $(".menu-list-item").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate(1500);
    });
});
