import { connect } from 'react-redux'
import ComponentsPanel from '../components/ComponentsPanel'
import { deleteComponent, loadProject, selectScreen, clearToggles } from '../actions'
import { create_tree } from '../components/helperFunctions'

/**
 * ComponentsContainer.js handles the Components panel in AI, as well as 
 * the link between the Components panel and the Properties panel
 */

const mapStateToProps = (state, ownProps) => ({
  selectedComponent: state.selectedComponent,
  selectedScreen: state.selectedScreen,
  projectTree: create_tree(state.components, state.selectedScreen)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
  removeComponent: (id, selectedScreen, delScreen=false) => {
  	dispatch(deleteComponent(id, selectedScreen, delScreen))
  },
  loadProject: () => {
    dispatch(selectScreen("0"));
    dispatch(clearToggles());
    dispatch(loadProject([
      {"name":"Screen1", "componentType":"Form", "version":"20", "AboutScreen":"This is an App!","AppName":"Hello2","Title":"Screen1", "Uuid":"0","children": ["939054039"]},
      {"name":"HorizontalArrangement1", "componentType":"VerticalArrangement", "version":"3", "AlignHorizontal":"3", "Uuid":"939054039", "children":["1961822558","-1864349167"]},
      {"componentType":"HorizontalArrangement", "name":"HorizontalArrangement1", "version":"3", "AlignHorizontal":"2", "Uuid":"1961822558", "children":["-496282275","53776343"]},
      {"name":"Button1", "componentType":"Button", "version":"6", "FontSize":"16", "Text":"Text for Button1", "Uuid":"-496282275"},
      {"name":"CheckBox1", "componentType":"CheckBox", "version":"2", "FontTypeface":"2", "Text":"Text for CheckBox1", "Uuid":"53776343"},
      {"name":"PasswordTextBox1", "componentType":"PasswordTextBox", "version":"3", "TextAlignment":"1", "Uuid":"-1864349167"}
    ]));
  }
})

const ComponentsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ComponentsPanel)

export default ComponentsContainer
