import { store } from '../index'
import * as actions from '../constants/actions'
import * as domainActions from '../../helpers/actions/domainActions'

// fundDomain

export const fundDomain = (colonyClient, domainId, amount) => ({
  type: actions.GET_DOMAINS,
  payload: domainActions.fundDomain(colonyClient, domainId, amount)
    .then(domains => {
      store.dispatch(setStateDomains(domains))
      store.dispatch(fundDomainSuccess())
    })
    .catch(error => {
      store.dispatch(fundDomainError(error.message))
    }),
})

export const fundDomainError = (message) => ({
  type: actions.GET_DOMAINS_ERROR,
  payload: message,
})

export const fundDomainSuccess = (message) => ({
  type: actions.GET_DOMAINS_SUCCESS,
  payload: message,
})

// getDomains

export const getDomains = (colonyClient) => ({
  type: actions.GET_DOMAINS,
  payload: domainActions.getDomains(colonyClient)
    .then(domains => {
      store.dispatch(setStateDomains(domains))
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
