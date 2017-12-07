import React, { Component } from 'react';
// import router from './router';

import MatDatePicker from './components/Material-UI/MatDatePicker'
import MatAppBar from './components/Material-UI/MatAppBar'
// import MatCompleted from './components/Material-UI/MatCompleted'
// import Header from './components/Header/Header'

import './reset.css'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MatAppBar/>
        <MatDatePicker/>
      </div>
    );
  }
}

export default App;
