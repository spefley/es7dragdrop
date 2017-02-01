import React, { PropTypes, Component } from 'react';

/**
 * Component Node creates the nodes for the components to be shown in 
 * in the Components panel.  They can be represented as words, buttons, etc.
 * This also recursively includes the subcomponents/children of each component.
 * If the button is clicked, the function is called to change selectedComponent
 * and update the Properties panel to match the clicked component.
 */


// http://stackoverflow.com/questions/31413023/toggle-background-color-of-list-on-click-react-js

export default class ComponentNode extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: this.props.name,
			// type: this.props.type,
			id: this.props.id,
			isToggleOn: true,
			buttonColor: 'default'
		}
		/*if (this.props.selectedComponent == this.props.id) {
			console.log(true)
			this.state.buttonColor = 'lightgreen'
		} 
		else this.state.buttonColor = 'default'
*/
		this.handleClick = this.handleClick.bind(this);
		this.handleToggle = this.handleToggle.bind(this);
	}

	handleClick() {

		this.props.onClickFunction(this.state.id)
	};

	handleToggle() {
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn
		}));
	}

	render() {
		// If component has subcomponents, add the subcomponents to the list
		var subComps = "";
		if (this.props.subcomponents && this.state.isToggleOn) {
			subComps = this.props.subcomponents.map(({$Name, Uuid, $Components}) =>
				(<ComponentNode name={$Name} id={Uuid} subcomponents={$Components}onClickFunction={this.props.onClickFunction} selectedComponent={this.props.selectedComponent}/>)
			)
		}

		return (
			<div>
				{this.props.subcomponents ? (<button onClick={this.handleToggle}>{this.state.isToggleOn ? '-' : '+'}</button>) : ("")}
				<button onClick={this.handleClick} style={{backgroundColor:this.state.buttonColor}}> {this.state.name} </button>
				<div style={{marginLeft:'1.5em'}}>{subComps}</div>
			</div>
		)
	}
}