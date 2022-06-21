require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

const fs = require('fs');
// const infuraId = fs.readFileSync(".infuraid").toString().trim() || "";

task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337
    },
    goerli: {
      url: "https://polygon-mainnet.g.alchemy.com/v2/Mw3v9Tpm1uiiBNGv6dcKX6OL54sq6GoM",
      accounts: [ "84f28c07f9e7b8d81fcea887e8afcbc7058a57370912bda10de6f94a337134eb" ]
    }
  },
  etherscan:{
    apiKey: {
      polygon: 'V4JBUMI5QVWN1GK8FWTTHFPIPK9YR62V8E'
    }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};