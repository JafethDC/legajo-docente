import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import session from 'reducers/session';

export default combineReducers({
  form: reduxFormReducer,
  session
});