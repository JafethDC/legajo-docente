import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import promiseMiddleware from 'redux-promise-middleware';

import 'index.css';
import App from 'App';
import rootReducer from 'reducers';
import registerServiceWorker from 'registerServiceWorker';

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(
      promiseMiddleware()
    ),
    (window.__REDUX_DEVTOOLS_EXTENSION__ && process.env.NODE_ENV === 'development') ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
  ),
);

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, 
  document.getElementById('root'));
  
registerServiceWorker();
