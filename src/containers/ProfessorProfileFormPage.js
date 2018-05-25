import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';

import ProfessorProfileForm from 'components/ProfessorProfileForm';
import ChangesPanel from 'components/ChangesPanel';

class ProfessorProfileFormPage extends Component {
  changes = [
    {
      date: '23/05/2017',
      fields: [
        {
          name: 'tlfFijo',
          value: '349-9574'
        },
        {
          name: 'tlfCelular',
          value: '982-333-532'
        }
      ],
      author: {
        id: 1,
        name: 'Pedro Suarez '
      }
    },
    {
      date: '23/05/2017',
      fields: [
        {
          name: 'grupoInvestigacion',
          value: 'blockchain'
        },
      ],
      author: {
        id: 2,
        name: 'Pablito Ramirez '
      },
      
    },
    {
      date: '23/05/2017',
      fields: [
        {
          name: 'grupoInvestigacion',
          value: 'blockchain'
        },
      ],
      author: {
        id: 2,
        name: 'Pablito Ramirez '
      },
      
    }
  ]

  handleSubmit = values => {
    alert(JSON.stringify(values, null, 2));
  }

  render(){
    return (
      <div className="professor-profile-form-container">
        <Row>
          <Col xs={12} md={8} mdOffset={1}>
            <ProfessorProfileForm onSubmit={this.handleSubmit} initialValues={{}}/>
          </Col>
          <Col xs={12} md={3} >
            <ChangesPanel changes={this.changes} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default ProfessorProfileFormPage;
