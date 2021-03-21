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