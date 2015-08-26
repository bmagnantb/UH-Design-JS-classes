import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'

import { getHyphenatedLessonName, lessonHasSlides, makeLessonList, makeOutline } from '../../utils'

import './SlideListView.scss'

class SlideListView {
	render() {
		return (
			<div>
				<h2>Lesson Slides</h2>
				<ul>
					{this.props.lessons.filter(lessonHasSlides).map(makeLessonListWithSlideLinks)}
				</ul>
			</div>
		)
	}
}

export default connect(select)(SlideListView)

function select(state, props) {
	return { lessons: makeLessonList(state) }
}

function makeLessonListWithSlideLinks({ key, lesson }) {
	return (
		<li key={`slidelist-${key}`}>
			<Link to={`/slides/${getHyphenatedLessonName(key)}`}>{lesson.name}</Link>
			{lesson.outline
					? makeOutline(lesson.outline, key)
					: null}
		</li>
	)
}
