import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProfessorProfileFormPage from 'containers/ProfessorProfileFormPage';
import LogInPage from 'containers/LogInPage';
import Navbar from 'components/Navbar';
import { logOut } from 'actions/membership';

class App extends Component {
  componentWillUnmount(){
    this.props.logOut();
  }

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

const mapDispatchToProps = { logOut };

export default connect(mapStateToProps, mapDispatchToProps)(App);
