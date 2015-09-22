import $ from 'jquery'

import hover from './downloads/hover/hover'
import svgTimeline from './downloads/svg-timeline/svg-timeline'

export default [
	{
		title: 'Velocity JS',
		subtitle: '',
		content: `
+ http://julian.com/research/velocity/
+ works with or without jquery
+ adds method to jquery \`.velocity()\`
+ performs much better than just jquery
`
	},
	{
		title: 'GSAP',
		subtitle: '',
		content: `
+ http://greensock.com/gsap
+ coding style a bit different than jQuery
+ animations are called tweens
+ not completely open-source, requires licensing if selling is involved
`
	},
	{
		title: 'hover',
		subtitle: '',
		animations: [
			() => {
				$('li').on('mouseenter', function() {
					$(this).animate({
						fontSize: '1.5em',
						color: '#f33'
					})
				})
				$('li').on('mouseleave', function() {
					$(this).animate({
						fontSize: '1em',
						color: '#333'
					})
				})
			}
		],
		content: `
\`\`\`hljs
$('li').on('mouseenter', function() {
	$(this).animate({ fontSize: '1.5em', color: '#f33' })
})
$('li').on('mouseleave', function() {
	$(this).animate({ fontSize: '1em', color: '#333' })
})
\`\`\`

+ \`mouseenter\` & \`mouseleave\`
+ can continue to animate beyond hovers
+ elements with different beginning and ending font sizes need separate handlers
+ color animation doesn't work with jquery ([velocity allows it](http://julian.com/research/velocity/#colors))
`
	},
	{
		title: 'hover',
		subtitle: 'css transition',
		content: `
\`\`\`hljs
css-highlight
li {
	transition: font-size .5s ease,
	            color .5s ease;
}
li:hover {
	font-size: 1.5em;
}
\`\`\`

+ transition is set on the element, not \`:hover\` pseudoclass, which only contains change
<li id="hover-example">better than jquery -- animation reverses immediately on mouse leaving & color works</li>
<li id="hover-example">font size always returns to default, only different target font sizes need separate rules</li>
`
	},
	{
		title: 'hover',
		subtitle: 'fade div',
		content: `
\`\`\`hljs
css-highlight
li > div {
	opacity: 0;
	transition: opacity .5s ease;
}
li:hover > div {
	opacity: 1;
}
\`\`\`

<ul><li id="hover-example2">child div will fade in/out when li is hovered (or use sibling selector) <div>Heyyy</div></li></ul>
`
	},
	{
		title: 'hover',
		subtitle: 'fade div with better control',
		content: `
+ <a href="${hover}">Download</a>
+ animation is handled with css transitions
+ jquery adds and removes class that change opacity
+ not limited by css sibling and child selectors
`
	},
	{
		title: 'scroll events',
		subtitle: '',
		animations: [
			() => $('.scroll').on('scroll', function(evt) {
				console.log(evt)
				$('.scroll').off('scroll')
				$('.scroll').on('scroll', function() {
					console.log('scrolling')
				})
			})
		],
		content: `
\`\`\`hljs
$(window).on('scroll', function(evt) {
	console.log(evt)
})
\`\`\`

<div class="scroll" style="height: 10em; overflow: scroll;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam lorem mi, porttitor vitae malesuada bibendum, ullamcorper eu lorem. Donec dictum turpis vitae dui posuere malesuada. Aenean mollis posuere est sit amet convallis. Vestibulum malesuada nunc eget dolor ornare porttitor. Aliquam erat volutpat. Duis consequat ligula a erat suscipit, sit amet rutrum metus feugiat. Sed ut aliquet nunc. Duis placerat ultrices feugiat. Morbi eu aliquam lacus, et malesuada velit. Aliquam a purus nec massa scelerisque rutrum nec vitae ligula. Ut eget nulla nibh. Praesent bibendum porttitor commodo. Cras enim sapien, mattis at velit in, efficitur maximus sapien.

Aliquam scelerisque sem in velit dapibus, vel tincidunt eros congue. Donec pulvinar pretium enim, at blandit ex tincidunt ac. Nullam in massa felis. Pellentesque in erat felis. Maecenas venenatis scelerisque pharetra. Ut scelerisque sodales enim sed lobortis. Etiam ipsum lorem, dignissim in sapien sed, hendrerit fringilla turpis. Nullam tempus porttitor libero sed iaculis. Aenean vel tempor neque. Quisque aliquam arcu a leo feugiat, ac volutpat mi laoreet. Pellentesque rhoncus orci eu ex vestibulum, eget tincidunt elit vehicula. Aliquam erat volutpat. Sed eu mi lacus. In vulputate, risus nec imperdiet pulvinar, est lorem convallis velit, sed gravida lectus elit auctor nisl.
</div>
`
	},
	{
		title: 'ScrollMagic',
		subtitle: '',
		content: `
+ http://scrollmagic.io/
+ lots of control over scrolling
+ often needs weird css to make the page long enough for scrolling
+ can be used with velocity or gsap
+ velocity only allows timed animations to be triggered via scroll
+ gsap allows animation to progress via scroll position
+ <a href="${svgTimeline}">Download</a>
`
	},
	{
		title: 'ScrollMagic',
		subtitle: 'scripts',
		content: `
\`\`\`hljs
html-highlight

<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/ScrollMagic.min.js"></script>
<!-- get indicators in development -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/debug.addIndicators.min.js"></script>
<!-- when using velocity -->
<script src="https://cdn.jsdelivr.net/velocity/1.2.2/velocity.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.velocity.min.js"></script>
<!-- when using gsap -->
<script src="http://cdnjs.cloudflare.com/ajax/libs/gsap/latest/TweenMax.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.5/plugins/animation.gsap.min.js"></script>
\`\`\`
`
	},
	{
		title: 'ScrollMagic',
		subtitle: 'controller & scene',
		content: `
\`\`\`hljs
var controller = new ScrollMagic.Controller()

var scene = new ScrollMagic.Scene()
\`\`\`

+ object-oriented programming -- this pattern comes up a lot
+ \`new\` keyword creates an object from a blueprint: \`Controller\` and \`Scene\`
`
	},
	{
		title: 'ScrollMagic',
		subtitle: 'trigger velocity animation',
		content: `
\`\`\`hljs
new ScrollMagic.Scene({
		triggerElement: $('.fade-in'),
		offset: $(window).height() / 2
	})
	.setVelocity($('.fade-in'), {opacity: 1}, {duration: 500})
	.addTo(controller)
\`\`\`

+ trigger points are activated at the middle of the page
+ trigger point is top of \`triggerElement\` and \`offset\` moves trigger point's initial position
+ \`setVelocity()\` uses Velocity syntax to create an animation to trigger
+ give the scene to the controller with \`addTo()\`
`
	},
	{
		title: 'draw SVG on scroll',
		subtitle: '',
		content: `
\`\`\`hljs
html-highlight
	<div class="svg-container">
		<svg viewBox="0 0 300 300">
			<path stroke="black" stroke-width="2"
				  d="M 0 2
				     q 300 0, 300 300" />
		</svg>
	</div>
\`\`\`

+ must be an inline svg element in html so each path/line/shape can be accessed
+ vector graphics editors should let you view code
+ viewbox should be "0 0 [width] [height]"
+ [weird responsivizing css](http://thenewcode.com/744/Making-SVG-Responsive)
`
	},
	{
		title: 'draw SVG on scroll',
		subtitle: 'path attributes',
		content: `
\`\`\`hljs
var $path = $('path')
$path.css({
	strokeDasharray: $path[0].getTotalLength(),
	strokeDashoffset: $path[0].getTotalLength()
})
\`\`\`

+ this will make the path disappear
+ stroke-dashoffset will be animated to draw the path
`
	},
	{
		title: 'draw SVG on scroll',
		subtitle: 'setup',
		content: `
\`\`\`hljs
var controller = new ScrollMagic.Controller()

new ScrollMagic.Scene({
	duration: $('svg').height(),
	offset: $('window').height() / -2}
})
\`\`\`

+ no trigger element, trigger automatically set to middle of page
+ \`offset\` moves trigger to top of page
+ \`duration\` when passed to \`ScrollMagic.Scene\` refers to pixels scrolled
`
	},
	{
		title: 'draw SVG on scroll',
		subtitle: 'with gsap',
		content: `
\`\`\`hljs
new ScrollMagic.Scene({duration: $('svg').height(), offset: $('window').height() / -2})
	.setTween(TweenMax.to('path', 1, {
		strokeDashoffset: 0,
		ease: Linear.easeNone
	}))
	.addTo(controller)
\`\`\`

+ \`setTween()\` adds a gsap tween, \`TweenMax.to()\`
+ add to controller
`
	}
]