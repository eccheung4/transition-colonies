import * as actions from '../constants/actions'

const initialState = {

  // createTask
  createTaskError: null,
  createTaskLoading: false,
  createTaskSuccess: false,

  // getTask
  getTaskError: null,
  getTaskLoading: false,
  getTaskSuccess: false,

  // task
  task: null,

}

const taskReducer = (state = initialState, action) => {

  switch (action.type) {

    // createTask

    case actions.CREATE_TASK:
      return {
        ...state,
        createTaskError: null,
        createTaskLoading: true,
        createTaskSuccess: false,
      }

    case actions.CREATE_TASK_ERROR:
      return {
        ...state,
        createTaskError: action.payload,
        createTaskLoading: false,
      }

    case actions.CREATE_TASK_SUCCESS:
      return {
        ...state,
        createTaskLoading: false,
        createTaskSuccess: true,
      }

    // getTask

    case actions.GET_TASK:
      return {
        ...state,
        getTaskError: null,
        getTaskLoading: true,
        getTaskSuccess: false,
      }

    case actions.GET_TASK_ERROR:
      return {
        ...state,
        getTaskError: action.payload,
        getTaskLoading: false,
      }

    case actions.GET_TASK_SUCCESS:
      return {
        ...state,
        getTaskLoading: false,
        getTaskSuccess: true,
      }

    // setStateTask

    case actions.SET_STATE_TASK:
      return {
        ...state,
        task: action.payload,
      }

    // default

    default:
      return state

  }

}

export default taskReducer
