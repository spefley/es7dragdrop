import { getAllSubcomponents } from '../components/helperFunctions'
import { insertUuidIntoState } from './utils/updateStateUtils';

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
			componentPropertyNames = Object.keys(action.compProperties);
			componentPropertyNames.forEach(function(property) {
				if (property !== "type" && property !== "screenId") {
			  		newState[property] = action.compProperties[property];
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
			var updatedState = insertUuidIntoState([...state, component(undefined, action)], action, false);
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

		case 'MOVE_COMPONENT':
			var newState = state.map(component => Object.assign({},component))
			if(action.id == action.afterId) {
				return newState
			}
			let dest = []
			if(action.nodeId) {
				dest = newState.filter(comp => comp.Uuid == action.nodeId)[0].children
			} else {
			    //screen1
			    dest = newState[0].children
			}
			
			if (!action.afterId) {
		      //removeNode(id, tree)
		      state.map(component => {
		        if(component.children && component.children.indexOf(action.id) != -1) {
                  component.children.splice(component.children.indexOf(action.id),1)
		        }
		      })
    		  dest.push(action.id)
		    } else {
		      const index = dest.indexOf(dest.filter(v => v === action.afterId).shift())
		      state.map(component => {
		        if(component.children && component.children.indexOf(action.id) != -1) {
                  component.children.splice(component.children.indexOf(action.id),1)
		        }
		      })
		      dest.splice(index, 0, action.id)
		    }
			
			return newState


		default:
			return state
	}
}

export default components