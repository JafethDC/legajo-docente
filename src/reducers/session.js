import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware';

import { LOG_IN, LOG_OUT } from 'actions/membership';

const defaultState = {
  loggingIn: false,
  loggingOut: false,
  currentUser: null,
};

const sessionReducer = (state = defaultState, action) => {
  switch(action.type){
    case `${LOG_IN}_${PENDING}`:
      return {
        ...state,
        loggingIn: true,
      };

    case `${LOG_IN}_${FULFILLED}`:
      return {
        ...state,
        loggingIn: false,
        currentUser: {}
      };

    case `${LOG_IN}_${REJECTED}`:
      return {
        ...state,
        loggingIn: false,
      };

    case `${LOG_OUT}_${PENDING}`:
      return {
        ...state,
        loggingOut: true,
      };

    case `${LOG_OUT}_${FULFILLED}`:
      return {
        ...state,
        loggingOut: false,
        currentUser: null
      };

    case `${LOG_OUT}_${REJECTED}`:
      return {
        ...state,
        loggingOut: false,
      };

    default:
      return state;
  }
}

export default sessionReducer;