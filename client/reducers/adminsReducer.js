import * as actions from '../constants/actions'

const initialState = {

  // addAdmin
  addAdminError: null,
  addAdminLoading: false,
  addAdminSuccess: false,

  // admins
  admins: null,

  // getAdmins
  getAdminsError: null,
  getAdminsLoading: false,
  getAdminsSuccess: false,

}

const adminsReducer = (state = initialState, action) => {

  switch (action.type) {

    // addAdmin

    case actions.ADD_ADMIN:
      return {
        ...state,
        addAdminError: null,
        addAdminLoading: true,
        addAdminSuccess: false,
      }

    case actions.ADD_ADMIN_ERROR:
      return {
        ...state,
        addAdminError: action.payload,
        addAdminLoading: false,
      }

    case actions.ADD_ADMIN_SUCCESS:
      return {
        ...state,
        addAdminLoading: false,
        addAdminSuccess: true,
      }

    // getAdmins

    case actions.GET_ADMINS:
      return {
        ...state,
        getAdminsError: null,
        getAdminsLoading: true,
        getAdminsSuccess: false,
      }

    case actions.GET_ADMINS_ERROR:
      return {
        ...state,
        getAdminsError: action.payload,
        getAdminsLoading: false,
      }

    case actions.GET_ADMINS_SUCCESS:
      return {
        ...state,
        getAdminsLoading: false,
        getAdminsSuccess: true,
      }

    // setStateAdmins

    case actions.SET_STATE_ADMINS:
      return {
        ...state,
        admins: action.payload,
      }

    // default

    default:
      return state

  }

}

export default adminsReducer
