import React from 'react'
import { RouteHandler, Link } from 'react-router'

import 'normalize.css'
import './App.scss'

export default class App {
	render() {
		var isntSlideshow = this.props.path.indexOf('/slides/') === -1 || !this.props.params.name
		var header
		var nav
		if (isntSlideshow) {
			header = (
				<header>
					<h1><Link to="/">Javascript & jQuery - UH Design</Link></h1>
					<nav>
						<ul>
							<li><Link to="/">Lessons</Link></li>
							<li><Link to="/assignments">Assignments</Link></li>
							<li><Link to="/slides">Slides</Link></li>
						</ul>
					</nav>
				</header>
			)
		}

		return (
			<div>
				{header}
				<RouteHandler />
			</div>
		)
	}
}