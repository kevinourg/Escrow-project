import {ethers} from 'ethers';
import deploy from './deploy';
import addContract from './addContract';
import loadContract from './loadContract';
import "./index.scss";

const server = 'http://localhost:50700';

let contracts = 0;
async function newContract() {
  const beneficiary = document.getElementById("beneficiary").value;
  const arbiter = document.getElementById("arbiter").value;
  const value = ethers.utils.parseUnits(document.getElementById("wei").value, "ether");
  const contract = await deploy(arbiter, beneficiary, value);
  addContract(++contracts, contract, arbiter, beneficiary, value);
  const req = `${server}/send/${arbiter}/${beneficiary}/${ethers.utils.formatUnits(value, "ether")}`;
  const request = new Request(req, { method: 'POST' });
  try {
    await fetch(request);
  }
  catch(err) {
    console.log(err);
  }
}



document.getElementById("deploy").addEventListener("click", newContract);
loadContract();
