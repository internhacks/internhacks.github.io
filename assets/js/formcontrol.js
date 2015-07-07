
$('#contact-us-submit-button').click(function(event){
	console.log(event);
	console.log($('#contact-us-form').serializeArray());
	//$("#contact-us-modal").closeModal();
	event.preventDefault();
});