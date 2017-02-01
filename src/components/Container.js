import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Dustbin from './Dustbin';
import Box from './Box';
import ItemTypes from './ItemTypes';
import update from 'react/lib/update';

import Item from './s_Item';
import SourceBox from './ns_SourceBox';

const style = {
  width: 400,
};

@DragDropContext(HTML5Backend)
export default class Container extends Component {

  constructor(props) {
    super(props);
    this.moveItem = this.moveItem.bind(this);
    this.state = { items: [{id: 1, text: 'apple'}, {id: 2, text: 'orange'}, 
                           {id: 3, text: 'banana'}, {id: 4, text: 'grapes'}, 
                           {id: 5, text: 'berries'}, {id: 6, text: 'peach'}, 
                           {id: 7, text: 'kiwi'}, {id: 8, text: 'raspberry'}]
    };
  }

  moveItem(dragIndex, hoverIndex) {
    const {items} = this.state;
    const dragItem = items[dragIndex];

    this.setState(update(this.state, {
      items: {
        $splice: [ [dragIndex, 1], [hoverIndex, 0, dragItem], ],
      },
    }));
  }

  render() {

    const { items } = this.state;

    const dustbins = this.props.dustbins
    
    const boxes = [
        { name: 'Button', type: ItemTypes.BUTTON, id: true },
        { name: 'Label', type: ItemTypes.LABEL, id: true },
        { name: 'Table', type: ItemTypes.TABLE, id: true }
      ]

    return (
      <div>
        <div style={{overflow: 'hidden', clear: 'both' }}>
          <Dustbin droppedItems={dustbins}
                   onDrop={(item) => this.props.handleDrop(item)}
                   />        
        </div>

        <div style={{ overflow: 'hidden', clear: 'both' }}>
          {boxes.map(({ name, type, id }, index) =>
            <Box name={name}
                 type={type}
                 id={id}
                 key={index} />
          )}
        </div>

        <div style={{ overflow: 'hidden', clear: 'both', margin: '-.5rem'}}>
          <div style={{ float: 'left' }}>
            <SourceBox color={ItemTypes.PURPLE}>
              <SourceBox color={ItemTypes.GREEN}>
                <SourceBox color={ItemTypes.GREEN}/>
                <SourceBox color={ItemTypes.PURPLE}/>
              </SourceBox>
              <SourceBox color={ItemTypes.PURPLE}>
                <SourceBox color={ItemTypes.GREEN}/>
              </SourceBox>
            </SourceBox>
          </div>
        </div>

        <div style={style}>
          {items.map((item, i))}

      </div>
    );
  }
}