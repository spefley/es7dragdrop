/**
 * Given the data array of component objects, puts together the content
 * that will be in the Scheme file.
 * This is a nested object, where the Components for each component is
 * an array of its children objects
 * ASSUMPTION: there is only one screen in the project (i.e. returns 
 * an object of 1 screen, not an array of multiple screen objects)
 * @return proj (object): JSON object that will be in the Scheme file
 */
export function create_tree(arr) {
	var allObjs = {}
	var proj = {};

	allObjs = create_all_objects(arr);

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

		if (entry["componentType"] === "Form") proj = allObjs[entryId];
	}

	// console.log(proj)
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
		var entry = arr[i];
		var obj = {};
		obj["$Name"] = entry["name"];
		obj["Uuid"] = entry["Uuid"];
		
		var id = entry["Uuid"];
		objs[id] = obj;
	} 
	return objs;
}