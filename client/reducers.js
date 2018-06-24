import { combineReducers } from 'redux'
import colonyReducer from './reducers/colonyReducer'
import domainsReducer from './reducers/domainsReducer'
import networkReducer from './reducers/networkReducer'
import skillsReducer from './reducers/skillsReducer'
import tasksReducer from './reducers/tasksReducer'
import tokenReducer from './reducers/tokenReducer'

const reducers = combineReducers({
  colony: colonyReducer,
  domains: domainsReducer,
  network: networkReducer,
  skills: skillsReducer,
  tasks: tasksReducer,
  token: tokenReducer,
})

export default reducers
