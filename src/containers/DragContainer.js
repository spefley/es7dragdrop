import { connect } from 'react-redux'
//import { setVisibilityFilter } from '../actions'
import Container from '../components/Container'
import { addToBin } from '../actions'

const mapStateToProps = (state, ownProps) => ({
  dustbins: state.dustbins
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

  }
})

const DragContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)

export default DragContainer
