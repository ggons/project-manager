import http from 'services/httpService';
import { apiUrl } from 'config.json';

const apiEndpoint = apiUrl + '/tasks';

export const addTask = (task) => http.post(apiEndpoint, task);
export const getTasksByProjectId = (projectId) => http.get(`${apiEndpoint}/project/${projectId}`);