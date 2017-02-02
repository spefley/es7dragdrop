// import simple_components from '../components/simple_components';

/** 
 * ACTIONS - includes:
 * add to Bin
 * add new component to list of components or update specific property of a component
 * update the selected Component
 */
let nextId = 2

export function addToBin(item) {
	return {
		type: 'ADD_TO_BIN',
		item_type: item.type,
		item_name: item.name,
		id: nextId++
	}
}

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
  var compProperties = {componentType: compType, name:name, Uuid:nextId++, version:"1"};
  return Object.assign({type: 'ADD_NEW_COMPONENT'}, compProperties)

}

export function updateComponent(componentId, propertyName, inputValue) {
  var info = {id: componentId, propertyName: propertyName, propertyInputValue: inputValue};
  // console.log(info);
  return Object.assign({type: 'UPDATE_COMPONENT'}, info)
}

export function selectComponent(componentId) {
  return Object.assign({type: 'SELECT_COMPONENT'}, {id: componentId})
}

export function moveComponent(id, afterId, nodeId) {
  return Object.assign({type: 'MOVE_COMPONENT'}, {id, afterId, nodeId})
}

// update component
// id, property name, new property value

