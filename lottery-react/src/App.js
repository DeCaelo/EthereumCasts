import React, { Component } from 'react';
import './App.css';
import web3 from './web3';
import lottery from './lottery';
import { Button, Field, Control, Input } from 'reactbulma';

class App extends Component {
  state = {
    manager: '',
    players: [],
    balance: '',
    value: '',
  };

  async componentDidMount() {
    // console.log(lottery);
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getPlayers().call();
    // console.log(web3);
    const balance = await web3.eth.getBalance(lottery.options.address);

    this.setState({ manager, players, balance });
  }

  render() {
    return (
      <div className="lottery">
        <h2>Lottery Contract</h2>
        <p>
          This contract is managed by <span>{this.state.manager}</span>
        </p>
        <p>
          There are currently {this.state.players.length} people entered,
          competing to win {web3.utils.fromWei(this.state.balance, 'ether')}{' '}
          ether!
        </p>
        <hr />
        <h4>Want to try your luck?</h4>
        <Field hasAddons>
          <label>Amount of ether to enter:</label>
          <Control>
            <Input
              placeholder="Amount of ether"
              value={this.state.value}
              onChange={event => this.setState({ value: event.target.value })}
            />
          </Control>
          <Control>
            <Button info>Enter</Button>
          </Control>
        </Field>
      </div>
    );
  }
}

export default App;
