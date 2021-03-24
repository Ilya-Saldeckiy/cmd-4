$(function() {
    $( ".accordion" ).accordion({
        heightStyle: 'content',
        active: true,
        collapsible: true
    } );
});

$(document).on('click', '.video__preview', function() {
	var $video = $('#video'),
		src = $video.attr('src');
 
	$video.attr('src', src + '&autoplay=1');
});

document.querySelectorAll('.question-link').forEach(function(cart){
    cart.addEventListener('click', function(event){
        document.querySelectorAll('.last-accord-line').forEach(function(tabContent) {
            tabContent.classList.toggle('close-border')
        })
    })
})