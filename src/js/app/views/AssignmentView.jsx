import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { convertMarkdown, getCamelCaseLessonName } from '../../utils'

import './AssignmentView.scss'

class AssignmentView {
	render() {
		var { title, content, sidebar, sidebarWidth } = this.props.assignment
		var hasMultipleAssignments = this.props.assignmentTotal > 1 ? true : false
		var linkRoute = hasMultipleAssignments
			? `/assignments/${this.props.params.name}`
			: `/lesson/${this.props.params.name}`
		var linkText = hasMultipleAssignments
			? `${this.props.lessonName} Assignments`
			: this.props.lessonName

		return (
			<div className="assignment">
				<h3><Link to={linkRoute}>{linkText}</Link></h3>
				<div style={{width: (100 - (sidebarWidth || 0)) + '%'}}>
					<h2>{title}</h2>
					<div className="assignment-content"
						dangerouslySetInnerHTML={convertMarkdown(content)} />
				</div>
				{sidebar
					? <div className="assignment-sidebar" style={{width: sidebarWidth + '%'}}
						dangerouslySetInnerHTML={convertMarkdown(sidebar)} />
					: null}
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