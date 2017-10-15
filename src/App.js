import React, { Component } from 'react';
import './App.css';

import Messages from './components/Messages'
import Toolbar from './components/Toolbar'
import data from './data/messages'



class App extends Component {

  render() {
    return (
      <div>
      <Toolbar />
        <Messages messages={data}/>
      </div>
    );
  }
}

export default App;
