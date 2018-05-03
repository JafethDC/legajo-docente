import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import ProfessorProfileForm from 'components/ProfessorProfileForm';

class ProfessorProfileFormPage extends Component {
  handleSubmit = values => {
    alert(JSON.stringify(values, null, 2));
  }

  render(){
    return (
      <div className="professor-profile-form-container">
        <Row>
          <Col xs={12} mdOffset={1} md={10} lgOffset={2} lg={8}>
            <ProfessorProfileForm onSubmit={this.handleSubmit} initialValues={{}}/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ProfessorProfileFormPage;
