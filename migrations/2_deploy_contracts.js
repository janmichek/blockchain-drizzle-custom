const CustomStorage = artifacts.require("CustomStorage");

module.exports = function(deployer) {
  deployer.deploy(CustomStorage);
};
