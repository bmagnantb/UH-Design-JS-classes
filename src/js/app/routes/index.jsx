import React from 'react'
import { Route, Redirect } from 'react-router'
	
import {
	AppView,
	HomeView, 
	SlidesView
} from '../views'
	
export default (
	<Route path="/" handler={AppView}>
		<Route path="/" handler={HomeView} />
		<Route path="/slides/?:name?/?:number?" handler={SlidesView} />
		<Redirect from="*" to="/" />
	</Route>
)