import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';

import LogInForm from 'components/LogInForm';
import { logIn, fetchProfile } from 'actions/membership';

class LogInPage extends Component {
  handleSubmit = ({email, password}) => 
                  this.props.logIn(email, password)
                  .then(r => {
                    console.log('r', r);
                    this.props.fetchProfile()
                    .then(r => console.log('fetchprofile response', r))
                  })
                  .catch(e => console.log('e', e))

  render(){
    return (
      <div>
        <Row>
          <Col xs={10} xsOffset={1} md={6} mdOffset={3} lg={4} lgOffset={4} className="text-center">
            <h2>Iniciar Sesión</h2>
            <LogInForm onSubmit={this.handleSubmit} />
          </Col>
        </Row>        
      </div>
    );
  }
}

const mapDispatchToProps = { logIn, fetchProfile };

export default connect(null, mapDispatchToProps)(LogInPage);