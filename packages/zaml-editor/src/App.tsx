import React, { Component } from 'react';
import './App.css';
import Editor from './Editor';
import contract from './sample/contract';

interface State {
  value: string;
}

class App extends Component<{}, State> {

  state = {
    value: contract,
  };

  render() {
    const { value } = this.state;
    return (
      <div className="App">
        <Editor value={value} onChange={newValue => this.setState({ value: newValue })} />
      </div>
    );
  }
}

export default App;
