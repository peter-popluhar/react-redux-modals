import {combineReducers} from "redux";

import {ToggleReducer} from './ToggleReducer';
import {ToggleModal} from './ModalReducer';

export default combineReducers({
	ToggleReducer,
	ToggleModal
})

