import { store } from '../index'
import * as actions from '../constants/actions'
import * as networkActions from '../../helpers/actions/networkActions'

// getNetworkClient

export const getNetworkClient = () => ({
  type: actions.GET_NETWORK_CLIENT,
  payload: networkActions.getNetworkClient()
    .then(networkClient => {
      store.dispatch(setStateNetworkClient(networkClient))
      store.dispatch(getNetworkClientSuccess())
    })
    .catch(error => {
      store.dispatch(getNetworkClientError(error.message))
    }),
})

export const getNetworkClientError = (message) => ({
  type: actions.GET_NETWORK_CLIENT_ERROR,
  payload: message,
})

export const getNetworkClientSuccess = (message) => ({
  type: actions.GET_NETWORK_CLIENT_SUCCESS,
  payload: message,
})

// setStateNetworkClient

export const setStateNetworkClient = (networkClient) => ({
  type: actions.SET_STATE_NETWORK_CLIENT,
  payload: networkClient,
})
