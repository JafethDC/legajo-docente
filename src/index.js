import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';

import 'index.css';
import App from 'App';
import rootReducer from 'reducers';
import registerServiceWorker from 'registerServiceWorker';

const store = createStore(
  rootReducer,
  compose(
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>, 
  document.getElementById('root'));
  
registerServiceWorker();
