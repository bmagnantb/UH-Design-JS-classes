import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { getCamelCaseLessonName } from '../../utils'

import './AssignmentView.scss'

class AssignmentView {
	render() {
		return (
			<div>
				<h3><Link to={`/assignments/${this.props.params.name}`}>Return to {this.props.lessonName}</Link></h3>
				<h2>{this.props.assignment.title}</h2>
				<p>{this.props.assignment.content}</p>
			</div>
		)
	}
}

export default connect((state, props) => {
	var name = getCamelCaseLessonName(props.params.name)
	return {
		lessonName: state[name].name,
		assignment: state[name].assignments.filter(assignment => assignment.route === props.params.assignment)[0]
	}
})(AssignmentView)
