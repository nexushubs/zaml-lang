import React, { Component } from 'react';
import './App.scss';
import Editor from './Editor/Editor';
import contract from './sample/contract';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Editor defaultSource={contract} />
      </div>
    );
  }
}

export default App;
