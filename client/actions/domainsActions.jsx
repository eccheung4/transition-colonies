import { store } from '../index'
import * as actions from '../constants/actions'
import * as domainsActions from '../../helpers/actions/domainsActions'

// claimFunds

export const claimFunds = (colonyClient) => ({
  type: actions.CLAIM_FUNDS,
  payload: domainsActions.claimFunds(colonyClient)
    .then(domains => {
      store.dispatch(setStateDomains(domains))
      store.dispatch(claimFundsSuccess())
    })
    .catch(error => {
      store.dispatch(claimFundsError(error.message))
    }),
})

export const claimFundsError = (message) => ({
  type: actions.CLAIM_FUNDS_ERROR,
  payload: message,
})

export const claimFundsSuccess = (message) => ({
  type: actions.CLAIM_FUNDS_SUCCESS,
  payload: message,
})

// fundDomain

export const fundDomain = (colonyClient, domainId, amount) => ({
  type: actions.FUND_DOMAIN,
  payload: domainsActions.fundDomain(colonyClient, domainId, amount)
    .then(domains => {
      store.dispatch(setStateDomains(domains))
      store.dispatch(fundDomainSuccess())
    })
    .catch(error => {
      store.dispatch(fundDomainError(error.message))
    }),
})

export const fundDomainError = (message) => ({
  type: actions.FUND_DOMAIN_ERROR,
  payload: message,
})

export const fundDomainSuccess = (message) => ({
  type: actions.FUND_DOMAIN_SUCCESS,
  payload: message,
})

// getClaimableFunds

export const getClaimableFunds = (colonyClient) => ({
  type: actions.GET_CLAIMABLE_FUNDS,
  payload: domainsActions.getClaimableFunds(colonyClient)
    .then(claimableFunds => {
      store.dispatch(setStateClaimableFunds(claimableFunds))
      store.dispatch(getClaimableFundsSuccess())
    })
    .catch(error => {
      store.dispatch(getClaimableFundsError(error.message))
    }),
})

export const getClaimableFundsError = (message) => ({
  type: actions.GET_CLAIMABLE_FUNDS_ERROR,
  payload: message,
})

export const getClaimableFundsSuccess = (message) => ({
  type: actions.GET_CLAIMABLE_FUNDS_SUCCESS,
  payload: message,
})

// getDomains

export const getDomains = (colonyClient) => ({
  type: actions.GET_DOMAINS,
  payload: domainsActions.getDomains(colonyClient)
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

// setStateClaimableFunds

export const setStateClaimableFunds = (claimableFunds) => ({
  type: actions.SET_STATE_CLAIMABLE_FUNDS,
  payload: claimableFunds,
})

// setStateDomains

export const setStateDomains = (domains) => ({
  type: actions.SET_STATE_DOMAINS,
  payload: domains,
})
