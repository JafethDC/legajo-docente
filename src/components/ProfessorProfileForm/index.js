import React, { Component } from 'react';
import FormPart1 from './FormPart1';
import FormPart2 from './FormPart2';
import FormPart3 from './FormPart3';

class ProfessorProfileForm extends Component {
  state = {
    page: 1
  }

  nextPage = () => this.setState({ page: this.state.page + 1 })

  previousPage = () => this.setState({ page: this.state.page - 1 })

  render() {
    const { onSubmit } = this.props
    const { page } = this.state
    return (
      <div>
        {page === 1 && <FormPart1 onSubmit={this.nextPage} />}
        {page === 2 && (
          <FormPart2
            previousPage={this.previousPage}
            onSubmit={this.nextPage}
          />
        )}
        {page === 3 && (
          <FormPart3
            previousPage={this.previousPage}
            onSubmit={onSubmit}
          />
        )}
      </div>
    )
  }
}

export default ProfessorProfileForm;
