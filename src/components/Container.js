import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Dustbin from './Dustbin';
import Box from './Box';
import ItemTypes from './ItemTypes';

import SourceBox from './ns_SourceBox';
import Tree from './s_Tree';
import { create_tree } from './helperFunctions'
import { moveComponent } from '../actions'

const style = {
  width: 400,
};

export default class Container extends Component {

  constructor(props) {
    super(props);
    
    var nestedTree = create_tree(this.props.components,"0");

    this.state = { tree: [
      {id: 1, title: 'wow', children: [
        {id: 2, title: 'yay', children: []},
        {id: 3, title: 'yeet', children: [
          {id: 4, title: 'woot', children: []}
        ]}
      ]},  
      
      {id: 5, title: 'yes', children: [
        {id: 6, title: 'meow', children: [
          {id: 7, title: 'yas', children: []}
        ]}
      ]}]
    }
  };

  moveItem(id, afterId, nodeId) {
    this.props.moveComp(id, afterId, nodeId);
  }

  findItem(id, items) {

    for (const node of items) {
      if (node.id === id) {
        return node
      }

      if (node.$Components && node.$Components.length) {
        const result = this.findItem(id, node.$Components)
        if (result) {
          return result
        }
      }
    }

    return false
  }


  /*
  constructor(props) {
    super(props);
    this.moveItem = this.moveItem.bind(this);
    this.state = { items: [{id: 1, text: 'apple', children: [{id: 2, text: 'orange'}, 
                           {id: 3, text: 'banana'}, {id: 4, text: 'grapes'}]},
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
  } */

  render() {

    //const { items } = this.state;
    const {tree} = this.state

    const nestedTree = create_tree(this.props.components,this.props.selectedScreen)

    const dustbins = this.props.dustbins
    
    const boxes = [
        { name: 'Button', type: ItemTypes.BUTTON, id: true },
        { name: 'Label', type: ItemTypes.LABEL, id: true },
        { name: 'Table', type: ItemTypes.TABLE, id: true }
      ]

    return (
      <div>

        <div>
          <Tree 
            parent={null}
            items={[nestedTree]}
            move={this.moveItem.bind(this)}
            find={this.findItem.bind(this)}
          />
        </div>

      </div>
    );
  }
}

/* 
        <div style={style}>
          {items.map((item, i) => (
            <SourceBox key={item.id} index={i} id={item.id} text={item.text} moveItem={this.moveItem}>
              <SourceBox key={item.id} index={i} id={item.id} text={item.text} moveItem={this.moveItem}>
                <SourceBox key={item.id} index={i} id={item.id} text={item.text} moveItem={this.moveItem}/>
              </SourceBox>
            </SourceBox>
          ))}
        </div>
*/