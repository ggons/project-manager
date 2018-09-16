import { combineReducers } from 'redux';
import dateReducer from './date';
import scheduleReducer from './schedule';
import projectReducer from './project';
import taskReducer from './task';

export default combineReducers({
  date: dateReducer,
  schedule: scheduleReducer,
  project: projectReducer,
  task: taskReducer
})