import React, { Component } from 'react';
// import simple_components from './simple_components';
import ComponentNode from './ComponentNode.js'
import { create_tree } from './ComponentTree'

/**
 * AIComponents creates the Components panel with the nested components
 * and their buttons.  The buttons will change the Properties panel 
 * when clicked.
 */

export default class AIComponents extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(id) {
		return this.props.chooseComponent(id);
	}

	render () {

		var componentsPanel = this;

		var nestedTree = create_tree(this.props.components);

		var name= nestedTree["$Name"];
		var id = nestedTree["Uuid"];
		var subs = nestedTree["$Components"];
		return (
			<div>
				<ComponentNode name={name} id={id} subcomponents={subs} onClickFunction={componentsPanel.handleChange}/>
			</div>
		);
	}
}