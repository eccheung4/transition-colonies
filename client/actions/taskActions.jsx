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

export const createTask = (colonyClient, task) => ({
  type: actions.CREATE_TASK,
  payload: taskActions.createTask(colonyClient, task)
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

// finalizeTask

export const finalizeTask = (colonyClient, taskId) => ({
  type: actions.FINALIZE_TASK,
  payload: taskActions.finalizeTask(colonyClient, taskId)
    .then(taskId => {
      store.dispatch(getTask(colonyClient, taskId))
      store.dispatch(finalizeTaskSuccess())
    })
    .catch(error => {
      store.dispatch(finalizeTaskError(error.message))
    }),
})

export const finalizeTaskError = (message) => ({
  type: actions.FINALIZE_TASK_ERROR,
  payload: message,
})

export const finalizeTaskSuccess = (message) => ({
  type: actions.FINALIZE_TASK_SUCCESS,
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

// signTask

export const signTask = (colonyClient, taskId) => ({
  type: actions.SIGN_TASK,
  payload: taskActions.signTask(colonyClient, taskId)
    .then(taskId => {
      store.dispatch(getTask(colonyClient, taskId))
      store.dispatch(signTaskSuccess())
    })
    .catch(error => {
      store.dispatch(signTaskError(error.message))
    }),
})

export const signTaskError = (message) => ({
  type: actions.SIGN_TASK_ERROR,
  payload: message,
})

export const signTaskSuccess = (message) => ({
  type: actions.SIGN_TASK_SUCCESS,
  payload: message,
})

// submitTask

export const submitTask = (colonyClient, taskId, deliverable) => ({
  type: actions.SUBMIT_TASK,
  payload: taskActions.submitTask(colonyClient, taskId, deliverable)
    .then(taskId => {
      store.dispatch(getTask(colonyClient, taskId))
      store.dispatch(submitTaskSuccess())
    })
    .catch(error => {
      store.dispatch(submitTaskError(error.message))
    }),
})

export const submitTaskError = (message) => ({
  type: actions.SUBMIT_TASK_ERROR,
  payload: message,
})

export const submitTaskSuccess = (message) => ({
  type: actions.SUBMIT_TASK_SUCCESS,
  payload: message,
})

// updateTask

export const updateTask = (colonyClient, task) => ({
  type: actions.UPDATE_TASK,
  payload: taskActions.updateTask(colonyClient, task)
    .then(taskId => {
      store.dispatch(getTask(colonyClient, taskId))
      store.dispatch(updateTaskSuccess())
    })
    .catch(error => {
      store.dispatch(updateTaskError(error.message))
    }),
})

export const updateTaskError = (message) => ({
  type: actions.UPDATE_TASK_ERROR,
  payload: message,
})

export const updateTaskSuccess = (message) => ({
  type: actions.UPDATE_TASK_SUCCESS,
  payload: message,
})
