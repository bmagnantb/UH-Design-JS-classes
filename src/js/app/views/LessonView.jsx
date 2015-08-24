import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { getHyphenatedLessonName } from '../../utils'

import './LessonView.scss'

class LessonView {
	render() {
		var routeName = getHyphenatedLessonName(this.props.params.name)

		return (
			<div>
				<h1>{this.props.lesson.name}</h1>
				{this.props.lesson.assignments && this.props.lesson.assignments.length
					? <h3><Link to={`/assignments/${routeName}`}>Assignments</Link></h3>
					: null}
				{this.props.lesson.slides && this.props.lesson.slides.length
					? <h3><Link to={`/slides/${routeName}`}>Slides</Link></h3>
					: null}
				{this.props.lesson.outline
					? makeOutline(this.props.lesson.outline, routeName)
					: null}
			</div>
		)
	}
}

export default connect(select)(LessonView)

function select(state, props) {
	return { lesson: state[props.params.name] }
}

function makeOutline(outline, routeName) {
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
