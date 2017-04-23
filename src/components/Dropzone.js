import React, { Component, PropTypes } from 'react';
import { DropTarget } from 'react-dnd';
import { DragSourceTypes } from "../constants/DragSourceTypes";

const target = {
	canDrop(props) {
		return true; 
	},

	hover(props, monitor) {
	},

	drop(props, monitor, component) {
		if (monitor.didDrop()) {
			return;
		}
		console.log(props.item.Uuid, props, component);
		// check if id is already in the list of items, if not, insert, otherwise, move
		return {
			uuid: props.item.Uuid,
			type: props.item.type,
            dropZoneType: props.dropZoneType
		};
	}
}

const dropzone_style_visible = {
    width: '100%',
    height: '10px',
    background: 'blue'
}

const dropzone_style_not_visible = {
    width: '100%',
    height: '0px',
    opacity: '0'
}

const dropzone_drop_area = {
    width: '100%',
    margin: '10px 0',
    top: '-5px',
    position: 'relative'
}

@DropTarget(DragSourceTypes.COMPONENT, target, (connect, monitor) => ({
	connectDropTarget: connect.dropTarget(),
	isOver: monitor.isOver({ shallow: true }),
}))
export default class Dropzone extends Component {
	static propTypes = {
		isVisible: PropTypes.bool.isRequired,
		item: PropTypes.object.isRequired, 
        dropZoneType: PropTypes.string.isRequired 
    }

    render() {
        const {connectDropTarget} = this.props;
        let style = dropzone_style_not_visible;
        if (this.props.isVisible) {
            style = dropzone_style_visible
        }

        return connectDropTarget(
            <div style={dropzone_drop_area}>
                <div style={dropzone_style_visible}>
                </div>
            </div>
        );
    }
}