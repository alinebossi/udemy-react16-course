import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {name: 'Maria', age: 30},
      {name: 'Aline', age: 20},
      {name: 'Teste', age: 32}
    ]
  }

  switchNameHendler = (newName) => {
    this.setState({
      persons: [
        {name: newName, age: 30},
        {name: 'Maria', age: 20},
        {name: 'Joaquina', age: 32}
      ]
    })
  }

  nameChangeHendler = (event) => {
    this.setState({
      persons: [
        {name: 'Maria', age: 30},
        {name: event.target.value, age: 20},
        {name: 'Teste', age: 32}
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1> Hello </h1>
        <button onClick={ this.switchNameHendler.bind(this, 'Testeee') }> Switch name </button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}> My hobbie is blabla </Person>
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHendler}
          changed={this.nameChangeHendler}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
