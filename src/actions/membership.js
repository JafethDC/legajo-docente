import { createAction } from 'redux-actions';
import { commonResponseHandle } from 'utils/http';

export const LOG_IN = 'LOG_IN';
export const logIn = createAction(
  LOG_IN,
  (email, password) => 
    fetch(`${process.env.REACT_APP_API_ROOT}/login`, {
      method: 'POST',
      body: JSON.stringify({email, password}),
      headers: { 'Content-Type': 'application/json' }
    }).then(commonResponseHandle)
);

export const FETCH_PROFILE = 'FETCH_PROFILE';
export const fetchProfile = createAction(
  FETCH_PROFILE,
  () => 
    fetch(`${process.env.REACT_APP_API_ROOT}/account`)
    .then(commonResponseHandle)
);


export const LOG_OUT = 'LOG_OUT';
export const logOut = createAction(
  LOG_OUT,
  () => 
    fetch(`${process.env.REACT_APP_API_ROOT}/logout`)
    .then(commonResponseHandle)
);

export const SIGN_UP = 'SIGN_UP';
export const signUp = createAction(
  SIGN_UP,
  (email, password, confirmPassword) => 
    fetch(`${process.env.REACT_APP_API_ROOT}/signup`, {
      method: 'POST',
      body: JSON.stringify({email, password, confirmPassword}),
      headers: { 'Content-Type': 'application/json' }
    }).then(commonResponseHandle)
);

