import React, { Component } from 'react';
import { Tabs, Tab, Button, Row, Col } from 'react-bootstrap';
import { submit } from 'redux-form';
import { connect } from 'react-redux';

import FormPart1 from './FormPart1';
import FormPart2 from './FormPart2';
import FormPart3 from './FormPart3';

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
        >
          <Tab eventKey={1} title="Parte 1" >
            <div className="tab-container">
              <FormPart1 nextPage={this.nextPage} onSubmit={onSubmit} initialValues={initialValues}/>
            </div>
          </Tab>
          <Tab eventKey={2} title="Parte 2" >
            <div className="tab-container">
              <FormPart2 
                previousPage={this.previousPage} 
                nextPage={this.nextPage} 
                onSubmit={onSubmit} 
                initialValues={initialValues}
              />
            </div>
          </Tab>
          <Tab eventKey={3} title="Parte 3" >
            <div className="tab-container">
              <FormPart3 previousPage={this.previousPage} onSubmit={onSubmit} initialValues={initialValues}/>
            </div>
          </Tab>
        </Tabs>
        <Row>
          <Col xs={6} xsOffset={3} md={4} mdOffset={4} lg={2} lgOffset={5}>
            <Button onClick={() => submit('professorProfile')}>Guardar</Button>
          </Col>
        </Row>
      </div>
    );
  }
}

const mapDispatchToProps = { submit };

export default connect(null, mapDispatchToProps)(ProfessorProfileForm);
