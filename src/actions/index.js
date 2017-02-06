// import simple_components from '../components/simple_components';

/** 
 * ACTIONS - includes:
 * add to Bin
 * addNewComponent - adds new component to list of components 
 * updateComponent - updates specific property of a component
 * selectComponent - updates which component is selected
 * toggleComponent - updates component if toggled
 */

export function addToBin(item) {
	return {
		type: 'ADD_TO_BIN',
		item_type: item.type,
		item_name: item.name
	}
}

let nextId = 2;

// new component added as child of Screen1 in Components and added to store
export function addNewComponent(compType) {
  var name = compType + nextId;
  var compProperties = {componentType: compType, name:name, Uuid:(nextId++).toString(), version:"1"};
  return Object.assign({type: 'ADD_NEW_COMPONENT'}, compProperties)
}

// updates specific property value to input value for a component - Properties Panel
export function updateComponent(componentId, propertyName, inputValue) {
  var info = {id: componentId, propertyName: propertyName, propertyInputValue: inputValue};
  return Object.assign({type: 'UPDATE_COMPONENT'}, info)
}

// updates selected component - Properties panel and Components Panel
export function selectComponent(componentId) {
  return Object.assign({type: 'SELECT_COMPONENT'}, {id: componentId})
}

// if toggled, subcomponents are shown/hidden, selectedComponents change if 
// current selectedComponent is hidden due to toggled parent
export function toggleComponent(componentId, components, selected) {
  var hasChild = hasChildSelected(componentId, components, selected)
  return Object.assign({type: 'TOGGLE_COMPONENT'}, {id: componentId, select:hasChild})
}

// helper for toggleComponent - given the component ID, returns its corresponding object
function findIdObj(id, comps) {
  for (var i=0; i<comps.length; i++) {
    if (comps[i].Uuid === id) {
      return comps[i]
    }
  }
  return null
}

// helper for toggleComponent - checks if a component has a subcomponent that is selected.
function hasChildSelected(id, comps, selected) {
  if (id === selected) {
    return true;
  }
  var idObj = findIdObj(id, comps);
  if (idObj && idObj.children) {
    for (var j=0; j<idObj.children.length; j++) {
      if (hasChildSelected(idObj.children[j], comps, selected)) {
        return true
      }
    }
  }
  return false
}
