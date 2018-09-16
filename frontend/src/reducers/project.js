import {
  ADD_PROJECT,
  REQUEST_PROJECTS_PENDING,
  REQUEST_PROJECTS_SUCCESS,
  REQUEST_PROJECTS_FAILED,
} from 'actions/constants';

const initialState = {
  projects: [],
  isPending: true
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_PROJECT:
      return Object.assign({}, state, { projects: [ ...action.payload.data ] });
    case REQUEST_PROJECTS_PENDING:
      return Object.assign({}, state, { isPending: true });
    case REQUEST_PROJECTS_SUCCESS:
      return Object.assign({}, state, { projects: action.payload.data, isPending: false });
    case REQUEST_PROJECTS_FAILED:
      return Object.assign({}, state, { error: action.payload });
    default:
      return state;
  }
}