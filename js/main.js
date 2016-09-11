$(document).ready(function() {
    $(".nav > li > a").mouseover(function() {
	    $(".nav-dropdown-content").toggleClass("toggle-nav-dropdown-content");
	});
});