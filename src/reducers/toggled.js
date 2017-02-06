/**
 * A REDUCER handling toggled in the store, changed when:
 * 		component is toggled (Components panel)
 *		new component is added - additional component to keep track of (Add Components panel)
 */

const toggled = (state = {}, action) => {
	var newState = {}
	switch(action.type) {
		case 'TOGGLE_COMPONENT':
			Object.keys(state).forEach(function(id) {
				newState[id] = state[id]
			})
			newState[action.id] = !newState[action.id]
			return newState
		case 'ADD_NEW_COMPONENT':
			newState = state;
			newState[action.Uuid] = true;
		default:
			return state
	}
}
export default toggled