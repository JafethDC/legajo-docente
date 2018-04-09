import React, { Component } from 'react';
import { reduxForm, Form, Field, change, getFormValues } from 'redux-form';
import { connect } from 'react-redux';
import { Row, Col, Button, Glyphicon, FormGroup, ControlLabel } from 'react-bootstrap';
import Dropzone from 'react-dropzone';
import { createSelector } from 'reselect';

import Input from 'components/Input';

const dropzoneStyle = {
  default: {
    width: 110,
    height: 110,
    borderWidth: 2,
    borderColor: '#666666',
    borderStyle: 'dashed',
    borderRadius: 5,
    display: 'inline-block'
  },
  active: {
    borderStyle: 'solid'
  },
  accept: {
    borderColor: '#5cb85c',
    color: '#5cb85c'
  },
  reject: {
    borderColor: '#d9534f',
    color: '#d9534f'
  },
  disabled: {
  }
};

class ProfessorProfileForm extends Component {
  state = {
    loadedCV: null
  }

  onDropFile = acceptedFiles => {
    console.log('accepted files', acceptedFiles);
    if(acceptedFiles.length){
      this.props.change(PROFESSOR_PROFILE_FORM_NAME, 'cv', acceptedFiles[0]);
      this.setState({
        loadedCV: acceptedFiles[0]
      });
    }
  }

  render(){
    const { handleSubmit, totalHorasSemanales } = this.props;

    return (
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col xs={12}>
            <Field name="apellidoPaterno" label="Apellido Paterno" component={Input} type="text"/>
          </Col>
        </Row>
    
        <Row>
          <Col xs={12}>
            <Field name="apellidoMaterno" label="Apellido Materno" component={Input} type="text"/>
          </Col>
        </Row>
    
        <Row>
          <Col xs={12}>
            <Field name="nombres" label="Nombres" component={Input} type="text"/>
          </Col>
        </Row>
    
        <Row>
          <Col xs={12}>
            <Field name="nacionalidad" label="Nacionalidad" component={Input} type="text"/>
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
            <Field name="nroDocumento" label="Nro. de documento" component={Input} type="text"/>
          </Col>
        </Row>
    
        <Row>
          <Col xs={12}>
            <Field name="tlfFijo" label="Número telefónico" component={Input} type="text"/>
          </Col>
        </Row>
    
        <Row>
          <Col xs={12}>
            <Field name="tlfCelular" label="Número de móvil" component={Input} type="text"/>
          </Col>
        </Row>
    
        <Row>
          <Col xs={12}>
            <Field name="email" label="Correo electrónico" component={Input} type="text"/>
          </Col>
        </Row>
    
        <Row>
          <Col xs={12}>
            <Field name="mayorGradoAcademico" label="Mayor grado académico" component={Input} type="text"/>
          </Col>
        </Row>
    
        <Row>
          <Col xs={12}>
            <Field 
              name="mencionMayorGradoAcademico" 
              label="Mención del mayor grado académico" 
              component={Input} 
              type="text"/>
          </Col>
        </Row>
    
        <Row>
          <Col xs={12}>
            <Field 
              name="universidadMayorGradoAcademico" 
              label="Universidad que otorgó el mayor grado académico" 
              component={Input} 
              type="text"/>
          </Col>
        </Row>
    
        <Row>
          <Col xs={12}>
            <Field 
              name="paisMayorGradoAcademico" 
              label="País de la universidad que otorgó el mayor grado académico" 
              component={Input} 
              type="text"/>

          </Col>
        </Row>
    
        <Row>
          <Col xs={12}>
            <FormGroup>
              <ControlLabel>Curriculum Vitae</ControlLabel>
              <div>
                <Field name="cv" component="input" type="hidden"/>
                <Dropzone 
                  ref="dropzone"
                  onDrop={this.onDropFile}
                  multiple={false}
                  accept="application/pdf"
                  style={dropzoneStyle.default}
                  activeStyle={dropzoneStyle.active}
                  rejectStyle={dropzoneStyle.reject}
                  acceptStyle={dropzoneStyle.accept}>
                  {({isDragActive, isDragReject, acceptedFiles, rejectedFiles}) => {
                    let content;
                    if(isDragReject){
                      content = <Glyphicon className="glyphicon dropzone-icon" glyph="ban-circle"/>
                    }else if(isDragActive){
                      content = <Glyphicon className="glyphicon dropzone-icon" glyph="plus"/>
                    }else {
                      if(acceptedFiles.length){
                        content = (
                          <div>
                            <Glyphicon className="glyphicon dropzone-icon" glyph="book"/>
                            <br/>{acceptedFiles[0].name}
                          </div>
                        );
                      }else{
                        content = <Glyphicon className="glyphicon dropzone-icon" glyph="plus"/>;
                      }
                    }

                    return (
                      <div>
                        {content}
                      </div>
                    );
                  }}          
                </Dropzone>

              </div>
            </FormGroup>

          </Col>
        </Row>

        <Row>
          <Col xs={6}>
            <Field 
                name="fechaIngreso" 
                label="Fecha de ingreso como docente" 
                component={Input} 
                type="date"/>
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
              <Field name="dictaPregrado" component="input" type="checkbox" />
            </FormGroup>
          </Col>

          <Col xs={3}>
            <FormGroup>
              <ControlLabel>Maestría</ControlLabel>
              <Field name="dictaMaestria" component="input" type="checkbox" />
            </FormGroup>
          </Col>

          <Col xs={3}>
            <FormGroup>
              <ControlLabel>Doctorado</ControlLabel>
              <Field name="dictaDoctorado" component="input" type="checkbox" />
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
            <Field name="horasSemanalesClase" label="Clases" component={Input} type="number" parse={val => isNaN(parseInt(val, 10)) ? null : parseInt(val, 10)} />
          </Col>

          <Col xs={3}>
            <Field name="horasSemanalesOtros" label="Otras actividades" component={Input} type="number" parse={val => isNaN(parseInt(val, 10)) ? null : parseInt(val, 10)} />
          </Col>

          <Col xs={3}>
            <ControlLabel>Total</ControlLabel>
            <span style={{display: 'block'}}>{totalHorasSemanales}</span>
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
          <Col xsOffset={5} xs={2}>
            <Button bsStyle="success" type="submit">Guardar</Button>
          </Col>
        </Row>
      </Form>
    );
  }
}

const PROFESSOR_PROFILE_FORM_NAME = 'professorProfile';

const totalHorasSemanalesSelector = createSelector(
  getFormValues(PROFESSOR_PROFILE_FORM_NAME),
  (values) => values && (values.horasSemanalesClase || 0) + (values.horasSemanalesOtros || 0)
);

const mapStateToProps = state => ({
  totalHorasSemanales: totalHorasSemanalesSelector(state)
});
const mapDispatchToProps = { change };

export default reduxForm({
  form: PROFESSOR_PROFILE_FORM_NAME
})(connect(mapStateToProps, mapDispatchToProps)(ProfessorProfileForm));
