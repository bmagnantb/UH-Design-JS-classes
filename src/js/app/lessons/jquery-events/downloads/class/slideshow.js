function makeSlideshow() {
	var $slides = $('.slides > div:not(.arrow)')

	$slides.each(function(ind, slide) {
		$(slide).css({
			left: (ind * 100) + '%'
		})
	})

	function nextSlide() {
		var activeIndex = getActiveIndex()
		if (activeIndex === $slides.length - 1) return
		else $slides.animate({
			left: '-=100%'
		})
	}

	function prevSlide() {
		var activeIndex = getActiveIndex()
		if (activeIndex === 0) return
		else $slides.animate({
			left: '+=100%'
		})
	}

	function getActiveIndex() {
		return Array.prototype.reduce.call($slides, function(acc, slide, index) {
			if (acc.slide && $(acc.slide).css('left') === '0px') return acc
			else return { slide: slide, index: index }
		}, {slide: null, index: null}).index
	}

	return {
		slides: $slides,
		nextSlide: nextSlide,
		prevSlide: prevSlide
	}
}