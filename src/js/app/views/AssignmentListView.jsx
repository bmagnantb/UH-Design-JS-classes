import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { getCamelCaseLessonName, getHyphenatedLessonName, makeLessonList } from '../../utils'

import './AssignmentListView.scss'

class AssignmentListView {
	render() {
		if (this.props.lessonName) return this.makeSingleLessonList()
		return this.makeAllLessonsList()
	}

	makeAllLessonsList() {
		var lessons = this.props.lessons
			.map(({ key, lesson }) => {
				var routeName = getHyphenatedLessonName(key)
				return (
					<li key={`assignments-lesson-${routeName}`}>
						<h3><Link to={`/assignments/${routeName}`}>{lesson.name}</Link></h3>
							{this.makeAssignmentsList(lesson.assignments, routeName)}
					</li>
				)
			})

		return (
			<div>
				<h2>Lesson Assignments</h2>
				<ul className="lessons-list">
					{lessons}
				</ul>
			</div>
		)
	}

	makeSingleLessonList() {
		return (
			<div>
				<h2>{this.props.lessonName} Assignments</h2>
					{this.makeAssignmentsList(this.props.assignments, this.props.params.name)}
			</div>
		)
	}

	makeAssignmentsList(assignments, routeName) {
		return (
			<ul className="assignments-list">
				{assignments.map(({ route, title, listViewNote }) => {
					return (
						<li key={`assignments-list-${route}`}>
							<h3>
							{!route
									? title
									: route.indexOf('http') !== -1
										? <a href={route} target="_blank">{title}</a>
										: <Link to={`/assignments/${routeName}/${route}`}>{title}</Link>}
							</h3>
							<p>{listViewNote}</p>
						</li>
					)
				})}
			</ul>
		)
	}
}

export default connect(select)(AssignmentListView)

function select(state, props) {
	if (props.params.name) {
		var name = getCamelCaseLessonName(props.params.name)
		return {
			lessonName: state[name].name,
			assignments: state[name].assignments || {}
		}
	}
	return { lessons: makeLessonList(state) }
}
