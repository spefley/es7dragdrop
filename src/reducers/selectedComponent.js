/**
 * A REDUCER handling selectedComponent in the store, changed when:
 *			component is selected (Components panel)
 * 			component or ancestor is toggled (Components panel)
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