// creates component
const component = (state = {}, action) => {
	switch (action.type) {
		case 'ADD_NEW_COMPONENT':
			var componentPropertyNames = [];
			if(action.componentType === "Form") {
				componentPropertyNames = Object.keys(action);
			  // var componentPropertyNames = ["id","name","aboutScreen", "componentType"]
			}
			var newState = {};
			componentPropertyNames.forEach(function(property) {
				if (property != "type") {
			  	newState[property] = action[property];
				}

			});
			
			return newState

		// case 'UPDATE_COMPONENT':
			// sent in: id, propertyName, value of Property to change to


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


		default:
			return state
	}
}

export default components