import { store } from '../index'
import * as actions from '../constants/actions'
import * as taskActions from '../../helpers/actions/taskActions'

// cancelTask

export const cancelTask = (colonyClient, taskId) => ({
  type: actions.CANCEL_TASK,
  payload: taskActions.cancelTask(colonyClient, taskId)
    .then(taskId => {
      store.dispatch(getTask(colonyClient, taskId))
      store.dispatch(cancelTaskSuccess())
    })
    .catch(error => {
      store.dispatch(cancelTaskError(error.message))
    }),
})

export const cancelTaskError = (message) => ({
  type: actions.CANCEL_TASK_ERROR,
  payload: message,
})

export const cancelTaskSuccess = (message) => ({
  type: actions.CANCEL_TASK_SUCCESS,
  payload: message,
})

// claimTask

export const claimTask = (colonyClient, taskId) => ({
  type: actions.CLAIM_TASK,
  payload: taskActions.claimTask(colonyClient, taskId)
    .then(taskId => {
      store.dispatch(getTask(colonyClient, taskId))
      store.dispatch(claimTaskSuccess())
    })
    .catch(error => {
      store.dispatch(claimTaskError(error.message))
    }),
})

export const claimTaskError = (message) => ({
  type: actions.CLAIM_TASK_ERROR,
  payload: message,
})

export const claimTaskSuccess = (message) => ({
  type: actions.CLAIM_TASK_SUCCESS,
  payload: message,
})

// createTask

export const createTask = (colonyClient, title, description, domainId, dueDate) => ({
  type: actions.CREATE_TASK,
  payload: taskActions.createTask(colonyClient, title, description, domainId, dueDate)
    .then(taskId => {
      store.dispatch(getTask(colonyClient, taskId))
      store.dispatch(createTaskSuccess())
    })
    .catch(error => {
      store.dispatch(createTaskError(error.message))
    }),
})

export const createTaskError = (message) => ({
  type: actions.CREATE_TASK_ERROR,
  payload: message,
})

export const createTaskSuccess = (message) => ({
  type: actions.CREATE_TASK_SUCCESS,
  payload: message,
})

// getTask

export const getTask = (colonyClient, taskId) => ({
  type: actions.GET_TASK,
  payload: taskActions.getTask(colonyClient, taskId)
    .then(task => {
      store.dispatch(setStateTask(task))
      store.dispatch(getTaskSuccess())
    })
    .catch(error => {
      store.dispatch(getTaskError(error.message))
    }),
})

export const getTaskError = (message) => ({
  type: actions.GET_TASK_ERROR,
  payload: message,
})

export const getTaskSuccess = (message) => ({
  type: actions.GET_TASK_SUCCESS,
  payload: message,
})

// getTasks

export const getTasks = (colonyClient) => ({
  type: actions.GET_TASKS,
  payload: taskActions.getTasks(colonyClient)
    .then(task => {
      store.dispatch(setStateTasks(task))
      store.dispatch(getTasksSuccess())
    })
    .catch(error => {
      store.dispatch(getTasksError(error.message))
    }),
})

export const getTasksError = (message) => ({
  type: actions.GET_TASKS_ERROR,
  payload: message,
})

export const getTasksSuccess = (message) => ({
  type: actions.GET_TASKS_SUCCESS,
  payload: message,
})

// setStateTask

export const setStateTask = (task) => ({
  type: actions.SET_STATE_TASK,
  payload: task,
})

// setStateTasks

export const setStateTasks = (tasks) => ({
  type: actions.SET_STATE_TASKS,
  payload: tasks,
})

// setTaskDueDate

export const setTaskDueDate = (colonyClient, taskId, dueDate) => ({
  type: actions.SET_TASK_DUE_DATE,
  payload: taskActions.setTaskDueDate(colonyClient, taskId, dueDate)
    .then(taskId => {
      store.dispatch(getTask(colonyClient, taskId))
      store.dispatch(setTaskDueDateSuccess())
    })
    .catch(error => {
      store.dispatch(setTaskDueDateError(error.message))
    }),
})

export const setTaskDueDateError = (message) => ({
  type: actions.SET_TASK_DUE_DATE_ERROR,
  payload: message,
})

export const setTaskDueDateSuccess = (message) => ({
  type: actions.SET_TASK_DUE_DATE_SUCCESS,
  payload: message,
})

// setTaskRole

export const setTaskRole = (colonyClient, taskId, role, user) => ({
  type: actions.SET_TASK_ROLE,
  payload: taskActions.setTaskRole(colonyClient, taskId, role, user)
    .then(taskId => {
      store.dispatch(getTask(colonyClient, taskId))
      store.dispatch(setTaskRoleSuccess())
    })
    .catch(error => {
      store.dispatch(setTaskRoleError(error.message))
    }),
})

export const setTaskRoleError = (message) => ({
  type: actions.SET_TASK_ROLE_ERROR,
  payload: message,
})

export const setTaskRoleSuccess = (message) => ({
  type: actions.SET_TASK_ROLE_SUCCESS,
  payload: message,
})

// signTaskDueDate

export const signTaskDueDate = (colonyClient, taskId) => ({
  type: actions.SIGN_TASK_DUE_DATE,
  payload: taskActions.signTaskDueDate(colonyClient, taskId)
    .then(taskId => {
      store.dispatch(getTask(colonyClient, taskId))
      store.dispatch(signTaskDueDateSuccess())
    })
    .catch(error => {
      store.dispatch(signTaskDueDateError(error.message))
    }),
})

export const signTaskDueDateError = (message) => ({
  type: actions.SIGN_TASK_DUE_DATE_ERROR,
  payload: message,
})

export const signTaskDueDateSuccess = (message) => ({
  type: actions.SIGN_TASK_DUE_DATE_SUCCESS,
  payload: message,
})
