import React, { PropTypes, Component } from 'react';
import simple_components from './simple_components';
import EditorTypes from './EditorTypes';

export default class Properties extends Component {
  render() {
		
	var simpleComponents = simple_components.simpleComponents;
	/*let edType = <EditorTypes editorType="textarea"/>;
	console.log(edType);*/
	// console.log(EditorTypes)
		var formProp = [];
		for (var j=0; j<simpleComponents.length;j++) {
			if (simpleComponents[j].name==="Form") {
				formProp = simpleComponents[j]["properties"];
			}
			else {
				console.log('hello')
			}
		}

		var typeToHTML = {
			"textArea": <EditorTypes.textArea />,
			"non_negative_integer": <input type="number" min="0" step="1"/>,
			"string": <input type="text"/>,
			"boolean": <input type="checkbox"/>,
			"sizing": <select>
								<option value="fixed">Fixed</option>
								<option value="responsive">Responsive</option>
								</select>,
			"asset":<input type="text"/>
		};

		var editorTypeArr = [];
		for (var i=0; i<formProp.length; i++) {
			var html = typeToHTML[formProp[i].editorType];
			if (html) {
				editorTypeArr.push({"name":formProp[i].name, "editorType":html});
			}
			else {
				editorTypeArr.push({"name":formProp[i].name, "editorType":<button type="button">Hi</button>});
			}
		}

		return (
			<div>
				{editorTypeArr.map(({name, editorType, defaultValue}) =>
					<span> {name} 
						<br/>
						{editorType}
					<br/>
					</span>
				)}
			</div>
		);
	}
}