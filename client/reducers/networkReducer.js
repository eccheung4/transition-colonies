import * as actions from '../constants/actions'

const initialState = {

  // getNetworkClient
  getNetworkClientError: null,
  getNetworkClientLoading: false,
  getNetworkClientSuccess: false,

  // networkClient
  networkClient: null,

}

const networkReducer = (state = initialState, action) => {

  switch (action.type) {

    // getNetworkClient

    case actions.GET_NETWORK_CLIENT:
      return {
        ...state,
        getNetworkClientError: null,
        getNetworkClientLoading: true,
        getNetworkClientSuccess: false,
      }

    case actions.GET_NETWORK_CLIENT_ERROR:
      return {
        ...state,
        getNetworkClientError: action.payload,
        getNetworkClientLoading: false,
      }

    case actions.GET_NETWORK_CLIENT_SUCCESS:
      return {
        ...state,
        getNetworkClientLoading: false,
        getNetworkClientSuccess: true,
      }

    // setStateNetworkClient

    case actions.SET_STATE_NETWORK_CLIENT:
      return {
        ...state,
        networkClient: action.payload,
      }

    // default

    default:
      return state

  }

}

export default networkReducer
