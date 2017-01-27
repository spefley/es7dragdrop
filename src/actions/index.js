import simple_components from '../components/simple_components';

export function addToBin(item) {
	return {
		type: 'ADD_TO_BIN',
		item_type: item.type,
		item_name: item.name
	}
}

let nextId = 0;

export function addNewComponent(compType) {
  var allComps = simple_components.simpleComponents;
  
  for (var i=0; i<allComps.length; i++) {
  	if (allComps[i].name === "Form") {
  		var allProperties = allComps[i].properties;
  	}
  }

  var compProperties = {componentType: "Form", name:"Screen1", id:nextId++};
  for (var j=0; j<allProperties.length; j++) {
  	compProperties[allProperties[j].name] = allProperties[j].defaultValue;
  }
  // var screen = {componentType: "Form", name:"Screen1", aboutScreen:"asdf", id:nextId++};
  
  return Object.assign({type: 'ADD_NEW_COMPONENT'}, compProperties)

}



// update component
// id, property name, new property value