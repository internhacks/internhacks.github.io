
function OpenInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

function isMobile() {
 if(window.innerWidth <= 1000) {
   return true;
 } else {
   return false;
 }
}




//implicit iteration is cool huh? <3 jQuery
$(".card").addClass('hoverable');

var schedule;

function initializeSchedule(){
	schedule = [
		{time:"9-10", id:"w1", title:"Start Hacking!", companyName:"", img:"<img src='assets/img/internhacks-blue.png'>", instructor:"", text:""},
		{time:"10-11", id:"w2", title:"Intro to HTML/CSS", companyName:"Google", img:"<img src='assets/img/htmlcss.png'>", instructor:"Manu Cornet", text:"This workshop will get you up to speed with the basics of HTML/CSS, to get you ready for a successful day of hacking!"},
		{time:"11-12", id:"w3", title:"How to Host a Site with Namecheap", companyName:"Namecheap", img:"<img src='assets/img/namecheap-logo.png'>", instructor:"", text:"We will be bringing you an expert from Namecheap to teach you how to get your beautiful portfolio site hosted!"},
		{time:"12-1", id:"w4", title:"LUNCH", companyName:"", instructor:"", text:""},
		{time:"1-2", id:"w5", title:"Weebly Workshop", companyName:"Weebly", instructor:"", img:"<img src='assets/img/weebly-logo.gif'>", text:"Join us for this workshop presented by an engineer from <a href='http://www.weebly.com/'>Weebly</a>! <br>More info coming soon!"},
		{time:"2-3", id:"w6", title:"Kik Workshop", companyName:"Kik", instructor:"", img:"<img src='assets/img/kik-logo.png'>", text:"Join us for this workshop presented by an engineer from <a href='http://www.kik.com/'>Kik</a>! <br>More info coming soon!"},
		{time:"3-4", id:"w7", title:"AngularJS Workshop", companyName:"<a href='http://warehousing.theshotput.com/'>The Shotput</a>", instructor:"James Steinberg", img:"<img src='assets/img/angularjs.png'>", text:"Ever wanted to learn AngularJS? This framework will give your portfolio a beautiful look and feel."},
		{time:"4-5", id:"w8", title:"Ruby Workshop", companyName:"<a href='http://hag3.com/'>hag3.com</a>", instructor:"Hugo A. Gonzalez", img:"<img src='assets/img/ruby.png'>", text:"This workshop will teach you all about Ruby, so you can add a backend to your personal website."},
		{time:"5", id:"w9", title:"Submit your hack!", companyName:"", instructor:"", img:"<img src='assets/img/internhacks-blue.png'>", text:"That's right! While InternHacks isn't a traditional hackathon, we decided to reward those who put in a lot of time and effort with <br><b>BEST PORTFOLIO WEBSITE</b></br> determined by our expert judging panel."},
		{time:"5-5:30", id:"w10", title:"Upcoming Dev tools", companyName:"<a href='http://joelcox.io/'>joelcox.io</a>", instructor:"Joel Cox", img:"", text:"Learn about the latest Javascript technologies such as ES6 and Aurelia, a new state of the art Javascript Framework!"},
	];
}

function getSchedule(){
	return schedule;
}

function addScheduleToPage(){
	initializeSchedule();
	if(isMobile()){
		addCollapseSchedule();
		    $('.collapsible').collapsible({
		      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
		    });
	}else{
		addTabSchedule();
		$('.tabs').tabs();
	}
}


function addCollapseSchedule(){
	$(".schedule").append('<ul class="collapsible" data-collapsible="expandable"><li class="schedule-mobile-title"><h2>{ Schedule }</h2></li></ul>');

	for(var i=0; i<getSchedule().length; i++){

		var body = (getSchedule()[i].text) ? "<div class="+"collapsible-body"+">"+getInstructorElement(getSchedule()[i])+"<p>"+getSchedule()[i].text+"</p></div>" : "";

		var elem = "<li><div class="+"collapsible-header"+"><div class='collapse-time'>"+getSchedule()[i].time+"</div><div class='collapse-title'>"+getSchedule()[i].title+"</div></div>"+body+"</li>";
		$(".collapsible").append(elem);
	}
}

function addTabSchedule(){
	$(".schedule").append('<div class="card z-depth-4 col s12 schedule-tabs"><h2>{ Schedule }</h2><ul class="tabs"></ul></div>');
 
	for(var i=0; i<getSchedule().length; i++){
		var tabElem = "<li class="+"tab col s1"+"><a href="+"#"+getSchedule()[i].id+">"+getSchedule()[i].time+"</a></li>";
		var dataElem = "<div class="+"'schedule-item col s12'"+" id="+"'"+getSchedule()[i].id+"'"+"><h4>"+getSchedule()[i].title+"</h4>"+getInstructorElement(getSchedule()[i])+"<p>"+ getSchedule()[i].text +"</p>"+ getImg(getSchedule()[i]) +"</div>";

		$(".tabs").append(tabElem);
		$(".schedule-tabs").append(dataElem);
	}

}

function getInstructorElement(scheduleObj){
	var elem = "";
	if(scheduleObj.instructor){
		var companyInfo = (scheduleObj.companyName) ? ", "+scheduleObj.companyName :"";
		elem += "<span class='collapse-instructor'><strong>Instructor: </strong>"+scheduleObj.instructor +""+ companyInfo +"</span>";
	}
	return elem;
}

function getImg(scheduleObj){
	var img=""
	if(scheduleObj.img){
		img += scheduleObj.img;
	}
	console.log(img);
	return img;
}


$( document ).ready(function(){
	//$('.card').addClass('hoverable');
	addScheduleToPage();
});
