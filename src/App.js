import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProfessorProfileFormPage from 'containers/ProfessorProfileFormPage';
import LogInPage from 'containers/LogInPage';
import Navbar from 'components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        { this.props.currentUser ? <ProfessorProfileFormPage/> : <LogInPage/>}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

export default connect(mapStateToProps)(App);
