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

// getToken

export const getToken = (colonyClient) => ({
  type: actions.GET_TOKEN,
  payload: tokenActions.getToken(colonyClient)
    .then(token => {
      store.dispatch(setStateToken(token))
      store.dispatch(getTokenSuccess())
    })
    .catch(error => {
      store.dispatch(getTokenError(error.message))
    }),
})

export const getTokenError = (message) => ({
  type: actions.GET_TOKEN_ERROR,
  payload: message,
})

export const getTokenSuccess = (message) => ({
  type: actions.GET_TOKEN_SUCCESS,
  payload: message,
})

// setStateToken

export const setStateToken = (token) => ({
  type: actions.SET_STATE_TOKEN,
  payload: token,
})

// setStateTokenAddress

export const setStateTokenAddress = (tokenAddress) => ({
  type: actions.SET_STATE_TOKEN_ADDRESS,
  payload: tokenAddress,
})
