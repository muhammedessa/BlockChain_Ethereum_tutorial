const BookStore = artifacts.require("./BookStore.sol");

module.exports = function(deployer) {
  deployer.deploy(BookStore);
};
