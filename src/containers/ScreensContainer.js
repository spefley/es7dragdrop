import { connect } from 'react-redux'
import Screens from '../components/Screens'
import { addNewComponent, selectScreen, deleteComponent } from '../actions'
import { create_tree, getAllSubcomponents } from '../components/helperFunctions'

/**
 * ScreensContainer handles multiple screens and clicking between screens.
 */

function getAllScreens(state) {
  var screens = [];
  state.components.forEach(function(obj) {
      if (obj.componentType === "Form") {
        screens.push(obj)
      }
    });
  return screens;
}

const mapStateToProps = (state, ownProps) => ({
  selectedScreen: state.selectedScreen,
  screens: getAllScreens(state)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  addComponent: (type, screenId) => {
    dispatch(addNewComponent(type, screenId))
  },
  chooseScreen: (screenId) => {
      dispatch(selectScreen(screenId))
    },
  removeScreen: (screenId, delScreen=true) => {
    dispatch(deleteComponent(screenId, screenId, delScreen))
  }
})

const ScreensContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Screens)

export default ScreensContainer
