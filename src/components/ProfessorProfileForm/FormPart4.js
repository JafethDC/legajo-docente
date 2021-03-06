import React from 'react';
import { reduxForm, FieldArray, Field } from 'redux-form';
import { Row, Col, Button, Glyphicon } from 'react-bootstrap';

import Input from 'components/Input';

const renderExperienceItems = ({ fields, meta: { error, submitFailed } }) => (
  <div>
    <Row>
      <Col xs={10} xsOffset={1} md={6} mdOffset={3} className="text-center">
        <Button type="button" onClick={() => fields.push({})}>
          Agregar experiencia laboral
        </Button>
        {submitFailed && error && <span>{error}</span>}
      </Col>
    </Row>
    {fields.map((member, index) => (
      <div>
        <Row key={index}>
          <Col xs={4}>
            <h4>Experiencia #{index + 1}</h4>
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
          <Col xs={6}>
            <Field
              name={`${member}.entidad`}
              type="text"
              component={Input}
              label="Entidad"
            />
          </Col>
          <Col xs={6}>
            <Field
              name={`${member}.funcion`}
              type="text"
              component={Input}
              label="Función Desempeñada"
            />
          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <Field
              name={`${member}.noAnos`}
              type="number"
              component={Input}
              label="Número de años"
            />
          </Col>
          <Col xs={6}>
            <Field
              name={`${member}.noMeses`}
              type="number"
              component={Input}
              label="Número de meses"
            />
          </Col>
        </Row>

      </div>
    ))}
  </div>
);

const FormPart4 = ({handleSubmit, previousPage, nextPage}) => (
  <form onSubmit={handleSubmit}>
    <FieldArray name="experienceItems" component={renderExperienceItems}/>

    <Row>
      <Col xs={3} className="text-center">
        <Button onClick={previousPage}>Anterior</Button>
      </Col>
      <Col xs={3} xsOffset={6} className="text-center">
        <Button onClick={nextPage}>Siguiente</Button>
      </Col>
    </Row>
  </form>
);

export default reduxForm({
  form: 'professorProfile',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(FormPart4);