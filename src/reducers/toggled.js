// import { getAllSubcomponents } from '../components/helperFunctions'

/**
 * A REDUCER handling toggled in the store, changed when:
 * 		component is toggled (Components panel)
 *		new component is added - additional component to keep track of (Add Components panel)
 */

const toggled = (state = {}, action) => {
	var newState = {};
	Object.keys(state).forEach(function(id) {
		newState[id] = state[id]
	})
	switch(action.type) {
		case 'TOGGLE_COMPONENT':
			newState[action.id] = !newState[action.id]
			return newState
		case 'ADD_NEW_COMPONENT':
			newState[action.Uuid] = true;
			return newState;
		case 'DELETE_COMPONENT':
			if (action.id !== "0" && !(action.id === action.selectedScreen && !action.deleteScreen)) {
				newState = Object.assign({}, state);
				delete newState[action.id]
				return newState;
			}
			else return state
		default:
			return state
	}
}
export default toggled