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

  // getTasks
  getTasksError: null,
  getTasksLoading: false,
  getTasksSuccess: false,

  // task
  task: null,

  // tasks
  tasks: null,

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

    // getTasks

    case actions.GET_TASKS:
      return {
        ...state,
        getTasksError: null,
        getTasksLoading: true,
        getTasksSuccess: false,
      }

    case actions.GET_TASKS_ERROR:
      return {
        ...state,
        getTasksError: action.payload,
        getTasksLoading: false,
      }

    case actions.GET_TASKS_SUCCESS:
      return {
        ...state,
        getTasksLoading: false,
        getTasksSuccess: true,
        }

    // setStateTask

    case actions.SET_STATE_TASK:
      return {
        ...state,
        task: action.payload,
      }

    // setStateTasks

    case actions.SET_STATE_TASKS:
      return {
        ...state,
        tasks: action.payload,
      }

    // default

    default:
      return state

  }

}

export default taskReducer
