import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import {
	getHyphenatedLessonName,
	lessonHasAssignments,
	lessonHasSlides,
	makeLessonList
} from '../../utils'

import './LessonListView.scss'

class LessonListView {
	render() {
		var lessons = this.props.lessons
			.filter(lesson => lessonHasAssignments(lesson) || lessonHasSlides(lesson))
			.map(makeMarkup)

		return (
			<div className="lessonlist-lesson-list">
				<h2>Lessons</h2>
				<ol>
					{lessons}
				</ol>
			</div>
		)
	}
}

export default connect(select)(LessonListView)

function select(state, props) {
	return { lessons: makeLessonList(state) }
}

function makeMarkup({ key, lesson }) {
	var route
	var routeKey = getHyphenatedLessonName(key)
	var hasAssignments = lessonHasAssignments({lesson})
	var hasSlides = lessonHasSlides({lesson})
	if (hasAssignments && hasSlides) route = `/lesson/${routeKey}`
	else if (hasAssignments) route = `/assignments/${routeKey}`
	else if (hasSlides) route = `/slides/${routeKey}`

	return (
		<li key={`lessonlist-lesson-${key}`}>
			<h3><Link to={route}>{lesson.name}</Link></h3>
		</li>
	)
}
