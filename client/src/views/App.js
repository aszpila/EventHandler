import React, { Component } from 'react';
import './App.css';
import DataForm from '../components/DataForm';

class App extends Component {
  render() {
    return (
      <div className="App">      
        <div>
          <DataForm />
        </div> 
      </div>
    );
  }
}

export default App;
