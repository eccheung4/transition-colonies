import * as actions from '../constants/actions'

const initialState = {

  // claimFunds
  claimFundsError: null,
  claimFundsLoading: false,
  claimFundsSuccess: false,

  // domains
  domains: null,

  // fundDomain
  fundDomainError: null,
  fundDomainLoading: false,
  fundDomainSuccess: false,

  // getDomains
  getDomainsError: null,
  getDomainsLoading: false,
  getDomainsSuccess: false,

}

const domainReducer = (state = initialState, action) => {

  switch (action.type) {

    // claimFunds

    case actions.CLAIM_FUNDS:
      return {
        ...state,
        claimFundsError: null,
        claimFundsLoading: true,
        claimFundsSuccess: false,
      }

    case actions.CLAIM_FUNDS_ERROR:
      return {
        ...state,
        claimFundsError: action.payload,
        claimFundsLoading: false,
      }

    case actions.CLAIM_FUNDS_SUCCESS:
      return {
        ...state,
        claimFundsLoading: false,
        claimFundsSuccess: true,
      }

    // fundDomain

    case actions.FUND_DOMAIN:
      return {
        ...state,
        fundDomainError: null,
        fundDomainLoading: true,
        fundDomainSuccess: false,
      }

    case actions.FUND_DOMAIN_ERROR:
      return {
        ...state,
        fundDomainError: action.payload,
        fundDomainLoading: false,
      }

    case actions.FUND_DOMAIN_SUCCESS:
      return {
        ...state,
        fundDomainLoading: false,
        fundDomainSuccess: true,
      }

    // getDomains

    case actions.GET_DOMAINS:
      return {
        ...state,
        getDomainsError: null,
        getDomainsLoading: true,
        getDomainsSuccess: false,
      }

    case actions.GET_DOMAINS_ERROR:
      return {
        ...state,
        getDomainsError: action.payload,
        getDomainsLoading: false,
      }

    case actions.GET_DOMAINS_SUCCESS:
      return {
        ...state,
        getDomainsLoading: false,
        getDomainsSuccess: true,
      }

    // setStateDomains

    case actions.SET_STATE_DOMAINS:
      return {
        ...state,
        domains: action.payload,
      }

    // default

    default:
      return state

  }

}

export default domainReducer
