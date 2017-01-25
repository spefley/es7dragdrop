const dustbin = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TO_BIN': 
      return {
        item: action.item_name,
        type: action.item_type
      }

    default:
      return state
  }
} 


const dustbins = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TO_BIN':
      return [...state, dustbin(undefined, action)]

    default:
      return state
  }
} 
/*
const dustbins = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_BIN':
      var newState = state.map(box => {
        return {droppedItems: [... box.droppedItems]}
        }
      )
      console.log(newState)
      newState.droppedItems  = action.item

      return newState
    default:
      return state
  }
}
*/
export default dustbins