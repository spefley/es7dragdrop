import { connect } from 'react-redux'
import ComponentNode from '../components/ComponentNode'
import { toggleComponent } from '../actions'

/**
 * ComponentNodeContainer.js handles the Component nodes, 
 * i.e the components that appear in the Components panel
 * as well as the toggle buttons for the components.
 */

const mapStateToProps = (state, ownProps) => ({
  selectedComponent: state.selectedComponent,
  toggled: state.toggled,
  components: state.components
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  toggleComp: (componentId, components, selected) => {
    dispatch(toggleComponent(componentId, components, selected))
  }
})

const ComponentNodeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentNode)

export default ComponentNodeContainer
