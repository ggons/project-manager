import {
  ADD_TASK,
  REQUEST_TASKS_PENDING,
  REQUEST_TASKS_SUCCESS,
  REQUEST_TASKS_FAILED
} from 'actions/constants'

const initialState = {
  tasks: [],
  isPending: false
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return Object.assign({}, state, { tasks: [ ...state.tasks, action.payload.data] });
    case REQUEST_TASKS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_TASKS_SUCCESS:
      return Object.assign({}, state, { tasks: action.payload.data, isPending: false });
    case REQUEST_TASKS_FAILED:
      return Object.assign({}, state, { error: action.payload });
    default:
      return state;
  }
}