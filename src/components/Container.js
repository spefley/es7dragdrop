import React, { Component } from 'react';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import Dustbin from './Dustbin';
import Box from './Box';
import ItemTypes from './ItemTypes';

import SourceBox from './ns_SourceBox';
import Tree from './s_Tree';

const style = {
  width: 400,
};

@DragDropContext(HTML5Backend)
export default class Container extends Component {

  constructor(props) {
    super(props);
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
    if (id === afterId) {
      return;
    }

    let {tree} = this.state 

    const removeNode = (id, items) => {
      for (const node of items) {
        if (node.id === id) {
          items.splice(items.indexOf(node), 1)
          return
        }

        if (node.children && node.children.length) {
          removeNode(id, node.children)
        }
      }
    }

    const item = {...this.findItem(id, tree)}
    if (!item.id) {
      return
    }

    const dest = nodeId ? this.findItem(nodeId, tree).children : tree

    if (!afterId) {
      removeNode(id, tree)
      dest.push(item)
    } else {
      const index = dest.indexOf(dest.filter(v => v.id === afterId).shift())
      removeNode(id, tree)
      dest.splice(index, 0, item)
    }

    this.setState({tree})
  }

  findItem(id, items) {
    for (const node of items) {
      if (node.id === id) {
        return node
      }

      if (node.children && node.children.length) {
        const result = this.findItem(id, node.children)
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


        <div>
          <Tree 
            parent={null}
            items={tree}
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