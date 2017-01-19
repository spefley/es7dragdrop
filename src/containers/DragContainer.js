import { connect } from 'react-redux'
//import { setVisibilityFilter } from '../actions'
import Container from '../components/Container'

const mapStateToProps = (state, ownProps) => ({
  dustbins: state.dustbins
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleDrop: (index, item) => {
    //dispatch(addBin(index, item))
    dispatch({type:"ADD_TO_BIN",index, item})
  }
})

const DragContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)

export default DragContainer
