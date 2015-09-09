import { Link } from 'react-router'
import download from './downloads/assignment/jquery-events-assignment'

export default [
	{
		title: 'Tabs & Space Invaders',
		route: 'events',
		sidebar: '',
		sidebarWidth: 30,
		content: `
1. <a href="${download}" download>Download</a>

2. Take a look at the index.html. There is a set of tabs and a canvas element.

3. Make the tabs work with click handlers -- <a href="http://bmagnantb.github.io/uh-design-js/#/slides/jqueryAnimation/17" target="_blank">.addClass() and .removeClass()</a> will be helpful here.

4. The included space-invaders.js file creates a function called \`spaceInvaders\`. Invoke it in your js file. It starts a space-invaders-ish game in the canvas and returns an object with several functions to be called in event handlers.
	+ when left and right arrows are pressed or held down, call \`leftDown()\` and \`rightDown()\`
	+ when space is pressed or held down, call \`shoot()\`
	+ when the keys are released, call \`leftUp()\`, \`rightUp()\`, and \`stopShoot()\`
`
	}
]