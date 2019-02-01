import React, { Component } from 'react';
import cat from './cat.png';
import ChatBar from './components/ChatBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={cat} className="App-logo" alt="cat" />
          <ChatBar />
          <p>
            Cats must be destroyed.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
