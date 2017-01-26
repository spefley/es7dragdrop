import { combineReducers } from 'redux'
import dustbins from './dustbins'
import components from './components'

const todoApp = combineReducers({
  dustbins,
  components
})

export default todoApp
