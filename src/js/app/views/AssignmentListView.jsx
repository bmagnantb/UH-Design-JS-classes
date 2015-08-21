import React from 'react'
import { connect } from 'react-redux'

import { getCamelCaseLessonName } from '../../utils'

import './AssignmentListView.scss'

class AssignmentListView {
	render() {
		console.log(this.props.assignments)
		return (
			<div>
				<h2>Assignments</h2>
				<ul>
					{this.props.assignments.map(assignment => <li>{assignment.title}</li>)}
				</ul>
			</div>
		)
	}
}

export default connect((state, props) => {
	var name = getCamelCaseLessonName(props.params.name)
	return { assignments: state[name].assignments || {} }
})(AssignmentListView)
