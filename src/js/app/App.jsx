import React from 'react'
import { RouteHandler, Link } from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from '../app/reducers'

import 'normalize.css'
import './App.scss'

export default class App {
	render() {
		var isSlideshow = this.props.path.indexOf('/slides/') === -1 || !this.props.params.name
		var header
		var nav
		if (isSlideshow) {
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
				<Provider store={createStore(reducer)}>
					{() => <RouteHandler />}
				</Provider>
			</div>
		)
	}
}