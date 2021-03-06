import React from 'react';
import { Button, Row, Col, Alert } from 'react-bootstrap';
import { reduxForm, Field } from 'redux-form'

import Input from 'components/Input';

const LogInForm = ({handleSubmit, error}) => (
  <form onSubmit={handleSubmit}>
    <Row>
      <Col xs={10} xsOffset={1}>
        <Field name="email" label="Email" component={Input} type="email" />
      </Col>
    </Row>

    <Row>
      <Col xs={10} xsOffset={1}>
        <Field name="password" label="Password" component={Input} type="password" />
      </Col>
    </Row>

    {error && (
      <Row>
        <Col xs={10} xsOffset={1}>
          <Alert bsStyle="danger">
            <strong>{error}</strong>
          </Alert>
        </Col>
      </Row>
    )}

    <Row>
      <Col xs={6} xsOffset={3} className="text-center">
        <Button type="submit">Entrar</Button>
      </Col>
    </Row>
  </form>
);

export default reduxForm({
  form: 'logIn',
})(LogInForm);