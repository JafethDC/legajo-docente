import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

export default class Input extends Component {
  render () {
    const {
      feedbackIcon,
      input,
      label,
      type,
      componentClass,
      hideErrorMessage,
      required,
      meta: { error, warning, touched, asyncValidating },
      ...props
    } = this.props;

    let message;
    // eslint-disable-next-line no-mixed-operators
    const validationState = touched && ( error && "error" ) || ( warning && "warning" ) || null;
    if ( !hideErrorMessage && touched && ( error || warning ) ) {
      message = <span className="help-block">{ error || warning }</span>;
    }

    return (
      <FormGroup validationState={ validationState }>
        <ControlLabel className={required ? "required" : ""}>{ label }</ControlLabel>
        <FormControl { ...input }
                     componentClass={componentClass}
                     type={ type }
                     { ...props }
                     className={asyncValidating ? 'async-validating' : ''} >
          {this.props.children}
        </FormControl>
        {<FormControl.Feedback>{ feedbackIcon }</FormControl.Feedback> }
        { message }
        { asyncValidating ? 'validating' : '' }
      </FormGroup>
    );
  }
}