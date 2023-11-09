import React from 'react'
import ReactDOM from 'react-dom/client'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import App from './App'
import filter from './reducers/filterReducer'
import notes from './reducers/noteReducer'
import { createNote } from './reducers/noteReducer'
import { filterChange } from './reducers/filterReducer'

const reducers = combineReducers({ filter, notes })
const store = createStore(reducers)

console.log(store.getState())

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)

store.subscribe(() => console.log(store.getState()))
store.dispatch(filterChange('IMPORTANT'))
store.dispatch(createNote('combineReducers forms one reducer from many simple reducers'))