import {ethers} from 'ethers';

const provider = new ethers.providers.Web3Provider(ethereum);

// INFURA ENDPOINT
const INFURA_ENDPOINT = 'https://mainnet.infura.io/v3/0a5962cadda0464ca24a6f2db13f8d76';
const providerJson = new ethers.providers.JsonRpcProvider(INFURA_ENDPOINT);

export default async function addContract(id, contract, arbiter, beneficiary, value) {
  const appButtonId = `approve-${id}`;
  const revButtonId = `revert-${id}`;

  const container = document.getElementById("container");
  container.innerHTML += createHTML(appButtonId, revButtonId, arbiter, beneficiary, value);

  //const latestblock = await providerJson.getBlockNumber();
  //const block = await providerJson.getblock(latestblock);

  contract.on('Approved', () => {
    document.getElementById(appButtonId).className = "complete";
    document.getElementById(appButtonId).innerText = "✓ It's been approved!";
    //document.getElementById(appButtonId).innerText = block.number;
    document.getElementById(revButtonId).className = "complete";
    document.getElementById(revButtonId).innerText = "";
  });

  contract.on('Revert', () => {
    document.getElementById(revButtonId).className = "complete";
    document.getElementById(revButtonId).innerText = "✓ It's been revert!";
    document.getElementById(appButtonId).className = "complete";
    document.getElementById(appButtonId).innerText = "";
  });

  document.getElementById(appButtonId).addEventListener("click", async () => {
    const signer = provider.getSigner();
    await contract.connect(signer).approve();
  });

  document.getElementById(revButtonId).addEventListener("click", async () => {
    const signer = provider.getSigner();
    await contract.connect(signer).revert();
  });
}

function createHTML(appButtonId, revButtonId, arbiter, beneficiary, value) {
  return `
    <div class="existing-contract">
      <ul className="fields">
        <li>
          <div> Arbiter </div>
          <div> ${arbiter} </div>
        </li>
        <li>
          <div> Beneficiary </div>
          <div> ${beneficiary} </div>
        </li>
        <li>
          <div> Value </div>
          <div> ${ethers.utils.formatUnits(value, "ether")} ETH </div>
        </li>
        <div class="button" id="${appButtonId}">
          Approve
        </div>
        <div class="button" id="${revButtonId}">
          Revert
        </div>
      </ul>
    </div>
  `;
}
