import React, { Component } from 'react';
import Phonebook from "./components/Phonebook.js";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Phonebook />
      </div>
    );
  }
}

export default App;
