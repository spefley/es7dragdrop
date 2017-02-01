/*var scrOnly = [{"id":"1", "version": "19", "type":"Form", "Title":"Screen1", "name": "Screen1", "AppName": "Screen"}];
var scrButtonActual = [
	{
		"type": "Button",
		"version": "6",
		"name": "Button1",
		"Text": "Hello",
		"id": "1216449460"
	},
	{
		"name": "Screen1", 
		"id":"0", 
		"type":"Form", 
		"Title":"Screen1", 
		"version":"19", 
		"AppName":"Hello", 
		"children":["1216449460"]
	}
]

var scrButtons = [
	{
		"name": "Button1",
		"type":"Button",
		"id":"-496282275",
		"version":"6",
		"Text":"Text for Button1",
	},
	{
		"name": "Screen1", 
		"type":"Form", 
		"id":"0", 
		"version": "19", 
		"Title":"Screen1", 
		"AppName":"Hello2", 
		"children":["939054039"]
	},
	{
		"name": "HorizontalArrangement1", 
		"type":"HorizontalArrangement", 
		"id":"1961822558", 
		"version": "3", 
		"children":["-496282275", "53776343"]
	},
	{
		"name": "VerticalArrangement1", 
		"type":"VerticalArrangement", 
		"id":"939054039", 
		"version": "3", 
		"children":["1961822558", "-1864349167"]
	},
	{
		"name": "PasswordTextBox1", 
		"type":"PasswordTextBox", 
		"id":"-1864349167", 
		"version": "3", 
	},
	{
		"name": "CheckBox1", 
		"type":"CheckBox", 
		"id":"53776343", 
		"version": "2", 
	}
]
*/

/**
 * Given the data array of component objects, puts together the content
 * that will be in the Scheme file.
 * This is a nested object, where the Components for each component is
 * an array of its children objects
 * @return proj (object): JSON object that will be in the Scheme file
 */
export function convert_to_scm(arr) {
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
		// console.log(entry, entryId)
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

// var data = convert_to_scm(scrButtons);
// export default data
