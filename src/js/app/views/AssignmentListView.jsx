import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { getCamelCaseLessonName } from '../../utils'

import './AssignmentListView.scss'

class AssignmentListView {
	render() {
		var routeName = this.props.params.name
		var assignments = this.props.assignments.map(assignment => {
			return (
				<li>
					{assignment.route
						? assignment.route.indexOf('http') !== -1
					 		? <a href={assignment.route} target="_blank">{assignment.title}</a>
							: <Link to={`/assignments/${routeName}/${assignment.route}`}>{assignment.title}</Link>
						: assignment.title}
				</li>
			)
		})
		
		return (
			<div>
				<h2>{this.props.lessonName} Assignments</h2>
				<ul>
					{assignments}
				</ul>
			</div>
		)
	}
}

export default connect((state, props) => {
	var name = getCamelCaseLessonName(props.params.name)
	return {
		lessonName: state[name].name,
		assignments: state[name].assignments || {}
	}
})(AssignmentListView)
