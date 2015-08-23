import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import marked from 'marked'
import highlight from 'highlight.js'

import { getCamelCaseLessonName } from '../../utils'

import './AssignmentView.scss'

marked.setOptions({
	gfm: true,
	highlight: code => highlight.highlight('javascript', code).value,
	langPrefix: ''
})

class AssignmentView {
	render() {
		return (
			<div className="assignment">
				<h3><Link to={`/assignments/${this.props.params.name}`}>Return to {this.props.lessonName}</Link></h3>
				<h2>{this.props.assignment.title}</h2>
				<div dangerouslySetInnerHTML={this.getContent(this.props.assignment.content)} />
			</div>
		)
	}

	getContent(content) {
		return {__html: marked(content)}
	}
}

export default connect(select)(AssignmentView)

function select(state, props) {
	var name = getCamelCaseLessonName(props.params.name)
	return {
		lessonName: state[name].name,
		assignment: state[name].assignments.filter(assignment => assignment.route === props.params.assignment)[0]
	}
}