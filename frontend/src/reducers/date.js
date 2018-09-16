// import {
//   SET_CURRENT_DATE
// } from 'actions/constants';

const initialState = {
  currentDate: Date.now()
}

export default function (state = initialState, action) {
  switch (action.type) {
    // case SET_CURRENT_DATE: 
    //   return Object.assign({}, state, { currentDate: action.payload } )
    default:
      return state;
  }
}