import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'

import App from './App'
import noteService from './services/notes'
import filter from './reducers/filterReducer'
import notes, { setNotes } from './reducers/noteReducer'

const store = configureStore({
  reducer: {
    filter,
    notes,
  }
})

noteService.getAll().then(notes =>
  store.dispatch(setNotes(notes))
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)