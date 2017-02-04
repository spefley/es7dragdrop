/**
 * A REDUCER handling selectedComponent in the store
 */

const selectedComponent = (state = "", action) => {
	switch(action.type) {
		case 'SELECT_COMPONENT':
			return action.id
		case 'TOGGLE_COMPONENT':
			if (action.select) {return action.id}
			else {return state}
		default:
			return state
	}
}
export default selectedComponent