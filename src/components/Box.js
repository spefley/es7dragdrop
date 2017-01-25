import React, { PropTypes, Component } from 'react';
import { DragSource } from 'react-dnd';

const box_style = {
  border: '1px dashed gray',
  backgroundColor: 'white',
  padding: '0.5rem 1rem',
  marginRight: '1.5rem',
  marginBottom: '1.5rem',
  cursor: 'move',
  float: 'left'
};

const boxSource = {
  beginDrag(props) {
    return {
      name: props.name,
      type: props.type
    };
  }
};

/* working on onClick code here. commented out for now.

fix CSS for backgroundColor on Box for stationary, dragging and onClick

const Box = ({ onClick }) => (
  <li 
    onClick={onClick}
    style={{
      backgroundColor: 'lightgreen'
      
    }}
  />)
*/

@DragSource(props => props.type, boxSource, (connect, monitor) => ({
  connectDragSource: connect.dragSource(),
  isDragging: monitor.isDragging()
}))
export default class Box extends Component {
  static propTypes = {
    connectDragSource: PropTypes.func.isRequired,
    isDragging: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    //onClick: PropTypes.bool.isRequired
  };

  render() {
    const { name, isDragging, connectDragSource } = this.props;
    const opacity = isDragging ? 0.4 : 1;

    /*
    let backgroundColor = 'white';
    if (onClick) {
      backgroundColor = 'lightgreen';

    return connectDragSource(
      <div style-{{ ...style, backgroundColor }]>
        Release to Drop 

        { droppedItems &&
          <p>DroppedItems: {JSON.stringify(droppedItems)}</p>
        }

        { droppedItems.map(({ item, type }, index) => 
          <Box name ={item}
               type={type}
               key={index} />
        )}
      </div>
    )
    */

    return connectDragSource(
      <div style={{ ...box_style, opacity }}>
        {name}
      </div>
    );
  }
}