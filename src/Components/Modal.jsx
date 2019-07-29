import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Chat from './Chat';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: true,
      isOpen: false
    };

    this.toggle = this.toggle.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }


  sendMessage(){
    this.setState(prevState => ({
      //isOpen: true
    }));  
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}></ModalHeader>
          <ModalBody>
            <div className='modal-head'>
            </div>
            <div className='modal-image-wrapper'>
              <img className='modal-image' src={this.props.image} />
            </div>
            <div className='modal-name'><span className='modal-name-title'>{this.props.name}</span><br />
            {this.props.title}</div>
          </ModalBody>

          <ModalFooter>
            <Button color="primary" onClick={this.sendMessage}>Message</Button>{' '}
            <Chat 
            />

            <Button color="secondary" onClick={this.props.skipPerson}>Skip</Button>

          </ModalFooter>

          <ModalFooter>
            {this.props.bio}
          </ModalFooter>     
          <ModalFooter>
            <div className='modal-skills'>
              <p>Skills</p>
              <div><img src="https://i.imgur.com/zcrGwoB.jpg" alt=""/></div>
              <div><img src="https://i.imgur.com/rd1LjI8.jpg" alt=""/></div>
              <div><img src="https://i.imgur.com/JeWnZHj.png" alt=""/></div>
            </div>
          </ModalFooter>                    
        </Modal>
      </div>
    );
  }
}

export default ModalExample;