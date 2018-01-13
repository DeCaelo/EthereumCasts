import React, { Component } from 'react';
import './App.css';
import lottery from './lottery';

class App extends Component {
  state = {
    manager: '',
  };

  async componentDidMount() {
    const manager = await lottery.methods.manager().call();

    this.setState({ manager });
  }

  render() {
    return (
      <div className="lottery">
        <h2>Lottery Contract</h2>
        <p>
          This contract is managed by <span>{this.state.manager}</span>
        </p>
      </div>
    );
  }
}

export default App;
