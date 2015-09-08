import $ from 'jquery'

import download from './downloads/class/jquery-event-exercise'

export default [
	{
		title: 'jQuery Events',
		subtitle: '',
		content: ``
	},
	{
		title: 'jQuery Events',
		subtitle: 'responding to outside input',
		content: `
+ respond to some input without knowing when it will happen
+ respond to unpredicatble browser characteristics
+ in UI, this is mostly user input
+ clicking, scrolling, keyboard input
`
	},
	{
		title: 'important events',
		subtitle: '',
		content: `
+ \`click\`
+ \`scroll\`
+ \`keydown\`, \`keyup\`
`
	},
	{
		title: '.on()',
		subtitle: '',
		animations: [
			() => $('li').on('click', function() {
				console.log('clicked an li')
			})
		],
		content: `
\`\`\`hljs
$('li').on('click', function() {
	console.log('clicked an li')
})
\`\`\`

+ \`.on(event, callback)\` is called on jquery element(s)
+ the function is executed when the element is clicked
+ this is called an event listener
+ \`$('li')\` selects *all* list items
+ each element has the click event listener with callback attached
`
	},
	{
		title: '.on()',
		subtitle: '',
		animations: [
			() => $('li').on('click', function() {
				$(this).animate({
					fontSize: '2em'
				})
			})
		],
		content: `
\`\`\`hljs
$('li').on('click', function() {
	$(this).animate({
		fontSize: '2em'
	})
})
\`\`\`
+ \`this\` is a special variable with complicated rules
+ in the callback, \`this\` will always be the element where the event occured
`
	},
	{
		title: 'jQuery Events',
		subtitle: '',
		content: `
+ <a href="${download}">Exercise</a>
`
	},
	{
		title: '.find()',
		subtitle: '',
		animations: [
			() => {
				$('li').on('click', function() {
					$(this).find('.big').animate({
						fontSize: '1.5em'
					})
				})
			}
		],
		content: `
\`\`\`hljs
$('li').on('click', function() {
	$(this).find('.big').animate({
		fontSize: '1.5em';
	})
})
\`\`\`

+ changes selection to <span class="big">all</span> occurences that <span class="big">match selector</span>
`
	},
	{
		title: '.parent()',
		subtitle: '',
		animations: [
			() => {
				$('li').on('click', function() {
					$(this).parent().animate({
						fontSize: '1.5em'
					})
				})
			}
		],
		content: `
\`\`\`hljs
$('li').on('click', function() {
	$(this).parent().animate({
		fontSize: '1.5em'
	})
})
\`\`\`

+ changes selection to parent of current selection
+ this one changes too
`
	},
	{
		title: '.hasClass()',
		subtitle: '',
		animations: [
			() => {
				console.log($('li').hasClass('bold'))
			}
		],
		content: `
\`\`\`hljs
$('li').hasClass('bold')
\`\`\`

+ returns true if an element has that class, false if not
`
	},
	{
		title: 'event object',
		subtitle: 'key codes',
		animations: [
			() => {
				$(document).on('keyup', function(evt) {
					console.log(evt)
					console.log(evt.keyCode)
				})
				setTimeout(function() {
					$(document).off('keyup')
				}, 10000)
			}
		],
		content: `
\`\`\`hljs
$(document).on('keyup', function(evt) {
	console.log(evt)
	console.log(evt.keyCode)
})
\`\`\`

+ event object contains information about the event
+ for keyboard input, determine keys with keyCode
+ [KeyCode List](https://css-tricks.com/snippets/javascript/javascript-keycodes/)
`
	}
]