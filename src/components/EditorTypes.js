import React, { PropTypes, Component } from 'react';

let defType = <button type="button">Upload/Color</button>;

export class TextArea extends Component {
  render() {
    return <textarea value={this.props.value}></textarea>;
  }
}
export class HorizontalAlignment extends Component {
	render() {
		return (
			<select value={this.props.value}>
				<option value="1">Left: 1</option>
				<option value="3">Center: 3</option>
				<option value="2">Right: 2</option>
			</select>
		);
	}
}
export class VerticalAlignment extends Component {
	render() {
		return (
			<select value={this.props.value}>
				<option value="1">Top: 1</option>
				<option value="2">Center: 2</option>
				<option value="3">Bottom: 3</option>
			</select>
		);
	}
}
export class StringInput extends Component {
	render() {
		return <input type="text" value={this.props.value}/>;
	}
}
export class ColorInput extends Component {
	render() {
		return defType;
	}
}
export class Asset extends Component {
	render() {
		return defType;
	}
}
export class ScreenAnimation extends Component {
	render() {
		return (
			<select value={this.props.value}>
				<option value="default">Default</option>
				<option value="fade">Fade</option>
				<option value="zoom">Zoom</option>
				<option value="slide_horizontal">SlideHorizontal</option>
				<option value="slide_vertical">SlideVertical</option>
				<option value="none">None</option>
			</select>
		);
	}
}
export class ScreenOrientation extends Component {
	render() {
		return (
			<select value={this.props.value}>
				<option value="unspecified">Unspecified</option>
				<option value="portrait">Portrait</option>
				<option value="landscape">Landscape</option>
				<option value="sensor">Sensor</option>
				<option value="user">User</option>
			</select>
		);
	}
}
export class Bool extends Component {
	render() {
		return <input type="checkbox" value={this.props.value}/>;
	}
}
export class Sizing extends Component {
	render() {
		return (
			<select value={this.props.value}>
				<option value="Fixed">Fixed</option>
				<option value="Responsive">Responsive</option>
			</select>
		);
	}
}
export class NonNegativeInteger extends Component {
	render() {
		return <input type="number" min="0" step="1" value={this.props.value}/>;
	}
}
export class AccelerometerSensitivity extends Component {
	render() {
		return (
			<select value={this.props.value}>
				<option value="1">weak</option>
				<option value="2">moderate</option>
				<option value="3">strong</option>
			</select>
		);
	}
}
export class Float extends Component {
	render() {
		return <input type="number" step="0.01" value={this.props.value}/>;
	}
}
export class Typeface extends Component {
	render() {
		return (
			<select value={this.props.value}>
				<option value="0">{"default"}</option>
				<option value="1">san serif</option>
				<option value="2">serif</option>
				<option value="3">monospace</option>
			</select>
		);
	}
}
export class ButtonShape extends Component {
	render() {
		return (
			<select value={this.props.value}>
				<option value="0">{"default"}</option>
				<option value="1">rounded</option>
				<option value="2">rectangular</option>
				<option value="3">oval</option>
			</select>
		);
	}
}
export class TextAlignment extends Component {
	render() {
		return (
			<select value={this.props.value}>
				<option value="0">left: 0</option>
				<option value="1">center: 1</option>
				<option value="2">right: 2</option>
			</select>
		);
	}
}
export class Visibility extends Component {
	render() {
		return <input type="checkbox" value={this.props.value}/>;
	}
}
export class NonNegativeFloat extends Component {
	render() {
		return <input type="number" min="0" step="0.01" value={this.props.value}/>
	}
}
export class BluetoothClient extends Component {
	render() {
		return defType;
	}
}
export class LegoEv3ColorSensorMode extends Component {
	render() {
		return (
			<select value={this.props.value}>
				<option value="reflected">reflected</option>
				<option value="ambient">ambient</option>
				<option value="color">color</option>
			</select>
		);
	}
}
export class LegoEv3SensorPort extends Component {
	render() {
		return (
			<select value={this.props.value}>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
			</select>
		);
	}
}
export class LegoEV3GyroSensorMode extends Component {
	render() {
		return (
			<select value={this.props.value}>
				<option value="angle">angle</option>
				<option value="rate">rate</option>
			</select>
		);
	}
}
export class LegoEv3UltrasonicSensorMode extends Component {
	render() {
		return (
			<select value={this.props.value}>
				<option value="cm">cm</option>
				<option value="inch">inch</option>
			</select>
		);
	}
}
export class FirbaseURL extends Component {
	render() {
		return (
			<span>
				<input type="text" value={this.props.value}/>
				<input type="checkbox" value={this.props.value}/>
			</span>
		);
	}
}
export class SensorDistInterval extends Component {
	render() {
		return (
			<select value={this.props.value}>
				<option value="5">0</option>
				<option value="6">1</option>
				<option value="10">10</option>
				<option value="100">100</option>
			</select>
		);
	}
}
export class SensorTimeInterval extends Component {
	render() {
		return (
			<select value={this.props.value}>
				<option value="0">0</option>
				<option value="1000">1000</option>
				<option value="10000">10000</option>
				<option value="60000">60000</option>
				<option value="300000">300000</option>
			</select>
		);
	}
}
export class ToastLength extends Component {
	render() {
		return (
			<select value={this.props.value}>
				<option value="0">Short</option>
				<option value="1">Long</option>
			</select>
		);
	}
}
export class LegoNxtGeneratedColor extends Component {
	render() {
		return defType;
	}
}
export class LegoNxtSensorPort extends Component {
	render() {
		return (
			<select value={this.props.value}>
				<option value="1">1</option>
				<option value="2">2</option>
				<option value="3">3</option>
				<option value="4">4</option>
			</select>
		);
	}
}
export class Countries extends Component {
	render() {
		const allCountries = [
			{name: "Default", val: "Default"}, 
			{name: "AUS", val: "AUS"}, 
			{name: "AUT", val: "AUT"}, 
			{name: "BEL", val: "BEL"}, 
			{name: "BLZ", val: "BLZ"}, 
			{name: "BWA", val: "BWA"}, 
			{name: "CAN", val: "CAN"}, 
			{name: "DEU", val: "DEU"}, 
			{name: "ESP", val: "ESP"}, 
			{name: "FRA", val: "FRA"}, 
			{name: "GBR", val: "GBR"}, 
			{name: "HKG", val: "HKG"}, 
			{name: "IND", val: "IND"}, 
			{name: "IRL", val: "IRL"}, 
			{name: "ITA", val: "ITA"}, 
			{name: "JAM", val: "JAM"}, 
			{name: "LIE", val: "LIE"}, 
			{name: "LUX", val: "LUX"}, 
			{name: "MCO", val: "MCO"}, 
			{name: "MHL", val: "MHL"}, 
			{name: "MLT", val: "MLT"}, 
			{name: "NAM", val: "NAM"}, 
			{name: "NZL", val: "NZL"}, 
			{name: "PAK", val: "PAK"}, 
			{name: "PHL", val: "PHL"}, 
			{name: "SGP", val: "SGP"}, 
			{name: "TTO", val: "TTO"}, 
			{name: "USA", val: "USA"}, 
			{name: "VIR", val: "VIR"}, 
			{name: "ZAP", val: "ZAP"}, 
			{name: "ZWE", val: "ZWE"}
		];
		return (
			<select value={this.props.value}>
				{allCountries.map(({name, val}) => 
					<option value={val}>{name}</option>
				)}
			</select>
		);
	}
}
export class Languages extends Component {
	render() {
		const allLanguages = [
			{name: "Default", val: "Default"},
			{name: "de", val: "de"},
			{name: "en", val: "en"},
			{name: "es", val: "es"},
			{name: "fr", val: "fr"},
			{name: "it", val: "it"}
		]
		return (
			<select value={this.props.value}>
				{allLanguages.map(({name, val}) => 
					<option value={val}>{name}</option>
				)}
			</select>
		);
	}
}
export class TextReceiving extends Component {
	render() {
		return (
			<select value={this.props.value}>
				<option value="1">Off</option>
				<option value="2">Foreground</option>
				<option value="3">Always</option>
			</select>
		);
	}
}

let EditorTypes = {TextArea, HorizontalAlignment, VerticalAlignment, StringInput, ColorInput, Asset, ScreenAnimation, ScreenOrientation, Bool, Sizing, NonNegativeInteger, AccelerometerSensitivity, Float, Typeface, ButtonShape, TextAlignment, Visibility, NonNegativeFloat, BluetoothClient, LegoEv3ColorSensorMode, LegoEv3SensorPort, LegoEV3GyroSensorMode, LegoEv3UltrasonicSensorMode, FirbaseURL, SensorDistInterval, SensorTimeInterval, ToastLength, LegoNxtGeneratedColor, LegoNxtSensorPort, Countries, Languages, TextReceiving
};
export default EditorTypes;
