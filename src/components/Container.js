import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Dustbin from './Dustbin';
import Box from './Box';
import ItemTypes from './ItemTypes';

import SourceBox from './ns_SourceBox';
import Tree from './s_Tree';
import { create_tree } from './ComponentTree'
import { moveComponent } from '../actions'

const style = {
  width: 400,
};

export default class Container extends Component {

  constructor(props) {
    super(props);
    
    var nestedTree = create_tree(this.props.components);

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


  render() {

    //const { items } = this.state;
    const {tree} = this.state

    const nestedTree = create_tree(this.props.components)

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
            move={this.moveItem}
            find={this.findItem}
          />
        </div>
      </div>
    );
  }

  moveItem = (id, afterId, nodeId) => {
    this.props.moveComp(id, afterId, nodeId);
  }

  findItem = (id, items) => {

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
}