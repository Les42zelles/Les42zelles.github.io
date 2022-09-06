var slides = $("#slides");
var navbar = $("#navbar");
var opaque_pos = slides.position().top + slides.height() - navbar.height();

$(window).on("scroll", (evt) => {
	if ($(window).scrollTop() > opaque_pos)
		navbar.addClass('opaque');
	else
		navbar.removeClass('opaque');
});