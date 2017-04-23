
import React, { PropTypes, Component } from 'react';
import { DragSource } from 'react-dnd';
import { DragSourceTypes } from '../constants/DragSourceTypes';
import { addNewComponent } from '../actions/index';

@DragSource(DragSourceTypes.COMPONENT, {beginDrag, endDrag}, collect)
export default class Button extends Component {
	static propTypes = {
        compType: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
        onDrop: PropTypes.func.isRequired,
		connectDragSource: PropTypes.func.isRequired,
	} ;

	render() {
        const {compType, onClick, connectDragSource} = this.props;
        return connectDragSource(
            <div key={compType}>
                <button onClick={() => onClick(compType)}>
                    {compType}
                </button>
                <br/>
            </div>
        );
    }
}

function beginDrag(props, monitor, component) {
	console.log("beginning component drag", props);
	return {
		id: props.id
	};
};

function endDrag(props, monitor, component) {
    const { uuid, dropZoneType } = monitor.getDropResult();
    const dropTargetUuid = monitor.getDropResult().uuid;
    //TODO (spefley) improve LOL 
    //debugger;

    //component.props.onClick(props.compType);
    component.props.onDrop(props.compType, dropTargetUuid, dropZoneType);
};

function collect(connect, monitor) {
	return {
		connectDragSource: connect.dragSource(),
	};
};