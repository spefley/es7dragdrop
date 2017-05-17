import { connect } from 'react-redux'
import ComponentsPanel from '../components/ComponentsPanel'
import { deleteComponent, loadProject, selectScreen, clearToggles } from '../actions'
import { create_tree } from '../components/helperFunctions'

/**
 * ComponentsContainer.js handles the Components panel in AI, as well as 
 * the link between the Components panel and the Properties panel
 */

const mapStateToProps = (state, ownProps) => {
  const projectTree = create_tree(state.components, state.selectedScreen);

  window.getComponentsInAIAFileFormat = function() {
    return "#|\n$JSON\n" +
      JSON.stringify(projectTree).replace(/type\":/g, "$Type\":") +
      "\n|#";
  }.bind(this);
  return {
    selectedComponent: state.selectedComponent,
    selectedScreen: state.selectedScreen,
    projectTree: projectTree
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const loadProjectFromComponents = (components) => {
    dispatch(selectScreen("0"));
    dispatch(clearToggles());
    dispatch(loadProject(components));
  }

  window.jsDesignerLoadProject = loadProjectFromComponents.bind(this);

  return {
    removeComponent: (id, selectedScreen, delScreen=false) => {
      dispatch(deleteComponent(id, selectedScreen, delScreen))
    }
  }
}

const ComponentsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentsPanel)

export default ComponentsContainer
