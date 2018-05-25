import React, { Component } from 'react';
import { Tabs, Tab, Button, Row, Col } from 'react-bootstrap';
import { submit } from 'redux-form';
import { connect } from 'react-redux';

import FormPart1 from './FormPart1';
import FormPart2 from './FormPart2';
import FormPart3 from './FormPart3';
import FormPart4 from './FormPart4';
import FormPart5 from './FormPart5';

class ProfessorProfileForm extends Component {
  state = {
    activeKey: 1,
  }

  nextPage = () => this.setState(prevState => ({ activeKey: prevState.activeKey + 1 }))

  previousPage = () => this.setState(prevState => ({ activeKey: prevState.activeKey - 1 }))

  handleTabSelect = key => this.setState({activeKey: key})

  render(){
    const { onSubmit, submit, initialValues } = this.props;
    const { activeKey } = this.state;

    return (
      <div>
        <Tabs
          activeKey={activeKey}
          onSelect={this.handleTabSelect}
          id="professor-profile-form"
          mountOnEnter
          unmountOnExit
          animation={false}
        >
          <Tab eventKey={1} title="Información Profesional" >
            <div className="tab-container">
              <Row>
                <Col xs={12} md={8} mdOffset={2}>
                  <FormPart1 nextPage={this.nextPage} onSubmit={onSubmit} initialValues={initialValues} />
                </Col>
              </Row>
            </div>
          </Tab>

          <Tab eventKey={2} title="Perfil Académico" >
            <div className="tab-container">
              <Row>
                <Col xs={12} md={8} mdOffset={2}>
                  <FormPart2
                    previousPage={this.previousPage}
                    nextPage={this.nextPage}
                    onSubmit={onSubmit}
                    initialValues={initialValues}
                  />
                </Col>
              </Row>
            </div>
          </Tab>
          
          <Tab eventKey={3} title="Información Docente" >
            <div className="tab-container">
              <FormPart3 
                previousPage={this.previousPage} 
                nextPage={this.nextPage}
                onSubmit={onSubmit} 
                initialValues={initialValues}
              />
            </div>
          </Tab>

          <Tab eventKey={4} title="Experiencia Laboral">
            <div className="tab-container">
              <Row>
                <Col xs={12} md={10} mdOffset={1}>
                  <FormPart4 
                    previousPage={this.previousPage}
                    nextPage={this.nextPage}
                    onSubmit={onSubmit}
                    initialValues={initialValues}
                  />
                </Col>
              </Row>
            </div>
          </Tab>

          <Tab eventKey={5} title="Capacitaciones">
            <div className="tab-container">
              <Row>
                <Col xs={12} md={10} mdOffset={1}>
                  <FormPart5 
                    previousPage={this.previousPage}
                    onSubmit={onSubmit}
                    initialValues={initialValues}
                  />
                </Col>
              </Row>
            </div>
          </Tab>
        </Tabs>
        
        <Row>
          <Col xs={6} xsOffset={3} md={4} mdOffset={4} lg={2} lgOffset={5} className="text-center">
            <Button onClick={() => submit('professorProfile')} bsStyle="primary">Guardar</Button>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapDispatchToProps = { submit };

export default connect(null, mapDispatchToProps)(ProfessorProfileForm);
