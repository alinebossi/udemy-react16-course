import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hello </h1>
        <p> teste </p>
        <Person name="maria" age="30"> My hobbie is blabla </Person>
        <Person name="aline" age="28"/>
        <Person name="teste" age="22"/>
      </div>
    );
  }
}

export default App;
