// creates component
const component = (state = {}, action) => {
	switch (action.type) {
		case 'ADD_NEW_COMPONENT':
			var screenProperties = [];
			if(action.componentType == "Form") {
			  var screenProperties = ["id","name","aboutScreen", "componentType"]
			}
			var newState = {};
			screenProperties.forEach(function(property) {
			  newState[property] = action[property]
			});
			
			return newState

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