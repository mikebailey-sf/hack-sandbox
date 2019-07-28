import React, { Component } from 'react';
import './App.css';
import Modal from './Components/Modal';
import { Button } from 'reactstrap';
import people from './data.json';

class App extends Component {

  constructor(e){
    super();
    this.skipPerson = this.skipPerson.bind(this);
    this.state = {
      chat: false,
      currentPerson: 0
    };
  }

  skipPerson(){
    let newPerson = this.state.currentPerson + 1;
    if (!people[newPerson]){
      newPerson = 0;
    }
    this.setState({
      currentPerson: newPerson
    });
  }

  render() {
    return (
      <div>
        <Modal
          skipPerson = {this.skipPerson}
          name={people[this.state.currentPerson].name}
          title={people[this.state.currentPerson].title}
          bio={people[this.state.currentPerson].bio}
          image={people[this.state.currentPerson].image}
        />
      </div>
    );
  }
}
export default App;