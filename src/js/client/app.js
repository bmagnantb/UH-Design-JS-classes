import React from 'react'
import Router from 'react-router'
import { Provider } from 'react-redux'

import routes from '../app/routes'
import makeStore from '../app/makeStore'

var store = makeStore()

Router.run(routes, Router.HashLocation, (Handler, state) => {
	React.render(
		<Provider store={store}>
			{() => <Handler path={state.path} params={state.params} />}
		</Provider>,
		document.querySelector('#app-container'))
})
