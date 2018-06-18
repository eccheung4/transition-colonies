import { applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'

const logger = createLogger({
  collapsed: true,
})

let middleware = []

if (typeof window !== 'undefined' && process.env.NODE_ENV !== 'production') {
  middleware = [...middleware, logger]
}

export default applyMiddleware(...middleware)
