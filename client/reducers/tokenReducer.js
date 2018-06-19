import * as actions from '../constants/actions'

const initialState = {

  // createToken
  createTokenError: null,
  createTokenLoading: false,
  createTokenSuccess: false,

  // getToken
  getTokenError: null,
  getTokenLoading: false,
  getTokenSuccess: false,

  // token
  token: null,

  // tokenAddress
  tokenAddress: null,

}

const tokenReducer = (state = initialState, action) => {

  switch (action.type) {

    // createToken

    case actions.CREATE_TOKEN:
      return {
        ...state,
        createTokenError: null,
        createTokenLoading: true,
        createTokenSuccess: false,
      }

    case actions.CREATE_TOKEN_ERROR:
      return {
        ...state,
        createTokenError: action.payload,
        createTokenLoading: false,
      }

    case actions.CREATE_TOKEN_SUCCESS:
      return {
        ...state,
        createTokenLoading: false,
        createTokenSuccess: true,
      }

    // getToken

    case actions.GET_TOKEN:
      return {
        ...state,
        getTokenError: null,
        getTokenLoading: true,
        getTokenSuccess: false,
      }

    case actions.GET_TOKEN_ERROR:
      return {
        ...state,
        getTokenError: action.payload,
        getTokenLoading: false,
      }

    case actions.GET_TOKEN_SUCCESS:
      return {
        ...state,
        getTokenLoading: false,
        getTokenSuccess: true,
      }

    // setStateToken

    case actions.SET_STATE_TOKEN:
      return {
        ...state,
        token: action.payload,
      }

    // setStateTokenAddress

    case actions.SET_STATE_TOKEN_ADDRESS:
      return {
        ...state,
        tokenAddress: action.payload,
      }

    // default

    default:
      return state

  }

}

export default tokenReducer
