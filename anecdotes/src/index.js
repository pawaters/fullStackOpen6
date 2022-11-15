import React from 'react'
import ReactDOM from 'react-dom/client'
// import { createStore } from 'redux' - replaced by store with thunk
import { Provider } from 'react-redux'
import App from './App'
// import reducer from './reducers/anecdoteReducer'
import store from './store'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
