import React from 'react';
import { reduxForm, Field, getFormValues } from 'redux-form';
import { Row, Col, Button, FormGroup, ControlLabel } from 'react-bootstrap';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';

import Input from 'components/Input';
import * as Validators from './validators';

const numberInputParse = val => isNaN(parseInt(val, 10)) ? null : parseInt(val, 10);

const FormPart3 = ({ handleSubmit, totalHorasSemanales, previousPage }) => 
(
  <form onSubmit={handleSubmit}>
    <Row>
      <Col xs={6}>
        <Field
          name="fechaIngreso"
          label="Fecha de ingreso como docente"
          component={Input}
          type="date" 
          validate={Validators.beforeToday}/>
      </Col>
      <Col xs={6}>
        <FormGroup>
          <ControlLabel>Era docente universitario a la entrada en vigencia de la ley 30220</ControlLabel>
          <Field name="docenteLey30220" component="input" type="checkbox" style={{ display: 'block' }} />
        </FormGroup>
      </Col>
    </Row>

    <Row>
      <Col xs={3}>
        <ControlLabel>Niveles de programa de estudio en los que da clase</ControlLabel>
      </Col>

      <Col xs={3}>
        <FormGroup>
          <ControlLabel>Pregrado</ControlLabel>
          <Field name="dictaPregrado" component="input" type="checkbox" style={{ display: 'block' }} />
        </FormGroup>
      </Col>

      <Col xs={3}>
        <FormGroup>
          <ControlLabel>Maestría</ControlLabel>
          <Field name="dictaMaestria" component="input" type="checkbox" style={{ display: 'block' }} />
        </FormGroup>
      </Col>

      <Col xs={3}>
        <FormGroup>
          <ControlLabel>Doctorado</ControlLabel>
          <Field name="dictaDoctorado" component="input" type="checkbox" style={{ display: 'block' }} />
        </FormGroup>
      </Col>
    </Row>

    <Row>
      <Col xs={6}>
        <Field name="categoriaDocente" label="Categoría docente" component={Input} componentClass="select">
          <option value="ordinario-asociado">Ordinario Asociado</option>
          <option value="ordinario-principal">Ordinario Principal</option>
          <option value="ordinario-auxiliar">OrdinarioAuxiliar</option>
        </Field>
      </Col>

      <Col xs={6}>
        <Field name="categoriaDocente" label="Categoría docente" component={Input} componentClass="select">
          <option value="tiempo-parcial">Tiempo parcial</option>
          <option value="tiempo-completo">Tiempo completo</option>
        </Field>
      </Col>
    </Row>

    <Row>
      <Col xs={3}>
        <ControlLabel>Número de horas semanales fijados por</ControlLabel>
      </Col>

      <Col xs={3}>
          <Field 
            name="horasSemanalesClase" 
            label="Clases" 
            component={Input} 
            type="number" 
            parse={numberInputParse}
            validate={Validators.minValue(0)}/>
      </Col>

      <Col xs={3}>
          <Field 
            name="horasSemanalesOtros" 
            label="Otras actividades" 
            component={Input} 
            type="number" 
            parse={numberInputParse} 
            validate={Validators.minValue(0)}/>
      </Col>

      <Col xs={3}>
        <ControlLabel>Total</ControlLabel>
        <span style={{ display: 'block' }}>{totalHorasSemanales}</span>
      </Col>
    </Row>

    <Row>
      <Col xs={6}>
        <FormGroup>
          <ControlLabel>Es docente investigador</ControlLabel>
          <Field name="docenteInvestigador" component="input" type="checkbox" style={{ display: 'block' }} />
        </FormGroup>
      </Col>
      <Col xs={6}>
        <FormGroup>
          <ControlLabel>Está registrado en DINA</ControlLabel>
          <Field name="registradoDINA" component="input" type="checkbox" style={{ display: 'block' }} />
        </FormGroup>
      </Col>
    </Row>

    <Row>
      <Col xs={2} >
        <Button onClick={previousPage}>Anterior</Button>
      </Col>
      <Col xs={2} xsOffset={8}>
        <Button type="submit" bsStyle="success">Enviar</Button>
      </Col>
    </Row>
  </form>
)

const totalHorasSemanalesSelector = createSelector(
  getFormValues('professorProfile'),
  (values) => values && (values.horasSemanalesClase || 0) + (values.horasSemanalesOtros || 0)
);

const mapStateToProps = state => ({
  totalHorasSemanales: totalHorasSemanalesSelector(state)
});

export default reduxForm({
  form: 'professorProfile',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(connect(mapStateToProps)(FormPart3));
