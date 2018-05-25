import React, { Component } from 'react';
import { Panel, ListGroup, ListGroupItem, Modal } from 'react-bootstrap';

import ProfileFormFields from 'components/ProfessorProfileForm/fieldMappings';

class ChangesPanel extends Component {
  state = {
    detailModalOpen: false,
    detailModalData: null
  }

  handleChangeClick = change => () => this.setState({detailModalOpen: true, detailModalData: change})

  closeDetailModal = () => this.setState({detailModalOpen: false, detailModalData: null})

  render(){
    const { changes } = this.props;
    const { detailModalOpen, detailModalData } = this.state;

    return (
      <Panel>
        <Panel.Heading>
          Cambios recientes
        </Panel.Heading>
        <Panel.Body>
          <ListGroup>
            {changes.map((change, i) => (
              <ListGroupItem key={i} onClick={this.handleChangeClick(change)}>
                <ul className="list-unstyled">
                  {change.fields.map((field, j) => 
                  <li key={j}>
                    <strong>{ProfileFormFields[field.name] || field.name}:</strong> {field.value}
                  </li>)}
                </ul>
              </ListGroupItem>
            ))}        
          </ListGroup>
        </Panel.Body>
        <Modal show={detailModalOpen} onHide={this.closeDetailModal}>
          <Modal.Header>Cambio</Modal.Header>
          <Modal.Body>
            {detailModalData && (
            <div>
              <div>{detailModalData.date}</div>
              <h3>{detailModalData.author.name}</h3>
              <ul className="list-unstyled">
                  {detailModalData.fields.map((field, j) => 
                  <li key={j}>
                    <strong>{ProfileFormFields[field.name] || field.name}:</strong> {field.value}
                  </li>)}
                </ul>
            </div>)}
          </Modal.Body>
        </Modal>
      </Panel>
    );
  }
}

export default ChangesPanel;