$('.fade-in').css({
	opacity: 0
})

// var path = $('path')
// path.css({
// 	strokeDasharray: path[0].getTotalLength(),
// 	strokeDashoffset: path[0].getTotalLength()
// })

window.onload = function() {

	var controller = new ScrollMagic.Controller()

	$('.fade-in').each(function(index, div) {
		new ScrollMagic.Scene({triggerElement: div})
			.setVelocity(div, {opacity: 1}, {duration: 400})
			.addIndicators()
			.addTo(controller)
	})

	// new ScrollMagic.Scene({duration: $('svg').height(), offset: $(window).height() / -2})
	// 	.setTween(TweenMax.to('path', 1, {strokeDashoffset: 0, ease: Linear.easeNone}))
	// 	.addIndicators()
	// 	.addTo(controller)
}