import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import {
	getHyphenatedLessonName,
	getCamelCaseLessonName,
	lessonHasAssignments,
	lessonHasSlides
} from '../../utils'

import './LessonView.scss'

class LessonView {
	render() {
		var { lesson } = this.props
		var routeName = this.props.params.name
		var assignmentNum = lessonHasAssignments({lesson})

		return (
			<div>
				<h2>{lesson.name}</h2>
				{!assignmentNum
					? null
					: assignmentNum > 1
						? <h3><Link to={`/assignments/${routeName}`}>Assignments</Link></h3>
						: <h3><Link to={`/assignments/${routeName}/${lesson.assignments[0].route}`}>Assignment</Link></h3>}
				{lessonHasSlides({lesson})
					? <h3><Link to={`/slides/${routeName}`}>Slides</Link></h3>
					: null}
				{this.props.lesson.outline
					? makeOutline(lesson.outline, routeName)
					: null}
			</div>
		)
	}
}

export default connect(select)(LessonView)

function select(state, props) {
	return { lesson: state[getCamelCaseLessonName(props.params.name)] }
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
