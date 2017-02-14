import { connect } from 'react-redux'
import AIComponents from '../components/AIComponents'
import { selectComponent, deleteComponent } from '../actions'

/**
 * ComponentsContainer.js handles the Components panel in AI, as well as 
 * the link between the Components panel and the Properties panel
 */

const mapStateToProps = (state, ownProps) => ({
  components: state.components,
  selectedComponent: state.selectedComponent,
  selectedScreen: state.selectedScreen
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  chooseComponent: (componentId) => {
    dispatch(selectComponent(componentId))
  },
  removeComponent: (id, components) => {
  	dispatch(deleteComponent(id, components))
  }
})

const ComponentsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AIComponents)

export default ComponentsContainer
