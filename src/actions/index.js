// import simple_components from '../components/simple_components';

/** 
 * ACTIONS - includes:
 * add to Bin
 * addNewComponent - adds new component to list of components 
 * updateComponent - updates specific property of a component
 * selectComponent - updates which component is selected
 * toggleComponent - updates component if toggled
 */
let nextId = 0

export function addToBin(item) {
	return {
		type: 'ADD_TO_BIN',
		item_type: item.type,
		item_name: item.name,
		id: nextId++
	}
}


let nextId = 2;

export function addNewComponent(compType) {
  var allComps = simple_components.simpleComponents;
  
  for (var i=0; i<allComps.length; i++) {
  	if (allComps[i].name === "Button") {
  		var allProperties = allComps[i].properties;
  	}
  }

  var compProperties = {componentType: "Button", name:"Screen1", id:nextId++};
  for (var j=0; j<allProperties.length; j++) {
  	compProperties[allProperties[j].name] = allProperties[j].defaultValue;
  }
  // var screen = {componentType: "Form", name:"Screen1", aboutScreen:"asdf", id:nextId++};
  
  return Object.assign({type: 'ADD_NEW_COMPONENT'}, compProperties)
}

// new component added as child of Screen1 in Components and added to store
export function addNewComponent(compType, selectedScreen) {
  var name = compType + nextId;
  var compProperties = {name:name, componentType: compType, Uuid:(nextId++).toString(), version:"1", screenId:selectedScreen};
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
export function toggleComponent(componentId, hasSelectedSubcomp) {
  return Object.assign({type: 'TOGGLE_COMPONENT'}, {id: componentId, hasSelectedSubcomp:hasSelectedSubcomp})
}

export function selectScreen(screenId) {
  return Object.assign({type: 'SELECT_SCREEN'}, {id: screenId})
}

export function deleteComponent(compId, selScreen, delScreen) {
  return Object.assign({type: 'DELETE_COMPONENT'}, {id: compId, selectedScreen: selScreen, deleteScreen: delScreen})
}

export function moveComponent(id, afterId, nodeId) {
  return Object.assign({type: 'MOVE_COMPONENT'}, {id, afterId, nodeId})
}

// update component
// id, property name, new property value


