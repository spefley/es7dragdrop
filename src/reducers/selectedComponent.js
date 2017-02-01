/**
 * A REDUCER handling selectedComponent in the store
 */

const selectedComponent = (state = "", action) => {
	switch(action.type) {
		case 'SELECT_COMPONENT':
			return action.id

		default:
			return state
	}
}
export default selectedComponent