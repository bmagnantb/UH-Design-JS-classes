import React from 'react'
import { Route, Redirect } from 'react-router'
	
import {
	AppView,
	AssignmentsView, 
	HomeView, 
	SlidesView
} from '../views'
	
export default (
	<Route path="/" handler={AppView}>
		<Route path="/" handler={HomeView} />
		<Route path="/slides/?:name?/?:number?" handler={SlidesView} />
		<Route path="/assignments/?:name?" handler={AssignmentsView} />
		<Redirect from="*" to="/" />
	</Route>
)