import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  '0x998A238886d217A1e3b1Be9731Da7a62Ee38b46d',
);

export default instance;
