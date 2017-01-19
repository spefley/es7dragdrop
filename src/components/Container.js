import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend, { NativeTypes } from 'react-dnd-html5-backend';
import Dustbin from './Dustbin';
import Box from './Box';
import ItemTypes from './ItemTypes';
import update from 'react/lib/update';

@DragDropContext(HTML5Backend)
export default class Container extends Component {
  constructor(props) {
    super(props);
  }

  isDropped(boxName) {
    //return this.state.droppedBoxNames.indexOf(boxName) > -1;
    return false;
  }

  render() {
    //const { dustbins } = this.state;
    const dustbins = this.props.dustbins;
    //console.log(this.props.dustbins);
    
    const boxes = [
        { name: 'Bottle', type: ItemTypes.GLASS },
        { name: 'Banana', type: ItemTypes.FOOD },
        { name: 'Magazine', type: ItemTypes.PAPER }
      ]

    return (
      <div>
        <div style={{ overflow: 'hidden', clear: 'both' }}>
          {dustbins.map(({ accepts, lastDroppedItem }, index) =>
            <Dustbin accepts={accepts}
                     lastDroppedItem={lastDroppedItem}
                     onDrop={(item) => this.props.handleDrop(index, item)}
                     key={index} />
          )}
        </div>

        <div style={{ overflow: 'hidden', clear: 'both' }}>
          {boxes.map(({ name, type }, index) =>
            <Box name={name}
                 type={type}
                 isDropped={this.isDropped(name)}
                 key={index} />
          )}
        </div>
      </div>
    );
  }

}