import { combineReducers } from 'redux'
import colonyReducer from './reducers/colonyReducer'
import networkReducer from './reducers/networkReducer'
import taskReducer from './reducers/taskReducer'
import tokenReducer from './reducers/tokenReducer'

const reducers = combineReducers({
  colony: colonyReducer,
  network: networkReducer,
  task: taskReducer,
  token: tokenReducer,
})

export default reducers
