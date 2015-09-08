import { createStore } from 'redux'

import reducer from './reducers'

export default function makeStore() {
	var store = createStore(reducer)

	if (module.hot) {
		module.hot.accept('./reducers', () => {
			var nextReducer = require('./reducers')
			store.replaceReducer(nextReducer)
		})
	}

	return store
}