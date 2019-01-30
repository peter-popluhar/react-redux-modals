import {TOGGLE_ELEMENT} from "../actions/actionTypes";

export const ToggleReducer = (state = {toggle: false}, action) => {
	switch (action.type) {
		case TOGGLE_ELEMENT:
			return {
				...state, toggle: !state.toggle
			};
		default: return state
	}
};
