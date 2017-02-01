import { combineReducers } from 'redux'
import dustbins from './dustbins'
import components from './components'
import selectedComponent from './selectedComponent'

/** 
 * index.js is REDUCER combining all sub-reducers for different parts of the store
 */

const todoApp = combineReducers({
  dustbins,
  components,
  selectedComponent
})

export default todoApp
