/** 
 * A REDUCER handling components in the store, changed when:
 * 			new component is added to store (Add Components panel, Components panel)
 *			component property is updated with new input value (Properties panel)
 */


// creates component
const component = (state = {}, action) => {
	var componentPropertyNames = [];
	var newState = {}
	switch (action.type) {
		case 'ADD_NEW_COMPONENT':
			componentPropertyNames = Object.keys(action);
			componentPropertyNames.forEach(function(property) {
				if (property !== "type") {
			  		newState[property] = action[property];
				}
			});
			return newState

		case 'UPDATE_COMPONENT':
			// assume that state.id == action.id, bc of components function below
			componentPropertyNames = Object.keys(state);
			componentPropertyNames.forEach(function(property) {
				newState[property] = state[property];
			})
			newState[action.propertyName] = action.propertyInputValue;
			return newState

		default:
			return state
	}
}

// store has array of components...update store
const components = (state = [], action) => {
	switch(action.type) {
		case 'ADD_NEW_COMPONENT':
			var updatedState = [...state, component(undefined, action)]
			updatedState[0].children.push(action.Uuid)
			return updatedState
			// return [...state, component(undefined, action)]

		// case 'UPDATE_COMPONENT':
		// search through array
		// find which one has id
		// then update property

		case 'UPDATE_COMPONENT':
			var newState = [...state];
			for (var i=0; i<state.length;i++) {
				if (state[i].Uuid === action.id) {
					newState[i] = component(state[i], action);					
				}
			}
			// console.log(newState)
			return newState

		default:
			return state
	}
}

export default components