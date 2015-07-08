
$('.navbar-logo').on('click', function(event) {
	var target = $('#headerwrap');
	if( target.length ) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: target.offset().top
		}, 1000);
	}
});