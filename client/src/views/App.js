import React, { Component } from 'react';
import './App.css';
import DataForm from '../components/DataForm';

class App extends Component {
  render() {
    return (
      <div className="App">      
        <header className="App-header">
          <h1 className="App-title">Provide some data to add event</h1>
        </header>
        <div>
          <DataForm />
        </div> 
      </div>
    );
  }
}

export default App;
