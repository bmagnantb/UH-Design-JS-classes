import React from 'react'
import Router from 'react-router'

import routes from '../app/routes'

Router.run(routes, Router.HashLocation, (Handler, state) => {
	React.render(<Handler path={state.path} params={state.params} />, document.querySelector('#app-container'))
})
