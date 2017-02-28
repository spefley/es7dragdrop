import { connect } from 'react-redux'
import AddButton from '../components/AddButton'
import { addNewComponent } from '../actions'

const mapStateToProps = (state, ownProps) => ({
  components: state.components,
  compType: "Button"
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  addComponent: (type, afterId) => {
    dispatch(addNewComponent(type, afterId))
  }
})

const AddButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddButton)

export default AddButtonContainer
