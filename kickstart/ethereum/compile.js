const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');
// build path
const buildPath = path.resolve(__dirname, 'build');
// delete if exist
fs.removeSync(buildPath);
// campaign.sol path
const campaignPath = path.resolve(__dirname, 'contracts', 'Campaign.sol');
// Read campaign.sol
const source = fs.readFileSync(campaignPath, 'utf8');
// Compile both contracts with solidity compiler
const output = solc.compile(source, 1).contracts;
// Write output to the build directory
fs.ensureDirSync(buildPath);
// check all contract in campaign.sol
for (let contract in output) {
  fs.outputJsonSync(
    path.resolve(buildPath, contract.replace(':', '') + '.json'),
    output[contract],
  );
}
