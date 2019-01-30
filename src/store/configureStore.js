import {createStore} from "redux";
import combineReducers from './../reducers/index';

export function configureStore(initialState = {}) {
	const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
	return createStore(combineReducers, initialState, composeEnhancer());
};
