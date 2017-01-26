
export function addToBin(item) {
	return {
		type: 'ADD_TO_BIN',
		item_type: item.type,
		item_name: item.name
	}
}

export function addNewComponent(item) {
	return {
		type: 'ADD_NEW_COMPONENT',
		item_type: item.type
	}
}