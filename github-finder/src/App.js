import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const name = 'Kiran';
    const loading = true;

    return (
      <div className='App'>
        
        {loading ? <h4>Loading..</h4> : <h1>Hello from {name}</h1>}
      </div>
    );
  }
}

export default App;
