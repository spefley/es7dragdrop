import { connect } from 'react-redux'
import Screens from '../components/Screens'
import { addNewComponent, selectScreen, deleteComponent } from '../actions'

/**
 * ScreensContainer handles multiple screens and clicking between screens.
 */

const mapStateToProps = (state, ownProps) => ({
  components: state.components,
  selectedScreen: state.selectedScreen
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	addComponent: (type, screenId) => {
		dispatch(addNewComponent(type, screenId))
	},
	chooseScreen: (screenId) => {
    	dispatch(selectScreen(screenId))
  	},
  	removeScreen: (screenId, components) => {
  		dispatch(deleteComponent(screenId, components))
  	}
})

const ScreensContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Screens)

export default ScreensContainer
