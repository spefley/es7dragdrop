// creates component
const component = (state = {}, action) => {
	switch (action.type) {
		case 'ADD_NEW_COMPONENT':
			return {
				type: action.type_name
			}

		default:
			return state
	}
}

// store has array of components...update store
const components = (state = [], action) => {
	switch(action.type) {
		case 'ADD_NEW_COMPONENT':
			return [...state, component(undefined, action)]

		default:
			return state
	}
}

export default components