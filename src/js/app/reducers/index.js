import { combineReducers } from 'redux'

import prework from './prework'
import introJs from './intro-js'
import jqueryAnimation from './jquery-animation'
import jqueryEvents from './jquery-events'
import groupProject from './group-project'
import funStuff from './fun-stuff'

export default combineReducers({
	prework,
	introJs,
	jqueryAnimation,
	jqueryEvents,
	groupProject,
	funStuff
})
