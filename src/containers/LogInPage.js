import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import LogInForm from 'components/LogInForm';
import { logIn } from 'actions/membership';

class LogInPage extends Component {
  render(){
    return (
      <div>
        <Row>
          <Col xs={10} xsOffset={1} md={6} mdOffset={3} lg={4} lgOffset={4} className="text-center">
            <h2>Iniciar Sesión</h2>
            <LogInForm onSubmit={({email, password}) => this.props.logIn(email, password)} />
          </Col>
        </Row>        
      </div>
    );
  }
}

const mapDispatchToProps = { logIn };

export default connect(null, mapDispatchToProps)(LogInPage);