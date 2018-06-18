import * as actions from '../constants/actions'

const initialState = {

  // createToken
  createTokenError: null,
  createTokenLoading: false,
  createTokenSuccess: false,

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
