import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import app from './app';

const reducers = (navReducers) => {
	return combineReducers({
		app:app,
		nav:navReducers,
		form:formReducer
	})
}

export default reducers