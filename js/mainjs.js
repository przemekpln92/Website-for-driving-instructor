$(document).ready(function(){
		/* menu mobilne */
		$('#main-menu').slicknav({
			prependTo: '#attach-mobile-menu',
			label: ''
		});
		/* Licznik */
		$('.timer').countTo();	
		/* viewport */
		$('*[data-animate]').addClass('hide').each(function(){
			$(this).viewportChecker({
				classToAdd: 'show animated ' + $(this).data('animate'),
				classToRemove: 'hide',
				offset: 200
			});
		});
		
		
	});
	$('#main-container').imagesLoaded(function(){
		/* glowny slider */
		$('#main-slider').bxSlider({
			mode: 'fade',
			auto: true,
			controls: false,
			pager: false
		});
		// Slider opinie
		$('#opinions-slider').bxSlider({
			mode: 'vertical',
			auto: true,
			controls: true,
			pager: false,
            speed: 5000
		});
	
	});