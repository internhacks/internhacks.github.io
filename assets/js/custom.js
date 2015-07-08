
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

$(".contact-us-button").click(function(e) {
	 $("#contact-us-modal").openModal();
});


//implicit iteration is cool huh? <3 jQuery
$(".card").addClass('hoverable');
$(".card").addClass('blue-grey lighten-5');


function fixHackSectionForMobile(){
//$('.service-content').replaceWith("");		
}

// jQuery('<div/>', {
    // id: 'foo',
    // href: 'http://google.com',
    // title: 'Become a Googler',
    // rel: 'external',
    // text: 'Go to Google!'
// }).appendTo('#mySelector');


