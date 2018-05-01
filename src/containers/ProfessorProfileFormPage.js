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
          <Col xs={12} mdOffset={2} md={8} lgOffset={3} lg={6}>
            <ProfessorProfileForm onSubmit={this.handleSubmit} initialValues={{
              apellidoPaterno: 'Diaz',
              mayorGradoAcademico: 'Dr.',
              horasSemanalesClase: 3
            }}/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ProfessorProfileFormPage;
