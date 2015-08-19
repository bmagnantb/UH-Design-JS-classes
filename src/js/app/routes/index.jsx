import React from 'react'
import { Route, Redirect } from 'react-router'
	
import {
	AppView,
	AssignmentsView,
	HomeView,
	LessonView,
	SlidesView
} from '../views'
	
export default (
	<Route path="/" handler={AppView}>
		<Route path="/" handler={HomeView} />
		<Route path="/lesson/:name" handler={LessonView} />
		<Route path="/slides/?:name?/?:number?" handler={SlidesView} />
		<Route path="/assignments/?:name?" handler={AssignmentsView} />
		<Redirect from="*" to="/" />
	</Route>
)