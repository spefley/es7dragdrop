import { getAllSubcomponents } from '../components/helperFunctions'

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
				if (property !== "type" && property !== "screenId") {
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
			if (action.screenId === null) {
				return updatedState;
			} else {
				for (var i=0; i<updatedState.length; i++) {
					if (updatedState[i].Uuid === action.screenId) {
						updatedState[i].children = updatedState[i].children || [];
						updatedState[i].children.push(action.Uuid);
					}
				}
			}
			return updatedState

		/** 
		 * Searches through the list of components, finds the component with 
		 * the given ID, and then updates the value of the specified property
		 */
		case 'UPDATE_COMPONENT':
			var newState = [...state];
			for (var i=0; i<state.length;i++) {
				if (state[i].Uuid === action.id) {
					newState[i] = component(state[i], action);					
				}
			}
			return newState

		/** 
		 * Deletes the specified screen and all subcomponents.
		 * If screen is "Screen1", i.e. component id = "0", nothing happens
		 */
		case 'DELETE_COMPONENT':
			if (action.id === "0" ||(action.id === action.selectedScreen && !action.deleteScreen)) return state;
			var subComps = getAllSubcomponents(action.id, state);
			var newState = [];
			state.forEach(function(component) {
				var comp = Object.assign({}, component);
				if (comp.children && comp.children.includes(action.id)) {
					var index = comp.children.indexOf(action.id);
					var children = comp.children.slice();
					children.splice(index, 1);
					comp.children = children;
				}

				if (!subComps.hasOwnProperty(comp.Uuid)) {
					newState.push(comp)
				}
			})
			return newState;
		default:
			return state
	}
}

export default components