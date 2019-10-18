// Barcamp Javascript

// function generateParticipant(obj) {
// 	var participant = $("<div />",{"class":"col-md-3 col-sm-4 col-xs-2 speaker mix "+obj.category, "data-my-order":obj.order});
// 	var image = $("<img />", {src: obj.image, "class":"img-circle speaker-img", title: obj.node_title, alt: obj.node_title});
// 	var name = $("<h3 />", {"class":"speaker-title"}).html(obj.node_title);
// 	if (obj.twitter.length > 0) {
// 		var twitter = $("<a />", {href:"http://twitter.com/"+obj.twitter, title:obj.twitter, "class":"speaker-twitter"}).html('<i class="fa fa-twitter"></i>');
// 		name.append(twitter);
// 	}
// 	var title = $("<h4 />", {"class":"speaker-topic"}).html(obj.topic_title);
// 	var desc = $("<p />", {"class":"speaker-desc"}).html(obj.topic_desc);

// 	var catIcon;
// 	switch(obj.category) {
// 		case "entrepreneurship":
// 		catIcon = $("<i />", {"class": "fa fa-money"}).append($("<span />").html("Entrepreneurship"));
// 		break;

// 		case "coding":
// 		catIcon = $("<i />", {"class": "octicon octicon-terminal"}).append($("<span />").html("Coding"));
// 		break;

// 		case "maker_culture":
// 		catIcon = $("<i />", {"class": "octicon octicon-plug"}).append($("<span />").html("Maker Culture"));
// 		break;

// 		case "iot":
// 		catIcon = $("<i />", {"class": "fa fa-cloud-upload"}).append($("<span />").html("Internet of Things"));
// 		break;

// 		case "other":
// 		catIcon = $("<i />", {"class": "octicon octicon-package"}).append($("<span />").html("Other"));
// 		break;

// 		default:
// 		catIcon = $("<i />", {"class": "octicon octicon-package"}).append($("<span />").html("Other"));
// 	}

// 	desc.append($("<button />", {"class":"btn btn-primary category "+obj.category}).html(catIcon));

// 	participant.append(image);
// 	participant.append(name);
// 	participant.append(title);
// 	participant.append(desc);
// 	return participant;
// }

jQuery(document).ready(function($) {

	// Page loader
	$(".loader-item").delay(500).fadeOut();
	$("#pageloader").delay(1000).fadeOut("slow");

	// Sticky navigation
	$("#navigation").sticky({ topSpacing: 0 });

	// Home Slider
	$('.homeslider').flexslider({
		animation: "fade",
		easing: "linear",
		controlNav: false,
		directionNav: true,
		slideshowSpeed:6000,
	});

	// Stellar.js
	$.stellar();

	// Register
	var frameSrc = "https://register.barcampdallas.org/apply";
	$('#openBtn').click(function(){
		$('#myModal').on('show', function () {
			$('iframe').attr("src",frameSrc);
		});
		$('#myModal').modal({show:true});
	});

	// Add speakers
	var $speakers = $("#speakers-data");
	$(".speaker", $speakers).matchHeight();
	// $.getJSON("http://register.barcampdallas.org/barcamp_register/submissions.json", function(json) {
	//	$.each(json, function(index, val) {
	//		$speakers.append(generateParticipant(val));
	//	});
	//	window.setTimeout($(".speaker", $speakers).matchHeight(),1000);
	// });

});

/* === Smooth scroll === */

(function($) { "use strict";
	$(".page-scroll a[href^='#']").on('click', function(e) {
		e.preventDefault();
		var hash = this.hash;
		$('html, body').stop().animate({
			scrollTop: $(hash).offset().top}, 2000, 'easeOutExpo');
	});
})(jQuery);

$('.navbar-collapse ul li a').click(function(){
	$('.navbar-toggle:visible').click();
});


/* === Scroll to top === */

$(window).scroll(function(){
	if ($(this).scrollTop() > 100) {
		$('.scrollup').fadeIn();
	} else {
		$('.scrollup').fadeOut();
	}
});

$('.scrollup').click(function(){
	$("html, body").animate({ scrollTop: 0 }, 2000);
	return false;
});
