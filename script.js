$(document).ready(function(){
	// fades in when the page is loaded
	$('.about').fadeIn(5000);
	$('#skills').fadeIn(5000);
	$('#projects').fadeIn(5000);
	$('#contact').fadeIn(5000);

	// This is the code for the fixed mobile nav bar. 
	var $mobileNavTrigger = $(".mobile-nav-bar"),
	$targetMobileNav = $(".mobile-nav"),
	showMobileNavClass = "show-mobile-nav";

	$mobileNavTrigger.click(function(){
		$targetMobileNav.toggleClass(showMobileNavClass);
	});

	// This is the code to enable smooth scrolling when nav links are clicked.
	$(".skill-button").click(function() {
		$('html, body').animate({
			scrollTop: $("#skills").offset().top
		}, 2000);
	});
	$(".project-button").click(function() {
		$('html, body').animate({
			scrollTop: $("#projects").offset().top
		}, 2000);
	});
	$(".contact-button").click(function() {
		$('html, body').animate({
			scrollTop: $("#contact").offset().top
		}, 2000);
	});

	// This is the code to add classes when a specific scroll position is reached
	$(window).scroll(function() {
		// Scroll effects for the about section at the top of page
		if ($(document).scrollTop() > 0 && $(document).scrollTop() < ($(".html5").offset().top)) {
			$(".about-div").addClass("about-div-scroll");
		}else{
			$(".about-div").removeClass("about-div-scroll");
		} 

		// Scroll Effects for each skill section
		if ($(document).scrollTop() > ($(".html5").offset().top-165) && $(document).scrollTop() < $(".responsive").offset().top-165) {
			$(".html5").addClass("skill-scroll");
			$(".html5 .html-pic").addClass("html-pic-scroll");
		}else{
			$(".html5").removeClass("skill-scroll");
			$(".html5 .html-pic").removeClass("html-pic-scroll");
		}
		if ($(document).scrollTop() > ($(".responsive").offset().top-165) && $(document).scrollTop() < ($(".javascript").offset().top)-165) {
			$(".responsive").addClass("skill-scroll");
			$(".responsive .skill-pic").addClass("pic-scroll");
		}else{
			$(".responsive").removeClass("skill-scroll");
			$(".responsive .skill-pic").removeClass("pic-scroll");
		}
		if ($(document).scrollTop() > ($(".javascript").offset().top-165) && $(document).scrollTop() < ($("#projects").offset().top)-165) {
			$(".javascript").addClass("skill-scroll");
			$(".javascript .skill-pic").addClass("pic-scroll");
		}else{
			$(".javascript").removeClass("skill-scroll");
			$(".javascript .skill-pic").removeClass("pic-scroll");
		}

		// Scroll effects for the project section.
		
		if ($(document).scrollTop() > ($(".p1").offset().top-165) && $(document).scrollTop() < ($(".p2").offset().top)-165) {
			$(".p1 .project-pic").addClass("project-pic-scroll");
			
		}else{
			$(".p1 .project-pic").removeClass("project-pic-scroll");
		}

		if ($(document).scrollTop() > ($(".p2").offset().top-165) && $(document).scrollTop() < ($(".p3").offset().top)-165) {
			$(".p2 .project-pic").addClass("project-pic-scroll");
		}else{
			$(".p2 .project-pic").removeClass("project-pic-scroll");
		}

		if ($(document).scrollTop() > ($(".p3").offset().top-165) && $(document).scrollTop() < ($(".p4").offset().top)-165) {
			$(".p3 .project-pic").addClass("project-pic-scroll");
			
		}else{
			$(".p3 .project-pic").removeClass("project-pic-scroll");
			
		}

		if ($(document).scrollTop() > ($(".p4").offset().top-165) && $(document).scrollTop() < ($(".p5").offset().top)-165) {
			$(".p4 .project-pic").addClass("project-pic-scroll");
			
		}else{
			$(".p4 .project-pic").removeClass("project-pic-scroll");
			
		}

		if ($(document).scrollTop() > ($(".p5").offset().top-165) && $(document).scrollTop() < ($(".p6").offset().top)-165) {
			$(".p5 .project-pic").addClass("project-pic-scroll");
			
		}else{
			$(".p5 .project-pic").removeClass("project-pic-scroll");
		}
		if ($(document).scrollTop() > ($(".p6").offset().top-165) && $(document).scrollTop() < ($(".p7").offset().top)-165) {
			$(".p6 .project-pic").addClass("project-pic-scroll");
			
		}else{
			$(".p6 .project-pic").removeClass("project-pic-scroll");
		}

		if ($(document).scrollTop() > ($(".p7").offset().top-165) && $(document).scrollTop() < ($("footer").offset().top)-165) {
			$(".p7 .project-pic").addClass("project-pic-scroll");
		}else{
			$(".p7 .project-pic").removeClass("project-pic-scroll");
		}

	});



});