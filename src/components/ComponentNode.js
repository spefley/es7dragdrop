import React, { Component } from 'react';

/**
 * Component Node creates the nodes for the components to be shown in 
 * in the Components panel.  They can be represented as words, buttons, etc.
 * This also recursively includes the subcomponents/children of each component.
 * If the button is clicked, the function is called to change selectedComponent
 * and update the Properties panel to match the clicked component.
 */

/*
class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}> 
        {this.state.isToggleOn ? '-' : '+'}
      </button>
    );
  }
}
				{this.props.subcomponents ? (<Toggle />) : ("")}
*/

export default class ComponentNode extends Component {
	constructor(props) {
		super(props);
		this.state = {
			name: this.props.name,
			// type: this.props.type,
			id: this.props.id,
		}
	}

	render() {
		// If component has subcomponents, add the subcomponents
		var subComps = "";
		if (this.props.subcomponents) {
			subComps = this.props.subcomponents.map(({$Name, Uuid, $Components}) =>
				(<ComponentNode name={$Name} id={Uuid} subcomponents={$Components}onClickFunction={this.props.onClickFunction}/>)
			)
		}

		return (
			<div>
				<button onClick={() => this.props.onClickFunction(this.state.id)}>{this.state.name}</button>
				{subComps}
			</div>
		)
	}
}