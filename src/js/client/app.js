import React from 'react'
import Router from 'react-router'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from '../app/reducers'
import routes from '../app/routes'

Router.run(routes, Router.HashLocation, (Handler, state) => {
	React.render(
		<Provider store={createStore(reducer)}>
		   {() => <Handler />}
		</Provider>,
		document.querySelector('#app-container'))
})
