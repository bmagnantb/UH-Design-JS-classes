import React from 'react'

import { convertMarkdown } from '../../utils'

import './Slide.scss'

export default class Slide {
	render() {
		return (
			<div className="slide">
				<div className="slide-titles">
					<h1>{this.props.title}</h1>
					<h3>{this.props.subtitle}</h3>
				</div>
				<div className="slide-content"
					dangerouslySetInnerHTML={convertMarkdown(this.props.content)} />
			</div>
		)
	}
}
