
export function addToBin(item) {
	return {
		type: 'ADD_TO_BIN',
		item_type: item.type,
		item_name: item.name
	}
}


let nextId = 0;

export function addNewComponent(componentType) {
  
  var screen = {componentType: "Form", name:"Screen1", aboutScreen:"asdf", id:nextId++};
  return Object.assign({type: 'ADD_NEW_COMPONENT'}, screen)

}

