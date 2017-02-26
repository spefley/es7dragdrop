import { connect } from 'react-redux'
//import { setVisibilityFilter } from '../actions'
import Container from '../components/Container'
import { addToBin, moveComponent } from '../actions'

const mapStateToProps = (state, ownProps) => ({
  dustbins: state.dustbins,
  components: state.components,
  selectedScreen: state.selectedScreen
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleDrop: (item) => {
    /* if (!item.hasOwnProperty('id')) {
    	console.log(item.hasOwnProperty('id')) //returns False even though it should be true for the boxes in dustbin??
    	dispatch(addToBin(item))
    } */

  	// console.log(item.id)
    // dispatch(addToBin(item))

    if (item.id) {
    	dispatch(addToBin(item))
    }

  },
  moveComp: (id, afterId, nodeId) => {
    dispatch(moveComponent(id, afterId, nodeId));
  }
})

const DragContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)

export default DragContainer
