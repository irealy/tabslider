// example of simple includes for js
//=include lib/sayHello.js
//=include lib/jquery.min.js
//=include lib/slick.min.js
//=include lib/svgxuse.min.js

sayHello();

$(document).ready(function() {
	$('[data-slider="1"]').slick({
		slidesToShow: 2
	});

	$('[data-slider="2"]').slick({
		slidesToShow: 2
	});

	$('[data-slider="3"]').slick({
		slidesToShow: 2
	});


	$('.tab__btn').on('click', tabs);

	$('.slider__item-more').on('click', modal);



});


function tabs() {
	var slideId = $(this).attr('data-tab')
	$('[data-slider]').hide();
	$('[data-slider="' + slideId + '"').show().slick('setPosition');
}

function modal() {
	var $this = $(this);
	var id = $this.closest('.slider').data('slider');

	$('.content').append('<div class="modal"/>');

	$('.modal').append('<div class="modal-slider"/>')
			   .append('<div class="overlay"/>');
			   
	$('.modal-slider').slick({
		fade: true,
		slide: '.slider__item'
	});
	

	// $('.modal-slider').slick();

	// $('[data-slider="' + id +'"]').find('.slider__item').not('.slick-cloned').each(function(i) {
	// 	var $this = $(this);
	// 	var image = $this.find('.slider__item-image').attr('style');
	// 	var title = $this.find('.slider__item-title').text();
	// 	var text = $this.find('p').text();

	// 	$('.modal-slider').append('<div class="modal-item"/>');
	// 	$('.modal-item').append(image).append(title).append(text);

	// });


	$('.overlay').on('click', function() {
		$(this).remove();
		$('.modal').remove();
	})

}
