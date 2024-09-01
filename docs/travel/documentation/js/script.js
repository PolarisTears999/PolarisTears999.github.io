document.addEventListener('DOMContentLoaded', () => {

	$('.sidebar li').on('click', function (event) {
	    var hrefValue = $(this).find('> a').attr('href');
		var hasHash = hrefValue && hrefValue.indexOf('#') !== -1;
	    var submenu = $(this).find('> .sub-menu');

	    if(submenu.hasClass('is-active')) {
			submenu.removeClass('is-active');
			submenu.slideUp();
		}
		else {
			submenu.addClass('is-active');
			submenu.slideDown();
		}

		$('.sidebar li a').removeClass('active');
		$(this).find('> a').addClass('active');

		if(hasHash) {
			event.preventDefault();
			var anchor = hrefValue.slice(hrefValue.indexOf('#') + 1);
			$('html, body').animate({
				scrollTop: $('#' + anchor).offset().top
			}, {
				duration: 700,
			});
		}
	   
	    return false;
	});

	// $('.anchor-off').on('click', function(e) {
	// 	e.preventDefault();
	// });

	$(window).scroll(function() {
		var scrollPosition = $(window).scrollTop();

		$('.step-block').each(function() {
		var currentId = $(this).attr('id');
		var offsetTop = $(this).offset().top - 100; // Adjust offset as needed

		if (scrollPosition >= offsetTop) {
			// Remove 'active' class from all sidebar items
			$('.sidebar li a').removeClass('active');

			// Add 'active' class to the corresponding sidebar item
			$('.sidebar a[href="#' + currentId + '"]').addClass('active');
		}
		});
	});

	$('.magnific-image').magnificPopup({
		type: 'image',
		callbacks: {
			beforeOpen: function() {
				this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
				this.st.mainClass = this.st.el.attr('data-effect');
			}
		},
	});

})