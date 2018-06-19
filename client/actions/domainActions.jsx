import { store } from '../index'
import * as actions from '../constants/actions'
import * as domainActions from '../helpers/actions/domainActions'

// getDomains

export const getDomains = (colonyClient) => ({
  type: actions.GET_DOMAINS,
  payload: domainActions.getDomains(colonyClient)
    .then(domain => {
      store.dispatch(setStateDomains(domain))
      store.dispatch(getDomainsSuccess())
    })
    .catch(error => {
      store.dispatch(getDomainsError(error.message))
    }),
})

export const getDomainsError = (message) => ({
  type: actions.GET_DOMAINS_ERROR,
  payload: message,
})

export const getDomainsSuccess = (message) => ({
  type: actions.GET_DOMAINS_SUCCESS,
  payload: message,
})

// setStateDomains

export const setStateDomains = (domains) => ({
  type: actions.SET_STATE_DOMAINS,
  payload: domains,
})
