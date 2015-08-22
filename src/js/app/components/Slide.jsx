import React from 'react'
import marked from 'marked'
import highlight from 'highlight.js'

import './Slide.scss'
import 'highlight.js/styles/agate.css'

marked.setOptions({
	gfm: true,
	highlight: code => highlight.highlight('javascript', code).value,
	langPrefix: ''
})

export default class Slide {
	render() {
		return (
			<div className="slide">
				<div className="slide-titles">
					<h1>{this.props.title}</h1>
					<h3>{this.props.subtitle}</h3>
				</div>
				<div className="slide-content"
					dangerouslySetInnerHTML={this.makeContent(this.props.content)} />
			</div>
		)
	}

	makeContent(content) {
		return {__html: marked(content)}
	}
}
