import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { convertMarkdown, getHyphenatedLessonName } from '../../utils'

import './LessonView.scss'

class LessonView {
	render() {
		var routeName = getHyphenatedLessonName(this.props.params.name)

		return (
			<div>
				<h1>{this.props.lesson.name}</h1>
				{this.props.lesson.slides
					? <h3><Link to={`/slides/${routeName}`}>Slides</Link></h3>
					: null}
				<h3><Link to={`/assignments/${routeName}`}>Assignments</Link></h3>
				<h3>Outline:</h3>
				{this.props.lesson.outline
					? <div dangerouslySetInnerHTML={convertMarkdown(this.props.lesson.outline)} />
					: null}
			</div>
		)
	}
}

export default connect(select)(LessonView)

function select(state, props) {
	return { lesson: state[props.params.name] }
}
