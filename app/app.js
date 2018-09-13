import React, { Component } from 'react'
import getStore from './store/store'
import { Provider, connect } from 'react-redux'
import { addNavigationHelpers, NavigationActions } from 'react-navigation'
import MainRoute from './routes/routes'
import {
  reduxifyNavigator,
  createReactNavigationReduxMiddleware,
  createNavigationReducer,
} from 'react-navigation-redux-helpers'

import {
	View,
	Text,
	Alert,
	AppState,
	BackHandler,
	StatusBar
} from 'react-native'

const navReducer = (state, action) => {
  	const nextState = MainRoute.router.getStateForAction(action, state)
  	return nextState || state
}

const middleware = createReactNavigationReduxMiddleware(
  "root",
  state => state.nav
)

const addListener = reduxifyNavigator(MainRoute, "root")

const mapStateToProps = (state) => ({
  	state: state.nav
})

const AppWithNavigationState = connect(mapStateToProps)(addListener)

const store = getStore(navReducer)

class Root extends Component {

  	render() {
	    return (
	      	<Provider store={store}>
	        	<AppWithNavigationState />
	      	</Provider>
	    )
  	}

}

export default Root

