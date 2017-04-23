import { insertUuidIntoState } from './utils/updateStateUtils';
import { findIndex, forEach, remove } from "lodash";
import { DropZoneTypes } from "../constants/DropZoneTypes";

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
			var newState = state.map(component => Object.assign({},component))
			var insertInChildren = action.dropZoneType === DropZoneTypes.CONTENT;
			var updatedState = insertUuidIntoState([...newState, component(undefined, action)], action.compProperties.Uuid, action.afterId, insertInChildren);
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
			var insertInChildren = action.dropZoneType === DropZoneTypes.CONTENT;

			const index = findIndex(newState, (component) => {
				const childIndex = findIndex(component.children, (child) => {
					// for some reason only checking first child in children list TODO
					return child == action.id;
				});
				if (childIndex > -1) {
					return true;
				}
				return false;
			});
			remove(newState[index].children, (id) => { return id == action.id; });

			
			return insertUuidIntoState(newState, action.id, action.afterId, insertInChildren);


		default:
			return state
	}
}

export default components