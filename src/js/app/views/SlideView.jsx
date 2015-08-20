import _ from 'lodash'
import React from 'react'
import { Link } from 'react-router'
import 	{ connect } from 'react-redux'

import { Slide } from '../components'

require('./SlideView.scss')

class SlideView {
	render() {
		if (_.isEmpty(this.props.slide)) this.context.router.replaceWith('/slides')
		return <Slide {...this.props.slide} />
	}
}

SlideView.contextTypes = {
	router: React.PropTypes.func.isRequired
}

export default connect((state, props) => {
	var name = props.params.name.replace(/-([a-z])/g, (match, group) => group.toUpperCase())
	var number = Number.parseInt(props.params.number) - 1 || 0
	return {slide: state[name] && state[name].slides[number] || {}}
})(SlideView)
