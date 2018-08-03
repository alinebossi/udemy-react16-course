import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    persons: [
      {id:'1', name: 'Maria', age: 30},
      {id:'2',name: 'Aline', age: 20},
      {id:'3',name: 'Teste', age: 32}
    ],
    showPerson: false
  }

  togglePersonHandler = () => {
    this.setState({
      showPerson: true
    })
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

  deletePersonHendler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons:persons});
  }

  nameChangeHendler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p=>{
      return p.id === id
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name=event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons })
  }

  render() {

    let people = null;

    if(this.state.showPerson){
      people = (
        <div> 
          {this.state.persons.map((p,index) => {
              return <Person 
                      click={() => this.deletePersonHendler(index) }
                      name={p.name} 
                      age={p.age}
                      key={p.id}
                      changed={(event)=> this.nameChangeHendler(event, p.id)}> 
                  </Person>
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1> Hello </h1>
        <button onClick={ this.switchNameHendler.bind(this, 'Testeee') }> Switch name </button>
        <button onClick={ this.togglePersonHandler }> Toggler </button>

       {people}
       
      </div>
    );
  }
}

export default App;
