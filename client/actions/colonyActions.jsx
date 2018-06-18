import { store } from '../index'
import * as actions from '../constants/actions'
import * as colonyActions from '../colony/colonyActions'

// createColony

export const createColony = (networkClient, tokenAddress) => ({
  type: actions.CREATE_COLONY,
  payload: colonyActions.createColony(networkClient, tokenAddress)
    .then(colonyAddress => {
      store.dispatch(setStateColonyAddress(colonyAddress))
      store.dispatch(createColonySuccess())
    })
    .catch(error => {
      store.dispatch(createColonyError(error.message))
    }),
})

export const createColonyError = (message) => ({
  type: actions.CREATE_COLONY_ERROR,
  payload: message,
})

export const createColonySuccess = (message) => ({
  type: actions.CREATE_COLONY_SUCCESS,
  payload: message,
})

// getColonyClient

export const getColonyClient = (networkClient, colonyId) => ({
  type: actions.GET_COLONY_CLIENT,
  payload: colonyActions.getColonyClient(networkClient, colonyId)
    .then(colonyClient => {
      store.dispatch(setStateColonyClient(colonyClient))
      store.dispatch(getColonyClientSuccess())
    })
    .catch(error => {
      store.dispatch(getColonyClientError(error.message))
    }),
})

export const getColonyClientError = (message) => ({
  type: actions.GET_COLONY_CLIENT_ERROR,
  payload: message,
})

export const getColonyClientSuccess = (message) => ({
  type: actions.GET_COLONY_CLIENT_SUCCESS,
  payload: message,
})

// getColonyClientByAddress

export const getColonyClientByAddress = (networkClient, colonyAddress) => ({
  type: actions.GET_COLONY_CLIENT_BY_ADDRESS,
  payload: colonyActions.getColonyClientByAddress(networkClient, colonyAddress)
    .then(colonyClient => {
      store.dispatch(setStateColonyClient(colonyClient))
      store.dispatch(getColonyClientByAddressSuccess())
    })
    .catch(error => {
      store.dispatch(getColonyClientByAddressError(error.message))
    }),
})

export const getColonyClientByAddressError = (message) => ({
  type: actions.GET_COLONY_CLIENT_BY_ADDRESS_ERROR,
  payload: message,
})

export const getColonyClientByAddressSuccess = (message) => ({
  type: actions.GET_COLONY_CLIENT_BY_ADDRESS_SUCCESS,
  payload: message,
})

// getMetaColonyClient

export const getMetaColonyClient = (networkClient) => ({
  type: actions.GET_META_COLONY_CLIENT,
  payload: colonyActions.getMetaColonyClient(networkClient)
    .then(metaColonyClient => {
      store.dispatch(setStateColonyClient(metaColonyClient))
      store.dispatch(getMetaColonyClientSuccess())
    })
    .catch(error => {
      store.dispatch(getMetaColonyClientError(error.message))
    }),
})

export const getMetaColonyClientError = (message) => ({
  type: actions.GET_META_COLONY_CLIENT_ERROR,
  payload: message,
})

export const getMetaColonyClientSuccess = (message) => ({
  type: actions.GET_META_COLONY_CLIENT_SUCCESS,
  payload: message,
})

// setStateColonyAddress

export const setStateColonyAddress = (colonyAddress) => ({
  type: actions.SET_STATE_COLONY_ADDRESS,
  payload: colonyAddress,
})

// setStateColonyClient

export const setStateColonyClient = (colonyClient) => ({
  type: actions.SET_STATE_COLONY_CLIENT,
  payload: colonyClient,
})

// setStateMetaColonyClient

export const setStateMetaColonyClient = (metaColonyClient) => ({
  type: actions.SET_STATE_META_COLONY_CLIENT,
  payload: metaColonyClient,
})
