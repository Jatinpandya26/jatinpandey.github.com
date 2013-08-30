$(document).ready(function() {

	$("#myCarousel").carousel({
		interval: false
	});

   $("#contactLink").click(function() {
        console.log("Contact click detected!");
        $("#navContact").trigger('click');
    });

	$(".nav li").click(function() {
		$(".nav li").removeClass("active");
		$(this).addClass("active");
	});

	$("#navWorks").click(function() {
		$("#myCarousel").carousel(0);
	});

	$("#navBlog").click(function() {
		$("#myCarousel").carousel(1);
	});

	$("#navAbout").click(function() {
		$("#myCarousel").carousel(2);
	});

	$("#navContact").click(function() {
		$("#myCarousel").carousel(3);
	});

	$("#blog img").mouseenter(function() {
		$(this).css("opacity", "1");
	}).mouseleave(function() {
		$(this).css("opacity", "0.82");
	});

	$("#homeSubtext").mouseenter(function() {
		$(this).css("opacity", "1");
	}).mouseleave(function() {
		$(this).css("opacity", "0.8");
	});

});

var endDimming = setInterval(dimThenBright, 2000);

function dimThenBright() {
	$(".dimMe").fadeOut(2500);
	$(".dimMe").fadeIn(1500);

}	