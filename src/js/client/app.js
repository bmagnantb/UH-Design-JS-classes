import React from 'react'
import Router from 'react-router'

import routes from '../app/routes'
import App from '../app/App'

Router.run(routes, Router.HashLocation, (Handler, state) => {
	React.render(<App handler={Handler} />, document.querySelector('#app-container'))
})
