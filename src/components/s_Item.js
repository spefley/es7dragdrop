import React, { Component, PropTypes } from 'react';
import { DragSource, DropTarget } from 'react-dnd';
import Tree from './s_Tree';
import { DragSourceTypes } from '../constants/DragSourceTypes';
import Dropzone from './Dropzone';

const style = {
	padding: '0.5em'
}

const source = {
	beginDrag(props) {
		return {
			id: props.id, 
		}
	}, 

	endDrag(props, monitor, component) {
		const dropTargetUuid = monitor.getDropResult().uuid;
		//TODO (spefley) improve LOL 
		//debugger;

		//component.props.onClick(props.compType);
		component.props.move(props.id, dropTargetUuid);
	}
}

const target = {
	canDrop(props) {
		return true; 
	},

	drop(props, monitor, component) {
		if (monitor.didDrop()) {
			return;
		}
		console.log(props.item.Uuid, props, component);
		// check if id is already in the list of items, if not, insert, otherwise, move
		return {
			uuid: props.item.Uuid,
			type: props.item.type
		};
	}
}

@DropTarget(DragSourceTypes.COMPONENT, target, (connect, monitor) => ({
	connectDropTarget: connect.dropTarget(),
	 isOver: monitor.isOver({ shallow: true }),
}))
@DragSource(DragSourceTypes.COMPONENT, source, (connect) => ({
	connectDragSource: connect.dragSource(), 
}))
export default class Item extends Component {
	static propTypes = {
		id: PropTypes.any.isRequired,
		parent: PropTypes.any, 
		item: PropTypes.object, 
		move: PropTypes.func, 
		find: PropTypes.func,
        onDrop: PropTypes.func.isRequired,
	};

	constructor(props) {
		super(props);
		this.state = {isToggleOn: false};
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState(prevState => ({
			isToggleOn: !prevState.isToggleOn
		}));
	}

	render() {
		const {connectDropTarget, connectDragSource, 
			item, item: {Uuid, $Name, $Components}, parent, move, find} = this.props;
		let children = $Components
		if ($Components === undefined) {
			children = []
		}

		let backgroundColor= 'white';
		if (this.state.isToggleOn) {
			backgroundColor = 'lightgreen'
		}

		const selectedComponent = this.props.selectedComponent 

		//console.log(Uuid,$Name, $Components, parent)
		let display = "block"
		if(children.length != 0) {
		  display = "block"
		} else {
		  display = "none"
		}

		return connectDropTarget(
			<div>
				{connectDragSource(
					<div onClick={this.handleClick} style={{...style, backgroundColor }}>
					{$Name}</div>
				)}
				<div style={{display}}>
					<Dropzone
						isVisible={this.hasContentDropzone(item.type) && this.props.isOver}
					/>
					<Tree 
						parent={Uuid}
						items={children}
						move={move}
						find={find}
					/>
				</div>
				<Dropzone
					isVisible={this.hasAfterDropzone(item.type) && this.props.isOver}
				/>
			</div>
		)
	}

	hasAfterDropzone(type) {
		return type !== "Form";
	}

	hasContentDropzone(type) {
		return type === "HorizontalArrangement" ||
			type === "HorizontalScrollArrangement" ||
			type === "TableArrangement" ||
			type === "VerticalArrangement" ||
			type === "VerticalScrollArrangement" ||
			type === "Form";
		// TODO: jank begets jank
	}
}