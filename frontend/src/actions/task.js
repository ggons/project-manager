import {
  ADD_TASK,
  REQUEST_TASKS_PENDING,
  REQUEST_TASKS_SUCCESS,
  REQUEST_TASKS_FAILED,
  SELECT_TASK,
  CHANGE_TASK_FORM,
  UPDATE_TASK,
} from './constants';
import * as taskService from 'services/taskService';

export const addTask = (task) => {
  const response = taskService.addTask(task);

  return {
    type: ADD_TASK,
    payload: response
  }
}

export const requestTasksByProjectId = (projectId) => dispatch => {
  dispatch({ type: REQUEST_TASKS_PENDING });
  taskService.getTasksByProjectId(projectId)
    .then(response => dispatch({ type: REQUEST_TASKS_SUCCESS, payload: response }))
    .catch(error => dispatch({ type: REQUEST_TASKS_FAILED, payload: error }))
}

export const selectTask = index => {
  return {
    type: SELECT_TASK,
    payload: index
  }
}

export const changeTaskForm = task => {
  return {
    type: CHANGE_TASK_FORM,
    payload: task
  }
}

export const updateTask = task => {
  const response = taskService.updateTask(task);

  return {
    type: UPDATE_TASK,
    payload: response
  }
}