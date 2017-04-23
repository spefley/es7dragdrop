import { connect } from 'react-redux'
//import { setVisibilityFilter } from '../actions'
import Container from '../components/Container'
import { addToBin, moveComponent } from '../actions'

const mapStateToProps = (state, ownProps) => ({
  dustbins: state.dustbins,
  components: state.components
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  onDrop: (componentId, afterId, dropZoneType) => {
    dispatch(moveComponent(componentId, afterId, dropZoneType))
  },
  moveComp: (componentId, afterId) => {
    dispatch(moveComponent(componentId, afterId))
  }
})

const DragContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Container)

export default DragContainer
