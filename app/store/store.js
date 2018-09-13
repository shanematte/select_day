import { createStore, compose, applyMiddleware } from 'redux'

import reducers from '../reducers/index'

import {
	AsyncStorage
} from 'react-native'

const getStore = (navReducers) => {

	const store = createStore(reducers(navReducers))

	return store

}

export default getStore