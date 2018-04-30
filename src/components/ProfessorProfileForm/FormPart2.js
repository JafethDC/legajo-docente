import React, { Component } from 'react';
import { reduxForm, Field, change } from 'redux-form';
import { Row, Col, Button, Glyphicon, FormGroup, ControlLabel } from 'react-bootstrap';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';

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

class FormPart2 extends Component {
  state = {
    loadedCV: null
  }

  onDropFile = acceptedFiles => {
    console.log('accepted files', acceptedFiles);
    if (acceptedFiles.length) {
      this.props.change('professorProfile', 'cv', acceptedFiles[0]);
      this.setState({
        loadedCV: acceptedFiles[0]
      });
    }
  }

  render(){
    const { nextPage, previousPage, handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit}>
        <Row>
          <Col xs={12}>
            <Field name="mayorGradoAcademico" label="Mayor grado académico" component={Input} type="text" />
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <Field
              name="mencionMayorGradoAcademico"
              label="Mención del mayor grado académico"
              component={Input}
              type="text" />
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <Field
              name="universidadMayorGradoAcademico"
              label="Universidad que otorgó el mayor grado académico"
              component={Input}
              type="text" />
          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <Field
              name="paisMayorGradoAcademico"
              label="País de la universidad que otorgó el mayor grado académico"
              component={Input}
              type="text" />

          </Col>
        </Row>

        <Row>
          <Col xs={12}>
            <FormGroup>
              <ControlLabel>Curriculum Vitae</ControlLabel>
              <div>
                <Field name="cv" component="input" type="hidden" />
                <Dropzone
                  ref="dropzone"
                  onDrop={this.onDropFile}
                  multiple={false}
                  accept="application/pdf"
                  style={dropzoneStyle.default}
                  activeStyle={dropzoneStyle.active}
                  rejectStyle={dropzoneStyle.reject}
                  acceptStyle={dropzoneStyle.accept}>
                  {({ isDragActive, isDragReject, acceptedFiles, rejectedFiles }) => {
                    let content;
                    if (isDragReject) {
                      content = <Glyphicon className="glyphicon dropzone-icon" glyph="ban-circle" />
                    } else if (isDragActive) {
                      content = <Glyphicon className="glyphicon dropzone-icon" glyph="plus" />
                    } else {
                      if (acceptedFiles.length) {
                        content = (
                          <div>
                            <Glyphicon className="glyphicon dropzone-icon" glyph="book" />
                            <br />{acceptedFiles[0].name}
                          </div>
                        );
                      } else {
                        content = <Glyphicon className="glyphicon dropzone-icon" glyph="plus" />;
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
          <Col xs={2} >
            <Button onClick={previousPage}>Anterior</Button>
          </Col>
          <Col xs={2} xsOffset={8}>
            <Button onClick={nextPage}>Siguiente</Button>
          </Col>
        </Row>
      </form>
    );
  }
}

const mapDispatchToProps = { change };

export default reduxForm({
  form: 'professorProfile',
  destroyOnUnmount: false,
  forceUnregisterOnUnmount: true,
})(connect(null, mapDispatchToProps)(FormPart2));
