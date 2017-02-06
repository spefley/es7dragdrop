import { connect } from 'react-redux'
import Properties from '../components/Properties'
import { updateComponent } from '../actions'

/**
 * Properties Container handles the Properties panel, links it to component
 * information in store, and manages updates to specific properties.
 */

const mapStateToProps = (state, ownProps) => ({
  // selectedComponent: state.components[0]
  selectedComponent: state.selectedComponent,
  components: state.components
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  updateComponentProperty: (componentId, propertyName, newValue) => {
    dispatch(updateComponent(componentId, propertyName, newValue))
  }
})


// selectedComponent and updateComponentProperty are props that Properties.js receives
const PropertiesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Properties)

export default PropertiesContainer
