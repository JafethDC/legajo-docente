import { createAction } from 'redux-actions';

export const LOG_IN = 'LOG_IN';
export const login = createAction(
  LOG_IN,
  (username, password) => 
    fetch(`${process.env.REACT_APP_API_ROOT}/login`, {})
);
