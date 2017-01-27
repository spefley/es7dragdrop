import React, { PropTypes, Component } from 'react';
import simple_components from './simple_components';
import EditorTypes from './EditorTypes';

export default class Properties extends Component {
  render() {
		// Get list of properties for specific component	
		var simpleComponents = simple_components.simpleComponents;
		var componentProperties = [];
		for (var j=0; j<simpleComponents.length;j++) {
			if (simpleComponents[j].name==="Form") {
				componentProperties = simpleComponents[j]["properties"];
			}
			else {
				console.log('hello')
			}
		}

		console.log(EditorTypes)

		var typeToHTML = {
			"textArea": <EditorTypes.TextArea />,
			"horizontal_alignment": <EditorTypes.HorizontalAlignment />,
			"vertical_alignment": <EditorTypes.VerticalAlignment />,
			"string": <EditorTypes.StringInput />,
			"color": <EditorTypes.ColorInput />,
			"asset": <EditorTypes.Asset />,
			"screen_animation": <EditorTypes.ScreenAnimation />,
			"screen_orientation": <EditorTypes.ScreenOrientation />,
			"boolean": <EditorTypes.Bool />,
			"sizing": <EditorTypes.Sizing />,
			"non_negative_integer": <EditorTypes.NonNegativeInteger />,
			"accelerometer_sensitivity": <EditorTypes.AccelerometerSensitivity />,
			"float": <EditorTypes.Float />,
			"typeface": <EditorTypes.Typeface />,
			"button_shape": <EditorTypes.ButtonShape />,
			"textalignment": <EditorTypes.TextAlignment />,
			"visibility": <EditorTypes.Visibility />,
			"non_negative_float": <EditorTypes.NonNegativeFloat />,
			"BluetoothClient": <EditorTypes.BluetoothClient />,
			"lego_ev3_color_sensor_mode": <EditorTypes.LegoEv3ColorSensorMode />,
			"lego_ev3_sensor_port": <EditorTypes.LegoEv3SensorPort />,
			"lego_ev3_gyro_sensor_mode": <EditorTypes.LegoEV3GyroSensorMode />,
			"lego_ev3_ultrasonic_sensor_mode": <EditorTypes.LegoEv3UltrasonicSensorMode />,
			"FirbaseURL": <EditorTypes.FirbaseURL />,
			"sensor_dist_interval": <EditorTypes.SensorDistInterval />,
			"sensor_time_interval": <EditorTypes.SensorTimeInterval />,
			"toast_length": <EditorTypes.ToastLength />,
			"lego_nxt_generated_color": <EditorTypes.LegoNxtGeneratedColor />,
			"lego_nxt_sensor_port": <EditorTypes.LegoNxtSensorPort />,
			"countries": <EditorTypes.Countries />,
			"languages": <EditorTypes.Languages />,
			"text_receiving": <EditorTypes.TextReceiving />
		}


		var editorTypeArr = [];
		for (var i=0; i<componentProperties.length; i++) {
			var propertyType = typeToHTML[componentProperties[i].editorType];
			if (propertyType) {
				editorTypeArr.push({"name":componentProperties[i].name, "editorType":propertyType, "defaultValue": componentProperties[i].defaultValue});
			}
			else {
				editorTypeArr.push({"name":componentProperties[i].name, "editorType":<button type="button">Hi</button>, "defaultValue": "Hi"});
			}
		}

		console.log(editorTypeArr[0])
		return (
			<div>
				{editorTypeArr.map(({name, editorType}) =>
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