// Preloader js
$(window).on('load', function () {
	$('.preloader').addClass('d-none');
});

(function($) {
	'use strict';

	//slider
	$('.slider').not('.slick-initialized').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		dots: true,
		arrows: false
	});


  $('#contact-form').on('submit', function(event) {
    event.preventDefault();
    let values = {};
    $('#contact-form :input').each(function() {
      values[this.name] = $(this).val();
    });

    fetch('https://app.cartfull-shopper.com/contacts', {
      method: 'POST',
      body: JSON.stringify({
        name: values['name'],
        email: values['mail'],
        message: values['message'],
      }),
      headers: { 'Content-Type': 'application/json' },
    }).then(function(_response) {
      $('#contact-form')[0].reset();
      $('#thank-you').removeClass('d-none');
    });

  });

})(jQuery);
