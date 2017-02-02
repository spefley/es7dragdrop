import React, { Component, PropTypes } from 'react';
import { DropTarget } from 'react-dnd';
import Item from './s_Item';

const target = {
	drop() {}, 

	hover(props, monitor) {
		const {id: draggedId, parent, items} = monitor.getItem()

		if (!monitor.isOver({shallow: true})) {
			return;
		}

		const childNode = props.find(props.parent, items)
		if (childNode) {
			return;
		}

		if (parent === props.parent || draggedId === props.parent) {
			return;
		}

		props.move(draggedId, props.id, props.parent)
	}
}

@DropTarget('ITEM', target, (connect, monitor) => ({
	connectDropTarget: connect.dropTarget()
}))
export default class Tree extends Component {
	static propTypes = {
		items: PropTypes.array.isRequired,
		parent: PropTypes.any,
		move: PropTypes.func.isRequired, 
		find: PropTypes.func.isRequired
	};

	render() {
		const {connectDropTarget, items, parent, move, find} = this.props 

		return connectDropTarget(
			<div style={{
				border: '1px dotted black', 
				padding: '0.5rem',
				margin: '0.5rem',
				cursor: 'move', 
			}}>
				{items.map((item, i) => {
					return <Item 
						key={item.Uuid}
						id={item.Uuid}
						parent={parent}
						item={item}
						move={move}
						find={find}
					/>
				})}
			</div>
		)
	}
}