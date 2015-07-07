
function OpenInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

function isMobile() {
   if(window.innerWidth <= 600) {
     return true;
   } else {
     return false;
   }
}


var toastShown = false;
$("#register-button").click(function(){
	if (!toastShown){
	toastShown = true;
	Materialize.toast('We havent opened registration yet...', 4000, '', function(){ toastShown = false;});
	}
});

$(".contact-us-button").click(function(e) {
	 $("#contact-us-modal").openModal();
});


//implicit iteration is cool huh? <3 jQuery
$(".card").addClass('hoverable');
$(".card").addClass('blue-grey lighten-5');

