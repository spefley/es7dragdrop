import { combineReducers } from 'redux'
import todos from './todos'
import visibilityFilter from './visibilityFilter'
import dustbins from './dustbins'

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  dustbins
})

export default todoApp
