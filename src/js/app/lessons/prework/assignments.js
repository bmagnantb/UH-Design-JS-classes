import downloads from './downloads/prework'

export default [
	{
		title: 'Make sure Brackets and Chrome are installed',
		route: false
	},
	{
		title: 'HTML/CSS Review',
		route: 'html-css-review',
		sidebarWidth: 50,
		content: `
1. Download this <a href="${downloads}" download>folder</a>
2. Style the html to look like the image over there.

<br>
+ <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element" target="_blank">HTML Reference</a>
+ <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Reference" target="_blank">CSS Reference</a>
`,
	sidebar: `
![Styled assignment](build/images/styled-assignment.png)
`
	},
	{
		title: 'Read JS for Cats',
		route: 'http://jsforcats.com',
		listViewNote: 'Spend an hour or two on this. Don\'t worry about completing it, some exposure for day 1 will help lots.'
	}
]