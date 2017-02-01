import React, {Component, PropTypes} from 'react';
import {findDOMNode} from 'react-dom';
import {DragSource, DropTarget} from 'react-dnd';
import ItemTypes from './ItemTypes';

const style = {
	border: '1px dashed gray', 
	padding: '0.5rem 1rem', 
	marginBottom: '.5rem', 
	backgroundColor: 'white',
	cursor: 'move',
};

const itemSource = {
	beginDrag(props) {
		return {
			id: props.id, 
			index: props.index,
		};
	},
};

const itemTarget = {
	hover(props, monitor, component) {
		const dragIndex = monitor.getItem().index;
		const hoverIndex = props.index;

		// Don't replace items with themselves
		if (dragIndex === hoverIndex) {
			return;
		}

		const hoverBoundingRect = findDOMNode(component).getBoundingClientRect();
		const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top)/2
		const clientOffset = monitor.getClientOffset();
		const hoverClientY = clientOffset.y - hoverBoundingRect.top;

		// Dragging down
		if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
			return;
		}

		// Dragging up
		if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
			return;
		}

		props.moveItem(dragIndex, hoverIndex);
		monitor.getItem().index = hoverIndex;
	},
};

@DropTarget('ITEM', itemTarget, connect => ({
	connectDropTarget: connect.dropTarget(),
}))
@DragSource('ITEM', itemSource, (connect, monitor) => ({
	connectDragSource: connect.dragSource(), 
	isDragging: monitor.isDragging(),
}))
export default class Item extends Component {
	static propTypes = {
		connectDragSource: PropTypes.func.isRequired,
    	connectDropTarget: PropTypes.func.isRequired,
    	index: PropTypes.number.isRequired,
    	isDragging: PropTypes.bool.isRequired,
    	id: PropTypes.any.isRequired,
    	text: PropTypes.string.isRequired,
    	moveItem: PropTypes.func.isRequired
    };

    render() {
    	const { text, isDragging, connectDropTarget, connectDragSource } = this.props;
    	const opacity = isDragging ? 0 : 1;

    	return connectDragSource(connectDropTarget(
    		<div style={{ ...style, opacity}}>
    			{text}
    		</div>,
    	));
    }

}









