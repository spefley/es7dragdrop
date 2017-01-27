import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import reducer from './reducers'

/*
const store = createStore(reducer, {dustbins:[{ accepts: [ItemTypes.GLASS], lastDroppedItem: null },
        { accepts: [ItemTypes.FOOD], lastDroppedItem: null },
        { accepts: [ItemTypes.PAPER, ItemTypes.GLASS], lastDroppedItem: null },
        { accepts: [ItemTypes.PAPER], lastDroppedItem: null }]})
*/

const store = createStore(reducer, {dustbins: [], components:[{"componentType":"Form","name":"Screen1","id":1000,"AboutScreen":"Hello! This is your first app!","AlignHorizontal":"1","AlignVertical":"1","AppName":"Hello","BackgroundColor":"&HFFFFFFFF","BackgroundImage":"","CloseScreenAnimation":"default","Icon":"","OpenScreenAnimation":"default","ScreenOrientation":"unspecified","Scrollable":"False","ShowStatusBar":"True","Sizing":"Fixed","Title":"","TitleVisible":"True","VersionCode":"1","VersionName":"1.0"}] })


render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
