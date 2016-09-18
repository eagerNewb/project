$(document).ready(function() {

	// display the dropdown of the nav
    $(".nav > li > a").mouseover(function() {
	    $(".nav-dropdown-content").toggleClass("toggle-nav-dropdown-content");
	});

	$(".carousel-inner > .active > .row-fluid > .col-md-3").hide();

	$(".thumb-holder-pic").click( function() {
		
		// get the clicked item image src
		var imagesStorage = $(this).attr('src');

		// removing aditional class for the border on click
		$(".thumb-holder-pic").removeClass("thumb-holder-pic-active");

		// removing aditional class for the border on click
		$(this).addClass("thumb-holder-pic-active");

		// changing the src of the background picture on click of the thumbnails
		$(".img-bg").attr('src', imagesStorage);
	});
});