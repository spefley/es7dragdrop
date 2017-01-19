import React from 'react'
import Footer from './Footer'
import AddTodo from '../containers/AddTodo'
import VisibleTodoList from '../containers/VisibleTodoList'
import DragContainer from '../containers/DragContainer'
import Container from './Container';

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
    <DragContainer />
  </div>
)

export default App
