import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

import ProfessorProfileFormPage from 'containers/ProfessorProfileFormPage';
import LogInPage from 'containers/LogInPage';
import NotFoundPage from 'containers/NotFoundPage';
import Navbar from 'components/Navbar';
import PrivateRoute from 'components/PrivateRoute';

class App extends Component {
  render() {
    const { isAuthenticated } = this.props;

    return (
      <div className="App">
        <Navbar/>
        <Switch>
          <Route 
            path="/login" 
            render={props => isAuthenticated ? <Redirect to="/profile"/> : <LogInPage {...props}/>}
          />
          <PrivateRoute path="/profile" component={ProfessorProfileFormPage}/>
          
          <Redirect from="/" to="/profile" exact />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: !!state.session.currentUser
});

export default withRouter(connect(mapStateToProps)(App));
