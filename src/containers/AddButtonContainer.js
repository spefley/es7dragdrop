import { connect } from 'react-redux'
import AddButton from '../components/AddButton'
import { addNewComponent } from '../actions'

/**
 * Add Button Container handles the Palette and adding of components to the project.
 * It links Palette to the Components panel as well.
 */

const mapStateToProps = (state, ownProps) => ({
  components: state.components,
  compType: "Button"
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  addComponent: (type) => {
    dispatch(addNewComponent(type))
  }
})

const AddButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AddButton)

export default AddButtonContainer
