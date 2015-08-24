import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { convertMarkdown, getCamelCaseLessonName } from '../../utils'

import './AssignmentView.scss'

class AssignmentView {
	render() {
		var route = this.props.assignmentTotal > 1
			? `/assignments/${this.props.params.name}`
			: `/lesson/${this.props.params.name}`

		return (
			<div className="assignment">
				<h3><Link to={route}>{this.props.lessonName}</Link></h3>
				<h2>{this.props.assignment.title}</h2>
				<div dangerouslySetInnerHTML={convertMarkdown(this.props.assignment.content)} />
			</div>
		)
	}
}

export default connect(select)(AssignmentView)

function select(state, props) {
	var name = getCamelCaseLessonName(props.params.name)
	return {
		lessonName: state[name].name,
		assignmentTotal: state[name].assignments.length,
		assignment: state[name].assignments.filter(assignment => assignment.route === props.params.assignment)[0]
	}
}