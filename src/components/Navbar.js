import React from 'react';
import { connect } from 'react-redux';

import { logOut } from 'actions/membership';

const Navbar = ({currentUser}) => (
  <nav className="navbar navbar-default">
    <div className="container-fluid">
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand">Legajo docente</a>
      </div>

      <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul className="nav navbar-nav navbar-right">
          {currentUser && <li><a>Salir</a></li>}
        </ul>
      </div>
    </div>
  </nav>
);

const mapStateToProps = state => ({
  currentUser: state.session.currentUser
});

const mapDispatchToProps = { logOut };

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
