import React, { Component } from 'react';
// import JSZip from '../createAIA/jszip.js'
// import saveAs from '../createAIA/FileSaver.js'

export default class ExportAIA extends Component {
	render() {
		return (
			<div>
				<button onClick={() => create_zip(this.props.components)}> Export project as file (.aia) to computer</button>	
				
			</div>
		)
	}
}

/** 
 * Creates the .aia file
 * Gets the data and turns it into stringified JSON object
 * Creates the folder and all subfolders (hard-coded)
 * Adds the text files (with content)into the folders.
 * Then generates the zip file itself and allows user to download it.
 * zip file is saved as "Hello.aia".
 */
function create_zip(data) {
	var zip = new window.JSZip();
	// console.log(window)
	var projectPropertiesContent = 'main=appinventor.ai_janicec124.Hello.Screen1\nname=Hello\nassets=../assets\nsource=../src\nbuild=../build\nversioncode=1\nversionname=1.0\nuseslocation=False\naname=Hello\nsizing=Fixed';
	var scmContent = '#|\n$JSON\n' + convert_scm_to_string(data) + '\n|#';
	var bkyContent = '<xml xmlns="http://www.w3.org/1999/xhtml">\n  <block type="component_event" id="1" x="1" y="1">\n    <mutation component_type="Button" instance_name="Button1" event_name="Click"></mutation>\n    <field name="COMPONENT_SELECTOR">Button1</field>\n  </block>\n  <yacodeblocks ya-version="158" language-version="20"></yacodeblocks>\n</xml>';

	var projZip = zip.folder("youngandroidproject");
	projZip.file("project.properties", projectPropertiesContent);
	
	var helloZip = zip.folder("src").folder("appinventor").folder("ai_janicec124").folder("Hello");
	helloZip.file("Screen1.bky", bkyContent);
	helloZip.file("Screen1.scm", scmContent);

	// Generates the zip and allows it to be saved as .aia file
	zip.generateAsync({type:"blob"})
	.then(function (blob) {
	    window.saveAs(blob, "Hello.aia");
	});

}

/**
 * Converts the given data array into a JSON object, then turns the object into
 * a string that will be the body content of the Scheme file.
 */
function convert_scm_to_string(arr) {
	var obj = convert_arr_to_scm(arr);
	var result = JSON.stringify(obj);
	return result;
}

/**
 * Given the data array of component objects, puts together the content
 * that will be in the Scheme file
 * @return proj (object): JSON object that will be in the Scheme file
 */
function convert_arr_to_scm(arr) {
	var allObjs = {}

	// INITIALIZE PROJECT
	var proj = {}
	proj["authURL"] = ["ai2.appinventor.mit.edu"];
	proj["YaVersion"] = "158";
	proj["Source"] = "Form";
	proj["Properties"] = {};

	allObjs = create_all_objects(arr);
	// console.log(allObjs);

	for (var i = 0; i < arr.length; i++) 
	{
		var entry = arr[i];
		var entryId = entry["Uuid"];
		if (entry.hasOwnProperty("children") && entry["children"].length > 0)
		{
			allObjs[entryId]["$Components"] = []
			for (var k = 0; k < entry["children"].length; k++)
			{
				var childId = entry["children"][k];
				if (!allObjs.hasOwnProperty(childId))
				{
					allObjs[childId] = {};
				}
				allObjs[entryId]["$Components"].push(allObjs[childId])
			}
		}

		if (entry["componentType"] === "Form")
		{
			proj["Properties"] = allObjs[entryId];
		}
	}
	return proj;
}

/** 
 * Given the data array (of component objects), creates a dictionary
 * of JSON objects that will be used in Scheme file.
 * Dictionary maps the component's unique ID to its JSON object
 */
function create_all_objects(arr) {
	var objs = {}
	// FOR EACH ENTRY IN THE ARRAY...
	for (var i = 0; i < arr.length; i++)
	{
		// INITIALIZE OBJECT AND COMMON VARIABLES
		var entry = arr[i];
		var obj = {};
		obj["$Name"] = entry["name"];
		obj["$Type"] = entry["componentType"];
		obj["$Version"] = entry["version"];
		obj["Uuid"] = entry["Uuid"];
		var id = entry["Uuid"];
		// Add all other properties
		var entryProperties = Object.keys(entry);
		for (var j = 0; j < entryProperties.length; j++)
		{
			var entryProperty = entryProperties[j];
			if (!special_property(entryProperty))
			{
				obj[entryProperty] = entry[entryProperty];
			}
		}

		objs[id] = obj;
	}
	return objs;
}

/**
 * Checks if the given property is a special property
 * "special" means that the property name in Scheme is different
 * from the property name in the JSON data
 * Ex. "name" in JSON is "$Name" in Scheme
 * @return true if property is special, else false
 */
function special_property(str) {
	var properties = ["name", "version", "Uuid", "componentType", "children"];
	return contains(str, properties);
}

/**
 * Checks if an element is in an array
 * @return true if element is in array, else false
 */
function contains(elmt, arr) {
	for (var a = 0; a < arr.length; a++)
	{
		if (arr[a] === elmt) return true;
	}
	return false;
}
