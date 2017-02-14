import React, { Component } from 'react';
// import simple_components from './simple_components';
// import ComponentNode from './ComponentNode.js'
import ComponentNodeContainer from '../containers/ComponentNodeContainer'
import { create_tree } from './helperFunctions'

/**
 * AIComponents creates the Components panel with the nested components
 * and their buttons.  The buttons will change the Properties panel 
 * when clicked.
 */

/*var button_style = {
	padding: '0.5em',
	font: '10pt Arial'
}*/


export default class AIComponents extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	// when button in Components panel is clicked, "selectedComponent"
	// is updated to the clicked component.
	handleChange(id) {
		return this.props.chooseComponent(id);
	}

	render () {

		var componentsPanel = this;

		// creates nested tree of components and their subcomponents
		var nestedTree = create_tree(this.props.components, this.props.selectedScreen);
		var name= nestedTree["$Name"];
		var id = nestedTree["Uuid"];
		var subs = nestedTree["$Components"];
		return (
			<div>
				<button onClick={() => componentsPanel.props.removeComponent(componentsPanel.props.selectedComponent, componentsPanel.props.components)}>Delete</button>
				<ComponentNodeContainer name={name} id={id} subcomponents={subs} onClickFunction={componentsPanel.handleChange}/>
			</div>
		);
	}
}