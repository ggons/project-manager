import {
  ADD_TASK,
  REQUEST_TASKS_PENDING,
  REQUEST_TASKS_SUCCESS,
  REQUEST_TASKS_FAILED
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