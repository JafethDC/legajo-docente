import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Row, Col, Button } from 'react-bootstrap';

import Input from 'components/Input';

const FormPart1 = props => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <Row>
        <Col xs={6}>
          <Field name="apellidoPaterno" label="Apellido Paterno" component={Input} type="text" />
        </Col>
        <Col xs={6}>
          <Field name="apellidoMaterno" label="Apellido Materno" component={Input} type="text" />
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <Field name="nombres" label="Nombres" component={Input} type="text" />
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <Field name="nacionalidad" label="Nacionalidad" component={Input} type="text" />
        </Col>
      </Row>

      <Row>
        <Col xs={6}>
          <Field name="tipoDocumento" label="Tipo de documento" component={Input} componentClass="select">
            <option value="dni">DNI</option>
            <option value="carneExtranjeria">Carne de extranjeria</option>
          </Field>
        </Col>

        <Col xs={6}>
          <Field name="nroDocumento" label="Nro. de documento" component={Input} type="text" />
        </Col>
      </Row>

      <Row>
        <Col xs={6}>
          <Field name="tlfFijo" label="Número telefónico" component={Input} type="text" />
        </Col>
        <Col xs={6}>
          <Field name="tlfCelular" label="Número de móvil" component={Input} type="text" />
        </Col>
      </Row>

      <Row>
        <Col xs={12}>
          <Field name="email" label="Correo electrónico" component={Input} type="text" />
        </Col>
      </Row>

      <Row>
        <Col xs={2} xsOffset={10}>
          <Button type="submit">Siguiente</Button>
        </Col>
      </Row>
    </form>
  )
}

export default reduxForm({
  form: 'professorProfile',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(FormPart1);
