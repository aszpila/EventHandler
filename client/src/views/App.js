import React, { Component } from 'react';
import '../styles/App.css';
import DataForm from '../components/DataForm';

class App extends Component {
  render() {
    return (
      <div className="app">      
        <div className="app-body">
          <DataForm />
        </div> 
      </div>
    );
  }
}

export default App;