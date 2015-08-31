import _ from 'lodash'
import Rx from 'rx'
import React from 'react'
import { Link } from 'react-router'
import 	{ connect } from 'react-redux'

import { getCamelCaseLessonName } from '../../utils'
import { Slide } from '../components'

import './SlideView.scss'

const LEFT_ARROW = 37
const RIGHT_ARROW = 39

class SlideView {
	componentDidMount() {
		var sideArrowKeyup$ = Rx.Observable.fromEvent(window, 'keydown')
			.filter(evt => evt.keyCode === LEFT_ARROW || evt.keyCode === RIGHT_ARROW)
			.map(evt => evt.keyCode === LEFT_ARROW ? -1 : 1)
			.subscribe(indexChange => {
				var slideIndex = this.getSlideIndex() + indexChange
				if (this.props.slides[slideIndex]) {
					var name = this.getLessonName()
					this.context.router.transitionTo(`/slides/${name}/${slideIndex + 1}`)
				} else
					return // TODO something to signify beginning of slideshow
			})

		this.handlers = {
			sideArrowKeyup$
		}
	}

	componentWillUnmount() {
		var { sideArrowKeyup$ } = this.handlers
		sideArrowKeyup$.dispose()
	}

	render() {
		var slide = this.props.slides[this.getSlideIndex()]
		if (_.isEmpty(slide)) this.context.router.replaceWith('/slides')
		return (
			<div className="slide-view">
				<Link to={`/lesson/${this.props.params.name}`}>{this.props.lessonName}</Link>
				<Slide {...slide} />
			</div>
		)
	}

	getLessonName() {
		return getCamelCaseLessonName(this.props.params.name)
	}

	getSlideIndex() {
		return Number.parseInt(this.props.params.number || 1) - 1
	}
}

SlideView.contextTypes = {
	router: React.PropTypes.func.isRequired
}

export default connect(select)(SlideView)

function select(state, props) {
	var name = getCamelCaseLessonName(props.params.name)
	return {
		slides: state[name].slides || {},
		lessonName: state[name].name
	}
}