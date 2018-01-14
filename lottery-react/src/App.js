import React, { Component } from 'react';
import './App.css';
import web3 from './web3';
import lottery from './lottery';

class App extends Component {
  state = {
    manager: '',
    players: [],
    balance: '',
    value: '',
    message: '',
  };

  async componentDidMount() {
    // console.log(lottery);
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getPlayers().call();
    console.log(web3.eth);
    const balance = await web3.eth.getBalance(lottery.options.address);

    this.setState({ manager, players, balance });
  }

  onSubmit = async event => {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();

    this.setState({ message: 'Waiting on transaction success ...' });

    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(this.state.value, 'ether'),
    });

    this.setState({ message: 'You have been entered!' });
  };

  onClick = async event => {
    const accounts = await web3.eth.getAccounts();

    this.setState({ message: 'Waiting on transaction success ...' });

    await lottery.methods.pickWinner().send({
      from: accounts[0],
    });

    this.setState({ message: 'A winner has been picked!' });
  };

  render() {
    return (
      <div className="lottery">
        <h2>Lottery Contract</h2>
        <p>
          This contract is managed by <span>{this.state.manager}</span>
        </p>
        <p>
          There are currently <span>{this.state.players.length} people</span>{' '}
          entered, competing to win{' '}
          <span>{web3.utils.fromWei(this.state.balance, 'ether')} ether!</span>
        </p>
        <form onSubmit={this.onSubmit}>
          <h4>Want to try your luck?</h4>
          <div className="InputAddOn">
            <input
              placeholder="Enter Amount of ether > 0.01"
              className="InputAddOn-field"
              value={this.state.value}
              onChange={event => this.setState({ value: event.target.value })}
            />
            <button className="InputAddOn-item">Enter</button>
          </div>
        </form>
        <h4>Ready to pick a winner?</h4>
        <button className="InputAddOn-item" onClick={this.onClick}>
          Click to Pick a winner!
        </button>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}

export default App;
