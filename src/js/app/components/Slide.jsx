import React from 'react'

require('./Slide.scss')

export default class Slide {
	render() {
		return (
			<div>
				<h1>{this.props.title}</h1>
				<p>{this.props.content}</p>
			</div>
		)
	}
}
