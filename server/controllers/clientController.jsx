import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import middleware from '../../client/middleware'
import reducers from '../../client/reducers'
import App from '../../client/containers/App'

export default (request, response) => {
  const context = {}
  const store = createStore(reducers, middleware)
  const html = renderToString(
    <Provider store={store}>
      <StaticRouter location={request.url} context={context}>
        <Route path="/" component={App} />
      </StaticRouter>
    </Provider>,
  )
  if (context.url) {
    response.writeHead(301, {
      Location: context.url,
    })
    response.end()
  } else {
    response.send(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Transition Market</title>
      </head>
      <body>
        <div id="app">${html}</div>
        <script type="text/javascript" src="/index.min.js"></script>
      </body>
    </html>`)
    response.end()
  }
}
