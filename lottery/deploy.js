const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    // account mnemonic
    'certain hungry ripple recall vehicle subway myth kitten song page repair knee',
    // infura url
    'https://rinkeby.infura.io/vetUIoaE0kpbIU2N9vvn'
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode })
        .send({ gas: '1000000', from: accounts[0] });

    console.log(interface);
    console.log('Contract deployed to', result.options.address);
};
deploy();

// node deploy.js              [2.4.2]
// Attempting to deploy from account 0xcF01971DB0CAB2CBeE4A8C21BB7638aC1FA1c38c
// Contract deployed to 0x39c322984d25d2523CB0A5010bb92911CD0f126F