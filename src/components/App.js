import React from 'react'
import DragContainer from '../containers/DragContainer'
import PropertiesContainer from '../containers/PropertiesContainer'
import ComponentsContainer from '../containers/ComponentsContainer'
import AddButtonContainer from '../containers/AddButtonContainer'
import ExportContainer from '../containers/ExportContainer'

/**
 * Gives some style to the containers.
 */
const panel_style = {
	border: '1px dashed black',
	backgroundColor: 'lightblue',
	padding: '0.5em 1em',
	marginRight: '1.5em',
	marginBottom: '1.5em',
	float: 'left',
	position: 'relative'
}

/** 
 * Gives some style to the headings of each panel/container.
 */
const headings = {
	...panel_style,
	backgroundColor: 'turquoise',
	fontWeight: 'bold',
	borderBottom: '2px solid black',
	margin:'0.5em',
	float:'center'
}

/* Displays all the panels/containers.
 */
const App = () => (
	<div>
		<ExportContainer />
		<div style={panel_style}>
			<div style={headings}>Components</div> 
			<ComponentsContainer />
		</div>

		<div style={panel_style}>
			<div style={headings}>Properties</div>
			<PropertiesContainer />
		</div>

		<div style={panel_style}>
			<div style={headings}>Palette</div>
			<AddButtonContainer />
		</div>

		<div style={panel_style}>
			<DragContainer />
		</div>
	</div>
)

export default App