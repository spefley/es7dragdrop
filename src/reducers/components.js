import { insertUuidIntoState } from './utils/updateStateUtils';

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
			componentPropertyNames = Object.keys(action.compProperties);
			componentPropertyNames.forEach(function(property) {
				if (property !== "type") {
			  		newState[property] = action.compProperties[property];
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
			var updatedState = insertUuidIntoState([...state, component(undefined, action)], action, false);
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