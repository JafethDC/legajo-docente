import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import ProfessorProfileForm from 'components/ProfessorProfileForm';

class ProfessorProfileFormPage extends Component {
  handleSubmit = values => {
    alert(JSON.stringify(values, null, 2));
  }

  render(){
    return (
      <div>
        <Row>
          <Col xsOffset={3} xs={6}>
            <ProfessorProfileForm onSubmit={this.handleSubmit}/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ProfessorProfileFormPage;