import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Dustbin from './Dustbin';
import Box from './Box';
import ItemTypes from './ItemTypes';
//import update from 'react/lib/update';

@DragDropContext(HTML5Backend)
export default class Container extends Component {
  /* constructor(props) {
    super(props);
  } */

  render() {
    //const { dustbins } = this.state;
    const dustbins = this.props.dustbins;
    //console.log(this.props.dustbins);
    
    const boxes = [
        { name: 'Button', type: ItemTypes.BUTTON },
        { name: 'Label', type: ItemTypes.LABEL },
        { name: 'Table', type: ItemTypes.TABLE }
      ]
      // onDrop is where the problem is

    return (
      <div>
        <div style={{overflow: 'hidden', clear: 'both' }}>
          <Dustbin droppedItems={dustbins}
                   onDrop={(item) => this.props.handleDrop(item)}
                   />        
        </div>

        <div style={{ overflow: 'hidden', clear: 'both' }}>
          {boxes.map(({ name, type }, index) =>
            <Box name={name}
                 type={type}
                 key={index} />
          )}
        </div>
      </div>
    );
  }

}