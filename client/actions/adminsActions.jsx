import { store } from '../index'
import * as actions from '../constants/actions'
import * as adminsActions from '../../helpers/actions/adminsActions'

// addAdmin

export const addAdmin = (colonyClient, userAddress) => ({
  type: actions.ADD_ADMIN,
  payload: adminsActions.addAdmin(colonyClient, userAddress)
    .then(admins => {
      store.dispatch(setStateAdmins(admins))
      store.dispatch(addAdminSuccess())
    })
    .catch(error => {
      store.dispatch(addAdminError(error.message))
    }),
})

export const addAdminError = (message) => ({
  type: actions.ADD_ADMIN_ERROR,
  payload: message,
})

export const addAdminSuccess = (message) => ({
  type: actions.ADD_ADMIN_SUCCESS,
  payload: message,
})

// getAdmins

export const getAdmins = (colonyClient) => ({
  type: actions.GET_ADMINS,
  payload: adminsActions.getAdmins(colonyClient)
    .then(admins => {
      store.dispatch(setStateAdmins(admins))
      store.dispatch(getAdminsSuccess())
    })
    .catch(error => {
      store.dispatch(getAdminsError(error.message))
    }),
})

export const getAdminsError = (message) => ({
  type: actions.GET_ADMINS_ERROR,
  payload: message,
})

export const getAdminsSuccess = (message) => ({
  type: actions.GET_ADMINS_SUCCESS,
  payload: message,
})

// setStateAdmins

export const setStateAdmins = (admins) => ({
  type: actions.SET_STATE_ADMINS,
  payload: admins,
})
