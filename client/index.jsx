import React from 'react'
import { createStore } from 'redux'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import { hydrate } from 'react-dom'
import middleware from './middleware'
import reducers from './reducers'
import App from './containers/App'
import './index.scss'

const store = createStore(reducers, middleware)

if (typeof window !== 'undefined') {

  hydrate(
    <Provider store={store}>
      <BrowserRouter>
        <Route path="/" component={App} />
      </BrowserRouter>
    </Provider>,
    document.getElementById('app'),
  )

}

export { store }
