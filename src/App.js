import React from 'react';
import CardExampleCard from './display/ui'
let web3 = require('./utils/initWeb3')
let contractIns = require('./eth/ticketIns')
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            manager : '',
            winner : '',
            round : 0,
            banlance:0,
            account:'',
        }
    }
    async componentWillMount() {

        let accounts = await web3.eth.getAccounts()
        let manager = await contractIns.methods.manager().call()
        let winner = await contractIns.methods.winner().call()
        let round = await contractIns.methods.round().call()
        let banlance = await contractIns.methods.getbalance().call()

        console.log(accounts)
        this.setState({
            manager,
            winner,
            round,
            banlance,
            account: accounts[0],
        })
    }
    play = async () => {
        await contractIns.methods.play().send({
          from: this.state.account,
          gas: '3000000',
          value:500,
        })
    }
    
    render() {
        return (

            <div>
                <CardExampleCard
                    manager = {this.state.manager}
                    winner = {this.state.winner}
                    round = {this.state.round}
                    banlance = {this.state.banlance}
                    account = {this.state.account}
                    play = {this.play}
                />
          </div>
      );
  }
}

export default App;
