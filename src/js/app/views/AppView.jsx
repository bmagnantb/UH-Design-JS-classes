import React from 'react'
import { RouteHandler } from 'react-router'
	
require('../../../scss/style.scss')
	
export default class AppView {
	render() {
		return (
			<div>
				<header>
					<h1>UH Design - JS & jQuery</h1>
				</header>

				<RouteHandler />
			</div>
		)
	}
}