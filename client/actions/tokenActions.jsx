import { store } from '../index'
import * as actions from '../constants/actions'
import * as tokenActions from '../helpers/actions/tokenActions'

// createToken

export const createToken = (networkClient, tokenName, tokenSymbol) => ({
  type: actions.CREATE_TOKEN,
  payload: tokenActions.createToken(networkClient, tokenName, tokenSymbol)
    .then(tokenAddress => {
      store.dispatch(setStateTokenAddress(tokenAddress))
      store.dispatch(createTokenSuccess())
    })
    .catch(error => {
      store.dispatch(createTokenError(error.message))
    }),
})

export const createTokenError = (message) => ({
  type: actions.CREATE_TOKEN_ERROR,
  payload: message,
})

export const createTokenSuccess = (message) => ({
  type: actions.CREATE_TOKEN_SUCCESS,
  payload: message,
})

// setStateTokenAddress

export const setStateTokenAddress = (tokenAddress) => ({
  type: actions.SET_STATE_TOKEN_ADDRESS,
  payload: tokenAddress,
})
