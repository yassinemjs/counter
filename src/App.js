import React, { Component } from 'react';

import Counter from './containers/Counter/Counter';
import './App.css';
import { hamdi } from './components/hamdi';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Counter />
       <hamdi/>
      </div>
    );
  }
}

export default App;
