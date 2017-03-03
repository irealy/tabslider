// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js

sayHello();

$(document).ready(function() {
	$('[data-slider="1"]').slick({
		slidesToShow: 2,
		arrow: true
	});

	$('[data-slider="2"]').slick({
		slidesToShow: 2,
		arrow: true
	});




	function tabs() {
		$('.tab__btn').on('click', function() {
			var slideId = $(this).attr('data-tab')
			
			$('[data-slider]').hide();

			$('[data-slider="' + slideId + '"').show().slick('reinit');


			
		})
	}

	tabs();
})
