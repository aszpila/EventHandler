import React, { Component } from 'react';
import './App.css';
import Events from '../components/events/events';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Provide some data to add event!</h1>
        </header>
        <Events />
      </div>
    );
  }
}

export default App;
