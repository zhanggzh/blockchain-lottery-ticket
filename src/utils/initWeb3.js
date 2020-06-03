let Web3 = require('web3')

//这里是一个坑，新版小狐狸默认不能获取账户地址，需申请权限。。。
window.addEventListener('load', async () => {
    // Modern dapp browsers...
    if (window.ethereum) {
        let ethereum = window.ethereum;
        window.web3 = new Web3(ethereum);
        try {
            // Request account access if needed
            await ethereum.enable();
            // Acccounts now exposed
            web3.eth.sendTransaction({/* ... */});
        } catch (error) {
            // User denied account access...
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        // Acccounts always exposed
        web3.eth.sendTransaction({/* ... */});
    }
    // Non-dapp browsers...
    else {
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
});
let web3 = new Web3()
web3.setProvider(window.web3.currentProvider)



module.exports = web3