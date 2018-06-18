import * as actions from '../constants/actions'

const initialState = {

  // colonyAddress
  colonyAddress: null,

  // colonyClient
  colonyClient: null,

  // createColony
  createColonyError: null,
  createColonyLoading: false,
  createColonySuccess: false,

  // getColonyClient
  getColonyClientError: null,
  getColonyClientLoading: false,
  getColonyClientSuccess: false,

  // getColonyClientByAddress
  getColonyClientByAddressError: null,
  getColonyClientByAddressLoading: false,
  getColonyClientByAddressSuccess: false,

  // getMetaColonyClient
  getMetaColonyClientError: null,
  getMetaColonyClientLoading: false,
  getMetaColonyClientSuccess: false,

  // metaColonyClient
  metaColonyClient: null,

}

const colonyReducer = (state = initialState, action) => {

  switch (action.type) {

    // createColony

    case actions.CREATE_COLONY:
      return {
        ...state,
        createColonyError: null,
        createColonyLoading: true,
        createColonySuccess: false,
      }

    case actions.CREATE_COLONY_ERROR:
      return {
        ...state,
        createColonyError: action.payload,
        createColonyLoading: false,
      }

    case actions.CREATE_COLONY_SUCCESS:
      return {
        ...state,
        createColonyLoading: false,
        createColonySuccess: true,
      }

    // getColonyClient

    case actions.GET_COLONY_CLIENT:
      return {
        ...state,
        getColonyClientError: null,
        getColonyClientLoading: true,
        getColonyClientSuccess: false,
      }

    case actions.GET_COLONY_CLIENT_ERROR:
      return {
        ...state,
        getColonyClientError: action.payload,
        getColonyClientLoading: false,
      }

    case actions.GET_COLONY_CLIENT_SUCCESS:
      return {
        ...state,
        getColonyClientLoading: false,
        getColonyClientSuccess: true,
      }

    // getColonyClientByAddress

    case actions.GET_COLONY_CLIENT_BY_ADDRESS:
      return {
        ...state,
        getColonyClientByAddressError: null,
        getColonyClientByAddressLoading: true,
        getColonyClientByAddressSuccess: false,
      }

    case actions.GET_COLONY_CLIENT_BY_ADDRESS_ERROR:
      return {
        ...state,
        getColonyClientByAddressError: action.payload,
        getColonyClientByAddressLoading: false,
      }

    case actions.GET_COLONY_CLIENT_BY_ADDRESS_SUCCESS:
      return {
        ...state,
        getColonyClientByAddressLoading: false,
        getColonyClientByAddressSuccess: true,
      }

    // getMetaColonyClient

    case actions.GET_META_COLONY_CLIENT:
      return {
        ...state,
        getMetaColonyClientError: null,
        getMetaColonyClientLoading: true,
        getMetaColonyClientSuccess: false,
      }

    case actions.GET_META_COLONY_CLIENT_ERROR:
      return {
        ...state,
        getMetaColonyClientError: action.payload,
        getMetaColonyClientLoading: false,
      }

    case actions.GET_META_COLONY_CLIENT_SUCCESS:
      return {
        ...state,
        getMetaColonyClientLoading: false,
        getMetaColonyClientSuccess: true,
      }

    // setStateColonyAddress

    case actions.SET_STATE_COLONY_ADDRESS:
      return {
        ...state,
        colonyAddress: action.payload,
      }

    // setStateColonyClient

    case actions.SET_STATE_COLONY_CLIENT:
      return {
        ...state,
        colonyClient: action.payload,
      }

    // setStateMetaColonyClient

    case actions.SET_STATE_META_COLONY_CLIENT:
      return {
        ...state,
        metaColonyClient: action.payload,
      }

    // default

    default:
      return state

  }

}

export default colonyReducer
