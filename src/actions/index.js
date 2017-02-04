// import simple_components from '../components/simple_components';

/** 
 * ACTIONS - includes:
 * add to Bin
 * add new component to list of components or update specific property of a component
 * update the selected Component
 */

export function addToBin(item) {
	return {
		type: 'ADD_TO_BIN',
		item_type: item.type,
		item_name: item.name
	}
}

let nextId = 2;

export function addNewComponent(compType) {
  /*
    var allComps = simple_components.simpleComponents;
    
    for (var i=0; i<allComps.length; i++) {
    	if (allComps[i].name === "Button") {
    		var allProperties = allComps[i].properties;
    	}
    }

    for (var j=0; j<allProperties.length; j++) {
      compProperties[allProperties[j].name] = allProperties[j].defaultValue;
    }
    var screen = {componentType: "Form", name:"Screen1", aboutScreen:"asdf", id:nextId++};
  */

  var name = compType + nextId;
  var compProperties = {componentType: compType, name:name, Uuid:(nextId++).toString(), version:"1"};
  return Object.assign({type: 'ADD_NEW_COMPONENT'}, compProperties)

}

export function updateComponent(componentId, propertyName, inputValue) {
  var info = {id: componentId, propertyName: propertyName, propertyInputValue: inputValue};
  return Object.assign({type: 'UPDATE_COMPONENT'}, info)
}

export function selectComponent(componentId) {
  return Object.assign({type: 'SELECT_COMPONENT'}, {id: componentId})
}

export function toggleComponent(componentId, components, selected) {
  var hasChild = hasChildSelected(componentId, components, selected)
  return Object.assign({type: 'TOGGLE_COMPONENT'}, {id: componentId, select:hasChild})
}

function findIdObj(id, comps) {
  for (var i=0; i<comps.length; i++) {
    if (comps[i].Uuid === id) {
      return comps[i]
    }
  }
  return null
}

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
