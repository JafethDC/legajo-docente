import React from 'react';
import { reduxForm, FieldArray, Field } from 'redux-form';
import { Row, Col, Button, Glyphicon } from 'react-bootstrap';

import Input from 'components/Input';

const renderTrainingItems = ({ fields, meta: { error, submitFailed } }) => (
  <div>
    <Row>
      <Col xs={10} xsOffset={1} md={6} mdOffset={3} className="text-center">
        <Button type="button" onClick={() => fields.push({})}>
          Agregar capacitación
        </Button>
        {submitFailed && error && <span>{error}</span>}
      </Col>
    </Row>
    {fields.map((member, index) => (
      <div>
        <Row key={index}>
          <Col xs={4}>
            <h4>Capacitación #{index + 1}</h4>
          </Col>
          <Col xs={2} xsOffset={6}>
            <Button 
              type="button" 
              bsStyle="danger" 
              className="pull-right" 
              onClick={() => fields.remove(index)}
            >
              <Glyphicon glyph="remove"/>
            </Button>
          </Col>
        </Row>

        <Row>
          <Col xs={5}>
            <Field
              name={`${member}.nombreCurso`}
              type="text"
              component={Input}
              label="Nombre del Curso"
            />
          </Col>
          <Col xs={5}>
            <Field
              name={`${member}.entidad`}
              type="text"
              component={Input}
              label="Entidad"
            />
          </Col>
          <Col xs={2}>
            <Field
              name={`${member}.nroHoras`}
              type="Number"
              component={Input}
              label="# Horas"
            />
          </Col>
        </Row>

      </div>
    ))}
  </div>
);

const FormPart5 = ({handleSubmit, previousPage}) => (
  <form onSubmit={handleSubmit}>
    <FieldArray name="experienceItems" component={renderTrainingItems}/>
    <Row>
      <Col xs={3} className="text-center">
        <Button onClick={previousPage}>Anterior</Button>
      </Col>
    </Row>
  </form>
);

export default reduxForm({
  form: 'professorProfile',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(FormPart5);