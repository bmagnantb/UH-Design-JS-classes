import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { makeLessonList } from '../../utils'

import './LessonListView.scss'

class LessonListView {
	render() {
		var lessons = this.props.lessons
			.map(({ key, lesson }) => {
				console.log(lesson)
				return (
					<li>
						<h3><Link to={`/lesson/${key}`}>{lesson.name}</Link></h3>
						<ul>
							{lesson.slides ? <li><Link to={`/slides/${key}`}>Slides</Link></li> : null}
							<li><Link to={`/assignments/${key}`}>Assignments</Link></li>
						</ul>
					</li>
				)
			})

		return (
			<div className="lesson-list">
				<h1>Lessons</h1>
				<ul>
					{lessons}
				</ul>
			</div>
		)
	}
}

export default connect(select)(LessonListView)

function select(state, props) {
	return { lessons: makeLessonList(state) }
}
