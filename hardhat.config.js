require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-ganache");


const { expect } = require("chai");

module.exports = {
  solidity: "0.8.18",
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts"
  },
  mocha: {
    timeout: 40000
  }
}
