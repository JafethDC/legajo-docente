import { createAction } from 'redux-actions';

export const LOG_IN = 'LOG_IN';
export const logIn = createAction(
  LOG_IN,
  (email, password) => 
    fetch(`${process.env.REACT_APP_API_ROOT}/login`, {
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers: { 'Content-Type': 'application/json' }
    }).then(response => response.json())
);

export const LOG_OUT = 'LOG_OUT';
export const logOut = createAction(
  LOG_OUT
);

export const SIGN_UP = 'SIGN_UP';
export const signUp = createAction(
  SIGN_UP,
  (email, password, confirmPassword) => 
    fetch(`${process.env.REACT_APP_API_ROOT}/signup`, {
      method: 'POST',
      body: JSON.stringify({email, password, confirmPassword}),
      headers: { 'Content-Type': 'application/json' }
    }).then(response => response.json())
);

