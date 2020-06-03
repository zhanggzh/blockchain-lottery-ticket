let {bytecode,interface} = require('./compile')
let Web3 = require('web3')
let Hdwallet = require('truffle-hdwallet-provider')
let word = 'umbrella milk invite hazard pulse cool easily until hobby intact bracket neck'
let url = 'https://ropsten.infura.io/v3/036c2684a0f64050b28ab6be439d3b83'
let web3 = new Web3()
let provider = new Hdwallet(word,url)
web3.setProvider(provider)
let contract = new web3.eth.Contract(JSON.parse(interface))
let deploy = async () => {
    let account =await web3.eth.getAccounts()
    let instance = await contract.deploy({
        data :bytecode,
    }).send({
        from:account[0],
        gas:'3000000'
    })
    console.log(instance.options.address)
}
deploy()
