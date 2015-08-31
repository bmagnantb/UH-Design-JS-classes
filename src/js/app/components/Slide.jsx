import Rx from 'rx'
import $ from 'jquery'
import React from 'react'

import { convertMarkdown } from '../../utils'

import './Slide.scss'

const SPACE_KEY = 32

export default class Slide {
	componentDidMount() {
		this.animations = []
		this.initiateAnimations(this.props)

		var thisComponent = this
		var spaceKeyup$ = Rx.Observable.fromEvent(window, 'keyup')
			.filter(evt => evt.keyCode === SPACE_KEY && thisComponent.animations.length)
			.subscribe(evt => {
				thisComponent.loop = false
				thisComponent.animations[0]()
				thisComponent.animations.shift()
				if (thisComponent.animations.length) thisComponent.loop = true
			})

		this.handlers = {
			spaceKeyup$
		}
	}

	componentWillUnmount() {
		var { spaceKeyup$ } = this.handlers
		spaceKeyup$.dispose()
	}

	componentWillReceiveProps(nextProps) {
		this.initiateAnimations(nextProps)
	}

	initiateAnimations(props) {
		this.loop = false
		var thisComponent = this
		if (props.animations && props.animations.length) {
			this.loop = true
			this.animations = props.animations.slice()
			loopAnimation($('.slide .animation-notifier'))
		}

		function loopAnimation($el) {
			fadeIn()
			function fadeIn() {
				if (thisComponent.loop === true) $el.fadeIn(1500, fadeOut)
				else $el.hide()
			}
			function fadeOut() {
				if (thisComponent.loop === true) $el.fadeOut(900, fadeIn)
				else $el.hide()
			}
		}
	}

	render() {
		return (
			<div className="slide">
				<div className="slide-titles">
					<h1>{this.props.title}</h1>
					<h2>{this.props.subtitle}</h2>
				</div>
				<div className="slide-content"
					dangerouslySetInnerHTML={convertMarkdown(this.props.content)} />
				<div className="animation-notifier">spacebar</div>
			</div>
		)
	}
}
