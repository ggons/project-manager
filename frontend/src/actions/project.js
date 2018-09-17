import {
  ADD_PROJECT,
  REQUEST_PROJECTS_PENDING,
  REQUEST_PROJECTS_SUCCESS,
  REQUEST_PROJECTS_FAILED,
} from './constants';

import * as projectService from 'services/projectService';

export const addProject = name => {
  const response = projectService.addProject(name);

  return {
    type: ADD_PROJECT,
    payload: response
  }
}

export const requestProjects = () => dispatch => {
  dispatch({ type: REQUEST_PROJECTS_PENDING });
  projectService.getProjects()
    .then(response => dispatch({ type: REQUEST_PROJECTS_SUCCESS, payload: response }))
    .catch(error => dispatch({ type: REQUEST_PROJECTS_FAILED, payload: error }))
}