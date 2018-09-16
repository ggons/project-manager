import http from 'services/httpService';
import { apiUrl } from 'config.json';

const apiEndpoint = apiUrl + '/projects';

export const addProject = (name) => http.post(apiEndpoint, { name });
export const getProjects = () => http.get(apiEndpoint);