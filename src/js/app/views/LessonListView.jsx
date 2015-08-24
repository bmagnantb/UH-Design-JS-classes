import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { makeLessonList } from '../../utils'

import './LessonListView.scss'

class LessonListView {
	render() {
		var lessons = this.props.lessons
			.map(({ key, lesson }) => {
				var route = (lesson.slides && lesson.assignments)
					? `/lesson/${key}`
					: lesson.slides ? `/slides/${key}` : `/assignments/${key}`
				return (
					<li key={`lessonlist-lesson-${key}`}>
						<h3><Link to={route}>{lesson.name}</Link></h3>
					</li>
				)
			})

		return (
			<div className="lessonlist-lesson-list">
				<h1>Lessons</h1>
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
