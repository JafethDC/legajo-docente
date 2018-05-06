import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import ProfessorProfileFormPage from 'containers/ProfessorProfileFormPage';
import LogInPage from 'containers/LogInPage';
import NotFoundPage from 'containers/NotFoundPage';
import Navbar from 'components/Navbar';
import PrivateRoute from 'components/PrivateRoute';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Switch>
          <Route path="/login" component={LogInPage}/>
          <PrivateRoute path="/profile" component={ProfessorProfileFormPage}/>
          <Redirect from="/" to="/profile" exact />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
