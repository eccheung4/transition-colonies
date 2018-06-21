import * as actions from '../constants/actions'

const initialState = {

  // cancelTask
  cancelTaskError: null,
  cancelTaskLoading: false,
  cancelTaskSuccess: false,

  // claimTask
  claimTaskError: null,
  claimTaskLoading: false,
  claimTaskSuccess: false,

  // createTask
  createTaskError: null,
  createTaskLoading: false,
  createTaskSuccess: false,

  // finalizeTask
  finalizeTaskError: null,
  finalizeTaskLoading: false,
  finalizeTaskSuccess: false,

  // getTask
  getTaskError: null,
  getTaskLoading: false,
  getTaskSuccess: false,

  // getTasks
  getTasksError: null,
  getTasksLoading: false,
  getTasksSuccess: false,

  // setTaskDueDate
  setTaskDueDateError: null,
  setTaskDueDateLoading: false,
  setTaskDueDateSuccess: false,

  // setTaskRole
  setTaskRoleError: null,
  setTaskRoleLoading: false,
  setTaskRoleSuccess: false,

  // signTaskDueDate
  signTaskDueDateError: null,
  signTaskDueDateLoading: false,
  signTaskDueDateSuccess: false,

  // task
  task: null,

  // tasks
  tasks: null,

}

const taskReducer = (state = initialState, action) => {

  switch (action.type) {

    // cancelTask

    case actions.CANCEL_TASK:
      return {
        ...state,
        cancelTaskError: null,
        cancelTaskLoading: true,
        cancelTaskSuccess: false,
      }

    case actions.CANCEL_TASK_ERROR:
      return {
        ...state,
        cancelTaskError: action.payload,
        cancelTaskLoading: false,
      }

    case actions.CANCEL_TASK_SUCCESS:
      return {
        ...state,
        cancelTaskLoading: false,
        cancelTaskSuccess: true,
      }

    // claimTask

    case actions.CLAIM_TASK:
      return {
        ...state,
        claimTaskError: null,
        claimTaskLoading: true,
        claimTaskSuccess: false,
      }

    case actions.CLAIM_TASK_ERROR:
      return {
        ...state,
        claimTaskError: action.payload,
        claimTaskLoading: false,
      }

    case actions.CLAIM_TASK_SUCCESS:
      return {
        ...state,
        claimTaskLoading: false,
        claimTaskSuccess: true,
      }

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

    // finalizeTask

    case actions.FINALIZE_TASK:
      return {
        ...state,
        finalizeTaskError: null,
        finalizeTaskLoading: true,
        finalizeTaskSuccess: false,
      }

    case actions.FINALIZE_TASK_ERROR:
      return {
        ...state,
        finalizeTaskError: action.payload,
        finalizeTaskLoading: false,
      }

    case actions.FINALIZE_TASK_SUCCESS:
      return {
        ...state,
        finalizeTaskLoading: false,
        finalizeTaskSuccess: true,
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
      let index = state.tasks.findIndex(task => task.id === action.payload.id)
      let tasks = state.tasks
      if (index >= 0) {
        tasks[index] = action.payload
        return {
          ...state,
          task: action.payload,
          tasks: [ ...tasks ]
        }
      } else {
        return {
          ...state,
          task: action.payload,
          tasks: [ ...tasks, action.payload ],
        }
      }

    // setStateTasks

    case actions.SET_STATE_TASKS:
      return {
        ...state,
        tasks: action.payload,
      }

    // setTastDueDate

    case actions.SET_TASK_DUE_DATE:
      return {
        ...state,
        setTastDueDateError: null,
        setTastDueDateLoading: true,
        setTastDueDateSuccess: false,
      }

    case actions.SET_TASK_DUE_DATE_ERROR:
      return {
        ...state,
        setTastDueDateError: action.payload,
        setTastDueDateLoading: false,
      }

    case actions.SET_TASK_DUE_DATE_SUCCESS:
      return {
        ...state,
        setTastDueDateLoading: false,
        setTastDueDateSuccess: true,
      }

    // setTaskRole

    case actions.SET_TASK_ROLE:
      return {
        ...state,
        setTaskRoleError: null,
        setTaskRoleLoading: true,
        setTaskRoleSuccess: false,
      }

    case actions.SET_TASK_ROLE_ERROR:
      return {
        ...state,
        setTaskRoleError: action.payload,
        setTaskRoleLoading: false,
      }

    case actions.SET_TASK_ROLE_SUCCESS:
      return {
        ...state,
        setTaskRoleLoading: false,
        setTaskRoleSuccess: true,
      }

    // signTaskDueDate

    case actions.SIGN_TASK_DUE_DATE:
      return {
        ...state,
        signTaskDueDateError: null,
        signTaskDueDateLoading: true,
        signTaskDueDateSuccess: false,
      }

    case actions.SIGN_TASK_DUE_DATE_ERROR:
      return {
        ...state,
        signTaskDueDateError: action.payload,
        signTaskDueDateLoading: false,
      }

    case actions.SIGN_TASK_DUE_DATE_SUCCESS:
      return {
        ...state,
        signTaskDueDateLoading: false,
        signTaskDueDateSuccess: true,
      }

    // default

    default:
      return state

  }

}

export default taskReducer
