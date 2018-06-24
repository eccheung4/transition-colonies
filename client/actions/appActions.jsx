import { store } from '../index'
import * as actions from '../constants/actions'
import * as colonyActions from './colonyActions'
import * as domainsActions from './domainsActions'
import * as fundsActions from './fundsActions'
import * as skillsActions from './skillsActions'
import * as tasksActions from './tasksActions'
import * as tokenActions from './tokenActions'

// logout

export const logout = () => ({
  type: actions.LOGOUT,
  payload: setTimeout(() => {
    store.dispatch(colonyActions.setStateColonyClient(null))
    store.dispatch(domainsActions.setStateDomains(null))
    store.dispatch(fundsActions.setStateClaimableFunds(null))
    store.dispatch(fundsActions.setStatePots(null))
    store.dispatch(skillsActions.setStateSkills(null))
    store.dispatch(tasksActions.setStateTask(null))
    store.dispatch(tasksActions.setStateTasks(null))
    store.dispatch(tokenActions.setStateToken(null))
  }),
})
