import { connect } from 'react-redux'
import Properties from '../components/Properties'
import { addNewComponent } from '../actions'

const mapStateToProps = (state, ownProps) => ({
  selectedComponent: state.components[0]
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  addComponent: (type) => {
    dispatch(addNewComponent(type))
  }
})

const PropertiesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Properties)

export default PropertiesContainer
