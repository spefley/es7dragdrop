import React, { PropTypes, Component } from 'react';
import ComponentNodeContainer from '../containers/ComponentNodeContainer'

/**
 * Component Node creates the nodes for the components to be shown in 
 * in the Components panel.  They can be represented as words, buttons, etc.
 * This also recursively includes the subcomponents/children of each component.
 * If the button is clicked, the function is called to change selectedComponent
 * and update the Properties panel to match the clicked component.
 */


export default class ComponentNode extends Component {
	constructor(props) {
		super(props);

		this.handleClick = this.handleClick.bind(this);
		this.handleToggle = this.handleToggle.bind(this);
	}

	handleClick() {
		this.props.onClickFunction(this.props.id)
	};

	handleToggle() {
		this.props.toggleComp(this.props.id, this.props.components, this.props.selectedComponent);
	}

	render() {
		var buttonColor;
		if (this.props.selectedComponent == this.props.id) {
			buttonColor = 'pink';
		} else {
			buttonColor = 'white';
		}

		// If component has subcomponents, add the subcomponents to the list
		var subComps = "";
		if (this.props.subcomponents && this.props.toggled[this.props.id]) {
			subComps = this.props.subcomponents.map(({$Name, Uuid, $Components}) =>
				(<ComponentNodeContainer name={$Name} id={Uuid} subcomponents={$Components}onClickFunction={this.props.onClickFunction}/>)
			)
		}

		return (
			<div>
				{this.props.subcomponents ? (<button onClick={this.handleToggle}>{this.props.toggled[this.props.id] ? '-' : '+'}</button>) : ("")}
				<button onClick={this.handleClick} style={{backgroundColor:buttonColor}}> {this.props.name} </button>
				<div style={{marginLeft:'1.5em'}}>{subComps}</div>
			</div>
		)
	}
}