const dustbins = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TO_BIN':
      var newState = state.map(box => {
        return {accepts: [... box.accepts] , lastDroppedItem: box.lastDroppedItem}
        }
      )
      newState[action.index].lastDroppedItem  = action.item
      return newState
    default:
      return state
  }
}

export default dustbins
