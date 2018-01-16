import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x8Eb3Eb8f37Ece7aA6FEC98C97764689578611882',
);

export default instance;
