import React from 'react'
import { Route, Redirect } from 'react-router'
	
import {
	AppView,
	HomeView
} from '../views'
	
export default (
	<Route path="/" handler={AppView}>
		<Route path="/" handler={HomeView} />
		<Redirect from="*" to="/" />
	</Route>
)