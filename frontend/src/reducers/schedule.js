import {
  // CHANGE_SCHEDULE_FORM,
  // INIT_SCHEDULE_FORM,
  // SET_SCHEDULE_MODAL,
  // SET_SCHEDULES,
} from 'actions/constants';

const initialState = {
  form: {
    title: '',
    startDate: '',
    endDate: '',
    backgroundColor: '',
    vo: null
  },
  open: false,
  schedules: { }
}

export default function (state = initialState, action) {
  switch (action.type) {
    // case CHANGE_SCHEDULE_FORM: 
    //   return Object.assign({}, state, { 
    //     form: { 
    //       ...state.form, 
    //       [action.payload.name]: action.payload.value 
    //     } 
    //   })
    // case INIT_SCHEDULE_FORM: 
    //   return Object.assign({}, state, { form: { ...state.form, ...action.payload } })
    // case SET_SCHEDULE_MODAL:
    //   return Object.assign({}, state, { open: action.payload });
    // case SET_SCHEDULES:
    //   return Object.assign({}, state, { schedules: { ...action.payload } });
    default:
      return state;
  }
}