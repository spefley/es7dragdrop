import { connect } from 'react-redux'
//import { setVisibilityFilter } from '../actions'
import Container from '../components/Container'
import { addToBin } from '../actions'

const mapStateToProps = (state, ownProps) => ({
  dustbins: state.dustbins
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  handleDrop: (item) => {
    //dispatch(addBin(index, item))
    console.log(item)
    console.log(item.name)
    dispatch(addToBin(item))

  }
})

const DragContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)

export default DragContainer
