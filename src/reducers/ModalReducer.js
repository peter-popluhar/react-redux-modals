import {TOGGLE_MODAL} from "../actions/actionTypes";


export const ToggleModal = (state = {showModal: false}, action) => {
	switch (action.type) {
		case TOGGLE_MODAL:
			return {
				...state, showModal: !state.showModal
			};
		default: return state
	}
}
