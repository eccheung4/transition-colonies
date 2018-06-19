import { combineReducers } from 'redux'
import colonyReducer from './reducers/colonyReducer'
import domainReducer from './reducers/domainReducer'
import networkReducer from './reducers/networkReducer'
import taskReducer from './reducers/taskReducer'
import tokenReducer from './reducers/tokenReducer'

const reducers = combineReducers({
  colony: colonyReducer,
  domain: domainReducer,
  network: networkReducer,
  task: taskReducer,
  token: tokenReducer,
})

export default reducers
