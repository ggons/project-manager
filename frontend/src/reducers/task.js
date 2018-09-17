import {
  ADD_TASK,
  REQUEST_TASKS_PENDING,
  REQUEST_TASKS_SUCCESS,
  REQUEST_TASKS_FAILED,
  SELECT_TASK,
  CHANGE_TASK_FORM,
  UPDATE_TASK
} from 'actions/constants'

const initialState = {
  tasks: [],
  task: {},
  selectedIndex: -1,
  isPending: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return Object.assign({}, state, { tasks: [ ...action.payload.data ] });

    case REQUEST_TASKS_PENDING:
      return Object.assign({}, state, { isPending: true });

    case REQUEST_TASKS_SUCCESS:
      return Object.assign({}, state, { tasks: action.payload.data, isPending: false, selectedIndex: -1, task: {} });

    case REQUEST_TASKS_FAILED:
      return Object.assign({}, state, { error: action.payload });

    case SELECT_TASK:
      return Object.assign({}, state, { selectedIndex: action.payload, task: state.tasks[action.payload] });
    case CHANGE_TASK_FORM:
      return Object.assign({}, state, { task: { ...state.task, ...action.payload } });
      
    case UPDATE_TASK:
      const tasks = [ ...action.payload.data ];
      return Object.assign({}, state, { tasks, task: tasks[state.selectedIndex] });
      
    default:
      return state;
  }
}