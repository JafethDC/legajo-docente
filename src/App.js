import React, { Component } from 'react';

import ProfessorProfileFormPage from 'containers/ProfessorProfileFormPage';
import Navbar from 'components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <ProfessorProfileFormPage/>
      </div>
    );
  }
}

export default App;
