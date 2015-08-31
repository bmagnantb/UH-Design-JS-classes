import $ from 'jquery'

export default [
	{
		title: 'jQuery Animation',
		subtitle: '',
		content: ``
	},
	{
		title: 'JS Key Points',
		subtitle: 'variables',
		content: `
+ variables are created with \`var\`
+ they point to some value
+ after creating, no need to use \`var\`

\`\`\`hljs
// variable definition with value
var someNumber = 19836
var someObject = { name: 'some object' }

someNumber = 886
\`\`\`
`
	},
	{
		title: 'JS Key Points',
		subtitle: 'using functions',
		content: `
+ functions are invoked with \`()\`

\`\`\`hljs
console.log             // value of function
console.log(3)          // function runs
console.log(someNumber) // use a variable
\`\`\`
`
	},
	{
		title: 'JS Key Points',
		subtitle: 'objects',
		content: `
+ object values are accessed via keys

\`\`\`hljs
var computer = {
	type: 'Mac',
	color: 'silver',
	screen: 13
}

computer.type   // 'Mac'
computer.screen // 13
computer.color  // 'silver'
\`\`\`
`
	},
	{
		title: 'JS Key Points',
		subtitle: 'callbacks',
		content: `
\`\`\`hljs
// setTimeout is a built-in function
setTimeout(function() {
	console.log('this took a second')
}, 1000)
\`\`\`

+ setTimeout takes \`(function, timeInMilliseconds)\` as arguments
+ it runs the function after the time has elapsed
+ the function we pass into \`setTimeout\` is a callback
+ setTimeout decides when the function should be run
`
	},
	{
		title: 'Using JS in Web Pages',
		subtitle: '',
		content: `
+ using JS is similar to including CSS with a \`<link>\` tag

\`\`\`hljs
html-highlight
<head>
	<!-- CSS goes in the head -->
	<link href="style.css">
</head>
<body>
	<div>All the content</div>

	<!-- JS scripts go at the end of the body -->
	<script type="text/javascript" src="script.js"></script>
</body>
\`\`\`
`
	},
	{
		title: 'Using JS in Web Pages',
		subtitle: '<script>',
		content: `
\`\`\`hljs
html-highlight
<script type="text/javascript" src="script.js"></script>
\`\`\`

+ \`<script>\` is usually written with two attributes
+ \`type="text/javascript"\` -- confirms this is javascript
+ \`src="pathToFile.js"\` -- points to the javascript file
+ should be the last tags in the body
`
	},
	{
		title: 'Using JS in Web Pages',
		subtitle: 'let\'s do it',
		content: `
+ <a href="build/downloads/jquery-animation/index.html" download>jQuery Animation Demo HTML</a>
+ <a href="build/downloads/jquery-animation/style.css" download>jQuery Animation Demo CSS</a>
`
	},
	{
		title: 'Using JS in Web Pages',
		subtitle: 'window.onload',
		content: `
\`\`\`hljs
window.onload = function() {
	// we'll put all of our js in this function
}
\`\`\`
+ window is an object that contains a lot of information about the browser
+ window.onload is a function
+ the browser runs this function when html & css is finished loading
+ code goes here to make sure it doesn't run before html & css are loaded
`
	},
	{
		title: 'The DOM',
		subtitle: 'Document Object Model',
		content: `
+ the DOM is the browser's internal representation of what it displays
+ what a browser creates from an html file, includes css styles
+ javascript allows us to modify the DOM

`
	},
	{
		title: 'The DOM',
		subtitle: 'elements',
		content: `
+ DOM elements are what the browser makes out of html elements
+ additional properties that can vary
+ scroll position, browser window width and height, etc
+ DevTools shows you the current DOM, not the original html file
`
	},
	{
		title: 'jQuery',
		subtitle: 'making stuff easy since 2006',
		content: `
+ 65% of top 10 million sites (next most common library used by 13%)
+ created when browsers had very different feature implementations
+ lots of jQuery functionality now standardized, built-in JS
+ many new libraries focus on a part of jQuery and make it better
+ many js developers learn(ed) jQuery in-depth before JS
+ most who don't use it did use it or understand it
`
	},
	{
		title: '$',
		subtitle: 'jquery variable',
		animations: [
			() => {
				var $listItem = $('.slide ul li:last-child')
				var newText = 'the jquery variable must be declared before it can be used</li>'
				$listItem.fadeOut(function() {
					$listItem.html(newText).fadeIn()
				})
			}
		],
		content: `
+ all of jquery lives in the object that \`$\` references
+ the jquery library creates this variable when included in a page
+ the jquery \`<script>\` is written before \`<script>\`s that use jquery
+ why...?
`
	},
	{
		title: '$',
		subtitle: 'selecting DOM elements',
		content: `
+ \`$\` is also a function
+ \`$()\` takes a css selector string as an argument to find DOM elements
+ after selecting, we can alter the element(s) with built-in jQuery functions

\`\`\`hljs
$('div')           // finds all div elements on the page
$('#special-box')  // finds the element with id special-box
\`\`\`
`
	},
	{
		title: '.hide(), .show(), .toggle()',
		subtitle: '',
		animations: [
			() => $('#hide').hide(),
			() => $('#show').show(),
			() => $('#toggle').toggle(),
			() => $('#toggle').toggle(),
			() => $('#toggle').toggle()
		],
		content: `
\`\`\`hljs
$('#hide').hide()
$('#show').show()
$('#toggle').toggle()
\`\`\`

+ \`.hide()\` changes the element's display to none
+ \`.show()\` changes the element's display to the element type's default
+ both very basic, no animation, suddenly appears or disappears
+ \`.toggle()\` shows if hidden, and hide if shown
<li id="hide">let's hide this text</li>
<li id="show" style="display: none">and show this text</li>
<li id="toggle" style="display: none">and toggle this</li>
`
	},
	{
		title: '.css()',
		subtitle: '',
		animations: [
			() => $('.change-css').css({
				color: 'red',
				fontFamily: 'Courier New',
				letterSpacing: '.2em'
			}),
			() => $('#no-change-desc').show(),
			() => $('#no-change-desc span').show()
		],
		content: `
\`\`\`hljs
$('.change-css').css({
	color: 'red',
	fontFamily: 'Courier New',
	letterSpacing: '.1em'
})
\`\`\`

+ \`.css()\` changes the elements css styles
+ it takes an object with style names and their values
+ any values in text should be strings, \`red\` is an undefined variable, use \`'red'\`
+ in JS, styles with dashes <span class="change-css">\`font-family\`</span> become camelCased <span class="change-css">\`fontFamily\`</span>
<li id="no-change-desc" style="display: none">the font didn't change... <span style="display: none">because the original font still has precedence is css</span></li>
`
	},
	{
		title: '.addClass() & .removeClass',
		subtitle: '',
		animations: [
			() => $('li:last-child').addClass('large'),
			() => $('li:last-child').removeClass('red-text bordered')
		],
		content: `
\`\`\`hljs
$('li:last-child').addClass('large')
$('li:last-child').removeClass('red-text bordered')
\`\`\`

+ \`.addClass()\` and \`.removeClass()\` alter an element's css classes
+ take 1 or more classes as arguments in a string
<li class="red-text bordered">Change me</li>
`
	},
	{
		title: '.toggleClass()',
		subtitle: '',
		animations: [
			() => $('li:last-child').toggleClass('selected'),
			() => $('li:last-child').toggleClass('selected'),
			() => $('li:last-child').toggleClass('selected'),
			() => $('li:last-child').toggleClass('selected'),
			() => $('li:last-child').toggleClass('selected')
		],
		content: `
\`\`\`hljs
$('li:last-child').toggleClass('selected')
\`\`\`

+ \`.toggleClass()\` will add the class(es) if not there, and remove if there
<li>Toggle me</li>
`
	},
	{
		title: 'Built-in Animations',
		subtitle: '',
		content: ``
	},
	{
		title: '.fadeIn() & .fadeOut()',
		subtitle: '',
		animations: [
			() => $('#fade').fadeOut(),
			() => $('#fade').fadeIn()
		],
		content: `
\`\`\`hljs
$('#fade').fadeOut()
$('#fade').fadeIn()
\`\`\`
+ \`.fadeIn()\` & \`.fadeOut()\`
<li id="fade">fadeOut also sets display to none, so sometimes layout will jump around</li>
+ this will move up when the item above fades out, and back down when it fades in
`
	},
	{
		title: '.fadeTo()',
		subtitle: '',
		animations: [
			() => $('#fade').fadeTo(500, .5),
			() => $('#fade').fadeTo(100, 0),
			() => $('#fade').fadeTo(2000, .8),
			() => $('#fade').fadeTo(3000, 1)
		],
		content: `
\`\`\`hljs
$('#fade').fadeTo(500, .5)
$('#fade').fadeTo(100, 0)
$('#fade').fadeTo(2000, .8)
$('#fade').fadeTo(3000, 1)
\`\`\`

+ \`.fadeTo(time, opacity)\` fades in or out to a certain opacity
<li id="fade">fade me</li>
+ but doesn't cause layout jumps when fading to 0 opacity
+ if you don't want things to move around, use this for fading
`
	},
	{
		title: '.slideUp(), .slideDown(), .slideToggle()',
		subtitle: '',
		animations: [
			() => $('#slide').slideUp(),
			() => $('#slide').slideDown(),
			() => $('#slide').slideToggle(),
			() => $('#slide').slideToggle(),
			() => $('#slide').slideToggle()
		],
		content: `
\`\`\`hljs
$('#slide').slideUp()
$('#slide').slideDown()
$('#slide').slideToggle()
\`\`\`

+ \`.slideUp()\` hides an element by animating its height to 0
+ \`.slideDown()\` shows an element by animating its height from 0 to full height
+ \`.slideToggle()\` hides via slide if shown, and shows via slide if hidden
<li id="slide">slide me</li>
+ and layout changes look much better this way -- no jumps and no blank spaces
`
	},
	{
		title: '.animate()',
		subtitle: '',
		animations: [
			() => $('li').animate({ paddingLeft: 20 }),
			() => $('li:last-child').animate({ paddingTop: 30 }, 2000)
		],
		content: `
\`\`\`hljs
$('li').animate({ paddingLeft: 20 })
$('li:last-child').animate({ paddingTop: 30 }, 2000)
\`\`\`

+ \`.animate(cssProperties)\` animates any numeric css properties
+ remember to camelCase properties if needed
+ can also take an animation duration \`.animate(cssProperties, duration)\`
`
	},
	{
		title: 'combining methods',
		subtitle: '',
		animations: [
			() => $('li:first-child').animate({ paddingLeft: 20 }),
			() => $('li:first-child').animate({ paddingLeft: 0 }),
			() => {
				var $firstListItem = $('li:first-child')
				$firstListItem.css({ position: 'relative' })
				$firstListItem.animate({ left: 20 })
			}
		],
		content: `
\`\`\`hljs
$('li:first-child').animate({ paddingLeft: 20 })

var $firstListItem = $('li:first-child')
$firstListItem.css({ position: relative })
$firstListItem.animate({ left: 20 })
\`\`\`

+ slide left with padding makes the containing div grow and the bullet doesn't move
+ if we set position relative and set left, div doesn't grow and bullet moves
`
	},
// 	{
// 		title: 'jQuery Animation',
// 		subtitle: 'assignments',
// 		content: `
// `
// 	}
]