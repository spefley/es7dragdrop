import { connect } from 'react-redux'
import AIComponents from '../components/AIComponents'
import { selectComponent } from '../actions'

/**
 * ComponentsContainer.js handles the Components panel in AI, as well as 
 * the link between the Components panel and the Properties panel
 */

const mapStateToProps = (state, ownProps) => ({
  components: state.components
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  chooseComponent: (componentId) => {
    dispatch(selectComponent(componentId))
  }
})

const ComponentsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AIComponents)

export default ComponentsContainer
