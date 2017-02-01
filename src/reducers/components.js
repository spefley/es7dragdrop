/** 
 * A REDUCER handling components in the store
 * actions: add a new component to the list of components,
 * or update a property in the specific component.
 */


// creates component
const component = (state = {}, action) => {
	var componentPropertyNames = [];
	var newState = {}
	switch (action.type) {
		case 'ADD_NEW_COMPONENT':
			if(action.componentType === "Button") {
				componentPropertyNames = Object.keys(action);
			  // var componentPropertyNames = ["id","name","aboutScreen", "componentType"]
			}
			componentPropertyNames.forEach(function(property) {
				if (property !== "type") {
			  	newState[property] = action[property];
				}

			});
			
			return newState

		case 'UPDATE_COMPONENT':
			componentPropertyNames = Object.keys(state);
			componentPropertyNames.forEach(function(property) {
				newState[property] = state[property];
			})
			newState[action.propertyName] = action.propertyInputValue;
			// console.log(newState)
			return newState


		// case 'UPDATE_COMPONENT':
			// sent in: id, propertyName, value of Property to change to
			// question: what if propertyName does not exist?
			// assume that state.id == action.id, bc of components function below


		default:
			return state
	}
}

// store has array of components...update store
const components = (state = [], action) => {
	switch(action.type) {
		case 'ADD_NEW_COMPONENT':
			return [...state, component(undefined, action)]

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