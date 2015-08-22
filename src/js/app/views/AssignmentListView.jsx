import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { getCamelCaseLessonName, getHyphenatedLessonName } from '../../utils'

import './AssignmentListView.scss'

class AssignmentListView {
	render() {
		if (this.props.lessonName) return this.makeSingleLessonList()
		return this.makeAllLessonsList()
	}

	makeAllLessonsList() {
		var lessons = []
		for (var key in this.props.lessons) {
			lessons.push({ key, lesson: this.props.lessons[key] })
		}

		lessons = lessons.sort((obj1, obj2) => obj1.lesson.date - obj2.lesson.date).map(({ key, lesson }) => {
				return (
					<li>
						<h3>{lesson.name}</h3>
							{this.makeAssignmentsList(lesson.assignments, getHyphenatedLessonName(key))}
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
				{assignments.map(assignment => {
					return (
						<li>
							<h3>
							{!assignment.route
									? assignment.title
									: assignment.route.indexOf('http') !== -1
										? <a href={assignment.route} target="_blank">{assignment.title}</a>
										: <Link to={`/assignments/${routeName}/${assignment.route}`}>{assignment.title}</Link>}
							</h3>
							<p>{assignment.listViewNote}</p>
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
	return { lessons: state }
}
