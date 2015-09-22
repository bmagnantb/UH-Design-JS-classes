window.onload = function() {
	$('.hover-trigger').each(function(index, trigger) {
		var onHover = $('.on-hover')[index]

		$(trigger).on('mouseenter', function() {
			$(onHover).addClass('show')
		})

		$(trigger).on('mouseleave', function() {
			$(onHover).removeClass('show')
		})
	})
}