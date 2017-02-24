import selectedScreen from './selectedScreen'

describe('selectedScreen reducer',() => {
	it('should return the initial state', () => {
		expect(
			selectedScreen("", {})
		).toEqual("")

		expect(
			selectedScreen(undefined, {})
		).toEqual(undefined)
	})

	it('should handle ADD_NEW_COMPONENT', () => {
		expect(
			selectedScreen("0", {
				type: 'ADD_NEW_COMPONENT',
				name: "Form2",
				componentType:"Form",
				Uuid:"2",
				version:"1",
				screenId:"0"
			})
		).toEqual("2")

		expect(
			selectedScreen("1", {
				type: 'ADD_NEW_COMPONENT',
				name: "Button3",
				componentType:"Button",
				Uuid:"3",
				version:"1",
				screenId:"0"
			})
		).toEqual("1")
	})

	it('should handle SELECT_SCREEN', () => {
		expect(
			selectedScreen("0", {
				type: 'SELECT_SCREEN',
				id:"0"
			})
		).toEqual("0")
	})

	it('should handle DELETE_COMPONENT', () => {
		expect(
			selectedScreen("0", {
				type: 'DELETE_COMPONENT',
				id:"0",
				selectedScreen: "0",
				deleteScreen: true
			})
		).toEqual("0")

		expect(
			selectedScreen("0", {
				type: 'DELETE_COMPONENT',
				id:"0",
				selectedScreen: "0",
				deleteScreen: false
			})
		).toEqual("0")

		expect(
			selectedScreen("0", {
				type: 'DELETE_COMPONENT',
				id:"2",
				selectedScreen: "0",
				deleteScreen: false
			})
		).toEqual("0")


		expect(
			selectedScreen("1", {
				type: 'DELETE_COMPONENT',
				id:"1",
				selectedScreen: "1",
				deleteScreen: true
			})
		).toEqual("0")


		expect(
			selectedScreen("1", {
				type: 'DELETE_COMPONENT',
				id:"2",
				selectedScreen: "1",
				deleteScreen: false
			})
		).toEqual("1")


	})	
})






































