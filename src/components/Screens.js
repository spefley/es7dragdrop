import React, { Component } from 'react';

/**
 * AIComponents creates the Components panel with the nested components
 * and their buttons.  The buttons will change the Properties panel 
 * when clicked.
 */

const screen_tab_style = {
	border: '1px solid black',
	backgroundColor: 'lightyellow',
	padding: '0.5em',
	float: 'left',
	position: 'relative',
	cursor: 'default'
}

			/*	{screens.map(({name, Uuid}) => {
					var tabColor = this.props.selectedScreen == Uuid ? 'pink' : 'lightyellow';
					return (<div style={{...screen_tab_style, backgroundColor:{tabColor}}}>
						<a onClick={() => screenPanel.props.chooseScreen(Uuid)}>{name}</a>
						<br/>
					</div>
					)
				})}*/

export default class Screens extends Component {
	render () {

		var screens = [];
		this.props.components.forEach(function(obj) {
				if (obj.componentType === "Form") {
					screens.push(obj)
				}
			});

		var screenPanel = this;

		return (
			<div>
				<button onClick={() => this.props.addComponent("Form", null)}>Add Screen</button>
				<button onClick={() => this.props.removeScreen(screenPanel.props.selectedScreen, screenPanel.props.components)}>Remove Screen</button>
				<br/>
				{screens.map(({name, Uuid}) => {
					var tabColor = this.props.selectedScreen == Uuid ? 'pink' : 'lightyellow';
					return (<div style={{...screen_tab_style, backgroundColor:tabColor}}>
						<a onClick={() => screenPanel.props.chooseScreen(Uuid)}>{name}</a>
						<br/>
					</div>
					)
				})}
			</div>
		);
	}
}