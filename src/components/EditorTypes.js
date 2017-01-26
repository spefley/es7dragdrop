import React, { PropTypes, Component } from 'react';

let defType = <button type="button">Hi</button>;
/*let editorTypes = {
	"textArea": <textarea value={prop.value}></textarea>,
	"horizontal_alignment": defType,
	"vertical_alignment": defType,
	"string": <input type="text" value={prop.value}/>,
	"color": defType,
	"asset": defType,
	"screen_animation": defType,
	"screen_orientation": defType,
	"boolean": <input type="checkbox" value={prop.value}/>,
	"sizing": <select value={prop.value}>
							<option value="fixed">Fixed</option>
							<option value="responsive">Responsive</option>
						</select>,
	"non_negative_integer": <input type="number" min="0" step="1" value={prop.value}/>
}

export default class EditorTypes extends Component {
	render() {
		return {this.props.editorType};
	}
}*/

export class textArea extends Component {
  render() {
    return <textarea value={this.props.value}></textarea>;
  }
}

export class horizontal_alignment extends Component {
	render() {
		return defType;
	}
}

export class vertical_alignment extends Component {
	render() {
		return defType;
	}
}

export class string extends Component {
	render() {
		return <input type="text" value={this.props.value}/>;
	}
}

export class color extends Component {
	render() {
		return defType;
	}
}

export class asset extends Component {
	render() {
		return defType;
	}
}

export class screen_animation extends Component {
	render() {
		return defType;
	}
}

export class screen_orientation extends Component {
	render() {
		return defType;
	}
}

export class bool extends Component {
	render() {
		return <input type="checkbox" value={this.props.value}/>;
	}
}

export class sizing extends Component {
	render() {
		return
			<select value={this.props.value}>
				<option value="fixed">Fixed</option>
				<option value="responsive">Responsive</option>
			</select>;
	}
}

export class non_negative_integer extends Component {
	render() {
		return <input type="number" min="0" step="1" value={this.props.value}/>;
	}
}

let EditorTypes = {textArea, horizontal_alignment, vertical_alignment, string, color, asset, screen_animation, screen_orientation, bool, sizing, non_negative_integer};
export default EditorTypes;
