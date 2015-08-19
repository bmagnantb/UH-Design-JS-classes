import React from 'react'
import { Route, Redirect } from 'react-router'
	
import { AppView } from '../views'
	
export default (
	<Route path="*" handler={AppView} />
)