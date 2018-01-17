import Web3 from 'web3';

let web3;
// check if it's browser and if metamask have injected web3
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // We are in the browser and metamask is running.
  web3 = new Web3(window.web3.currentProvider);
} else {
  // We are in the server or the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/vetUIoaE0kpbIU2N9vvn',
  );
  web3 = new Web3(provider);
}

export default web3;

// https://github.com/MetaMask/faq/blob/master/detecting_metamask.md#web3-deprecation
