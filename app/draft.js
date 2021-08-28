const ethers = require('ethers');

// INFURA ENDPOINT
const infura = 'https://rinkeby.infura.io/v3/0a5962cadda0464ca24a6f2db13f8d76';
const providerJson = new ethers.providers.JsonRpcProvider(infura);

async function testBlock() {
  const latestblock = await providerJson.getBlockNumber();
  const block = await providerJson.getBlock(latestblock);
  //console.log(latestblock);
  console.log(block);
  
  return latestblock;
}

testBlock();
