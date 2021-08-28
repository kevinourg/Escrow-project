# Escrow-project
Decentralized Escrow Application
This is an Escrow Dapp built with Hardhat.

Project Layout
There are four top-level folders:

/app - contains the front-end application
/contracts - contains the solidity contract
/tests - contains tests for the solidity contract
/server - contains a simple server to keep contracts in memory
Setup
Install dependencies in the top-level directory with npm install.

After you have installed hardhat locally, you can use commands to test and compile the contracts, among other things. To learn more about these commands run npx hardhat help.

Compile the contracts using npx hardhat compile. The artifacts will be placed in the /app folder, which will make it available to the front-end. This path configuration can be found in the hardhat.config.js file.

Front-End
To run the front-end application move into the app folder and run parcel index.html.

You can learn more about Parcel here.
