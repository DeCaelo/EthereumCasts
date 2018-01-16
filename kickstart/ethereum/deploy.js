const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const compiledFactory = require('./build/CampaignFactory.json');

const provider = new HDWalletProvider(
  // account mnemonic
  'certain hungry ripple recall vehicle subway myth kitten song page repair knee',
  // infura url
  'https://rinkeby.infura.io/vetUIoaE0kpbIU2N9vvn',
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log('Attempting to deploy from account', accounts[0]);

  const result = await new web3.eth.Contract(
    JSON.parse(compiledFactory.interface),
  )
    .deploy({ data: compiledFactory.bytecode })
    .send({ gas: '1000000', from: accounts[0] });

  console.log('Contract deployed to', result.options.address);
};
deploy();

// lc@iMac-de-LC ~/Desktop/www/EthereumCasts/kickstart/ethereum (master●)$ node deploy.js                                   [2.4.2]
// Attempting to deploy from account 0x1694F3e94a56310F68f88a25374Af51b9cf2af71
// Contract deployed to 0x8Eb3Eb8f37Ece7aA6FEC98C97764689578611882
