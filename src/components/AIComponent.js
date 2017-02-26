
import React, { PropTypes, Component } from 'react';
import { DragSource } from 'react-dnd';
import { DragSourceTypes } from '../constants/DragSourceTypes';

@DragSource(DragSourceTypes.COMPONENT, {beginDrag}, collect)
export default class AIComponent extends Component {
	static propTypes = {
        compType: PropTypes.string.isRequired,
        onClick: PropTypes.func.isRequired,
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

function collect(connect, monitor) {
	return {
		connectDragSource: connect.dragSource(),
	};
};