import React from 'react'
import { Link } from 'react-router'

export default function makeOutline(outline, routeName) {
	var items = outline.map(({text, slideNum}) => {
		return (
			<li key={`outline-routeName-${slideNum}`}>
				<Link to={`/slides/${routeName}/${slideNum}`}>{text}</Link>
			</li>
		)
	})

	return (
		<ul>
			{items}
		</ul>
	)
}
