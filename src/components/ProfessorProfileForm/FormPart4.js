import React from 'react';
import { reduxForm, FieldArray, Field } from 'redux-form';
import { Row, Col, Button } from 'react-bootstrap';

import Input from 'components/Input';

const renderExperienceItems = ({ fields, meta: { error, submitFailed } }) => (
  <div>
    <div>
      <button type="button" onClick={() => fields.push({})}>
        Agregar experiencia laboral
      </button>
      {submitFailed && error && <span>{error}</span>}
    </div>
    {fields.map((member, index) => (
      <Row key={index}>
        <Button
          type="button"
          onClick={() => fields.remove(index)}
        >
          Remover experiencia
        </Button>
        <h4>Experiencia #{index + 1}</h4>
        <Field
          name={`${member}.entidad`}
          type="text"
          component={Input}
          label="Entidad"
        />
        <Field
          name={`${member}.funcion`}
          type="text"
          component={Input}
          label="Función Desempeñada"
        />
        <Field
          name={`${member}.noAnos`}
          type="number"
          component={Input}
          label="Número de años"
        />
        <Field
          name={`${member}.noMeses`}
          type="number"
          component={Input}
          label="Número de meses"
        />
      </Row>
    ))}
  </div>
);

const FormPart4 = ({handleSubmit, previousPage}) => (
  <form onSubmit={handleSubmit}>
    <FieldArray name="experienceItems" component={renderExperienceItems}/>

    <Row>
      <Col xs={2} >
        <Button onClick={previousPage}>Anterior</Button>
      </Col>
    </Row>
  </form>
);

export default reduxForm({
  form: 'professorProfile',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(FormPart4);