import React from 'react'
import { Route, Redirect } from 'react-router'

import {
	AssignmentListView,
	AssignmentView,
	LessonListView,
	LessonView,
	SlideListView,
	SlideView
} from '../views'

export default (
	<Route path="/">
		<Route path="/" handler={LessonListView} />
		<Route path="/lesson/:name" handler={LessonView} />
		<Route path="/slides" handler={SlideListView} />
		<Route path="/slides/:name/?:number?" handler={SlideView} />
		<Route path="/assignments/?:name?" handler={AssignmentListView} />
		<Route path="/assignments/:name/:assignment" handler={AssignmentView} />
		<Redirect from="/prework" to="/assignments/prework" /> 
		<Redirect from="*" to="/" />
	</Route>
)
